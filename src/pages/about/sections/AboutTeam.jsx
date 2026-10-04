// AboutTeam.jsx
// InnoInventive About Page - Premium Editorial Team Section
// Version 5: Luxury Editorial Team Cards
// ============================================================

import { useEffect, useRef, useState } from "react";
import {
    ArrowRight,
    ArrowUpRight,
    BrainCircuit,
    CheckCircle2,
    Code2,
    Cpu,
    Network,
    ShieldCheck,
    Sparkles,
    Workflow,
} from "lucide-react";
import { motion } from "framer-motion";

import PremiumButton from "../../../components/UI/PremiumButton";
import PremiumIconBadge from "../../../components/UI/PremiumIconBadge";

/* =========================================================
   TEAM CONTENT
========================================================= */

const TeamContent = {
    sectionNumber: "04",
    eyebrow: "Meet The Team",
    headingPrimary: "People behind the",
    headingAccent: "intelligent systems.",
    description:
        "Different skills, one direction — building digital systems that make businesses simpler, faster and more capable.",
    footerText: "Human thinking. Intelligent execution.",
    buttonLabel: "Work With Us",
};

/* =========================================================
   TEAM DATA
========================================================= */

const TeamMembers = [
    {
        id: "member-one",
        number: "01",
        initials: "TM",
        name: "Team Member One",
        role: "Product & Strategy",
        description:
            "Turns business requirements into clear product direction and practical digital experiences.",
        icon: BrainCircuit,
        expertise: "STRATEGY",
        signal: "DIRECTION",
        status: "AVAILABLE",
        teamLabel: "PRODUCT",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=90",
        accent: "cyan",
    },
    {
        id: "member-two",
        number: "02",
        initials: "TM",
        name: "Team Member Two",
        role: "Engineering",
        description:
            "Builds scalable applications, APIs and infrastructure that keep the system reliable.",
        icon: Code2,
        expertise: "ENGINEERING",
        signal: "BUILD",
        status: "AVAILABLE",
        teamLabel: "ENGINEERING",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=90",
        accent: "blue",
    },
    {
        id: "member-three",
        number: "03",
        initials: "TM",
        name: "Team Member Three",
        role: "Automation & AI",
        description:
            "Connects workflows, intelligent logic and automation layers to create measurable impact.",
        icon: Workflow,
        expertise: "AUTOMATION",
        signal: "INTELLIGENCE",
        status: "AVAILABLE",
        teamLabel: "AI SYSTEMS",
        image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=90",
        accent: "violet",
    },
];

/* =========================================================
   ACCENT MAP
========================================================= */

const TeamAccentMap = {
    cyan: {
        text: "text-cyan-300",
        border: "border-cyan-300/22",
        hoverBorder: "group-hover:border-cyan-300/42",
        glow: "bg-cyan-300/[0.07]",
        chip: "border-cyan-300/12 bg-cyan-300/[0.035]",
        gradient:
            "from-cyan-300 via-blue-400 to-cyan-200",
    },

    blue: {
        text: "text-blue-300",
        border: "border-blue-300/22",
        hoverBorder: "group-hover:border-blue-300/42",
        glow: "bg-blue-400/[0.07]",
        chip: "border-blue-300/12 bg-blue-300/[0.035]",
        gradient:
            "from-blue-300 via-cyan-300 to-violet-300",
    },

    violet: {
        text: "text-violet-300",
        border: "border-violet-300/22",
        hoverBorder: "group-hover:border-violet-300/42",
        glow: "bg-violet-300/[0.07]",
        chip: "border-violet-300/12 bg-violet-300/[0.035]",
        gradient:
            "from-cyan-300 via-blue-400 to-violet-400",
    },
};

/* =========================================================
   TEAM MEMBER CARD
========================================================= */

