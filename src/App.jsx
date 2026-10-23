import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './Layout/Layout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Projects from './pages/projects/Projects'
import ContactUs from './pages/contact/ContactUs'
import ScrollToTop from './components/commonSection/ScrollToTop'
import PrivacyPolicy from './pages/Privacy/PrivacyPolicy'
import TermsAndConditions from "./pages/termCondition/TermsAndConditions"


const App = () => {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}

export default App