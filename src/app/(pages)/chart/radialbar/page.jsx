"use client"
import dynamic from 'next/dynamic';
import Card from "@/components/velox/ui/card";
const ChartJs = dynamic(() => import("@/components/velox/chart/chartJs"), {
  ssr: false // Deshabilita el SSR para este componente
});
function Radialbar() {
     return (
          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">

               <Card header={{ title: "Chart - Radialbar", class: "mb-1" }}>
                    {/* -------------- 1 ------------- */}
                    <ChartJs
                         type="radialBar"
                         options={{
                              chart: {
                                   height: 350,
                                   type: 'radialBar',
                              },
                              plotOptions: {
                                   radialBar: {
                                        hollow: {
                                             size: '70%',
                                        },
                                        track: {
                                             strokeWidth: 10, // Puedes cambiar este valor según sea necesario
                                        },
                                   },
                              },
                              colors: ["#6D93FF"],
                              labels: ['Cricket'],
                         }}

                         series={[70]}
                         height={400}
                    />
               </Card>

               <Card header={{ title: "Chart - Multiple Radialbars", class: "mb-1" }}>
                    {/* -------------- 2 ------------- */}
                    <ChartJs
                         type="radialBar"
                         options={{
                              chart: {
                                   height: 350,
                                   type: 'radialBar',
                              },
                              plotOptions: {
                                   radialBar: {
                                        dataLabels: {
                                             name: {
                                                  fontSize: '22px',
                                             },
                                             value: {
                                                  fontSize: '16px',
                                             },
                                             total: {
                                                  show: true,
                                                  label: 'Total',
                                                  formatter: function ( w ) {
                                                       // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                                       return 249
                                                  }
                                             }
                                        }
                                   }
                              },
                              colors: ['#A7A0DA', '#7CADFA', '#AECCF0'],

                         }}
                         series={[44, 55, 67, 83]}
                         height={400}
                    />
               </Card>

               <Card header={{ title: "Chart - Multiple Radialbars", class: "mb-1" }}>
                    {/* -------------- 3 ------------- */}
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
                                      color: "#A7A0DA",
                                      offsetY: 120
                                    },
                                    value: {
                                      offsetY: 76,
                                      fontSize: '22px',
                                      color: "#A7A0DA",
                                      formatter: function (val) {
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
                              colors:['#A7A0DA'],
                            }}
                         series={[44]}
                         height={400}
                    />
               </Card>
          </div>
     );
}

export default Radialbar;