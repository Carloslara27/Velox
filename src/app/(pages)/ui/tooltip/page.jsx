import Card from "@/components/velox/ui/card";
import VxTooltip from "@/components/velox/ui/tooltip";
import { FiCopy } from "react-icons/fi";

function TooltipPage() {

     return ( <div className="pb-20">
          <Card header={{ title: "Tooltip", class: "mb-2" }}>
               <div className="grid lg:grid-cols-2 gap-2 items-center">
                    {/* 1 */}
                    <Card header={{ title: "Tooltip - Hover", class: "mb-2" }} className="h-full p-4">
                         <div className="flex gap-1 items-center relative h-[200px]">
                              {/* 1 */}
                              <VxTooltip btn={{ text: "Tooltip Hover" }}>
                                   <p className="text-center">Hover</p>
                              </VxTooltip>
                              {/* 2 */}
                              <VxTooltip btn={{ text: "Tooltip Hover", class: 'bg-orange-600 hover:bg-orange-800' }}>
                                   <div className="w-fit flex items-center">
                                        <svg className="w-[30px] h-[30px] text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9" />
                                        </svg>
                                        <div className="ps-4 text-sm font-normal">Message sent successfully.</div>
                                   </div >
                              </VxTooltip>
                              {/* 3 */}
                              <VxTooltip btn={{ text: "Tooltip Hover", class: 'bg-green-600 hover:bg-green-800' }}>
                                   <div className="px-4 py-3 text-sm text-gray-100 dark:text-white">
                                        <div>Bonnie Green</div>
                                        <div className="font-medium truncate">name@flowbite.com</div>
                                   </div>
                              </VxTooltip>
                         </div>
                    </Card>
                    {/* 2 */}
                    <Card header={{ title: "Tooltip - Icon", class: "mb-2" }} className="h-full p-4">
                         <div className="flex gap-1 items-center relative h-[200px]">
                              {/* 1 */}
                              <VxTooltip btn={{
                                   text: "Tooltip Hover", class: 'bg-purple-600 hover:bg-purple-800', icon: <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"></path>
                                   </svg>
                              }}>
                                   <div className="text-sm font-normal text-center">Tooltip icon.</div>
                              </VxTooltip>
                              {/* 2 */}
                              <VxTooltip position="top" btn={{
                                   text: "Tooltip Hover", class: 'bg-orange-600 hover:bg-orange-800', icon: <FiCopy/>
                              }}>
                                   <div className="text-sm font-normal text-center">Tooltip icon.</div>
                              </VxTooltip>
                         </div>
                    </Card>

               </div>
          </Card>
          {/* 1 */}
          <Card header={{ title: "Tooltip - Sample", class: "mb-2 dark:text-white" }} className="mt-4">
               <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                    <span className="text-blue-300 text-[.7rem] font-bold "></span>
                    <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                         {`                              <VxTooltip btn={{ text: "Tooltip Hover" }}>
                                   <p className="text-center">Hover</p>
                              </VxTooltip>
                    `}
                    </code>
               </pre>
          </Card>
          {/* 2 */}
          <Card header={{ title: "Tooltip - Icon", class: "mb-2 dark:text-white" }} className="mt-4">
               <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                    <span className="text-blue-300 text-[.7rem] font-bold "></span>
                    <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                         {`                              <VxTooltip 
                              position="top"
                              btn={{
                                             text: "Tooltip Hover", 
                                             class: 'bg-orange-600 hover:bg-orange-800', 
                                             icon: <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                       fill="none" viewBox="0 0 18 20">
                                                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 
                                                       3.97M1 10a8 8 0 0 1 14.947-3.97"></path>
                                                  </svg>
                                        }}>
                                             <div className="text-sm font-normal text-center">Tooltip top - icon.</div>
                                   </VxTooltip>
                    `}
                    </code>
               </pre>
          </Card>


     </div>
     )
}

export default TooltipPage;