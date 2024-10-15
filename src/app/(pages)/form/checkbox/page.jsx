import VxCode from "@/components/(shadcn components)/ui/code";
import VxCheckbox from "@/components/velox/form/checkbox";
import Card from "@/components/velox/ui/card";

function CheckboxPage() {

     return ( <div className="pb-20 w-full">
          <Card header={{ title: "Checkbox", class: "mb-2 w-full" }}>
               <div className="grid lg:grid-cols-2 gap-2 items-center">
                    {/* 1 */}
                    <Card header={{ title: "Checkbox - Sample", class: "mb-2" }} className="h-full p-4">
                         <div className="flex gap-2 items-center relative h-[200px]">
                              <VxCheckbox
                                   label="Default example"
                                   id="example"
                              />
                              <VxCheckbox
                                   label={<>I agree with the <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a></>}
                                   className="mi-class"
                                   id="mi-id"
                                   required={true}
                              />
                         </div>
                    </Card>
                    {/* 2 */}
                    <Card header={{ title: "Checkbox - Checked={true}", class: "mb-2" }} className="h-full p-4">
                         <div className="flex flex-wrap gap-3 items-center relative h-[200px]">
                              <VxCheckbox
                                   label="checked - true"
                                   checked={true}
                              />
                              <VxCheckbox
                                   label="checked - false"
                                   checked={false}
                              />
                              <VxCheckbox
                                   label="Disabled"
                                   disabled={true}
                              />
                         </div>
                    </Card>

               </div>
          </Card>

          <div className="flex flex-wrap xl:flex-nowrap w-full gap-3">
               {/* 1 */}
               <Card header={{ title: "Checkbox - Sample", class: "mb-2 dark:text-white" }} className="mt-4 bg-gray-800 text-white rounded-lg p-4 pl-6 w-full">
                    <pre className="ml-[-150px] lg:m-0">
                         <span className="text-blue-300 text-[.7rem] font-bold "></span>
                         <code className="dark:text-zinc-300  text-[.7rem]">
                              {`                               <VxCheckbox
                                   label="Default example"
                                   id="example"
                              />
                    `}
                         </code>
                    </pre>
               </Card>
               {/* 2 */}
               <Card header={{ title: "Checkbox - Custom", class: "mb-2 dark:text-white" }} className="mt-4 bg-gray-800 text-white rounded-lg p-4 pl-6 w-full">
                    <pre className="ml-[-150px] lg:m-0">
                         <span className="text-blue-300 text-[.7rem] font-bold "></span>
                         <code className="dark:text-zinc-300 text-white text-[.7rem]">
                              {`                             <VxCheckbox
                                   label={<>I agree with the 
                                   <a href="#" 
                                   className="text-blue-600 
                                        dark:text-blue-500 
                                        hover:underline">
                                        terms and conditions
                                   </a></>}
                                   className="mi-class"
                                   id="mi-id"
                                   required={true}
                              />
                    `}
                         </code>
                    </pre>
               </Card>
          </div>

     </div>
     )
}

export default CheckboxPage;