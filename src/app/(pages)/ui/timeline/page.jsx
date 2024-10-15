"use client"
import Card from "@/components/velox/ui/card";
import VxTimeLine from "@/components/velox/ui/timeline";
import { BsArchive } from "react-icons/bs";

function TimelinePage() {
     return (
          <>
               {/* ----- timeline ----- */}
               <div className="pb-20">
                    <Card header={{ title: "TimeLine", class: "mb-2" }}>
                         <div className="grid lg:grid-cols-2 gap-2 items-center">
                              {/* 1 */}
                              <Card header={{ title: "Type=1", class: "mb-2" }} className="h-full relative p-4">
                                   <VxTimeLine type="1" data={[
                                        { subtitle: "Flowbite Application U", title: "Icon new 2023", description: "las mejores descripciones", children: <></> }
                                   ]} />
                              </Card>
                              {/* 2 */}
                              <Card header={{ title: "Type=2", class: "mb-2" }} className="h-full relative p-4">
                                   <VxTimeLine type="2" data={[
                                        {
                                             subtitle: "2024", title: "Example", description: "Descripcion general de todo", status: "New", icon: <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                             </svg>, children: <></>
                                        }
                                   ]} />
                              </Card>
                              {/* 3 */}
                              <Card header={{ title: "Type=3", class: "mb-2" }} className="h-full relative p-4">
                                   <VxTimeLine type="3" data={[
                                        {
                                             subtitle: "Los mejores cascos", title: "Item", description: "Descripcion general de todo", icon: <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                             </svg>, children: <></>
                                        },
                                        {
                                             subtitle: "2 item", title: "Item", description: "Lorem ipsum dolor sit ...", icon: <BsArchive className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" />, children: <></>
                                        },
                                        {
                                             subtitle: "3 item", title: "Item", description: "lorem in ...", icon: <BsArchive className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" />, children: <></>
                                        },
                                   ]} />
                              </Card>
                         </div>
                    </Card>
                    {/* 2 */}
                    <Card header={{ title: "Code", class: "mb-2 dark:text-white" }} className="mt-4 ">
                         <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                              <span className="text-blue-300 text-[.7rem] font-bold "></span>
                              <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                                   {`                                <VxTimeLine type="1" 
                                   data={[
                                        { subtitle: "sub example 1", title: "Example 1",description:"lorem ...", children: <></> },
                                        { subtitle: "sub example 2", title: "Example 2",description: "lorem ...", children: <></> },
                                   ]} />`}
                              </code>
                         </pre>
                    </Card>
                    {/*  */}
                    <Card header={{ title: "Code", class: "mb-2 dark:text-white" }} className="mt-4 ">
                         <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                              <span className="text-blue-300 text-[.7rem] font-bold "></span>
                              <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                                   {`                                <VxTimeLine type="2" 
                                  data={[
                                   {
                                        subtitle: "Los mejores cascos", 
                                        title: "Este es mi casco", 
                                        description: "Descripcion general de todo", 
                                        status: "New", 
                                        icon: <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                             <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>,   
                                        children: <></> // ---> html
                                   }
                                   ]} />`}
                              </code>
                         </pre>
                    </Card>
               </div>


          </>
     );
}

export default TimelinePage;