"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function VxModal({ btn, btnAccept, btnCancel, titleModal, showModal, children,className }) {
    const [visibleModal, setVisibleModal] = useState(showModal || false);

    const toggleModal = () => {
        setVisibleModal(!visibleModal);
    };

    const acceptTerms = () => {
        // Aquí puedes agregar la lógica para aceptar los términos
        setVisibleModal(false);
    };

    const declineTerms = () => {
        // Aquí puedes agregar la lógica para rechazar los términos
        setVisibleModal(false);
    };

    return (
        <>
            {btn && (
                <button
                    onClick={toggleModal}
                    className={`flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${btn?.class}`}
                    type="button"
                >
                    {btn?.icon} {btn?.text}
                </button>
            )}

            <AnimatePresence>
                {visibleModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        id="default-modal"
                        aria-hidden="true"
                        className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50"
                    >
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative p-4 w-full max-w-2xl"
                        >
                            <div className={`relative bg-white rounded-lg shadow ${className}`}>
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{titleModal ?? ''}</h3>
                                    <button
                                        type="button"
                                        onClick={acceptTerms}
                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-hide="default-modal"
                                    >
                                        <svg
                                            className="w-3 h-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 14"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                            />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                {children}
                                {/* <!-- Modal footer --> */}
                                <div className="flex items-center p-4 border-t border-gray-200 rounded-b">
                                    <button
                                        onClick={acceptTerms}
                                        type="button"
                                        className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${btnAccept?.class}`}
                                    >
                                        {btnAccept?.text}
                                    </button>
                                    <button
                                        onClick={declineTerms}
                                        type="button"
                                        className={`ml-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 rounded-lg text-sm px-5 py-2.5 ${btnCancel?.class}`}
                                    >
                                        {btnCancel?.text}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default VxModal;
