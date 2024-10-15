import Card from "@/components/velox/ui/card";
import VxBreadcrumbs from "@/components/velox/ui/breadcrumbs";
import { MdSettings } from "react-icons/md";


function Breadcrumbs() {
     return (
          <>
               {/* ----- Breadcrumbs ----- */}
               <div className="pb-20">
                    <Card header={{ title: "Breadcrumbs", class: "mb-2" }}>
                         <div className="grid lg:grid-cols-2 gap-2 items-center">
                              {/* 1 */}
                              <Card header={{ title: "Type=1", class: "mb-2" }} className="h-full relative p-4">
                                   <VxBreadcrumbs
                                        type="1"
                                        data={[
                                             {
                                                  title: "Home", url: "#", icon: <svg className="w-5 h-5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                       <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                                  </svg>,
                                                  class:"text-xl flex items-center"
                                             },
                                             {
                                                  title: "Settings", url: "#", icon: <MdSettings className="text-2xl" />,
                                                  class:"text-xl flex items-center"
                                             }
                                        ]}
                                        
                                   />
                              </Card>
                              {/* 2 */}
                              <Card header={{ title: "Type=2", class: "mb-2" }} className="h-full relative p-4">
                                   <VxBreadcrumbs
                                        type="2"
                                        data={[
                                             {
                                                  title: "Settings", url: "#", icon: <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                       <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                                  </svg>
                                             },
                                             {
                                                  title: "Home", url: "#", icon: <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                       <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                                  </svg>
                                             }
                                        ]}
                                   />
                              </Card>
                         </div>
                    </Card>
                    {/* 2 */}
                    <Card header={{ title: "Code", class: "mb-2 dark:text-white" }} className="mt-4 ">
                         <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                              <span className="text-blue-300 text-[.7rem] font-bold "></span>
                              <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                                   {`                                  <VxBreadcrumbs
                                        type="2"
                                        data={[
                                             {
                                                  title: "Example 1", 
                                                  url: "/example1", 
                                                  icon: <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                       <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 
                                                       1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                                  </svg>
                                             },
                                             {
                                                  title: "Example 2", 
                                                  url: "#url", 
                                                  icon: <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                       <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 
                                                       1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                                  </svg>
                                             }
                                        ]}
                                   />`}
                              </code>
                         </pre>
                    </Card>

               </div>


          </>
     );
}

export default Breadcrumbs;