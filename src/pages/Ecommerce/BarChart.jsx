
import React, { useEffect, useState } from 'react';
import { Column } from '@ant-design/plots';

const BarChart = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        setDarkMode(localStorage.getItem('darkMode') === 'true');
        const handleDarkModeChange = (e) => setDarkMode(e.detail.darkMode);
        window.addEventListener('darkModeChanged', handleDarkModeChange);
        return () => window.removeEventListener('darkModeChanged', handleDarkModeChange);
    }, []);

    const data = [
        { month: 'January', avgRainfall: 30, city: 'London' },
        { month: 'February', avgRainfall: 40, city: 'London' },
        { month: 'March', avgRainfall: 50, city: 'London' },
        { month: 'May', avgRainfall: 50, city: 'London' },
        { month: 'Jun', avgRainfall: 50, city: 'London' },
        { month: 'Jul', avgRainfall: 50, city: 'London' },
        { month: 'Aug.', avgRainfall: 50, city: 'London' },
        { month: 'January', avgRainfall: 60, city: 'Paris' },
        { month: 'January', avgRainfall: 60, city: 'New York' },
        { month: 'February', avgRainfall: 80, city: 'New York' },
        { month: 'March', avgRainfall: 90, city: 'London' },
        { month: 'March', avgRainfall: 90, city: 'New York' },
        { month: 'March', avgRainfall: 90, city: 'London' },
        { month: 'January', avgRainfall: 20, city: 'Paris' },
        { month: 'February', avgRainfall: 30, city: 'Paris' },
        { month: 'March', avgRainfall: 40, city: 'Paris' },
        { month: 'March', avgRainfall: 40, city: 'London' },
    ];

    const config = {
        data,
        xField: 'month',
        yField: 'avgRainfall',
        colorField: 'city',
        group: true,
        style: {
            inset: 5,
        },
        legend: {
            position: 'right',
            layout: 'vertical',
        },
        theme: darkMode ? "dark" : "light",
        onReady: ({ chart }) => {
            try {
                chart.on('afterrender', () => {
                    chart.emit('legend:filter', {
                        data: { channel: 'color', values: ['London'] },
                    });
                });
            } catch (e) {
                console.error(e);
            }
        },
    };

    return <Column {...config} height={250} />;
};

export default BarChart;