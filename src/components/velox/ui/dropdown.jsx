"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function VxDropdown({ type, btn, menu, children }) {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        if (type === "click") {
            setDropdownVisible(!dropdownVisible);
        } else {
            setDropdownVisible(true);
        }
    };

    const closeDropdown = () => {
        setDropdownVisible(false);
    };

    const handleMouseEnter = () => {
        if (!type || type === false || type === "hover") {
            setDropdownVisible(true);
        }
    };

    const handleMouseLeave = () => {
        if (!type || type === false || type === "hover") {
            setDropdownVisible(false);
        }
    };

    return (
        <div className='relative w-fit'>
            <button
                id="dropdownHoverButton"
                onClick={toggleDropdown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${btn?.class ?? ""} text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex gap-2`}
                type="button"
            >
                {btn?.text}
                {!btn?.icon ? (
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                ) : (
                    btn?.icon
                )}
            </button>

            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: dropdownVisible ? 1 : 0, y: dropdownVisible ? 0 : -10 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                id="dropdownHover"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 `}
            >
                {children ? children : (
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                        {menu?.map((item, index) => (
                            <li key={index}>
                                <a href="#" className="flex gap-2 items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={closeDropdown}>
                                    {item?.icon}
                                    {item?.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </motion.div>
        </div>
    );
}

export default VxDropdown;
