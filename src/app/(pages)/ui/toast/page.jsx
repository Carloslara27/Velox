"use client"
import Card from "@/components/velox/ui/card";
import VxToast from "@/components/velox/ui/toast";
import { useState } from "react";
function ToastPage() {
     const [closedToastExample1, setClosedToastExample1] = useState( false );
     const handleClosedToast = () => setClosedToastExample1( true );
     return (
          <div className="pb-20">
               <Card header={{ title: "Toast", class: "mb-2" }}>
                    <div className="grid lg:grid-cols-2 gap-2 items-center">
                         {/* 1 */}
                         <Card header={{ title: "Toast - Sample", class: "mb-2" }} className="h-full p-4">
                              <div className="flex gap-1 items-center relative h-[200px]">
                                   {/*  */}
                                   <VxToast
                                        id="mi-toast"
                                        toast={{
                                             message: "Item moved successfully.",
                                             icon: <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                             </svg>
                                        }}
                                   />
                                   {/* 2 */}

                                   <VxToast
                                        id="mi-toast2"
                                        toast={{
                                             message: "Message sent successfully.",
                                             icon: <svg class="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9" />
                                             </svg>
                                        }}
                                   />

                                   {/* 3 */}
                                   <VxToast
                                        id="mi-toast2"
                                        toast={{
                                             message: "Message sent successfully.",

                                        }}
                                   />
                              </div>
                         </Card>
                         {/* 2 */}
                         <Card header={{ title: "Toast - Custom", class: "mb-2" }} className="h-full relative p-4">
                              <div className="flex gap-1 items-center relative h-[200px]">
                                   <VxToast>

                                        <div class="w-full max-w-xs p-4text-gray-900">

                                             <div class="flex items-center">
                                                  <div class="relative inline-block shrink-0">
                                                       <img class="w-12 h-12 rounded-full" src="/example.jpeg" alt="Jese Leos image" />
                                                       <span class="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                                                            <svg class="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
                                                                 <path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor" />
                                                                 <path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor" />
                                                            </svg>
                                                            <span class="sr-only">Message icon</span>
                                                       </span>
                                                  </div>
                                                  <div class="ms-3 text-sm font-normal">
                                                       <div class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</div>
                                                       <div class="text-sm font-normal">commented on your photo</div>
                                                       <span class="text-xs font-medium text-blue-600 dark:text-blue-500">a few seconds ago</span>
                                                  </div>
                                             </div>
                                        </div>
                                   </VxToast>

                                   {/* 2 */}
                                   <VxToast>
                                        <div class="ms-3 text-sm font-normal">
                                             <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
                                             <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>
                                             <a href="#" class="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Reply</a>
                                        </div>
                                        
                                   </VxToast>
                              </div>
                         </Card>
                         {/* 3 */}

                    </div>
               </Card>
               {/* 3 */}
               <Card header={{ title: "Toast - Sample", class: "mb-2 dark:text-white" }} className="mt-4 ">
                    <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                         <span className="text-blue-300 text-[.7rem] font-bold "></span>
                         <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                              {`                                     <VxToast
                                        id="mi-toast2"
                                        toast={{
                                             message: "Message sent successfully.",
                                             icon: <svg class="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9" />
                                             </svg>
                                        }}
                                   />
                         `}
                         </code>
                    </pre>
               </Card>

               {/* 4 */}
               <Card header={{ title: "Toast - Custom", class: "mb-2 dark:text-white" }} className="mt-4 ">
                    <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                         <span className="text-blue-300 text-[.7rem] font-bold "></span>
                         <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                              {`                  <VxToast className="absolute left-0 top-2">
                    <div class="w-full max-w-xs p-4text-gray-900">

                         <div class="flex items-center">
                              <div class="relative inline-block shrink-0">
                                   <img class="w-12 h-12 rounded-full" src="/example.jpeg" alt="Jese Leos image" />
                                   <span class="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                                        <svg class="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
                                             <path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 
                                             7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 
                                             17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 
                                             4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor" />
                                             <path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 
                                             10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 
                                             13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 
                                             13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" 
                                             fill="currentColor" />
                                        </svg>
                                        <span class="sr-only">Message icon</span>
                                   </span>
                              </div>
                              <div class="ms-3 text-sm font-normal">
                                   <div class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</div>
                                   <div class="text-sm font-normal">commented on your photo</div>
                                   <span class="text-xs font-medium text-blue-600 dark:text-blue-500">a few seconds ago</span>
                              </div>
                         </div>
                    </div>
                    </VxToast>
                         `}
                         </code>
                    </pre>
               </Card>
          </div>

     );
}

export default ToastPage;