const TeamMemberPod = ({
    member,
    index,
    scrollDepth,
}) => {
    const MemberIcon = member.icon;

    const CurrentAccent =
        TeamAccentMap[member.accent] ||
        TeamAccentMap.cyan;

    const ParallaxValues = [
        1.15,
        -1.7,
        1.35,
    ];

    const RotateValues = [
        -0.45,
        0.6,
        -0.35,
    ];

    const TranslateY =
        scrollDepth *
        ParallaxValues[index];

    const RotateY =
        scrollDepth *
        RotateValues[index];

    return (
        <motion.article
            className="team-member-pod group relative min-w-0"
            style={{
                transform: `translate3d(0, ${TranslateY}px, 0) rotateX(${RotateY}deg)`,
            }}
            whileHover={{
                y: -8,
            }}
            transition={{
                duration: 0.45,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1,
                ],
            }}
        >
            {/* =================================================
                REAR OFFSET PANEL
            ================================================= */}

            <div
                className={[
                    "pointer-events-none absolute inset-0 translate-x-2 translate-y-3 rounded-[24px] border bg-[#020B20]/85",
                    CurrentAccent.border,
                ].join(" ")}
            />

            <div className="pointer-events-none absolute inset-0 translate-x-1 translate-y-1 rounded-[24px] border border-white/[0.035] bg-[#061226]/80" />

            {/* =================================================
                AMBIENT GLOW
            ================================================= */}

            <motion.div
                className={[
                    "pointer-events-none absolute -inset-5 rounded-[30px] blur-3xl",
                    CurrentAccent.glow,
                ].join(" ")}
                animate={{
                    opacity: [
                        0.16,
                        0.32,
                        0.16,
                    ],
                    scale: [
                        0.96,
                        1.03,
                        0.96,
                    ],
                }}
                transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay:
                        index * 0.5,
                }}
            />

            {/* =================================================
                MAIN EDITORIAL CARD
            ================================================= */}

            <div
                className={[
                    "relative overflow-hidden rounded-[24px] border border-white/[0.08]",
                    "bg-[linear-gradient(145deg,rgba(9,29,61,0.98),rgba(2,12,29,0.995))]",
                    "shadow-[0_28px_60px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.09)]",
                    "transition-all duration-500",
                    CurrentAccent.hoverBorder,
                ].join(" ")}
            >
                {/* =================================================
                    EDITORIAL IMAGE AREA
                ================================================= */}

                <div className="relative h-[220px] overflow-hidden">
                    {/* Image */}
                    <motion.img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover grayscale-[0.15]"
                        initial={{
                            scale: 1.02,
                        }}
                        animate={{
                            scale: [
                                1.02,
                                1.045,
                                1.02,
                            ],
                        }}
                        whileHover={{
                            scale: 1.09,
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Dark treatment */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020B20] via-[#020B20]/20 to-transparent" />

                    {/* Side gradient */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#061633]/35 via-transparent to-[#061633]/10" />

                    {/* Accent wash */}
                    <div
                        className={[
                            "pointer-events-none absolute inset-0 opacity-30 mix-blend-screen",
                            CurrentAccent.glow,
                        ].join(" ")}
                    />

                    {/* =================================================
                        LARGE EDITORIAL NUMBER
                    ================================================= */}

                    <div className="absolute left-4 top-3 z-20">
                        <span
                            className={[
                                "font-mono text-[46px] font-semibold leading-none tracking-[-0.08em]",
                                "text-white/[0.16]",
                                "transition-all duration-500 group-hover:text-white/[0.27]",
                            ].join(" ")}
                        >
                            {member.number}
                        </span>
                    </div>

                    {/* =================================================
                        TOP STATUS
                    ================================================= */}

                    <div className="absolute right-4 top-4 z-20">
                        <div className="flex items-center gap-1.5 rounded-full border border-white/[0.09] bg-[#061633]/60 px-2.5 py-1.5 backdrop-blur-xl">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-300/35" />

                                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_7px_rgba(52,211,153,0.72)]" />
                            </span>

                            <span className="text-[5px] font-semibold uppercase tracking-[0.14em] text-emerald-100/55">
                                {member.status}
                            </span>
                        </div>
                    </div>

                    {/* =================================================
                        IMAGE FRAME
                    ================================================= */}

                    <span className="pointer-events-none absolute left-4 right-4 top-4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <span className="pointer-events-none absolute bottom-4 left-4 h-4 w-4 border-b border-l border-white/20" />

                    <span className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b border-r border-white/20" />

                    {/* =================================================
                        FLOATING ICON
                    ================================================= */}

                    <div className="absolute bottom-4 right-4 z-30">
                        <div className="rounded-[13px] border border-white/[0.12] bg-[#061633]/75 p-1.5 shadow-[0_10px_24px_rgba(0,0,0,0.32)] backdrop-blur-xl">
                            <PremiumIconBadge
                                icon={MemberIcon}
                                size="default"
                            />
                        </div>
                    </div>

                    {/* =================================================
                        HORIZONTAL SCAN
                    ================================================= */}

                    <motion.span
                        className="pointer-events-none absolute left-[-20%] top-0 z-30 h-full w-[16%] rotate-[8deg] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent blur-md"
                        animate={{
                            x: [
                                "0%",
                                "780%",
                            ],
                        }}
                        transition={{
                            duration: 6.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay:
                                index * 1.1,
                            repeatDelay: 1.3,
                        }}
                    />
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="relative p-5">
                    {/* Accent line */}
                    <motion.span
                        className={[
                            "absolute left-5 right-5 top-0 h-px bg-gradient-to-r opacity-80",
                            CurrentAccent.gradient,
                        ].join(" ")}
                        animate={{
                            opacity: [
                                0.35,
                                0.9,
                                0.35,
                            ],
                        }}
                        transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Team label */}
                    <div className="flex items-center justify-between gap-3">
                        <span className="text-[5px] font-semibold uppercase tracking-[0.18em] text-white/24">
                            {member.teamLabel}
                        </span>

                        <span className="font-mono text-[5px] tracking-[0.13em] text-white/16">
                            NODE / {member.number}
                        </span>
                    </div>

                    {/* Name */}
                    <h3 className="mt-2 text-[19px] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
                        {member.name}
                    </h3>

                    {/* Role */}
                    <div className="mt-2 flex items-center gap-2">
                        <span
                            className={[
                                "h-px w-5 bg-gradient-to-r",
                                CurrentAccent.gradient,
                            ].join(" ")}
                        />

                        <p
                            className={[
                                "text-[7px] font-semibold uppercase tracking-[0.17em]",
                                CurrentAccent.text,
                            ].join(" ")}
                        >
                            {member.role}
                        </p>
                    </div>

                    {/* Description */}
                    <p className="mt-3 max-w-[270px] text-[8px] leading-[1.7] text-blue-100/38">
                        {member.description}
                    </p>

                    {/* =================================================
                        SKILL ROW
                    ================================================= */}

                    <div className="mt-4 flex items-center justify-between gap-3">
                        <div
                            className={[
                                "flex items-center gap-2 rounded-full border px-2.5 py-1.5",
                                CurrentAccent.chip,
                            ].join(" ")}
                        >
                            <Sparkles
                                size={8}
                                className={
                                    CurrentAccent.text
                                }
                            />

                            <span className="text-[5px] font-semibold uppercase tracking-[0.13em] text-blue-100/34">
                                {member.expertise}
                            </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                            <CheckCircle2
                                size={9}
                                className="text-emerald-300/60"
                            />

                            <span className="text-[5px] font-semibold uppercase tracking-[0.12em] text-emerald-100/38">
                                Verified
                            </span>
                        </div>
                    </div>

                    {/* =================================================
                        FOOTER SIGNAL
                    ================================================= */}

                    <div className="mt-5 flex items-center justify-between border-t border-white/[0.05] pt-3">
                        <div className="flex items-center gap-2">
                            <Network
                                size={9}
                                className="text-blue-300/45"
                            />

                            <span className="font-mono text-[5px] uppercase tracking-[0.14em] text-white/17">
                                {member.signal}
                            </span>
                        </div>

                        <div
                            className={[
                                "flex items-center gap-1.5",
                                CurrentAccent.text,
                            ].join(" ")}
                        >
                            <span className="text-[5px] font-semibold uppercase tracking-[0.12em]">
                                Explore
                            </span>

                            <ArrowUpRight
                                size={9}
                                strokeWidth={1.6}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </div>
                    </div>
                </div>

                {/* =================================================
                    HOVER EDGE
                ================================================= */}

                <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 transition-all duration-700 group-hover:w-full" />
            </div>
        </motion.article>
    );
};

