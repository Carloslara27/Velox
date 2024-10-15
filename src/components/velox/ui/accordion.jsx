"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function VxAccordion({ accordion, className }) {
    const [openSection, setOpenSection] = useState(null);

    const handleAccordionClick = (index) => {
        setOpenSection(index === openSection ? null : index);
    };

    return (
        <div className={`flex flex-col ${className}`}>
            {accordion?.map((item, index) => (
                <div key={index} className='w-full h-fit'>
                    <h2 id="accordion-collapse-heading-1">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                            onClick={() => handleAccordionClick(index)}
                            aria-expanded={openSection === index}
                            aria-controls="accordion-collapse-body-1"
                        >
                            {item?.icon}
                            <span>{item?.title}</span>
                            <motion.svg
                                data-accordion-icon
                                className={`w-3 h-3 shrink-0`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                                animate={{ rotate: openSection === index ? 0 : 180 }}
                                transition={{ duration: 0.3 }}
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                            </motion.svg>
                        </button>
                    </h2>
                    <motion.div
                        id="accordion-collapse-body-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: openSection === index ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className={`relative p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${openSection === index ? 'block' : 'hidden'}`}
                    >
                        {item?.bodyContent}
                    </motion.div>
                </div>
            ))}
        </div>
    );
}

export default VxAccordion;
