"use client"
import dynamic from 'next/dynamic';
import Card from "@/components/velox/ui/card";
const ChartJs = dynamic( () => import( "@/components/velox/chart/chartJs" ), {
  ssr: false // Deshabilita el SSR para este componente
} );
function Scatter() {
  return (
    <div className="flex flex-col gap-4 pb-10">
      <Card header={{ title: "Chart scatter", class: "mb-1" }}>
        <ChartJs
          type="scatter"
          options={{
            chart: {
              height: 350,
              type: 'scatter',
              zoom: {
                type: 'xy'
              }
            },
            dataLabels: {
              enabled: false
            },
            grid: {
              show: false
            },
            xaxis: {
              type: 'datetime',
            },
            yaxis: {
              max: 70
            },
          }}

          series={[{
            name: 'TEAM 1',
            data: [
              [1487270400000, 44], [1487356800000, 33], [1487443200000, 44], [1487529600000, 42], [1487616000000, 46],
              [1487702400000, 54], [1487788800000, 52], [1487875200000, 58], [1487961600000, 51], [1488048000000, 49],
              [1488134400000, 58], [1488220800000, 51], [1488307200000, 49], [1488393600000, 53], [1488480000000, 52],
              [1488566400000, 54], [1488652800000, 51], [1488739200000, 60], [1488825600000, 51], [1488912000000, 49]
            ]
          },
          {
            name: 'TEAM 2',
            data: [
              [1487270400000, 41], [1487356800000, 32], [1487443200000, 42], [1487529600000, 40], [1487616000000, 44],
              [1487702400000, 52], [1487788800000, 50], [1487875200000, 56], [1487961600000, 49], [1488048000000, 47],
              [1488134400000, 56], [1488220800000, 49], [1488307200000, 47], [1488393600000, 51], [1488480000000, 50],
              [1488566400000, 52], [1488652800000, 49], [1488739200000, 58], [1488825600000, 49], [1488912000000, 47]
            ]
          },
          {
            name: 'TEAM 3',
            data: [
              [1487270400000, 43], [1487356800000, 34], [1487443200000, 44], [1487529600000, 42], [1487616000000, 46],
              [1487702400000, 54], [1487788800000, 52], [1487875200000, 58], [1487961600000, 51], [1488048000000, 49],
              [1488134400000, 58], [1488220800000, 51], [1488307200000, 49], [1488393600000, 53], [1488480000000, 52],
              [1488566400000, 54], [1488652800000, 51], [1488739200000, 60], [1488825600000, 51], [1488912000000, 49]
            ]
          },
          {
            name: 'TEAM 4',
            data: [
              [1487270400000, 40], [1487356800000, 31], [1487443200000, 41], [1487529600000, 39], [1487616000000, 43],
              [1487702400000, 51], [1487788800000, 49], [1487875200000, 55], [1487961600000, 48], [1488048000000, 46],
              [1488134400000, 55], [1488220800000, 48], [1488307200000, 46], [1488393600000, 50], [1488480000000, 49],
              [1488566400000, 51], [1488652800000, 48], [1488739200000, 57], [1488825600000, 48], [1488912000000, 46]
            ]
          },
          {
            name: 'TEAM 5',
            data: [
              [1487270400000, 43], [1487356800000, 34], [1487443200000, 44], [1487529600000, 42], [1487616000000, 46],
              [1487702400000, 54], [1487788800000, 52], [1487875200000, 58], [1487961600000, 51], [1488048000000, 49],
              [1488134400000, 58], [1488220800000, 51], [1488307200000, 49], [1488393600000, 53], [1488480000000, 52],
              [1488566400000, 54], [1488652800000, 51], [1488739200000, 60], [1488825600000, 51], [1488912000000, 49]
            ]
          }
          ]
          }
          height={400}
        />
      </Card>

      {/* code */}
      {/* 2 */}
      <Card header={{ title: "Code", class: "mb-2 dark:text-white" }} className="mt-4 ">
        <pre className="ml-[-150px] lg:m-0 overflow-x-auto">
          <span className="text-blue-300 text-[.7rem] font-bold "></span>
          <code className="dark:text-zinc-300 text-zinc-800 text-[.7rem]">
            {`                        <ChartJs
                            type="scatter"
                            options={{
                                  chart: {
                                    height: 350,
                                    type: 'scatter',
                                    zoom: {
                                      type: 'xy'
                                    }
                                  },
                                  dataLabels: {
                                    enabled: false
                                  },
                                  grid: {
                                  show:false
                                  },
                                  xaxis: {
                                    type: 'datetime',
                                  },
                                  yaxis: {
                                    max: 70
                                  },
                                }}

                            series={[{
                                  name: 'TEAM 1',
                                  data: [
                                    [1487270400000, 44], [1487356800000, 33], [1487443200000, 44], [1487529600000, 42], [1487616000000, 46],
                                    [1487702400000, 54], [1487788800000, 52], [1487875200000, 58], [1487961600000, 51], [1488048000000, 49],
                                    [1488134400000, 58], [1488220800000, 51], [1488307200000, 49], [1488393600000, 53], [1488480000000, 52],
                                    [1488566400000, 54], [1488652800000, 51], [1488739200000, 60], [1488825600000, 51], [1488912000000, 49]
                                  ]
                                },
                                {
                                  name: 'TEAM 2',
                                  data: [
                                    [1487270400000, 41], [1487356800000, 32], [1487443200000, 42], [1487529600000, 40], [1487616000000, 44],
                                    [1487702400000, 52], [1487788800000, 50], [1487875200000, 56], [1487961600000, 49], [1488048000000, 47],
                                    [1488134400000, 56], [1488220800000, 49], [1488307200000, 47], [1488393600000, 51], [1488480000000, 50],
                                    [1488566400000, 52], [1488652800000, 49], [1488739200000, 58], [1488825600000, 49], [1488912000000, 47]
                                  ]
                                },
                                {
                                  name: 'TEAM 3',
                                  data: [
                                    [1487270400000, 43], [1487356800000, 34], [1487443200000, 44], [1487529600000, 42], [1487616000000, 46],
                                    [1487702400000, 54], [1487788800000, 52], [1487875200000, 58], [1487961600000, 51], [1488048000000, 49],
                                    [1488134400000, 58], [1488220800000, 51], [1488307200000, 49], [1488393600000, 53], [1488480000000, 52],
                                    [1488566400000, 54], [1488652800000, 51], [1488739200000, 60], [1488825600000, 51], [1488912000000, 49]
                                  ]
                                },
                                {
                                  name: 'TEAM 4',
                                  data: [
                                    [1487270400000, 40], [1487356800000, 31], [1487443200000, 41], [1487529600000, 39], [1487616000000, 43],
                                    [1487702400000, 51], [1487788800000, 49], [1487875200000, 55], [1487961600000, 48], [1488048000000, 46],
                                    [1488134400000, 55], [1488220800000, 48], [1488307200000, 46], [1488393600000, 50], [1488480000000, 49],
                                    [1488566400000, 51], [1488652800000, 48], [1488739200000, 57], [1488825600000, 48], [1488912000000, 46]
                                  ]
                                },
                                {
                                  name: 'TEAM 5',
                                  data: [
                                    [1487270400000, 43], [1487356800000, 34], [1487443200000, 44], [1487529600000, 42], [1487616000000, 46],
                                    [1487702400000, 54], [1487788800000, 52], [1487875200000, 58], [1487961600000, 51], [1488048000000, 49],
                                    [1488134400000, 58], [1488220800000, 51], [1488307200000, 49], [1488393600000, 53], [1488480000000, 52],
                                    [1488566400000, 54], [1488652800000, 51], [1488739200000, 60], [1488825600000, 51], [1488912000000, 49]
                                  ]
                                }
                              ]
                              }
                            height={400}
                        />
                        `}
          </code>
        </pre>
      </Card>
    </div >
  );
}

export default Scatter;