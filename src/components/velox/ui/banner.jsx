"use client"
import Card from "./card";
import { motion } from 'framer-motion';
function VxBanner( { className, children } ) {
     return (
          <>
               <motion.div id="sticky-banner"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`w-fit fixed  z-50 flex justify-between p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 ${className}`}>
                    {children}
               </motion.div>

          </>
     );
}

export default VxBanner;