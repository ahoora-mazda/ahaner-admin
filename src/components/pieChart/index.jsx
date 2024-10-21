import React from "react";
import Chart from "react-apexcharts";
import { renderPrice } from "../../utils/function";

const PieChart = ({ title, data, labels }) => {
  const state = {
    series: data,
    options: {
      chart: {
        fontFamily: "KalamehWebFaNum",
        type: "pie",
      },
      labels: labels,
      tooltip: {
        y: {
          formatter: function (value) {
            return renderPrice(value, true);
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg p-3 md:p-[30px] shadow-sm">
      <div className="flex items-center">
        <h3 className="text-[#2A3547] text-lg">{title}</h3>
      </div>
      <Chart options={state.options} series={state.series} type="pie" />
    </div>
  );
};

export default PieChart;
