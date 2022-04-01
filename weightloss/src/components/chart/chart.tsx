import React, { FC, useState } from "react";
import { Doughnut, ChartProps } from "react-chartjs-2";
import "./chart.css";

type Props = {};

const Chart: FC<Props> = () => {
  const [data, setData] = useState({
    labels: ["used", "left"],
    datasets: [
      {
        label: "Progress",
        backgroundColor: ["#B21F00", "#C9DE00"],
        hoverBackgroundColor: ["#501800", "#4B5000"],
        data: [65, 59],
      },
    ],
  });

  const options: any = {
    title: {
      display: true,
      text: "Average Rainfall per month",
      fontSize: 20,
    },
    legend: {
      display: true,
      position: "right",
    },
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Chart;
