"use client"
import React from 'react';
import { motion } from 'framer-motion';
function VxBadge( { text,icon, color, bgColor, className } ) {
     return (
          <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={`w-fit font-medium me-2  rounded  ${className}`}
               style={{ color: color ?? "", backgroundColor: bgColor ?? "" }}> {icon ?? ""} {text ?? ""}</motion.span>
     );
}

export default VxBadge;