/* =========================================================
   CENTER 3D NEXUS
========================================================= */

const TeamNexus = ({
    scrollProgress,
}) => {
    const Rotation =
        -12 +
        scrollProgress * 24;

    const Lift =
        scrollProgress * -8;

    return (
        <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 lg:block"
            style={{
                transform: `translate3d(-50%, calc(-50% + ${Lift}px), 0) rotateZ(${Rotation}deg)`,
            }}
        >
            <div className="absolute inset-0 rounded-full border border-blue-400/[0.07] [transform:rotateX(68deg)]" />

            <div className="absolute inset-[10%] rounded-full border border-cyan-300/[0.08] [transform:rotateX(68deg)_rotateZ(28deg)]" />

            <div className="absolute inset-[23%] rounded-full border border-violet-300/[0.07] border-dashed [transform:rotateX(68deg)_rotateZ(-24deg)]" />

            <div className="absolute left-1/2 top-1/2 h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/[0.10] bg-blue-500/[0.025] shadow-[0_0_50px_rgba(22,119,255,0.08)] backdrop-blur-sm" />

            <span className="absolute left-[8%] top-[42%] h-1.5 w-1.5 rounded-full bg-cyan-300/60 shadow-[0_0_12px_rgba(25,211,255,0.8)]" />

            <span className="absolute right-[7%] top-[30%] h-1.5 w-1.5 rounded-full bg-blue-300/55 shadow-[0_0_12px_rgba(22,119,255,0.8)]" />

            <span className="absolute bottom-[17%] left-[22%] h-1 w-1 rounded-full bg-violet-300/50 shadow-[0_0_10px_rgba(124,60,255,0.75)]" />

            <span className="absolute bottom-[20%] right-[20%] h-1 w-1 rounded-full bg-cyan-200/50 shadow-[0_0_10px_rgba(25,211,255,0.75)]" />
        </div>
    );
};

