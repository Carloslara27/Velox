import VxSelect from "@/components/velox/form/select";
import Card from "@/components/velox/ui/card";
import { FaBtc } from "react-icons/fa6";

function SelectPage() {

     return ( <div className="pb-20">
          <Card header={{ title: "Select", class: "mb-2" }}>
               <div className="grid lg:grid-cols-2 gap-2 items-center">
                    {/* 1 */}
                    <Card header={{ title: "Select - Sample", class: "mb-2" }} className="h-full p-4">
                         <div className="flex gap-2 items-center relative h-[200px]">
                              <VxSelect
                                   label={{ class: "example-class", text: "Select an option" }}
                                   option={[
                                        { text: "Choose countries" },
                                        { text: "Japan" },
                                        { text: "Germany" },
                                   ]}
                                   id="example"
                                   className="mi-class"
                                   name="select-example"
                              />
                         </div>
                    </Card>
                    {/* 2 */}
                    <Card header={{ title: "Select - underline", class: "mb-2" }} className="h-full p-4">
                         <div className="flex flex-wrap gap-3 items-center relative h-[200px]">
                              <VxSelect
                                   label={{ class: "example-class", text: "Select an option" }}
                                   option={[
                                        { text: "Choose countries" },
                                        { text: "BTC", icon: <FaBtc /> },
                                        { text: "ETH", icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg> },
                                   ]}
                                   id="example"
                                   className="mi-class"
                                   name="select-example"
                                   type="underline"
                              />
                         </div>
                    </Card>

               </div>
          </Card>
          {/* 1 */}
          <Card header={{ title: "Select - Sample", class: "mb-2 dark:text-white" }} className="mt-4">
               <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                    <span className="text-blue-300 text-[.7rem] font-bold "></span>
                    <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                         {`                                <VxSelect
                                   label={{ class: "example-class", text: "Select an option" }}
                                   option={[
                                        { text: "Choose countries" },
                                        { text: "Japan" },
                                        { text: "Germany" },
                                   ]}
                                   id="example"
                                   className="mi-class"
                                   name="select-example"
                              />
                    `}
                    </code>
               </pre>
          </Card>
          {/* 2 */}
          <Card header={{ title: "Select - underline", class: "mb-2 dark:text-white" }} className="mt-4">
               <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                    <span className="text-blue-300 text-[.7rem] font-bold "></span>
                    <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                         {`                              <VxSelect
                                   label={{ class: "example-class", text: "Select an option" }}
                                   option={[
                                        { text: "Choose countries" },
                                        { text: "BTC", icon: <FaBtc /> },
                                        { text: "ETH", icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg> },
                                   ]}
                                   id="example"
                                   className="mi-class"
                                   name="select-example"
                                   type="underline"
                              />
                    `}
                    </code>
               </pre>
          </Card>


     </div>
     )
}

export default SelectPage;