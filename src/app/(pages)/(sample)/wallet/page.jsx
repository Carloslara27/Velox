import { Badge } from "@/components/(shadcn components)/ui/badge";
import {
     Table,
     TableBody,
     TableCaption,
     TableCell,
     TableHead,
     TableHeader,
     TableRow,
} from "@/components/(shadcn components)/ui/table"
// icons
import { FaArrowDownLong } from "react-icons/fa6";
import { FcSimCardChip } from "react-icons/fc";
import { MdCircle } from "react-icons/md";

function WalletPage() {
     return (
          <div className="w-full pt-3 px-3 dark:bg-zinc-900 h-[94vh] bg-zinc-100">
               <div className="flex items-center gap-2 mt-2 justify-between">
                    <h1 className="text-2xl dark:text-white">Wallet</h1>
               </div>

               <div className="grid lg:grid-cols-[394px,1fr] gap-10 items-center mt-5">
                    <div className="w-full bg-black rounded-lg p-4 flex flex-col justify-between max-w-[394px] h-full min-h-[200px]">
                         <div className="flex justify-between items-center">
                              <p className="font-bold text-white">CARD</p>
                              <FcSimCardChip className="text-5xl" />
                         </div>
                         <p className="text-white">***** ***** ***** 1234</p>

                         <div className="flex justify-between items-center">
                              <div className="flex flex-col">
                                   <span className="text-zinc-400 text-xs">Number Card</span>
                                   <p className="text-white">6526324818</p>
                              </div>
                              <div className="flex flex-col">
                                   <span className="text-zinc-400 text-xs">Expires</span>
                                   <p className="text-white">12/23</p>
                              </div>
                              <div className="flex flex-col">
                                   <span className="text-zinc-400 text-xs">CVV</span>
                                   <p className="text-white">123</p>
                              </div>
                         </div>
                    </div>
                    <div className="flex flex-col p-3 w-full rounded-lg shadow-lg bg-white px-5  h-full mt-0 dark:bg-[#01051A] dark:text-white">
                         <div className="flex justify-between text-xs text-zinc-400">
                              <p>Main Account</p>
                              <p>Avaliable Funds</p>
                         </div>

                         <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                              <div className="flex flex-col gap-1 ">
                                   <h2 className="mt-2 font-semibold text-lg">First Sevings Account</h2>
                                   <p className="text-zinc-400 text-sm">***** ***** **** 1234</p>
                              </div>
                              <h3 className="flex items-center gap-1 text-3xl font-semibold">68.789,56 <div className="text-xl text-zinc-400">$</div></h3>
                         </div>

                         <div className="flex flex-col lg:flex-row lg:items-center gap-6 mt-6 mb-4">
                              <div className="flex gap-3 items-center">
                                   <div className="p-3 bg-indigo-200 text-indigo-700 rounded-xl text-lg"><FaArrowDownLong /></div>
                                   <div className="flex flex-col">
                                        <h5 className="font-semibold text-lg">3.258,29 $</h5>
                                        <p className="text-zinc-400 text-xs">Perdidas</p>
                                   </div>
                              </div>

                              <div className="flex gap-3 items-center">
                                   <div className="p-3 bg-orange-200 text-orange-600 rounded-xl text-lg"><FaArrowDownLong /></div>
                                   <div className="flex flex-col">
                                        <h5 className="font-semibold text-lg">1.558,20 $</h5>
                                        <p className="text-zinc-400 text-xs">Ingress</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="flex">
                    
                    <div className="flex flex-col p-3 w-full rounded-lg dark:bg-[#01051A] dark:text-white shadow-lg bg-white mt-4">
                         <Table>
                              <TableCaption>A list of your recent invoices.</TableCaption>
                              <TableHeader>
                                   <TableRow>
                                        <TableHead className="w-[100px]">Invoice</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Method</TableHead>
                                        <TableHead className="text-right">Amount</TableHead>
                                   </TableRow>
                              </TableHeader>
                              <TableBody>
                                   <TableRow>
                                        <TableCell className="font-medium">INV001</TableCell>
                                        <TableCell> <Badge variant="1" className="bg-emerald-300 border-none text-emerald-700 text-xs flex items-center gap-1 w-fit"><MdCircle className="text-[.4rem]"/>  Paid</Badge></TableCell>
                                        <TableCell>Credit Card</TableCell>
                                        <TableCell className="text-right">$250.00</TableCell>
                                   </TableRow>
                                   <TableRow>
                                        <TableCell className="font-medium">INV002</TableCell>
                                        <TableCell> <Badge variant="1" className="bg-emerald-300 border-none text-emerald-700 text-xs flex items-center gap-1 w-fit"><MdCircle className="text-[.4rem]"/>  Paid</Badge></TableCell>
                                        <TableCell>Visa Card</TableCell>
                                        <TableCell className="text-right">$50.00</TableCell>
                                   </TableRow>
                                   <TableRow>
                                        <TableCell className="font-medium">INV003</TableCell>
                                        <TableCell> <Badge variant="1" className="bg-orange-300 border-none text-orange-700 text-xs flex items-center gap-1 w-fit"><MdCircle className="text-[.4rem]"/>  Pedding</Badge></TableCell>
                                        <TableCell>Master Card</TableCell>
                                        <TableCell className="text-right">$20.00</TableCell>
                                   </TableRow>
                              </TableBody>
                         </Table>
                    </div>
               </div>
          </div>
     );
}

export default WalletPage;