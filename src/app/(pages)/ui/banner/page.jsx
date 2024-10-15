import Card from "@/components/velox/ui/card";
import VxBanner from "@/components/velox/ui/banner";


function Banner() {
     return (
          <div className="pb-20">
               <Card header={{ title: "Banner", class: "mb-2" }}>
                    <div className="grid lg:grid-cols-2 gap-2 items-center">
                         {/* 1 */}
                         <Card header={{ title: "Banner - Sample", class: "mb-2" }} className="h-full p-4">
                              <div className="flex gap-1 items-center relative h-[200px]">
                                   <VxBanner className="absolute">
                                        <div className="flex flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0">
                                             <a href="https://flowbite.com/" className="flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:border-e md:mb-0 dark:border-gray-600">
                                                  <img src="/logo.svg" className="h-6 me-2" alt="Flowbite Logo" />
                                             </a>
                                             <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">Build websites even faster with components on top of Tailwind CSS</p>
                                        </div>
                                        <div className="flex items-center flex-shrink-0">
                                             <a href="#" className="px-5 py-2 me-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</a>
                                             <button data-dismiss-target="#marketing-banner" type="button" className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                                                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                  </svg>
                                                  <span className="sr-only">Close banner</span>
                                             </button>
                                        </div>
                                   </VxBanner>
                              </div>
                         </Card>
                         {/* 2 */}
                         <Card header={{ title: "Banner - use Children", class: "mb-2" }} className="h-full relative p-4">
                              <div className="flex gap-1 items-center relative h-[200px]">
                                   <VxBanner className="absolute bg-[#000]/80 rounded-lg">
                                        <div className="flex items-center mx-auto">
                                             <p className="flex items-center text-sm font-normal text-gray-200 dark:text-gray-400">
                                                  <span className="inline-flex p-1 me-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center">
                                                       <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M18.435 7.546A2.32 2.32 0 0 1 17.7 5.77a3.354 3.354 0 0 0-3.47-3.47 2.322 2.322 0 0 1-1.776-.736 3.357 3.357 0 0 0-4.907 0 2.281 2.281 0 0 1-1.776.736 3.414 3.414 0 0 0-2.489.981 3.372 3.372 0 0 0-.982 2.49 2.319 2.319 0 0 1-.736 1.775 3.36 3.36 0 0 0 0 4.908A2.317 2.317 0 0 1 2.3 14.23a3.356 3.356 0 0 0 3.47 3.47 2.318 2.318 0 0 1 1.777.737 3.36 3.36 0 0 0 4.907 0 2.36 2.36 0 0 1 1.776-.737 3.356 3.356 0 0 0 3.469-3.47 2.319 2.319 0 0 1 .736-1.775 3.359 3.359 0 0 0 0-4.908ZM8.5 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3 9.063a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2.207-6.856-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 1.414Z" />
                                                       </svg>
                                                       <span className="sr-only">Discount</span>
                                                  </span>
                                                  <span>Get 5% commission per sale <a href="https://flowbite.com" className="flex items-center ms-0 text-sm font-medium text-blue-600 md:ms-1 md:inline-flex dark:text-blue-500 hover:underline">Become a partner <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                  </svg></a></span>
                                             </p>
                                        </div>
                                        <div className="flex items-center">
                                             <button data-dismiss-target="#bottom-banner" type="button" className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                                                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                  </svg>
                                                  <span className="sr-only">Close banner</span>
                                             </button>
                                        </div>
                                   </VxBanner>
                              </div>
                         </Card>
                         {/* 3 */}

                    </div>
               </Card>
               {/* 3 */}
               <Card header={{ title: "Banner - use Children", class: "mb-2 dark:text-white" }} className="mt-4 ">
                    <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                         <span className="text-blue-300 text-[.7rem] font-bold "></span>
                         <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                              {`                                   <VxBanner className="absolute">
                                        <div className="flex flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0">
                                             <a href="https://flowbite.com/" className="flex items-center mb-2 border-gray-200 md:pe-4 
                                             md:me-4 md:border-e md:mb-0 dark:border-gray-600">
                                                  <img src="/logo.svg" className="h-6 me-2" alt="Flowbite Logo" />
                                             </a>
                                             <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">Build websites even faster with components on top of Tailwind CSS</p>
                                        </div>
                                        <div className="flex items-center flex-shrink-0">
                                             <a href="#" className="px-5 py-2 me-2 text-xs font-medium text-white bg-blue-700 
                                             rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
                                             focus:outline-none dark:focus:ring-blue-800">Sign up</a>
                                             <button data-dismiss-target="#marketing-banner" type="button" className="flex-shrink-0 
                                             inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 
                                             hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                                                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                  </svg>
                                                  <span className="sr-only">Close banner</span>
                                             </button>
                                        </div>
                                   </VxBanner>
                         `}
                         </code>
                    </pre>
               </Card>
               {/* 2 */}
               <Card header={{ title: "Code", class: "mb-2 dark:text-white" }} className="mt-4 ">
                    <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                         <span className="text-blue-300 text-[.7rem] font-bold "></span>
                         <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                              {`                                  <VxBanner className="absolute bg-[#000]/80 rounded-lg">
                                        <div className="flex items-center mx-auto">
                                             <p className="flex items-center text-sm font-normal text-gray-200 dark:text-gray-400">
                                                  <span className="inline-flex p-1 me-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center">
                                                       <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M18.435 7.546A2.32 2.32 0 0 1 17.7 5.77a3.354 3.354 0 0 0-3.47-3.47 2.322 2.322 0 0 1-1.776-.736 3.357 
                                                            3.357 0 0 0-4.907 0 2.281 2.281 0 0 1-1.776.736 3.414 3.414 0 0 0-2.489.981 
                                                            3.372 3.372 0 0 0-.982 2.49 2.319 2.319 0 0 1-.736 1.775 3.36 3.36 0 0 0 0 
                                                            4.908A2.317 2.317 0 0 1 2.3 14.23a3.356 3.356 0 0 0 3.47 3.47 2.318 2.318 0 
                                                            0 1 1.777.737 3.36 3.36 0 0 0 4.907 0 2.36 2.36 0 0 1 1.776-.737 3.356 3.356 
                                                            0 0 0 3.469-3.47 2.319 2.319 0 0 1 .736-1.775 3.359 3.359 0 0 0 0-4.908ZM8.5 
                                                            5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3 9.063a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2.207-6.856-6 
                                                            6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 1.414Z" />
                                                       </svg>
                                                       <span className="sr-only">Discount</span>
                                                  </span>
                                                  <span>Get 5% commission per sale <a href="https://flowbite.com" 
                                                  className="flex items-center ms-0 text-sm font-medium text-blue-600 md:ms-1 md:inline-flex dark:text-blue-500 hover:underline">Become a partner 
                                                  <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" 
                                                       strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                  </svg></a></span>
                                             </p>
                                        </div>
                                        <div className="flex items-center">
                                             <button data-dismiss-target="#bottom-banner" type="button" className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                                                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                                                  fill="none" viewBox="0 0 14 14">
                                                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" 
                                                       strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                  </svg>
                                                  <span className="sr-only">Close banner</span>
                                             </button>
                                        </div>
                                   </VxBanner>
                        `}
                         </code>
                    </pre>
               </Card>

          </div>

     );
}

export default Banner;