/* =========================================================
   TEAM CONNECTION
========================================================= */

const TeamConnection = () => {
    return (
        <div className="relative hidden min-w-[65px] items-center justify-center lg:flex">
            <span className="absolute left-0 right-0 h-px bg-gradient-to-r from-cyan-300/10 via-blue-300/45 to-violet-300/10" />

            <span className="absolute left-0 right-0 h-[6px] rounded-full bg-blue-300/[0.025] blur-[5px]" />

            <span className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full border border-blue-300/15 bg-[#061633] shadow-[0_0_18px_rgba(22,119,255,0.10)]">
                <Network
                    size={9}
                    strokeWidth={1.5}
                    className="text-blue-300/65"
                />
            </span>

            <span className="team-connection-pulse absolute left-0 h-1 w-1 rounded-full bg-blue-300 shadow-[0_0_8px_rgba(22,119,255,0.95)]" />
        </div>
    );
};

/* =========================================================
   MAIN SECTION
========================================================= */

const AboutTeam = () => {
    const SectionReference =
        useRef(null);

    const [
        ScrollProgress,
        SetScrollProgress,
    ] = useState(0);

    useEffect(() => {
        const UpdateScroll = () => {
            const Element =
                SectionReference.current;

            if (!Element) {
                return;
            }

            const Rectangle =
                Element.getBoundingClientRect();

            const ViewportHeight =
                window.innerHeight || 1;

            const Travel = Math.max(
                Rectangle.height -
                ViewportHeight,
                1,
            );

            const Progress = Math.min(
                1,
                Math.max(
                    0,
                    -Rectangle.top /
                    Travel,
                ),
            );

            SetScrollProgress(
                Progress,
            );
        };

        UpdateScroll();

        window.addEventListener(
            "scroll",
            UpdateScroll,
            {
                passive: true,
            },
        );

        window.addEventListener(
            "resize",
            UpdateScroll,
        );

        return () => {
            window.removeEventListener(
                "scroll",
                UpdateScroll,
            );

            window.removeEventListener(
                "resize",
                UpdateScroll,
            );
        };
    }, []);

    const NexusOpacity =
        0.25 +
        ScrollProgress * 0.55;

    return (
        <section
            ref={SectionReference}
            id="team"
            className="relative w-full overflow-hidden bg-[#061633] text-white"
        >
            {/* =================================================
                BACKGROUND
            ================================================= */}

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-8%] top-[16%] h-[280px] w-[280px] rounded-full bg-cyan-400/[0.012] blur-[120px]" />

                <div className="absolute right-[-8%] bottom-[12%] h-[310px] w-[310px] rounded-full bg-blue-500/[0.018] blur-[125px]" />

                <div className="absolute inset-0 opacity-[0.004] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:72px_72px]" />
            </div>

            {/* =================================================
                MASTER CONTAINER
            ================================================= */}

            <div className="relative z-20 mx-auto flex min-h-[calc(100svh-92px)] w-full max-w-[1400px] flex-col justify-center px-6 py-14 lg:px-8 lg:py-16">
                {/* =================================================
                    FIRST ROW
                ================================================= */}

                <div className="grid items-end gap-8  lg:grid-cols-[0.72fr_1.28fr]">
                    {/* LEFT */}

                    <div className="max-w-[390px]">
                        <div className="inline-flex items-center gap-3">
                            <span className="font-mono text-[13px] font-medium tracking-[0.12em] text-cyan-300">
                                {
                                    TeamContent.sectionNumber
                                }
                            </span>

                            <span className="h-px w-10 bg-gradient-to-r from-cyan-300 via-blue-400 to-transparent" />

                            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-blue-100/65 sm:text-[10px]">
                                {
                                    TeamContent.eyebrow
                                }
                            </span>
                        </div>

                        <h2 className="team-heading mt-5 text-[36px] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-[38px] lg:text-[42px]">
                            {
                                TeamContent.headingPrimary
                            }{" "}
                            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                                {
                                    TeamContent.headingAccent
                                }
                            </span>
                        </h2>
                    </div>

                    {/* RIGHT */}

                    <div className="flex flex-col items-start justify-end lg:items-end lg:text-right">
                        <p className="max-w-[560px] text-[10px] leading-[1.8] text-blue-100/46 sm:text-[11px]">
                            {
                                TeamContent.description
                            }
                        </p>

                        <div className="mt-5">
                            <PremiumButton
                                label={
                                    TeamContent.buttonLabel
                                }
                                to="/contact"
                                icon={ArrowRight}
                            />
                        </div>
                    </div>
                </div>

                {/* Divider */}

                <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-blue-300/[0.12] to-transparent" />

                {/* =================================================
                    SECOND ROW
                ================================================= */}

                <div className="relative mt-9">
                    <TeamNexus
                        scrollProgress={
                            ScrollProgress
                        }
                    />

                    <div
                        className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.045] blur-[90px] lg:block"
                        style={{
                            opacity:
                                NexusOpacity,
                        }}
                    />

                    <div className="pointer-events-none absolute left-[4%] right-[4%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent lg:block" />

                    <div className="relative z-10 grid items-stretch gap-6 space-y-5 sm:grid-cols-2 lg:grid-cols-[1fr_65px_1fr_65px_1fr]">
                        <TeamMemberPod
                            member={
                                TeamMembers[0]
                            }
                            index={0}
                            scrollDepth={
                                ScrollProgress *
                                8
                            }
                        />

                        <TeamConnection />

                        <TeamMemberPod
                            member={
                                TeamMembers[1]
                            }
                            index={1}
                            scrollDepth={
                                ScrollProgress *
                                8
                            }
                        />

                        <TeamConnection />

                        <TeamMemberPod
                            member={
                                TeamMembers[2]
                            }
                            index={2}
                            scrollDepth={
                                ScrollProgress *
                                8
                            }
                        />
                    </div>

                    {/* Mobile connector */}

                    <div className="flex flex-col items-center gap-1 py-4 lg:hidden">
                        <span className="h-7 w-px bg-gradient-to-b from-transparent via-blue-300/35 to-transparent" />

                        <span className="h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_8px_rgba(22,119,255,0.8)]" />

                        <span className="h-7 w-px bg-gradient-to-b from-blue-300/35 to-transparent" />
                    </div>
                </div>

                {/* =================================================
                    FOOTER
                ================================================= */}

                <div className="mt-7 flex items-center justify-between gap-5 border-t border-white/[0.05] pt-4">
                    <div className="flex items-center gap-2">
                        <Sparkles
                            size={9}
                            strokeWidth={1.6}
                            className="text-cyan-300/55"
                        />

                        <span className="text-[6px] font-semibold uppercase tracking-[0.17em] text-white/22">
                            {
                                TeamContent.footerText
                            }
                        </span>
                    </div>

                    <div className="hidden items-center gap-2 sm:flex">
                        <Cpu
                            size={9}
                            strokeWidth={1.5}
                            className="text-blue-300/50"
                        />

                        <span className="font-mono text-[5px] uppercase tracking-[0.14em] text-white/18">
                            TEAM SYNC / ACTIVE
                        </span>
                    </div>
                </div>
            </div>

            {/* =================================================
                ANIMATIONS
            ================================================= */}

            <style>{`
                .team-member-pod {
                    transition:
                        transform
                        700ms
                        cubic-bezier(0.22,1,0.36,1);
                    will-change: transform;
                }

                .team-connection-pulse {
                    animation:
                        teamConnectionPulse
                        2.8s
                        linear
                        infinite;
                }

                @keyframes teamConnectionPulse {
                    0% {
                        left: 0;
                        opacity: 0;
                    }

                    12% {
                        opacity: 1;
                    }

                    86% {
                        opacity: 1;
                    }

                    100% {
                        left: 100%;
                        opacity: 0;
                    }
                }

                @media (min-width: 768px) and (max-width: 1023px) {
                    .team-heading {
                        font-size: 52px;
                        line-height: 1;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .team-member-pod,
                    .team-connection-pulse {
                        animation: none !important;
                        transition: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default AboutTeam;