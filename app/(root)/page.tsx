import Calculator from "./components/Calculator"
import ChooseUs from "./components/Choose-us"
import Faq from "./components/faq"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import Loans from "./components/Loans"
import Problem from "./components/Problem"
import Testimonials from "./components/Testimonials"

const LandingPage = () => {
  return (
    <main>
        <Hero/>
        <Loans/>
        <Calculator/>
        <HowItWorks/>
        <Testimonials/>
        {/* <Problem/> */}
        {/* <Features/> */}
        {/* <ChooseUs/> */}
        <Faq/>
        <Footer/>
    </main>
  )
}

export default LandingPage