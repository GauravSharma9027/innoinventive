import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";

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

const NavigationLinks = ({
    isMobile = false,
    onNavigate,
}) => {
    return (
        <>
            {HeaderNavigationItems.map(
                ({ label, path }) => (
                    <NavLink
                        key={path}
                        to={path}
                        end={path === "/"}
                        onClick={onNavigate}
                        className={({ isActive }) =>
                            [
                                "group relative text-[14px] font-medium transition-colors duration-300",
                                isActive
                                    ? "text-white"
                                    : "text-blue-100/80 hover:text-cyan-300",
                                isMobile
                                    ? "border-b border-white/[0.06] py-4"
                                    : "py-2",
                            ].join(" ")
                        }
                    >
                        {({ isActive }) => (
                            <>
                                {label}

                                {!isMobile && (
                                    <span
                                        className={[
                                            "absolute left-0 -bottom-[9px] h-[2px] rounded-full",
                                            "bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500",
                                            "transition-all duration-300",
                                            isActive
                                                ? "w-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                                                : "w-0 group-hover:w-full",
                                        ].join(" ")}
                                    />
                                )}
                            </>
                        )}
                    </NavLink>
                )
            )}
        </>
    );
};

const Header = () => {
    const [
        IsMobileMenuOpen,
        SetIsMobileMenuOpen,
    ] = useState(false);

    /* =========================================================
       LOCK PAGE SCROLL WHEN MENU IS OPEN
    ========================================================= */

    useEffect(() => {
        if (!IsMobileMenuOpen) {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";

            return undefined;
        }

        const PreviousBodyOverflow =
            document.body.style.overflow;

        const PreviousDocumentOverflow =
            document.documentElement.style.overflow;

        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";

        return () => {
            document.body.style.overflow =
                PreviousBodyOverflow;

            document.documentElement.style.overflow =
                PreviousDocumentOverflow;
        };
    }, [IsMobileMenuOpen]);

    /* =========================================================
       MOBILE NAVIGATION
    ========================================================= */

    const HandleMobileNavigation = () => {
        SetIsMobileMenuOpen(false);
    };

    const HandleMobileMenuToggle = () => {
        SetIsMobileMenuOpen(
            (CurrentState) => !CurrentState
        );
    };

    return (
        <header
            className="
                fixed
                left-4
                right-4
                top-4
                z-[999]
                mx-auto
                w-auto
                max-w-[1400px]
            "
        >
            {/* =====================================================
                FLOATING GLASS NAV BAR
            ===================================================== */}

            <div
                className="
                    relative
                    overflow-visible
                    rounded-[22px]
                    border
                    border-white/[0.11]
                    bg-[#061633]/[0.62]
                    shadow-[0_18px_55px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.10)]
                    backdrop-blur-2xl
                    backdrop-saturate-150
                "
            >
                {/* Soft Glass Highlight */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-[22px]
                        bg-gradient-to-b
                        from-white/[0.055]
                        via-transparent
                        to-transparent
                    "
                />

                {/* Top Reflection */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        left-[8%]
                        right-[8%]
                        top-0
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-cyan-200/25
                        to-transparent
                    "
                />

                {/* =================================================
                    MAIN HEADER BAR
                ================================================= */}

                <div
                    className="
                        relative
                        grid
                        h-[74px]
                        grid-cols-[1fr_auto_1fr]
                        items-center
                        px-5
                        sm:px-6
                        lg:px-8
                    "
                >
                    {/* =================================================
                        BRAND
                    ================================================= */}

                    <NavLink
                        to="/"
                        aria-label="InnoInventive Home"
                        className="
                            flex
                            w-fit
                            items-center
                            justify-start
                            gap-0.5
                        "
                    >
                        <img
                            src={Logo}
                            alt="InnoInventive"
                            className="
                                w-[42px]
                                object-contain
                                sm:w-[48px]
                                lg:w-[52px]
                            "
                        />

                        <img
                            src={LogoText}
                            alt="InnoInventive"
                            className="
                                w-[116px]
                                object-contain
                                sm:w-[132px]
                                lg:w-[150px]
                            "
                        />
                    </NavLink>

                    {/* =================================================
                        DESKTOP NAVIGATION
                    ================================================= */}

                    <nav className="hidden items-center gap-8 lg:flex">
                        <NavigationLinks />
                    </nav>

                    {/* =================================================
                        DESKTOP ACTION
                    ================================================= */}

                    <div className="hidden justify-self-end lg:flex">
                        <PremiumButton
                            to="/contact"
                            label="Get Started"
                            icon={ArrowRight}
                        />
                    </div>

                    {/* =================================================
                        MOBILE / TABLET MENU BUTTON
                        FIXED TO RIGHT SIDE
                    ================================================= */}

                    <button
                        type="button"
                        onClick={
                            HandleMobileMenuToggle
                        }
                        aria-label="Toggle navigation menu"
                        aria-expanded={
                            IsMobileMenuOpen
                        }
                        className="
                            relative
                            col-start-3
                            ml-auto
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            justify-self-end
                            overflow-hidden
                            rounded-xl
                            border
                            border-white/[0.10]
                            bg-[#071a38]/[0.55]
                            text-white
                            shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                            backdrop-blur-xl
                            transition-all
                            duration-300
                            hover:border-cyan-300/30
                            hover:text-cyan-300
                            lg:hidden
                        "
                    >
                        <span
                            className="
                                pointer-events-none
                                absolute
                                inset-0
                                bg-gradient-to-br
                                from-cyan-300/[0.05]
                                via-transparent
                                to-violet-400/[0.05]
                            "
                        />

                        <span className="relative z-10">
                            {IsMobileMenuOpen ? (
                                <X size={19} />
                            ) : (
                                <Menu size={19} />
                            )}
                        </span>
                    </button>
                </div>

                {/* =====================================================
                    MOBILE / TABLET DROPDOWN
                ===================================================== */}

                <div
                    className={[
                        "relative overflow-hidden rounded-b-[22px]",
                        "border-t border-white/[0.07]",
                        "bg-[#041128]/[0.82]",
                        "backdrop-blur-2xl",
                        "transition-all duration-300 ease-out",
                        "lg:hidden",
                        IsMobileMenuOpen
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 border-t-transparent opacity-0",
                    ].join(" ")}
                >
                    <nav className="flex flex-col px-5 pb-5 pt-2 sm:px-6">
                        <NavigationLinks
                            isMobile
                            onNavigate={
                                HandleMobileNavigation
                            }
                        />

                        <NavLink
                            to="/contact"
                            onClick={
                                HandleMobileNavigation
                            }
                            className="
                                relative
                                mt-4
                                flex
                                items-center
                                justify-center
                                gap-2
                                overflow-hidden
                                rounded-xl
                                border
                                border-cyan-300/15
                                bg-gradient-to-r
                                from-cyan-400
                                via-blue-500
                                to-violet-600
                                px-5
                                py-3
                                text-sm
                                font-semibold
                                text-white
                                shadow-[0_12px_30px_rgba(22,119,255,0.18),inset_0_1px_0_rgba(255,255,255,0.18)]
                            "
                        >
                            <span
                                className="
                                    pointer-events-none
                                    absolute
                                    inset-0
                                    bg-gradient-to-r
                                    from-white/[0.10]
                                    via-transparent
                                    to-white/[0.05]
                                "
                            />

                            <span className="relative z-10">
                                Get Started
                            </span>

                            <ArrowRight
                                size={17}
                                className="relative z-10"
                            />
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;