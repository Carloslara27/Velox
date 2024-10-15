"use client"
// import ChartJs from "@/components/velox/chart/chartJs";
import dynamic from "next/dynamic";
import VxInput from "@/components/velox/form/input";
import VxBadge from "@/components/velox/ui/badge";
import VxButton from "@/components/velox/ui/button";
import Card from "@/components/velox/ui/card";
import VxList from "@/components/velox/ui/list";

import { BsFillArrowDownRightCircleFill, BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FaArrowRightLong, FaArrowTrendUp, FaCircle, FaEthereum, FaHourglassEnd } from "react-icons/fa6";
import { IoLogoUsd } from "react-icons/io";
import { LuSendToBack } from "react-icons/lu";
import { SiBitcoin, SiBitcoinsv } from "react-icons/si";
import { TbBrandBinance } from "react-icons/tb";
const ChartJs = dynamic(() => import('@/components/velox/chart/chartJs'), { ssr: false });
function ClientsPage() {
     return (
          <div className="w-full pt-3 px-3 dark:bg-zinc-900 h-[94vh]">
               <h1 className="text-4xl font-semibold mt-3 text-black">Simple, Balance</h1>
               <span>No contracts. No surprise fees.</span>

               <div className="grid xl:grid-cols-[3fr,1fr] mt-4 gap-2">
                    {/* 1 */}
                    <div className="flex flex-col gap-4">
                         <div className="flex flex-col gap-1 bg-[#F8FAFB] p-5 dark:bg-[#01051A] shadow-md">
                              {/* head */}
                              <div className="flex w-full items-center justify-between">
                                   <h2 className="text-5xl font-semibold flex gap-4 items-center dark:text-white">$46,541.04 <VxBadge className="text-sm px-2 py-1 rounded-xl" text="-1,480.67%" bgColor="#FEDAEC" color="#FE75BA" /></h2>
                                   <p className="dark:text-white">Bitcoin USD (BTC-USD)</p>
                              </div>
                              {/* chart */}
                              <ChartJs
                                   type="area"
                                   options={{
                                        chart: {
                                             id: "area",
                                             toolbar: {
                                                  show: false,
                                             }
                                        },
                                        dataLabels: {
                                             enabled: true,
                                        },
                                        grid: {
                                             show: false,
                                        },
                                        stroke: {
                                             width: 1,
                                             dashArray: 1
                                        },
                                        xaxis: {
                                             categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2001, 2002, 2003, 2004]
                                        },
                                        colors: ['#1FBF75'],

                                        tooltip: {
                                             custom: function ( { series, seriesIndex, dataPointIndex, w } ) {
                                                  let labelX = w.globals.categoryLabels[dataPointIndex];
                                                  let labelY = series[seriesIndex][dataPointIndex];
                                                  return `
                                             <div style="padding:10px;">
                                             <div className="block w-full p-2 border-b-[1px] border-zinc-200 border-dashed bg-[#01051A] text-white">
                                                  <h2 className="text-xs font-bold">${labelX} <span className="font-light text-zinc-300">- year</span></h2>
                                             </div>
                                             <div style="display:flex;gap:5px;align-items:center;">
                                                  <svg stroke="currentColor" fill="#FFAD52" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.648 14.423l.003-.004a1.34 1.34 0 0 1-.498.659c-.269.189-.647.338-1.188.364l-1.99.004v-2.93c.288.008 1.565-.013 2.119.015.722.035 1.171.321 1.41.668.262.351.293.82.144 1.224zm-2.129-3.261c.503-.024.852-.162 1.101-.336.214-.146.375-.367.46-.611.134-.375.107-.81-.136-1.135-.223-.319-.638-.584-1.306-.616-.495-.026-1.413-.003-1.664-.01v2.709c.025.004 1.539-.001 1.545-.001zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-6.65 2.142c.022-1.477-1.24-2.332-1.908-2.572.715-.491 1.206-1.043 1.206-2.085 0-1.655-1.646-2.43-2.647-2.529-.082-.009-.31-.013-.31-.013V5.361h-1.633l.004 1.583H10.97V5.367H9.31v1.569c-.292.007-2.049.006-2.049.006v1.401h.571c.601.016.822.362.798.677v6.041a.408.408 0 0 1-.371.391c-.249.011-.621 0-.621 0l-.32 1.588h1.996v1.6h1.661v-1.591h1.091v1.594h1.624v-1.588c1.899.05 3.643-1.071 3.66-2.913z"></path></svg>
                                                  <span className="text-zinc-200 text-xs">${labelY}</span>
                                             </div>
                                        </div>`;
                                             }
                                        }
                                   }}

                                   series={[
                                        {
                                             name: "series-1",
                                             data: [30, 40, 45, 50, 49, 60, 70, 91, 50, 49, 60, 70, 91],
                                        }
                                   ]}
                                   height={400}
                              />
                         </div>

                         {/* mini card */}
                         <div className="flex flex-wrap xl:flex-nowrap gap-2 items-center">
                              {/* 1 */}
                              <Card className="bg-[#FEEAF4] shadow-lg">
                                   <div className="flex items-center">
                                        <VxBadge className="text-sm px-2 py-2 rounded-lg h-fit" text={<TbBrandBinance />} bgColor="#FEDAEC" color="#FE75BA" />
                                        <div className="flex flex-col">
                                             <p className="text-lg font-semibold text-black">BNB-USD</p>
                                             <span className="text-zinc-400">BinanceCoin USD</span>
                                        </div>
                                   </div>
                                   <div className="w-full flex justify-between">
                                        <VxBadge className="text-sm px-2 py-1 rounded-xl h-fit" text="-1,480.67%" bgColor="#FEDAEC" color="#FE75BA" />
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
                                                  colors: ["#FE75BA"],
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
                                   </div>

                                   <h3 className="text-3xl font-semibold text-[#FE75BA]">$47,061.18</h3>
                              </Card>

                              {/* 2 */}
                              <Card className="bg-[#EFFCF0]">
                                   <div className="flex items-center">
                                        <VxBadge className="text-sm px-2 py-2 rounded-lg h-fit" text={<SiBitcoin />} bgColor="#D0F5DB" color="#24CC63" />
                                        <div className="flex flex-col">
                                             <p className="text-lg font-semibold text-black">BTC-USD</p>
                                             <span className="text-zinc-400">Bitcoin USD</span>
                                        </div>
                                   </div>
                                   <div className="w-full flex justify-between">
                                        <VxBadge className="text-sm px-2 py-1 rounded-xl h-fit" text="+2,200.67%" bgColor="#D0F5DB" color="#24CC63" />
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
                                                  colors: ["#24CC63"],
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
                                                  data: [25, 66, 9, 54, 41, 89, 63, 25, 44, 12, 36]
                                             }]}
                                             height={100}
                                        />
                                   </div>

                                   <h3 className="text-3xl font-semibold text-[#24CC63]">$22,061.18</h3>
                              </Card>

                              {/* 3 */}
                              <Card className="bg-[#FEEAF4]">
                                   <div className="flex items-center">
                                        <VxBadge className="text-sm px-2 py-2 rounded-lg h-fit" text={<FaEthereum />} bgColor="#FEDAEC" color="#FE75BA" />
                                        <div className="flex flex-col">
                                             <p className="text-lg font-semibold text-black">ETH-USD</p>
                                             <span className="text-zinc-400">Ethereum USD</span>
                                        </div>
                                   </div>
                                   <div className="w-full flex justify-between">
                                        <VxBadge className="text-sm px-2 py-1 rounded-xl h-fit" text="-1.67%" bgColor="#FEDAEC" color="#FE75BA" />
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
                                                  colors: ["#FE75BA"],
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
                                                  data: [5, 6, 21, 9, 63, 25, 20, 2, 6, 9, 4]
                                             }]}
                                             height={100}
                                        />
                                   </div>

                                   <h3 className="text-3xl font-semibold text-[#FE75BA]">$3,061.18</h3>
                              </Card>
                         </div>
                         {/*  */}
                         <div className="flex flex-wrap gap-2 items-center">
                              {/* 1 */}
                              <Card className="bg-[#FEEAF4]">
                                   <div className="flex items-center">
                                        <VxBadge className="text-sm px-2 py-2 rounded-lg h-fit" text={<TbBrandBinance />} bgColor="#FEDAEC" color="#FE75BA" />
                                        <div className="flex flex-col">
                                             <p className="text-lg font-semibold text-black">BNB-USD</p>
                                             <span className="text-zinc-400">BinanceCoin USD</span>
                                        </div>
                                   </div>
                                   <div className="w-full flex justify-between">
                                        <VxBadge className="text-sm px-2 py-1 rounded-xl h-fit" text="-1,480.67%" bgColor="#FEDAEC" color="#FE75BA" />
                                        <ChartJs
                                             type="line"
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
                                                  colors: ["#FE75BA"],
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
                                   </div>

                                   <h3 className="text-3xl font-semibold text-[#FE75BA]">$47,061.18</h3>
                              </Card>

                              {/* 2 */}
                              <Card className="bg-[#EFFCF0]">
                                   <div className="flex items-center">
                                        <VxBadge className="text-sm px-2 py-2 rounded-lg h-fit" text={<SiBitcoin />} bgColor="#D0F5DB" color="#24CC63" />
                                        <div className="flex flex-col">
                                             <p className="text-lg font-semibold text-black">BTC-USD</p>
                                             <span className="text-zinc-400">Bitcoin USD</span>
                                        </div>
                                   </div>
                                   <div className="w-full flex justify-between">
                                        <VxBadge className="text-sm px-2 py-1 rounded-xl h-fit" text="+2,200.67%" bgColor="#D0F5DB" color="#24CC63" />
                                        <ChartJs
                                             type="line"
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
                                                  colors: ["#24CC63"],
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
                                                  data: [25, 66, 9, 54, 41, 89, 63, 25, 44, 12, 36]
                                             }]}
                                             height={100}
                                        />
                                   </div>

                                   <h3 className="text-3xl font-semibold text-[#24CC63]">$22,061.18</h3>
                              </Card>

                              {/* 3 */}
                              <Card className="bg-[#FEEAF4]">
                                   <div className="flex items-center">
                                        <VxBadge className="text-sm px-2 py-2 rounded-lg h-fit" text={<FaEthereum />} bgColor="#FEDAEC" color="#FE75BA" />
                                        <div className="flex flex-col">
                                             <p className="text-lg font-semibold text-black">ETH-USD</p>
                                             <span className="text-zinc-400">Ethereum USD</span>
                                        </div>
                                   </div>
                                   <div className="w-full flex justify-between">
                                        <VxBadge className="text-sm px-2 py-1 rounded-xl h-fit" text="-1.67%" bgColor="#FEDAEC" color="#FE75BA" />
                                        <ChartJs
                                             type="line"
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
                                                  colors: ["#FE75BA"],
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
                                                  data: [5, 6, 21, 9, 63, 25, 20, 2, 6, 9, 4]
                                             }]}
                                             height={100}
                                        />
                                   </div>

                                   <h3 className="text-3xl font-semibold text-[#FE75BA]">$3,061.18</h3>
                              </Card>
                         </div>

                    </div>
                    {/* 2 */}
                    <div className="bg-[#F8FAFB] p-5 flex flex-col gap-2 rounded-lg h-fit dark:bg-[#01051A] shadow-lg">
                         <span className="text-xl font-semibold dark:text-white">Total balance</span>
                         <h2 className="text-4xl font-semibold mt-1 text-black dark:text-white">$267,820.00</h2>
                         <div className="flex gap-2 items-center">
                              <VxBadge className="text-sm px-2 py-1 rounded-xl" text="-1,480.67%" bgColor="#D0F5DB" color="#24CC63" />
                              <VxBadge className="text-sm px-2 py-1 rounded-xl" icon={<FaArrowTrendUp />} bgColor="#D0F5DB" color="#24CC63" />
                         </div>
                         <span className="text-xl font-semibold dark:text-white">My items</span>
                         <div className="w-full flex flex-wrap justify-center gap-10">
                              {/* 1 */}
                              <div className="flex items-center">
                                   <VxBadge className="p-3 rounded-xl h-fit" icon={<BsFillArrowDownRightCircleFill className="text-2xl" />} bgColor="#FEDAEC" color="#FE75BA" />
                                   <div className="flex flex-col gap-1">
                                        <span className="font-semibold text-zinc-500">Investment</span>
                                        <p className="font-bold text-2xl dark:text-white">87.1K</p>
                                        <VxBadge className="text-sm px-2 py-1 rounded-xl" text="+-10.1%" bgColor="#FEDAEC" color="#FE75BA" />
                                   </div>
                              </div>
                              {/* 2 */}
                              <div className="flex items-center">
                                   <VxBadge className="p-3 rounded-xl h-fit" icon={<BsFillArrowUpRightCircleFill className="text-2xl" />} bgColor="#D0F5DB" color="#24CC63" />
                                   <div className="flex flex-col gap-1">
                                        <span className="font-semibold text-zinc-500">Cash Back</span>
                                        <p className="font-bold text-2xl dark:text-white">19.5K</p>
                                        <VxBadge className="text-sm px-2 py-1 rounded-xl" text="+12.4%" bgColor="#D0F5DB" color="#24CC63" />
                                   </div>
                              </div>
                         </div>
                         {/*  */}
                         <span className="text-xl font-semibold mt-3 dark:text-white">Convert</span>
                         <form action="#" className="flex flex-col gap-2 max-w-[300px]">
                              <VxInput
                                   type="text"
                                   placeholder="USD"
                                   required={false}
                                   iconRight={<IoLogoUsd />}
                              />
                              <VxInput
                                   type="text"
                                   placeholder="BTC"
                                   required={false}
                                   iconRight={<SiBitcoinsv />}
                              />
                              <VxButton
                                   text="Convert"
                                   bgColor="#2557D6"
                                   color="#FFF"
                                   iconRight={<LuSendToBack className="ml-2" />}
                              />
                         </form>
                         {/*  */}
                         <div className="h-[300px] bg-black rounded-xl p-5 mt-3 flex gap-1">
                              <div className="flex flex-col gap-2">
                                   <p className="text-white font-semibold text-4xl">Upgrade <br /> your plan</p>
                                   <VxList
                                        className="text-white mt-4"
                                        items={[
                                             { icon: <FaHourglassEnd className="text-blue-500 text-sm" />, text: <p className="w-fit">Ver. 1.0.4 Apr</p>, class: "flex gap-1" },
                                             { icon: <FaCircle className="text-blue-500 text-sm" />, text: <p className="w-fit">New features</p>, class: "flex gap-1" }
                                        ]}
                                   />

                                   <a className="mt-3 cursor-pointer hover:scale-105 transition-all text-white font-semibold text-lg flex items-center gap-2">Let's GO<FaArrowRightLong /></a>
                              </div>

                              <img src="/img/edificio.png" alt="example" className="h-full w-full object-contain" />
                         </div>
                    </div>
               </div>

          </div>
     );
}

export default ClientsPage;