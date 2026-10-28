// import { useEffect } from 'react'
// import CTASection from '../../components/commonSection/CTASection'
// import FAQ from '../../components/commonSection/FAQ'
// import WhyChooseUs from '../../components/commonSection/WhyChooseUs'
// import ServicesHero from './section/ServicesHero'
// import ServicesPortfolio from './section/ServicesPortfolio'

// const Services = () => {

// useEffect(() => {
//         const scrollToContactForm = () => {
//             if (window.location.hash !== "#services-portfolio") {
//               return
//             }
// F
//             requestAnimationFrame(() => {
//                 requestAnimationFrame(() => {
//                     document.getElementById("services-portfolio")?.scrollIntoView({
//                       behavior: "smooth",
//                       block: "start",
//                     })
//                 });
//             });
//         };

//         scrollToContactForm();

//         window.addEventListener('hashchange', scrollToContactForm);

//         return () => {
//             window.removeEventListener(
//                 'hashchange',
//                 scrollToContactForm
//             );
//         };
//     }, []);

//     return (
//         <div>
//             <ServicesHero />
//             <ServicesPortfolio id="services-portfolio" />
//             <WhyChooseUs />
//             <FAQ/>
//             <CTASection />
//         </div>
//     )
// }

// export default Services



import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import CTASection from "../../components/commonSection/CTASection"
import FAQ from "../../components/commonSection/FAQ"
import WhyChooseUs from "../../components/commonSection/WhyChooseUs"
import ServicesHero from "./section/ServicesHero"
import ServicesPortfolio from "./section/ServicesPortfolio"

const Services = () => {
  const Location = useLocation()

  useEffect(() => {
    if (Location.hash !== "#services-portfolio") {
      return
    }

    let FirstFrame
    let SecondFrame

    FirstFrame = window.requestAnimationFrame(() => {
      SecondFrame = window.requestAnimationFrame(() => {
        const PortfolioSection = document.getElementById("services-portfolio")

        if (!PortfolioSection) {
          return
        }

        PortfolioSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      })
    })

    return () => {
      window.cancelAnimationFrame(FirstFrame)

      if (SecondFrame !== undefined) {
        window.cancelAnimationFrame(SecondFrame)
      }
    }
  }, [Location.pathname, Location.hash])

  return (
    <div>
      <ServicesHero />

      <ServicesPortfolio id="services-portfolio" />

      <WhyChooseUs />

      <FAQ />

      <CTASection />
    </div>
  )
}

export default Services
