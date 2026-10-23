import {React,useEffect} from 'react'
import ProjectsHero from './section/ProjectsHero'
import ProjectsSection from './section/ProjectsSection'
import CTASection from '../../components/commonSection/CTASection'

const Projects = () => {

   useEffect(() => {
        const scrollToContactForm = () => {
            if (window.location.hash !== '#projects') {
                return;
            }

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    document
                        .getElementById('projects')
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
            <ProjectsHero />
            <ProjectsSection id="projects"/>
            <CTASection />
        </div>
    )
}

export default Projects
