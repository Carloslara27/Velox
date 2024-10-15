function VxTextarea( { label, id, name, className, placeholder, type, commentContent } ) {
     return (
          <>
               {
                    type != "comment" && <div className="w-full flex flex-col">
                         <label for={id ?? ""} className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${label?.class}`}>{label?.text}</label>
                         <textarea id={id ?? ""} name={name ?? ""} rows="4" className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`} placeholder={placeholder ?? ""}></textarea>
                    </div>
               }
               {
                    type == "comment" &&
                    <div className="w-full">
                         <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                              <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                   <label for="comment" className="sr-only">Your comment</label>
                                   <textarea id="comment" rows="4" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required ></textarea>
                              </div>
                              <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">

                                   {commentContent ?? ""}
                              </div>
                         </div>
                    </div>
               }
          </>
     );
}

export default VxTextarea;