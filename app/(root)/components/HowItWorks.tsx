import { BarChart3, Phone, PiggyBank, Smartphone } from 'lucide-react'
import React from 'react'

const loans = [
        {
          icon: Smartphone,
          title: "Apply Online",
          description: "Fill out our simple 5-minute form from any device.",
          href: "#"
        },
        {
          icon: PiggyBank,
          title: "Quick Approval",
          description: "Our team reviews your request and provides a decision swiftly.",
          href: "#"
        },
        {
          icon: BarChart3,
          title: "Receive Funds",
          description: "Once approved, money is sent directly to your account.",
          href: "#"
        },
        {
          icon: Smartphone,
          title: "Flexible Repayments",
          description: "Pay back in easy installments that fit your income flow.",
          href: "#"
        },
      ]

const HowItWorks = () => {
  return (
    <div className="bg-primary mx-4 md:mx-0px-4 py-16 md:p-24 rounded-t-4xl">
        <div className='text-center'>
        <p className="text-secondary font-bold">HOW IT WORKS</p>
        <h3 className="flex-1 text-white text-4xl font-semibold my-2 max-w-lg mx-auto">From Application to Approval in Minutes</h3>
        <p className="flex-1 text-white max-w-lg mx-auto">Transparent steps, quick decisions, and flexible repayments designed to move at the speed of your life.</p>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 md:mt-24">
                  {loans.map((loan, index) => {
                    const IconComponent = loan.icon
                    return (
                      <div
                        key={index}
                        className="group p-5 rounded-xl text-center"
                      >
                        <div className="bg-secondary size-14 mb-5 rounded-full grid place-content-center mx-auto">
                          <IconComponent className="size-8 text-primary" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-white text-xl font-bold">
                            {loan.title}
                          </h4>
                          <p className="mt-1 text-white/50">
                            {loan.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
        </div>
    </div>
  )
}

export default HowItWorks