import Card from "@/components/velox/ui/card";
import VxModal from "@/components/velox/ui/Modal";
import { MdOutlineAdd } from "react-icons/md";

function Modal() {
     return (
          <div className="pb-20">
               <Card header={{ title: "Modal", class: "mb-2" }}>
                    <div className="grid lg:grid-cols-2 gap-2 items-center">
                         {/* 1 */}
                         <Card header={{ title: "Modal - Sample", class: "mb-2" }} className="h-full p-4">
                              <div className="flex gap-1 items-center relative h-[200px]">
                                   <VxModal
                                        btn={{ text: "Modal Example" }}
                                        titleModal="Modal Title"
                                        btnAccept={{ text: "Accept" }}
                                        btnCancel={{ text: "Closed" }}
                                        className="dark:bg-zinc-900"
                                   >
                                        <div className="p-4 md:p-5 space-y-4 ">
                                             <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                  With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                                             </p>
                                             <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                  The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                                             </p>
                                        </div>
                                   </VxModal>

                                   <VxModal
                                        btn={{ text: "Modal Example", class: "bg-orange-500 hover:bg-orange-700" }}
                                        titleModal="Modal Title"
                                        btnAccept={{ text: "Accept" }}
                                        btnCancel={{ text: "Closed" }}
                                        className="dark:bg-zinc-900"
                                   >
                                        <div className="p-4 md:p-5 space-y-4">
                                             <div className="flex flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0">
                                                  <a href="https://flowbite.com/" className="flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:border-e md:mb-0 dark:border-gray-600">
                                                       <img src="/logo.svg" className="h-6 me-2" alt="Flowbite Logo" />
                                                  </a>
                                                  <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">Build websites even faster with components on top of Tailwind CSS</p>
                                             </div>
                                        </div>
                                   </VxModal>
                              </div>
                         </Card>
                         {/* 2 */}
                         <Card header={{ title: "Modal - Icon", class: "mb-2" }} className="h-full relative p-4">
                              <div className="flex gap-1 items-center relative h-[200px]">
                                   {/* 1 */}
                                   <VxModal
                                        btn={{ text: "Modal Icon", icon: <MdOutlineAdd /> }}
                                        titleModal="Modal Add"
                                        btnAccept={{ text: "Accept" }}
                                        btnCancel={{ text: "Closed" }}
                                        className="dark:bg-zinc-900"
                                   >
                                        <div className="p-4 md:p-5 space-y-4">
                                             <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, dolor? Qui eum repellendus unde, ab nam explicabo sit facilis fuga aliquam aperiam, asperiores cum vero esse quos exercitationem quas. Hic?
                                             </p>
                                             <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, dolor? Qui eum repellendus unde, ab nam explicabo sit facilis fuga aliquam aperiam, asperiores cum vero esse quos exercitationem quas. Hic?
                                             </p>
                                        </div>
                                   </VxModal>
                                   {/* 2 */}
                                   <VxModal
                                        btn={{ text: "Modal Icon", icon: <svg className="w-4 h-4 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg> }}
                                        titleModal="Modal Paypal"
                                        btnAccept={{ text: "Accept" }}
                                        btnCancel={{ text: "Cancel" }}
                                        className="dark:bg-zinc-900"
                                   >
                                        <div className="p-4 md:p-5 space-y-4">
                                             <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odio repudiandae vitae inventore eius voluptate possimus laboriosam accusantium repellendus placeat fugiat dolorum nemo sequi iure tenetur consequuntur, exercitationem nesciunt dignissimos.
                                             </p>
                                        </div>
                                   </VxModal>
                                   {/* 3 */}
                                   <VxModal
                                        btn={{ class: "bg-zinc-900 hover:bg-zinc-800", icon: <svg aria-hidden="true" className="w-10 h-3 me-2 -ms-1" viewBox="0 0 256 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.812 0L0 63.76H34.492L38.768 53.594H48.542L52.818 63.76H90.784V56.001L94.167 63.76H113.806L117.189 55.837V63.76H196.148L205.749 53.858L214.739 63.76L255.294 63.842L226.391 32.058L255.294 0H215.368L206.022 9.71899L197.315 0H111.418L104.042 16.457L96.493 0H62.073V7.495L58.244 0C58.244 0 28.812 0 28.812 0ZM35.486 9.05399H52.299L71.41 52.29V9.05399H89.828L104.589 40.054L118.193 9.05399H136.519V54.806H125.368L125.277 18.955L109.02 54.806H99.045L82.697 18.955V54.806H59.757L55.408 44.549H31.912L27.572 54.797H15.281C15.281 54.797 35.486 9.05399 35.486 9.05399ZM146.721 9.05399H192.063L205.931 24.034L220.246 9.05399H234.114L213.043 32.049L234.114 54.779H219.617L205.749 39.625L191.361 54.779H146.721V9.05399ZM43.665 16.795L35.924 35.067H51.397L43.665 16.795ZM157.918 18.527V26.879H182.654V36.188H157.918V45.306H185.663L198.555 31.876L186.21 18.519H157.918V18.527Z" fill="white" /></svg> }}
                                        titleModal="Modal Express"
                                        btnAccept={{ text: "Accept" }}
                                        btnCancel={{ text: "Cancel" }}
                                        className="dark:bg-zinc-900"
                                   >
                                        <div className="p-4 md:p-5 space-y-4">
                                             <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odio repudiandae vitae inventore eius voluptate possimus laboriosam accusantium repellendus placeat fugiat dolorum nemo sequi iure tenetur consequuntur, exercitationem nesciunt dignissimos.
                                             </p>
                                        </div>
                                   </VxModal>
                              </div>
                         </Card>
                         {/* 3 */}

                    </div>
               </Card>
               {/* 3 */}
               <Card header={{ title: "Modal - Sample", class: "mb-2 dark:text-white" }} className="mt-4 ">
                    <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                         <span className="text-blue-300 text-[.7rem] font-bold "></span>
                         <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                              {`                                    <VxModal
                                        btn={{ text: "Modal Example" }}
                                        titleModal="Modal Title"
                                        btnAccept={{ text: "Accept" }}
                                        btnCancel={{ text: "Closed" }}
                                   >
                                        <div className="p-4 md:p-5 space-y-4">
                                             <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                  With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the 
                                                  world are updating their terms of service agreements to comply.
                                             </p>
                                             <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                  The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common 
                                                  set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches 
                                                  that could personally affect them.
                                             </p>
                                        </div>
                                   </VxModal>
                         `}
                         </code>
                    </pre>
               </Card>
               {/* 2 */}
               <Card header={{ title: "Modal - icon", class: "mb-2 dark:text-white" }} className="mt-4 ">
                    <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                         <span className="text-blue-300 text-[.7rem] font-bold "></span>
                         <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                              {`                                   <VxModal
                                        btn={{ text: "Modal Icon", icon: <svg className="w-4 h-4 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal"  role="img" xmlns="http://www.w3.org/2000/svg" 
                                                  viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 
                                                  134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 
                                                  44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5
                                                  103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1
                                                  6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg> }}
                                               titleModal="Modal Paypal"
                                               btnAccept={{ text: "Accept" }}
                                               btnCancel={{ text: "Cancel" }}
                                             >
                                        <div className="p-4 md:p-5 space-y-4">
                                             <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odio repudiandae vitae inventore eius voluptate possimus laboriosam 
                                                  accusantium repellendus placeat fugiat dolorum nemo sequi iure tenetur consequuntur, exercitationem nesciunt dignissimos.
                                             </p>
                                        </div>
                                   </VxModal>
                        `}
                         </code>
                    </pre>
               </Card>

          </div>

     );
}

export default Modal;