"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function VxTooltip( { position, btn, custom, children, className,classTooltip } ) {
     const [showTooltip, setShowTooltip] = useState( false );
     const positionBtn = position != "top" ? "top-[103%]" : "bottom-[102%]";
     return (
          <div className={`relative h-fit ${className}`}>
               {custom ? <div
                    onMouseEnter={() => setShowTooltip( true )}
                    onMouseLeave={() => setShowTooltip( false )}
                    type="button"
                    className={`${custom?.class}`}
               > {custom?.children}</div> : <button
                    onMouseEnter={() => setShowTooltip( true )}
                    onMouseLeave={() => setShowTooltip( false )}
                    type="button"
                    className={`flex gap-2 items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${btn?.class}`}
               >
                    {btn?.text}
                    {btn?.icon}
               </button>

               }

               {/* {showTooltip && ( */}
               <motion.div
                    id="tooltip-default"
                    role="tooltip"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: showTooltip ? 1 : 0, y: showTooltip ? 0 : -10 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute left-0 w-fit z-10 visible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700 ${positionBtn} ${classTooltip}`}
               >
                    {children}
               </motion.div>
               {/* )} */}
          </div>
     );
}

export default VxTooltip;
