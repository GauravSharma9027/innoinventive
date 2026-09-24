// AboutTeam.jsx
// InnoInventive About Page - Premium Team Section
// Version 2: subtle 3D nexus + scroll-responsive depth

import { useEffect, useRef, useState } from "react";
import {
    ArrowRight,
    ArrowUpRight,
    BrainCircuit,
    Code2,
    Cpu,
    Network,
    Sparkles,
    Workflow,
} from "lucide-react";

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
        status: "ONLINE",
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
        status: "ONLINE",
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
        status: "ONLINE",
        accent: "violet",
    },
];

/* =========================================================
   TEAM MEMBER POD
========================================================= */

const TeamMemberPod = ({ member, index, scrollDepth }) => {
    const MemberIcon = member.icon;

    const AccentMap = {
        cyan: {
            border: "group-hover:border-cyan-300/30",
            text: "text-cyan-300",
            gradient: "from-cyan-300 via-blue-400 to-cyan-200",
            glow: "bg-cyan-300/[0.055]",
        },
        blue: {
            border: "group-hover:border-blue-300/32",
            text: "text-blue-300",
            gradient: "from-blue-300 via-cyan-300 to-violet-300",
            glow: "bg-blue-400/[0.065]",
        },
        violet: {
            border: "group-hover:border-violet-300/30",
            text: "text-violet-300",
            gradient: "from-cyan-300 via-blue-400 to-violet-400",
            glow: "bg-violet-300/[0.055]",
        },
    };

    const CurrentAccent = AccentMap[member.accent] || AccentMap.cyan;

    const ParallaxValues = [1.15, -1.7, 1.35];
    const RotateValues = [-0.6, 0.8, -0.45];
    const TranslateY = scrollDepth * ParallaxValues[index];
    const RotateY = scrollDepth * RotateValues[index];

    return (
        <article
            className="team-member-pod group relative min-w-0 [perspective:1600px]"
            style={{
                transform: `translate3d(0, ${TranslateY}px, 0) rotateX(${RotateY}deg)`,
            }}
        >
            <div className="absolute inset-x-2 bottom-[-10px] top-3 rounded-[25px] border border-blue-400/[0.05] bg-[#020B20]/95 shadow-[0_22px_42px_rgba(0,0,0,0.42)] transition-all duration-500 group-hover:translate-y-[5px]" />

            <span
                className={[
                    "pointer-events-none absolute -inset-5 rounded-[30px] blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100",
                    CurrentAccent.glow,
                ].join(" ")}
            />

            <div
                className={[
                    "relative min-h-[315px] overflow-hidden rounded-[23px] border border-white/[0.075] p-5",
                    "bg-[linear-gradient(145deg,rgba(11,44,92,0.96),rgba(2,15,38,0.99))]",
                    "shadow-[inset_0_1px_0_rgba(255,255,255,0.11),inset_0_-22px_34px_rgba(0,0,0,0.25),0_24px_48px_rgba(0,0,0,0.32)]",
                    "transition-all duration-500",
                    "group-hover:-translate-y-2 group-hover:rotate-[1deg]",
                    CurrentAccent.border,
                ].join(" ")}
            >
                <div className="pointer-events-none absolute inset-0 opacity-[0.022] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:22px_22px]" />

                <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

                <span className="pointer-events-none absolute right-[-12%] top-[-10%] h-[100px] w-[100px] rounded-full bg-blue-400/[0.055] blur-[45px]" />

                <div className="relative z-20 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <span
                            className={[
                                "font-mono text-[8px] font-semibold tracking-[0.16em]",
                                CurrentAccent.text,
                            ].join(" ")}
                        >
                            {member.number}
                        </span>

                        <span className="h-px w-8 bg-gradient-to-r from-cyan-300/55 to-transparent" />
                    </div>

                    <div className="flex items-center gap-1.5 rounded-full border border-emerald-300/10 bg-emerald-300/[0.025] px-2 py-1">
                        <span className="relative flex h-1 w-1">
                            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-300/35" />
                            <span className="relative h-1 w-1 rounded-full bg-emerald-300 shadow-[0_0_6px_rgba(52,211,153,0.7)]" />
                        </span>

                        <span className="text-[4.5px] font-semibold uppercase tracking-[0.12em] text-emerald-100/50">
                            {member.status}
                        </span>
                    </div>
                </div>

                <div className="relative z-20 mt-5 flex justify-center">
                    <div className="relative flex h-[108px] w-[108px] items-center justify-center">
                        <span className="absolute -inset-5 rounded-full bg-blue-400/[0.035] blur-2xl" />

                        <span className="team-member-orbit-one absolute inset-0 rounded-full border border-cyan-300/[0.12] [transform:rotateX(68deg)]" />
                        <span className="team-member-orbit-two absolute inset-[11px] rounded-full border border-blue-300/[0.10] [transform:rotateX(68deg)_rotateZ(24deg)]" />
                        <span className="team-member-orbit-three absolute inset-[22px] rounded-full border border-violet-300/[0.08] border-dashed [transform:rotateX(70deg)_rotateZ(-24deg)]" />

                        <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full border border-blue-300/[0.17] bg-[radial-gradient(circle_at_35%_25%,rgba(22,119,255,0.20),rgba(5,25,56,0.97)_60%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-12px_20px_rgba(0,0,0,0.25),0_14px_28px_rgba(0,0,0,0.32),0_0_28px_rgba(22,119,255,0.09)]">
                            <span className="absolute inset-[7px] rounded-full border border-white/[0.035]" />

                            <span className="team-member-scan pointer-events-none absolute left-1/2 top-0 h-[70%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-200/50 to-transparent" />

                            <span className="relative z-20 text-[18px] font-semibold tracking-[-0.04em] text-white">
                                {member.initials}
                            </span>
                        </div>

                        <div className="absolute -right-1 bottom-1">
                            <PremiumIconBadge
                                icon={MemberIcon}
                                size="default"
                            />
                        </div>
                    </div>
                </div>

                <div className="relative z-20 mt-2 text-center">
                    <h3 className="text-[17px] font-semibold tracking-[-0.03em] text-white">
                        {member.name}
                    </h3>

                    <p
                        className={[
                            "mt-1 text-[7px] font-semibold uppercase tracking-[0.16em]",
                            CurrentAccent.text,
                        ].join(" ")}
                    >
                        {member.role}
                    </p>
                </div>

                <p className="relative z-20 mx-auto mt-3 max-w-[245px] text-center text-[8px] leading-[1.7] text-white/37">
                    {member.description}
                </p>

                <div className="relative z-20 mt-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                            <span className="relative flex h-1 w-1">
                                <span className="absolute inset-0 animate-ping rounded-full bg-cyan-300/35" />
                                <span className="relative h-1 w-1 rounded-full bg-cyan-300" />
                            </span>

                            <span className="text-[4.5px] font-medium uppercase tracking-[0.13em] text-white/22">
                                SYSTEM CONTRIBUTION
                            </span>
                        </div>

                        <span
                            className={[
                                "font-mono text-[4.5px] tracking-[0.11em]",
                                CurrentAccent.text,
                            ].join(" ")}
                        >
                            {member.expertise}
                        </span>
                    </div>

                    <div className="relative mt-2 h-[3px] overflow-hidden rounded-full bg-white/[0.045]">
                        <span
                            className={[
                                "absolute inset-y-0 left-0 w-[68%] rounded-full bg-gradient-to-r shadow-[0_0_9px_rgba(25,211,255,0.18)] transition-all duration-700 group-hover:w-[92%]",
                                CurrentAccent.gradient,
                            ].join(" ")}
                        />

                        <span className="absolute left-[25%] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-cyan-300/25" />
                        <span className="absolute left-[50%] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-blue-300/25" />
                        <span className="absolute left-[76%] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-violet-300/20" />
                    </div>

                    <div className="mt-1.5 flex items-center justify-between">
                        <span className="font-mono text-[4px] uppercase tracking-[0.12em] text-white/15">
                            {member.signal}
                        </span>

                        <ArrowUpRight
                            size={8}
                            strokeWidth={1.5}
                            className="text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300/70"
                        />
                    </div>
                </div>

                <span className="team-card-sweep pointer-events-none absolute left-[-32%] top-[-20%] z-30 h-[150%] w-[22%] rotate-[20deg] bg-gradient-to-r from-transparent via-white/[0.075] to-transparent opacity-0" />
            </div>
        </article>
    );
};

/* =========================================================
   CENTER 3D NEXUS
========================================================= */

const TeamNexus = ({ scrollProgress }) => {
    const Rotation = -12 + scrollProgress * 24;
    const Lift = scrollProgress * -8;

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
    const SectionReference = useRef(null);
    const [ScrollProgress, SetScrollProgress] = useState(0);

    useEffect(() => {
        const UpdateScroll = () => {
            const Element = SectionReference.current;

            if (!Element) {
                return;
            }

            const Rectangle = Element.getBoundingClientRect();
            const ViewportHeight = window.innerHeight || 1;
            const Travel = Math.max(Rectangle.height - ViewportHeight, 1);
            const Progress = Math.min(
                1,
                Math.max(0, -Rectangle.top / Travel),
            );

            SetScrollProgress(Progress);
        };

        UpdateScroll();
        window.addEventListener("scroll", UpdateScroll, { passive: true });
        window.addEventListener("resize", UpdateScroll);

        return () => {
            window.removeEventListener("scroll", UpdateScroll);
            window.removeEventListener("resize", UpdateScroll);
        };
    }, []);

    const NexusOpacity = 0.25 + ScrollProgress * 0.55;

    return (
        <section
            ref={SectionReference}
            id="team"
            className="relative w-full overflow-hidden bg-[#061633] text-white"
        >
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-8%] top-[16%] h-[280px] w-[280px] rounded-full bg-cyan-400/[0.012] blur-[120px]" />

                <div className="absolute right-[-8%] bottom-[12%] h-[310px] w-[310px] rounded-full bg-blue-500/[0.018] blur-[125px]" />

                <div className="absolute inset-0 opacity-[0.004] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:72px_72px]" />
            </div>

            <div className="relative z-20 mx-auto flex min-h-[calc(100svh-92px)] w-full max-w-[1400px] flex-col justify-center px-6 py-14 lg:px-8 lg:py-16">
                {/* FIRST ROW */}
                <div className="grid items-end gap-8 lg:grid-cols-[0.72fr_1.28fr]">
                    <div className="max-w-[390px]">
                        <div className="inline-flex items-center gap-3">
                            <span className="font-mono text-[13px] font-medium tracking-[0.12em] text-cyan-300">
                                {TeamContent.sectionNumber}
                            </span>

                            <span className="h-px w-10 bg-gradient-to-r from-cyan-300 via-blue-400 to-transparent" />

                            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-blue-100/65 sm:text-[10px]">
                                {TeamContent.eyebrow}
                            </span>
                        </div>

                        <h2 className="mt-5 text-[32px] font-semibold leading-[1.03] tracking-[-0.045em] sm:text-[38px] lg:text-[43px]">
                            {TeamContent.headingPrimary}{" "}
                            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                                {TeamContent.headingAccent}
                            </span>
                        </h2>
                    </div>

                    <div className="flex flex-col items-start justify-end lg:items-end lg:text-right">
                        <p className="max-w-[560px] text-[10px] leading-[1.8] text-blue-100/46 sm:text-[11px]">
                            {TeamContent.description}
                        </p>

                        <div className="mt-5">
                            <PremiumButton
                                label={TeamContent.buttonLabel}
                                to="/contact"
                                icon={ArrowRight}
                            />
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-blue-300/[0.12] to-transparent" />

                {/* SECOND ROW */}
                <div className="relative mt-9">
                    <TeamNexus scrollProgress={ScrollProgress} />

                    <div
                        className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.045] blur-[90px] lg:block"
                        style={{ opacity: NexusOpacity }}
                    />

                    <div className="pointer-events-none absolute left-[4%] right-[4%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent lg:block" />

                    <div className="relative z-10 grid items-stretch gap-6 lg:grid-cols-[1fr_65px_1fr_65px_1fr]">
                        <TeamMemberPod
                            member={TeamMembers[0]}
                            index={0}
                            scrollDepth={ScrollProgress * 8}
                        />

                        <TeamConnection />

                        <TeamMemberPod
                            member={TeamMembers[1]}
                            index={1}
                            scrollDepth={ScrollProgress * 8}
                        />

                        <TeamConnection />

                        <TeamMemberPod
                            member={TeamMembers[2]}
                            index={2}
                            scrollDepth={ScrollProgress * 8}
                        />
                    </div>

                    {/* Mobile connector */}
                    <div className="flex flex-col items-center gap-1 py-4 lg:hidden">
                        <span className="h-7 w-px bg-gradient-to-b from-transparent via-blue-300/35 to-transparent" />
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_8px_rgba(22,119,255,0.8)]" />
                        <span className="h-7 w-px bg-gradient-to-b from-blue-300/35 to-transparent" />
                    </div>
                </div>

                {/* FOOTER */}
                <div className="mt-7 flex items-center justify-between gap-5 border-t border-white/[0.05] pt-4">
                    <div className="flex items-center gap-2">
                        <Sparkles
                            size={9}
                            strokeWidth={1.6}
                            className="text-cyan-300/55"
                        />

                        <span className="text-[6px] font-semibold uppercase tracking-[0.17em] text-white/22">
                            {TeamContent.footerText}
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

            <style>{`
                .team-member-pod {
                    transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
                    will-change: transform;
                }

                .team-member-orbit-one {
                    animation:
                        teamOrbitOne
                        10s
                        linear
                        infinite;
                }

                .team-member-orbit-two {
                    animation:
                        teamOrbitTwo
                        14s
                        linear
                        infinite
                        reverse;
                }

                .team-member-orbit-three {
                    animation:
                        teamOrbitThree
                        17s
                        linear
                        infinite;
                }

                .team-member-scan {
                    animation:
                        teamScan
                        3.6s
                        ease-in-out
                        infinite;
                }

                .team-card-sweep {
                    animation:
                        teamCardSweep
                        6s
                        ease-in-out
                        infinite;
                }

                .team-connection-pulse {
                    animation:
                        teamConnectionPulse
                        2.8s
                        linear
                        infinite;
                }

                @keyframes teamOrbitOne {
                    from {
                        transform: rotateX(68deg) rotateZ(0deg);
                    }
                    to {
                        transform: rotateX(68deg) rotateZ(360deg);
                    }
                }

                @keyframes teamOrbitTwo {
                    from {
                        transform: rotateX(68deg) rotateZ(24deg);
                    }
                    to {
                        transform: rotateX(68deg) rotateZ(-336deg);
                    }
                }

                @keyframes teamOrbitThree {
                    from {
                        transform: rotateX(70deg) rotateZ(-24deg);
                    }
                    to {
                        transform: rotateX(70deg) rotateZ(336deg);
                    }
                }

                @keyframes teamScan {
                    0%,
                    100% {
                        opacity: 0;
                        transform: translateX(-50%) translateY(-8%);
                    }
                    45% {
                        opacity: 0.75;
                    }
                    60% {
                        opacity: 1;
                    }
                    80% {
                        opacity: 0.25;
                        transform: translateX(-50%) translateY(75%);
                    }
                }

                @keyframes teamCardSweep {
                    0%,
                    55%,
                    100% {
                        left: -32%;
                        opacity: 0;
                    }
                    64% {
                        left: 45%;
                        opacity: 0.8;
                    }
                    76% {
                        left: 115%;
                        opacity: 0;
                    }
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

                @media (prefers-reduced-motion: reduce) {
                    .team-member-pod,
                    .team-member-orbit-one,
                    .team-member-orbit-two,
                    .team-member-orbit-three,
                    .team-member-scan,
                    .team-card-sweep,
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
