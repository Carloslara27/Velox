import { Progress } from "@/components/(shadcn components)/ui/progress";
import { MdAnalytics } from "react-icons/md";

function CardDashboard({className,titleCard,textCard,percentage,colorLine,titleClass,icon,iconClass}) {
     return (
          <div className={`flex flex-col p-3 bg-black w-full max-w-[300px] rounded-lg shadow-lg ${className}`}>
               <div className="w-full flex justify-between gap-10">
                    <div className="flex flex-col gap-1">
                         <p className={`font-semibold text-xl ${titleClass}`}>{titleCard ?? ""}</p>
                         <span className="text-zinc-400 text-xs">{textCard ?? ""}</span>
                    </div>
                    <span className={`p-2 h-fit rounded-lg text-zinc-200 ${iconClass}`}>{icon ?? ""}</span>
               </div>
               <div className="flex justify-between text-zinc-500 text-xs font-semibold mt-5 mb-1">
                    <span>0%</span>
                    <span>{percentage ?? ""}%</span>
               </div>
               <Progress value={percentage ?? 0} className="w-[100%] bg-zinc-600 h-[5px] mb-2" colorLine={colorLine ?? "bg-zinc-100"} />
          </div>
     );
}

export default CardDashboard;