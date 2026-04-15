'use client';
import React, { useState, useMemo } from "react";

type Frequency = "monthly" | "weekly";
type LoanType = "Personal" | "Business" | "Emergency" | "Micro" | "Logbook";

const Calculator = () => {
  const [amount, setAmount] = useState<number>(10000);
  const [period, setPeriod] = useState<number>(12);
  const [frequency, setFrequency] = useState<Frequency>("monthly");
  const [loanType, setLoanType] = useState<LoanType>("Business");

  // 🔥 Kenyan-style rates
  const MONTHLY_RATE = 0.03; // 3% per month (~36% p.a. equivalent)
  const LTV_RATIO = 0.70;

  const results = useMemo(() => {
    const P = amount;
    const months = period;

    // ✅ Flat interest
    const totalInterest = P * MONTHLY_RATE * months;

    // ✅ Total repayment (what user pays back)
    const totalRepayment = P + totalInterest;

    // ✅ Amount user actually receives
    const disbursedAmount = P;

    // ✅ Installments
    const monthlyInstallment = totalRepayment / months;
    const weeklyInstallment = totalRepayment / (months * 4.333);

    const installment =
      frequency === "monthly" ? monthlyInstallment : weeklyInstallment;

    const requiredCollateral = P / LTV_RATIO;

    return {
      installment,
      totalRepayment,
      totalInterest,
      disbursedAmount,
      requiredCollateral,
    };
  }, [amount, period, frequency]);

  const fmt = (val: number) =>
    "Ksh " +
    val.toLocaleString("en-KE", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  return (
    <section className="relative bg-[#062d3a] py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <span className="text-[#42cdf5] text-sm font-bold tracking-widest uppercase mb-4 block">
            Plan Your Hustle
          </span>

          <h3 className="text-white text-4xl md:text-6xl font-medium leading-tight mb-6">
            Calculate your{" "}
            <span className="italic font-light text-[#42cdf5]">
              repayments.
            </span>
          </h3>

          <p className="text-cyan-100/60 text-lg font-light mb-8 max-w-md">
            Transparent micro-lending. Rate:{" "}
            <strong>{MONTHLY_RATE * 100}% per month</strong>.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {(["Personal", "Business", "Emergency", "Micro", "Logbook"] as LoanType[]).map((type) => (
              <button
                key={type}
                onClick={() => setLoanType(type)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all border ${
                  loanType === type
                    ? "bg-[#42cdf5] text-[#062d3a] border-[#42cdf5]"
                    : "bg-white/5 text-white/40 border-white/10"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-[#0a90b0]/20 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-8">

          {/* Amount */}
          <div className="mb-8">
            <div className="flex justify-between">
              <label className="text-white/50 text-xs">Loan Amount</label>
              <span className="text-white font-bold">{fmt(amount)}</span>
            </div>
            <input
              type="range"
              min={1000}
              max={100000}
              step={500}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Period */}
          <div className="mb-8">
            <div className="flex justify-between">
              <label className="text-white/50 text-xs">Duration</label>
              <span className="text-white font-bold">{period} months</span>
            </div>
            <input
              type="range"
              min={1}
              max={24}
              value={period}
              onChange={(e) => setPeriod(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Frequency */}
          <div className="flex mb-8 rounded-lg p-2 bg-[#0a90b0]/30">
            <button
              onClick={() => setFrequency("monthly")}
              className={`flex-1 py-2 ${
                frequency === "monthly"
                  ? "bg-[#42cdf5] text-black rounded-md"
                  : "text-white/40"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setFrequency("weekly")}
              className={`flex-1 py-2 ${
                frequency === "weekly"
                  ? "bg-[#42cdf5] text-black rounded-md"
                  : "text-white/40"
              }`}
            >
              Weekly
            </button>
          </div>

          {/* RESULTS */}
          <div className="bg-white p-6 rounded-xl space-y-4">

            <div className="flex justify-between">
              <span>You Receive</span>
              <strong>{fmt(results.disbursedAmount)}</strong>
            </div>

            <div className="flex justify-between">
              <span>Total Repayment</span>
              <strong>{fmt(results.totalRepayment)}</strong>
            </div>

            <div className="flex justify-between text-sm text-gray-500">
              <span>Total Interest</span>
              <span>{fmt(results.totalInterest)}</span>
            </div>

            <div className="border-t pt-4 flex justify-between items-center">
              <span className="text-sm">
                {frequency === "monthly" ? "Monthly" : "Weekly"} Payment
              </span>
              <span className="text-xl font-bold text-[#0a90b0]">
                {fmt(results.installment)}
              </span>
            </div>
          </div>

          {/* CTA */}
          <button className="w-full mt-6 bg-[#42cdf5] text-black py-4 rounded-xl font-bold">
            Apply for {loanType} Loan
          </button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;