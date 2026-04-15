import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Faq = () => {
  return (
    <div className="bg-white px-4 py-24 max-w-7xl mx-auto selection:bg-[#42cdf5]/30">
        <div className="text-center mb-16">
            <span className="text-[#0a90b0] text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
                Common Questions
            </span>
            <h3 className="text-[#0a4a5e] text-4xl md:text-6xl font-medium tracking-tight">
                Everything you <span className="italic font-light text-[#42cdf5]">need to know.</span>
            </h3>
        </div>

        <div className="max-w-4xl mx-auto">
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-4"
              defaultValue="item-1"
            >
              {/* Speed & Requirements Logic */}
              <AccordionItem value="item-1" className="bg-[#f8fafc] border-slate-100 px-6 py-2 rounded-[2rem] border hover:border-[#42cdf5]/30 transition-all">
                <AccordionTrigger className="font-bold text-[#0a4a5e] text-lg hover:no-underline text-left">
                    How long does the approval process take?
                </AccordionTrigger>
                <AccordionContent className="text-[#0a4a5e]/70 text-base font-light leading-relaxed">
                    Our process begins immediately after you provide all mandatory requirements (ID, Statements, Photos, etc.). The speed of your loan depends on how fast you complete these steps; once submitted, our team provides a decision within minutes.
                </AccordionContent>
              </AccordionItem>

              {/* Capability & Eligibility */}
              <AccordionItem value="item-2" className="bg-[#f8fafc] border-slate-100 px-6 py-2 rounded-[2rem] border hover:border-[#42cdf5]/30 transition-all">
                <AccordionTrigger className="font-bold text-[#0a4a5e] text-lg hover:no-underline text-left">
                    How much am I eligible to borrow?
                </AccordionTrigger>
                <AccordionContent className="text-[#0a4a5e]/70 text-base font-light leading-relaxed">
                    Loan amounts are determined strictly by your individual capability and eligibility. We assess your cash flow and documentation to ensure you get a facility that you can comfortably repay without straining your finances.
                </AccordionContent>
              </AccordionItem>

              {/* Time Value of Money */}
              <AccordionItem value="item-3" className="bg-[#f8fafc] border-slate-100 px-6 py-2 rounded-[2rem] border hover:border-[#42cdf5]/30 transition-all">
                <AccordionTrigger className="font-bold text-[#0a4a5e] text-lg hover:no-underline text-left">
                    What is the interest rate logic?
                </AccordionTrigger>
                <AccordionContent className="text-[#0a4a5e]/70 text-base font-light leading-relaxed">
                    We value the Time Value of Money. By providing capital instantly, we enable you to seize business opportunities today that would otherwise be lost. Our rate reflects this convenience and the speed at which we deploy funds to your M-Pesa.
                </AccordionContent>
              </AccordionItem>

              {/* Late Payment & Penalties */}
              <AccordionItem value="item-4" className="bg-[#f8fafc] border-slate-100 px-6 py-2 rounded-[2rem] border hover:border-[#42cdf5]/30 transition-all">
                <AccordionTrigger className="font-bold text-[#0a4a5e] text-lg hover:no-underline text-left">
                    What happens if I miss a payment?
                </AccordionTrigger>
                <AccordionContent className="text-[#0a4a5e]/70 text-base font-light leading-relaxed">
                    Timely repayment is crucial for your credit standing. While we offer flexible terms, please note that late payments will attract a penalty fee as per our lending terms. We encourage all clients to communicate early if they anticipate any delays.
                </AccordionContent>
              </AccordionItem>

              {/* Regulation */}
              <AccordionItem value="item-5" className="bg-[#f8fafc] border-slate-100 px-6 py-2 rounded-[2rem] border hover:border-[#42cdf5]/30 transition-all">
                <AccordionTrigger className="font-bold text-[#0a4a5e] text-lg hover:no-underline text-left">
                    Is my data and collateral safe?
                </AccordionTrigger>
                <AccordionContent className="text-[#0a4a5e]/70 text-base font-light leading-relaxed">
                    Yes. Amokahi Enterprises follows strict CBK guidelines for Non-Deposit Taking institutions. We handle your documentation and collateral with the highest level of professionalism and legal transparency.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
        </div>
    </div>
  )
}

export default Faq