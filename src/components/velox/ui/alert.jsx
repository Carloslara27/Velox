
function VxAlert({title,description,bgCard,icon,border}) {
     return (
          <div className="w-full flex p-3 rounded-md justify-start gap-2" style={{backgroundColor:bgCard ?? "",border:border ?? ""}}>
               {icon && <span className={`flex items-center justify-center p-2  rounded-full h-fit w-fit ${icon?.class ?? ""}`} style={{backgroundColor:icon?.fill ?? ""}}>{icon?.icon ?? ""}</span>}
               <div className="flex gap-1 flex-col">
                    <h3 className={`text-sm ${title?.class}`}>{title?.text ?? ""}</h3>
                    <p className={`text-xs  ${description?.class}`}>{description?.text ?? ""}</p>
               </div>
          </div>
     );
}

export default VxAlert;