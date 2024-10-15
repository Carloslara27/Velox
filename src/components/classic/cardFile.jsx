import { Badge } from "@/components/(shadcn components)/ui/badge";
import { Button } from "@/components/(shadcn components)/ui/button";
import {
     Card,
     CardContent,
     CardDescription,
     CardFooter,
     CardHeader,
     CardTitle,
} from "@/components/(shadcn components)/ui/card";
import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuGroup,
     DropdownMenuItem,
     DropdownMenuLabel,
     DropdownMenuSeparator,
     DropdownMenuShortcut,
     DropdownMenuTrigger,
} from "@/components/(shadcn components)/ui/dropdown-menu"
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaFile } from "react-icons/fa6";

function CardFile({nameFile,dateFile,statusFile,imgFile,statusColor}) {
     return ( 
          <div className="flex gap-2 mt-3 w-fit dark:bg-[#01051A] rounded-lg">
          <Card className="w-[260px] lg:w-[350px] dark:border-none">
               <CardHeader className="h-[140px] bg-zinc-200 dark:bg-[#01051A] overflow-hidden">
                    <img src={imgFile??"https://templates.business-in-a-box.com/imgs/400px/3381.png"} alt="file" className="w-80 object-cover" />
               </CardHeader>
               <CardContent>

               </CardContent>
               <CardFooter className="flex justify-between gap-2 items-center  w-full">
                    <div className="flex flex-col items-start">
                         <div className="flex gap-1 items-center">
                              <FaFile className="text-xl text-zinc-500" />
                              <p className="text-xs lg:text-normal dark:text-zinc-200">{nameFile ?? ""}</p>
                         </div>
                         <div className="flex gap-1 mt-1 items-center">
                              <span className="text-[.6rem] lg:text-xs text-zinc-500">{dateFile ?? ""}</span>
                              <Badge variant="destructive" className={`text-xs lg:text-normal ${statusColor}`}>{statusFile ?? ""}</Badge>
                         </div>
                    </div>
                    {/* menu file */}
                    <DropdownMenu>
                         <DropdownMenuTrigger asChild>
                              <Button variant="outline" className="dark:text-zinc-500"><BsThreeDotsVertical /></Button>
                         </DropdownMenuTrigger>
                         <DropdownMenuContent className="z-50 w-56 bg-zinc-100 dark:text-white dark:bg-zinc-950">
                              <DropdownMenuLabel>Example</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuGroup className="dark:bg-zinc-950 dark:text-white">
                                   <DropdownMenuItem>
                                        {/* <User className="mr-2 h-4 w-4" /> */}
                                        <span>Download</span>
                                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                   </DropdownMenuItem>
                                   <DropdownMenuItem>
                                        {/* <CreditCard className="mr-2 h-4 w-4" /> */}
                                        <span>View</span>
                                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                   </DropdownMenuItem>
                                   <DropdownMenuItem>
                                        {/* <Settings className="mr-2 h-4 w-4" /> */}
                                        <span>More</span>
                                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                   </DropdownMenuItem>
                              </DropdownMenuGroup>

                         </DropdownMenuContent>
                    </DropdownMenu>

               </CardFooter>
          </Card>
     </div>
      );
}

export default CardFile;