import React from "react";
import Chart from "react-apexcharts";

const monthlyRevenueArray = [
  {
    _id: 1,
    revenue_amount: 10,
    number_of_payments: 1,
    monthName: "Jan",
  },
  {
    _id: 2,
    revenue_amount: 140,
    number_of_payments: 20,
    monthName: "Feb",
  },
  {
    _id: 3,
    revenue_amount: 805.5,
    number_of_payments: 99,
    monthName: "Mar",
  },
];

const MonthlyRev = () => {
  const chartData = {
    options: {
      chart: {
        id: "monthly-revenue",
      },
      xaxis: {
        categories: monthlyRevenueArray.map((month) => month.monthName),
        title: {
          text: "Month",
        },
      },
      yaxis: {
        title: {
          text: "Revenue Amount",
        },
      },
    },
    series: [
      {
        name: "Monthly Revenue",
        data: monthlyRevenueArray.map((month) => month.revenue_amount),
      },
    ],
  };

  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default MonthlyRev;
