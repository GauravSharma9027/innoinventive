import {
    ArrowRight,
    BrainCircuit,
    Code2,
    Lightbulb,
    Rocket,
    TestTube2,
} from "lucide-react";
import { useEffect, useState } from "react";

import PremiumIconBadge from "../../../components/UI/PremiumIconBadge";

/* =========================================================
   PROCESS DATA
========================================================= */

const ProcessData = [
    {
        id: "idea",
        number: "01",
        title: "Share Your Idea",
        description: "Tell us what you need.",
        detail: "Requirements captured",
        icon: Lightbulb,
    },
    {
        id: "analysis",
        number: "02",
        title: "AI Analysis",
        description: "We suggest the best solution.",
        detail: "Smart workflow mapped",
        icon: BrainCircuit,
    },
    {
        id: "development",
        number: "03",
        title: "Development",
        description: "We build it automatically.",
        detail: "System build running",
        icon: Code2,
    },
    {
        id: "testing",
        number: "04",
        title: "Testing",
        description: "We ensure quality & performance.",
        detail: "Quality checks active",
        icon: TestTube2,
    },
    {
        id: "launch",
        number: "05",
        title: "Launch",
        description: "Your system goes live.",
        detail: "Ready for deployment",
        icon: Rocket,
    },
];

/* =========================================================
   PROCESS NODE
========================================================= */

const ProcessNode = ({ item, isActive }) => {
    const Icon = item.icon;

    return (
        <div
            className="process-node relative isolate flex h-[50px] w-[50px] items-center justify-center [perspective:1100px] [transform-style:preserve-3d]"
        >
            {/* =====================================================
                AMBIENT GLOW
            ===================================================== */}

            <span
                className={`pointer-events-none absolute -inset-5 rounded-full blur-2xl transition-all duration-700 ${isActive
                        ? "bg-cyan-300/[0.14]"
                        : "bg-blue-500/[0.025]"
                    }`}
            />

            {/* =====================================================
                OUTER RING
            ===================================================== */}

            <span
                className={`process-node-ring pointer-events-none absolute -inset-[8px] rounded-full border transition-all duration-700 ${isActive
                        ? "border-cyan-300/40 shadow-[0_0_28px_rgba(25,211,255,0.18)]"
                        : "border-blue-300/10"
                    }`}
            />

            {/* =====================================================
                INNER RING
            ===================================================== */}

            <span
                className={`pointer-events-none absolute -inset-[3px] rounded-full border transition-all duration-700 ${isActive
                        ? "border-blue-300/30"
                        : "border-blue-300/[0.07]"
                    }`}
            />

            {/* =====================================================
                PREMIUM ICON
            ===================================================== */}

            <div
                className={`process-node-badge relative z-10 ${isActive ? "process-node-active" : ""
                    }`}
            >
                <PremiumIconBadge
                    icon={Icon}
                    size="large"
                />
            </div>

            {/* =====================================================
                NUMBER CHIP
                ALWAYS TOPMOST
            ===================================================== */}

            <div
                className={`process-number-chip pointer-events-none absolute -right-[7px] -top-[8px] z-[9999] flex h-[19px] min-w-[19px] items-center justify-center rounded-full border px-[4px] text-[6px] font-bold tracking-[0.04em] ${isActive
                        ? "border-cyan-100/70 bg-[linear-gradient(145deg,#1B82FF,#693CFF)] text-white shadow-[0_0_16px_rgba(25,211,255,0.52),inset_0_1px_0_rgba(255,255,255,0.40)]"
                        : "border-blue-300/25 bg-[linear-gradient(145deg,#164C91,#0A2148)] text-cyan-100/75 shadow-[0_5px_12px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.12)]"
                    }`}
            >
                {item.number}
            </div>

            {/* =====================================================
                ACTIVE SIGNAL
            ===================================================== */}

            {isActive && (
                <>
                    <span className="pointer-events-none absolute -bottom-[8px] left-1/2 z-[20] h-[4px] w-[4px] -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_11px_rgba(25,211,255,1)]" />

                    <span className="process-node-signal pointer-events-none absolute -inset-[12px] z-[5] rounded-full border border-cyan-300/20" />
                </>
            )}
        </div>
    );
};

