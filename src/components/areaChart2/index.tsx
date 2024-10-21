import React from "react";
import Chart from "react-apexcharts";
import "./style.scss";
import { renderPrice } from "../../utils/function";
interface AreaChartProps {
  title: string;
  cost: {
    year: number;
    month: number;
    count: number;
    total_amount: number;
  }[];

  // /motivational
}

const AreaChart2: React.FC<AreaChartProps> = ({ title, cost }) => {
  const render = (key: string, index: number) => {
    switch (key) {
      case "هزینه":
        return renderPrice(cost[index].total_amount, true);
    }
  };
  const options: ApexCharts.ApexOptions = {
    chart: {
      id: "area-chart",
      fontFamily: "KalamehWebFaNum",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {},
    yaxis: {
      labels: {
        offsetX: -20,
      },
    },
    fill: {
      type: "solid",
      opacity: 0,
    },
    legend: {
      position: "top",
    },
    tooltip: {
      custom: ({ series, seriesIndex, dataPointIndex, w }) => {
        let tooltipContent: string = '<div class="tooltip p-2 flex flex-col">';
        w.config.series.forEach((s: any, index: number) => {
          tooltipContent +=
            "<span>" +
            "مجموع " +
            s.name +
            " : " +
            render(s.name, dataPointIndex) +
            "</span>";
        });

        tooltipContent += "</div>";

        return tooltipContent;
      },
    },
  };

  const series = [
    {
      name: "هزینه",
      data: cost.map(item => item.count),
      stroke: {
        curve: "smooth",
        colors: ["5D87FF"],
        width: 3,
      },
    },
  ];

  return (
    <div className="bg-white rounded-lg p-3 md:p-[30px] shadow-sm">
      <div className="flex items-center">
        <h3 className="text-[#2A3547] text-lg">{title}</h3>
      </div>
      <Chart options={options} series={series} type="area" />
    </div>
  );
};

export default AreaChart2;
