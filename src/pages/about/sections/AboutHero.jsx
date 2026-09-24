import {
    ArrowRight,
    BrainCircuit,
    Globe2,
    Network,
    Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

import HeroActionButton from "../../../components/UI/HeroActionButton";
import PremiumIconBadge from "../../../components/UI/PremiumIconBadge";

/* =========================================================
   ABOUT HERO CONTENT
========================================================= */

const AboutHeroContent = {
    badge: "About Us",
    headingPrimary: "We Are",
    headingAccent: "InnoInventive",
    subheading:
        "Building intelligent digital solutions for a smarter tomorrow.",
    description:
        "We are a technology-driven team, focused on creating intelligent systems that automate business processes, streamline operations and help brands grow in the digital era.",
    primaryButton: "Our Journey",
    secondaryButton: "Explore Our Approach",
};

/* =========================================================
   VIDEO SLIDES
========================================================= */

const AboutVideoSlides = [
    {
        id: "digital-earth",
        videoId: "xXjIGsv4iRI",
        label: "Global Intelligence",
        eyebrow: "Connected systems",
        title: "Digital Intelligence",
        description:
            "Connected data, intelligent workflows and technology working as one system.",
        status: "SYSTEM ONLINE",
        systemCode: "01",
        accentIcon: Globe2,
    },
    {
        id: "digital-hud",
        videoId: "gL-D-RUb1C4",
        label: "System Architecture",
        eyebrow: "Intelligent infrastructure",
        title: "Connected Automation",
        description:
            "A smarter digital layer designed to connect data, platforms and business operations.",
        status: "NETWORK ACTIVE",
        systemCode: "02",
        accentIcon: Network,
    },
];

/* =========================================================
   VIDEO LAYER
========================================================= */

const AboutVideoLayer = ({
    slide,
    index,
    activeIndex,
}) => {
    const IsActive = activeIndex === index;

    return (
        <div
            className={[
                "absolute inset-0 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                IsActive
                    ? "scale-[1] opacity-100"
                    : "pointer-events-none scale-[1.035] opacity-0",
            ].join(" ")}
            aria-hidden={!IsActive}
        >
            <iframe
                className="pointer-events-none absolute left-1/2 top-1/2 h-[112%] w-[112%] -translate-x-1/2 -translate-y-1/2 scale-[1.015]"
                src={`https://www.youtube-nocookie.com/embed/${slide.videoId}?autoplay=1&mute=1&loop=1&playlist=${slide.videoId}&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1`}
                title={slide.title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                tabIndex={-1}
            />
        </div>
    );
};

/* =========================================================
   PREMIUM NUMBER CARD
========================================================= */

const AboutVideoNumberCard = ({
    number,
    active,
    onClick,
    label,
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={`Show ${label}`}
            aria-pressed={active}
            className={[
                "about-video-number-card group relative [perspective:800px] transition-all duration-500",
                active
                    ? "h-[32px] w-[32px] scale-[1.12]"
                    : "h-[28px] w-[30px] scale-[0.92]",
            ].join(" ")}
        >
            {/* Rear depth */}
            <span
                className={[
                    "absolute inset-x-[3px] bottom-[-3px] h-[calc(100%-2px)] rounded-[10px] bg-[#020B20] shadow-[0_7px_15px_rgba(0,0,0,0.42)] transition-all duration-500",
                    active
                        ? "translate-y-[2px]"
                        : "translate-y-0",
                ].join(" ")}
            />

            {/* Glow */}
            <span
                className={[
                    "absolute -inset-2 rounded-[14px] blur-xl transition-all duration-500",
                    active
                        ? "bg-cyan-400/[0.12]"
                        : "bg-cyan-400/[0.035] group-hover:bg-cyan-400/[0.08]",
                ].join(" ")}
            />

            {/* Main surface */}
            <span
                className={[
                    "relative flex h-full w-full items-center justify-center overflow-hidden rounded-[11px] border bg-gradient-to-br from-[#12366B] via-[#0A2148] to-[#061633] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-2px_0_rgba(0,0,0,0.24),0_7px_18px_rgba(0,0,0,0.22)] transition-all duration-500",
                    active
                        ? "border-cyan-300/45 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_28px_rgba(25,211,255,0.18)]"
                        : "border-cyan-300/12 text-white/40 group-hover:-translate-y-1 group-hover:rotate-[3deg] group-hover:border-cyan-300/28 group-hover:text-white/75",
                ].join(" ")}
            >
                {/* Top reflection */}
                <span className="pointer-events-none absolute inset-x-2 top-[1px] h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />

                {/* Inner glow */}
                <span
                    className={[
                        "pointer-events-none absolute inset-1.5 rounded-[8px] shadow-[inset_0_0_15px_rgba(25,211,255,0.05)] transition-opacity duration-500",
                        active
                            ? "bg-cyan-300/[0.055] opacity-100"
                            : "bg-cyan-300/[0.015] opacity-60",
                    ].join(" ")}
                />

                {/* Number */}
                <span
                    className={[
                        "relative z-10 font-mono font-semibold tracking-[0.12em] transition-all duration-500",
                        active
                            ? "text-[11px] text-cyan-100 drop-shadow-[0_0_7px_rgba(25,211,255,0.35)]"
                            : "text-[8px]",
                    ].join(" ")}
                >
                    {number}
                </span>

                {/* Bottom active indicator */}
                <span
                    className={[
                        "absolute bottom-[3px] left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 blur-[0.5px] transition-all duration-500",
                        active
                            ? "h-[2px] w-5 opacity-100"
                            : "h-[2px] w-1.5 opacity-25",
                    ].join(" ")}
                />
            </span>
        </button>
    );
};

/* =========================================================
   PREMIUM MEDIA CONSOLE
========================================================= */

const AboutMediaConsole = () => {
    const [ActiveVideoIndex, setActiveVideoIndex] =
        useState(0);

    useEffect(() => {
        if (AboutVideoSlides.length <= 1) {
            return undefined;
        }

        const RotationTimer = window.setInterval(
            () => {
                setActiveVideoIndex(
                    (CurrentIndex) =>
                        (CurrentIndex + 1) %
                        AboutVideoSlides.length,
                );
            },
            12000,
        );

        return () => {
            window.clearInterval(
                RotationTimer,
            );
        };
    }, []);

    const ActiveSlide =
        AboutVideoSlides[ActiveVideoIndex];

    return (
        <div className="about-media-system relative mx-auto w-full max-w-[570px]">
            {/* =================================================
                ATMOSPHERE
            ================================================= */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.035] blur-[100px]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.045] blur-[70px]" />

            {/* =================================================
                HOLOGRAPHIC RINGS
            ================================================= */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 [perspective:1200px]">
                <div className="about-media-ring-one absolute inset-0 rounded-[50%] border border-cyan-300/[0.065] [transform:rotateX(69deg)_rotateZ(12deg)]" />

                <div className="about-media-ring-two absolute inset-[9%] rounded-[50%] border border-blue-400/[0.055] [transform:rotateX(69deg)_rotateZ(-18deg)]" />
            </div>

            {/* =================================================
                PREMIUM VIDEO SHELL
            ================================================= */}

            <div className="relative z-20 w-full">
                <div className="about-media-shell relative overflow-visible rounded-[26px] border border-cyan-300/[0.17] bg-gradient-to-br from-[#12366B]/55 via-[#0A2148]/88 to-[#061633]/96 p-[1px] [perspective:1500px]">
                    {/* Rear depth */}
                    <span className="pointer-events-none absolute inset-x-[2px] bottom-[-6px] h-[96%] rounded-[27px] bg-[#020B20] shadow-[0_12px_24px_rgba(0,0,0,0.34)]" />

                    {/* Exterior glow */}
                    <span className="pointer-events-none absolute -inset-4 rounded-[32px] bg-cyan-400/[0.045] blur-2xl" />

                    {/* Main surface */}
                    <div className="relative overflow-hidden rounded-[25px] border border-cyan-300/[0.13] bg-[#03142D] shadow-[inset_0_1px_0_rgba(255,255,255,0.11),inset_0_-2px_0_rgba(0,0,0,0.28)]">
                        {/* =================================================
                            VIDEO
                        ================================================= */}

                        <div className="relative aspect-[16/9] w-full overflow-hidden">
                            {AboutVideoSlides.map(
                                (slide, index) => (
                                    <AboutVideoLayer
                                        key={slide.id}
                                        slide={slide}
                                        index={index}
                                        activeIndex={
                                            ActiveVideoIndex
                                        }
                                    />
                                ),
                            )}

                            {/* Video overlays */}
                            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#061633]/40 via-transparent to-[#061633]/08" />

                            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#061633]/65 via-transparent to-transparent" />

                            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[#061633]/08 via-transparent to-[#061633]/12" />

                            {/* Grid */}
                            <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />

                            {/* Top reflection */}
                            <span className="pointer-events-none absolute inset-x-[8%] top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/42 to-transparent" />

                            {/* Corner details */}
                            <span className="pointer-events-none absolute left-4 top-4 z-20 h-4 w-4 border-l border-t border-cyan-300/25" />

                            <span className="pointer-events-none absolute right-4 top-4 z-20 h-4 w-4 border-r border-t border-cyan-300/25" />

                            <span className="pointer-events-none absolute bottom-4 left-4 z-20 h-4 w-4 border-b border-l border-cyan-300/20" />

                            <span className="pointer-events-none absolute bottom-4 right-4 z-20 h-4 w-4 border-b border-r border-cyan-300/20" />

                            {/* =================================================
                                CURRENT SYSTEM
                            ================================================= */}

                            <div className="absolute left-4 top-4 z-30">
                                <div className="flex items-center gap-2.5 rounded-[14px] border border-cyan-300/[0.08] bg-[#061633]/40 px-2 py-1.5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_25px_rgba(0,0,0,0.20)]">
                                    <PremiumIconBadge
                                        icon={
                                            ActiveSlide.accentIcon
                                        }
                                        size="default"
                                    />

                                    <div className="pr-1">
                                        <span className="block text-[6px] font-semibold uppercase tracking-[0.13em] text-cyan-100/40">
                                            Current system
                                        </span>

                                        <span className="mt-0.5 block text-[8px] font-semibold text-white/72">
                                            {
                                                ActiveSlide.label
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* =================================================
                                CENTER CORE
                            ================================================= */}

                            <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                                <span className="absolute -inset-12 rounded-full bg-cyan-300/[0.035] blur-3xl" />

                                <div className="about-media-core relative">
                                    <PremiumIconBadge
                                        icon={Sparkles}
                                        size="large"
                                    />
                                </div>
                            </div>

                            {/* =================================================
                                LIVE NODE
                            ================================================= */}

                            <div className="absolute right-4 top-4 z-30">
                                <div className="flex items-center gap-2 rounded-full border border-emerald-300/10 bg-[#061633]/48 px-2.5 py-1.5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                                    <span className="relative flex h-1.5 w-1.5">
                                        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-300/40" />

                                        <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_7px_rgba(52,211,153,0.65)]" />
                                    </span>

                                    <span className="text-[6px] font-semibold uppercase tracking-[0.13em] text-emerald-100/60">
                                        Live Node
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* =================================================
                            PREMIUM CONTROLLER
                        ================================================= */}

                        <div className="relative z-40 border-t border-white/[0.055] bg-[#04142C]/92 px-3 py-2.5 backdrop-blur-xl sm:px-4 sm:py-3">
                            <div className="flex items-center gap-3">
                                {/* System label */}
                                <div className="flex shrink-0 items-center gap-2">
                                    <span className="text-[6px] font-semibold uppercase tracking-[0.16em] text-white/25">
                                        SYSTEM
                                    </span>

                                    <span className="rounded-md border border-cyan-300/10 bg-cyan-300/[0.025] px-1.5 py-1 text-[7px] font-semibold tracking-[0.12em] text-cyan-300/70">
                                        {
                                            ActiveSlide.systemCode
                                        }
                                    </span>
                                </div>

                                {/* Progress */}
                                <div className="relative min-w-0 flex-1">
                                    <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/[0.07]">
                                        <div
                                            key={
                                                ActiveVideoIndex
                                            }
                                            className="about-controller-progress h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 shadow-[0_0_10px_rgba(25,211,255,0.32)]"
                                        />
                                    </div>
                                </div>

                                {/* =================================================
                                    PREMIUM NUMBER CARDS
                                ================================================= */}

                                <div className="flex shrink-0 items-center gap-1.5">
                                    {AboutVideoSlides.map(
                                        (
                                            slide,
                                            index,
                                        ) => (
                                            <AboutVideoNumberCard
                                                key={
                                                    slide.id
                                                }
                                                number={String(
                                                    index +
                                                    1,
                                                ).padStart(
                                                    2,
                                                    "0",
                                                )}
                                                label={
                                                    slide.title
                                                }
                                                active={
                                                    ActiveVideoIndex ===
                                                    index
                                                }
                                                onClick={() =>
                                                    setActiveVideoIndex(
                                                        index,
                                                    )
                                                }
                                            />
                                        ),
                                    )}
                                </div>
                            </div>

                         
                        </div>
                    </div>
                </div>
            </div>

            {/* =================================================
                SUBTLE PARTICLES
            ================================================= */}

            <span className="about-media-particle-one pointer-events-none absolute left-[7%] top-[27%] h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(25,211,255,0.85)]" />

            <span className="about-media-particle-two pointer-events-none absolute right-[8%] top-[22%] h-1 w-1 rounded-full bg-violet-300 shadow-[0_0_8px_rgba(124,60,255,0.85)]" />

            <span className="about-media-particle-three pointer-events-none absolute bottom-[17%] right-[12%] h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(25,211,255,0.75)]" />
        </div>
    );
};

/* =========================================================
   ABOUT HERO
========================================================= */

const AboutHero = () => {
    return (
        <section
            id="about-hero"
            className="relative h-[calc(100svh-92px)] w-full overflow-hidden bg-[#061633] text-white"
        >
            {/* =================================================
                BACKGROUND
            ================================================= */}

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-10%] top-[18%] h-[240px] w-[240px] rounded-full bg-cyan-400/[0.014] blur-[105px]" />

                <div className="absolute right-[-7%] top-[10%] h-[290px] w-[290px] rounded-full bg-blue-500/[0.018] blur-[120px]" />

                <div className="absolute bottom-[-15%] left-1/2 h-[260px] w-[650px] -translate-x-1/2 rounded-full bg-violet-500/[0.015] blur-[130px]" />

                <div className="absolute inset-0 opacity-[0.006] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:72px_72px]" />
            </div>

            {/* =================================================
                MASTER CONTAINER
            ================================================= */}

            <div className="relative z-20 mx-auto flex h-[75vh] w-full max-w-[1400px] items-center px-6 lg:px-8">
                <div className="grid w-full min-w-0  gap-5 lg:grid-cols-[0.9fr_1.1fr] xl:gap-8">
                    {/* =================================================
                        LEFT
                    ================================================= */}

                    <div className="min-w-0 max-w-[610px]">
                        <div className="inline-flex items-center gap-3">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300 sm:text-[11px] lg:text-[12px]">
                                {AboutHeroContent.badge}
                            </span>

                            <span className="h-px w-11 bg-gradient-to-r from-cyan-300 via-blue-400 to-transparent" />
                        </div>

                        <h1 className="mt-4 text-[38px] font-semibold leading-[0.96] tracking-[-0.045em] sm:text-[48px] lg:text-[54px] xl:text-[60px]">
                            {AboutHeroContent.headingPrimary}{" "}
                            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                                {AboutHeroContent.headingAccent}
                            </span>
                        </h1>

                        <p className="mt-5 max-w-[570px] text-[18px] font-medium leading-[1.28] tracking-[-0.02em] text-blue-100/90 sm:text-[21px] lg:text-[24px]">
                            {AboutHeroContent.subheading}
                        </p>

                        <p className="mt-4 max-w-[550px] text-[11px] leading-5 text-white/48 sm:text-[12px] sm:leading-6 lg:text-[13px]">
                            {AboutHeroContent.description}
                        </p>

                        <div className="mt-7 flex flex-wrap items-center gap-3">
                            <HeroActionButton
                                label={
                                    AboutHeroContent.primaryButton
                                }
                                icon={ArrowRight}
                                to="/about#journey"
                                variant="primary"
                            />

                            <HeroActionButton
                                label={
                                    AboutHeroContent.secondaryButton
                                }
                                icon={ArrowRight}
                                to="/about#approach"
                                variant="secondary"
                            />
                        </div>
                    </div>

                    {/* =================================================
                        RIGHT
                    ================================================= */}

                    <div className="flex h-full min-h-0 w-full min-w-0 items-center justify-center">
                        <AboutMediaConsole />
                    </div>
                </div>
            </div>

            {/* =================================================
                ANIMATIONS
            ================================================= */}

            <style>{`
                .about-media-shell {
                    transform-style: preserve-3d;
                    animation:
                        aboutMediaFloat
                        7s
                        ease-in-out
                        infinite;
                }

                .about-media-ring-one {
                    animation:
                        aboutMediaRingOne
                        24s
                        linear
                        infinite;
                }

                .about-media-ring-two {
                    animation:
                        aboutMediaRingTwo
                        31s
                        linear
                        infinite;
                }

                .about-media-core {
                    animation:
                        aboutMediaCorePulse
                        4s
                        ease-in-out
                        infinite;
                }

                .about-controller-progress {
                    width: 0;
                    animation:
                        aboutControllerProgress
                        12s
                        linear
                        both;
                }

                .about-media-particle-one {
                    animation:
                        aboutMediaParticleOne
                        5.5s
                        ease-in-out
                        infinite;
                }

                .about-media-particle-two {
                    animation:
                        aboutMediaParticleTwo
                        6.2s
                        ease-in-out
                        infinite;
                }

                .about-media-particle-three {
                    animation:
                        aboutMediaParticleThree
                        6s
                        ease-in-out
                        infinite;
                }

                @keyframes aboutMediaFloat {
                    0%,
                    100% {
                        transform:
                            translate3d(0,0,0)
                            rotateX(1deg)
                            rotateY(-0.8deg);
                    }

                    50% {
                        transform:
                            translate3d(0,-4px,7px)
                            rotateX(1.5deg)
                            rotateY(0.8deg);
                    }
                }

                @keyframes aboutMediaRingOne {
                    from {
                        transform:
                            rotateX(69deg)
                            rotateZ(12deg);
                    }

                    to {
                        transform:
                            rotateX(69deg)
                            rotateZ(372deg);
                    }
                }

                @keyframes aboutMediaRingTwo {
                    from {
                        transform:
                            rotateX(69deg)
                            rotateZ(-18deg);
                    }

                    to {
                        transform:
                            rotateX(69deg)
                            rotateZ(-378deg);
                    }
                }

                @keyframes aboutMediaCorePulse {
                    0%,
                    100% {
                        transform: scale(0.96);
                        opacity: 0.72;
                    }

                    50% {
                        transform: scale(1.04);
                        opacity: 1;
                    }
                }

                @keyframes aboutControllerProgress {
                    from {
                        width: 0%;
                    }

                    to {
                        width: 100%;
                    }
                }

                @keyframes aboutMediaParticleOne {
                    0%,
                    100% {
                        transform:
                            translate3d(0,0,0)
                            scale(0.7);
                        opacity: 0.3;
                    }

                    50% {
                        transform:
                            translate3d(24px,-15px,8px)
                            scale(1);
                        opacity: 1;
                    }
                }

                @keyframes aboutMediaParticleTwo {
                    0%,
                    100% {
                        transform:
                            translate3d(0,0,0)
                            scale(0.7);
                        opacity: 0.25;
                    }

                    50% {
                        transform:
                            translate3d(-20px,13px,8px)
                            scale(1);
                        opacity: 0.95;
                    }
                }

                @keyframes aboutMediaParticleThree {
                    0%,
                    100% {
                        transform:
                            translate3d(0,0,0);
                        opacity: 0.25;
                    }

                    50% {
                        transform:
                            translate3d(-17px,-12px,8px);
                        opacity: 0.9;
                    }
                }

                @media (max-width: 1199px) {
                    .about-media-system {
                        transform: scale(0.9);
                        transform-origin: center;
                    }

                    .about-media-ring-one,
                    .about-media-ring-two {
                        opacity: 0.7;
                    }
                }

                @media (max-width: 1023px) {
                    .about-media-system {
                        transform: scale(0.82);
                        transform-origin: center;
                        margin-top: -20px;
                        margin-bottom: -55px;
                    }

                    .about-media-shell {
                        animation: none;
                    }

                    .about-media-ring-one,
                    .about-media-ring-two {
                        opacity: 0.55;
                    }
                }

                @media (max-width: 767px) {
                    .about-media-system {
                        transform: scale(0.7);
                        transform-origin: center top;
                        margin-top: -25px;
                        margin-bottom: -100px;
                    }

                    .about-media-ring-one,
                    .about-media-ring-two {
                        opacity: 0.45;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .about-media-shell,
                    .about-media-ring-one,
                    .about-media-ring-two,
                    .about-media-core,
                    .about-controller-progress,
                    .about-media-particle-one,
                    .about-media-particle-two,
                    .about-media-particle-three {
                        animation: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default AboutHero;