import React, { useRef } from 'react';
import useClickOutside from '../hooks/useClickOutside';

const DropDownButtons = ({
    icon = (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.2441 6C10.2441 5.0335 11.0276 4.25 11.9941 4.25H12.0041C12.9706 4.25 13.7541 5.0335 13.7541 6C13.7541 6.9665 12.9706 7.75 12.0041 7.75H11.9941C11.0276 7.75 10.2441 6.9665 10.2441 6ZM10.2441 18C10.2441 17.0335 11.0276 16.25 11.9941 16.25H12.0041C12.9706 16.25 13.7541 17.0335 13.7541 18C13.7541 18.9665 12.9706 19.75 12.0041 19.75H11.9941C11.0276 19.75 10.2441 18.9665 10.2441 18ZM11.9941 10.25C11.0276 10.25 10.2441 11.0335 10.2441 12C10.2441 12.9665 11.0276 13.75 11.9941 13.75H12.0041C12.9706 13.75 13.7541 12.9665 13.7541 12C13.7541 11.0335 12.9706 10.25 12.0041 10.25H11.9941Z"
                fill="currentColor"
            />
        </svg>
    ),
    items = [
        { label: 'View More', onClick: () => { } },
        { label: 'Delete', onClick: () => { } }
    ],
    position = 'right-0 mt-2',
    menuClassName = ''
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = useRef(null);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    useClickOutside(dropdownRef, closeMenu);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                className="dropdown-toggle cursor-pointer"
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                {icon}
            </button>
            <div
                className={`${isOpen ? 'block' : 'hidden'} absolute z-40 ${position} rounded-xl border border-gray-200 bg-white shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark w-40 p-2 ${menuClassName}`}
            >
                {items.map((item, index) => (
                    <button
                        key={index}
                        className="px-4 py-2 text-sm flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300 cursor-pointer"
                        onClick={(e) => {
                            item.onClick(e);
                            closeMenu();
                        }}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DropDownButtons;