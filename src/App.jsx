// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import Layout from './Layout/Layout'
// import Home from './pages/home/Home'
// import About from './pages/about/About'
// import Services from './pages/services/Services'
// import Projects from './pages/projects/Projects'
// import ContactUs from './pages/contact/ContactUs'
// import ScrollToTop from './components/commonSection/ScrollToTop'
// import PrivacyPolicy from './pages/Privacy/PrivacyPolicy'
// import TermsAndConditions from "./pages/termCondition/TermsAndConditions"


// const App = () => {
//     return (
//       <BrowserRouter>
//         <ScrollToTop />
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/contact" element={<ContactUs />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
//             <Route path="*" element={<Home />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     )
// }

// export default App


import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Helmet, HelmetProvider } from "react-helmet-async"

import Layout from "./Layout/Layout"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Services from "./pages/services/Services"
import Projects from "./pages/projects/Projects"
import ContactUs from "./pages/contact/ContactUs"
import ScrollToTop from "./components/commonSection/ScrollToTop"
import PrivacyPolicy from "./pages/Privacy/PrivacyPolicy"
import TermsAndConditions from "./pages/termCondition/TermsAndConditions"

const SiteSEO = ({ title, description, path }) => {
  const siteUrl = "https://innoinventive.com"
  const canonicalUrl = `${siteUrl}${path}`

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:url" content={canonicalUrl} />

      <meta property="og:type" content="website" />
    </Helmet>
  )
}

const PageWithSEO = ({ Component, title, description, path }) => {
  return (
    <>
      <SiteSEO title={title} description={description} path={path} />

      <Component />
    </>
  )
}

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PageWithSEO
                  Component={Home}
                  title="AI Business Automation Solutions | InnoInventive"
                  description="InnoInventive helps businesses automate workflows with AI-powered solutions, smart integrations, and intelligent automation systems."
                  path="/"
                />
              }
            />

            <Route
              path="home"
              element={
                <PageWithSEO
                  Component={Home}
                  title="AI Business Automation Solutions | InnoInventive"
                  description="Discover intelligent business automation solutions from InnoInventive to streamline workflows and improve productivity."
                  path="/"
                />
              }
            />

            <Route
              path="about"
              element={
                <PageWithSEO
                  Component={About}
                  title="About Us | InnoInventive"
                  description="Learn about InnoInventive and our approach to intelligent automation, business efficiency, and technology-driven growth."
                  path="/about"
                />
              }
            />

            <Route
              path="services"
              element={
                <PageWithSEO
                  Component={Services}
                  title="AI Automation Services | InnoInventive"
                  description="Explore InnoInventive's AI automation, workflow optimization, and custom business automation services."
                  path="/services"
                />
              }
            />

            <Route
              path="projects"
              element={
                <PageWithSEO
                  Component={Projects}
                  title="Our Projects | InnoInventive"
                  description="Explore InnoInventive's projects and discover how intelligent automation can improve business processes."
                  path="/projects"
                />
              }
            />

            <Route
              path="contact"
              element={
                <PageWithSEO
                  Component={ContactUs}
                  title="Contact Us | InnoInventive"
                  description="Contact InnoInventive to discuss your business automation needs and find the right solution for your goals."
                  path="/contact"
                />
              }
            />

            <Route
              path="privacy-policy"
              element={
                <PageWithSEO
                  Component={PrivacyPolicy}
                  title="Privacy Policy | InnoInventive"
                  description="Read the InnoInventive Privacy Policy to understand how information is collected, used, and protected."
                  path="/privacy-policy"
                />
              }
            />

            <Route
              path="terms-and-conditions"
              element={
                <PageWithSEO
                  Component={TermsAndConditions}
                  title="Terms and Conditions | InnoInventive"
                  description="Read the terms and conditions governing the use of the InnoInventive website and services."
                  path="/terms-and-conditions"
                />
              }
            />

            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
