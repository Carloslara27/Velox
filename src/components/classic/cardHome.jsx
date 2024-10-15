import { Separator } from "@/components/(shadcn components)/ui/separator";
import { HiArrowNarrowRight } from "react-icons/hi";

function CardHome({value,title,textLink,icon,colorIcon}) {
     return (
          <div className="flex flex-col p-3 w-full sm:w-fit sm:min-w-[330px] h-fit rounded-lg shadow-lg bg-white">
               <div className="flex gap-3 items-center">
                    <span className={`w-[50px] h-[50px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-xl text-white p-2 flex items-center justify-center ${colorIcon}`} >{icon}</span>
                    <div className="flex flex-col gap-1">
                         <p className="text-xl font-bold">{value}</p>
                         <span className="text-sm text-zinc-400">{title}</span>
                    </div>
               </div>
               <Separator className="w-full border-dashed border-[1px] my-2" />
               <a href="#" className="flex items-center justify-between">
                    <p className="text-xs text-zinc-400 font-semibold">{textLink}</p>
                    <HiArrowNarrowRight />
               </a>
              
          </div>
     );
}

export default CardHome;