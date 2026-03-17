import Calculator from "./components/Calculator"
import Faq from "./components/faq"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import Loans from "./components/Loans"
import Testimonials from "./components/Testimonials"

const LandingPage = () => {
  return (
    <main>
        <Hero/>
        <Loans/>
        <Calculator/>
        <HowItWorks/>
        <Testimonials/>
        <Faq/>
        <Footer/>
    </main>
  )
}

export default LandingPage