"use client"
import dynamic from 'next/dynamic';
import Card from "@/components/velox/ui/card";
const ChartJs = dynamic(() => import("@/components/velox/chart/chartJs"), {
  ssr: false // Deshabilita el SSR para este componente
});
function Pie() {
     return (
          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
               <Card header={{ title: "Chart Pie - Donut", class: "mb-1" }}>
                    <ChartJs
                         type="donut"
                         options={{
                              chart: {
                                   width: 380,
                                   type: 'donut',
                              },
                              dataLabels: {
                                   enabled: false
                              },
                              colors: ['#A7A0DA', '#7CADFA', '#AECCF0'],
                              responsive: [{
                                   breakpoint: 480,
                                   options: {
                                        chart: {
                                             width: 200
                                        },
                                        legend: {
                                             show: false
                                        }
                                   }
                              }],
                              legend: {
                                   position: 'right',
                                   offsetY: 0,
                                   height: 230,
                              }
                         }}

                         series={[44, 55, 13, 33]}
                         height={400}
                    />
               </Card>
               {/* 2 */}
               <Card header={{ title: "Chart Pie - Monochrome", class: "mb-1" }}>
                    <ChartJs
                         type="pie"
                         options={{
                              chart: {
                                width: '100%',
                                type: 'pie',
                              },
                              colors: ['#A7A0DA', '#7CADFA', '#AECCF0'],
                              labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                              theme: {
                                monochrome: {
                                  enabled: true
                                }
                              },
                              plotOptions: {
                                pie: {
                                  dataLabels: {
                                    offset: -5
                                  }
                                }
                              },
                              dataLabels: {
                                formatter(val, opts) {
                                  const name = opts.w.globals.labels[opts.seriesIndex]
                                  return [name, val.toFixed(1) + '%']
                                }
                              },
                              legend: {
                                show: false
                              }
                            }}

                         series={[25, 15, 44, 55, 41, 17]}
                         height={400}
                    />
               </Card>
               {/* 3 */}
               <Card header={{ title: "Chart Pie - Semi Donut", class: "mb-1" }}>
                    <ChartJs
                         type="pie"
                         options={{
                              chart: {
                                type: 'donut',
                              },
                              colors: ['#A7A0DA', '#7CADFA', '#AECCF0'],
                              plotOptions: {
                                pie: {
                                  startAngle: -90,
                                  endAngle: 90,
                                  offsetY: 10
                                }
                              },
                              grid: {
                                padding: {
                                  bottom: -80
                                }
                              },
                              responsive: [{
                                breakpoint: 480,
                                options: {
                                  chart: {
                                    width: 200
                                  },
                                  legend: {
                                    position: 'bottom'
                                  }
                                }
                              }]
                            }}

                         series={[25, 15, 44, 55, 41, 17]}
                         height={400}
                    />
               </Card>
               {/* 4 */}
               <Card header={{ title: "Chart Pie - Semi Donut", class: "mb-1" }}>
                    <ChartJs
                         type="donut"
                         options={{
                              chart: {
                                type: 'donut',
                              },
                              colors: ['#A7A0DA', '#7CADFA', '#AECCF0'],
                              plotOptions: {
                                pie: {
                                  startAngle: -90,
                                  endAngle: 90,
                                  offsetY: 10
                                }
                              },
                              grid: {
                                padding: {
                                  bottom: -80
                                }
                              },
                              responsive: [{
                                breakpoint: 480,
                                options: {
                                  chart: {
                                    width: 200
                                  },
                                  legend: {
                                    position: 'bottom'
                                  }
                                }
                              }]
                            }}

                         series={[25, 15, 44, 55, 41, 17]}
                         height={400}
                    />
               </Card>
          </div>
     );
}

export default Pie;