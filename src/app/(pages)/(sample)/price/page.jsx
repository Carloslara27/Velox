import VxButton from "@/components/velox/ui/button";
import Card from "@/components/velox/ui/card";
import VxList from "@/components/velox/ui/list";
import { GoCheckCircleFill } from "react-icons/go";
import { ImCancelCircle } from "react-icons/im";

function PricePage() {
     return (
          <div className="flex flex-col gap-1">
               <h1 className="text-4xl font-semibold mt-3 text-black dark:text-white">Simple, transparent pricing</h1>
               <span className="text-zinc-400">No contracts. No surprise fees.</span>

               <div className="flex flex-wrap xl:flex-nowrap justify-center gap-10 mt-10 pb-10">
                    {/* 1 */}
                    <Card className="w-fit p-5 flex flex-col gap-6">
                         <span className="w-fit text-xl text-blue-950 font-600">Into</span>
                         <h3 className="text-blue-950 w-fit text-5xl font-semibold flex gap-1 items-center">$19 <span className="text-sm text-zinc-500 font-normal">/Month</span></h3>
                         <p className="w-fit text-zinc-500 w-90">For most businesses that want to optimize web queries</p>

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
                                        icon: <ImCancelCircle />,
                                        text: "Unlimited users",
                                        class: "text-xl text-red-500"
                                   },
                                   {
                                        icon: <ImCancelCircle />,
                                        text: "Unlimited",
                                        class: "text-xl text-red-500"
                                   }
                              ]}
                              className="w-fit gap-5 mt-2"
                         />

                         <div className="flex items-cente justify-center mt-2">
                              <VxButton
                                   text="Choose Plan"
                                   type="outline"
                                   className="border-blue-500 text-blue-500 mt-3 text-xl"
                              />
                         </div>
                    </Card>
                    {/* 2 */}
                    <Card className="w-fit p-5 flex flex-col gap-6">
                         <span className="w-fit text-xl text-blue-950 font-600">Base</span>
                         <h3 className="text-blue-950 w-fit text-5xl font-semibold flex gap-1 items-center">$39 <span className="text-sm text-zinc-500 font-normal">/Month</span></h3>
                         <p className="w-fit text-zinc-500 w-90">For most businesses that want to optimize web queries</p>

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
                                        icon: <ImCancelCircle />,
                                        text: "Unlimited",
                                        class: "text-xl text-red-500"
                                   }
                              ]}
                              className="w-fit gap-5 mt-2"
                         />

                         <div className="flex items-cente justify-center mt-2">
                              <VxButton
                                   text="Choose Plan"
                                   type="outline"
                                   className="border-blue-500 text-blue-500 mt-3 text-xl"
                              />
                         </div>
                    </Card>
                    {/* 3 */}
                    <Card className="w-fit p-5 flex flex-col gap-6 bg-blue-500">
                         <span className="w-fit text-xl text-zinc-200 font-600">Popular</span>
                         <h3 className="text-white w-fit text-5xl font-semibold flex gap-1 items-center">$99 <span className="text-sm text-zinc-300 font-normal">/Month</span></h3>
                         <p className="w-fit text-zinc-300 w-90">For most businesses that want to optimize web queries</p>

                         <VxList
                              items={[
                                   {
                                        icon: <GoCheckCircleFill />,
                                        text: "All limited links",
                                        class: "text-xl text-white"
                                   }, {
                                        icon: <GoCheckCircleFill />,
                                        text: "Chat support",
                                        class: "text-xl text-white"
                                   }, {
                                        icon: <GoCheckCircleFill />,
                                        text: "Optimize hashtags",
                                        class: "text-xl text-white"
                                   }, {
                                        icon: <GoCheckCircleFill />,
                                        text: "Unlimited users",
                                        class: "text-xl text-white"
                                   },
                                   {
                                        icon: <GoCheckCircleFill />,
                                        text: "Unlimited",
                                        class: "text-xl text-white"
                                   }
                              ]}
                              className="w-fit gap-5 mt-2"
                         />

                         <div className="flex items-cente justify-center mt-2">
                              <VxButton
                                   text="Choose Plan"
                                   type="outline"
                                   className="border-white text-white mt-3 text-xl"
                              />
                         </div>
                    </Card>
                     {/* 2 */}
                     <Card className="w-fit p-5 flex flex-col gap-6">
                         <span className="w-fit text-xl text-blue-950 font-600">Enterprise</span>
                         <h3 className="text-blue-950 w-fit text-5xl font-semibold flex gap-1 items-center">$199 <span className="text-sm text-zinc-500 font-normal">/Month</span></h3>
                         <p className="w-fit text-zinc-500 w-90">For most businesses that want to optimize web queries</p>

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

                         <div className="flex items-cente justify-center mt-2">
                              <VxButton
                                   text="Choose Plan"
                                   type="outline"
                                   className="border-blue-500 text-blue-500 mt-3 text-xl"
                              />
                         </div>
                    </Card>
               </div>
          </div>
     );
}

export default PricePage;