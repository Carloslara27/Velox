import VxTimepicker from "@/components/velox/form/timepicker";
import Card from "@/components/velox/ui/card";

function TimepickerPage() {
     return ( <div className="pb-20">
          <Card header={{ title: "Timepicker", class: "mb-2" }}>
               <div className="grid lg:grid-cols-2 gap-2 items-center">
                    {/* 1 */}
                    <Card header={{ title: "Timepicker - Sample", class: "mb-2" }} className="h-full p-4">
                         <div className="flex gap-2 items-center relative h-[200px]">
                              <VxTimepicker
                                   id="example"
                                   name="example"
                                   min="09:00"
                                   max="10:00"
                                   value="06:00"
                                   label={{ text: "Timepicker time" }}
                              />
                         </div>
                    </Card>
                    {/* 2 */}
                    <Card header={{ title: "Timepicker - icon", class: "mb-2" }} className="h-full p-4">
                         <div className="flex flex-wrap gap-3 items-center relative h-[200px]">
                              <VxTimepicker
                                   id="example"
                                   name="example"
                                   min="09:00"
                                   max="10:00"
                                   value="05:00"
                                   label={{ text: "Timepicker time" }}
                                   icon={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#CFD8DC" d="M12,40V20h32v20c0,2.2-1.8,4-4,4H16C13.8,44,12,42.2,12,40z"></path><path fill="#78909C" d="M44,16v6H12v-6c0-2.2,1.8-4,4-4h24C42.2,12,44,13.8,44,16z"></path><g fill="#37474F"><circle cx="37" cy="16" r="3"></circle><circle cx="20" cy="16" r="3"></circle></g><g fill="#B0BEC5"><path d="M37,10c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2s2-0.9,2-2v-4C39,10.9,38.1,10,37,10z"></path><path d="M20,10c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2s2-0.9,2-2v-4C22,10.9,21.1,10,20,10z"></path></g><rect x="32" y="34" fill="#90A4AE" width="4" height="4"></rect><rect x="26" y="34" fill="#90A4AE" width="4" height="4"></rect><rect x="20" y="34" fill="#90A4AE" width="4" height="4"></rect><rect x="32" y="28" fill="#90A4AE" width="4" height="4"></rect><rect x="26" y="28" fill="#90A4AE" width="4" height="4"></rect><rect x="20" y="28" fill="#90A4AE" width="4" height="4"></rect><circle fill="#F44336" cx="16" cy="15" r="12"></circle><circle fill="#eee" cx="16" cy="15" r="9"></circle><rect x="15" y="8" width="2" height="7"></rect><rect x="16.9" y="14.2" transform="matrix(-.707 .707 -.707 -.707 42.506 16.192)" width="1.9" height="5.4"></rect><circle cx="16" cy="15" r="1.5"></circle></svg>}
                              />
                         </div>
                    </Card>

               </div>
          </Card>
          {/* 1 */}
          <Card header={{ title: "Timepicker - Sample", class: "mb-2 dark:text-white" }} className="mt-4">
               <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                    <span className="text-blue-300 text-[.7rem] font-bold "></span>
                    <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                         {`                                 <VxTimepicker
                                   id="example"
                                   name="example"
                                   min="09:00"
                                   max="10:00"
                                   value="06:00"
                                   label={{text:"Timepicker time"}}
                              />
               `}
                    </code>
               </pre>
          </Card>
          {/* 2 */}
          <Card header={{ title: "Timepicker - icon", class: "mb-2 dark:text-white" }} className="mt-4">
               <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                    <span className="text-blue-300 text-[.7rem] font-bold "></span>
                    <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                         {`                       <VxTimepicker
                           id="example"
                           name="example"
                           min="09:00"
                           max="10:00"
                           value="05:00"
                           label={{text:"Timepicker time"}}
                           icon={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="1em" 
                                   width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#CFD8DC" d="M12,40V20h32v20c0,2.2-1.8,4-4,4H16C13.8,44,12,42.2,12,40z"></path><path 
                                   fill="#78909C" d="M44,16v6H12v-6c0-2.2,1.8-4,4-4h24C42.2,12,44,13.8,44,16z"></path><g fill="#37474F"><circle cx="37" cy="16" r="3"></circle>
                                   <circle cx="20" cy="16" r="3"></circle></g><g fill="#B0BEC5"><path d="M37,10c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2s2-0.9,2-2v-4C39,10.9,38.1,10,37,10z">
                                   </path><path d="M20,10c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2s2-0.9,2-2v-4C22,10.9,21.1,10,20,10z"></path></g><rect x="32" y="34" fill="#90A4AE" width="4" 
                                   height="4"></rect><rect x="26" y="34" fill="#90A4AE" width="4" height="4"></rect><rect x="20" y="34" fill="#90A4AE" width="4" height="4"></rect><rect 
                                   x="32" y="28" fill="#90A4AE" width="4" height="4"></rect><rect x="26" y="28" fill="#90A4AE" width="4" height="4"></rect><rect x="20" y="28" fill="#90A4AE" 
                                   width="4" height="4"></rect><circle fill="#F44336" cx="16" cy="15" r="12"></circle><circle fill="#eee" cx="16" cy="15" r="9"></circle><rect x="15" y="8" 
                                   width="2" height="7"></rect><rect x="16.9" y="14.2" transform="matrix(-.707 .707 -.707 -.707 42.506 16.192)" width="1.9" height="5.4"></rect><circle 
                                   cx="16" cy="15" r="1.5"></circle>
                                 </svg>}
                      /> 
                                          
               `}
                    </code>
               </pre>
          </Card>

     </div>
     )
}

export default TimepickerPage;