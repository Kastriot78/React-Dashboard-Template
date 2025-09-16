import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ item, isOpen, onClick, hasSubmenu, currentPath }) => {
    return (
        <li>
            {hasSubmenu ? (
                <button
                    onClick={onClick}
                    className={`menu-item group ${isOpen ? 'menu-item-active' : 'menu-item-inactive'
                        } cursor-pointer lg:justify-start w-full flex items-center justify-between gap-3 rounded-lg px-3 py-2`}
                >
                    <span className="menu-item-icon-size">
                        {item.icon}
                    </span>
                    <span className="menu-item-text">{item.title}</span>
                    {hasSubmenu && (
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 20 20"
                            fill="none"
                            className={`ml-auto w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                                }`}
                        >
                            <path
                                d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </button>
            ) : (
                <Link
                    to={item.path}
                    className={`menu-item group ${currentPath === item.path ? 'menu-item-active' : 'menu-item-inactive'
                        } cursor-pointer w-full flex items-center gap-3 rounded-lg px-3 py-2`}
                >
                    <span className="menu-item-icon-size">
                        {item.icon}
                    </span>
                    <span className="menu-item-text">{item.title}</span>
                </Link>
            )}

            {hasSubmenu && item.subItems && (
                <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'h-auto' : 'h-0'
                        }`}
                >
                    <ul className='mt-2 space-y-1 ml-9'>
                        {item.subItems.map((subItem, index) => (
                            <li key={index}>
                                <Link
                                    to={subItem.path}
                                    className={`menu-dropdown-item px-3 py-2 rounded-lg w-full flex items-center ${currentPath === subItem.path
                                            ? 'menu-dropdown-item-active'
                                            : 'menu-dropdown-item-inactive'
                                        }`}
                                >
                                    {subItem.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </li>
    );
};

export default MenuItem;