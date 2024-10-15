import VxAccordion from "@/components/velox/ui/accordion";
import Card from "@/components/velox/ui/card";


function AccordionPage() {

     return ( <div className="pb-20">
          <Card header={{ title: "Accordion", class: "mb-2" }}>
               <div className="grid lg:grid-cols-2 gap-2 items-center">
                    {/* 1 */}
                    <Card header={{ title: "Accordion - Sample", class: "mb-2" }} className="h-full p-4">
                         <div className="flex gap-1 items-center relative h-[300px] w-full">
                              <VxAccordion
                                   accordion={[
                                        {
                                             title: "Pregunta 1?",
                                             bodyContent: <div>
                                                  <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, alias ipsam. Accusantium laboriosam consequatur expedita earum soluta repellat tenetur ad architecto recusandae velit amet, quis vero? Expedita aperiam culpa officiis.</p>
                                             </div>
                                        },
                                        {
                                             title: "Pregunta 2?",
                                             bodyContent: <div>
                                                  <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis numquam repellat quo incidunt modi id.</p>
                                             </div>
                                        },
                                   ]}
                                   className="w-full"
                              />
                         </div>
                    </Card>
                    {/* 2 */}
                    <Card header={{ title: "Accordion - Icon", class: "mb-2" }} className="h-full p-4">
                         <div className="flex gap-1 items-center relative h-[300px] w-full">
                              <VxAccordion
                                   accordion={[
                                        {
                                             icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.97 8.265a1.45 1.45 0 0 0-.487.57.75.75 0 0 1-1.341-.67c.2-.402.513-.826.997-1.148C10.627 6.69 11.244 6.5 12 6.5c.658 0 1.369.195 1.934.619a2.45 2.45 0 0 1 1.004 2.006c0 1.033-.513 1.72-1.027 2.215-.19.183-.399.358-.579.508l-.147.123a4.329 4.329 0 0 0-.435.409v1.37a.75.75 0 1 1-1.5 0v-1.473c0-.237.067-.504.247-.736.22-.28.486-.517.718-.714l.183-.153.001-.001c.172-.143.324-.27.47-.412.368-.355.569-.676.569-1.136a.953.953 0 0 0-.404-.806C12.766 8.118 12.384 8 12 8c-.494 0-.814.121-1.03.265ZM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path><path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"></path></svg>,
                                             title: "Pregunta 1?",
                                             bodyContent: <div>
                                                  <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, alias ipsam. Accusantium laboriosam consequatur expedita earum soluta repellat tenetur ad architecto recusandae velit amet, quis vero? Expedita aperiam culpa officiis.</p>
                                             </div>
                                        },
                                        {
                                             icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.97 8.265a1.45 1.45 0 0 0-.487.57.75.75 0 0 1-1.341-.67c.2-.402.513-.826.997-1.148C10.627 6.69 11.244 6.5 12 6.5c.658 0 1.369.195 1.934.619a2.45 2.45 0 0 1 1.004 2.006c0 1.033-.513 1.72-1.027 2.215-.19.183-.399.358-.579.508l-.147.123a4.329 4.329 0 0 0-.435.409v1.37a.75.75 0 1 1-1.5 0v-1.473c0-.237.067-.504.247-.736.22-.28.486-.517.718-.714l.183-.153.001-.001c.172-.143.324-.27.47-.412.368-.355.569-.676.569-1.136a.953.953 0 0 0-.404-.806C12.766 8.118 12.384 8 12 8c-.494 0-.814.121-1.03.265ZM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path><path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"></path></svg>,
                                             title: "Pregunta 2?",
                                             bodyContent: <div>
                                                  <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis numquam repellat quo incidunt modi id.</p>
                                             </div>
                                        },
                                   ]}
                                   className="w-full"
                              />
                         </div>
                    </Card>

               </div>
          </Card>
          {/* 1 */}
          <Card header={{ title: "Accordion - Sample", class: "mb-2 dark:text-white" }} className="mt-4">
               <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                    <span className="text-blue-300 text-[.7rem] font-bold "></span>
                    <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                         {`                              <VxAccordion
                                   accordion={[
                                        {
                                             title: "Pregunta 1?",
                                             bodyContent: <div>
                                                  <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, alias ipsam. 
                                                  Accusantium laboriosam consequatur expedita earum soluta repellat tenetur ad architecto recusandae velit amet, quis vero? Expedita 
                                                  aperiam culpa officiis.</p>
                                             </div>
                                        },
                                        {
                                             title: "Pregunta 2?",
                                             bodyContent: <div>
                                                  <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis numquam 
                                                  repellat quo incidunt modi id.</p>
                                             </div>
                                        },
                                   ]}
                              />
                    `}
                    </code>
               </pre>
          </Card>
          {/* 2 */}
          <Card header={{ title: "Accordion - Icon", class: "mb-2 dark:text-white" }} className="mt-4">
               <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                    <span className="text-blue-300 text-[.7rem] font-bold "></span>
                    <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                         {`                                   <VxAccordion
                                        accordion={[
                                             {
                                                  icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" 
                                                            xmlns="http://www.w3.org/2000/svg"><path d="M10.97 8.265a1.45 1.45 0 0 0-.487.57.75.75 0 0 1-1.341-.67c.2-.402.513-.826.997-1.148C10.627 
                                                            6.69 11.244 6.5 12 6.5c.658 0 1.369.195 1.934.619a2.45 2.45 0 0 1 1.004 2.006c0 1.033-.513 1.72-1.027 2.215-.19.183-.399.358-.579.508l-.147.123a4.329 
                                                            4.329 0 0 0-.435.409v1.37a.75.75 0 1 1-1.5 0v-1.473c0-.237.067-.504.247-.736.22-.28.486-.517.718-.714l.183-.153.001-.001c.172-.143.324-.27.47-.412.368-.355.569-.676.569-1.136a.953.953 
                                                            0 0 0-.404-.806C12.766 8.118 12.384 8 12 8c-.494 0-.814.121-1.03.265ZM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path><path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 
                                                            1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"></path>
                                                       </svg>,
                                                  title: "Pregunta 1?",
                                                  bodyContent: <div>
                                                       <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, alias ipsam. 
                                                       Accusantium laboriosam consequatur expedita earum soluta repellat tenetur ad architecto recusandae velit amet, quis vero? Expedita 
                                                       aperiam culpa officiis.</p>
                                                  </div>
                                             },
                                             {
                                                  icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" 
                                                            xmlns="http://www.w3.org/2000/svg"><path d="M10.97 8.265a1.45 1.45 0 0 0-.487.57.75.75 0 0 1-1.341-.67c.2-.402.513-.826.997-1.148C10.627 
                                                            6.69 11.244 6.5 12 6.5c.658 0 1.369.195 1.934.619a2.45 2.45 0 0 1 1.004 2.006c0 1.033-.513 1.72-1.027 2.215-.19.183-.399.358-.579.508l-.147.123a4.329 
                                                            4.329 0 0 0-.435.409v1.37a.75.75 0 1 1-1.5 0v-1.473c0-.237.067-.504.247-.736.22-.28.486-.517.718-.714l.183-.153.001-.001c.172-.143.324-.27.47-.412.368-.355.569-.676.569-1.136a.953.953 
                                                            0 0 0-.404-.806C12.766 8.118 12.384 8 12 8c-.494 0-.814.121-1.03.265ZM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path><path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 
                                                            1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"></path>
                                                       </svg>,
                                                  title: "Pregunta 2?",
                                                  bodyContent: <div>
                                                       <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis numquam 
                                                       repellat quo incidunt modi id.</p>
                                                  </div>
                                             },
                                        ]}
                                   />
                    `}
                    </code>
               </pre>
          </Card>


     </div>
     )
}

export default AccordionPage;