import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MenuItem from './MenuItem';

const Menu = ({ title, items }) => {
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(null);
    const [forceOpenedIndex, setForceOpenedIndex] = useState(null);

    useEffect(() => {
        let matchedIndex = null;
        items.forEach((item, index) => {
            if (item.subItems?.some(sub => sub.path === location.pathname)) {
                matchedIndex = index;
            }
        });
        setForceOpenedIndex(matchedIndex);
        if (matchedIndex === null) {
            setActiveIndex(null); 
        }
    }, [location.pathname, items]);

    const handleItemClick = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
        if (forceOpenedIndex === index) {
            setForceOpenedIndex(null);
        }
    };

    const isMenuOpen = (index) =>
        activeIndex === index || forceOpenedIndex === index;

    return (
        <div>
            <h2 className="mb-4 text-xs uppercase leading-[20px] text-gray-400">
                {title}
            </h2>
            <ul className="flex flex-col gap-4">
                {items.map((item, index) => (
                    <MenuItem
                        key={index}
                        item={item}
                        isOpen={isMenuOpen(index)}
                        onClick={() => handleItemClick(index)}
                        hasSubmenu={!!(item.subItems && item.subItems.length > 0)}
                        currentPath={location.pathname}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Menu;
