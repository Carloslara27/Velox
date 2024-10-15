
import VxFileInput from "@/components/velox/form/fileInput";
import Card from "@/components/velox/ui/card";

function FileInputPage() {
     return ( <div className="pb-20">
          <Card header={{ title: "File Input", class: "mb-2" }}>
               <div className="grid lg:grid-cols-2 gap-2 items-center">
                    {/* 1 */}
                    <Card header={{ title: "File Input - Sample", class: "mb-2" }} className="h-full p-4">
                         <div className="flex gap-2 items-center relative h-[250px]">
                            <VxFileInput
                            name="example"
                            id="example"
                            className="mi-class"
                            label={{text:"Click to upload or drag and drop"}}
                            />
                         </div>
                    </Card>
                    {/* 2 */}
                    <Card header={{ title: "File Input - icon", class: "mb-2" }} className="h-full p-4">
                         <div className="flex flex-wrap gap-3 items-center relative h-[260px]">
                         <VxFileInput
                            name="example"
                            id="example"
                            className="mi-class"
                            label={{text:"Click to upload or drag and drop"}}
                            icon={<svg stroke="currentColor" className="text-3xl mb-2 text-zinc-500" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z"></path><path d="m7 17-4.74-2.85"></path><path d="m7 17 4.74-2.85"></path><path d="M7 17v5"></path></svg>}
                            />
                         </div>
                    </Card>

               </div>
          </Card>
          {/* 1 */}
          <Card header={{ title: "File Input - Sample", class: "mb-2 dark:text-white" }} className="mt-4">
               <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                    <span className="text-blue-300 text-[.7rem] font-bold "></span>
                    <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                         {`                                <VxFileInput
                                   name="example"
                                   id="example"
                                   className="mi-class"
                                   label={{text:"Click to upload or drag and drop"}}
                                   />
               `}
                    </code>
               </pre>
          </Card>
          {/* 2 */}
          <Card header={{ title: "File Input - icon", class: "mb-2 dark:text-white" }} className="mt-4">
               <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                    <span className="text-blue-300 text-[.7rem] font-bold "></span>
                    <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                         {`                        <VxFileInput
                            name="example"
                            id="example"
                            className="mi-class"
                            label={{text:"Click to upload or drag and drop"}}
                            icon={<svg stroke="currentColor" className="text-3xl mb-2 text-zinc-500" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" 
                                   strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4">
                                   </path><polyline points="14 2 14 8 20 8"></polyline><path d="M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 
                                   2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z"></path><path d="m7 17-4.74-2.85"></path>
                                   <path d="m7 17 4.74-2.85"></path><path d="M7 17v5"></path>
                                 </svg>}
                         />
                                          
               `}
                    </code>
               </pre>
          </Card>

     </div>
     )
}

export default FileInputPage;