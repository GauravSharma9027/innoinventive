import {
    ArrowUpRight,
    CheckCircle2,
    Home,
    Mail,
    PhoneCall,
    Sparkles,
    Workflow,
} from "lucide-react";
import { NavLink } from "react-router-dom";

import HeroActionButton from "../UI/HeroActionButton";
import PremiumIconBadge from "../UI/PremiumIconBadge";

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
        value: "/",
        animation: "cta-contact-item-one",
    },
    {
        id: "email",
        label: "Email",
        detail: "hello@innoinventive.com",
        icon: Mail,
        type: "external",
        value: "mailto:hello@innoinventive.com",
        animation: "cta-contact-item-two",
    },
    {
        id: "call",
        label: "Call",
        detail: "+91 98765 43210",
        icon: PhoneCall,
        type: "external",
        value: "tel:+919876543210",
        animation: "cta-contact-item-three",
    },
    {
        id: "workflow",
        label: "Workflow",
        detail: "Automation active",
        icon: Workflow,
        type: "status",
        value: "",
        animation: "cta-contact-item-four",
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

            <span className="relative z-10 shrink-0 origin-center scale-[0.66] transition-transform duration-500 group-hover:scale-[0.72]">
                <PremiumIconBadge
                    icon={Icon}
                    size="default"
                />
            </span>

            <span className="relative z-10 min-w-0 text-left">
                <span className="block truncate text-[8px] font-semibold text-white/72 transition-colors duration-300 group-hover:text-white">
                    {item.label}
                </span>

                <span className="mt-1 block truncate text-[6px] font-medium uppercase tracking-[0.08em] text-blue-100/28 transition-colors duration-300 group-hover:text-cyan-100/48">
                    {item.detail}
                </span>
            </span>

            {item.type === "status" && (
                <span className="relative z-10 ml-auto flex shrink-0 items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-300 opacity-30" />

                        <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                    </span>
                </span>
            )}
        </>
    );

    const CommonClasses = [
        "cta-quick-contact group relative flex min-w-[185px] items-center gap-2 overflow-hidden rounded-[16px]",
        "border border-blue-300/10 bg-[#081C3A]/72 px-2.5 py-2",
        "shadow-[0_12px_26px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.06)]",
        "backdrop-blur-md transition-all duration-500",
        "hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-[#0A2145]/88",
        "hover:shadow-[0_18px_32px_rgba(0,0,0,0.34),0_0_24px_rgba(25,211,255,0.08),inset_0_1px_0_rgba(255,255,255,0.10)]",
        item.animation,
    ].join(" ");

    if (item.type === "route") {
        return (
            <NavLink
                to={item.value}
                className={CommonClasses}
            >
                {Content}
            </NavLink>
        );
    }

    if (item.type === "external") {
        return (
            <a
                href={item.value}
                className={CommonClasses}
            >
                {Content}
            </a>
        );
    }

    return (
        <div className={CommonClasses}>
            {Content}
        </div>
    );
};

/* =========================================================
   DOTTED CONNECTOR
========================================================= */

const ConnectorDots = ({ className }) => {
    return (
        <div
            className={[
                "pointer-events-none absolute hidden items-center lg:flex",
                className,
            ].join(" ")}
        >
            <span className="h-px w-2 bg-cyan-300/10" />

            <span className="h-[3px] w-[3px] shrink-0 rounded-full bg-cyan-300/25" />

            <span className="mx-1 h-px flex-1 border-t border-dotted border-cyan-300/15" />

            <span className="h-[3px] w-[3px] shrink-0 rounded-full bg-cyan-300/25" />

            <span className="h-px w-2 bg-cyan-300/10" />
        </div>
    );
};

/* =========================================================
   RIGHT 3D VISUAL
========================================================= */

