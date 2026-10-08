import {
    ArrowUpRight,
    Layers3,
} from "lucide-react";

import HeroActionButton from "../../../components/UI/HeroActionButton";
import PremiumIconBadge from "../../../components/UI/PremiumIconBadge";

import ProjectsHeroBackground from "../../../assets/Projects/heroBG.png";

/* =========================================================
   PROJECT HERO CONTENT
========================================================= */

const ProjectsHeroContent = {
    eyebrow: "OUR PROJECTS",

    headingPrimary: "Ideas We Built.",

    headingAccent: "Solutions That Work.",

    description:
        "Explore our latest projects and see how we turn ideas into powerful digital experiences, smart automation and scalable solutions.",

    primaryButton: "Explore Projects",

    secondaryButton: "Start A Project",

    badgeLabel: "SELECTED WORK",

    badgeDetail: "Built for real businesses",
};

/* =========================================================
   PROJECT HERO
========================================================= */

const ProjectsHero = () => {
    return (
        <section
            id="projects-hero"
            className="relative lg:min-h-[85vh] w-full overflow-hidden bg-[#061633] text-white lg:h-[85vh] lg:min-h-0"
        >
            {/* =================================================
                BACKGROUND IMAGE
            ================================================= */}

            <div
                className=" absolute inset-0 bg-cover bg-top-right lg:bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url("${ProjectsHeroBackground}")`,
                }}
            >
                {/* Base dark overlay */}
                <div className="absolute inset-0 bg-[#061633]/35" />

                {/* Left content readability */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,15,35,0.98)_0%,rgba(3,15,35,0.90)_28%,rgba(3,15,35,0.58)_46%,rgba(3,15,35,0.12)_72%,rgba(3,15,35,0.04)_100%)]" />

                {/* Bottom depth */}
                <div className="absolute inset-x-0 bottom-0 h-[35%] bg-[linear-gradient(to_top,rgba(3,15,35,0.38),transparent)]" />

                {/* Brand glow */}
                <div className="absolute left-[16%] top-[25%] h-[260px] w-[360px] rounded-full bg-cyan-400/[0.035] blur-[110px]" />
            </div>

            {/* =================================================
                MAIN CONTAINER
            ================================================= */}

            <div className="relative z-20 mx-auto flex h-full w-full max-w-[1400px] items-center px-5 sm:px-6 lg:px-8">
                <div className="grid w-full items-center lg:grid-cols-[0.92fr_1.08fr]">
                    {/* =================================================
                        LEFT CONTENT
                    ================================================= */}

                    <div className="max-w-[620px] py-16 sm:py-20 lg:py-0">
                        {/* Eyebrow */}
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-cyan-300" />

                            <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
                                {ProjectsHeroContent.eyebrow}
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="mt-5 max-w-[670px] text-5xl lg:text-[clamp(42px,5.3vw,72px)] font-semibold leading-[0.94] tracking-[-0.065em] text-white">
                            {ProjectsHeroContent.headingPrimary}

                            <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                                {ProjectsHeroContent.headingAccent}
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 max-w-[510px] lg:text-[13px] leading-[1.8] text-white/58">
                            {ProjectsHeroContent.description}
                        </p>

                        {/* Buttons */}
                        <div className="mt-7 flex flex-wrap items-center gap-3">
                            <HeroActionButton
                                label={
                                    ProjectsHeroContent.primaryButton
                                }
                                icon={ArrowUpRight}
                                to="/projects"
                                variant="primary"
                            />

                            <HeroActionButton
                                label={
                                    ProjectsHeroContent.secondaryButton
                                }
                                icon={ArrowUpRight}
                                to="/contact"
                                variant="secondary"
                            />
                        </div>
                    </div>

                    {/* =================================================
                        RIGHT VISUAL
                    ================================================= */}

                    <div className="pointer-events-none relative hidden h-full lg:block">
                        {/* Premium Floating Badge */}
                        <div className="projects-hero-badge absolute right-[4%] top-[10%]">
                            <div className="flex items-center gap-2 rounded-[18px] border border-cyan-200/15 bg-[#061633]/55 px-2 py-2 shadow-[0_18px_40px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-xl">
                                <PremiumIconBadge
                                    icon={Layers3}
                                    size="default"
                                />

                                <div>
                                    <p className="text-[9px] font-semibold tracking-[0.02em] text-white/82">
                                        {ProjectsHeroContent.badgeLabel}
                                    </p>

                                    <p className="mt-1 text-[6px] uppercase tracking-[0.1em] text-cyan-100/38">
                                        {ProjectsHeroContent.badgeDetail}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Small ambient point */}
                        <span className="absolute left-[30%] top-[31%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(25,211,255,0.8)]" />

                        <span className="absolute right-[25%] top-[51%] h-1 w-1 rounded-full bg-violet-300 shadow-[0_0_10px_rgba(124,60,255,0.8)]" />
                    </div>
                </div>
            </div>

            {/* =================================================
                EDGE DEPTH
            ================================================= */}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-px bg-gradient-to-r from-transparent via-cyan-300/15 to-transparent" />

            {/* =================================================
                FLOATING ANIMATION
            ================================================= */}

            <style>{`
                .projects-hero-badge {
                    animation: projectsHeroBadgeFloat 5.5s ease-in-out infinite;
                }

                @keyframes projectsHeroBadgeFloat {
                    0%,
                    100% {
                        transform: translate3d(0, 0, 0);
                    }

                    50% {
                        transform: translate3d(0, -8px, 5px);
                    }
                }

                @media (max-width: 1023px) {
                    .projects-hero-badge {
                        animation: none;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .projects-hero-badge {
                        animation: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default ProjectsHero;