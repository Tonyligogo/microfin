import About from "./components/About"
import Calculator from "./components/Calculator"
import AmokahiCTA from "./components/CTA"
import Faq from "./components/faq"
import Footer from "./components/Footer"
import WealthlyHero3 from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import Loans from "./components/Loans"
import Testimonials from "./components/Testimonials"
import WhyChooseAmokahi from "./components/WhyUs"

const LandingPage = () => {
  return (
    <main>
        <WealthlyHero3/>
        <About/>
        <HowItWorks/>
        <Loans/>
        <Calculator/>
        <WhyChooseAmokahi/>
        <Testimonials/>
        <AmokahiCTA/>
        <Faq/>
        <Footer/>
    </main>
  )
}

export default LandingPage