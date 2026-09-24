// AboutImpact.jsx
// InnoInventive About Page - Impact Section
// Premium glass section + flat 2D progressive growth graph
// ============================================================

import { Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import PremiumButton from "../../../components/UI/PremiumButton";

/* =========================================================
   CONTENT
========================================================= */

const ImpactContent = {
    eyebrow: "Built For Impact",
    headingPrimary: "You've seen how we help",
    headingAccent: "intelligent systems",
    headingSecondary: "create measurable momentum.",
    description:
        "From faster reporting to meaningful operational improvements, our engineering goes beyond code to create systems that deliver measurable business value.",
    buttonLabel: "Explore Our Growth Systems",
};

/* =========================================================
   GRAPH DATA
========================================================= */

const GrowthBars = [
    {
        id: "signal",
        height: 28,
        color: "cyan",
        delay: 0,
        label: "Signal",
        detail: "Find the signal",
    },
    {
        id: "structure",
        height: 41,
        color: "blue",
        delay: 130,
        label: "Structure",
        detail: "Build the system",
    },
    {
        id: "motion",
        height: 56,
        color: "cyanBlue",
        delay: 260,
        label: "Motion",
        detail: "Automate the flow",
    },
    {
        id: "scale",
        height: 74,
        color: "ice",
        delay: 390,
        label: "Scale",
        detail: "Multiply output",
    },
    {
        id: "impact",
        height: 89,
        color: "violet",
        delay: 520,
        label: "Impact",
        detail: "Measure the result",
    },
];

/* =========================================================
   FLAT GROWTH GRAPH
========================================================= */

const GrowthGraph = ({ isVisible }) => {
    return (
        <div className="relative h-[275px] w-full sm:h-[300px]">
            {/* Light atmosphere only */}
            <div className="pointer-events-none absolute left-[20%] top-[12%] h-[180px] w-[280px] rounded-full bg-cyan-300/[0.035] blur-[80px]" />

            <div className="pointer-events-none absolute right-[4%] top-[4%] h-[190px] w-[220px] rounded-full bg-violet-500/[0.035] blur-[80px]" />

            <div className="absolute inset-x-[4%] bottom-[7%] top-[10%]">
                {/* Grid */}
                <div className="pointer-events-none absolute inset-0">
                    {[20, 40, 60, 80].map((Position) => (
                        <span
                            key={Position}
                            className="absolute left-0 right-0 h-px bg-white/[0.035]"
                            style={{ top: `${Position}%` }}
                        />
                    ))}

                    {[10, 30, 50, 70, 90].map((Position) => (
                        <span
                            key={Position}
                            className="absolute bottom-0 top-0 w-px bg-white/[0.018]"
                            style={{ left: `${Position}%` }}
                        />
                    ))}
                </div>

                {/* Baseline */}
                <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

                {/* Bars */}
                <div className="absolute bottom-0 left-[5%] right-[8%] top-[4%] flex items-end justify-between gap-[7%]">
                    {GrowthBars.map((Bar) => (
                        <div
                            key={Bar.id}
                            className={[
                                "impact-flat-bar relative w-[11.5%]",
                                `impact-flat-bar-${Bar.color}`,
                                isVisible ? "impact-flat-bar-visible" : "",
                            ].join(" ")}
                            style={{
                                "--bar-height": `${Bar.height}%`,
                                "--bar-delay": `${Bar.delay}ms`,
                            }}
                        >
                            <div className="impact-bar-interaction absolute inset-0">
                                <div className="impact-bar-tooltip pointer-events-none absolute bottom-full left-1/2 z-50 -translate-x-1/2 translate-y-2 [perspective:800px]">
                                    <div className="impact-bar-tooltip-card relative min-w-[96px] overflow-hidden rounded-xl border border-white/[0.16] bg-[linear-gradient(135deg,rgba(19,54,107,0.94),rgba(7,22,51,0.96)_52%,rgba(56,30,126,0.92))] px-3 py-2 text-center shadow-[0_16px_28px_rgba(0,0,0,0.32),0_0_24px_rgba(25,211,255,0.10)] backdrop-blur-xl">
                                        <span className="absolute inset-x-2 top-[1px] h-px rounded-full bg-gradient-to-r from-transparent via-white/55 to-transparent" />
                                        <span className="absolute -inset-6 rounded-full bg-cyan-300/[0.07] blur-2xl" />
                                        <span className="absolute bottom-[-2px] left-1/2 h-1 w-7 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 blur-[1px]" />
                                        <span className="relative block text-[7px] font-semibold uppercase tracking-[0.24em] text-white/90">
                                            {Bar.label}
                                        </span>
                                        <span className="relative mt-1 block whitespace-nowrap text-[6px] font-medium tracking-[0.08em] text-cyan-100/55">
                                            {Bar.detail}
                                        </span>
                                    </div>
                                    <span className="impact-bar-tooltip-tip absolute left-1/2 top-full h-2.5 w-2.5 -translate-x-1/2 -translate-y-[5px] rotate-45 border-r border-b border-white/[0.14] bg-[#0A2148]" />
                                </div>

                                <span className="impact-flat-bar-body absolute inset-0 overflow-hidden rounded-t-[9px] border" />
                                <span className="pointer-events-none absolute inset-x-[12%] top-[7%] h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                                <span className="impact-flat-bar-shine pointer-events-none absolute left-[12%] top-[7%] h-[66%] w-[15%] rounded-full bg-white/[0.18] blur-[6px]" />
                                <span className="impact-flat-bar-sweep pointer-events-none absolute left-[-60%] top-[-10%] h-[125%] w-[22%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/[0.22] to-transparent" />
                                <span className="pointer-events-none absolute left-[8%] right-[8%] top-[30%] h-px bg-white/[0.045]" />
                                <span className="pointer-events-none absolute left-[8%] right-[8%] top-[57%] h-px bg-white/[0.035]" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Progressive trend */}
                <svg
                    viewBox="0 0 620 260"
                    className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible"
                    fill="none"
                >
                    <defs>
                        <linearGradient
                            id="impactTrendGradient"
                            x1="0"
                            y1="244"
                            x2="620"
                            y2="18"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#1677FF" />
                            <stop offset="0.28" stopColor="#19D3FF" />
                            <stop offset="0.58" stopColor="#4F93FF" />
                            <stop offset="0.8" stopColor="#9BB8FF" />
                            <stop offset="1" stopColor="#7C3CFF" />
                        </linearGradient>

                        <filter
                            id="impactTrendGlow"
                            x="-20%"
                            y="-20%"
                            width="140%"
                            height="140%"
                        >
                            <feGaussianBlur stdDeviation="5" />
                        </filter>

                        <marker
                            id="impactTrendArrow"
                            markerWidth="12"
                            markerHeight="12"
                            refX="10"
                            refY="6"
                            orient="auto"
                            markerUnits="strokeWidth"
                        >
                            <path
                                d="M1 1 L11 6 L1 11 Z"
                                fill="#7C3CFF"
                            />
                        </marker>
                    </defs>

                    {/* Wavy glow */}
                    <path
                        d="M20 238
                           C72 236 80 214 124 221
                           C166 228 176 198 216 205
                           C258 212 272 179 312 188
                           C354 198 368 148 408 159
                           C452 171 463 116 505 126
                           C542 135 558 70 598 32"
                        stroke="rgba(25,211,255,0.11)"
                        strokeWidth="11"
                        strokeLinecap="round"
                        filter="url(#impactTrendGlow)"
                        className={isVisible ? "opacity-100" : "opacity-0"}
                        style={{ transition: "opacity 300ms ease" }}
                    />

                    {/* Main wavy growth line */}
                    <path
                        d="M20 238
                           C72 236 80 214 124 221
                           C166 228 176 198 216 205
                           C258 212 272 179 312 188
                           C354 198 368 148 408 159
                           C452 171 463 116 505 126
                           C542 135 558 70 598 32"
                        stroke="url(#impactTrendGradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray="5 8"
                        markerEnd="url(#impactTrendArrow)"
                        className={[
                            "impact-trend-line",
                            isVisible ? "impact-trend-line-visible" : "",
                        ].join(" ")}
                    />

                    {/* Start = 0 */}
                    <circle
                        cx="20"
                        cy="238"
                        r="4"
                        fill="#1677FF"
                        className={[
                            "impact-trend-start",
                            isVisible ? "impact-trend-point-visible" : "",
                        ].join(" ")}
                    />

                    <circle
                        cx="20"
                        cy="238"
                        r="10"
                        fill="rgba(22,119,255,0.12)"
                        className={[
                            "impact-trend-start-glow",
                            isVisible ? "impact-trend-point-visible" : "",
                        ].join(" ")}
                    />

                    {/* Endpoint */}
                    <circle
                        cx="598"
                        cy="32"
                        r="4"
                        fill="#7C3CFF"
                        className={[
                            "impact-trend-endpoint",
                            isVisible ? "impact-trend-point-visible" : "",
                        ].join(" ")}
                    />
                </svg>

                {/* Signal points */}
                <span className="impact-graph-dot impact-graph-dot-one" />
                <span className="impact-graph-dot impact-graph-dot-two" />
                <span className="impact-graph-dot impact-graph-dot-three" />
            </div>

            <div className="absolute bottom-[0%] left-[4%] z-30 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-2.5 py-1 text-[5px] font-semibold uppercase tracking-[0.24em] text-cyan-200/90 shadow-[0_0_18px_rgba(25,211,255,0.10)] backdrop-blur-md">
                INPUT
            </div>

            <div className="absolute bottom-[0%] right-[7%] z-30 rounded-full border border-violet-300/20 bg-violet-300/[0.07] px-2.5 py-1 text-[5px] font-semibold uppercase tracking-[0.24em] text-violet-100/90 shadow-[0_0_18px_rgba(124,60,255,0.10)] backdrop-blur-md">
                OUTPUT
            </div>
        </div>
    );
};

/* =========================================================
   MAIN SECTION
========================================================= */

const AboutImpact = () => {
    const SectionReference = useRef(null);
    const [HasEntered, SetHasEntered] = useState(false);

    useEffect(() => {
        const SectionElement = SectionReference.current;

        if (!SectionElement) {
            return undefined;
        }

        const Observer = new IntersectionObserver(
            ([Entry]) => {
                if (Entry.isIntersecting) {
                    SetHasEntered(true);
                    Observer.disconnect();
                }
            },
            { threshold: 0.3 },
        );

        Observer.observe(SectionElement);

        return () => Observer.disconnect();
    }, []);

    return (
        <section
            ref={SectionReference}
            id="impact"
            className="relative w-full overflow-hidden bg-[#061633] px-6 py-0 text-white lg:px-8 lg:pb-18"
        >
            <div className="mx-auto max-w-[1400px]">
                <div className="impact-main-card relative overflow-hidden rounded-[26px] border border-white/[0.10] bg-white/[0.035] shadow-[0_34px_100px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
                    {/* Glass reflections */}
                    <span className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

                    <span className="pointer-events-none absolute right-[10%] top-[-30%] h-[260px] w-[260px] rounded-full bg-cyan-300/[0.055] blur-[100px]" />

                    <span className="pointer-events-none absolute left-[7%] top-[-28%] h-[240px] w-[300px] rounded-full bg-blue-500/[0.045] blur-[100px]" />

                    <span className="pointer-events-none absolute right-[-8%] bottom-[-20%] h-[250px] w-[250px] rounded-full bg-violet-500/[0.045] blur-[100px]" />

                    <div className="relative grid min-h-[350px] lg:grid-cols-[0.96fr_1.04fr]">
                        {/* LEFT */}
                        <div className="relative z-10 flex flex-col justify-center px-7 py-10 sm:px-10 lg:px-12 lg:py-12">
                            <div className="mb-5 inline-flex w-fit items-center gap-2.5 rounded-full border border-cyan-300/[0.10] bg-cyan-300/[0.025] px-3 py-1.5 backdrop-blur-md">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="absolute inset-0 animate-ping rounded-full bg-cyan-300/40" />
                                    <span className="relative h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_9px_rgba(25,211,255,0.8)]" />
                                </span>

                                <Sparkles
                                    size={9}
                                    strokeWidth={1.7}
                                    className="text-cyan-300"
                                />

                                <span className="text-[6px] font-semibold uppercase tracking-[0.23em] text-cyan-100/55">
                                    {ImpactContent.eyebrow}
                                </span>
                            </div>

                            <h2 className="max-w-[520px] text-[29px] font-medium leading-[1.06] tracking-[-0.04em] text-white sm:text-[34px] lg:text-[38px]">
                                {ImpactContent.headingPrimary}

                                <span className="block">
                                    <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text font-semibold text-transparent">
                                        {ImpactContent.headingAccent}
                                    </span>{" "}
                                    {ImpactContent.headingSecondary}
                                </span>
                            </h2>

                            <p className="mt-5 max-w-[500px] text-[10px] leading-[1.8] text-white/43 sm:text-[11px]">
                                {ImpactContent.description}
                            </p>

                            <div className="mt-7">
                                <PremiumButton
                                    label={ImpactContent.buttonLabel}
                                    to="/contact"
                                />
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="pointer-events-none absolute bottom-7 left-1/2 top-7 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-300/[0.15] to-transparent lg:block" />

                        {/* RIGHT GRAPH ONLY — no nested card */}
                        <div className="relative z-10 flex min-h-[320px] items-center overflow-visible pr-4 sm:pr-6 lg:min-h-[350px] lg:pr-9">
                            <GrowthGraph isVisible={HasEntered} />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .impact-main-card {
                    isolation: isolate;
                }

                .impact-flat-bar {
                    height: var(--bar-height);
                    transform: translateY(34%) scaleY(0.02);
                    transform-origin: center bottom;
                    opacity: 0;
                }

                .impact-flat-bar-visible {
                    animation:
                        impactFlatBarRise
                        900ms
                        cubic-bezier(0.16,1,0.3,1)
                        forwards;
                    animation-delay: var(--bar-delay);
                }

                /* =====================================================
                   BAR HOVER — SPRING / RUBBER RESPONSE
                ===================================================== */

                .impact-bar-interaction {
                    transform-origin: center bottom;
                    transition:
                        transform 720ms cubic-bezier(0.22,1.45,0.36,1),
                        filter 320ms ease;
                    will-change: transform;
                }

                .impact-flat-bar:hover {
                    z-index: 60;
                }

                .impact-flat-bar:hover .impact-bar-interaction {
                    transform:
                        translateY(-9px)
                        scale3d(1.08,1.07,1);
                    filter:
                        brightness(1.12)
                        drop-shadow(0 14px 18px rgba(25,211,255,0.14));
                }

                .impact-bar-tooltip {
                    transform-origin: center bottom;
                    opacity: 0;
                    transform:
                        translate(-50%, 12px)
                        scale3d(0.78,0.78,0.78)
                        rotateX(18deg);
                    transition:
                        opacity 280ms ease,
                        transform 520ms cubic-bezier(0.22,1.38,0.36,1);
                    will-change: transform, opacity;
                    z-index: 9999;
                }

                .impact-flat-bar:hover .impact-bar-tooltip {
                    opacity: 1;
                    transform:
                        translate(-50%, -3px)
                        scale3d(1,1,1)
                        rotateX(0deg);
                }

                /* Keep the edge tooltips inside the graph/card bounds. */
                .impact-flat-bar:first-child .impact-bar-tooltip {
                    left: 0;
                    transform-origin: left bottom;
                    transform:
                        translate(0, 12px)
                        scale3d(0.78,0.78,0.78)
                        rotateX(18deg);
                }

                .impact-flat-bar:first-child:hover .impact-bar-tooltip {
                    transform:
                        translate(0, -3px)
                        scale3d(1,1,1)
                        rotateX(0deg);
                }

                .impact-flat-bar:last-child .impact-bar-tooltip {
                    left: auto;
                    right: 0;
                    transform-origin: right bottom;
                    transform:
                        translate(0, 12px)
                        scale3d(0.78,0.78,0.78)
                        rotateX(18deg);
                }

                .impact-flat-bar:last-child:hover .impact-bar-tooltip {
                    transform:
                        translate(0, -3px)
                        scale3d(1,1,1)
                        rotateX(0deg);
                }

                .impact-flat-bar:first-child .impact-bar-tooltip-tip {
                    left: 20px;
                    transform: translate(0, -5px) rotate(45deg);
                }

                .impact-flat-bar:last-child .impact-bar-tooltip-tip {
                    left: auto;
                    right: 20px;
                    transform: translate(0, -5px) rotate(45deg);
                }

                .impact-bar-tooltip-card {
                    transform:
                        translateZ(26px)
                        rotateX(5deg);
                    transform-origin: center bottom;
                }

                .impact-flat-bar:hover .impact-bar-tooltip-card {
                    animation: impactTooltipFloat 2.8s ease-in-out 520ms infinite;
                }

                .impact-flat-bar:hover .impact-flat-bar-body {
                    border-color: rgba(255,255,255,0.27);
                    box-shadow:
                        inset 0 1px 0 rgba(255,255,255,0.24),
                        inset 0 -16px 24px rgba(0,0,0,0.10),
                        0 20px 34px rgba(0,0,0,0.20),
                        0 0 24px rgba(25,211,255,0.10);
                }

                .impact-flat-bar:hover .impact-flat-bar-shine {
                    opacity: 1;
                }

                .impact-flat-bar:hover .impact-flat-bar-sweep {
                    animation-duration: 2.2s;
                }

                .impact-flat-bar-body {
                    background: transparent;
                    box-shadow:
                        inset 0 1px 0 rgba(255,255,255,0.16),
                        inset 0 -16px 24px rgba(0,0,0,0.12),
                        0 14px 26px rgba(0,0,0,0.14);
                    backdrop-filter: blur(5px);
                }

                .impact-flat-bar-cyan .impact-flat-bar-body {
                    border-color: rgba(25,211,255,0.18);
                    background:
                        linear-gradient(
                            180deg,
                            rgba(25,211,255,0.36),
                            rgba(18,112,203,0.24) 55%,
                            rgba(5,34,76,0.34)
                        );
                }

                .impact-flat-bar-blue .impact-flat-bar-body {
                    border-color: rgba(79,146,255,0.18);
                    background:
                        linear-gradient(
                            180deg,
                            rgba(57,132,242,0.40),
                            rgba(20,83,180,0.25) 55%,
                            rgba(5,29,70,0.36)
                        );
                }

                .impact-flat-bar-cyanBlue .impact-flat-bar-body {
                    border-color: rgba(50,205,255,0.20);
                    background:
                        linear-gradient(
                            180deg,
                            rgba(25,211,255,0.43),
                            rgba(25,114,214,0.28) 55%,
                            rgba(5,31,73,0.38)
                        );
                }

                .impact-flat-bar-ice .impact-flat-bar-body {
                    border-color: rgba(207,239,255,0.24);
                    background:
                        linear-gradient(
                            180deg,
                            rgba(232,250,255,0.94),
                            rgba(109,202,243,0.56) 48%,
                            rgba(30,108,196,0.30)
                        );
                    box-shadow:
                        inset 0 1px 0 rgba(255,255,255,0.36),
                        inset 0 -16px 24px rgba(8,65,133,0.18),
                        0 14px 26px rgba(24,98,177,0.15);
                }

                .impact-flat-bar-violet .impact-flat-bar-body {
                    border-color: rgba(141,120,255,0.20);
                    background:
                        linear-gradient(
                            180deg,
                            rgba(97,110,242,0.44),
                            rgba(76,67,187,0.30) 52%,
                            rgba(39,26,96,0.42)
                        );
                }

                .impact-flat-bar-shine {
                    opacity: 0.75;
                }

                .impact-flat-bar-sweep {
                    animation:
                        impactFlatBarSweep
                        6.6s
                        ease-in-out
                        infinite;
                }

                .impact-trend-line {
                    stroke-dasharray: 900;
                    stroke-dashoffset: 900;
                    opacity: 0;
                }

                .impact-trend-line-visible {
                    animation:
                        impactTrendDraw
                        1.9s
                        cubic-bezier(0.16,1,0.3,1)
                        650ms forwards;
                }

                .impact-trend-start,
                .impact-trend-endpoint,
                .impact-trend-start-glow {
                    opacity: 0;
                    transform-box: fill-box;
                    transform-origin: center;
                }

                .impact-trend-start {
                    fill: #1677FF;
                }

                .impact-trend-endpoint {
                    fill: #7C3CFF;
                }

                .impact-trend-start-glow {
                    fill: rgba(22,119,255,0.12);
                }

                .impact-trend-point-visible {
                    animation:
                        impactTrendPoint
                        550ms
                        ease-out
                        1.9s
                        forwards;
                }

                .impact-graph-dot {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    border-radius: 999px;
                    background: #19D3FF;
                    box-shadow: 0 0 11px rgba(25,211,255,0.85);
                    animation:
                        impactGraphDot
                        4.8s
                        ease-in-out
                        infinite;
                }

                .impact-graph-dot-one {
                    left: 17%;
                    top: 46%;
                }

                .impact-graph-dot-two {
                    left: 49%;
                    top: 27%;
                    background: #1677FF;
                    box-shadow: 0 0 11px rgba(22,119,255,0.85);
                    animation-delay: -1.2s;
                }

                .impact-graph-dot-three {
                    right: 17%;
                    top: 15%;
                    background: #7C3CFF;
                    box-shadow: 0 0 11px rgba(124,60,255,0.9);
                    animation-delay: -2.7s;
                }

                @keyframes impactFlatBarRise {
                    0% {
                        transform: translateY(34%) scaleY(0.02);
                        opacity: 0;
                    }
                    62% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(0) scaleY(1);
                        opacity: 1;
                    }
                }

                @keyframes impactFlatBarSweep {
                    0%, 64% {
                        left: -60%;
                        opacity: 0;
                    }
                    72% {
                        opacity: 1;
                    }
                    100% {
                        left: 125%;
                        opacity: 0;
                    }
                }

                @keyframes impactTrendDraw {
                    from {
                        stroke-dashoffset: 900;
                        opacity: 0;
                    }
                    to {
                        stroke-dashoffset: 0;
                        opacity: 0.96;
                    }
                }

                @keyframes impactTrendPoint {
                    from {
                        opacity: 0;
                        transform: scale(0.35);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes impactTooltipFloat {
                    0%, 100% {
                        transform: translateZ(26px) rotateX(5deg) translateY(0);
                    }
                    50% {
                        transform: translateZ(38px) rotateX(1deg) translateY(-3px);
                    }
                }

                @keyframes impactGraphDot {
                    0%, 100% {
                        transform: scale(0.65);
                        opacity: 0.25;
                    }
                    50% {
                        transform: scale(1.25);
                        opacity: 1;
                    }
                }

                @media (max-width: 767px) {
                    .impact-main-card {
                        border-radius: 22px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .impact-flat-bar-visible,
                    .impact-flat-bar-sweep,
                    .impact-trend-line-visible,
                    .impact-trend-point-visible,
                    .impact-graph-dot {
                        animation: none !important;
                    }

                    .impact-bar-interaction,
                    .impact-bar-tooltip {
                        transition: none !important;
                    }

                    .impact-flat-bar:hover .impact-bar-tooltip-card {
                        animation: none !important;
                    }

                    .impact-flat-bar {
                        transform: none;
                        opacity: 1;
                    }

                    .impact-trend-line {
                        stroke-dashoffset: 0;
                        opacity: 0.96;
                    }

                    .impact-trend-start,
                    .impact-trend-endpoint,
                    .impact-trend-start-glow {
                        opacity: 1;
                    }
                }
            `}</style>
        </section>
    );
};

export default AboutImpact;
