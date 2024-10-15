function VxList( { position, items, className } ) {
     return (
          <div className={`flex flex-col gap-1 ${className}`}>
               {items?.map( ( item ) => {
                    return (
                         <div className={`flex gap-1 items-center ${item?.class}`}>
                              {position == "left" ?
                                   <>
                                        {item?.text}
                                        {item?.icon}
                                   </> :
                                   <>
                                        {item?.icon}
                                        {item?.text}
                                   </>
                              }
                         </div>
                    )
               } )}

               
          </div>
     );
}

export default VxList;