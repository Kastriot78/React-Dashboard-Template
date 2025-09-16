
import React, { useEffect, useState } from 'react';
import { Bar } from '@ant-design/plots';

const SegmentChart = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(localStorage.getItem('darkMode') === 'true');
    const handleDarkModeChange = (e) => setDarkMode(e.detail.darkMode);
    window.addEventListener('darkModeChanged', handleDarkModeChange);
    return () => window.removeEventListener('darkModeChanged', handleDarkModeChange);
  }, []);

  const data = [
    { month: 'Jan', electronics: 3000, fashion: 5000, homeAppliances: 2000, books: 1500 },
    { month: 'Feb', electronics: 4000, fashion: 6000, homeAppliances: 2500, books: 1200 },
    { month: 'Mar', electronics: 3500, fashion: 5500, homeAppliances: 3000, books: 1700 },
    { month: 'Apr', electronics: 3800, fashion: 4500, homeAppliances: 2200, books: 1600 },
  ];

  const transformedData = data.flatMap(item => [
    { month: item.month, category: 'Electronics', value: item.electronics },
    { month: item.month, category: 'Fashion', value: item.fashion },
    { month: item.month, category: 'Home Appliances', value: item.homeAppliances },
    { month: item.month, category: 'Books', value: item.books },
  ]);

  const config = {
    data: transformedData,
    isStack: true,
    xField: 'month',
    yField: 'value',
    seriesField: 'category',
    colorField: 'category',
    theme: darkMode ? "dark" : "light",
    legend: {
      position: 'top-left',
      itemName: {
        style: {
          fill: darkMode ? '#fff' : '#333', 
        },
      },
    },
    meta: {
      category: { alias: 'Product Category' },
      value: { alias: 'Sales Amount' },
    },
    label: {
      position: 'middle',
      style: {
        fill: '#fff', 
        fontWeight: 700,
        fontSize: 12,
        shadowBlur: 2,
        shadowColor: 'rgba(0,0,0,0.5)',
      },
    },
    color: darkMode
      ? ['#fff', '#fff', '#fff', '#fff'] 
      : ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16'], 
    interactions: [{ type: 'element-active' }],
    barBackground: {
      style: {
        fill: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
      },
    },
  };


  return <div style={{
    background: darkMode ? '#101828' : '#fff',
    padding: '16px',
    borderRadius: '8px',
  }}>
    <Bar {...config} height={300} />
  </div>
};

export default SegmentChart;
