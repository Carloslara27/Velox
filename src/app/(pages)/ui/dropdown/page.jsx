import Card from "@/components/velox/ui/card";
import VxDropdown from "@/components/velox/ui/dropdown";
import { FaPaypal } from "react-icons/fa6";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";

function DropdownPage() {
     return (
          <div className="pb-20">
               <Card header={{ title: "Dropdown", class: "mb-2" }}>
                    <div className="grid lg:grid-cols-2 gap-2 items-center">
                         {/* 1 */}
                         <Card header={{ title: "Dropdown - Hover", class: "mb-2" }} className="h-full p-4">
                              <div className="flex gap-1 items-center relative h-[200px]">
                                   {/* 1 */}
                                   <VxDropdown
                                        type="hover"
                                        btn={{ text: "Hover Button" }}
                                        menu={[
                                             { text: "Dashboard", url: "#" },
                                             { text: "Settings", url: "#" },
                                             { text: "Sign out", url: "#" },
                                        ]}
                                   />
                                   {/* 2 */}
                                   <VxDropdown
                                        type="hover"
                                        btn={{ text: "Hover Button", class: "bg-orange-500 hover:bg-orange-700" }}
                                        menu={[
                                             { text: "Dashboard", url: "#" },
                                             { text: "Sign out", url: "#" },
                                        ]}
                                   />
                                   {/* 3 */}
                                   <VxDropdown
                                        type="hover"
                                        btn={{ text: "Hover Button", class: "bg-green-700 hover:bg-green-600" }}
                                        menu={[
                                             { text: "Paypal", url: "#", icon: <FaPaypal /> },
                                             { text: "Sign out", url: "#", icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M312 372c-7.7 0-14 6.3-14 14 0 9.9-8.1 18-18 18H94c-9.9 0-18-8.1-18-18V126c0-9.9 8.1-18 18-18h186c9.9 0 18 8.1 18 18 0 7.7 6.3 14 14 14s14-6.3 14-14c0-25.4-20.6-46-46-46H94c-25.4 0-46 20.6-46 46v260c0 25.4 20.6 46 46 46h186c25.4 0 46-20.6 46-46 0-7.7-6.3-14-14-14z"></path><path d="M372.9 158.1c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-5.5 5.5-5.5 14.3 0 19.8l65.2 64.2H162c-7.7 0-14 6.3-14 14s6.3 14 14 14h256.6L355 334.2c-5.4 5.4-5.4 14.3 0 19.8l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.8 0 7.3-1.4 9.9-4.1l82.6-82.4c4.3-4.3 6.5-9.3 6.5-14.7 0-5.3-2.3-10.3-6.5-14.5l-84.5-84.2z"></path></svg> },
                                        ]}
                                   />
                              </div>
                         </Card>
                         {/* 2 */}
                         <Card header={{ title: "Dropdown - Click", class: "mb-2" }} className="h-full p-4">
                              <div className="flex gap-1 items-center relative h-[200px]">
                                   {/* 1 */}
                                   <VxDropdown
                                        type="click"
                                        btn={{ text: "Click Button", class: "bg-blue-700 hover:bg-blue-600", icon: <IoEllipsisHorizontalOutline /> }}
                                        menu={[
                                             { text: "Paypal", url: "#", icon: <FaPaypal /> },
                                             { text: "Sign out", url: "#", icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M312 372c-7.7 0-14 6.3-14 14 0 9.9-8.1 18-18 18H94c-9.9 0-18-8.1-18-18V126c0-9.9 8.1-18 18-18h186c9.9 0 18 8.1 18 18 0 7.7 6.3 14 14 14s14-6.3 14-14c0-25.4-20.6-46-46-46H94c-25.4 0-46 20.6-46 46v260c0 25.4 20.6 46 46 46h186c25.4 0 46-20.6 46-46 0-7.7-6.3-14-14-14z"></path><path d="M372.9 158.1c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-5.5 5.5-5.5 14.3 0 19.8l65.2 64.2H162c-7.7 0-14 6.3-14 14s6.3 14 14 14h256.6L355 334.2c-5.4 5.4-5.4 14.3 0 19.8l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.8 0 7.3-1.4 9.9-4.1l82.6-82.4c4.3-4.3 6.5-9.3 6.5-14.7 0-5.3-2.3-10.3-6.5-14.5l-84.5-84.2z"></path></svg> },
                                        ]}
                                   />
                                   {/* 2 */}
                                   <VxDropdown
                                        type="click"
                                        btn={{ text: "Hover Button", class: "bg-green-700 hover:bg-green-600" }}
                                   >
                                        <div className="absolute w-[300px] h-fit bg-white dark:bg-black">
                                             <div className=" block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-white dark:bg-gray-800 dark:text-white">
                                                  Notifications
                                             </div>
                                             <div className="divide-y divide-gray-100 dark:divide-gray-700">
                                                  <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                                       <div className="flex-shrink-0">
                                                            <img className="rounded-full w-11 h-11" src="https://images.pexels.com/photos/20167684/pexels-photo-20167684/free-photo-of-moda-mujer-nina-modelo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Jese image" />
                                                            <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
                                                                 <svg className="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                                                      <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                                                                      <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z" />
                                                                 </svg>
                                                            </div>
                                                       </div>
                                                       <div className="w-full ps-3">
                                                            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">New message from <span className="font-semibold text-gray-900 dark:text-white">Jese Leos</span>: "Hey, what's up? All set for the presentation?"</div>
                                                            <div className="text-xs text-blue-600 dark:text-blue-500">a few moments ago</div>
                                                       </div>
                                                  </a>
                                                  <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                                       <div className="flex-shrink-0">
                                                            <img className="rounded-full w-11 h-11" src="https://images.pexels.com/photos/18421849/pexels-photo-18421849/free-photo-of-moda-mujer-sentado-joven.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Joseph image" />
                                                            <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-800">
                                                                 <svg className="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                                                      <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                                                                 </svg>
                                                            </div>
                                                       </div>
                                                       <div className="w-full ps-3">
                                                            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span className="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span> and <span className="font-medium text-gray-900 dark:text-white">5 others</span> started following you.</div>
                                                            <div className="text-xs text-blue-600 dark:text-blue-500">10 minutes ago</div>
                                                       </div>
                                                  </a>


                                             </div>
                                             <a href="#" className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                                                  <div className="inline-flex items-center ">
                                                       <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                                                            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                                       </svg>
                                                       View all
                                                  </div>
                                             </a>
                                        </div>
                                   </VxDropdown>
                              </div>
                         </Card>

                    </div>
               </Card>
               {/* 1 */}
               <Card header={{ title: "Dropdown - Sample", class: "mb-2 dark:text-white" }} className="mt-4">
                    <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                         <span className="text-blue-300 text-[.7rem] font-bold "></span>
                         <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                              {`                                   <VxDropdown
                                        type="hover"
                                        btn={{ text: "Hover Button" }}
                                        menu={[
                                             { text: "Dashboard", url: "#" },
                                             { text: "Settings", url: "#" },
                                             { text: "Sign out", url: "#" },
                                        ]}
                                   />
                    `}
                         </code>
                    </pre>
               </Card>
               {/* 2 */}
               <Card header={{ title: "Dropdown - Icon", class: "mb-2 dark:text-white" }} className="mt-4">
                    <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                         <span className="text-blue-300 text-[.7rem] font-bold "></span>
                         <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                              {`                                       <VxDropdown
                                        type="hover"
                                        btn={{ text: "Hover Button", class: "bg-green-700 hover:bg-green-600" }}
                                        menu={[
                                             { text: "Paypal", url: "#", icon: <FaPaypal /> },
                                             { text: "Sign out", url: "#", icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 
                                                       512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M312 372c-7.7 0-14 6.3-14 14 0 
                                                       9.9-8.1 18-18 18H94c-9.9 0-18-8.1-18-18V126c0-9.9 8.1-18 18-18h186c9.9 0 18 8.1 18 18 0 7.7 6.3 14 14 14s14-6.3
                                                       14-14c0-25.4-20.6-46-46-46H94c-25.4 0-46 20.6-46 46v260c0 25.4 20.6 46 46 46h186c25.4 0 46-20.6 46-46 
                                                       0-7.7-6.3-14-14-14z"></path><path d="M372.9 158.1c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-5.5 5.5-5.5 
                                                       14.3 0 19.8l65.2 64.2H162c-7.7 0-14 6.3-14 14s6.3 14 14 14h256.6L355 334.2c-5.4 5.4-5.4 14.3 0 19.8l.1.1c2.7 
                                                       2.5 6.2 3.9 9.8 3.9 3.8 0 7.3-1.4 9.9-4.1l82.6-82.4c4.3-4.3 6.5-9.3 6.5-14.7 0-5.3-2.3-10.3-6.5-14.5l-84.5-84.2z">
                                                   </path></svg> },
                                        ]}
                                   />
                    `}
                         </code>
                    </pre>
               </Card>
               {/* 3 */}
               <Card header={{ title: "Dropdown - Custom", class: "mb-2 dark:text-white" }} className="mt-4 ">
                    <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                         <span className="text-blue-300 text-[.7rem] font-bold "></span>
                         <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                              {`                                 <VxDropdown
                                        type="click"
                                        btn={{ text: "Hover Button", class: "bg-green-700 hover:bg-green-600", icon: <IoEllipsisHorizontalOutline /> }} >
                                        // -------> Children
                                        <div className="absolute w-[300px] h-fit bg-white">
                                             <div className=" block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-white dark:bg-gray-800 dark:text-white">
                                                  Notifications
                                             </div>
                                             <div className="divide-y divide-gray-100 dark:divide-gray-700">
                                                  <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                                       <div className="flex-shrink-0">
                                                            <img className="rounded-full w-11 h-11" src="https://images.pexels.com/photos/20167684/pexels-photo-20167684/free-photo-of-moda-mujer-nina-modelo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Jese image" />
                                                            <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
                                                                 <svg className="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                                                      <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                                                                      <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z" />
                                                                 </svg>
                                                            </div>
                                                       </div>
                                                       <div className="w-full ps-3">
                                                            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">New message from <span className="font-semibold text-gray-900 dark:text-white">Jese Leos</span>: "Hey, what's up? All set for the presentation?"</div>
                                                            <div className="text-xs text-blue-600 dark:text-blue-500">a few moments ago</div>
                                                       </div>
                                                  </a>
                                                  <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                                       <div className="flex-shrink-0">
                                                            <img className="rounded-full w-11 h-11" src="https://images.pexels.com/photos/18421849/pexels-photo-18421849/free-photo-of-moda-mujer-sentado-joven.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Joseph image" />
                                                            <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-800">
                                                                 <svg className="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                                                      <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                                                                 </svg>
                                                            </div>
                                                       </div>
                                                       <div className="w-full ps-3">
                                                            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span className="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span> and <span className="font-medium text-gray-900 dark:text-white">5 others</span> started following you.</div>
                                                            <div className="text-xs text-blue-600 dark:text-blue-500">10 minutes ago</div>
                                                       </div>
                                                  </a>


                                             </div>
                                             <a href="#" className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                                                  <div className="inline-flex items-center ">
                                                       <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                                                            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                                       </svg>
                                                       View all
                                                  </div>
                                             </a>
                                        </div>
                                        // -------
                                   </VxDropdown>
                   `}
                         </code>
                    </pre>
               </Card>

          </div>
     );
}

export default DropdownPage;