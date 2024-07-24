"use client";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJs.register(ArcElement, Tooltip, Legend);
export default function DoughnutChart({ amount }: { amount: number }) {
  const data = {
    labels: ["SBI", "Axis", "Kotak Mahindra"],
    datasets: [
      {
        label: "Current Balance",
        data: [amount * 0.5, amount * 0.25, amount * 0.24],
        backgroundColor: ["#2E90FA", "#1570EF", "#175CD3"],
        hoverBackgroundColor: ["#2E90FA", "#1570EF", "#175CD3"],
      },
    ],
  };
  return (
    <div className="w-3/5 sm:w-full">
      {}
      <Doughnut
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          // plugins: { legend: { display: false } },
        }}
      />
    </div>
  );
}
// {
//   labels: ["Current Balance", "Credit Limit"],
//   datasets: [
//     {
//       label: "Total Balance",
//       data: [amount, 10000],
//       backgroundColor: ["#FF6384", "#36A2EB"],
//       hoverBackgroundColor: ["#FF6384", "#36A2EB"],
//     },
//   ],
// }

//   arrofobject = [{ bankname, amount }];
