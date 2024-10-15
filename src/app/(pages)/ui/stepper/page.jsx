"use client"
import Card from "@/components/velox/ui/card";
import VxStepper from "@/components/velox/ui/stepper";
import { FaCheckCircle, FaUser } from "react-icons/fa";
import { FaPaypal, FaWallet } from "react-icons/fa6";
import { GrContactInfo } from "react-icons/gr";
import { MdError } from "react-icons/md";

function Stepper() {
     return (
          <div>
               <Card header={{ title: "Stepper", class: "mb-2" }}>
                    <div className="grid lg:grid-cols-2 gap-2 items-center">
                         <Card header={{ title: "Type", class: "mb-2" }} className="h-full">
                              <div className="flex flex-col gap-5 w-fit">
                                   <div className="flex flex-col gap-3 w-full mt-4">
                                        <span className="font-light text-zinc-400">Default: </span>
                                        <VxStepper
                                             stepper={[
                                                  {
                                                       label: { text: "Wallet" },
                                                       icon: { icon: <FaWallet /> },
                                                       active: true
                                                  },
                                                  {
                                                       label: { text: "Payment" },
                                                       icon: { icon: <FaPaypal /> },
                                                       active: true
                                                  },
                                                  {
                                                       label: { text: "Sucess", class: "text-zinc-200 dark:text-white" },
                                                       icon: { icon: <FaCheckCircle className="dark:text-white"/> }
                                                  }
                                             ]}
                                             className="w-[70%]"
                                        />
                                   </div>
                                   <div className="flex flex-col gap-3 w-full">
                                        <span className="font-light text-zinc-400">breadcrumb: </span>
                                        <VxStepper type="breadcrumb"
                                             stepper={[
                                                  {
                                                       label: { text: "Personal info" },
                                                       icon: { icon: <FaUser /> },
                                                       active: true
                                                  },
                                                  {
                                                       label: { text: "Account Info" },
                                                       icon: { icon: "" }
                                                  },
                                                  {
                                                       label: { text: "Account Info" },
                                                       icon: { icon: "" }
                                                  }
                                             ]}
                                        />
                                   </div>
                                   <div className="flex flex-col gap-3 w-full">
                                        <span className="font-light text-zinc-400">detailed: </span>
                                        <VxStepper type="detailed"
                                             stepper={[
                                                  {
                                                       label: { text: "Personal info",class:"text-xs" },
                                                       icon: { icon: "1" },
                                                       active: true,
                                                       info: "lorem insu",
                                                     
                                                  },
                                                  {
                                                       label: { text: "Account Info",class:"text-xs dark:text-white" },
                                                       icon: { icon: "2" },
                                                       info: "lorem insu",
                                                       class:"dark:text-white dark:border-white"
                                                  },
                                                  {
                                                       label: { text: "Account Info",class:"text-xs dark:text-white" },
                                                       icon: { icon: "3" },
                                                       info: "lorem insu",
                                                       class:"dark:text-white dark:border-white"
                                                  }
                                             ]}
                                        />
                                   </div>
                              </div>
                              <pre className="mt-4">
                                   <span className="text-blue-300 text-[.7rem] font-bold ">Attr: </span>
                                   <code className="text-zinc-700 dark:text-zinc-300 text-[.7rem]">
                                        {`type="default"`}<br />
                                        {`type="breadcrumb"`}<br />
                                        {`type="detailed"`}
                                   </code>
                              </pre>
                         </Card>

                         {/* 2 examples */}
                         <Card header={{ title: "Custom", class: "mb-2" }} className="flex flex-col gap-8 h-full">
                              <VxStepper
                                   stepper={[
                                        {
                                             label: { text: "Wallet" },
                                             icon: { icon: <FaWallet /> },
                                             active: true
                                        },
                                        {
                                             label: { text: "Payment" },
                                             icon: { icon: <FaPaypal /> },
                                             active: true
                                        },
                                        {
                                             label: { text: "Sucess", class: "text-zinc-200 dark:text-white" },
                                             icon: { icon: <FaCheckCircle className="dark:text-white"/> }
                                        }
                                   ]}
                              />
                              <VxStepper
                                   stepper={[
                                        {
                                             label: {
                                                  text: "Account",
                                             },
                                             icon: { icon: <FaUser /> },
                                             active: true,
                                             colorActive: "text-green-500"
                                        },
                                        {
                                             label: {
                                                  text: "Info",
                                             },
                                             active: true,
                                             colorActive: "text-green-500"
                                        },
                                        {
                                             label: {
                                                  text: "Error",
                                             },
                                             active: true,
                                             colorActive: "text-red-500"
                                        }
                                   ]}
                              />
                              <VxStepper
                                   stepper={[
                                        {

                                             icon: { icon: <FaUser className="dark:text-white"/> },
                                             active: true,
                                             colorActive: "text-green-500"
                                        },
                                        {
                                             icon: { icon: <FaCheckCircle className="dark:text-white"/> },
                                        },
                                        {
                                             icon: { icon: <FaPaypal className="dark:text-white"/> },
                                        }
                                   ]}
                                   className="w-fit"
                              />
                              <VxStepper
                                   type="breadcrumb"
                                   stepper={[
                                        {

                                             icon: { icon: <FaUser /> },
                                             active: true,
                                             colorActive: "text-green-500"
                                        },
                                        {
                                             icon: { icon: <FaCheckCircle /> },
                                        },
                                        {
                                             icon: { icon: <FaPaypal /> },
                                        }
                                   ]}
                              />
                              <VxStepper
                                   type="detailed"
                                   stepper={[
                                        {

                                             label: { text: "example" },
                                             icon: { icon: <FaUser/> },
                                             active: true,
                                        },
                                        {
                                             label: { text: "example2",class:"dark:text-white dark:border-white" },
                                             icon: { icon: <FaCheckCircle className="dark:text-white"/> },
                                        },
                                        {
                                             label: { text: "example3",class:"dark:text-white dark:border-white" },
                                             icon: { icon: <FaPaypal className="dark:text-white"/> },
                                        }
                                   ]}
                              />
                         </Card>
                    </div>
                    {/* 3 */}
                    <Card header={{ title: "Code", class: "mb-2 dark:text-white" }} className="mt-4 ">
                              <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                                   <span className="text-blue-300 text-[.7rem] font-bold "></span>
                                   <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                                        {`                                  <VxStepper
                                   type="default"
                                   stepper={[
                                        {
                                             label: { text: "Wallet" },
                                             icon: { icon: <FaWallet /> },
                                             active: true
                                        },
                                        {
                                             label: { text: "Payment" },
                                             icon: { icon: <FaPaypal /> },
                                             active: true
                                        },
                                        {
                                             label: { text: "Sucess", class: "text-zinc-200" },
                                             icon: { icon: <FaCheckCircle /> }
                                        }
                                   ]}
                              />`}
                                   </code>
                              </pre>
                    </Card>
               </Card>
          </div>
     );
}

export default Stepper;