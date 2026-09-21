// ============================================================
// Footer.jsx
// Main website footer for the InnoInventive frontend.
// Responsive layout optimized for:
// - Mobile
// - Tablet
// - Laptop
// - Large Desktop
// ============================================================

import {
    ArrowRight,
    ArrowUp,
    BrainCircuit,
    Clock3,
    Code2,
    Mail,
    MapPin,
    Phone,
    Send,
    ShieldCheck,
    Sparkles,
    TrendingUp,
    Zap,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import FooterBrandLogo from "../../assets/Logo.png";
import FooterLogoText from "../../assets/LogoText.png";
/* =========================================================
   FOOTER DATA
========================================================= */

const FooterQuickLinks = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About Us",
        href: "/about",
    },
    {
        label: "Services",
        href: "/services",
    },
    {
        label: "Projects",
        href: "/projects",
    },
    {
        label: "Contact Us",
        href: "/contact",
    },
    {
        label: "Privacy Policy",
        href: "/privacy-policy",
    },
    {
        label: "Terms & Conditions",
        href: "/terms-and-conditions",
    },
];

const FooterServiceLinks = [
    {
        label: "Web & App Development",
        href: "/services",
    },
    {
        label: "AI & Automation",
        href: "/services",
    },
    {
        label: "Cloud Solutions",
        href: "/services",
    },
    {
        label: "Data & Analytics",
        href: "/services",
    },
    {
        label: "UI/UX Design",
        href: "/services",
    },
    {
        label: "API Integration",
        href: "/services",
    },
];

const FooterCompanyLinks = [
    {
        label: "About InnoInventive",
        href: "/about",
    },
    {
        label: "Our Projects",
        href: "/projects",
    },
    {
        label: "Contact Us",
        href: "/contact",
    },
    {
        label: "Privacy Policy",
        href: "/privacy-policy",
    },
    {
        label: "Terms & Conditions",
        href: "/terms-and-conditions",
    },
];

const FooterFeatureHighlights = [
    {
        title: "Modern",
        subtitle: "Technology",
        icon: Zap,
    },
    {
        title: "Secure",
        subtitle: "& Reliable",
        icon: ShieldCheck,
    },
    {
        title: "AI-Powered",
        subtitle: "Solutions",
        icon: BrainCircuit,
    },
    {
        title: "Scalable",
        subtitle: "Growth",
        icon: TrendingUp,
    },
];

const FooterContactDetails = [
    {
        id: "location",
        icon: MapPin,
        content: (
            <>
                <span>123 Innovation Street,</span>
                <span>Tech City, India - 110001</span>
            </>
        ),
    },
    {
        id: "email",
        icon: Mail,
        content: "hello@innoinventive.com",
    },
    {
        id: "phone",
        icon: Phone,
        content: "+91 90275 35618",
    },
    {
        id: "hours",
        icon: Clock3,
        content: "Mon - Fri: 9:00 AM - 6:00 PM",
    },
];

const FooterSocialLinkData = [
    {
        label: "LinkedIn",
        href: "#",
        icon: "in",
    },
    {
        label: "X",
        href: "#",
        icon: "𝕏",
    },
    {
        label: "YouTube",
        href: "#",
        icon: "▶",
    },
    {
        label: "Instagram",
        href: "#",
        icon: "◎",
    },
];

/* =========================================================
   SHARED CONTAINER
========================================================= */

const FooterContainerClasses =
    "mx-auto w-full max-w-[1400px] px-6 lg:px-8";

/* =========================================================
   FOOTER BRAND SECTION
========================================================= */

