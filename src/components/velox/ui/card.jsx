"use client"
function Card( { children, header, className } ) {
     return (
          <div className={`flex flex-col p-3 gap-2 rounded-lg shadow-lg  dark:bg-[#01051A] ${className}`}>
               {
                    header && (
                         <div className={`block w-full p-2 border-b-[1px] border-zinc-400  ${header?.class?.includes( 'border-' ) ? header?.class : " border-dashed"}`}>
                              {header?.html ? header.html : <h2 className="text-lg font-semibold dark:text-white">{header?.title}</h2>}
                         </div>
                    )
               }
               {children}
          </div>
     );
}

export default Card;