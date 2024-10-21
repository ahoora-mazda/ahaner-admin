import React from "react";
import Chart from "react-apexcharts";
import "./style.scss";
import { renderPrice } from "../../utils/function";
interface AreaChartProps {
  title: string;
  facility: {
    year: number;
    month: number;
    count: number;
    total_amount: number;
  }[];
  membershipـright: {
    year: number;
    month: number;
    count: number;
    total_amount: number;
  }[];
  participate_right: {
    year: number;
    month: number;
    count: number;
    total_amount: number;
  }[];
  motivational: {
    year: number;
    month: number;
    count: number;
    total_amount: number;
  }[];
  // /motivational
}

const AreaChart: React.FC<AreaChartProps> = ({
  title,
  facility,
  membershipـright,
  participate_right,
  motivational,
}) => {
  const render = (key: string, index: number) => {
    switch (key) {
      case "تسهیلات پرداختی":
        return renderPrice(facility[index].total_amount, true);
      case "حق اشتراک دریافتی":
        return renderPrice(membershipـright[index].total_amount, true);
      case "حق مشارکت دریافتی":
        return renderPrice(participate_right[index].total_amount, true);
      case "کسر انگیزشی دریافتی":
        return renderPrice(motivational[index].total_amount, true);
      default:
        break;
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
      name: "تسهیلات پرداختی",
      data: facility.map(item => item.count),
      stroke: {
        curve: "smooth",
        colors: ["5D87FF"],
        width: 3,
      },
    },
    {
      name: "حق اشتراک دریافتی",
      data: membershipـright.map(item => item.count),
      stroke: {
        curve: "smooth",
        colors: ["5D87FF"],
        width: 3,
      },
    },
    {
      name: "حق مشارکت دریافتی",
      data: participate_right.map(item => item.count),
      stroke: {
        curve: "smooth",
        colors: ["5D87FF"],
        width: 3,
      },
    },
    {
      name: "کسر انگیزشی دریافتی",
      data: motivational.map(item => item.count),
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

export default AreaChart;
