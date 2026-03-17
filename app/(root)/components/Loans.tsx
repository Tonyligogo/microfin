import CustomButton from '@/components/custom/CustomButton'
import { Users, PiggyBank, BarChart3, Smartphone } from 'lucide-react'
import Link from 'next/link'

const Loans = () => {
    const loans = [
        {
          icon: Users,
          title: "Personal Loans",
          description: "Life happens. Whether it's school fees or home repairs, get the boost you need with manageable repayment terms.",
          href: "#"
        },
        {
          icon: PiggyBank,
          title: "Business Loans",
          description: "Fuel your hustle. Scale your inventory or upgrade your equipment with capital designed for small business cycles.",
          href: "#"
        },
        {
          icon: BarChart3,
          title: "Emergency Loans",
          description: "Fast-track funding for life’s unexpected moments. Approval in hours, not days, because time matters.",
          href: "#"
        },
        {
          icon: Smartphone,
          title: "Micro Loans",
          description: "Small amounts, big impact. Accessible credit for traders and individuals looking to bridge a short-term gap.",
          href: "#"
        },
      ]
  return (
    <div className="bg-white px-4 py-16 md:p-16">
        <div className='text-center'>
            <h3 className="text-primary text-4xl font-bold my-2 max-w-md mx-auto ">All your lending needs in a single platform.</h3>
            <p className="text-primary mb-8 max-w-lg mx-auto">We provide accessible credit with transparent terms, helping you bridge the gap between where you are and where you want to be.</p>
            <CustomButton title='Get started' href='#' />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 md:mt-16">
                  {loans.map((loan, index) => {
                    const IconComponent = loan.icon
                    return (
                      <Link
                        key={index}
                        href={loan.href}
                        className="group p-5 rounded-xl bg-primary-foreground transition-colors duration-200"
                      >
                        <div className="bg-secondary size-14 mb-5 rounded-full grid place-content-center">
                          <IconComponent className="size-8 text-primary" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-primary text-xl font-bold">
                            {loan.title}
                          </h4>
                          <p className="mt-1 text-primary">
                            {loan.description}
                          </p>
                        </div>
                      </Link>
                    )
                  })}
        </div>
    </div>
  )
}

export default Loans