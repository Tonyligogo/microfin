import CustomButton from "@/components/custom/CustomButton"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Faq = () => {
  return (
    <div className="bg-white px-4 py-16 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-5">
         <div>
            <p className="text-primary font-bold">FAQ</p>
            <h3 className="text-primary text-4xl font-bold my-2">Frequently Asked <br /> Questions</h3>
            <p className="text-primary mb-8">Everything you need to know about our lending process, requirements, and how we help you grow.</p>
            <CustomButton title='Contact Us' href='#' />
        </div>
        <div className="col-span-2 mt-8 md:mt-0">
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1" className="bg-primary-foreground px-4 rounded-xl mb-2">
        <AccordionTrigger className="font-semibold text-primary text-lg">How long does the approval process take?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance text-base">
          <p>
          We pride ourselves on speed. Once your application is submitted, our automated system (supported by our Loan Advisor AI) usually provides a decision within 5 to 10 minutes.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="bg-primary-foreground px-4 rounded-xl mb-2">
        <AccordionTrigger className="font-semibold text-primary text-lg">How much can I borrow for the first time?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance text-base">
          <p>
          First-time borrowers can typically access between KES 5,000 and KES 50,000. As you build a positive repayment history with us, your limit can increase up to KES 500,000.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="bg-primary-foreground px-4 rounded-xl mb-2">
        <AccordionTrigger className="font-semibold text-primary text-lg">Can I pay back my loan early?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance text-base">
          <p>
          Yes! We encourage early repayment. There are no penalties for paying back ahead of schedule; in fact, it improves your credit score with us for future, larger loans.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="bg-primary-foreground px-4 rounded-xl mb-2">
        <AccordionTrigger className="font-semibold text-primary text-lg">What happens if I miss a payment?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance text-base">
          <p>
          If you anticipate a delay, please contact us immediately. While we do apply late fees as per our terms, we prefer to work with you on a restructured payment plan to keep your account in good standing.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="bg-primary-foreground px-4 rounded-xl">
        <AccordionTrigger className="font-semibold text-primary text-lg">Are you a registered financial institution?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance text-base">
          <p>
            Yes, we are fully licensed and regulated under Kenyan micro-finance laws, ensuring we follow ethical lending practices and transparent interest calculations.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
        </div>
    </div>
  )
}

export default Faq