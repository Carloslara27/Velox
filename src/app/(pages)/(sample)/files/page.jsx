import CardFile from "@/components/classic/cardFile";
import { Button } from "@/components/(shadcn components)/ui/button";
import { Separator } from "@/components/(shadcn components)/ui/separator";
// icons
import { CiImport } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
import { MdOutlineLocalPolice } from "react-icons/md";
import { IoFilter } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
function FilesPage() {
     return (
          <div className="w-full pt-3 px-3 dark:bg-zinc-900 h-[94vh]">
               <div className="flex flex-col lg:flex-row lg:justify-between gap-2  lg:items-center">
                    <div className="flex flex-col gap-2 mt-2">
                         <h1 className="text-2xl dark:text-white">My Files</h1>
                         <span className="font-semibold text-sm text-zinc-700 dark:text-zinc-500">22 files</span>
                    </div>
                    <div className="flex flex-col items-end">
                         <Button className="bg-sky-500 text-white font-600 w-fit">
                              <CiImport className="mr-2 h-5 w-5" /> Import File
                         </Button>
                         <div className="flex h-5 items-center space-x-4 text-sm mt-4">
                              <Button variant="ghost" className="flex gap-1 items-center text-zinc-400 hover:text-blue-500"><IoFilter/> Filter</Button>
                              <Separator orientation="vertical" className="bg-zinc-300 w-[1px]  inline" />
                              <Button variant="ghost" className="text-zinc-400 w-fit hover:text-blue-500"><TfiMenuAlt/></Button>
                              <Separator orientation="vertical" className="bg-zinc-300 w-[1px]  inline" />
                              <Button variant="ghost" className="text-zinc-400 w-fit hover:text-blue-500">Last Updated</Button>
                         </div>
                    </div>

               </div>
               <div className="flex flex-col gap-2 mt-5 w-full ">
                    <div className="flex gap-2 items-center">
                         <span className="bg-emerald-300 p-2 rounded-md text-emerald-700"><FaRegCircle /></span>
                         <p className="dark:text-white">Healhcare(2)</p>
                    </div>
                    {/* card files */}
                    <div className="flex flex-wrap gap-2">
                         <CardFile
                              nameFile="Prohaska, Oconner an Hills"
                              dateFile="Last Update 3 days ago"
                              statusFile="Destructive"
                              statusColor="text-purple-700 bg-purple-200"
                              imgFile="https://templates.business-in-a-box.com/imgs/400px/3381.png"
                         />
                         <CardFile
                              nameFile="Langwoth - Ward"
                              dateFile="Last Update 2 days ago"
                              statusFile="Pending"
                              statusColor="text-emerald-700 bg-emerald-200"
                              imgFile="https://imgv2-1-f.scribdassets.com/img/document/394185412/original/3476ae4da5/1708439516?v=1"
                         />
                         <CardFile
                              nameFile="Certificado de Inscripción"
                              dateFile="Last Update 5 days ago"
                              statusFile="Process"
                              statusColor="text-orange-700 bg-orange-200"
                              imgFile="https://conservador.cl/portal/bootstrap/img/documentos/const-sociedad.png"
                         />
                    </div>
               </div>

               {/* legal file */}
               <div className="flex flex-col flex-wrap gap-2 mt-5">
                    <div className="flex gap-2 items-center">
                         <span className="bg-orange-300 p-2 rounded-md text-orange-700"><MdOutlineLocalPolice className="text-xl" /></span>
                         <p className="dark:text-white">Legal(2)</p>
                    </div>
                    {/* card files */}
                    <div className="w-fit flex overflow-x-auto gap-2">
                         <CardFile
                              nameFile="Renovation de poder"
                              dateFile="Last Update 1 days ago"
                              statusFile="Alert"
                              statusColor="text-red-700 bg-red-200"
                              imgFile="https://imgv2-1-f.scribdassets.com/img/document/412590345/original/2bf260f44a/1708518673?v=1"
                         />
                         <CardFile
                              nameFile="University - Consejo"
                              dateFile="Last Update 2 days ago"
                              statusFile="Completed"
                              statusColor="text-emerald-700 bg-emerald-200"
                              imgFile="https://investigacion.unas.edu.pe/imagenes/fondo%20de%20fomento%20de%20la%20investigacion%20formativa%20%20fif.png"
                         />
                    </div>
               </div>
          </div>
     );
}

export default FilesPage;

