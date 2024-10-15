import {
     Avatar,
     AvatarFallback,
     AvatarImage,
} from "@/components/(shadcn components)/ui/avatar"
import { useEffect, useState } from "react";

function VxAvatar( { img, badge, width, height, variant, letter,className } ) {
     const [config, setConfig] = useState( {badge:` w-[${badge?.width ?? ""}px] h-[${badge?.height ?? ""}px] bg-[${badge?.color ?? ""}] `,avatar:`w-[${width}px] h-[${height}px] rounded-${variant} `} );
     useEffect(() => {
          setConfig({badge:` w-[${badge?.width ?? ""}px] h-[${badge?.height ?? ""}px] `,avatar:`w-[${width}px] h-[${height}px] rounded-${variant} `});
        }, [width, height, variant,badge]);
     return (
          <div className="relative w-fit h-fit">
               <Avatar className={`${config?.avatar} relative`}>
                    <AvatarImage src={img ?? ""} className={className ?? ""} />
                    <AvatarFallback className={letter?.class ?? ""}>{letter?.text  ?? ""}</AvatarFallback>
               </Avatar>
               <span className={`absolute inline-block rounded-full right-0 bottom-0 ${config?.badge}`} style={{backgroundColor:badge?.color,width:badge?.width,height:badge?.height}}></span>
          </div>
     );
}

export default VxAvatar;
