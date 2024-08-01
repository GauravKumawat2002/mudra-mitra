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
      <div className="total-balance-chart basis-3/5 border-b-2 pb-3 sm:border-b-0 sm:border-r-2 sm:pb-0">
        <DoughnutChart amount={totalCurrentBalance} />
      </div>
      <div className="flex basis-2/5 flex-col gap-6">
        <h2 className="header-2">{totalBanks} Bank Accounts</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>
          <div className="total-balance-amount gap-2 text-center sm:text-left">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
}
