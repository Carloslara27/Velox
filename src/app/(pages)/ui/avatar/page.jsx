"use client"
import Card from "@/components/velox/ui/card";
import VxAvatar from "@/components/velox/ui/avatar";
import { text } from "d3";
function Avatar() {
     return (
          <div>
               <Card header={{ title: "Avatar", class: "mb-2" }}>
                    <div className="grid lg:grid-cols-3 gap-2 items-center">
                         <Card header={{ title: "Sizes", class: "mb-2 dark:text-white" }} className="">
                              <div className="flex gap-1 items-baseline">
                                   <VxAvatar
                                        img="/example.jpeg"
                                        width={50}
                                        height={50}
                                        variant="full"
                                   />
                                   <VxAvatar
                                        img="/example.jpeg"
                                        width={40}
                                        height={40}
                                        variant="full"
                                   />
                                   <VxAvatar
                                        img="/example.jpeg"
                                        width={30}
                                        height={30}
                                        variant="full"
                                   />
                                   <VxAvatar
                                        img="/example.jpeg"
                                        width={20}
                                        height={20}
                                        variant="full"
                                   />
                                   <VxAvatar
                                        img="/example.jpeg"
                                        width={10}
                                        height={10}
                                        variant="full"
                                   />
                                   <span className="text-zinc-300 text-[.7rem]">px size</span>
                              </div>
                              <pre>
                                   <span className="text-blue-300 text-[.7rem] font-bold ">Attr: </span>
                                   <code className="text-zinc-300 text-[.7rem]">
                                        {`width: 30, height: 30`}
                                   </code>
                              </pre>
                         </Card>

                         {/* 2 */}
                         <Card header={{ title: "With Badge", class: "mb-2 dark:text-white" }} className="">
                              <div className="flex gap-1 items-baseline">
                                   <VxAvatar
                                        img="/example.jpeg"
                                        width={50}
                                        height={50}
                                        variant="full"
                                        badge={{
                                             width: 10,
                                             height: 10,
                                             color: "#13DEB9",
                                        }}
                                   />
                                   <VxAvatar
                                        img="/example.jpeg"
                                        width={50}
                                        height={50}
                                        variant="full"
                                        badge={{
                                             width: 10,
                                             height: 10,
                                             color: "#FFAE1F",
                                        }}
                                   />
                                   <VxAvatar
                                        img="/example.jpeg"
                                        width={50}
                                        height={50}
                                        variant="full"
                                        badge={{
                                             width: 10,
                                             height: 10,
                                             color: "#FA896B",
                                        }}
                                   />
                                   <VxAvatar
                                        img="/example.jpeg"
                                        width={50}
                                        height={50}
                                        variant="full"
                                        badge={{
                                             width: 15,
                                             height: 15,
                                             color: "#FA896B",
                                        }}
                                   />
                                   <VxAvatar
                                        img="/example.jpeg"
                                        width={50}
                                        height={50}
                                        variant="full"
                                        badge={{
                                             width: 19,
                                             height: 19,
                                             color: "#FA896B",
                                        }}
                                   />
                                   <span className="text-zinc-300 text-[.7rem]">px</span>
                              </div>
                              <pre>
                                   <span className="text-blue-300 text-[.7rem] font-bold ">Attr: </span>
                                   <code className="text-zinc-300 text-[.7rem]">
                                        {`badge={{ width: 19, height: 19, color: "#FA896B"}}`}
                                   </code>
                              </pre>
                         </Card>

                         {/* 3 */}
                         <Card header={{ title: "Variant", class: "mb-2 dark:text-white" }} className="">
                              <div className="flex gap-1 items-baseline">
                                   <VxAvatar
                                        img="/example.jpeg"
                                        width={50}
                                        height={50}
                                        variant=""
                                   />
                                   <VxAvatar
                                        img="/example.jpeg"
                                        width={50}
                                        height={50}
                                        variant="sm"
                                   />
                                   <VxAvatar
                                        img="/example.jpeg"
                                        width={50}
                                        height={50}
                                        variant="md"
                                   />
                                   <VxAvatar
                                        img="/example.jpeg"
                                        width={50}
                                        height={50}
                                        variant="lg"
                                   />
                                   <VxAvatar
                                        img="/example.jpeg"
                                        width={50}
                                        height={50}
                                        variant="xl"
                                   />
                                   <VxAvatar
                                        img="/example.jpeg"
                                        width={50}
                                        height={50}
                                        variant="full"
                                   />
                                   <span className="text-zinc-300 text-[.7rem]">none, sm, md, lg, xl, full</span>
                              </div>
                              <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                                   <span className="text-blue-300 text-[.7rem] font-bold ">Attr: </span>
                                   <code className="text-zinc-300 text-[.7rem]">
                                        {`variant="xl"`}
                                   </code>
                              </pre>
                         </Card>

                         {/* 4 */}
                         <Card header={{ title: "Variant", class: "mb-2 dark:text-white" }} className="">
                              <div className="flex gap-1 items-baseline">
                                   <VxAvatar
                                        width={50}
                                        height={50}
                                        variant=""
                                        letter={{
                                             text: "AG",
                                             class: "text-white bg-black"
                                        }}
                                   />
                                   <VxAvatar
                                        width={50}
                                        height={50}
                                        variant=""
                                        letter={{
                                             text: "JL",
                                             class: "text-white bg-green-500"
                                        }}
                                   />
                                   <VxAvatar
                                        width={50}
                                        height={50}
                                        variant=""
                                        letter={{
                                             text: "CV",
                                             class: "text-white bg-blue-600"
                                        }}
                                   />
                              </div>
                              <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                                   <span className="text-blue-300 text-[.7rem] font-bold ">Attr: </span>
                                   <code className="text-zinc-300 text-[.7rem]">
                                        {`letter={{ text: "JL", class: "text-white bg-green-500" }}`}
                                   </code>
                              </pre>
                         </Card>

                         {/* 5 */}
                         <Card header={{ title: "Code", class: "mb-2 dark:text-white" }} className="">
                              <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                                   <code className="dark:text-zinc-300 font-semibold text-[.8rem] text-wrap">
                                        {`<VxAvatar width={50} height={50} variant="full" badge={{ width: 10, height: 10, color: "#FFAE1F" }} letter={{ text: "AG", class: "text-white bg-black" }} />`}
                                   </code>
                              </pre>
                         </Card>
                    </div>
               </Card>
          </div>
     );
}

export default Avatar;