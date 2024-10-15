import VxRadio from "@/components/velox/form/radio";
import Card from "@/components/velox/ui/card";

function RadioPage() {
     return (
          <div className="pb-20">
               <Card header={{ title: "Radio", class: "mb-2" }}>
                    <div className="grid lg:grid-cols-2 gap-2 items-center">
                         {/* 1 */}
                         <Card header={{ title: "Radio - Sample", class: "mb-2" }} className="h-full p-4">
                              <div className="flex gap-2 items-center relative h-[200px]">
                                   <VxRadio
                                        label="Default example #1"
                                        id="example"
                                        name="example"
                                   />
                                   <VxRadio
                                        label="Default example #2"
                                        id="example-2"
                                        name="example"
                                   />
                              </div>
                         </Card>
                         {/* 2 */}
                         <Card header={{ title: "Radio - Custom", class: "mb-2" }} className="h-full p-4">
                              <div className="flex flex-col flex-wrap gap-1 justify-center relative h-[200px]">
                                   <VxRadio
                                        label={<>Radio button with a <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">link inside</a></>}
                                        id="radio"
                                        name="radio"
                                   />
                                   <VxRadio
                                        label={<p className="text-xs font-normal text-gray-500 dark:text-gray-300">For orders shipped from $25 in books or $29 in other categories</p>}
                                        id="radio-2"
                                        name="radio"
                                        className="mi-class"
                                        required={false}
                                        value="2"
                                   />
                                   <VxRadio
                                        label={<p className="text-red-600 dark:text-red-500 hover:underline">Disabled</p>}
                                        id="radio"
                                        disabled={true}
                                   />

                              </div>
                         </Card>

                    </div>
               </Card>
               {/* 1 */}
               <Card header={{ title: "Radio - Sample", class: "mb-2 dark:text-white" }} className="mt-4">
                    <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                         <span className="text-blue-300 text-[.7rem] font-bold "></span>
                         <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                              {`                                 <VxRadio
                                        label="Default example #1"
                                        id="example"
                                        name="example"
                                   />
                                   <VxRadio
                                        label="Default example #2"
                                        id="example-2"
                                        name="example"
                                   />
                    `}
                         </code>
                    </pre>
               </Card>
               {/* 2 */}
               <Card header={{ title: "Radio - Custom", class: "mb-2 dark:text-white" }} className="mt-4">
                    <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                         <span className="text-blue-300 text-[.7rem] font-bold "></span>
                         <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                              {`                             <VxRadio
                                        label={<>Radio button with a 
                                             <a href="#" 
                                             className="text-blue-600 
                                                dark:text-blue-500 
                                                  hover:underline">
                                                  link inside
                                             </a></>}
                                        id="radio"
                                        name="radio"
                                   />
                    `}
                         </code>
                    </pre>
               </Card>


          </div>
     );
}

export default RadioPage;