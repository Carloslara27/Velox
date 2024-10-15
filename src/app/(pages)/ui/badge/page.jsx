import Card from "@/components/velox/ui/card";
import VxBadge from "@/components/velox/ui/badge";

function Badge() {
     return (
          <>
               {/* ----- Badge ----- */}
               <div className="pb-20">
                    <Card header={{ title: "Badge", class: "mb-2" }}>
                         <div className="grid lg:grid-cols-2 gap-2 items-center">
                              {/* 1 */}
                              <Card header={{ title: "Colors", class: "mb-2" }} className="h-full relative p-4">
                                   <div className="flex gap-1 items-center">
                                   <VxBadge
                                             text="Badge 1" color="#AA7B8D" bgColor="#F3CCDE" className="rounded-xl px-2.5 py-1.5 font-semibold"
                                        />
                                        <VxBadge
                                             text="Badge 1" color="#896DA0" bgColor="#F3D7FF" className="px-2.5 py-1.5"
                                        />
                                        <VxBadge
                                             text="Badge 1" color="#769AA6" bgColor="#E8FFFF" className="rounded-sm px-2.5 py-1.5"
                                        />
                                        <VxBadge
                                             text="Badge 1" color="#50978C" bgColor="#D1FFFA" className="px-2.5 py-1.5"
                                        />
                                        <VxBadge
                                             text="Badge 1" color="#7C9150" bgColor="#F2FFCD" className="p-3"
                                        />
                                        <VxBadge
                                             text="Badge 1" color="#AD9E67" bgColor="#FFF9C5" className="p-4"
                                        />
                                   </div>
                              </Card>
                              {/* 2 */}
                              <Card header={{ title: "Rounded", class: "mb-2" }} className="h-full relative p-4">
                                   <div className="flex gap-1 items-center">
                                        <VxBadge
                                             text="Badge 1" color="#AA7B8D" bgColor="#F3CCDE" className="rounded-xl px-2.5 py-1.5 font-semibold"
                                        />
                                        <VxBadge
                                             text="Badge 1" color="#896DA0" bgColor="#F3D7FF" className="rounded-xl px-2.5 py-1.5"
                                        />
                                        <VxBadge
                                             text="Badge 1" color="#769AA6" bgColor="#E8FFFF" className="rounded-xl px-2.5 py-1.5"
                                        />
                                        <VxBadge
                                             text="Badge 1" color="#50978C" bgColor="#D1FFFA" className="rounded-xl px-2.5 py-1.5"
                                        />
                                        <VxBadge
                                             text="Badge 1" color="#7C9150" bgColor="#F2FFCD" className="rounded-xl px-2.5 py-1.5"
                                        />
                                        <VxBadge
                                             text="Badge 1" color="#AD9E67" bgColor="#FFF9C5" className="rounded-xl px-2.5 py-1.5"
                                        />
                                   </div>
                              </Card>
                         </div>
                    </Card>
                    {/* 2 */}
                    <Card header={{ title: "Code", class: "mb-2 dark:text-white" }} className="mt-4 ">
                         <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                              <span className="text-blue-300 text-[.7rem] font-bold "></span>
                              <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                                   {`                                    <VxBadge
                                             text="Badge 1" 
                                             color="#fff" 
                                             bgColor="#a2d2ff" 
                                             className="px-2.5 py-1.5"
                                        />`}
                              </code>
                         </pre>
                    </Card>

               </div>


          </>
     );
}

export default Badge;