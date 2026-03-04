'use client';
import CustomButton from "@/components/custom/CustomButton";
import { Input } from "@/components/ui/input";
import { useState, useMemo } from "react";

const Calculator = () => {
  const [amount, setAmount] = useState(10000);
  const [period, setPeriod] = useState(12);
  const INTEREST_RATE = 0.06;

  const { monthlyPayment, totalPayment, totalInterest } = useMemo(() => {
    const r = INTEREST_RATE / 12;
    const n = period;
    const P = amount;
    const monthly = r === 0 ? P / n : (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;
    return {
      monthlyPayment: monthly,
      totalPayment: total,
      totalInterest: total - P,
    };
  }, [amount, period]);

  const fmt = (val: number) =>
    "Ksh " + val.toLocaleString("en-KE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const amountPct = ((amount - 1000) / (100000 - 1000)) * 100;
  const periodPct = ((period - 1) / (36 - 1)) * 100;

  return (
    <div className="bg-primary-foreground px-4 py-16 md:p-16">
        <div className='text-center'>
            <h3 className="text-primary text-4xl font-bold my-2 max-w-md mx-auto ">Loan Calculator</h3>
            <p className="text-primary mb-8 max-w-lg mx-auto">Easily calculate your loan repayments and plan your finances effectively.</p>
            <CustomButton title='Get started' href='#' />
        </div>
        <div className="max-w-lg mx-auto text-center bg-white rounded-xl p-6 mt-16">
            {/* Loan Amount */}
            <div className="bg-secondary rounded-md p-6">
              <p className="field-label">Loan Amount</p>
              <p className="field-value">{fmt(amount)}</p>
              <div className="range-track">
                <div className="range-fill" style={{ width: `${amountPct}%` }} />
              </div>
              <input
                type="range"
                min={1000} max={100000} step={500}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                style={{ marginTop: "-20px" }}
              />
            </div>
            {/* Payback Period */}
            <div >
              <div className="flex flex-col md:flex-row justify-between items-center my-8">
                <p className="">Payback Period</p>
                <input type='number' min={1} max={36} value={period} onChange={(e) => setPeriod(Number(e.target.value))} />
              </div>
            </div>
            {/* Results */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="">Interest Rate (p.a.)</span>
                <span className="">6.00%</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="">Total Interest</span>
                <span className="">{fmt(totalInterest)}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="">Total Repayment</span>
                <span className="">{fmt(totalPayment)}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="">Monthly Payment</span>
                <span className="">{fmt(monthlyPayment)}</span>
              </div>
            
            </div>
          </div>
    </div>
  );
};

export default Calculator;