/* =========================================================
   PROCESS ITEM
========================================================= */

const ProcessItem = ({
    item,
    index,
    isActive,
}) => {
    return (
        <div
            className={`how-it-works-item group relative min-w-0 text-center ${isActive ? "how-it-works-item-active" : ""
                }`}
        >
            {/* =====================================================
                CONNECTOR
            ===================================================== */}

            {index < ProcessData.length - 1 && (
                <div className="pointer-events-none absolute left-[calc(50%+33px)] right-[-10px] top-[25px] h-[14px]">
                    {/* Main route */}
                    <div
                        className={`absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 rounded-full transition-all duration-700 ${isActive
                                ? "bg-gradient-to-r from-cyan-300/85 via-blue-400/58 to-blue-400/14 shadow-[0_0_9px_rgba(25,211,255,0.18)]"
                                : "bg-blue-400/15"
                            }`}
                    />

                    {/* Secondary route */}
                    <div
                        className={`absolute left-[7%] right-[10%] top-[calc(50%+4px)] h-px transition-all duration-700 ${isActive
                                ? "bg-gradient-to-r from-cyan-300/24 via-blue-400/12 to-transparent"
                                : "bg-blue-400/[0.045]"
                            }`}
                    />

                    {/* Moving highlight */}
                    <span className="process-route-flow absolute left-0 top-1/2 h-[3px] w-[23px] -translate-y-1/2 rounded-full bg-cyan-100 shadow-[0_0_11px_rgba(25,211,255,0.9)]" />

                    {/* Signal dot */}
                    <span
                        className={`absolute left-1/2 top-1/2 h-[3px] w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full ${isActive
                                ? "bg-cyan-300 shadow-[0_0_8px_rgba(25,211,255,0.9)]"
                                : "bg-blue-300/20"
                            }`}
                    />

                    {/* Arrow */}
                    <span
                        className={`absolute right-[8%] top-1/2 h-[6px] w-[6px] -translate-y-1/2 rotate-45 border-r border-t ${isActive
                                ? "border-cyan-200"
                                : "border-blue-300/28"
                            }`}
                    />
                </div>
            )}

            {/* =====================================================
                NODE
            ===================================================== */}

            <div className="relative z-20 flex flex-col items-center">
                <ProcessNode
                    item={item}
                    isActive={isActive}
                />

                {/* =================================================
                    TEXT
                ================================================= */}

                <div className="relative mt-3 w-full max-w-[140px]">
                    <h3
                        className={`text-[9.5px] font-semibold leading-[1.12] transition-all duration-700 ${isActive
                                ? "text-white"
                                : "text-blue-100/72"
                            }`}
                    >
                        {item.title}
                    </h3>

                    <p
                        className={`mt-[4px] text-[7px] font-medium leading-[1.35] transition-all duration-700 ${isActive
                                ? "text-cyan-100/62"
                                : "text-blue-100/38"
                            }`}
                    >
                        {item.description}
                    </p>

                    {/* Automation detail */}
                    <div className="mt-[4px] flex items-center justify-center gap-[4px]">
                        <span
                            className={`h-[3px] w-[3px] rounded-full ${isActive
                                    ? "bg-cyan-300 shadow-[0_0_6px_rgba(25,211,255,0.9)]"
                                    : "bg-blue-300/20"
                                }`}
                        />

                        <span
                            className={`text-[6px] font-medium tracking-wide ${isActive
                                    ? "text-cyan-100/42"
                                    : "text-blue-100/22"
                                }`}
                        >
                            {item.detail}
                        </span>
                    </div>
                </div>

                {/* Active base */}
                <span
                    className={`mt-2 h-[2px] rounded-full transition-all duration-700 ${isActive
                            ? "w-9 bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 shadow-[0_0_10px_rgba(25,211,255,0.60)]"
                            : "w-2 bg-blue-400/15"
                        }`}
                />
            </div>
        </div>
    );
};

