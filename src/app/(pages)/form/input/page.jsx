import VxInput from "@/components/velox/form/input";
import Card from "@/components/velox/ui/card";
import { FaUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { PiUserListLight } from "react-icons/pi";


function InputPage() {

     return ( <div className="pb-20">
          <Card header={{ title: "Input", class: "mb-2" }}>
               <div className="grid lg:grid-cols-2 gap-2 items-center">
                    {/* 1 */}
                    <Card header={{ title: "Input - Sample", class: "mb-2" }} className="h-full p-4">
                         <div className="flex gap-1 items-center relative h-[200px]">
                              <VxInput
                                   type="text"
                                   placeholder="Search text"
                                   required={false}
                                   className="input-example"
                                   id="input-example"
                              />
                         </div>
                    </Card>
                    {/* 2 */}
                    <Card header={{ title: "Input - Icon", class: "mb-2" }} className="h-full p-4">
                         <div className="flex flex-wrap gap-1 items-center relative h-[200px]">
                              <VxInput
                                   type="text"
                                   placeholder="Search user"
                                   required={false}
                                   iconLeft={<FaUser className="w-4 h-4 text-gray-500 dark:text-gray-400" />}
                              />
                              <VxInput
                                   type="text"
                                   placeholder="Name"
                                   required={false}
                                   iconRight={<PiUserListLight className="w-4 h-4 text-gray-500 dark:text-gray-400" />}
                              />
                              <VxInput
                                   type="text"
                                   placeholder="Search"
                                   required={false}
                                   iconLeft={<IoIosSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />}
                              />

                              <VxInput
                                   type="text"
                                   placeholder="Search icon"
                                   required={false}
                                   iconLeft={<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z" />
                                   </svg>}
                                   iconRight={<svg className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
                                   </svg>}
                              />
                         </div>
                    </Card>

               </div>
          </Card>
          {/* 1 */}
          <Card header={{ title: "Input - Sample", class: "mb-2 dark:text-white" }} className="mt-4">
               <pre className="ml-[-150px] lg:m-0">
                    <span className="text-blue-300 text-[.7rem] font-bold "></span>
                    <code className=" dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                         {`                              <VxInput
                                   type="text"
                                   placeholder="Search text"
                                   required={false}
                                   className="input-example"
                                   id="input-example"
                              />
                    `}
                    </code>
               </pre>
          </Card>
          {/* 2 */}
          <Card header={{ title: "Input - Icon", class: "mb-2 dark:text-white" }} className="mt-4">
               <pre className="ml-[-150px] lg:m-0">
                    <span className="text-blue-300 text-[.7rem] font-bold "></span>
                    <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                         {`                                   <VxInput
                                        type="text"
                                        placeholder="Search icon"
                                        required={false}
                                        iconLeft={<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z" />
                                        </svg>}
                                        iconRight={<svg className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
                                        </svg>}
                                   />
                    `}
                    </code>
               </pre>
          </Card>


     </div>
     )
}

export default InputPage;