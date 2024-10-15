"use client"
import { motion } from "framer-motion";
import Card from "@/components/velox/ui/card";
function VxButton( { text, iconLeft, iconRight, bgColor, color, type, className } ) {
  return (
    <motion.button
      type="button"
      className={`w-fit border  border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100  ${className?.includes(' p-') || className?.includes('px-') || className?.includes('py-')  ? ' ' : 'px-5 py-2.5'} text-center inline-flex items-center me-2 mb-2 ${className?.includes('rounded') ? ' ' : 'rounded-lg '} ${className}`}
      style={type !== "outline" ? { backgroundColor: bgColor ?? "", color: color ?? "" } : {}}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95 }}
    >
      {iconLeft ?? ""}
      {text ?? ""}
      {iconRight ?? ""}
    </motion.button>
  );
}

export default VxButton;