function FooterBrandSection() {
    return (
        <div className="w-full">
            {/* =================================================
                BRAND
            ================================================= */}

            <NavLink
                to="/"
                className="group inline-flex items-center gap-0.5 sm:gap-4"
                aria-label="InnoInventive Home"
            >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center sm:h-14 sm:w-14 lg:h-16 lg:w-16">
                    <img
                        src={FooterBrandLogo}
                        alt="InnoInventive"
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                </div>
                <img
                    src={FooterLogoText}
                    alt="InnoInventive"
                    className="h-20 w-60 object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
            </NavLink>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p className="mt-7 max-w-[720px] text-[13px] leading-6 text-[#b7c7e3] sm:text-[14px] lg:text-[15px]">
                We build intelligent digital solutions that
                automate businesses, streamline operations and
                create sustainable growth for the future.
            </p>

            {/* =================================================
                FEATURE HIGHLIGHTS
            ================================================= */}

            <div className="mt-8 grid w-full grid-cols-2 gap-y-7 sm:grid-cols-4 sm:gap-y-0 lg:mt-9">
                {FooterFeatureHighlights.map(
                    (featureHighlight, index) => {
                        const FeatureIcon =
                            featureHighlight.icon;

                        return (
                            <div
                                key={featureHighlight.title}
                                className={[
                                    "relative flex min-h-[88px] flex-col items-start px-4",
                                    "sm:px-5 lg:px-6",
                                    index === 0
                                        ? "pl-0"
                                        : "",
                                    index !==
                                        FooterFeatureHighlights.length -
                                        1
                                        ? "sm:border-r sm:border-[#1d304b]"
                                        : "",
                                ].join(" ")}
                            >
                                <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-[12px] border border-[#16385f] bg-[#07182e] shadow-[0_0_22px_rgba(0,153,255,0.08)] lg:h-11 lg:w-11">
                                    <FeatureIcon
                                        size={19}
                                        strokeWidth={1.8}
                                        className="text-[#16b9ff]"
                                    />
                                </div>

                                <span className="text-[12px] font-medium leading-4 text-[#d6e3f8] lg:text-[13px]">
                                    {featureHighlight.title}
                                </span>

                                <span className="text-[11px] leading-4 text-[#8095b4] lg:text-[12px]">
                                    {featureHighlight.subtitle}
                                </span>
                            </div>
                        );
                    },
                )}
            </div>
        </div>
    );
}

/* =========================================================
   NAVIGATION COLUMN
========================================================= */

function FooterNavigationColumn({
    title,
    links,
    icon: ColumnIcon,
}) {
    return (
        <div className="min-w-0">
            <div className="mb-6 flex items-center gap-2.5">
                <ColumnIcon
                    size={19}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#11baff]"
                />

                <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-white lg:text-[16px]">
                    {title}
                </h3>
            </div>

            <ul className="space-y-3.5">
                {links.map((link) => (
                    <li key={link.label}>
                        <NavLink
                            to={link.href}
                            className="group inline-flex max-w-full items-center gap-2 text-[12px] leading-5 text-[#9fb2ce] transition-all duration-300 hover:translate-x-1 hover:text-white lg:text-[13px]"
                        >
                            <span className="min-w-0">
                                {link.label}
                            </span>

                            <ArrowRight
                                size={13}
                                strokeWidth={1.8}
                                className="shrink-0 translate-x-[-4px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                            />
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

/* =========================================================
   CONTACT SECTION
========================================================= */

function FooterContactSection() {
    return (
        <div className="min-w-0">
            <div className="mb-6 flex items-center gap-2.5">
                <Send
                    size={19}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#11baff]"
                />

                <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-white lg:text-[16px]">
                    Get In Touch
                </h3>
            </div>

            {/* =================================================
                CONTACT DETAILS
            ================================================= */}

            <div className="space-y-4">
                {FooterContactDetails.map(
                    (contactDetail) => {
                        const ContactIcon =
                            contactDetail.icon;

                        return (
                            <div
                                key={contactDetail.id}
                                className="flex min-w-0 items-start gap-3"
                            >
                                <ContactIcon
                                    size={18}
                                    strokeWidth={1.7}
                                    className="mt-0.5 shrink-0 text-[#0dbbff]"
                                />

                                <div className="flex min-w-0 flex-col gap-0.5 text-[12px] leading-5 text-[#aebfd8] lg:text-[13px]">
                                    {contactDetail.content}
                                </div>
                            </div>
                        );
                    },
                )}
            </div>

            {/* =================================================
                NEWSLETTER
            ================================================= */}

            <div className="mt-7 w-full rounded-[17px] border border-[#17385d] bg-[#07182c]/90 p-4 shadow-[0_0_32px_rgba(0,126,255,0.07)]">
                <div className="flex items-start gap-3">
                    <Mail
                        size={19}
                        strokeWidth={1.8}
                        className="mt-0.5 shrink-0 text-[#10baff]"
                    />

                    <div className="min-w-0">
                        <h4 className="text-[14px] font-semibold text-white">
                            Stay Updated
                        </h4>

                        <p className="mt-1.5 text-[11px] leading-5 text-[#8fa4c2]">
                            Get the latest updates, tips and
                            innovations from InnoInventive.
                        </p>
                    </div>
                </div>

                <form
                    onSubmit={(event) =>
                        event.preventDefault()
                    }
                    className="mt-4 flex h-11 w-full items-center rounded-full border border-[#0caeff]/70 bg-[#061426] p-1"
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        aria-label="Email address"
                        className="min-w-0 flex-1 bg-transparent px-4 text-[12px] text-white outline-none placeholder:text-[#687c9d]"
                    />

                    <button
                        type="submit"
                        aria-label="Subscribe to newsletter"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#08c8ff] to-[#6658ff] text-white shadow-[0_0_18px_rgba(38,156,255,0.3)] transition-transform duration-300 hover:scale-105"
                    >
                        <ArrowRight
                            size={15}
                            strokeWidth={2}
                        />
                    </button>
                </form>
            </div>
        </div>
    );
}

/* =========================================================
   SOCIAL LINKS
========================================================= */

function FooterSocialLinks() {
    return (
        <div className="flex items-center gap-2.5">
            {FooterSocialLinkData.map(
                (socialLink) => (
                    <a
                        key={socialLink.label}
                        href={socialLink.href}
                        aria-label={socialLink.label}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#17385e] bg-[#07182c] text-[12px] font-semibold text-[#9dc5ec] transition-all duration-300 hover:-translate-y-1 hover:border-[#0dbbff] hover:text-white hover:shadow-[0_0_18px_rgba(0,174,255,0.18)]"
                    >
                        {socialLink.icon}
                    </a>
                ),
            )}
        </div>
    );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
    const HandleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative w-full max-w-full overflow-x-clip bg-[#020b17] text-white">
            {/* =================================================
                TOP DIVIDER
            ================================================= */}

            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#078fff] to-transparent opacity-80" />

            {/* =================================================
                ROW 1 — BRAND
            ================================================= */}

            <div className="relative w-full">
                <div
                    className={[
                        FooterContainerClasses,
                        "py-12 sm:py-14 lg:py-16",
                    ].join(" ")}
                >
                    <FooterBrandSection />
                </div>
            </div>

            {/* =================================================
                ROW 2 — FOUR COLUMNS
            ================================================= */}

            <div className="relative w-full border-t border-[#142b46]">
                <div
                    className={[
                        FooterContainerClasses,
                        "py-10 sm:py-12 lg:py-14",
                    ].join(" ")}
                >
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 xl:gap-x-12">
                        {/* =================================================
                            COLUMN 1 — QUICK LINKS
                        ================================================= */}

                        <FooterNavigationColumn
                            title="Quick Links"
                            links={FooterQuickLinks}
                            icon={Code2}
                        />

                        {/* =================================================
                            COLUMN 2 — SERVICES
                        ================================================= */}

                        <FooterNavigationColumn
                            title="Our Services"
                            links={FooterServiceLinks}
                            icon={Sparkles}
                        />

                        {/* =================================================
                            COLUMN 3 — COMPANY
                        ================================================= */}

                        <FooterNavigationColumn
                            title="Company"
                            links={FooterCompanyLinks}
                            icon={BrainCircuit}
                        />

                        {/* =================================================
                            COLUMN 4 — CONTACT
                        ================================================= */}

                        <FooterContactSection />
                    </div>
                </div>
            </div>

            {/* =================================================
                ROW 3 — FINAL FOOTER BAR
            ================================================= */}

            <div className="relative w-full border-t border-[#142b46] bg-[#020914]">
                <div
                    className={[
                        FooterContainerClasses,
                        "py-5",
                    ].join(" ")}
                >
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                        {/* Bottom Brand */}
                        <NavLink
                            to="/"
                            className="group flex shrink-0 items-center gap-2.5"
                            aria-label="InnoInventive Home"
                        >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center sm:h-10 sm:w-10">
                                <img
                                    src={FooterBrandLogo}
                                    alt="InnoInventive"
                                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <div>
                                <img
                                    src={FooterLogoText}
                                    alt="InnoInventive"
                                    className="h-fit w-30 object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                                />
                            </div>
                        </NavLink>

                        {/* Copyright */}
                        <div className="text-left md:text-center">
                            <p className="text-[10px] text-[#8da1bd] sm:text-[11px]">
                                © 2026 InnoInventive. All rights reserved.
                            </p>

                            <p className="mt-1 text-[9px] text-[#61758f]">
                                Built with passion for a smarter tomorrow.
                            </p>
                        </div>

                        {/* Social + Back To Top */}
                        <div className="flex flex-wrap items-center gap-4">
                            <FooterSocialLinks />

                            <div className="hidden h-8 w-px bg-[#1a304a] sm:block" />

                            <button
                                type="button"
                                onClick={HandleBackToTop}
                                className="group flex items-center gap-2 text-[11px] text-[#8ea2bd] transition-colors duration-300 hover:text-white"
                            >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0caeff]/70 text-[#0caeff] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#0caeff]/10">
                                    <ArrowUp size={15} />
                                </span>

                                <span className="hidden sm:inline">
                                    Back to top
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;