"use client"
import dynamic from 'next/dynamic';
import Card from "@/components/velox/ui/card";
const ChartJs = dynamic(() => import("@/components/velox/chart/chartJs"), {
  ssr: false // Deshabilita el SSR para este componente
});
function Scatter() {
     return (
          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
               <Card header={{ title: "Chart bar", class: "mb-1" }}>
                    <ChartJs
                         type="bar"
                         options={{
                              chart: {
                                   type: 'bar',
                                   height: 350,
                                   stacked: true,
                                   stackType: '100%'
                              },
                              responsive: [{
                                   breakpoint: 480,
                                   options: {
                                        legend: {
                                             position: 'bottom',
                                             offsetX: -10,
                                             offsetY: 0
                                        }
                                   },
                                  
                              }],
                              colors: ['#A7A0DA', '#7CADFA', '#AECCF0'],
                              stroke: {
                                   width:2,
                                   colors: ['#fff'],
                              },
                              grid: {
                                   show: false
                              },
                              xaxis: {
                                   categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2',
                                        '2012 Q3', '2012 Q4'
                                   ],
                              },
                              fill: {
                                   opacity: 1
                              },
                              legend: {
                                   position: 'right',
                                   offsetX: 0,
                                   offsetY: 50
                              },
                         }}

                         series={[{
                              name: 'PRODUCT A',
                              data: [44, 55, 41, 67, 22, 43, 21, 49]
                         }, {
                              name: 'PRODUCT B',
                              data: [13, 23, 20, 8, 13, 27, 33, 12]
                         }, {
                              name: 'PRODUCT C',
                              data: [11, 17, 15, 15, 21, 14, 15, 13]
                         }]}
                         height={400}
                    />
               </Card>

               {/* 2 */}
               <Card header={{ title: "Chart bar", class: "mb-1" }}>
                    <ChartJs
                         type="bar"
                         options={{
                              chart: {
                                type: 'bar',
                                height: 350,
                                stacked: true,
                              },
                              stroke: {
                                   width: 2,
                                   colors: ['#fff'],
                              },
                              grid: {
                                   show: false
                              },
                              dataLabels: {
                                formatter: (val) => {
                                  return val / 1000 + 'K'
                                }
                              },
                              plotOptions: {
                                bar: {
                                  horizontal: false
                                }
                              },
                              xaxis: {
                                categories: [
                                  'Online advertising',
                                  'Sales Training',
                                  'Print advertising',
                                  'Catalogs',
                                  'Meetings',
                                  'Public relations'
                                ]
                              },
                              fill: {
                                opacity: 1
                              },
                              colors: ['#A7A0DA', '#7CADFA', '#AECCF0'],
                              yaxis: {
                                labels: {
                                  formatter: (val) => {
                                    return val / 1000 + 'K'
                                  }
                                }
                              },
                              legend: {
                                position: 'top',
                                horizontalAlign: 'left'
                              }
                            }}

                         series={[{
                              name: 'PRODUCT A',
                              data: [44, 55, 41, 67, 22, 43, 21, 49]
                         }, {
                              name: 'PRODUCT B',
                              data: [13, 23, 20, 8, 13, 27, 33, 12]
                         }, {
                              name: 'PRODUCT C',
                              data: [11, 17, 15, 15, 21, 14, 15, 13]
                         }]}
                         height={400}
                    />
               </Card>

               {/* 3 */}
               <Card header={{ title: "Chart bar", class: "mb-1" }}>
                    <ChartJs
                         type="bar"
                         options={{
                              chart: {
                                type: 'bar',
                                height: 350,
                                stacked: true,
                              },
                              stroke: {
                                   width: 2,
                                   colors: ['#fff'],
                              },
                              grid: {
                                   show: false
                              },
                              dataLabels: {
                                formatter: (val) => {
                                  return val / 1000 + 'K'
                                }
                              },
                              plotOptions: {
                                bar: {
                                  horizontal: false
                                }
                              },
                              xaxis: {
                                categories: [
                                  'Online advertising',
                                  'Sales Training',
                                  'Print advertising',
                                  'Catalogs',
                                  'Meetings',
                                  'Public relations'
                                ]
                              },
                              fill: {
                                opacity: 1
                              },
                              colors: ['#A7A0DA', '#7CADFA', '#AECCF0'],
                              yaxis: {
                                labels: {
                                  formatter: (val) => {
                                    return val / 1000 + 'K'
                                  }
                                }
                              },
                              legend: {
                                position: 'top',
                                horizontalAlign: 'left'
                              }
                            }}

                         series={[{
                              name: "sales",
                              data: [{
                                x: '2019/01/01',
                                y: 400
                              }, {
                                x: '2019/04/01',
                                y: 430
                              }, {
                                x: '2019/07/01',
                                y: 448
                              }, {
                                x: '2019/10/01',
                                y: 470
                              }, {
                                x: '2020/01/01',
                                y: 540
                              }, {
                                x: '2020/04/01',
                                y: 580
                              }, {
                                x: '2020/07/01',
                                y: 690
                              }, {
                                x: '2020/10/01',
                                y: 690
                              }]
                            }]}
                         height={400}
                    />
               </Card>

                {/* 4 */}
                <Card header={{ title: "Chart bar", class: "mb-1" }}>
                    <ChartJs
                         type="bar"
                         options={{
                              chart: {
                                type: 'bar',
                                height: 350
                              },
                              plotOptions: {
                                bar: {
                                  colors: {
                                    ranges: [{
                                      from: -100,
                                      to: -46,
                                      color: '#6D93FF'
                                    }, {
                                      from: -45,
                                      to: 0,
                                      color: '#1FBF75'
                                    }]
                                  },
                                  columnWidth: '80%',
                                  borderRadius:2
                                }
                              },
                              stroke: {
                                   width: 0,
                              },
                              dataLabels: {
                                enabled: false,
                              },
                              yaxis: {
                                title: {
                                  text: 'Growth',
                                },
                                labels: {
                                  formatter: function (y) {
                                    return y.toFixed(0) + "%";
                                  }
                                }
                              },
                              xaxis: {
                                type: 'datetime',
                                categories: [
                                  '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
                                  '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
                                  '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
                                  '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
                                  '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
                                  '2013-07-01', '2013-08-01', '2013-09-01'
                                ],
                                labels: {
                                  rotate: -90
                                }
                              },
                              grid:{
                                   show:false
                              }
                            }}

                         series={[{
                              name: 'Cash Flow',
                              data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
                                5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
                                48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
                              ]
                            }]}
                         height={400}
                    />
               </Card>
          </div >
     );
}

export default Scatter;