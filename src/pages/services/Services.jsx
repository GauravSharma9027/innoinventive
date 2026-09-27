import CTASection from '../../components/commonSection/CTASection'
import FAQ from '../../components/commonSection/FAQ'
import WhyChooseUs from '../../components/commonSection/WhyChooseUs'
import ServicesHero from './section/ServicesHero'
import ServicesPortfolio from './section/ServicesPortfolio'

const Services = () => {
    return (
        <div>
            <ServicesHero />
            <ServicesPortfolio />
            <WhyChooseUs />
            <FAQ/>
            <CTASection />
        </div>
    )
}

export default Services
