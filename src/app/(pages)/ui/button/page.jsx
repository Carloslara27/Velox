import Card from "@/components/velox/ui/card";
import VxButton from "@/components/velox/ui/button";

function Button() {
     return (
          <>
               {/* ----- Button ----- */}
               <div className="pb-20">
                    <Card header={{ title: "Button", class: "mb-2" }}>
                         <div className="grid lg:grid-cols-2 gap-2 items-center">
                              {/* 1 */}
                              <Card header={{ title: "Icon", class: "mb-2" }} className="h-full relative p-4">
                                   <div className="flex gap-1 items-center">
                                        <VxButton
                                             text="Pay with Bitcoin"
                                             bgColor="#FF9119"
                                             color="#FFF"
                                             iconLeft={<svg className="w-4 h-4 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-iconLeft="bitcoin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.1-111 248-248 248S8 392.1 8 256 119 8 256 8s248 111 248 248zm-141.7-35.33c4.937-32.1-20.19-50.74-54.55-62.57l11.15-44.7-27.21-6.781-10.85 43.52c-7.154-1.783-14.5-3.464-21.8-5.13l10.93-43.81-27.2-6.781-11.15 44.69c-5.922-1.349-11.73-2.682-17.38-4.084l.031-.14-37.53-9.37-7.239 29.06s20.19 4.627 19.76 4.913c11.02 2.751 13.01 10.04 12.68 15.82l-12.7 50.92c.76 .194 1.744 .473 2.829 .907-.907-.225-1.876-.473-2.876-.713l-17.8 71.34c-1.349 3.348-4.767 8.37-12.47 6.464 .271 .395-19.78-4.937-19.78-4.937l-13.51 31.15 35.41 8.827c6.588 1.651 13.05 3.379 19.4 5.006l-11.26 45.21 27.18 6.781 11.15-44.73a1038 1038 0 0 0 21.69 5.627l-11.11 44.52 27.21 6.781 11.26-45.13c46.4 8.781 81.3 5.239 95.99-36.73 11.84-33.79-.589-53.28-25-65.99 17.78-4.098 31.17-15.79 34.75-39.95zm-62.18 87.18c-8.41 33.79-65.31 15.52-83.75 10.94l14.94-59.9c18.45 4.603 77.6 13.72 68.81 48.96zm8.417-87.67c-7.673 30.74-55.03 15.12-70.39 11.29l13.55-54.33c15.36 3.828 64.84 10.97 56.85 43.03z"></path></svg>}
                                             className=""
                                        />
                                        <VxButton
                                             text="Pay with Ethereum"
                                             bgColor="#F3F4F6"
                                             color="#000"
                                             iconLeft={<svg className="w-4 h-4 me-2 -ms-1 text-[#626890]" aria-hidden="true" focusable="false" data-prefix="fab" data-iconLeft="ethereum" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>}
                                        />

                                        <VxButton
                                             text="Check out with PayPal"
                                             bgColor="#2557D6"
                                             color="#FFF"
                                             iconLeft={<svg className="w-4 h-4 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-iconLeft="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>}
                                        />
                                   </div>
                              </Card>
                              {/* 2 */}
                              <Card header={{ title: "Sample", class: "mb-2" }} className="h-full relative p-4">
                                   <div className="flex gap-1 items-center">

                                        <VxButton
                                             text="Pay with Bitcoin"
                                             bgColor="#FF9119"
                                             color="#FFF"
                                        />
                                        <VxButton
                                             text="Pay with Ethereum"
                                             bgColor="#F3F4F6"
                                             color="#000"
                                        />

                                        <VxButton
                                             text="Check out with PayPal"
                                             bgColor="#2557D6"
                                             color="#FFF"
                                        />
                                   </div>
                              </Card>
                              {/* 3 */}
                              <Card header={{ title: "Outline", class: "mb-2" }} className="h-full relative p-4">
                                   <div className="flex gap-1 items-center">

                                        <VxButton
                                             text="Pay with Bitcoin"
                                             bgColor="#FF9119"
                                             color="#FFF"
                                             type="outline"
                                             className="hover:bg-[#000] hover:text-blue-600 dark:text-white"

                                        />
                                        <VxButton
                                             iconRight={<svg className="w-[20px] h-[20px]" aria-hidden="true" focusable="false" data-prefix="fab" data-iconLeft="ethereum" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>}
                                             bgColor="#F3F4F6"
                                             color="#000"
                                             type="outline"
                                             className="hover:bg-[#000] hover:text-blue-600 dark:text-white rounded-full p-4"

                                        />

                                        <VxButton
                                             text="Check out with PayPal"
                                             bgColor="#2557D6"
                                             color="#FFF"
                                             type="outline"
                                             className="hover:bg-[#000] hover:text-blue-600 dark:text-white rounded-3xl"
                                        />
                                   </div>
                              </Card>
                              {/* 4 */}
                              <Card header={{ title: "Outline", class: "mb-2" }} className="h-full relative p-4">
                                   <div className="flex gap-1 items-center">

                                        <VxButton
                                             text="Pay with Bitcoin"
                                             bgColor="#FF9119"
                                             color="#FFF"
                                             type="outline"
                                             className="hover:bg-[#000] hover:text-blue-600 dark:text-white"
                                             iconLeft={<svg className="w-4 h-4 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-iconLeft="bitcoin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.1-111 248-248 248S8 392.1 8 256 119 8 256 8s248 111 248 248zm-141.7-35.33c4.937-32.1-20.19-50.74-54.55-62.57l11.15-44.7-27.21-6.781-10.85 43.52c-7.154-1.783-14.5-3.464-21.8-5.13l10.93-43.81-27.2-6.781-11.15 44.69c-5.922-1.349-11.73-2.682-17.38-4.084l.031-.14-37.53-9.37-7.239 29.06s20.19 4.627 19.76 4.913c11.02 2.751 13.01 10.04 12.68 15.82l-12.7 50.92c.76 .194 1.744 .473 2.829 .907-.907-.225-1.876-.473-2.876-.713l-17.8 71.34c-1.349 3.348-4.767 8.37-12.47 6.464 .271 .395-19.78-4.937-19.78-4.937l-13.51 31.15 35.41 8.827c6.588 1.651 13.05 3.379 19.4 5.006l-11.26 45.21 27.18 6.781 11.15-44.73a1038 1038 0 0 0 21.69 5.627l-11.11 44.52 27.21 6.781 11.26-45.13c46.4 8.781 81.3 5.239 95.99-36.73 11.84-33.79-.589-53.28-25-65.99 17.78-4.098 31.17-15.79 34.75-39.95zm-62.18 87.18c-8.41 33.79-65.31 15.52-83.75 10.94l14.94-59.9c18.45 4.603 77.6 13.72 68.81 48.96zm8.417-87.67c-7.673 30.74-55.03 15.12-70.39 11.29l13.55-54.33c15.36 3.828 64.84 10.97 56.85 43.03z"></path></svg>}


                                        />
                                        <VxButton
                                             text="Pay with Ethereum"
                                             bgColor="#F3F4F6"
                                             color="#000"
                                             type="outline"
                                             className="hover:bg-[#000] hover:text-red-600 dark:text-white flex gap-2"
                                             iconRight={<svg className="w-4 h-4 me-2 -ms-1 " aria-hidden="true" focusable="false" data-prefix="fab" data-iconLeft="ethereum" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>}

                                        />

                                        <VxButton
                                             text="Check out with PayPal"
                                             bgColor="#2557D6"
                                             color="#FFF"
                                             type="outline"
                                             className="hover:bg-[#000] hover:text-blue-600 dark:text-white"
                                             iconLeft={<svg className="w-4 h-4 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-iconLeft="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>}

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
                                   {`                                  <VxButton
                                             text="Check out with PayPal"
                                             bgColor="#2557D6"
                                             color="#FFF"
                                             iconLeft={<svg className="w-4 h-4 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab"
                                                  data-iconLeft="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor"
                                                  d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 
                                                  152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 
                                                  152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 
                                                  169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 
                                                  0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>}
                                        />   
                                   `}
                              </code>
                         </pre>
                    </Card>
                    {/* 2 */}
                    <Card header={{ title: "Code - Outline", class: "mb-2 dark:text-white" }} className="mt-4 ">
                         <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                              <span className="text-blue-300 text-[.7rem] font-bold "></span>
                              <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                                   {`                                  <VxButton
                                             text="Check out with PayPal"
                                             bgColor="#2557D6"
                                             color="#FFF"
                                             type="outline"
                                             className="hover:bg-[#000] hover:text-white"
                                             iconLeft={<svg className="w-4 h-4 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-iconLeft="paypal" role="img" 
                                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 
                                                  0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 
                                                  .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 
                                                  169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 
                                                  6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>}
                                        />
                                  `}
                              </code>
                         </pre>
                    </Card>

               </div>


          </>
     );
}

export default Button;