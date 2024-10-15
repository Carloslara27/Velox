import Card from "@/components/velox/ui/card";
import VxProgress from "@/components/velox/ui/progress";

function Progress() {
     return (
          <div className="pb-20">
               <Card header={{ title: "Progress", class: "mb-2" }}>
                    <div className="grid lg:grid-cols-2 gap-2 items-center">
                         {/* 1 */}
                         <Card header={{ title: "Progress - Sample", class: "mb-2" }} className="h-full relative p-4">
                              <div className="flex flex-col gap-3 items-center relative h-[200px]">
                                   <VxProgress
                                        data={{ percentage: "50%", class: "bg-red-600" }}
                                        label={{ text: "Xs", class: "text-xs text-red-500" }}
                                   />
                                   <VxProgress
                                        data={{ percentage: "20%" }}
                                        label={{ text: "Xs", class: "text-xs text-blue-500" }}
                                   />
                                   <VxProgress
                                        data={{ percentage: "70%", class: "bg-orange-500 h-[9px]" }}
                                        label={{ text: "Sm", class: "text-xs text-orange-500" }}
                                   />
                                   <VxProgress
                                        data={{ percentage: "70%", class: "bg-yellow-500 h-[15px]" }}
                                        label={{ text: "Lg", class: "text-xs text-yellow-500" }}
                                   />
                              </div>
                         </Card>
                         {/* 2 */}
                         <Card header={{ title: "Progress - Label", class: "mb-2" }} className="h-full p-4">
                              <div className="flex flex-col gap-3 items-center relative h-[200px]">
                                   <VxProgress
                                        data={{ percentage: "50%", label: "50%", class: "bg-red-600" }}
                                        label={{ text: "Xs", class: "text-xs text-red-500" }}
                                   />
                                   <VxProgress
                                        data={{ percentage: "20%", label: "25%" }}
                                        label={{ text: "Xs", class: "text-xs text-blue-500" }}
                                   />
                                   <VxProgress
                                        data={{ percentage: "70%", label: "70%", class: "bg-orange-500" }}
                                        label={{ text: "Xs", class: "text-xs text-orange-500" }}
                                   />
                                   <VxProgress
                                        data={{ percentage: "70%", label: "70%", class: "bg-yellow-500" }}
                                        label={{ text: "Xs", class: "text-xs text-yellow-500" }}
                                   />
                              </div>
                         </Card>

                    </div>
               </Card>
               {/* 3 */}
               <Card header={{ title: "Progress - Sample", class: "mb-2 dark:text-white" }} className="mt-4 ">
                    <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                         <span className="text-blue-300 text-[.7rem] font-bold "></span>
                         <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                              {`                                   <VxProgress
                                        data={{ percentage: "70%", class: "bg-yellow-500 h-[15px]" }}
                                        label={{ text: "Lg", class: "text-xs text-yellow-500" }}
                                   />
                         `}
                         </code>
                    </pre>
               </Card>
               {/* 2 */}
               <Card header={{ title: "Progress - Label", class: "mb-2 dark:text-white" }} className="mt-4 ">
                    <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                         <span className="text-blue-300 text-[.7rem] font-bold "></span>
                         <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                              {`                                    <VxProgress
                                        data={{ percentage: "50%", label: "50%", class: "bg-red-600" }}
                                        label={{ text: "Xs", class: "text-xs text-red-500" }}
                                   />
                        `}
                         </code>
                    </pre>
               </Card>

          </div>

     );
}

export default Progress;