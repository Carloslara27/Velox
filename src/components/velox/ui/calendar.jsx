"use client"
import React from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { motion } from 'framer-motion';

function VxCalendar( {
     mode,
     min,
     defaultMonth = "",
     hidden,
     selected,
     onSelect,
     footer,
     modifiersStyles,
     modifiersClassNames,
     css,
     id,
     className
} ) {
     const [selectedCalendar, setSelectedCalendar] = React.useState( selected );

     let footerCalendar = "";
     if ( mode == "single" ) {
          footerCalendar = !footer?.showDate ? footer?.text : selectedCalendar ? `${footer?.text} - ${format( selectedCalendar, 'PP' )}` : footer?.text;
     }
     if ( mode == "multiple" ) {
          footerCalendar = !footer?.showDate ? footer?.text : selectedCalendar ? `${footer?.text}:  ${selectedCalendar?.length}` : footer?.text;
     }

     return (
          <motion.div
               className={className}
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.5 }}
          >
               <style>{css}</style>
               <DayPicker
                    min={min}
                    mode={mode ?? "single"}
                    hidden={hidden}
                    defaultMonth={defaultMonth}
                    selected={selectedCalendar}
                    onSelect={onSelect ?? setSelectedCalendar}
                    footer={footerCalendar}
                    modifiersStyles={modifiersStyles}
                    modifiersClassNames={modifiersClassNames}
                    id={id}

               />
          </motion.div>
     );
}
export default VxCalendar;