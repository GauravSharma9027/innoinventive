import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";

import Logo from "../../assets/Logo.png";
import LogoText from "../../assets/logoText.png";
import PremiumButton from "../UI/PremiumButton";

const HeaderNavigationItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
];

const NavigationLinks = ({ isMobile = false, onNavigate }) => {
    return (
        <>
            {HeaderNavigationItems.map(({ label, path }) => (
                <NavLink
                    key={path}
                    to={path}
                    end={path === "/"}
                    onClick={onNavigate}
                    className={({ isActive }) => `group relative text-[14px] font-medium transition-colors duration-300 ${isActive ? "text-white" : "text-blue-100 hover:text-cyan-300"} ${isMobile ? "border-b border-blue-400/10 py-4" : "py-2"}`}
                >
                    {({ isActive }) => (
                        <>
                            {label}

                            {!isMobile && (
                                <span className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-all duration-300 ${isActive ? "w-full shadow-[0_0_10px_rgba(34,211,238,0.6)]" : "w-0 group-hover:w-full"}`} />
                            )}
                        </>
                    )}
                </NavLink>
            ))}
        </>
    );
};

const Header = () => {
    const [IsMobileMenuOpen, SetIsMobileMenuOpen] = useState(false);
    const [IsDarkModeEnabled, SetIsDarkModeEnabled] = useState(true);

    const HandleMobileMenuToggle = () => {
        SetIsMobileMenuOpen((CurrentMenuState) => !CurrentMenuState);
    };

    const HandleMobileNavigation = () => {
        SetIsMobileMenuOpen(false);
    };

    const HandleThemeToggle = () => {
        SetIsDarkModeEnabled((CurrentThemeState) => !CurrentThemeState);
    };

    return (
        <header className="absolute left-0 top-0 z-50 w-full bg-[#050B18]">
            <div className="mx-auto flex h-[96px] max-w-[1400px] items-center justify-between px-6 lg:px-8">

                {/* Brand */}
                <NavLink to="/" className="shrink-0 flex space-x-0.5 justify-center items-center" aria-label="InnoInventive Home">
                    <img src={Logo} alt="InnoInventive" className="w-15 object-contain" />
                    <img src={LogoText} alt="InnoInventive" className="w-40 object-contain" />
                </NavLink>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 lg:flex">
                    <NavigationLinks />
                </nav>

                {/* Desktop Actions */}
                <div className="hidden items-center gap-4 lg:flex">
                    <PremiumButton
                        to="/contact"
                        label="Get Started"
                        icon={ArrowRight}
                    />

                    <button
                        type="button"
                        onClick={HandleThemeToggle}
                        aria-label="Toggle theme"
                        className="relative flex h-9 w-[56px] items-center justify-between rounded-full border border-blue-200/30 bg-[#07142D]/70 px-1.5 backdrop-blur-md transition-all duration-300 hover:border-cyan-300/40"
                    >
                        <Sun size={14} className={IsDarkModeEnabled ? "text-blue-100" : "text-cyan-300"} />
                        <Moon size={14} className={IsDarkModeEnabled ? "text-violet-300" : "text-blue-100"} />
                        <span className={`absolute top-1 h-7 w-7 rounded-full bg-white/[0.06] transition-all duration-300 ${IsDarkModeEnabled ? "left-1" : "left-[27px]"}`} />
                    </button>
                    
                </div>

                {/* Mobile Menu */}
                <button
                    type="button"
                    onClick={HandleMobileMenuToggle}
                    aria-label="Toggle navigation menu"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-300/20 bg-[#07142D]/70 text-white backdrop-blur-md transition-colors duration-300 hover:border-cyan-300/40 hover:text-cyan-300 lg:hidden"
                >
                    {IsMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`overflow-hidden border-t border-blue-400/10 bg-[#02081C]/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${IsMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <nav className="mx-auto flex max-w-[1400px] flex-col px-6 py-4">
                    <NavigationLinks isMobile onNavigate={HandleMobileNavigation} />

                    <NavLink
                        to="/contact"
                        onClick={HandleMobileNavigation}
                        className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white"
                    >
                        <span>Get Started</span>
                        <ArrowRight size={17} />
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;