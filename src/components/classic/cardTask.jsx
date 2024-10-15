import { Badge } from "@/components/(shadcn components)/ui/badge";
import { Button } from "@/components/(shadcn components)/ui/button"
import {
     Card,
     CardContent,
     CardHeader,

} from "@/components/(shadcn components)/ui/card"
import { Checkbox } from "@/components/(shadcn components)/ui/checkbox"

function CardTask({textHead,textContent,icon,statusColor,statusText}) {
     return (
          <Card className="w-full lg:w-[80%] mt-3">
               <CardHeader>
                    <div className="w-full justify-between flex flex-col lg:flex-row lg:items-center gap-2">
                         <div className="items-top flex space-x-2 ">
                              <Checkbox id="terms1" />
                              <div className="grid gap-1.5 leading-none">
                                   <label
                                        htmlFor="terms1"
                                        className="text-black text-sm font-medium leading-none peer-disabled:cursor-not-allowed dark:text-white peer-disabled:opacity-70"
                                   >
                                        {textHead ?? ""}
                                   </label>
                                   <div className="flex flex-col lg:flex-row lg:items-center gap-1">
                                        <img src={icon ?? ""} alt="logo" className="w-[15px] h-[15px] object-cover" />
                                        <p className="text-zinc-500 text-xs text-muted-foreground">
                                            {textContent ?? ""}
                                        </p>
                                   </div>
                              </div>
                         </div>
                         <Badge variant="destructive" className={`w-fit ${statusColor ?? ""}`}>{statusText ?? ""}</Badge>
                    </div>
               </CardHeader>
          </Card>
     );
}

export default CardTask;