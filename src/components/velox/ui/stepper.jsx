import { stretch } from "@amcharts/amcharts4/.internal/core/utils/Math";
import { motion } from 'framer-motion';

let colorActive = "text-blue-600 dark:text-blue-500";
function VxStepper( { type, stepper, className } ) {
     return (
          <>
               {/* ------------------------ default ---------------------- */}
               {
                    !type &&
                    <ol className={`flex items-center font-medium text-center ${className}`}>
                         {stepper && stepper.map( ( item, index ) => {
                              if ( stretch.length - 1 != index ) {

                                   return ( <motion.li className={`flex md:w-full gap-2 items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700  ${item?.active ? item?.colorActive ? item.colorActive : colorActive : ""}`}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        key={index}>
                                        <span className={`flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 ${item?.icon?.class ?? ""}`}>
                                             {item?.icon?.icon ?? ""}
                                             <span className={`hidden sm:inline-flex sm:ms-2 text-nowrap ${item?.label?.text?.class ?? ""}`}>{item?.label?.text ?? ""}</span>
                                        </span>

                                   </motion.li> )
                              } else {
                                   return (
                                        <motion.li className={`flex gap-2 items-center ${item?.active ? item?.colorActive ? item.colorActive : colorActive : ""}`}
                                             initial={{ opacity: 0, y: -10 }}
                                             animate={{ opacity: 1, y: 0 }}
                                             transition={{ duration: 0.3, delay: index * 0.1 }}
                                             key={index}>
                                             {item?.icon?.icon ?? ""}
                                             <span className={`me-2 text-nowrap ${item?.label?.class}`}>{item?.label?.text ?? ""}</span>
                                        </motion.li>
                                   )
                              }
                         } )}

                    </ol >

               }
               {/* ------------------------ breadcrumb --------------------------- */}
               {type?.includes( "breadcrumb" ) && <ol className={`flex items-center w-fit p-3 space-x-2 text-sm font-medium text-center  bg-white border border-gray-200 rounded-lg shadow-sm  dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse ${className}`}>

                    {stepper && stepper.map( ( item, index ) => {
                         if ( stretch.length - 1 != index ) {

                              return ( <motion.li className={`flex items-center  ${item?.active ? item?.colorActive ? item.colorActive : colorActive : ""}`}
                                   initial={{ opacity: 0, y: -10 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.3, delay: index * 0.1 }}
                                   key={index}>
                                   <span className={`flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 ${item?.icon?.class ?? ""}`}>
                                        {item?.icon?.icon ?? ""}
                                        <span className={`hidden sm:inline-flex sm:ms-2 text-nowrap ${item?.label?.text?.class ?? ""}`}>{item?.label?.text ?? ""}</span>
                                   </span>
                                   <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                                   </svg>
                              </motion.li> )
                         } else {
                              return (
                                   <motion.li className={`flex items-center ${item?.active ? item?.colorActive ? item.colorActive : colorActive : ""}`}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        key={index}>
                                        {item?.icon?.icon ?? ""}
                                        <span className={`me-2 text-nowrap ${item?.label?.class}`}>{item?.label?.text ?? ""}</span>
                                   </motion.li>
                              )
                         }
                    } )}


               </ol>}
               {/* -------------------------- Detailed ---------------------------- */}
               {type?.includes( "detailed" ) &&
                    <ol className={`items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse ${className}`}>

                         {stepper && stepper.map( ( item, index ) => {

                              return ( <motion.li className={`flex items-center  ${item?.active ? item?.colorActive ? item.colorActive : colorActive : ""}`}
                                   initial={{ opacity: 0, y: -10 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.3, delay: index * 0.1 }}
                                   key={index}>
                                   <span className={`flex items-center justify-center w-8 h-8  ${item?.active ? "border border-blue-600 rounded-full shrink-0 dark:border-blue-500" : "border border-black rounded-full shrink-0 dark:border-black-500"} ${item?.class ?? ""}`}>
                                        {item?.icon?.icon ?? ""}
                                   </span>
                                   <span className="ml-2">
                                        <h3 className={`font-medium leading-tight text-nowrap ${item?.label?.class ?? ""} `}>{item?.label?.text ?? ""}</h3>
                                        <p className={`text-nowrap ${item?.label?.class}`}>{item?.info ?? ""}</p>
                                   </span>

                              </motion.li> )

                         } )}
                    </ol>

               }

          </>


     );
}

export default VxStepper;