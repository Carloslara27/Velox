"use client"
import { motion } from "framer-motion";
function VxProgress({ data, label, className }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className={`mb-1 text-base font-medium dark:text-white ${label?.class}`}>{label?.text}</div>
      <div className={`w-full bg-gray-200 rounded-full dark:bg-gray-700 ${className}`}>
        <motion.div
          className={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full ${data?.class}`}
          style={{ width: data?.percentage }}
          initial={{ width: "0%" }}
          animate={{ width: data?.percentage }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 10 }}
        >
          {data?.label}
        </motion.div>
      </div>
    </div>
  );
}

export default VxProgress;
