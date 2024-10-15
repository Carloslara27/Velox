import Card from "@/components/velox/ui/card";

function CardPage() {
     return (
          <div className="pb-20">
               <Card header={{ title: "Card", class: "mb-2" }}>
                    <div className="grid lg:grid-cols-2 gap-2 items-center">
                         {/* 1 */}
                         <Card header={{ title: "Card - Sample", class: "mb-2" }} className="h-full p-4">
                              <div className="flex gap-1 items-center relative h-[200px]">
                                   {/* 1 */}
                                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae vel provident repellat maiores veritatis iste ab soluta,
                                        corporis non assumenda. Saepe in ad obcaecati ipsa incidunt ipsum quo. Porro, libero.</p>
                              </div>
                         </Card>
                         {/* 2 */}
                         <Card header={{ title: "Card - Color | border-solid", class: "mb-2 border-solid" }} className="h-full relative p-4 bg-black text-zinc-100">
                              <div className="flex gap-1 items-center relative h-[200px] text-white">
                                   {/* 1 */}
                                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae vel provident repellat maiores veritatis iste ab soluta,
                                        corporis non assumenda. Saepe in ad obcaecati ipsa incidunt ipsum quo. Porro, libero.</p>
                              </div>
                         </Card>
                         {/* 3 */}

                    </div>
               </Card>
               {/* 3 */}
               <Card header={{ title: "Card - Code", class: "mb-2 dark:text-white" }} className="mt-4 ">
                    <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                         <span className="text-blue-300 text-[.7rem] font-bold "></span>
                         <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                              {`                                     <Card header={{ title: "Modal - Icon", class: "mb-2" }} className="h-full relative p-4">
                                             <div className="flex gap-1 items-center relative h-[200px]">
                                                  <p>....</p>
                                             </div>
                                    </Card>
                         `}
                         </code>
                    </pre>
               </Card>
               {/* 4 */}
               <Card header={{ title: "Card - Change the border ", class: "mb-2 dark:text-white" }} className="mt-4 ">
                    <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                         <span className="text-blue-300 text-[.7rem] font-bold "></span>
                         <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                              {`                              <Card header={{ title: "Card - Color | border-solid", class: "mb-2 border-solid" }} className="h-full relative p-4 bg-black text-zinc-100">
                                   <div className="flex gap-1 items-center relative h-[200px] text-white">
                                        {/* 1 */}
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae vel provident repellat maiores veritatis iste ab soluta,
                                             corporis non assumenda. Saepe in ad obcaecati ipsa incidunt ipsum quo. Porro, libero.</p>
                                   </div>
                              </Card>
                         `}
                         </code>
                    </pre>
               </Card>

          </div>

     );
}

export default CardPage;