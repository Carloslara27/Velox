import SparkBarChart from "@/components/classic/chart/SparkBarChart";
import SparklineChart from "@/components/classic/chart/Sparklines";
import { Button } from "@/components/(shadcn components)/ui/button";
import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuItem,
     DropdownMenuLabel,
     DropdownMenuSeparator,
     DropdownMenuTrigger,
     DropdownMenuShortcut
} from "@/components/(shadcn components)/ui/dropdown-menu"
import { BsThreeDotsVertical } from "react-icons/bs";
// icons
import { GoProjectRoadmap } from "react-icons/go";
import { HiArrowTrendingUp } from "react-icons/hi2";

function CardProject({imgUsers=["","",""],name}) {
     return (
          <div className="grid grid-cols-3 lg:flex lg:flex-row gap-2 justify-between items-center p-3 w-full rounded-lg shadow-lg bg-white mt-4 px-10">
               <div className="flex gap-3 h-fit w-[200px]">
                    <span className="text-xl p-2 bg-zinc-400 rounded-md w-fit text-white h-fit"><GoProjectRoadmap /></span>
                    <div className="flex flex-col">
                         <p className="font-bold text-sky-900 text-[1rem] leading-1">{name}</p>
                         <span className="text-xs font-normal text-zinc-400">Marketing</span>
                    </div>
               </div>

               <div className="flex items-center w-[200px]">
                    <img src={imgUsers[0] ?? ""} alt="user1" className="rounded-full w-[36px] h-[36px] object-cover" />
                    <img src={imgUsers[1] ?? ""} alt="user1" className="rounded-full w-[36px] h-[36px] object-cover ml-[-25px]" />
                    <img src={imgUsers[2] ?? ""} alt="user1" className="rounded-full w-[36px] h-[36px] object-cover ml-[-25px]" />
                    <span className="text-xs font-normal text-zinc-400">+5 users</span>

               </div>

               <div className="flex flex-col">
                    <SparklineChart />
                    <p className="text-sm font-semibold flex gap-1 items-center">Top <span className="text-emerald-500 text-sm flex items-center gap-1">12% <HiArrowTrendingUp /></span></p>
               </div>

               <div className="flex flex-col ali">
                    <div className="flex items-center">
                         <SparkBarChart />
                         <p className="text-sm font-semibold">65%</p>
                    </div>
                    <p className="text-sm font-semibold flex gap-1 items-center">Top <span className="text-emerald-500 text-sm flex items-center gap-1"> Score of 100</span></p>
               </div>

               <div className="flex flex-col">
                    <span className="text-xs font-normal text-zinc-400">Storage</span>
                    <p className="font-bold text-sky-900 text-lg">Market Fit</p>
                    <span className="text-emerald-500 text-sm flex items-center gap-1">Owiner</span>
               </div>

               <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                         <Button variant="outline" className="w-fit dark:text-zinc-500"><BsThreeDotsVertical /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="z-50 w-50 dark:text-white dark:bg-zinc-950">
                         <DropdownMenuLabel>Project</DropdownMenuLabel>
                         <DropdownMenuSeparator />
                         <DropdownMenuItem className="cursor-pointer hover:bg-zinc-400">
                              <span>Preview</span>
                         </DropdownMenuItem>
                         <DropdownMenuItem className="cursor-pointer hover:bg-zinc-400">
                              <span>Edit</span>
                         </DropdownMenuItem>
                         <DropdownMenuItem className="cursor-pointer hover:bg-zinc-400">
                              <span>Delete</span>
                         </DropdownMenuItem>
                    </DropdownMenuContent>
               </DropdownMenu>
          </div>
     );
}

export default CardProject;