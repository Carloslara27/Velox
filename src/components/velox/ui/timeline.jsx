import React from 'react';
import { motion } from 'framer-motion';

function VxTimeLine({ type, data }) {
    return (
        <>
            {/* 1 */}
            {type === "1" && (
                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    {data?.map((item, i) => (
                        <motion.li
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="mb-10 ms-4"
                            key={i + 'a'}
                        >
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item?.subtitle}</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item?.title}</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item?.description}</p>
                            {item.children}
                        </motion.li>
                    ))}
                </ol>
            )}
            {/* 2 */}
            {type === "2" && (
                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    {data?.map((item, i) => (
                        <motion.li
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="mb-10 ms-6"
                            key={i + 'b'}
                        >
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                {item.icon}
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{item?.title} {item.status && <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">{item.status}</span>}</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item?.subtitle}</time>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item?.description}</p>
                            {item.children}
                        </motion.li>
                    ))}
                </ol>
            )}
            {/* 3 */}
            {type === "3" && (
                <ol className="items-center sm:flex">
                    {data?.map((item, i) => (
                        <motion.li
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="relative mb-6 sm:mb-0"
                            key={i + 'c'}
                        >
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                    {item.icon}
                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pe-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item?.title}</h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item?.subtitle}</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">{item?.description}</p>
                            </div>
                        </motion.li>
                    ))}
                </ol>
            )}
        </>
    );
}

export default VxTimeLine;
