import { BarChart3, PiggyBank, Smartphone, CheckCircle2 } from 'lucide-react'
import React from 'react'

const steps = [
  {
    icon: Smartphone,
    title: "ID + Collateral",
    description: "Bring your ID and the item to our office for a quick assessment.",
    step: "01"
  },
  {
    icon: PiggyBank,
    title: "Quick Approval",
    description: "Our team reviews your request and provides a decision in minutes.",
    step: "02"
  },
  {
    icon: BarChart3,
    title: "Receive Funds",
    description: "Once approved, money is sent directly to your M-Pesa or account.",
    step: "03"
  },
  {
    icon: CheckCircle2,
    title: "Flexible Repayments",
    description: "Pay back in weekly or monthly installments that fit your hustle.",
    step: "04"
  },
]

const HowItWorks = () => {
  return (
    <section className="relative bg-[#0c3a30] px-4 py-24 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="max-w-xl">
            <span className="text-[#d9f99d] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              The Process
            </span>
            <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
              From Application to <span className="italic font-light text-emerald-200">Approval in Minutes.</span>
            </h3>
          </div>
          <p className="text-emerald-100/80 max-w-sm text-lg font-light">
            Transparent steps and quick decisions designed to move at the speed of your life.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-16 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />

          {steps.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div key={index} className="group relative flex flex-col items-start">
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="bg-[#d9f99d] size-16 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(217,249,157,0.15)] group-hover:scale-110 transition-transform duration-500 relative z-10">
                    <IconComponent className="size-8 text-[#0c3a30]" />
                  </div>
                  {/* Step Number Badge */}
                  <span className="absolute -top-3 -right-3 bg-emerald-900 text-[#d9f99d] text-[10px] font-bold px-2 py-1 rounded-md border border-emerald-400/20 z-20">
                    {item.step}
                  </span>
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                  <h4 className="text-white text-xl font-bold tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-emerald-100/70 text-sm leading-relaxed font-light pr-4">
                    {item.description}
                  </p>
                </div>

                {/* Mobile/Tablet Arrow or Accent */}
                <div className="mt-6 w-8 h-[2px] bg-[#d9f99d]/30 rounded-full lg:hidden" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks