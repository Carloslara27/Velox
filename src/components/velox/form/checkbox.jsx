"use client"
import { useState } from 'react';
import './css/checkbox.css';
function VxCheckbox( { label, value, disabled = false, checked, name, required = false, className, id } ) {
     let [checkedInput, setCheckedInput] = useState( checked )
     return (
          <>
               <div className={`flex items-center ${className}`}>
                    <input id={id ?? ""} checked={checkedInput} disabled={disabled} type="checkbox" value={value ?? ""} name={name ?? ""} className="cursor-pointer  w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required={required} />
                    <label for={id ?? ""} className="cursor-pointer  ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
               </div>
          </>
     );
}

export default VxCheckbox;

