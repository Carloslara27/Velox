function VxTimepicker( { label, name, id, className, min, max, value, icon } ) {
     return (
          <div className="w-full">
               <label for={id ?? ""} className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${label?.class}`}>{label?.text}</label>
               <div className="relative">
                    <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                         {icon ? icon : <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-miterlimit="10" strokeWidth="32" d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"></path><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 128v144h96"></path></svg>}
                    </div>
                    <input type="time" id={id ?? ""} name={name ?? ""} className={`bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`} min={min ?? ""} max={max ?? ""} value={value ?? ""} />
               </div>
          </div>
     );
}

export default VxTimepicker;