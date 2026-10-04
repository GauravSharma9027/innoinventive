import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Header2 from '../components/header/Header2'

const Layout = () => {
    return (
        <>
            <Header />
            {/* <Header2/> */}
            <main className="flex flex-col min-h-screen bg-[#061633] text-white pt-24">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout