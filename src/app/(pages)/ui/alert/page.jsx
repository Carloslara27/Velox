"use client"
import Card from "@/components/velox/ui/card";
import VxAlert from "@/components/velox/ui/alert";
import { FiAlertTriangle } from "react-icons/fi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
import { MdErrorOutline, MdOutlineBusAlert, MdOutlineInfo } from "react-icons/md";

function Alert( { } ) {
     return (
          <div>
               <Card header={{ title: "Alert", class: "mb-2" }}>
                    <div className="grid lg:grid-cols-2 gap-2 items-center">
                         <Card header={{ title: "Type", class: "mb-2 dark:text-white" }} className="">
                              <div className="flex gap-1 items-baseline flex-col">
                                   {/* error */}
                                   <VxAlert
                                        title={{
                                             text: "Error",
                                             class: "text-zinc-100 font-semibold"
                                        }}
                                        description={{
                                             text: "You can add components and dependencies to your app using the cli.",
                                             class: "text-zinc-200"
                                        }}
                                        bgCard="#D82727"
                                        icon={{
                                             icon: <MdErrorOutline />,
                                             fill: "#D82727",
                                             class: "text-white text-xl"
                                        }}
                                   />
                                   {/* Sucess */}
                                   <VxAlert
                                        title={{
                                             text: "Success",
                                             class: "text-zinc-100 font-semibold"
                                        }}
                                        description={{
                                             text: "This is a success alert — check it out!",
                                             class: "text-zinc-200"
                                        }}
                                        bgCard="rgb(19, 222, 185)"
                                        icon={{
                                             icon: <IoIosCheckmarkCircleOutline />,
                                             class: "text-white text-xl"
                                        }}
                                   />
                                   {/* warning  */}
                                   <VxAlert
                                        title={{
                                             text: "Warning ",
                                             class: "text-zinc-100 font-semibold"
                                        }}
                                        description={{
                                             text: "This is a warning alert — check it out!",
                                             class: "text-zinc-200"
                                        }}
                                        bgCard="rgb(255, 174, 31)"
                                        icon={{
                                             icon: <IoWarningOutline />,
                                             class: "text-white text-xl"
                                        }}
                                   />
                                   {/* info  */}
                                   <VxAlert
                                        title={{
                                             text: "Info ",
                                             class: "text-zinc-100 font-semibold"
                                        }}
                                        description={{
                                             text: "This is a info alert — check it out!",
                                             class: "text-zinc-200"
                                        }}
                                        bgCard="rgb(83, 155, 255)"
                                        icon={{
                                             icon: <MdOutlineInfo />,
                                             class: "text-white text-xl"
                                        }}
                                   />
                                   {/* custom */}
                                   <VxAlert
                                        title={{
                                             text: "Custom",
                                             class: "text-zinc-100 font-semibold"
                                        }}
                                        description={{
                                             text: "This is a custom alert — check it out!",
                                             class: "text-zinc-200"
                                        }}
                                        bgCard="black"
                                        icon={{
                                             icon: <MdOutlineBusAlert />,
                                             class: "text-white text-xl bg-zinc-100/10"
                                        }}
                                   />
                              </div>
                              <pre>
                                   <span className="text-blue-300 text-[.7rem] font-bold ">Attr: </span>
                                   <code className="text-zinc-300 text-[.7rem]">
                                        {`width: 30, height: 30`}
                                   </code>
                              </pre>
                         </Card>
                         {/* 2 */}
                         <Card header={{ title: "Type", class: "mb-2 dark:text-white" }} className="">
                              <div className="flex gap-1 items-baseline flex-col">
                                   {/* error */}
                                   <VxAlert
                                        title={{
                                             text: "Error",
                                             class: "text-[#D82727] font-semibold"
                                        }}
                                        description={{
                                             text: "You can add components and dependencies to your app using the cli.",
                                             class: "text-[#D82727]"
                                        }}
                                        bgCard="transparent"
                                        border="1px solid red"
                                        icon={{
                                             icon: <MdErrorOutline />,
                                             class: "text-[#D82727] text-xl"
                                        }}
                                   />
                                   {/* Sucess */}
                                   <VxAlert
                                        title={{
                                             text: "Success",
                                             class: "text-[#13deb9] font-semibold"
                                        }}
                                        description={{
                                             text: "This is a success alert — check it out!",
                                             class: "text-[#13deb9]"
                                        }}
                                        border="1px solid rgb(19, 222, 185)"
                                        icon={{
                                             icon: <IoIosCheckmarkCircleOutline />,
                                             class: "text-[#13deb9] text-2xl"
                                        }}
                                   />
                                   {/* warning  */}
                                   <VxAlert
                                        title={{
                                             text: "Warning ",
                                             class: "text-[#ffae1f] font-semibold"
                                        }}
                                        description={{
                                             text: "This is a warning alert — check it out!",
                                             class: "text-[#ffae1f]"
                                        }}
                                        border="1px solid #ffae1f"
                                        icon={{
                                             icon: <IoWarningOutline />,
                                             class: "text-[#ffae1f] text-xl"
                                        }}
                                   />
                                   {/* info  */}
                                   <VxAlert
                                        title={{
                                             text: "Info ",
                                             class: "text-[#539bff] font-semibold"
                                        }}
                                        description={{
                                             text: "This is a info alert — check it out!",
                                             class: "text-[#539bff]"
                                        }}
                                        border="1px solid #539bff"
                                        icon={{
                                             icon: <MdOutlineInfo />,
                                             class: "text-[#539bff] text-xl"
                                        }}
                                   />
                                   {/* custom */}
                                   <VxAlert
                                        title={{
                                             text: "Custom",
                                             class: "text-zinc-900 font-semibold"
                                        }}
                                        description={{
                                             text: "This is a custom alert — check it out!",
                                             class: "text-zinc-800"
                                        }}
                                        border="1px dashed black"
                                        icon={{
                                             icon: <MdOutlineBusAlert />,
                                             class: "text-black text-xl bg-zinc-100/10"
                                        }}
                                   />
                              </div>
                              <pre>
                                   <span className="text-blue-300 text-[.7rem] font-bold ">Attr: </span>
                                   <code className="text-zinc-300 text-[.7rem]">
                                        {`width: 30, height: 30`}
                                   </code>
                              </pre>
                         </Card>
                    </div>
                    {/* 3 */}
                    <Card header={{ title: "Code", class: "mb-2 dark:text-white" }} className="">
                              <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                                   <span className="text-blue-300 text-[.7rem] font-bold "></span>
                                   <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                                        {`                                 <VxAlert
                                        title={{
                                             text: "Error",
                                             class: "text-[#D82727] font-semibold"
                                        }}
                                        description={{
                                             text: "You can add components and dependencies to your app using the cli.",
                                             class: "text-[#D82727]"
                                        }}
                                        bgCard="transparent"
                                        border="1px solid red"
                                        icon={{
                                             icon: <MdErrorOutline />,
                                             class: "text-[#D82727] text-xl"
                                        }}
                                   />`}
                                   </code>
                              </pre>
                    </Card>
               </Card>
          </div>
     );
}

export default Alert;