"use client"
import dynamic from 'next/dynamic';
import Card from "@/components/velox/ui/card";
const ChartJs = dynamic(() => import("@/components/velox/chart/chartJs"), {
  ssr: false // Deshabilita el SSR para este componente
});
function Treemap() {
     return (
          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
               <Card header={{ title: "Chart Treemap", class: "mb-1" }}>
                    <ChartJs
                         type="treemap"
                         options={{
                              legend: {
                                   show: false
                              },
                              chart: {
                                   height: 350,
                                   type: 'treemap'
                              },
                              title: {
                                   text: 'Multi-dimensional Treemap',
                                   align: 'center'
                              },
                              colors: ["#008FFB", "#6D93FF"]
                         }}

                         series={[
                              {
                                   name: 'Desktops',
                                   data: [
                                        {
                                             x: 'ABC',
                                             y: 10
                                        },
                                        {
                                             x: 'DEF',
                                             y: 60
                                        },
                                        {
                                             x: 'XYZ',
                                             y: 41
                                        }
                                   ]
                              },
                              {
                                   name: 'Mobile',
                                   data: [
                                        {
                                             x: 'ABCD',
                                             y: 10
                                        },
                                        {
                                             x: 'DEFG',
                                             y: 20
                                        },
                                        {
                                             x: 'WXYZ',
                                             y: 51
                                        },
                                        {
                                             x: 'PQR',
                                             y: 30
                                        },
                                        {
                                             x: 'MNO',
                                             y: 20
                                        },
                                        {
                                             x: 'CDE',
                                             y: 30
                                        }
                                   ]
                              }
                         ]}
                         height={400}
                    />
               </Card>

               {/* 2 */}
               <Card header={{ title: "Chart Treemap - Multiple Series", class: "mb-1" }}>
                    <ChartJs
                         type="treemap"
                         options={{
                              legend: {
                                show: false
                              },
                              chart: {
                                height: 350,
                                type: 'treemap'
                              },
                              title: {
                                text: 'Treemap with Color scale'
                              },
                              dataLabels: {
                                enabled: true,
                                style: {
                                  fontSize: '12px',
                                },
                                formatter: function(text, op) {
                                  return [text, op.value]
                                },
                                offsetY: -4
                              },
                              plotOptions: {
                                treemap: {
                                  enableShades: true,
                                  shadeIntensity: 0.5,
                                  borderRadius:10,
                                  reverseNegativeShade: true,
                                  colorScale: {
                                    ranges: [
                                      {
                                        from: -6,
                                        to: 0,
                                        color: '#008FFB'
                                      },
                                      {
                                        from: 0.001,
                                        to: 6,
                                        color: '#6D93FF'
                                      }
                                    ]
                                  }
                                }
                              }
                            }}

                         series={[
                              {
                                data: [
                                  {
                                    x: 'INTC',
                                    y: 1.2
                                  },
                                  {
                                    x: 'GS',
                                    y: 0.4
                                  },
                                  {
                                    x: 'CVX',
                                    y: -1.4
                                  },
                                  {
                                    x: 'GE',
                                    y: 2.7
                                  },
                                  {
                                    x: 'CAT',
                                    y: -0.3
                                  },
                                  {
                                    x: 'RTX',
                                    y: 5.1
                                  },
                                  {
                                    x: 'CSCO',
                                    y: -2.3
                                  },
                                  {
                                    x: 'JNJ',
                                    y: 2.1
                                  },
                                  {
                                    x: 'PG',
                                    y: 0.3
                                  },
                                  {
                                    x: 'TRV',
                                    y: 0.12
                                  },
                                  {
                                    x: 'MMM',
                                    y: -2.31
                                  },
                                  {
                                    x: 'NKE',
                                    y: 3.98
                                  },
                                  {
                                    x: 'IYT',
                                    y: 1.67
                                  }
                                ]
                              }
                            ]}
                         height={400}
                    />
               </Card>
               {/* 2 */}
               <Card header={{ title: "Chart Treemap - Distributed", class: "mb-1" }}>
                    <ChartJs
                         type="treemap"
                         options={{
                              legend: {
                                show: false
                              },
                              chart: {
                                height: 350,
                                type: 'treemap'
                              },
                              title: {
                                text: 'Distibuted Treemap (different color for each cell)',
                                align: 'center'
                              },
                              colors: [
                                '#344e41',
                                '#3a5a40',
                                '#588157',
                                '#a3b18a',
                                '#dad7cd',
                                '#606c38',
                                '#283618',
                                '#bc6c25',
                                '#421243',
                                '#dda15e',
                                '#fefae0',
                                '#ccd5ae'
                              ],
                              plotOptions: {
                                treemap: {
                                  distributed: true,
                                  enableShades: false
                                }
                              }
                            }}

                         series={[
                              {
                                data: [
                                  {
                                    x: 'New Delhi',
                                    y: 218
                                  },
                                  {
                                    x: 'Kolkata',
                                    y: 149
                                  },
                                  {
                                    x: 'Mumbai',
                                    y: 184
                                  },
                                  {
                                    x: 'Ahmedabad',
                                    y: 55
                                  },
                                  {
                                    x: 'Bangaluru',
                                    y: 84
                                  },
                                  {
                                    x: 'Pune',
                                    y: 31
                                  },
                                  {
                                    x: 'Chennai',
                                    y: 70
                                  },
                                  {
                                    x: 'Jaipur',
                                    y: 30
                                  },
                                  {
                                    x: 'Surat',
                                    y: 44
                                  },
                                  {
                                    x: 'Hyderabad',
                                    y: 68
                                  },
                                  {
                                    x: 'Lucknow',
                                    y: 28
                                  },
                                  {
                                    x: 'Indore',
                                    y: 19
                                  },
                                  {
                                    x: 'Kanpur',
                                    y: 29
                                  }
                                ]
                              }
                            ]}
                         height={400}
                    />
               </Card>
          </div>
     );
}

export default Treemap;