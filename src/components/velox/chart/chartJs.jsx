"use client"
import dynamic from "next/dynamic";
import React, { useState } from "react";
import Chart from "react-apexcharts";

// const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

function ChartJs( { type, options, series, height } ) {
     const [optionsChart, setOptionsChart] = useState( options );

     const [seriesChart, setSeriesChart] = useState( series );

     return (
          <>
              <Chart
                    options={optionsChart ?? {}}
                    series={seriesChart ?? []}
                    type={type ?? ""}
                    height={height ?? ""}
               />
          </>
     );
};

export default ChartJs;
