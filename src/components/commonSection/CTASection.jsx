import {
    ArrowUpRight,
    CheckCircle2,
    Home,
    Mail,
    PhoneCall,
} from "lucide-react";
import { NavLink } from "react-router-dom";

import HeroActionButton from "../UI/HeroActionButton";
import PremiumIconBadge from "../UI/PremiumIconBadge";
import Logo from "../../assets/Logo.png";

/* =========================================================
   CTA CONTENT
========================================================= */

const CTAContent = {
    badge: "Let’s Build Something",
    headingPrimary: "Ready To Turn Your",
    headingAccent: "Idea Into Reality?",
    description:
        "Tell us what you are building and let’s create a smarter digital system around it. From websites to automation, we turn ideas into practical solutions.",
    primaryButton: "Start A Conversation",
    secondaryButton: "Schedule A Call",
    trustItems: [
        "Fast response",
        "Smart workflow",
        "Built around your goals",
    ],
};

/* =========================================================
   QUICK CONTACT DATA
========================================================= */

const QuickContactData = [
    {
        id: "home",
        label: "Home",
        detail: "Back to homepage",
        icon: Home,
        type: "route",
    },
    {
        id: "email",
        label: "Email",
        detail: "hello@innoinventive.com",
        icon: Mail,
        type: "external",
        value: "mailto:hello@innoinventive.com",
    },
    {
        id: "phone",
        label: "Phone",
        detail: "+91 98765 43210",
        icon: PhoneCall,
        type: "external",
        value: "tel:+919876543210",
    },
];

/* =========================================================
   RIGHT TRUST DATA
========================================================= */

const RightTrustData = [
    {
        id: "fast-response",
        label: "Fast response",
    },
    {
        id: "smart-workflow",
        label: "Smart workflow",
    },
    {
        id: "business-goals",
        label: "Built around your goals",
    },
];

/* =========================================================
   CONTACT ITEM
========================================================= */

const QuickContactItem = ({ item }) => {
    const Icon = item.icon;

    const Content = (
        <>
            <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-70" />

            <span className="relative z-10 shrink-0 origin-center scale-[0.68] transition-transform duration-500 group-hover:scale-[0.74]">
                <PremiumIconBadge
                    icon={Icon}
                    size="default"
                />
            </span>

            <span className="relative z-10 min-w-0 text-left">
                <span className="block truncate text-[9px] font-semibold text-white/80 transition-colors duration-300 group-hover:text-white">
                    {item.label}
                </span>

                <span className="mt-1 block truncate text-[6px] font-medium uppercase tracking-[0.08em] text-blue-100/35 transition-colors duration-300 group-hover:text-cyan-100/55">
                    {item.detail}
                </span>
            </span>
        </>
    );

    const CommonClasses = [
        "cta-quick-contact group relative flex min-w-[150px] items-center gap-2 overflow-hidden rounded-[18px]",
        "border border-cyan-200/15 bg-[#061633]/45 px-2.5 py-2",
        "shadow-[0_14px_30px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.12)]",
        "backdrop-blur-xl transition-all duration-500",
        "hover:-translate-y-1 hover:border-cyan-100/30 hover:bg-[#061633]/60",
        "hover:shadow-[0_20px_38px_rgba(0,0,0,0.30),0_0_24px_rgba(25,211,255,0.10)]",
    ].join(" ");

    if (item.type === "route") {
        return (
            <NavLink
                to="/"
                className={CommonClasses}
            >
                {Content}
            </NavLink>
        );
    }

    return (
        <a
            href={item.value}
            className={CommonClasses}
        >
            {Content}
        </a>
    );
};

/* =========================================================
   TRUST BADGE
========================================================= */

const TrustBadge = ({ label }) => {
    return (
        <div className="group flex items-center gap-2 rounded-full border border-white/10 bg-[#061633]/35 px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-200/25 hover:bg-[#061633]/50">
            <CheckCircle2
                size={11}
                strokeWidth={1.7}
                className="shrink-0 text-cyan-200/75"
            />

            <span className="whitespace-nowrap text-[8px] font-medium tracking-[0.04em] text-white/65 transition-colors duration-300 group-hover:text-white/85">
                {label}
            </span>
        </div>
    );
};

