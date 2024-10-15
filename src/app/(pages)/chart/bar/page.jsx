"use client"
import dynamic from 'next/dynamic';
import Card from "@/components/velox/ui/card";
const ChartJs = dynamic(() => import("@/components/velox/chart/chartJs"), {
  ssr: false // Deshabilita el SSR para este componente
});
function Line() {
     return (
          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
               <Card header={{ title: "Chart Bar", class: "mb-1" }}>
                    <ChartJs
                         type="bar"
                         options={{
                              chart: {
                                   type: 'bar',
                                   height: 350,
                                   stacked: true,
                                   stackType: '100%',
                              },
                              plotOptions: {
                                   bar: {
                                        horizontal: true,
                                        borderRadius: 7,
                                        columnWidth: "25%",
                                        barHeight: "70%",
                                   },
                              },
                              stroke: {
                                   width: 5,
                                   colors: ['#fff'],
                              },
                              colors: ['#A7A0DA', '#7CADFA', '#AECCF0'],
                              xaxis: {
                                   categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
                              },
                              grid: {
                                   show: false
                              },
                              tooltip: {
                                   y: {
                                        formatter: function ( val ) {
                                             return val + "K"
                                        }
                                   }
                              },
                              fill: {
                                   opacity: 1

                              },
                              legend: {
                                   position: 'top',
                                   horizontalAlign: 'left',
                                   offsetX: 40
                              }
                         }}

                         series={[{
                              name: 'Ocean Star',
                              data: [30, 40, 45, 55, 50, 60, 70],
                         },
                         {
                              name: 'Thunder Valley',
                              data: [20, 35, 45, 50, 55, 65, 70],
                         },
                         {
                              name: 'Silver Moon',
                              data: [10, 25, 30, 40, 45, 55, 65],
                         },
                         {
                              name: 'Golden Field',
                              data: [5, 15, 20, 30, 35, 40, 50],
                         },
                         {
                              name: 'Crystal Peak',
                              data: [15, 30, 35, 45, 50, 55, 60],
                         }]}
                         height={400}
                    />
               </Card>
               {/* 2 */}
               <Card header={{ title: "Chart Bar - Markers", class: "mb-1" }}>
                    <ChartJs
                         type="bar"
                         options={{
                              chart: {
                                height: 350,
                                type: 'bar'
                              },
                              plotOptions: {
                                bar: {
                                  horizontal: true,
                                  borderRadius: 7,
                                }
                              },
                              colors: ['#7CADFA'],
                              dataLabels: {
                                formatter: function(val, opt) {
                                  const goals =
                                    opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                                      .goals
                              
                                  if (goals && goals.length) {
                                    return `${val} / ${goals[0].value}`
                                  }
                                  return val
                                }
                              },
                              legend: {
                                show: true,
                                showForSingleSeries: true,
                                customLegendItems: ['Actual', 'Expected'],
                                markers: {
                                  fillColors: ['#7CADFA', '#AECCF0']
                                }
                              }
                            }}

                         series={[
                              {
                                name: 'Actual',
                                data: [
                                  {
                                    x: '2011',
                                    y: 12,
                                    goals: [
                                      {
                                        name: 'Expected',
                                        value: 14,
                                        strokeWidth: 2,
                                        strokeDashArray: 2,
                                        strokeColor: '#775DD0'
                                      }
                                    ]
                                  },
                                  {
                                    x: '2012',
                                    y: 44,
                                    goals: [
                                      {
                                        name: 'Expected',
                                        value: 54,
                                        strokeWidth: 5,
                                        strokeHeight: 10,
                                        strokeColor: '#775DD0'
                                      }
                                    ]
                                  },
                                  {
                                    x: '2013',
                                    y: 54,
                                    goals: [
                                      {
                                        name: 'Expected',
                                        value: 52,
                                        strokeWidth: 10,
                                        strokeHeight: 0,
                                        strokeLineCap: 'round',
                                        strokeColor: '#775DD0'
                                      }
                                    ]
                                  },
                                  {
                                    x: '2014',
                                    y: 66,
                                    goals: [
                                      {
                                        name: 'Expected',
                                        value: 61,
                                        strokeWidth: 10,
                                        strokeHeight: 0,
                                        strokeLineCap: 'round',
                                        strokeColor: '#775DD0'
                                      }
                                    ]
                                  },
                                  {
                                    x: '2015',
                                    y: 81,
                                    goals: [
                                      {
                                        name: 'Expected',
                                        value: 66,
                                        strokeWidth: 10,
                                        strokeHeight: 0,
                                        strokeLineCap: 'round',
                                        strokeColor: '#775DD0'
                                      }
                                    ]
                                  },
                                  {
                                    x: '2016',
                                    y: 67,
                                    goals: [
                                      {
                                        name: 'Expected',
                                        value: 70,
                                        strokeWidth: 5,
                                        strokeHeight: 10,
                                        strokeColor: '#775DD0'
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]}
                         height={400}
                    />
               </Card>
               {/* 3 */}
               <Card header={{ title: "Chart Bar - Negative Values", class: "mb-1" }}>
                    <ChartJs
                         type="bar"
                         options={{
                              chart: {
                                type: 'bar',
                                height: 440,
                                stacked: true
                              },
                              colors: ['#A7A0DA', '#7CADFA'],
                              plotOptions: {
                                bar: {
                                  horizontal: true,
                                  barHeight: '80%',
                                },
                              },
                              dataLabels: {
                                enabled: false
                              },
                              stroke: {
                                width: 3,
                                colors: ["#fff"]
                              },
                              
                              grid: {
                                   show:false,
                                xaxis: {
                                  lines: {
                                    show: false
                                  }
                                }
                              },
                              yaxis: {
                                min: -5,
                                max: 5,
                                title: {
                                  // text: 'Age',
                                },
                              },
                              tooltip: {
                                shared: false,
                                x: {
                                  formatter: function (val) {
                                    return val
                                  }
                                },
                                y: {
                                  formatter: function (val) {
                                    return Math.abs(val) + "%"
                                  }
                                }
                              },
                              xaxis: {
                                categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
                                  '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9',
                                  '0-4'
                                ],
                                title: {
                                  text: 'Percent'
                                },
                                labels: {
                                  formatter: function (val) {
                                    return Math.abs(Math.round(val)) + "%"
                                  }
                                }
                              },
                            }}

                         series={[{
                              name: 'Males',
                              data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
                                3.9, 3.5, 3
                              ]
                            },
                            {
                              name: 'Females',
                              data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
                                -4.1, -4, -4.1, -3.4, -3.1, -2.8
                              ]
                            }
                            ]}
                         height={400}
                    />
               </Card>
               {/* 4 */}
               <Card header={{ title: "Chart Bar - Reversed", class: "mb-1" }}>
                    <ChartJs
                         type="bar"
                         options={{
                              chart: {
                                type: 'bar',
                                height: 350
                              },
                              colors: ['#A7A0DA'],
                              annotations: {
                                xaxis: [{
                                  x: 500,
                                  borderColor: '#AECCF0',
                                  label: {
                                    borderColor: '#AECCF0',
                                    style: {
                                      color: '#fff',
                                      background: '#AECCF0',
                                    },
                                    text: 'X annotation',
                                  }
                                }],
                                yaxis: [{
                                  y: 'July',
                                  y2: 'September',
                                  label: {
                                    text: 'Y annotation'
                                  }
                                }]
                              },
                              plotOptions: {
                                bar: {
                                  horizontal: true,
                                  borderRadius: 7,
                                }
                              },
                              grid:{
                                   show:false
                              },
                              stroke: {
                                   width: 3,
                                   colors: ["#fff"]
                                 },
                              dataLabels: {
                                enabled: true
                              },
                              xaxis: {
                                categories: ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
                              },
                              grid: {
                                xaxis: {
                                  lines: {
                                    show: true
                                  }
                                }
                              },
                              yaxis: {
                                reversed: true,
                                axisTicks: {
                                  show: true
                                }
                              }
                            }}

                         series={[{
                              data: [400, 430, 448, 470, 540, 580, 690]
                            }]}
                         height={400}
                    />
               </Card>
          </div>
     );
}

export default Line;