/* =========================================================
   HOW IT WORKS
========================================================= */

const HowItWorks = () => {
    const [ActiveStep, SetActiveStep] = useState(0);

    /* =====================================================
       AUTOMATIC PROCESS
    ===================================================== */

    useEffect(() => {
        const Interval = window.setInterval(() => {
            SetActiveStep((CurrentStep) => {
                return (CurrentStep + 1) % ProcessData.length;
            });
        }, 2200);

        return () => window.clearInterval(Interval);
    }, []);

    /* =====================================================
       MANUAL NEXT
    ===================================================== */

    const HandleNextStep = () => {
        SetActiveStep((CurrentStep) => {
            return (CurrentStep + 1) % ProcessData.length;
        });
    };

    return (
        <section
            id="process"
            className="relative w-full overflow-hidden bg-[#061633] text-white pt-6"
        >
            {/* =====================================================
                BACKGROUND
            ===================================================== */}

            <div className="pointer-events-none absolute inset-0">
                {/* Center atmosphere */}
                <div className="absolute left-1/2 top-1/2 h-[190px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[115px]" />

                {/* Cyan atmosphere */}
                <div className="absolute left-[6%] top-[12%] h-[120px] w-[190px] rounded-full bg-cyan-400/[0.018] blur-[80px]" />

                {/* Violet atmosphere */}
                <div className="absolute right-[5%] top-[12%] h-[130px] w-[190px] rounded-full bg-violet-500/[0.018] blur-[85px]" />

                {/* Radial depth */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(22,119,255,0.028),transparent_65%)]" />

                {/* Subtle grid */}
                <div className="absolute inset-0 opacity-[0.015] [background-image:linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:48px_48px]" />

                {/* Top edge */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/14 to-transparent" />

                {/* Bottom edge */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent" />
            </div>

            {/* =====================================================
                CONTENT
            ===================================================== */}

            <div className="relative mx-auto max-w-[1400px] px-6 py-7 lg:px-8">
                <div className="grid grid-cols-[235px_minmax(0,1fr)] items-start gap-8 xl:grid-cols-[250px_minmax(0,1fr)] xl:gap-10">
                    {/* =================================================
                        LEFT INTRO
                    ================================================= */}

                    <div className="relative z-20 self-start">
                        <h2 className="text-[32px] font-semibold leading-[1.04] tracking-[-0.035em] text-white">
                            How It Works
                        </h2>

                        <p className="mt-1.5 max-w-[215px] text-[12px] font-medium leading-[1.45] text-blue-100/58">
                            From idea to automation — in just a few steps.
                        </p>

                        {/* =================================================
                            LEFT CURVED ROUTE
                        ================================================= */}

                        <div className="pointer-events-none absolute left-[-2px] top-[70px] h-[72px] w-[218px]">
                            <svg
                                className="absolute inset-0 h-full w-full overflow-visible"
                                viewBox="0 0 218 72"
                                fill="none"
                            >
                                <defs>
                                    <linearGradient
                                        id="HowItWorksIntroCurve"
                                        x1="0"
                                        y1="0"
                                        x2="1"
                                        y2="1"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="#19D3FF"
                                            stopOpacity="0.9"
                                        />

                                        <stop
                                            offset="40%"
                                            stopColor="#1677FF"
                                            stopOpacity="0.68"
                                        />

                                        <stop
                                            offset="78%"
                                            stopColor="#1677FF"
                                            stopOpacity="0.28"
                                        />

                                        <stop
                                            offset="100%"
                                            stopColor="#7C3CFF"
                                            stopOpacity="0.12"
                                        />
                                    </linearGradient>

                                    <filter
                                        id="HowItWorksIntroGlow"
                                        x="-30%"
                                        y="-100%"
                                        width="160%"
                                        height="300%"
                                    >
                                        <feGaussianBlur
                                            stdDeviation="2.1"
                                            result="blur"
                                        />

                                        <feMerge>
                                            <feMergeNode in="blur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>

                                {/* Main curve */}
                                <path
                                    d="M4 8 C25 45 78 62 130 56 C165 52 192 39 214 16"
                                    stroke="url(#HowItWorksIntroCurve)"
                                    strokeWidth="1.05"
                                    filter="url(#HowItWorksIntroGlow)"
                                />

                                {/* Secondary curve */}
                                <path
                                    d="M6 12 C29 40 78 54 128 50 C163 46 188 35 208 17"
                                    stroke="#19D3FF"
                                    strokeWidth="0.55"
                                    strokeOpacity="0.10"
                                />

                                {/* Start */}
                                <circle
                                    cx="4"
                                    cy="8"
                                    r="2.2"
                                    fill="#19D3FF"
                                />

                                {/* Moving signal */}
                                <circle
                                    cx="4"
                                    cy="8"
                                    r="2.3"
                                    fill="#D9FBFF"
                                    className="how-it-works-intro-dot"
                                />

                                {/* End */}
                                <circle
                                    cx="214"
                                    cy="16"
                                    r="2.6"
                                    fill="#19D3FF"
                                    className="how-it-works-end-glow"
                                />

                                {/* Arrow */}
                                <path
                                    d="M207 12.5 L214 16 L207 19.5"
                                    stroke="#7DEAFF"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* =================================================
                        PROCESS
                    ================================================= */}

                    <div className="relative min-w-0">
                        <div className="grid grid-cols-[repeat(5,minmax(0,1fr))_52px] items-start gap-4 xl:gap-5">
                            {ProcessData.map((Process, Index) => (
                                <ProcessItem
                                    key={Process.id}
                                    item={Process}
                                    index={Index}
                                    isActive={
                                        ActiveStep === Index
                                    }
                                />
                            ))}

                            {/* =================================================
                                RIGHT PREMIUM ARROW
                            ================================================= */}

                            <button
                                type="button"
                                onClick={HandleNextStep}
                                aria-label="Next process step"
                                className="group relative mt-[1px] flex h-[52px] w-[52px] items-center justify-center rounded-full border border-cyan-300/20 bg-[radial-gradient(circle_at_34%_28%,rgba(39,146,255,0.30),rgba(8,31,70,0.95)_55%,rgba(3,13,31,0.98))] shadow-[0_12px_28px_rgba(0,0,0,0.40),0_0_28px_rgba(22,119,255,0.11),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-200/45 hover:shadow-[0_16px_35px_rgba(0,0,0,0.46),0_0_35px_rgba(25,211,255,0.18),inset_0_1px_0_rgba(255,255,255,0.20)]"
                            >
                                {/* Rear depth */}
                                <span className="absolute inset-[4px] translate-y-[5px] rounded-full bg-[#020B20]/90" />

                                {/* Outer ring */}
                                <span className="absolute -inset-[5px] rounded-full border border-cyan-300/10 transition-all duration-500 group-hover:border-cyan-300/28 group-hover:shadow-[0_0_20px_rgba(25,211,255,0.13)]" />

                                {/* Premium arrow */}
                                <span className="relative z-10 origin-center scale-[0.80] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:scale-[0.88]">
                                    <PremiumIconBadge
                                        icon={ArrowRight}
                                        size="large"
                                    />
                                </span>

                                {/* Reflection */}
                                <span className="pointer-events-none absolute left-[18%] top-[9%] h-[24%] w-[48%] rotate-[25deg] rounded-full bg-white/[0.10] blur-[4px]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* =====================================================
                ANIMATIONS
            ===================================================== */}

            <style>{`
                /*
                 * Every 3D transform is isolated inside the node,
                 * while the number chip gets its own highest plane.
                 */

                .process-node-badge {
                    position: relative;
                    z-index: 10;
                    transform-style: preserve-3d;
                    will-change: transform;
                }

                .process-number-chip {
                    position: absolute;
                    z-index: 9999 !important;
                    isolation: isolate;
                    transform:
                        translate3d(0, 0, 80px)
                        translateZ(80px);
                    transform-style: preserve-3d;
                    backface-visibility: visible;
                    -webkit-transform-style: preserve-3d;
                    -webkit-backface-visibility: visible;
                    pointer-events: none;
                }

                .process-number-chip::before {
                    content: "";
                    position: absolute;
                    inset: -2px;
                    z-index: -1;
                    border-radius: 9999px;
                    background: rgba(25, 211, 255, 0.05);
                    filter: blur(5px);
                }

                /*
                 * Process item controls the visual pop,
                 * but its children retain their own 3D depth.
                 */
                .how-it-works-item {
                    position: relative;
                    min-height: 128px;
                    transform-origin: center top;
                    transform-style: preserve-3d;
                    transition:
                        transform 700ms cubic-bezier(0.16, 1, 0.3, 1),
                        filter 700ms cubic-bezier(0.16, 1, 0.3, 1);
                    will-change: transform;
                }

                .how-it-works-item-active {
                    z-index: 50;
                    transform:
                        perspective(1200px)
                        translate3d(0, -4px, 22px)
                        scale(1.055);
                    filter:
                        drop-shadow(0 14px 20px rgba(0, 0, 0, 0.28))
                        drop-shadow(0 0 14px rgba(25, 211, 255, 0.07));
                }

                .how-it-works-item-active
                    .process-node-badge {
                    transform:
                        translateZ(16px)
                        scale(1.035);
                }

                /*
                 * Keep the number above the enlarged badge.
                 */
                .how-it-works-item-active
                    .process-number-chip {
                    z-index: 99999 !important;
                    transform:
                        translate3d(0, 0, 100px)
                        translateZ(100px)
                        scale(1.02);
                }

                .process-node:hover
                    .process-node-badge {
                    animation:
                        processNodeFlipDrop
                        900ms
                        cubic-bezier(0.16, 1, 0.3, 1);
                }

                .process-node:hover
                    .process-node-ring {
                    transform:
                        scale(1.08)
                        rotate(18deg);
                }

                .process-node-active
                    .premium-icon-badge {
                    filter: brightness(1.16);
                }

                .process-node-signal {
                    animation:
                        processNodeSignal
                        2.1s
                        ease-out
                        infinite;
                }

                .process-number-chip {
                    transition:
                        transform 700ms cubic-bezier(0.16, 1, 0.3, 1),
                        box-shadow 500ms ease,
                        background 500ms ease;
                }

                .process-node:hover
                    .process-number-chip {
                    animation:
                        numberChipFloat
                        700ms
                        cubic-bezier(0.16, 1, 0.3, 1);
                }

                .process-route-flow {
                    animation:
                        processRouteFlow
                        2.4s
                        linear
                        infinite;
                }

                .how-it-works-intro-dot {
                    animation:
                        introDotTravel
                        3.4s
                        ease-in-out
                        infinite;
                }

                .how-it-works-end-glow {
                    animation:
                        introEndPulse
                        2.2s
                        ease-in-out
                        infinite;
                }

                @keyframes processNodeFlipDrop {
                    0% {
                        transform:
                            translate3d(0, 0, 0)
                            rotateX(0deg)
                            rotateY(0deg)
                            scale(1);
                    }

                    18% {
                        transform:
                            translate3d(0, -8px, 12px)
                            rotateX(-22deg)
                            rotateY(7deg)
                            scale(1.04);
                    }

                    38% {
                        transform:
                            translate3d(0, -17px, 21px)
                            rotateX(-78deg)
                            rotateY(12deg)
                            scale(1.08);
                    }

                    55% {
                        transform:
                            translate3d(0, -7px, 12px)
                            rotateX(-145deg)
                            rotateY(8deg)
                            scale(1.04);
                    }

                    70% {
                        transform:
                            translate3d(0, 3px, 4px)
                            rotateX(-180deg)
                            rotateY(3deg)
                            scale(1);
                    }

                    84% {
                        transform:
                            translate3d(0, -3px, 1px)
                            rotateX(-12deg)
                            rotateY(0deg)
                            scale(1.01);
                    }

                    94% {
                        transform:
                            translate3d(0, 2px, 0)
                            rotateX(5deg)
                            rotateY(0deg)
                            scale(0.99);
                    }

                    100% {
                        transform:
                            translate3d(0, 0, 0)
                            rotateX(0deg)
                            rotateY(0deg)
                            scale(1);
                    }
                }

                @keyframes numberChipFloat {
                    0% {
                        transform:
                            translate3d(0, 0, 80px)
                            translateZ(80px)
                            scale(1);
                    }

                    35% {
                        transform:
                            translate3d(2px, -4px, 88px)
                            translateZ(88px)
                            scale(1.1);
                    }

                    70% {
                        transform:
                            translate3d(-1px, 2px, 82px)
                            translateZ(82px)
                            scale(1.02);
                    }

                    100% {
                        transform:
                            translate3d(0, 0, 80px)
                            translateZ(80px)
                            scale(1);
                    }
                }

                @keyframes processRouteFlow {
                    0% {
                        transform: translateX(-8px);
                        opacity: 0;
                    }

                    15% {
                        opacity: 1;
                    }

                    80% {
                        opacity: 1;
                    }

                    100% {
                        transform: translateX(118px);
                        opacity: 0;
                    }
                }

                @keyframes processNodeSignal {
                    0%,
                    100% {
                        transform: scale(0.85);
                        opacity: 0.15;
                    }

                    50% {
                        transform: scale(1.08);
                        opacity: 0.75;
                    }
                }

                @keyframes introDotTravel {
                    0% {
                        transform: translate3d(0, 0, 0);
                        opacity: 0.25;
                    }

                    15% {
                        opacity: 1;
                    }

                    42% {
                        transform: translate3d(65px, 34px, 0);
                        opacity: 1;
                    }

                    68% {
                        transform: translate3d(126px, 54px, 0);
                        opacity: 0.85;
                    }

                    100% {
                        transform: translate3d(208px, 8px, 0);
                        opacity: 0.35;
                    }
                }

                @keyframes introEndPulse {
                    0%,
                    100% {
                        opacity: 0.35;
                        filter: drop-shadow(
                            0 0 2px
                            rgba(25,211,255,0.25)
                        );
                    }

                    50% {
                        opacity: 1;
                        filter: drop-shadow(
                            0 0 9px
                            rgba(25,211,255,0.85)
                        );
                    }
                }

                @media (max-width: 1100px) {
                    .how-it-works-item-active {
                        transform:
                            perspective(1100px)
                            translate3d(0, -3px, 16px)
                            scale(1.04);
                    }

                    .how-it-works-item-active
                        .process-number-chip {
                        transform:
                            translate3d(0, 0, 92px)
                            translateZ(92px)
                            scale(1.02);
                    }
                }

                @media (max-width: 767px) {
                    .process-route-flow,
                    .how-it-works-intro-dot,
                    .how-it-works-end-glow {
                        display: none;
                    }

                    .how-it-works-item {
                        min-height: 118px;
                    }

                    .how-it-works-item-active {
                        transform:
                            translateY(-2px)
                            scale(1.025);
                    }

                    .how-it-works-item-active
                        .process-number-chip {
                        transform:
                            translate3d(0, 0, 80px)
                            translateZ(80px)
                            scale(1.02);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .process-node:hover
                        .process-node-badge,
                    .process-node:hover
                        .process-number-chip,
                    .process-route-flow,
                    .process-node-signal,
                    .how-it-works-intro-dot,
                    .how-it-works-end-glow {
                        animation: none !important;
                    }

                    .how-it-works-item,
                    .how-it-works-item-active,
                    .process-node-badge {
                        transform: none !important;
                    }

                    .process-number-chip,
                    .how-it-works-item-active
                        .process-number-chip {
                        transform:
                            translateZ(40px) !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default HowItWorks;