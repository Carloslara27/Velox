"use client"
import dynamic from "next/dynamic";
// import ChartJs from "@/components/velox/chart/chartJs";
import VxButton from "@/components/velox/ui/button";
import Card from "@/components/velox/ui/card";
import { FaBitcoin } from "react-icons/fa6";
import { IoArrowDownSharp, IoArrowUpSharp, IoInformationCircleSharp } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { RiArrowUpDoubleLine, RiArrowUpSFill } from "react-icons/ri";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { LiaDownloadSolid, LiaUploadSolid } from "react-icons/lia";
import { LuArrowLeftRight } from "react-icons/lu";
import { SiBitcoincash, SiEthereum, SiTether } from "react-icons/si";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import { useEffect, useState } from "react";
import Loading from "./loading";
import VxCalendar from "@/components/velox/ui/calendar";
import VxAvatar from "@/components/velox/ui/avatar";
import { PiPhoneCall } from "react-icons/pi";
import { RiUserFollowLine } from "react-icons/ri";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import VxTooltip from "@/components/velox/ui/tooltip";
import { MdOutlineShowChart } from "react-icons/md";
import { LuLineChart } from "react-icons/lu";

let chartdata = [{
     data: [{
          x: new Date( 1538778600000 ),
          y: [6629.81, 6650.5, 6623.04, 6633.33]
     },
     {
          x: new Date( 1538780400000 ),
          y: [6632.01, 6643.59, 6620, 6630.11]
     },
     {
          x: new Date( 1538782200000 ),
          y: [6630.71, 6648.95, 6623.34, 6635.65]
     },
     {
          x: new Date( 1538784000000 ),
          y: [6635.65, 6651, 6629.67, 6638.24]
     },
     {
          x: new Date( 1538785800000 ),
          y: [6638.24, 6640, 6620, 6624.47]
     },
     {
          x: new Date( 1538787600000 ),
          y: [6624.53, 6636.03, 6621.68, 6624.31]
     },
     {
          x: new Date( 1538789400000 ),
          y: [6624.61, 6632.2, 6617, 6626.02]
     },
     {
          x: new Date( 1538791200000 ),
          y: [6627, 6627.62, 6584.22, 6603.02]
     },
     {
          x: new Date( 1538793000000 ),
          y: [6605, 6608.03, 6598.95, 6604.01]
     },
     {
          x: new Date( 1538794800000 ),
          y: [6604.5, 6614.4, 6602.26, 6608.02]
     },
     {
          x: new Date( 1538796600000 ),
          y: [6608.02, 6610.68, 6601.99, 6608.91]
     },
     {
          x: new Date( 1538798400000 ),
          y: [6608.91, 6618.99, 6608.01, 6612]
     },
     {
          x: new Date( 1538800200000 ),
          y: [6612, 6615.13, 6605.09, 6612]
     },
     {
          x: new Date( 1538802000000 ),
          y: [6612, 6624.12, 6608.43, 6622.95]
     },
     {
          x: new Date( 1538803800000 ),
          y: [6623.91, 6623.91, 6615, 6615.67]
     },
     {
          x: new Date( 1538805600000 ),
          y: [6618.69, 6618.74, 6610, 6610.4]
     },
     {
          x: new Date( 1538807400000 ),
          y: [6611, 6622.78, 6610.4, 6614.9]
     },
     {
          x: new Date( 1538809200000 ),
          y: [6614.9, 6626.2, 6613.33, 6623.45]
     },
     {
          x: new Date( 1538811000000 ),
          y: [6623.48, 6627, 6618.38, 6620.35]
     },
     {
          x: new Date( 1538812800000 ),
          y: [6619.43, 6620.35, 6610.05, 6615.53]
     },
     {
          x: new Date( 1538814600000 ),
          y: [6615.53, 6617.93, 6610, 6615.19]
     },
     {
          x: new Date( 1538816400000 ),
          y: [6615.19, 6621.6, 6608.2, 6620]
     },
     {
          x: new Date( 1538818200000 ),
          y: [6619.54, 6625.17, 6614.15, 6620]
     },
     {
          x: new Date( 1538820000000 ),
          y: [6620.33, 6634.15, 6617.24, 6624.61]
     },
     {
          x: new Date( 1538821800000 ),
          y: [6625.95, 6626, 6611.66, 6617.58]
     },
     {
          x: new Date( 1538823600000 ),
          y: [6619, 6625.97, 6595.27, 6598.86]
     },
     {
          x: new Date( 1538825400000 ),
          y: [6598.86, 6598.88, 6570, 6587.16]
     },
     {
          x: new Date( 1538827200000 ),
          y: [6588.86, 6600, 6580, 6593.4]
     },
     {
          x: new Date( 1538829000000 ),
          y: [6593.99, 6598.89, 6585, 6587.81]
     },
     {
          x: new Date( 1538830800000 ),
          y: [6587.81, 6592.73, 6567.14, 6578]
     },
     {
          x: new Date( 1538832600000 ),
          y: [6578.35, 6581.72, 6567.39, 6579]
     },
     {
          x: new Date( 1538834400000 ),
          y: [6579.38, 6580.92, 6566.77, 6575.96]
     },
     {
          x: new Date( 1538836200000 ),
          y: [6575.96, 6589, 6571.77, 6588.92]
     },
     {
          x: new Date( 1538838000000 ),
          y: [6588.92, 6594, 6577.55, 6589.22]
     },
     {
          x: new Date( 1538839800000 ),
          y: [6589.3, 6598.89, 6589.1, 6596.08]
     },
     {
          x: new Date( 1538841600000 ),
          y: [6597.5, 6600, 6588.39, 6596.25]
     },
     {
          x: new Date( 1538843400000 ),
          y: [6598.03, 6600, 6588.73, 6595.97]
     },
     {
          x: new Date( 1538845200000 ),
          y: [6595.97, 6602.01, 6588.17, 6602]
     },
     {
          x: new Date( 1538847000000 ),
          y: [6602, 6607, 6596.51, 6599.95]
     },
     {
          x: new Date( 1538863200000 ),
          y: [6602.99, 6606, 6584.99, 6587.81]
     },
     {
          x: new Date( 1538865000000 ),
          y: [6587.81, 6595, 6583.27, 6591.96]
     },
     {
          x: new Date( 1538866800000 ),
          y: [6591.97, 6596.07, 6585, 6588.39]
     },
     {
          x: new Date( 1538868600000 ),
          y: [6587.6, 6598.21, 6587.6, 6594.27]
     },
     {
          x: new Date( 1538870400000 ),
          y: [6596.44, 6601, 6590, 6596.55]
     },
     {
          x: new Date( 1538872200000 ),
          y: [6598.91, 6605, 6596.61, 6600.02]
     },
     {
          x: new Date( 1538874000000 ),
          y: [6600.55, 6605, 6589.14, 6593.01]
     },
     {
          x: new Date( 1538875800000 ),
          y: [6593.15, 6605, 6592, 6603.06]
     },
     {
          x: new Date( 1538877600000 ),
          y: [6603.07, 6604.5, 6599.09, 6603.89]
     },
     {
          x: new Date( 1538879400000 ),
          y: [6604.44, 6604.44, 6600, 6603.5]
     },
     {
          x: new Date( 1538881200000 ),
          y: [6603.5, 6603.99, 6597.5, 6603.86]
     },
     {
          x: new Date( 1538883000000 ),
          y: [6603.85, 6605, 6600, 6604.07]
     },
     {
          x: new Date( 1538884800000 ),
          y: [6604.98, 6606, 6604.07, 6606]
     },
     ]
}];

