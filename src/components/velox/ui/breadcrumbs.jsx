"use client"
import React from 'react';
import { motion } from 'framer-motion';

function VxBreadcrumbs( { type, data, className } ) {
     return (
          <>
               {/* 1 */}
               {type == "1" &&

                    <nav className={`flex ${className}`} aria-label="Breadcrumb">
                         <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                              {data.map( ( item, index ) => {
                                   return (
                                        <motion.li
                                             initial={{ opacity: 0 }}
                                             animate={{ opacity: 1 }}
                                             whileHover={{ scale: 1.1, transition: { duration: 0.7 } }}
                                             whileTap={{ scale: 0.6, transition: { duration: 0.7 } }}
                                             transition={{ duration: 0.7, delay: index * 20 / 100 }}
                                             className="inline-flex items-center" key={index}>
                                             <a href={item?.url} className={`inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white ${item?.class ?? ""}`}>
                                                  {item?.icon}
                                                  {item?.title}
                                             </a>
                                        </motion.li>
                                   )
                              } )}

                         </ol>
                    </nav>
               }
               {/* 2 */}
               {type == "2" &&
                    <nav className={`w-fit flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ${className}`} aria-label="Breadcrumb">
                         <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                              {data.map( ( item, index ) => {
                                   return (
                                        <motion.li
                                             initial={{ opacity: 0 }}
                                             animate={{ opacity: 1 }}
                                             whileHover={{ scale: 1.1, transition: { duration: 0.7 } }}
                                             whileTap={{ scale: 0.6, transition: { duration: 0.7 } }}
                                             transition={{ duration: 0.7, delay: index * 20 / 100 }}
                                             className={`inline-flex items-center ${item?.class ?? ""}`} key={index}>
                                             <a href={item?.url} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                                  {index == 0 ? item?.icon : <svg className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                                  </svg>}
                                                  {item?.title}
                                             </a>
                                        </motion.li>
                                   )
                              } )}
                         </ol>
                    </nav>

               }
          </>
     );
}

export default VxBreadcrumbs;