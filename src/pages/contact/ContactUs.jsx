import React from 'react'
import ContactHero from './section/ContactHero'
import ContactFormSection from './section/ContactFormSection'
import ContactAvailability from './section/ContactAvailability'
// import ContactMapSection from './section/ContactMapSection'

const ContactUs = () => {
    return (
        <div>
            <ContactHero/>
            <ContactFormSection/>
            {/* <ContactMapSection/> */}
            <ContactAvailability/>
        </div>
    )
}

export default ContactUs