/* =========================================================
   RIGHT SIDE VISUAL
========================================================= */

const CtaVisual = () => {
    return (
        <div className="relative h-[300px] w-full overflow-hidden border-l border-l-white/[0.10] sm:h-[350px] lg:h-[365px]">
            {/* Right-side light */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_24%,rgba(255,255,255,0.24),transparent_26%),radial-gradient(circle_at_54%_76%,rgba(255,255,255,0.10),transparent_28%)]" />

            {/* Soft grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.10]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
                    backgroundSize: "58px 58px",
                }}
            />

            {/* Glass circles inspired by reference */}
            <div className="pointer-events-none absolute right-[7%] top-[9%] h-[190px] w-[190px] rounded-full border border-white/[0.14] bg-white/[0.035] blur-[0.2px]" />

            <div className="pointer-events-none absolute right-[19%] top-[18%] h-[125px] w-[125px] rounded-full border border-white/[0.11] bg-cyan-100/[0.045] backdrop-blur-sm" />

            <div className="pointer-events-none absolute right-[9%] top-[37%] h-[82px] w-[82px] rounded-full border border-white/[0.12] bg-blue-950/[0.18] backdrop-blur-sm" />

            {/* Decorative orbital outlines */}
            <div className="pointer-events-none absolute left-[8%] top-[16%] h-[175px] w-[290px] rounded-[50%] border border-white/[0.10] [transform:rotateX(68deg)_rotateZ(-12deg)]" />

            <div className="pointer-events-none absolute bottom-[8%] left-[18%] h-[120px] w-[210px] rounded-[50%] border border-cyan-100/[0.10] [transform:rotateX(68deg)_rotateZ(13deg)]" />

            {/* Premium contact badges */}
            <div className="absolute inset-x-0 top-[8%] z-20 flex flex-wrap justify-center gap-2 px-4 sm:gap-3">
                {QuickContactData.map((Item) => (
                    <QuickContactItem
                        key={Item.id}
                        item={Item}
                    />
                ))}
            </div>

            {/* Center Logo */}
            <div className="absolute left-[51%] top-[58%] z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="cta-logo-float relative flex h-[150px] w-[150px] items-center justify-center rounded-full border border-white/15 bg-[#061633]/25 shadow-[0_20px_55px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md">
                    <div className="absolute inset-3 rounded-full border border-white/10" />

                    <div className="absolute inset-7 rounded-[22px] border border-cyan-100/20 bg-[#061633]/35 shadow-[0_0_35px_rgba(25,211,255,0.14)] backdrop-blur-md" />

                    <img
                        src={Logo}
                        alt="InnoInventive"
                        className="relative z-10 h-[72px] w-auto max-w-[82px] object-contain drop-shadow-[0_0_18px_rgba(25,211,255,0.16)]"
                    />
                </div>
            </div>

            {/* Trust badges below premium contact badges */}
            <div className="absolute bottom-[8%] left-1/2 z-30 flex w-full -translate-x-1/2 flex-wrap justify-center gap-2 px-4">
                {RightTrustData.map((Item) => (
                    <TrustBadge
                        key={Item.id}
                        label={Item.label}
                    />
                ))}
            </div>

            {/* Small visual nodes */}
            <span className="absolute left-[18%] top-[43%] h-2 w-2 rounded-full bg-cyan-100/70 shadow-[0_0_14px_rgba(255,255,255,0.55)]" />

            <span className="absolute right-[14%] top-[67%] h-1.5 w-1.5 rounded-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.75)]" />

            <span className="absolute bottom-[19%] left-[28%] h-1.5 w-1.5 rounded-full bg-violet-100/80 shadow-[0_0_12px_rgba(124,60,255,0.75)]" />
        </div>
    );
};

/* =========================================================
   CTA SECTION
========================================================= */

