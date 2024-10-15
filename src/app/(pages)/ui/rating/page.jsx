import Card from "@/components/velox/ui/card";
import VxRating from "@/components/velox/ui/rating";


function Rating() {
     return (
          <>
               {/* ----- Button ----- */}
               <div className="pb-20">
                    <Card header={{ title: "Rating", class: "mb-2" }}>
                         <div className="grid lg:grid-cols-2 gap-2 items-center">
                              {/* 1 */}
                              <Card header={{ title: "Sample", class: "mb-2" }} className="h-full relative p-4">
                                   <div className="flex flex-col gap-3">
                                        <VxRating
                                             star={[
                                                  { class: "text-yellow-300" },
                                                  { class: "text-yellow-300" },
                                                  { class: "text-yellow-300" },
                                                  { class: "text-zinc-200" },
                                                  { class: "text-zinc-200" },
                                             ]}

                                        />
                                   </div>
                              </Card>
                              {/* 2 */}
                              <Card header={{ title: "LeftContent", class: "mb-2" }} className="h-full relative p-4">
                                   <div className="flex gap-1 items-center">
                                        <VxRating
                                             star={[
                                                  { class: "text-yellow-300" },
                                                  { class: "text-yellow-300" },
                                                  { class: "text-yellow-300" },
                                                  { class: "text-zinc-200" },
                                                  { class: "text-zinc-200" },
                                             ]}
                                             LeftContent={<>
                                                  <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
                                                  <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
                                                  <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
                                             </>}
                                        />
                                   </div>
                              </Card>
                              {/* 3 */}
                              <Card header={{ title: "LeftContent", class: "mb-2" }} className="h-full relative p-4">
                                   <div className="flex gap-1 items-center">
                                        <VxRating
                                             star={[
                                                  { class: "text-yellow-300" },
                                                  { class: "text-yellow-300" },
                                                  { class: "text-yellow-300" },
                                                  { class: "text-zinc-200" },
                                                  { class: "text-zinc-200" },
                                             ]}
                                             LeftContent={<>
                                                  <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                                                  <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                                  <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>
                                             </>}
                                        />
                                   </div>
                              </Card>
                              {/* 4 */}
                              <Card header={{ title: "RightContent", class: "mb-2" }} className="h-full relative p-4">
                                   <div className="flex gap-1 items-center">
                                        <VxRating
                                             star={[
                                                  { class: "text-yellow-300" },
                                                  { class: "text-yellow-300" },
                                                  { class: "text-yellow-300" },
                                                  { class: "text-zinc-200" },
                                                  { class: "text-zinc-200" },
                                             ]}
                                             RightContent={<>
                                                  <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                                                  <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                             </>}
                                        />
                                   </div>
                              </Card>
                         </div>
                    </Card>
                    {/* 3 */}
                    <Card header={{ title: "Code", class: "mb-2 dark:text-white" }} className="mt-4 ">
                         <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                              <span className="text-blue-300 text-[.7rem] font-bold "></span>
                              <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                                   {`                                 <VxRating
                                             star={[
                                                  { class: "text-yellow-300" },
                                                  { class: "text-yellow-300" },
                                                  { class: "text-yellow-300" },
                                                  { class: "text-zinc-200" },
                                                  { class: "text-zinc-200" },
                                             ]}

                                        />  
                                   `}
                              </code>
                         </pre>
                    </Card>
                    {/* 2 */}
                    <Card header={{ title: "Code - RightContent", class: "mb-2 dark:text-white" }} className="mt-4 ">
                         <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                              <span className="text-blue-300 text-[.7rem] font-bold "></span>
                              <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                                   {`                                  <VxRating
                                             star={[
                                                  { class: "text-yellow-300" },
                                                  { class: "text-yellow-300" },
                                                  { class: "text-yellow-300" },
                                                  { class: "text-zinc-200" },
                                                  { class: "text-zinc-200" },
                                             ]}
                                             LeftContent={<>
                                                  <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                                                  <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                                  <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>
                                             </>}
                                        />
                                  `}
                              </code>
                         </pre>
                    </Card>

               </div>


          </>
     );
}

export default Rating;