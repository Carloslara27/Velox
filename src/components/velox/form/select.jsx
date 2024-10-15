"use client"
import { useState } from "react";

function VxSelect( { label, option, id, className, name, type } ) {
     return (
          <>
              {type != "underline" && <div className="w-full d-flex flex-colr">
                    <label for={id ?? ""} className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${label?.class}`}>{label?.text}</label>
                    <select id={id ?? ""} name={name ?? ""} className={`cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}>
                         {option.map( ( item, index ) => {
                              return (
                                   item?.selected ? <option value={item?.value ?? ""} key={index} selected>{item.text}</option> : <option value={item?.value ?? ""} key={index}>{item?.icon} {item.text}</option>
                              )
                         } )}
                    </select>
               </div>}

               {
                    type == "underline" &&
                    <div className="w-full d-flex flex-colr">
                         <label for={id ?? ""} className={`sr-only ${label?.class}`}>{label?.text}</label>
                         <select id={id ?? ""} name={name ?? ""} className={` cursor-pointer block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer ${className}`}>
                              {option.map( ( item, index ) => {
                                   return (
                                        item?.selected ? <option value={item?.value ?? ""} key={index} selected>{item.text}</option> : <option value={item?.value ?? ""} key={index}>{item?.icon} {item.text}</option>
                                   )
                              } )}
                         </select>
                    </div>

               }

          </>
     );
}

export default VxSelect;