import React, { useEffect } from 'react';
import ContactHero from './section/ContactHero';
import ContactFormSection from './section/ContactFormSection';
import ContactAvailability from './section/ContactAvailability';
// import ContactMapSection from './section/ContactMapSection'

const ContactUs = () => {
    useEffect(() => {
        const scrollToContactForm = () => {
            if (window.location.hash !== '#contact-form') {
                return;
            }

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    document
                        .getElementById('contact-form')
                        ?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        });
                });
            });
        };

        scrollToContactForm();

        window.addEventListener('hashchange', scrollToContactForm);

        return () => {
            window.removeEventListener(
                'hashchange',
                scrollToContactForm
            );
        };
    }, []);

    return (
        <div>
            <ContactHero />
            <ContactFormSection id="contact-form" />
            {/* <ContactMapSection /> */}
            <ContactAvailability />
        </div>
    );
};

export default ContactUs;
