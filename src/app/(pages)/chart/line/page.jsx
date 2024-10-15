"use client"
import dynamic from 'next/dynamic';
import Card from "@/components/velox/ui/card";
const ChartJs = dynamic(() => import("@/components/velox/chart/chartJs"), {
  ssr: false // Deshabilita el SSR para este componente
});
function Line() {
     return (
          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
               <Card header={{ title: "Chart Line", class: "mb-1" }}>
                    {/* -------------- 1 ------------- */}
                    <ChartJs
                         type="line"
                         options={{
                              chart: {
                                   id: "line",

                              },
                              dataLabels: {
                                   enabled: true,
                              },
                              grid: {
                                   show: false,
                              },
                              xaxis: {
                                   categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                              },
                              colors: ['#6D93FF'],
                              tooltip: {
                                   custom: function ( { series, seriesIndex, dataPointIndex, w } ) {
                                        let labelX = w.globals.categoryLabels[dataPointIndex];
                                        let labelY = series[seriesIndex][dataPointIndex];
                                        return `<div className="flex flex-col rounded-lg shadow-lg  w-full sm:w-full bg-[#1B1F32] ">
                                             <div className="block w-full p-2 border-b-[1px] border-zinc-200 border-dashed bg-[#01051A] text-white">
                                                  <h2 className="text-xs font-bold">${labelX} <span className="font-light text-zinc-300">- year</span></h2>
                                             </div>
                                        
                                        <div className="flex items-center gap-1 bg-[#1B1F32] p-2">
                                            ${parseInt( labelY ) < 50 ? `<svg xmlns="http://www.w3.org/2000/svg" className="text-[.7rem] text-red-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-down"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>` : `<svg className="text-[.7rem] text-emerald-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`}
                                             <span className="text-zinc-200 text-xs">${labelY}</span>
                                        </div>
                                   </div>`;
                                   }
                              }
                         }}

                         series={[
                              {
                                   name: "series-1",
                                   data: [30, 40, 45, 50, 49, 60, 70, 91]
                              }
                         ]}
                         height={400}
                    />
               </Card>

               <Card header={{ title: "Chart Area", class: "mb-1" }}>
                    {/* -------------- 2 ------------- */}
                    <ChartJs
                         type="area"
                         options={{
                              chart: {
                                   id: "area",
                              },
                              dataLabels: {
                                   enabled: true,
                              },
                              grid: {
                                   show: false,
                              },
                              xaxis: {
                                   categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2001, 2002, 2003, 2004]
                              },
                              colors: ['#1FBF75'],
                              tooltip: {
                                   custom: function ( { series, seriesIndex, dataPointIndex, w } ) {
                                        let labelX = w.globals.categoryLabels[dataPointIndex];
                                        let labelY = series[seriesIndex][dataPointIndex];
                                        return `<div className="flex flex-col rounded-lg shadow-lg  w-full sm:w-full bg-[#1B1F32] ">
                                             <div className="block w-full p-2 border-b-[1px] border-zinc-200 border-dashed bg-[#01051A] text-white">
                                                  <h2 className="text-xs font-bold">${labelX} <span className="font-light text-zinc-300">- year</span></h2>
                                             </div>
                                        
                                        <div className="flex items-center gap-1 bg-[#1B1F32] p-2">
                                            ${parseInt( labelY ) < 50 ? `<svg xmlns="http://www.w3.org/2000/svg" className="text-[.7rem] text-red-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-down"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>` : `<svg className="text-[.7rem] text-emerald-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`}
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
               </Card>

               <Card header={{ title: "Chart Area", class: "mb-1" }}>
                    {/* -------------- 3 ------------- */}
                    <ChartJs
                         type="area"
                         options={{
                              chart: {
                                   height: 350,
                                   type: 'line',
                                   zoom: {
                                        enabled: false
                                   },
                              },
                              dataLabels: {
                                   enabled: false
                              },
                              stroke: {
                                   width: [4, 5, 3],
                                   dashArray: [0, 8, 5]
                              },
                              legend: {
                                   tooltipHoverFormatter: function ( val, opts ) {
                                        return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
                                   }
                              },
                              markers: {
                                   size: 0,
                                   hover: {
                                        sizeOffset: 6
                                   }
                              },
                              xaxis: {
                                   categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
                                        '10 Jan', '11 Jan', '12 Jan'
                                   ],
                              },
                              tooltip: {
                                   custom: function ( { series, seriesIndex, dataPointIndex, w } ) {
                                        let htmlPoints = "";
                                        let labelX = w.globals.categoryLabels[dataPointIndex];
                                        let labelY = series.map( ( item,key ) => {
                                             if ( item.length != 0 ) {
                                                  htmlPoints += `<div className="flex items-center gap-1 bg-[#1B1F32] p-2" key="${key}">
                                                  ${parseInt( item[dataPointIndex] ) < 50 ? `<svg xmlns="http://www.w3.org/2000/svg" className="text-[.7rem] text-red-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-down"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>` : `<svg className="text-[.7rem] text-emerald-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`}
                                                  <span className="text-zinc-200 text-xs">${item[dataPointIndex]}</span>
                                                  </div>`}
                                        }
                                   );
                                   return `<div className="flex flex-col rounded-lg shadow-lg  w-full sm:w-full bg-[#1B1F32]">
                                        <div className="block w-full p-2 border-b-[1px] border-zinc-200 border-dashed bg-[#01051A] text-white">
                                             <h2 className="text-xs font-bold">${labelX} <span className="font-light text-zinc-300">- day</span></h2>
                                        </div>
                                        
                                        ${htmlPoints}
                                   </div>`;
                                   }
                              },
                              grid: {
                                   show: false
                              }
                         }}

                         series={[{
                              name: "Session Duration",
                              data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
                         },
                         {
                              name: "Page Views",
                              data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
                         },
                         {
                              name: 'Total Visits',
                              data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
                         }
                         ]}
                         height={400}
                    />
               </Card>

               <Card header={{ title: "Chart Area", class: "mb-1" }}>
                    {/* -------------- 4 ------------- */}
                    <ChartJs
                         type="area"
                         options={{
                              chart: {
                                   type: 'line',
                                   height: 350
                              },
                              stroke: {
                                   width: 2,
                                   curve: 'stepline',
                              },
                              dataLabels: {
                                   enabled: false
                              },
                              markers: {
                                   hover: {
                                        sizeOffset: 4
                                   }
                              },
                              grid: {
                                   show: false
                              }

                         }}

                         series={[
                              {
                                   name: "Value",
                                   data: [30, 40, 45, 50, 49, 60, 70, 91, 50, 49, 60, 70, 91],
                              }
                         ]}
                         height={400}
                    />
               </Card>
          </div>
     );
}

export default Line;