const CTASection = () => {
    return (
        <section
            id="cta"
            className="relative w-full overflow-hidden bg-[#061633] py-5 text-white sm:py-6 lg:py-7"
        >
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 ">
                <div className="absolute left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[130px]" />

                <div className="absolute left-[4%] top-[28%] h-[150px] w-[180px] rounded-full bg-cyan-400/[0.018] blur-[75px]" />

                <div className="absolute bottom-[18%] right-[5%] h-[180px] w-[210px] rounded-full bg-violet-500/[0.02] blur-[80px]" />
            </div>

            <div className="relative z-20 mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
                {/* Main panel */}
                <div className="overflow-hidden rounded-[30px] border border-white/[0.08] bg-[linear-gradient(115deg,#0A2A68_0%,#0E4FD2_45%,#1677FF_66%,#19D3FF_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_24px_60px_rgba(0,0,0,0.25)]">
                    <div className="grid w-full items-stretch lg:grid-cols-[0.92fr_1.08fr]">
                        {/* ================================================= 
                            LEFT CONTENT — LOCKED 
                        ================================================= */}

                        <div className="flex items-center px-6 py-8 sm:px-8 sm:py-10 lg:px-9 lg:py-9 xl:px-10">
                            <div className="max-w-[610px]">
                                {/* Badge */}
                                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-white/[0.025] px-3 py-1.5">
                                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(25,211,255,0.7)]" />

                                    <span className="text-[11px] font-semibold tracking-[0.16em] text-cyan-200/80">
                                        {CTAContent.badge}
                                    </span>
                                </div>

                                {/* Heading */}
                                <h2 className="max-w-[600px] text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[40px] lg:text-[46px]">
                                    {CTAContent.headingPrimary}

                                    <br />

                                    <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                                        {CTAContent.headingAccent}
                                    </span>
                                </h2>

                                {/* Description */}
                                <p className="mt-4 max-w-[560px] text-[13px] leading-6 text-white/60 sm:text-[14px]">
                                    {CTAContent.description}
                                </p>

                                {/* Buttons */}
                                <div className="mt-6 flex flex-wrap items-center gap-3">
                                    <HeroActionButton
                                        label={CTAContent.primaryButton}
                                        icon={ArrowUpRight}
                                        to="/contact"
                                        variant="primary"
                                    />

                                    <HeroActionButton
                                        label={CTAContent.secondaryButton}
                                        icon={PhoneCall}
                                        to="/contact"
                                        variant="secondary"
                                    />
                                </div>

                                {/* Only a subtle left-side line now */}
                                <div className="mt-5 h-px w-[220px] bg-gradient-to-r from-cyan-300/20 via-blue-300/10 to-transparent" />
                            </div>
                        </div>

                        {/* ================================================= 
                            RIGHT VISUAL 
                        ================================================= */}

                        <div className="relative p-2 sm:p-3 lg:p-2">
                            <CtaVisual />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .cta-quick-contact:nth-child(1) {
                    animation: ctaContactOne 5.8s ease-in-out infinite;
                }

                .cta-quick-contact:nth-child(2) {
                    animation: ctaContactTwo 6.2s ease-in-out infinite;
                }

                .cta-quick-contact:nth-child(3) {
                    animation: ctaContactThree 6.5s ease-in-out infinite;
                }

                .cta-logo-float {
                    animation: ctaLogoFloat 5.5s ease-in-out infinite;
                }

                @keyframes ctaContactOne {
                    0%,
                    100% {
                        transform: translate3d(0, 0, 0);
                    }

                    50% {
                        transform: translate3d(0, -5px, 4px);
                    }
                }

                @keyframes ctaContactTwo {
                    0%,
                    100% {
                        transform: translate3d(0, 0, 0);
                    }

                    50% {
                        transform: translate3d(0, 5px, 4px);
                    }
                }

                @keyframes ctaContactThree {
                    0%,
                    100% {
                        transform: translate3d(0, 0, 0);
                    }

                    50% {
                        transform: translate3d(4px, -4px, 5px);
                    }
                }

                @keyframes ctaLogoFloat {
                    0%,
                    100% {
                        transform: translate3d(0, 0, 0);
                    }

                    50% {
                        transform: translate3d(0, -8px, 4px);
                    }
                }

                @media (max-width: 1023px) {
                    .cta-quick-contact {
                        animation: none;
                    }

                    .cta-logo-float {
                        animation: none;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .cta-quick-contact,
                    .cta-logo-float {
                        animation: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default CTASection;