import React, { useEffect, useState } from 'react'
import DropDownButtons from '../../utils/DropDownButtons';
import TaskItem from './TaskItem';
import DashboardNav from '../../utils/DashboardNav';

const TASKS_STORAGE_KEY = 'kanban-tasks';

const TasksList = () => {
    const dropdownItems = [
        { label: 'Delete', onClick: () => console.log('Delete clicked') },
        { label: 'Clear All', onClick: () => console.log('Clear All clicked') }
    ];

    const defaultTasks = {
        todo: [
            { id: 2, title: 'Solve the Dribble prioritization issue with the team', category: 'Marketing', dueDate: 'Tomorrow', comments: 2, userAvatar: '/images/user-02.jpg' },
            { id: 1, title: 'Finish user onboarding', category: 'Marketing', dueDate: 'Tomorrow', comments: 1, userAvatar: '/images/user-03.jpg' }
        ],
        completed: [
            { id: 8, title: 'Do some projects on React Native with Flutter', category: 'Marketing', dueDate: 'Feb 12, 2027', comments: 1, userAvatar: '/images/user-04.jpg' },
            { id: 9, title: 'Design marketing assets', category: 'Marketing', dueDate: 'Feb 12, 2027', comments: 1, userAvatar: '/images/user-03.jpg' },
            { id: 10, title: 'Kanban Flow Manager', category: 'Marketing', dueDate: 'Feb 12, 2027', comments: 1, userAvatar: '/images/user-02.jpg' }
        ]
    };

    // Load tasks from localStorage or use default
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
        return savedTasks ? JSON.parse(savedTasks) : defaultTasks;
    });

    const [draggedItem, setDraggedItem] = useState(null);
    const [draggedOverItem, setDraggedOverItem] = useState(null);
    const [currentList, setCurrentList] = useState('');
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);

    // Prevent scrolling while dragging on mobile
    useEffect(() => {
        const preventScroll = (e) => {
            if (isDragging) {
                e.preventDefault();
            }
        };

        document.addEventListener('touchmove', preventScroll, { passive: false });
        return () => document.removeEventListener('touchmove', preventScroll);
    }, [isDragging]);

    const handleDragStart = (e, taskId, listName) => {
        setIsDragging(true);
        setDraggedItem(taskId);
        setCurrentList(listName);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.currentTarget);
    };

    const handleDragOver = (e, taskId) => {
        e.preventDefault();
        if (draggedItem !== taskId) {
            setDraggedOverItem(taskId);
        }
    };

    const handleDrop = (e, targetList) => {
        e.preventDefault();
        moveTask(targetList);
    };

    // Touch event handlers for mobile
    const handleTouchStart = (e, taskId, listName) => {
        setIsDragging(true);
        setDraggedItem(taskId);
        setCurrentList(listName);
    };

    const handleTouchEnd = (e, targetList) => {
        moveTask(targetList);
    };

    // Common function for moving tasks
    const moveTask = (targetList) => {
        if (!draggedItem) return;

        if (currentList === targetList) {
            // Reorder within same list
            const list = [...tasks[targetList]];
            const draggedIndex = list.findIndex(item => item.id === draggedItem);
            const droppedIndex = list.findIndex(item => item.id === draggedOverItem);

            if (draggedIndex !== -1 && droppedIndex !== -1 && draggedIndex !== droppedIndex) {
                const [removed] = list.splice(draggedIndex, 1);
                list.splice(droppedIndex, 0, removed);

                setTasks(prev => ({
                    ...prev,
                    [targetList]: list
                }));
            }
        } else {
            // Move between lists
            const sourceList = [...tasks[currentList]];
            const targetListCopy = [...tasks[targetList]];
            const draggedIndex = sourceList.findIndex(item => item.id === draggedItem);

            if (draggedIndex !== -1) {
                const [removed] = sourceList.splice(draggedIndex, 1);
                const droppedIndex = targetListCopy.findIndex(item => item.id === draggedOverItem);

                if (droppedIndex === -1) {
                    targetListCopy.push(removed);
                } else {
                    targetListCopy.splice(droppedIndex, 0, removed);
                }

                setTasks(prev => ({
                    ...prev,
                    [currentList]: sourceList,
                    [targetList]: targetListCopy
                }));
            }
        }

        setIsDragging(false);
        setDraggedItem(null);
        setDraggedOverItem(null);
    };

    // Drop zone props for both desktop and mobile
    const dropZoneProps = (listName) => ({
        onDragOver: (e) => e.preventDefault(),
        onDrop: (e) => handleDrop(e, listName),
        onTouchEnd: (e) => handleTouchEnd(e, listName),
        style: {
            minHeight: '50px',
            backgroundColor: draggedItem ? 'rgba(0,0,0,0.05)' : 'transparent'
        }
    });

    // Draggable item props
    const draggableProps = (taskId, listName) => ({
        // Mouse events
        onDragStart: (e) => handleDragStart(e, taskId, listName),
        onDragOver: (e) => handleDragOver(e, taskId),

        // Touch events
        onTouchStart: (e) => handleTouchStart(e, taskId, listName),
        onTouchMove: (e) => isDragging && e.preventDefault(),

        // Common
        draggable: true,
        style: {
            cursor: 'move',
            userSelect: 'none',
            opacity: draggedItem === taskId ? 0.5 : 1,
            transition: 'opacity 0.2s'
        }
    });


    return (
        <div>
            <DashboardNav title="Task List" subTitle="Home" text="Task List" />

            <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
                <div className="p-4 space-y-8 mt-7 dark:border-gray-800 sm:mt-0 xl:p-6">
                    {/* Todo List */}
                    <div {...dropZoneProps('todo')}>
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="flex items-center gap-3 text-base font-medium text-gray-800 capitalize dark:text-white/90">
                                todo
                                <span className="inline-flex rounded-full px-2 py-0.5 text-theme-xs font-medium bg-gray-100 text-gray-700 dark:bg-white/[0.03] dark:text-white/80">
                                    {tasks?.todo?.length}
                                </span>
                            </h3>
                            <div className="relative">
                                <DropDownButtons items={dropdownItems} />
                            </div>
                        </div>
                        {tasks?.todo?.map((task) => (
                            <div key={task.id} {...draggableProps(task.id, 'todo')}>
                                <TaskItem task={task} />
                            </div>
                        ))}
                    </div>

                    {/* Completed List */}
                    <div {...dropZoneProps('completed')}>
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="flex items-center gap-3 text-base font-medium text-gray-800 capitalize dark:text-white/90">
                                completed
                                <span className="inline-flex rounded-full px-2 py-0.5 text-theme-xs font-medium bg-success-50 text-success-700 dark:bg-success-500/15 dark:text-success-500">
                                    {tasks.completed.length}
                                </span>
                            </h3>
                            <div className="relative">
                                <DropDownButtons items={dropdownItems} />
                            </div>
                        </div>
                        {tasks.completed.map((task) => (
                            <div key={task.id} {...draggableProps(task.id, 'completed')}>
                                <TaskItem task={task} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TasksList
