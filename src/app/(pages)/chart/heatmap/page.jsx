"use client"
import dynamic from 'next/dynamic';
import Card from "@/components/velox/ui/card";
const ChartJs = dynamic(() => import("@/components/velox/chart/chartJs"), {
  ssr: false // Deshabilita el SSR para este componente
});
function Heatmap() {
     return (
          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
               <Card header={{ title: "Chart Heatmap - Multiple Series", class: "mb-1" }}>
                    <ChartJs
                         type="heatmap"
                         options={{
                              chart: {
                                   height: 450,
                                   type: 'heatmap',
                              },
                              colors: ['#A7A0DA', '#7CADFA', '#AECCF0'],
                              dataLabels: {
                                   enabled: false
                              },
                              xaxis: {
                                   type: 'category',
                                   categories: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30']
                              },
                              grid: {
                                   padding: {
                                        right: 20
                                   }
                              }
                         }}

                         series={[{
                              name: 'Series 1',
                              data: [80, 50, 30, 40, 100, 20, 40, 100, 20],
                         }, {
                              name: 'Series 2',
                              data: [20, 30, 40, 80, 20, 80, 13, 43, 10],
                         }, {
                              name: 'Series 3',
                              data: [44, 76, 78, 13, 43, 10, 80, 20, 80],
                         }]}
                         height={400}
                    />
               </Card>
               {/* 2 */}
               <Card header={{ title: "Chart Heatmap - Colors Flipped", class: "mb-1" }}>
                    <ChartJs
                         type="heatmap"
                         options={{
                              chart: {
                                   height: 350,
                                   type: 'heatmap'
                              },
                              dataLabels: {
                                   enabled: false
                              },
                              plotOptions: {
                                   heatmap: {
                                        colorScale: {
                                             inverse: true,
                                        }
                                   }
                              },
                              colors: ["#F3B415", "#F27036", "#663F59", "#6A6E94", "#4E88B4", "#00A7C6", "#18D8D8", '#A9D794',
                                   '#46AF78', '#A93F55', '#8C5E58', '#2176FF', '#33A1FD', '#7A918D', '#BAFF29'
                              ],
                              xaxis: {
                                   type: 'category',
                                   categories: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12', 'W13', 'W14', 'W15']
                              },
                         }}

                         series={[{
                              name: 'Series 1',
                              data: [80, 50, 30, 40, 100, 20, 40, 100, 20],
                         }, {
                              name: 'Series 2',
                              data: [20, 30, 40, 80, 20, 80, 13, 43, 10],
                         }, {
                              name: 'Series 3',
                              data: [44, 76, 78, 13, 43, 10, 80, 20, 80],
                         }]}
                         height={400}
                    />
               </Card>
               {/* 3 */}
               <Card header={{ title: "Chart Heatmap - Colors Flipped", class: "mb-1" }}>
                    <ChartJs
                         type="heatmap"
                         options={{
                              chart: {
                                height: 350,
                                type: 'heatmap',
                              },
                              stroke: {
                                width: 3
                              },
                              plotOptions: {
                                heatmap: {
                                  radius: 10,
                                  enableShades: false,
                                  colorScale: {
                                    ranges: [{
                                        from: 0,
                                        to: 50,
                                        color: '#A7A0DA'
                                      },
                                      {
                                        from: 51,
                                        to: 100,
                                        color: '#7CADFA'
                                      },
                                    ],
                                  },
                              
                                }
                              },
                              dataLabels: {
                                enabled: true,
                                style: {
                                  colors: ['#fff']
                                }
                              },
                              xaxis: {
                                type: 'category',
                              },
                            }}

                         series={[{
                              name: 'Series 1',
                              data: [80, 50, 30, 40, 100, 20, 40, 100, 20],
                         }, {
                              name: 'Series 2',
                              data: [20, 30, 40, 80, 20, 80, 13, 43, 10],
                         }, {
                              name: 'Series 3',
                              data: [44, 76, 78, 13, 43, 10, 80, 20, 80],
                         }]}
                         height={400}
                    />
               </Card>
               {/* 4 */}
               <Card header={{ title: "Chart Heatmap - Colors Flipped", class: "mb-1" }}>
                    <ChartJs
                         type="heatmap"
                         options={{
                              chart: {
                                height: 350,
                                type: 'heatmap',
                              },
                              plotOptions: {
                                heatmap: {
                                  shadeIntensity: 0.5,
                                  radius: 0,
                                  useFillColorAsStroke: true,
                                  colorScale: {
                                    ranges: [{
                                        from: -30,
                                        to: 5,
                                        name: 'low',
                                        color: '#00A100'
                                      },
                                      {
                                        from: 6,
                                        to: 20,
                                        name: 'medium',
                                        color: '#128FD9'
                                      },
                                      {
                                        from: 21,
                                        to: 45,
                                        name: 'high',
                                        color: '#FFB200'
                                      },
                                      {
                                        from: 46,
                                        to: 55,
                                        name: 'extreme',
                                        color: '#FF0000'
                                      }
                                    ]
                                  }
                                }
                              },
                              dataLabels: {
                                enabled: false
                              },
                              stroke: {
                                width: 1
                              },
                            }}

                         series={[{
                              name: 'Series 1',
                              data: [80, 50, 30, 40, 100, 20, 40, 100, 20],
                         }, {
                              name: 'Series 2',
                              data: [20, 30, 40, 80, 20, 80, 13, 43, 10],
                         }, {
                              name: 'Series 3',
                              data: [44, 76, 78, 13, 43, 10, 80, 20, 80],
                         }]}
                         height={400}
                    />
               </Card>
          </div>
     );
}

export default Heatmap;