const ChartJs = dynamic( () => import( "@/components/velox/chart/chartJs" ), {
     ssr: false // Deshabilita el SSR para este componente
} );
function Home() {
     const [loading, setLoading] = useState( true );
     useEffect( () => {
          setTimeout( () => {
               setLoading( false )
          }, 3000 )
     }
          , [] )
     return (
          <>
               {!loading && <div className="grid lg:grid-cols-[1fr,390px] gap-3">
                    <div className="h-fit flex flex-col xl:grid gap-2 xl:grid-cols-2 max-w-[90%] lg:max-w-[100%]">

                         {/* card 1 -hello joe */}
                         <Card className="bg-blue-700 flex gap-3 justify-between w-90 lg:w-full">
                              <div className="w-full grid grid-cols-2 gap-2 items-center max-h-[250px]">
                                   <div className="flex flex-col w-fit h-full justify-around">
                                        <h2 className="text-4xl font-semibold mt-3 text-white">Hello Joe, welcome </h2>
                                        <p className="text-white/70 text-sm lg:text-lg">You Have 12 new applications. It is a lot a work for today! So let's start 🥳.</p>
                                        <VxButton
                                             text="Review it!"
                                             className="font-bold text-white hover:text-blue-700 hover:bg-white text-[1.1rem]"
                                        />
                                   </div>
                                   <img src="/img/hello.png" alt="vector" />
                              </div>

                         </Card>
                         {/* card 2 - */}
                         <div className="flex gap-2">
                              {/* 1 */}
                              <div className="flex flex-col w-[340px] gap-1 justify-between">
                                   <Card className="bg-white flex gap-3 justify-between w-90 lg:w-full h-full">
                                        <div className="flex items-center gap-2 justify-between">
                                             <h2 className="w-fit font-semibold text-white px-5 py-2.5  rounded-lg bg-blue-500"><FaMoneyBillWaveAlt /></h2>
                                             <p className="font-semibold dark:text-white">12%</p>
                                        </div>
                                        <h2 className="text-4xl font-bold flex gap-1 items-baseline dark:text-white">42.34% <MdOutlineShowChart className="text-2xl text-green-600" /> </h2>
                                        <div className="flex items-center gap-2 justify-between">
                                             <p className="w-fit text-zinc-500 text-sm rounded-lg ">Ganancias</p>
                                             <VxTooltip custom={{ children: <IoInformationCircleSharp />, class: "text-3xl text-blue-500 cursor-pointer" }}>
                                                  <p className="w-[110px]">Las ganacias son </p>
                                             </VxTooltip>
                                        </div>
                                   </Card>
                                   {/* 2 */}
                                   <Card className="bg-white flex gap-3 justify-between w-90 lg:w-full">
                                        <div className="flex items-center gap-2 justify-between">
                                             <h2 className="w-fit font-semibold text-white px-5 py-2.5  rounded-lg bg-green-500"><FaMoneyBillWaveAlt /></h2>
                                             <p className="font-semibold dark:text-white">$10.000.000 USD</p>
                                        </div>
                                   </Card>

                              </div>

                              {/* 2 */}
                              <Card className="bg-white flex gap-3 justify-between w-90 lg:w-full">
                                   <div className="flex items-center  justify-between gap-2">
                                        <div className="flex items-center gap-2">
                                             <h2 className="w-fit font-semibold text-white px-2.5 py-2.5  rounded-lg bg-blue-500"><LuLineChart className="text-white" /></h2>
                                             <p className="font-semibold dark:text-white">Content Designer</p>
                                        </div>
                                        <span>$1.000 /mount</span>
                                   </div>
                                   <ChartJs
                                        type="area"
                                        options={{
                                             chart: {
                                                  type: 'area',
                                                  width: 100,
                                                  height: 35,
                                                  sparkline: {
                                                       enabled: true,
                                                  },
                                             },
                                             stroke: {
                                                  width: 1,
                                                  dashArray: 0
                                             },
                                             colors: ["#2563EB"],
                                             tooltip: {
                                                  fixed: {
                                                       enabled: false
                                                  },
                                                  x: {
                                                       show: false
                                                  },
                                                  y: {

                                                  },
                                                  marker: {
                                                       show: false
                                                  }
                                             }
                                        }}

                                        series={[{
                                             data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
                                        }]}
                                        height={100}
                                   />
                              </Card>
                         </div>

                         {/* chart */}
                         <Card
                              className="col-span-2 w-[90%] lg:w-full"
                              header={{
                                   html: <div className="flex flex-wrap justify-between w-full gap-2">
                                        <div className="flex items-center gap-1">
                                             <FaBitcoin className="text-yellow-500 text-3xl" />
                                             <div className="flex flex-col">
                                                  <p className="font-semibold dark:text-white">BTC/USDT</p>
                                                  <span className="text-xs text-zinc-500">Bitcoins</span>
                                             </div>
                                        </div>

                                        <div className=" flex flex-wrap justify-start gap-10">
                                             <div className="flex flex-col gap-1">
                                                  <div className="flex items-center gap-1">
                                                       <MdAccessTime className="text-sm text-zinc-400" />
                                                       <span className="text-sm text-zinc-400">24h change</span>
                                                  </div>
                                                  <p className="text-emerald-500 font-semibold text-lg">520.80 +1.25%</p>
                                             </div>

                                             <div className="hidden lg:block border-r-[1px] border-zinc-200 w-[1px]"></div>

                                             <div className="flex flex-col gap-1">
                                                  <div className="flex items-center gap-1">
                                                       <IoArrowUpSharp className="text-sm text-zinc-400" />
                                                       <span className="text-sm text-zinc-400">24h high</span>
                                                  </div>
                                                  <p className=" font-semibold text-lg dark:text-white">78,213.21</p>
                                             </div>

                                             <div className="hidden lg:block border-r-[1px] border-zinc-200 w-[1px]"></div>

                                             <div className="flex flex-col gap-1">
                                                  <div className="flex items-center gap-1">
                                                       <IoArrowDownSharp className="text-sm text-zinc-400" />
                                                       <span className="text-sm text-zinc-400">24h low</span>
                                                  </div>
                                                  <p className=" font-semibold text-lg dark:text-white">51,245.12</p>
                                             </div>

                                             <div className="hidden lg:block border-r-[1px] border-zinc-200 w-[1px]"></div>

                                             <div className="flex flex-col gap-1">
                                                  <div className="flex items-center gap-1">
                                                       <TbDeviceDesktopAnalytics className="text-sm text-zinc-400" />
                                                       <span className="text-sm text-zinc-400">24h volumen</span>
                                                  </div>
                                                  <p className=" font-semibold text-lg dark:text-white">75,193,323.212</p>
                                             </div>


                                        </div>
                                   </div>
                              }}
                         >
                              <div className="w-full">
                                   <ChartJs
                                        type="candlestick"
                                        options={{
                                             chart: {
                                                  type: 'candlestick',
                                                  height: 610
                                             },
                                             xaxis: {
                                                  type: 'datetime'
                                             },
                                             yaxis: {

                                             },
                                             grid: {
                                                  show: false,
                                             }
                                        }}

                                        series={chartdata}
                                        height={610}
                                   />
                              </div>
                         </Card>
                    </div>
                    {/*  */}
                    <div className="flex flex-col w-[90%] gap-2 lg:w-full">
                         <Card className="bg-blue-700 flex gap-3 justify-between w-90 lg:w-full">
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
                                             width:100%;
                                             color:#fff;
                                        }
                                        #my-calendar .rdp-head_row { 
                                             color: #fff; 
                                        }
                                        #my-calendar .rdp-day{
                                             color:#eeeeee;
                                        }
                                        #my-calendar .my-selected:not([disabled]) { 
                                             font-weight: bold; 
                                             border-radius:9px;
                                             background-color:#2563EB;
                                             color:#fff;
                                             transition:all .2s ease-in-out;
                                        }
                                        #my-calendar .my-selected:hover:not([disabled]) { 
                                             background-color:#2563EB;
                                             color: #2563EB;
                                        }
                                        #my-calendar .rdp-button:hover:not([disabled]):not(.rdp-day_selected){
                                             background-color:#2563EB;
                                             color:#fff;
                                             transition:all .2s ease-in-out;
                                             border-radius:9px;
                                        }
                                        #my-calendar .my-today { 
                                             font-weight: bold;
                                             font-size: 140%; 
                                             color: #fff;
                                        }
                                        #my-calendar .rdp-table{
                                             min-width:100%;
                                        }
                                        `}
                              />
                         </Card>
                         {/* 2 */}
                         <Card className="bg-white flex fle-col gap-3 justify-between w-90 lg:w-full"
                              header={{ title: "New Applicants", class: "border-none" }}>
                              {/* item 1 */}
                              <div className="flex items-center gap-2 justify-between ">
                                   <div className="flex gap-1">
                                        <VxAvatar width={50} height={50} img="/img/example.jpeg" className="bg-cover" />
                                        <div className="flex flex-col">
                                             <p className="font-semibold text-lg dark:text-white">Danny Nelson</p>
                                             <span className="text-zinc-500">Node.js Developer</span>
                                        </div>
                                   </div>
                                   <div className="flex gap-1">
                                        <VxButton
                                             iconLeft={<RiUserFollowLine className="text-xl absolute left-[25%]" />}
                                             className="rounded-full w-[45px] h-[45px] relative bg-blue-200/60 text-blue-600 hover:bg-blue-300 hover:text-white"
                                        />
                                        <VxButton
                                             iconLeft={<PiPhoneCall className="text-xl absolute left-[25%]" />}
                                             className="rounded-full w-[45px] h-[45px] relative bg-purple-200/60 text-purple-600 hover:bg-purple-600 hover:text-white"
                                        />
                                   </div>
                              </div>
                              {/* item 2 */}
                              <div className="flex items-center gap-2 justify-between ">
                                   <div className="flex gap-1">
                                        <VxAvatar width={50} height={50} img="https://i.pinimg.com/236x/86/54/0a/86540af4eb378f5ca32da7c15a5a842d.jpg" className="bg-cover" />
                                        <div className="flex flex-col">
                                             <p className="font-semibold text-lg dark:text-white">Jennifer Patterson</p>
                                             <span className="text-zinc-500">Marketing</span>
                                        </div>
                                   </div>
                                   <div className="flex gap-1">
                                        <VxButton
                                             iconLeft={<RiUserFollowLine className="text-xl absolute left-[25%]" />}
                                             className="rounded-full w-[45px] h-[45px] relative bg-blue-200/60 text-blue-600 hover:bg-blue-500 hover:text-white"
                                        />
                                        <VxButton
                                             iconLeft={<PiPhoneCall className="text-xl absolute left-[25%]" />}
                                             className="rounded-full w-[45px] h-[45px] relative bg-purple-200/60 text-purple-600 hover:bg-purple-600 hover:text-white"
                                        />
                                   </div>
                              </div>
                              {/* item 3 */}
                              <div className="flex items-center gap-2 justify-between ">
                                   <div className="flex gap-1">
                                        <VxAvatar width={50} height={50} img="https://i.pinimg.com/236x/df/94/50/df9450dc1272851efd859c8eca295f1b.jpg" className="bg-cover" />
                                        <div className="flex flex-col">
                                             <p className="font-semibold text-lg dark:text-white">Timoty Watson</p>
                                             <span className="text-zinc-500">IOS Developer</span>
                                        </div>
                                   </div>
                                   <div className="flex gap-1">
                                        <VxButton
                                             iconLeft={<RiUserFollowLine className="text-xl absolute left-[25%]" />}
                                             className="rounded-full w-[45px] h-[45px] relative bg-blue-200/60 text-blue-600 hover:bg-blue-500 hover:text-white"
                                        />
                                        <VxButton
                                             iconLeft={<PiPhoneCall className="text-xl absolute left-[25%]" />}
                                             className="rounded-full w-[45px] h-[45px] relative bg-purple-200/60 text-purple-600 hover:bg-purple-600 hover:text-white"
                                        />
                                   </div>
                              </div>
                         </Card>
                         {/* 3 */}
                         <Card>
                              <ChartJs
                                   type="radialBar"
                                   options={{
                                        chart: {
                                             height: 350,
                                             type: 'radialBar',
                                             offsetY: -10
                                        },
                                        plotOptions: {
                                             radialBar: {
                                                  startAngle: -135,
                                                  endAngle: 135,
                                                  dataLabels: {
                                                       name: {
                                                            fontSize: '16px',
                                                            color: "#1D4ED8",
                                                            offsetY: 120
                                                       },
                                                       value: {
                                                            offsetY: 76,
                                                            fontSize: '22px',
                                                            color: "#1D4ED8",
                                                            formatter: function ( val ) {
                                                                 return val + "%";
                                                            }
                                                       }
                                                  }
                                             }
                                        },
                                        fill: {
                                             type: 'gradient',
                                             gradient: {
                                                  shade: 'dark',
                                                  shadeIntensity: 0.15,
                                                  inverseColors: false,
                                                  opacityFrom: 1,
                                                  opacityTo: 1,
                                                  stops: [0, 50, 65, 91]
                                             },
                                        },
                                        stroke: {
                                             dashArray: 4
                                        },
                                        labels: ['Median Ratio'],
                                        colors: ['#1D4ED8'],
                                   }}
                                   series={[44]}
                                   height={400}
                              />
                         </Card>
                    </div>

               </div>}

               {loading && <Loading />}
          </>
     );
}

export default Home;