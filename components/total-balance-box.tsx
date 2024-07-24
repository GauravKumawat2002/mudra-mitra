// import { formatAmount } from "@/lib/utils";
"use client";
import DoughnutChart from "./doughnut-chart";
import AnimatedCounter from "./animated-counter";
// import { Doughnut } from "react-chartjs-2";
export default function TotalBalanceBox({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) {
  return (
    <section className="total-balance">
      <div className="total-balance-chart basis-2/5">
        <DoughnutChart amount={totalCurrentBalance} />
      </div>
      <div className="flex flex-col gap-6 basis-3/5">
        <h2 className="header-2">{totalBanks} Bank Accounts</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>
          <div className="total-balance-amount gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
}
