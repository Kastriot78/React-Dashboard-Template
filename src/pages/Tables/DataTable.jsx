import React, { useState, useEffect } from 'react';
import { Button, Flex, Table, ConfigProvider, theme } from 'antd';

const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age' },
    { title: 'Address', dataIndex: 'address' },
];

const dataSource = Array.from({ length: 46 }).map((_, i) => ({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
}));

const DataTable = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Initial load
        setDarkMode(localStorage.getItem('darkMode') === 'true');

        const handleDarkModeChange = (e) => {
            console.log('Dark mode changed to:', e.detail.darkMode); // Add this for debugging
            setDarkMode(e.detail.darkMode);
        };

        window.addEventListener('darkModeChanged', handleDarkModeChange);

        return () => {
            window.removeEventListener('darkModeChanged', handleDarkModeChange);
        };
    }, []);

    const start = () => {
        setLoading(true);
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };

    const onSelectChange = newSelectedRowKeys => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const hasSelected = selectedRowKeys.length > 0;
    return (
        <ConfigProvider
            theme={{
                algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
                components: {
                    Table: {
                        headerBg: darkMode ? '#101828' : '#fafafa',
                        borderColor: darkMode ? '#1d2939' : '#f0f0f0',
                        headerColor: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.88)',
                        rowHoverBg: darkMode ? '#1d2939' : '#fafafa', // Hover color
                        colorBgContainer: darkMode ? '#101828' : '#fff', // Main background
                        colorFillAlter: darkMode ? '#101828' : '#fafafa', // Alternate row color
                        colorText: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.88)', // Text color
                        colorBorderSecondary: darkMode ? '#1d2939' : '#f0f0f0', // Border color
                    },
                },
            }}
        >
            <Flex gap="middle" vertical>
                <Flex align="center" gap="middle">
                    <Button
                        type="primary"
                        onClick={start}
                        disabled={!hasSelected}
                        loading={loading}
                    >
                        Reload
                    </Button>
                    {hasSelected ? (
                        <span style={{ color: darkMode ? '#fff' : 'inherit' }}>
                            Selected {selectedRowKeys.length} items
                        </span>
                    ) : null}
                </Flex>
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={dataSource}
                    style={{
                        '--table-row-hover-bg': darkMode ? '#1d2939' : '#fafafa', // CSS variable fallback
                    }}
                    className={darkMode ? 'dark-table' : ''}
                />
            </Flex>
        </ConfigProvider>
    );
};

export default DataTable;