import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const Layout = () => {
    return (
        <>
            <Header />
            <main className="flex flex-col min-h-screen bg-[#061633] text-white pt-28">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout