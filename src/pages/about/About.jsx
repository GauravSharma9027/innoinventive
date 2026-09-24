import React from 'react'
import AboutHero from './sections/AboutHero'
import AboutPrinciples from './sections/AboutPrinciples'
import AboutImpact from './sections/AboutImpact'
// import AboutAutomationSystems from './sections/AboutAutomationSystems'
import AboutTeam from './sections/AboutTeam'
import AboutVision from './sections/AboutVision'
import AboutFaq from './sections/AboutFaq'
import CTASection from '../../components/commonSection/CTASection'

const About = () => {
    return (
        <div>
            <AboutHero/>
            <AboutPrinciples/>
            <AboutImpact/>
            {/* <AboutAutomationSystems/> */}
            <AboutTeam/>
            <AboutVision/>
            <AboutFaq/>
            <CTASection />

        </div>
    )
}

export default About
