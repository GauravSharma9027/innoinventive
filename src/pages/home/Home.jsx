import CTASection from '../../components/commonSection/CTASection'
import Stats from '../../components/commonSection/Stats'
import AutomationExperience from './sections/AutomationExperience'
import FeaturedWork from './sections/FeaturedWork'
import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-[#061633] text-white">
            <Hero />
            <div className="mt-20">
                <Stats />

            </div>
            <AutomationExperience />

            <Services />

            <HowItWorks />

            <FeaturedWork />

            <Testimonials />
            
            <CTASection/>
        </div>
    )
}

export default Home
