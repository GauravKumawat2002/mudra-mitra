"use client";
import CountUp from "react-countup";
export default function AnimatedCounter({ amount }: { amount: number }) {
  return (
    <div>
      <CountUp
        end={amount}
        decimals={2}
        prefix="₹"
        delay={0}
        duration={1.25}
        redraw={true}
        useIndianSeparators={true}
      />
    </div>
  );
}
