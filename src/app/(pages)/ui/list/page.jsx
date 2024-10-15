import Card from "@/components/velox/ui/card";
import VxList from "@/components/velox/ui/list";
import { GoCheckCircleFill } from "react-icons/go";

function ListPage() {
     return (
          <div className="pb-20">
               <Card header={{ title: "List", class: "mb-2" }} className="w-full">
                    <div className="grid lg:grid-cols-2 gap-2 items-center">
                         {/* 1 */}
                         <Card header={{ title: "Sample", class: "mb-2" }} className="w-full h-full relative p-4">
                              <div className="flex gap-10 items-center justify-center">
                                   <VxList
                                        items={[
                                             {
                                                  icon: <GoCheckCircleFill />,
                                                  text: "All limited links",
                                                  class: "text-xl text-blue-500"
                                             }, {
                                                  icon: <GoCheckCircleFill />,
                                                  text: "Chat support",
                                                  class: "text-xl text-blue-500"
                                             }, {
                                                  icon: <GoCheckCircleFill />,
                                                  text: "Optimize hashtags",
                                                  class: "text-xl text-blue-500"
                                             }, {
                                                  icon: <GoCheckCircleFill />,
                                                  text: "Unlimited users",
                                                  class: "text-xl text-blue-500"
                                             },
                                             {
                                                  icon: <GoCheckCircleFill />,
                                                  text: "All",
                                                  class: "text-xl text-blue-500"
                                             }
                                        ]}
                                        className="w-fit gap-5 mt-2"
                                   />

<VxList
                                        items={[
                                             {
                                                  text: "All limited links",
                                                  class: "text-xl text-blue-500"
                                             }, {
                                                  text: "Chat support",
                                                  class: "text-xl text-blue-500"
                                             }, {
                                                  text: "Optimize hashtags",
                                                  class: "text-xl text-blue-500"
                                             }, {
                                                  text: "Unlimited users",
                                                  class: "text-xl text-blue-500"
                                             },
                                             {
                                                  text: "All",
                                                  class: "text-xl text-blue-500"
                                             }
                                        ]}
                                        className="w-fit gap-5 mt-2"
                                   />
                              </div>
                         </Card>
                         {/* 2 */}
                         <Card header={{ title: "Sample", class: "mb-2" }} className="w-full h-full relative p-4">
                              <div className="flex gap-1 items-center">

                                   <VxList
                                        position="left"
                                        items={[
                                             {
                                                  icon: <GoCheckCircleFill />,
                                                  text: "All limited links",
                                                  class: "text-xl text-blue-500"
                                             }, {
                                                  icon: <GoCheckCircleFill />,
                                                  text: "Chat support",
                                                  class: "text-xl text-blue-500"
                                             }, {
                                                  icon: <GoCheckCircleFill />,
                                                  text: "Optimize hashtags",
                                                  class: "text-xl text-blue-500"
                                             }, {
                                                  icon: <GoCheckCircleFill />,
                                                  text: "Unlimited users",
                                                  class: "text-xl text-blue-500"
                                             },
                                             {
                                                  icon: <GoCheckCircleFill />,
                                                  text: "All",
                                                  class: "text-xl text-blue-500"
                                             }
                                        ]}
                                        className="w-fit gap-5 mt-2"
                                   />
                              </div>
                         </Card>
                       
                    </div>
               </Card>
               {/* 3 */}
               <Card header={{ title: "Sample", class: "mb-2 dark:text-white" }} className="mt-4 w-full">
                    <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                         <span className="text-blue-300 text-[.7rem] font-bold "></span>
                         <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                              {`                                    <VxList
                                        items={[
                                             {
                                                  icon: <GoCheckCircleFill />,
                                                  text: "All limited links",
                                                  class: "text-xl text-blue-500"
                                             }, {
                                                  icon: <GoCheckCircleFill />,
                                                  text: "Chat support",
                                                  class: "text-xl text-blue-500"
                                             }, {
                                                  icon: <GoCheckCircleFill />,
                                                  text: "Optimize hashtags",
                                                  class: "text-xl text-blue-500"
                                             }, {
                                                  icon: <GoCheckCircleFill />,
                                                  text: "Unlimited users",
                                                  class: "text-xl text-blue-500"
                                             },
                                             {
                                                  icon: <GoCheckCircleFill />,
                                                  text: "All",
                                                  class: "text-xl text-blue-500"
                                             }
                                        ]}
                                        className="w-fit gap-5 mt-2"
                                   />
                         `}
                         </code>
                    </pre>
               </Card>
               {/* 2 */}
               <Card header={{ title: "Code - Position", class: "mb-2 dark:text-white" }} className="mt-4 w-full">
                    <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                         <span className="text-blue-300 text-[.7rem] font-bold "></span>
                         <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                              {`                                   <VxList
                                        position="left"
                                        items={[
                                             {
                                                  icon: <GoCheckCircleFill />,
                                                  text: "All limited links",
                                                  class: "text-xl text-blue-500"
                                             }, {
                                                  icon: <GoCheckCircleFill />,
                                                  text: "Chat support",
                                                  class: "text-xl text-blue-500"
                                             }, {
                                                  icon: <GoCheckCircleFill />,
                                                  text: "Optimize hashtags",
                                                  class: "text-xl text-blue-500"
                                             }, {
                                                  icon: <GoCheckCircleFill />,
                                                  text: "Unlimited users",
                                                  class: "text-xl text-blue-500"
                                             },
                                             {
                                                  icon: <GoCheckCircleFill />,
                                                  text: "All",
                                                  class: "text-xl text-blue-500"
                                             }
                                        ]}
                                        className="w-fit gap-5 mt-2"
                                   />
                        `}
                         </code>
                    </pre>
               </Card>

          </div>

     );
}

export default ListPage;