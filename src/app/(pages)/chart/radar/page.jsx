"use client"
import dynamic from 'next/dynamic';
import Card from "@/components/velox/ui/card";
const ChartJs = dynamic(() => import("@/components/velox/chart/chartJs"), {
  ssr: false // Deshabilita el SSR para este componente
});

function Radar() {
     return (
          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
               <Card header={{ title: "Chart Radar - Multiple Series", class: "mb-1" }}>
                    <ChartJs
                         type="radar"
                         options={{
                              chart: {
                                height: 350,
                                type: 'radar',
                                dropShadow: {
                                  enabled: true,
                                  blur: 1,
                                  left: 1,
                                  top: 1
                                }
                              },
                              stroke: {
                                width: 1
                              },
                              fill: {
                                opacity: 0.1
                              },
                              markers: {
                                size: 0
                              },
                              xaxis: {
                                categories: ['2011', '2012', '2013', '2014', '2015', '2016']
                              }
                            }}

                         series={[{
                              name: 'Series 1',
                              data: [80, 50, 30, 40, 100, 20],
                            }, {
                              name: 'Series 2',
                              data: [20, 30, 40, 80, 20, 80],
                            }, {
                              name: 'Series 3',
                              data: [44, 76, 78, 13, 43, 10],
                            }]}
                         height={400}
                    />
               </Card>
               {/* 2 */}
               <Card header={{ title: "Chart Radar - Polygon Fill", class: "mb-1" }}>
                    <ChartJs
                         type="radar"
                         options={ {
                              chart: {
                                height: 350,
                                type: 'radar',
                              },
                              dataLabels: {
                                enabled: true
                              },
                              plotOptions: {
                                radar: {
                                  size: 140,
                                  polygons: {
                                    strokeColors: '#e9e9e9',
                                    fill: {
                                      colors: ['#f8f8f8', '#fff']
                                    }
                                  }
                                }
                              },
                              colors: ['#FF4560'],
                              markers: {
                                size: 4,
                                colors: ['#fff'],
                                strokeColor: '#FF4560',
                                strokeWidth: 2,
                              },
                              tooltip: {
                                y: {
                                  formatter: function(val) {
                                    return val
                                  }
                                }
                              },
                              xaxis: {
                                categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
                              },
                              yaxis: {
                                tickAmount: 7,
                                labels: {
                                  formatter: function(val, i) {
                                    if (i % 2 === 0) {
                                      return val
                                    } else {
                                      return ''
                                    }
                                  }
                                }
                              }
                            }}

                         series={[{
                              name: 'Series 1',
                              data: [80, 50, 30, 40, 100, 20],
                            }, {
                              name: 'Series 2',
                              data: [20, 30, 40, 80, 20, 80],
                            }, {
                              name: 'Series 3',
                              data: [44, 76, 78, 13, 43, 10],
                            }]}
                         height={400}
                    />
               </Card>
          </div>
     );
}

export default Radar;