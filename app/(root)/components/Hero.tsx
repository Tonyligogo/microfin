import CustomButton from "@/components/custom/CustomButton"
import { Rocket, Settings } from "lucide-react"
import Image from "next/image"
import Person from "@/public/person.png"
import Logo from '@/public/sacco.png'
import Phone1 from '@/public/phone-1.png'
import Phone2 from '@/public/phone-2.png'
const Hero = () => {
  return (
    <div className="bg-primary min-h-[100vh] px-4 md:px-16 pt-30 md:pt-40">
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 justify-between my-16">
            <div className="flex-1">
            <span className="text-secondary">Fast & Flexible Micro-Loans</span>
            <h1 className="text-white text-4xl md:text-5xl font-bold"> Quick Loans. Fair Terms. <br /> No Hidden Fees.</h1>
            </div>
            <div className="space-y-5 flex-1">
                <p className="text-white text-lg">
Get access to affordable personal and business loans in minutes. 
  Apply online, receive quick approval, and manage repayments easily — 
  all from one secure digital platform.                    </p>
                <CustomButton title='Get started' href='#' />
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-16">
            <div className="bg-white rounded-xl p-5 pb-0">
                <div className="flex gap-3 items-center">
                    <div className="size-11 bg-secondary rounded-full grid place-content-center">
                    <Rocket className='size-6 text-primary' />
                    </div>
                    <p className="text-primary font-bold text-2xl">Fast Approval</p>
                </div>
                <p className="text-sm mt-2 mb-5">Get your loan approved quickly, so you can access funds when you need them most.</p>
                <div className="relative">
                    <div className="absolute top-1/3 bg-secondary/60 backdrop-blur rounded-xl p-4">
                    <div className="flex gap-2 items-center">
                        <Image src={Logo} alt='logo' width={20} />
                    <p className="font-semibold">Application Approved 🎉</p>
                    </div>
                    <p className="text-sm">Ksh 90,000 received from Amokahi Enterprises.</p>
                    </div>
                <Image src={Person} width={220} alt="person" className="mx-auto" />
                </div>
            </div>
            <div className="rounded-xl bg-secondary p-5 pb-0">
                <div className="flex gap-3 items-center">
                    <div className="size-11 bg-primary rounded-full grid place-content-center">
                    <Rocket className='size-6 text-white' />
                    </div>
                    <p className="text-primary font-bold text-2xl">Flexible Payments</p>
                </div>
                <p className="text-sm mt-2 mb-5">Choose a repayment plan that fits your schedule, whether weekly or monthly.</p>
                <div className="relative">
                    <div className="absolute top-1/3 bg-white/60 backdrop-blur rounded-xl p-4">
                    <div className="flex gap-2 items-center">
                        <Image src={Logo} alt='logo' width={20} />
                    <p className="font-semibold">Choose your repayment plan ✅</p>
                    </div>
                    <p className="text-sm"> Choose between weekly or monthly repayment options.</p>
                    </div>
                <Image src={Person} width={220} alt="person" className="mx-auto" />
                </div>
            </div>
            <div className="rounded-xl relative bg-white p-5 pb-0 h-[432px] md:h-auto">
                <div className="flex gap-3 items-center">
                    <div className="size-11 bg-secondary rounded-full grid place-content-center">
                    <Settings className='size-6 text-primary'/>
                    </div>
                    <p className="text-primary font-bold text-2xl">Secure & Confidential</p>
                </div>
                <p className="text-sm mt-2 mb-5">Your personal information is handled with the utmost care, ensuring privacy and confidentiality at every step.</p>
                <Image src={Phone1} width={100} alt="dashboard look" className="absolute bottom-1/5 left-1/5 z-30" />
                <Image src={Phone2} width={200} alt="dashboard look" className="absolute bottom-0 left-1/2 -translate-x-1/2" />
            </div>
        </div>
    </div>
  )
}

export default Hero