const CtaVisual = () => {
    return (
        <div className="relative mx-auto h-[340px] w-full max-w-[520px]">
            {/* =====================================================
                MAIN ATMOSPHERE
            ===================================================== */}

            <div className="absolute left-1/2 top-1/2 h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.045] blur-[80px]" />

            <div className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.045] blur-[55px]" />

            {/* =====================================================
                ORBITS
            ===================================================== */}

            <div className="cta-visual-orbit-one absolute left-1/2 top-1/2 h-[265px] w-[405px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-cyan-300/[0.09] [transform:rotateX(68deg)]" />

            <div className="cta-visual-orbit-two absolute left-1/2 top-1/2 h-[205px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-violet-300/[0.07] [transform:rotateX(68deg)_rotateZ(12deg)]" />

            <div className="cta-visual-orbit-three absolute left-1/2 top-1/2 h-[155px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-blue-300/[0.06] [transform:rotateX(68deg)_rotateZ(-8deg)]" />

            {/* =====================================================
                DOTTED BRIDGES
            ===================================================== */}

            <ConnectorDots className="left-[28%] top-[30%] w-[16%] -rotate-[18deg]" />

            <ConnectorDots className="right-[28%] top-[30%] w-[16%] rotate-[18deg]" />

            <ConnectorDots className="bottom-[26%] left-[28%] w-[17%] rotate-[18deg]" />

            <ConnectorDots className="bottom-[26%] right-[28%] w-[17%] -rotate-[18deg]" />

            {/* =====================================================
                CENTER CORE
            ===================================================== */}

            <div className="absolute left-1/2 top-1/2 h-[166px] w-[166px] -translate-x-1/2 -translate-y-1/2 [perspective:1400px]">
                {/* Rear depth */}
                <div className="absolute inset-x-4 bottom-[-10px] top-3 rounded-[31px] border border-blue-500/10 bg-[#020A1D]/88" />

                {/* Main body */}
                <div className="cta-visual-core relative h-full w-full overflow-hidden rounded-[31px] border border-cyan-300/20 bg-[radial-gradient(circle_at_35%_24%,rgba(25,211,255,0.12),rgba(8,33,70,0.98)_46%,rgba(3,15,35,0.99)_82%)] shadow-[0_24px_48px_rgba(0,0,0,0.42),0_0_36px_rgba(22,119,255,0.11),inset_0_1px_0_rgba(255,255,255,0.13)]">
                    {/* Grid */}
                    <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.11)_1px,transparent_1px)] [background-size:24px_24px]" />

                    {/* Reflection */}
                    <span className="pointer-events-none absolute left-[14%] top-[5%] h-[30%] w-[50%] rotate-[22deg] rounded-full bg-white/[0.06] blur-[14px]" />

                    {/* Inner frame */}
                    <span className="pointer-events-none absolute inset-[8px] rounded-[24px] border border-white/[0.035]" />

                    {/* Core glow */}
                    <span className="absolute left-1/2 top-[41%] h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.09] blur-[28px]" />

                    {/* Main icon */}
                    <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2">
                        <span className="cta-core-pulse absolute -inset-4 rounded-[23px] border border-cyan-300/10" />

                        <div className="relative scale-[1.02]">
                            <PremiumIconBadge
                                icon={Sparkles}
                                size="large"
                            />
                        </div>
                    </div>

                    {/* Core text */}
                    <div className="absolute inset-x-0 bottom-[23px] text-center">
                        <span className="text-[6px] font-semibold uppercase tracking-[0.17em] text-cyan-100/35">
                            Intelligent systems
                        </span>

                        {/* CLICKABLE LET'S CONNECT */}
                        <NavLink
                            to="/contact"
                            className="group/connect relative mt-1 inline-block"
                            aria-label="Let's Connect"
                        >
                            <p className="text-[13px] font-semibold text-white transition-colors duration-300 group-hover/connect:text-cyan-100">
                                Let&apos;s Connect
                            </p>
                        </NavLink>

                        <div className="mt-1.5 flex items-center justify-center gap-1.5">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-300 opacity-30" />

                                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_7px_rgba(52,211,153,0.72)]" />
                            </span>

                            <span className="text-[6px] font-semibold uppercase tracking-[0.12em] text-emerald-100/38">
                                System online
                            </span>
                        </div>
                    </div>

                    {/* Vertical beam */}
                    <span className="cta-core-beam pointer-events-none absolute left-1/2 top-0 h-[76%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-200/25 to-transparent" />
                </div>
            </div>

            {/* =====================================================
                QUICK CONTACT LINKS
            ===================================================== */}

            <div className="absolute left-1/2 top-[6%] hidden -translate-x-1/2 lg:block">
                <QuickContactItem
                    item={QuickContactData[0]}
                />
            </div>

            <div className="absolute right-[1%] top-[34%] hidden lg:block">
                <QuickContactItem
                    item={QuickContactData[1]}
                />
            </div>

            <div className="absolute left-[1%] bottom-[17%] hidden lg:block">
                <QuickContactItem
                    item={QuickContactData[2]}
                />
            </div>

            <div className="absolute right-[2%] bottom-[9%] hidden lg:block">
                <QuickContactItem
                    item={QuickContactData[3]}
                />
            </div>

            {/* =====================================================
                SIGNAL DOTS
            ===================================================== */}

            <span className="cta-visual-dot-one absolute left-[21%] top-[27%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(25,211,255,0.9)]" />

            <span className="cta-visual-dot-two absolute right-[20%] top-[36%] h-1 w-1 rounded-full bg-violet-300 shadow-[0_0_9px_rgba(124,60,255,0.9)]" />

            <span className="cta-visual-dot-three absolute bottom-[24%] left-[26%] h-1 w-1 rounded-full bg-blue-300 shadow-[0_0_8px_rgba(22,119,255,0.9)]" />
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
            {/* =====================================================
                BACKGROUND
            ===================================================== */}

            <div className="pointer-events-none absolute inset-0">
                {/* Main glow */}
                <div className="absolute left-1/2 top-1/2 h-[360px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.03] blur-[120px]" />

                {/* Cyan */}
                <div className="absolute left-[4%] top-[30%] h-[150px] w-[190px] rounded-full bg-cyan-400/[0.014] blur-[75px]" />

                {/* Violet */}
                <div className="absolute bottom-[23%] right-[4%] h-[160px] w-[210px] rounded-full bg-violet-500/[0.014] blur-[80px]" />

                {/* Subtle grid */}
                <div className="absolute inset-0 opacity-[0.009] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

                {/* Edge lines */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" />
            </div>

            {/* =====================================================
                MAIN LEFT / RIGHT LAYOUT
            ===================================================== */}

            <div className="relative z-20 mx-auto max-w-[1400px] px-6 lg:px-8">
                <div className="grid w-full items-center gap-4 lg:grid-cols-[0.92fr_1.08fr] xl:gap-7">
                    {/* =================================================
                        LEFT CONTENT
                    ================================================= */}

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

                        {/* Trust line */}
                        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                            {CTAContent.trustItems.map(
                                (Item) => (
                                    <div
                                        key={Item}
                                        className="flex items-center gap-2 text-[10px] text-white/45"
                                    >
                                        <CheckCircle2
                                            size={10}
                                            className="text-emerald-300/65"
                                        />

                                        <span>
                                            {Item}
                                        </span>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>

                    {/* =================================================
                        RIGHT VISUAL — SAME DESIGN
                    ================================================= */}

                    <div className="relative flex items-center justify-center">
                        <CtaVisual />
                    </div>
                </div>
            </div>

            {/* =====================================================
                ANIMATIONS
            ===================================================== */}

            <style>{`
                .cta-visual-orbit-one {
                    animation:
                        ctaVisualOrbitOne
                        18s
                        linear
                        infinite;
                }

                .cta-visual-orbit-two {
                    animation:
                        ctaVisualOrbitTwo
                        23s
                        linear
                        infinite;
                }

                .cta-visual-orbit-three {
                    animation:
                        ctaVisualOrbitThree
                        14s
                        linear
                        infinite;
                }

                .cta-visual-core {
                    transform-style: preserve-3d;
                    animation:
                        ctaVisualCoreFloat
                        6s
                        ease-in-out
                        infinite;
                }

                .cta-core-pulse {
                    animation:
                        ctaCorePulse
                        3.2s
                        ease-in-out
                        infinite;
                }

                .cta-core-beam {
                    animation:
                        ctaCoreBeam
                        3.8s
                        ease-in-out
                        infinite;
                }

                .cta-visual-dot-one {
                    animation:
                        ctaVisualDotOne
                        5s
                        ease-in-out
                        infinite;
                }

                .cta-visual-dot-two {
                    animation:
                        ctaVisualDotTwo
                        6s
                        ease-in-out
                        infinite;
                }

                .cta-visual-dot-three {
                    animation:
                        ctaVisualDotThree
                        5.5s
                        ease-in-out
                        infinite;
                }

                .cta-contact-item-one {
                    animation:
                        ctaContactOne
                        5.8s
                        ease-in-out
                        infinite;
                }

                .cta-contact-item-two {
                    animation:
                        ctaContactTwo
                        6.2s
                        ease-in-out
                        infinite;
                }

                .cta-contact-item-three {
                    animation:
                        ctaContactThree
                        6.5s
                        ease-in-out
                        infinite;
                }

                .cta-contact-item-four {
                    animation:
                        ctaContactFour
                        6s
                        ease-in-out
                        infinite;
                }

                @keyframes ctaVisualOrbitOne {
                    from {
                        transform:
                            translate(-50%, -50%)
                            rotateX(68deg)
                            rotateZ(0deg);
                    }

                    to {
                        transform:
                            translate(-50%, -50%)
                            rotateX(68deg)
                            rotateZ(360deg);
                    }
                }

                @keyframes ctaVisualOrbitTwo {
                    from {
                        transform:
                            translate(-50%, -50%)
                            rotateX(68deg)
                            rotateZ(12deg);
                    }

                    to {
                        transform:
                            translate(-50%, -50%)
                            rotateX(68deg)
                            rotateZ(372deg);
                    }
                }

                @keyframes ctaVisualOrbitThree {
                    from {
                        transform:
                            translate(-50%, -50%)
                            rotateX(68deg)
                            rotateZ(-8deg);
                    }

                    to {
                        transform:
                            translate(-50%, -50%)
                            rotateX(68deg)
                            rotateZ(352deg);
                    }
                }

                @keyframes ctaVisualCoreFloat {
                    0%,
                    100% {
                        transform:
                            translateY(0)
                            translateZ(15px)
                            rotateX(1deg)
                            rotateY(-1deg);
                    }

                    50% {
                        transform:
                            translateY(-5px)
                            translateZ(25px)
                            rotateX(3deg)
                            rotateY(1deg);
                    }
                }

                @keyframes ctaCorePulse {
                    0%,
                    100% {
                        transform: scale(0.94);
                        opacity: 0.32;
                    }

                    50% {
                        transform: scale(1.07);
                        opacity: 0.82;
                    }
                }

                @keyframes ctaCoreBeam {
                    0%,
                    100% {
                        opacity: 0.08;
                        transform: scaleY(0.72);
                    }

                    50% {
                        opacity: 0.42;
                        transform: scaleY(1);
                    }
                }

                @keyframes ctaVisualDotOne {
                    0%,
                    100% {
                        transform: translate3d(0, 0, 0);
                        opacity: 0.32;
                    }

                    50% {
                        transform: translate3d(34px, 12px, 14px);
                        opacity: 1;
                    }
                }

                @keyframes ctaVisualDotTwo {
                    0%,
                    100% {
                        transform: translate3d(0, 0, 0);
                        opacity: 0.3;
                    }

                    50% {
                        transform: translate3d(-25px, -10px, 17px);
                        opacity: 1;
                    }
                }

                @keyframes ctaVisualDotThree {
                    0%,
                    100% {
                        transform: translate3d(0, 0, 0);
                        opacity: 0.3;
                    }

                    50% {
                        transform: translate3d(18px, -14px, 11px);
                        opacity: 0.9;
                    }
                }

                @keyframes ctaContactOne {
                    0%,
                    100% {
                        transform: translate3d(0, 0, 0);
                    }

                    50% {
                        transform: translate3d(0, -6px, 6px);
                    }
                }

                @keyframes ctaContactTwo {
                    0%,
                    100% {
                        transform: translate3d(0, 0, 0);
                    }

                    50% {
                        transform: translate3d(0, 6px, 6px);
                    }
                }

                @keyframes ctaContactThree {
                    0%,
                    100% {
                        transform: translate3d(0, 0, 0);
                    }

                    50% {
                        transform: translate3d(5px, -5px, 7px);
                    }
                }

                @keyframes ctaContactFour {
                    0%,
                    100% {
                        transform: translate3d(0, 0, 0);
                    }

                    50% {
                        transform: translate3d(-5px, 5px, 7px);
                    }
                }

                @media (max-width: 1023px) {
                    .cta-visual-core {
                        animation: none;
                    }

                    .cta-contact-item-one,
                    .cta-contact-item-two,
                    .cta-contact-item-three,
                    .cta-contact-item-four {
                        animation: none;
                    }
                }

                @media (max-width: 767px) {
                    .cta-quick-contact {
                        display: none;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .cta-visual-orbit-one,
                    .cta-visual-orbit-two,
                    .cta-visual-orbit-three,
                    .cta-visual-core,
                    .cta-core-pulse,
                    .cta-core-beam,
                    .cta-visual-dot-one,
                    .cta-visual-dot-two,
                    .cta-visual-dot-three,
                    .cta-contact-item-one,
                    .cta-contact-item-two,
                    .cta-contact-item-three,
                    .cta-contact-item-four {
                        animation: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default CTASection;