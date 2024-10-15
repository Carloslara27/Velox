"use client"
import Card from "@/components/velox/ui/card";
import VxCalendar from "@/components/velox/ui/calendar";

function CalendarPage() {
     return (
          <div className="pb-10">
               <Card header={{ title: "Calendar", class: "mb-2" }}>
                    <p>More Information in <a href="https://react-day-picker.js.org" target="_blank" className="text-blue-600 underline">library</a></p>
                    <div className="grid lg:grid-cols-2 gap-2 items-center">

                         <Card header={{ title: "Sample", class: "mb-2" }} className="h-full">
                              <div className="grid lg:grid-cols-2 gap-2 items-center">
                                   {/* 1 */}
                                   <VxCalendar
                                        mode="single"
                                        footer={{ text: "Example title", showDate: true }}
                                   />
                                   {/* 2 */}
                                   <VxCalendar
                                        mode="multiple"
                                        defaultMonth={new Date( 2024, 5, 10 )}
                                        hidden={[
                                             new Date( 2024, 5, 10 ),
                                             new Date( 2024, 5, 12 ),
                                             new Date( 2024, 5, 20 ),
                                        ]}
                                        min={2}
                                        footer={{ text: "Example title", showDate: true }}
                                   />
                              </div>
                         </Card>

                         {/* 2 examples */}
                         <Card header={{ title: "Custom", class: "mb-2" }} className="flex flex-col gap-8 h-full">
                              <div className="grid lg:grid-cols-2 gap-2 items-center">
                                   <VxCalendar
                                        mode="single"
                                        footer={{ text: "Example title", showDate: true }}
                                        modifiersStyles={{}}
                                        modifiersClassNames={{
                                             selected: 'my-selected',
                                             today: 'my-today',
                                             head: 'custom-head'
                                        }}
                                        id="my-calendar"
                                        css={`
                                   #my-calendar .rdp-caption{
                                        flex-direction:row-reverse;
                                   }
                                       #my-calendar .rdp-month{
                                             background-color:#2E2F3A;
                                             padding:10px;
                                             border-radius:10px;
                                             color:#fff;
                                        }
                                        #my-calendar .rdp-head_row { 
                                             color: #fff; 
                                        }
                                        #my-calendar .rdp-day{
                                             color:#77787E;
                                        }
                                        #my-calendar .my-selected:not([disabled]) { 
                                             font-weight: bold; 
                                             border-radius:9px;
                                             background-color:#B08FF3;
                                             color:#fff;
                                             transition:all .2s ease-in-out;
                                        }
                                        #my-calendar .my-selected:hover:not([disabled]) { 
                                             background-color:#DFD2FA;
                                             color: #B08FF3;
                                        }
                                        #my-calendar .rdp-button:hover:not([disabled]):not(.rdp-day_selected){
                                             background-color:#DFD2FA;
                                             color:#fff;
                                             transition:all .2s ease-in-out;
                                             border-radius:9px;
                                        }
                                        #my-calendar .my-today { 
                                             font-weight: bold;
                                             font-size: 140%; 
                                             color: #B08FF3;
                                        }
                                        #my-calendar .rdp-tfoot td{
                                             padding:10px;
                                             border-radius:9px;
                                             width:fit-content;
                                             background-color:#B08FF3;
                                             color: #fff;
                                             text-align:center;
                                        }
                                        `}
                                   />

                                   <VxCalendar
                                        mode="single"
                                        modifiersStyles={{}}
                                        modifiersClassNames={{
                                             selected: 'my-selected',
                                             today: 'my-today',
                                             head: 'custom-head'
                                        }}
                                        id="my-calendar"
                                        css={`
                                   #my-calendar .rdp-caption{
                                        flex-direction:row-reverse;
                                   }
                                       #my-calendar .rdp-month{
                                             background-color:#2E2F3A;
                                             padding:10px;
                                             border-radius:10px;
                                             color:#fff;
                                        }
                                        #my-calendar .rdp-head_row { 
                                             color: #fff; 
                                        }
                                        #my-calendar .rdp-day{
                                             color:#77787E;
                                        }
                                        #my-calendar .my-selected:not([disabled]) { 
                                             font-weight: bold; 
                                             border-radius:9px;
                                             background-color:#B08FF3;
                                             color:#fff;
                                             transition:all .2s ease-in-out;
                                        }
                                        #my-calendar .my-selected:hover:not([disabled]) { 
                                             background-color:#DFD2FA;
                                             color: #B08FF3;
                                        }
                                        #my-calendar .rdp-button:hover:not([disabled]):not(.rdp-day_selected){
                                             background-color:#DFD2FA;
                                             color:#fff;
                                             transition:all .2s ease-in-out;
                                             border-radius:9px;
                                        }
                                        #my-calendar .my-today { 
                                             font-weight: bold;
                                             font-size: 140%; 
                                             color: #B08FF3;
                                        }
                                      
                                        `}
                                   />
                              </div>
                         </Card>
                    </div>
                    {/* 3 */}
                    <Card header={{ title: "Code - Example 1", class: "mb-2 dark:text-white" }} className="mt-4 ">
                         <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                              <span className="text-blue-300 text-[.7rem] font-bold "></span>
                              <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                                   {`                                    <VxCalendar
                                        mode="multiple"
                                        defaultMonth={new Date( 2024, 5, 10 )}
                                        hidden={[
                                             new Date( 2024, 5, 10 ),
                                             new Date( 2024, 5, 12 ),
                                             new Date( 2024, 5, 20 ),
                                        ]}
                                        min={2}
                                        footer={{ text: "Example title", showDate: true }}
                                   />`}
                              </code>
                         </pre>
                    </Card>
                    {/* 4 */}
                    <Card header={{ title: "Code - Example 1", class: "mb-2 dark:text-white" }} className="mt-4 ">
                         <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
                              <span className="text-blue-300 text-[.7rem] font-bold "></span>
                              <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
                                   {`                                    <VxCalendar
                                        mode="single"
                                        footer={{ text: "Example title", showDate: true }}
                                        modifiersStyles={{}}
                                        modifiersClassNames={{
                                             selected: 'my-selected',
                                             today: 'my-today',
                                             head: 'custom-head'
                                        }}
                                        id="my-calendar"
                                        css={"
                                             #my-calendar .rdp-caption{
                                                  flex-direction:row-reverse;
                                             }
                                             #my-calendar .rdp-month{
                                                       background-color:#2E2F3A;
                                                       padding:10px;
                                                       border-radius:10px;
                                                       color:#fff;
                                                  }
                                                  #my-calendar .rdp-head_row { 
                                                       color: #fff; 
                                                  }
                                                  #my-calendar .rdp-day{
                                                       color:#77787E;
                                                  }
                                                  #my-calendar .my-selected:not([disabled]) { 
                                                       font-weight: bold; 
                                                       border-radius:9px;
                                                       background-color:#B08FF3;
                                                       color:#fff;
                                                       transition:all .2s ease-in-out;
                                                  }
                                                  #my-calendar .my-selected:hover:not([disabled]) { 
                                                       background-color:#DFD2FA;
                                                       color: #B08FF3;
                                                  }
                                                  #my-calendar .rdp-button:hover:not([disabled]):not(.rdp-day_selected){
                                                       background-color:#DFD2FA;
                                                       color:#fff;
                                                       transition:all .2s ease-in-out;
                                                       border-radius:9px;
                                                  }
                                                  #my-calendar .my-today { 
                                                       font-weight: bold;
                                                       font-size: 140%; 
                                                       color: #B08FF3;
                                                  }
                                                  #my-calendar .rdp-tfoot td{
                                                       padding:10px;
                                                       border-radius:9px;
                                                       width:fit-content;
                                                       background-color:#B08FF3;
                                                       color: #fff;
                                                       text-align:center;
                                                  }
                                                  "}
                                             />`}
                              </code>
                         </pre>
                    </Card>
               </Card>
          </div>
     );
}

export default CalendarPage;