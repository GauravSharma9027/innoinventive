
// AboutPrinciples.jsx
// InnoInventive About Page - Principles Section
//
// LOCKED ROW 1
// Left  -> Compact heading
// Right -> 3 premium 3D cards
// ============================================================

import {
    BarChart3,
    BrainCircuit,
    Sparkles,
    Workflow,
} from "lucide-react";

import PremiumIconBadge from "../../../components/UI/PremiumIconBadge";

/* =========================================================
   SECTION CONTENT
========================================================= */

const PrinciplesContent = {
    sectionNumber: "02",
    eyebrow: "What We Believe",
    headingPrimary: "Our",
    headingAccent: "Principles",
    headingSecondary: "Drive Our Work",
    description:
        "We don’t just build solutions — we build with purpose. Our core principles guide how we think, work and create value for every business we partner with.",
    footerText: "Same vision. Different perspective.",
};

/* =========================================================
   PRINCIPLES DATA
========================================================= */

const PrinciplesData = [
    {
        id: "understand",
        number: "01",
        title: "Understand Before Building",
        description:
            "We take time to understand your business, challenges and goals — because the right solution starts with the right questions.",
        icon: BrainCircuit,
        status: "INPUT ANALYZED",
        systemLabel: "DISCOVERY",
        systemValue: "INTENT",
        pulse: "DISCOVER",
    },
    {
        id: "automate",
        number: "02",
        title: "Automate What Matters",
        description:
            "We focus on automating the right processes — the ones that save time, reduce effort and create real impact.",
        icon: Workflow,
        status: "FLOW ACTIVE",
        systemLabel: "PROCESS",
        systemValue: "OPTIMIZE",
        pulse: "PROCESS",
    },
    {
        id: "future",
        number: "03",
        title: "Build For What Comes Next",
        description:
            "We design scalable, future-ready solutions that grow with your business and keep you ahead of the curve.",
        icon: BarChart3,
        status: "SYSTEM READY",
        systemLabel: "ARCHITECTURE",
        systemValue: "SCALE",
        pulse: "SCALE",
    },
];

/* =========================================================
   HORIZONTAL AUTOMATION CONNECTOR
========================================================= */

const PrincipleAutomationConnector = ({ index }) => {
    return (
        <div
            className="principle-automation-connector relative flex min-w-[46px] flex-1 items-center justify-center"
            aria-hidden="true"
        >
            <span className="absolute left-0 right-0 h-px bg-gradient-to-r from-cyan-300/12 via-cyan-300/50 to-blue-400/12" />

            <span className="absolute left-0 right-0 h-[5px] rounded-full bg-cyan-300/[0.025] blur-[5px]" />

            <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_9px_rgba(25,211,255,0.9)]" />

            <span
                className={[
                    "principle-signal-dot absolute left-0 h-1 w-1 rounded-full bg-white shadow-[0_0_8px_rgba(25,211,255,0.95)]",
                    `principle-signal-dot-${index}`,
                ].join(" ")}
            />
        </div>
    );
};

/* =========================================================
   CARD REACTOR
========================================================= */

const PrincipleCardReactor = ({ icon: Icon }) => {
    return (
        <div className="principle-reactor relative flex h-[78px] w-[78px] items-center justify-center">
            <span className="absolute -inset-6 rounded-full bg-cyan-300/[0.045] blur-2xl" />

            <span className="principle-reactor-ring-one absolute inset-0 rounded-full border border-cyan-300/[0.12] [transform:rotateX(68deg)]" />

            <span className="principle-reactor-ring-two absolute inset-[9px] rounded-full border border-blue-300/[0.09] [transform:rotateX(68deg)_rotateZ(22deg)]" />

            <span className="principle-reactor-ring-three absolute inset-[17px] rounded-full border border-violet-300/[0.08] border-dashed [transform:rotateX(70deg)_rotateZ(-25deg)]" />

            <span className="principle-reactor-core absolute h-[50px] w-[50px] rounded-full border border-cyan-300/[0.08] bg-[#061B3A]/70 backdrop-blur-md" />

            <span className="principle-reactor-pulse absolute h-[62px] w-[62px] rounded-full border border-cyan-300/[0.05]" />

            <div className="relative z-20">
                <PremiumIconBadge
                    icon={Icon}
                    size="default"
                />
            </div>

            <span className="principle-reactor-scan pointer-events-none absolute left-1/2 top-[6%] h-[28px] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-200/60 to-transparent" />
        </div>
    );
};

/* =========================================================
   TELEMETRY
========================================================= */

const PrincipleTelemetry = ({ principle }) => {
    return (
        <div className="absolute bottom-3 left-3.5 right-3.5 z-20">
            <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-1.5">
                    <span className="relative flex h-1 w-1 shrink-0">
                        <span className="absolute inset-0 animate-ping rounded-full bg-cyan-300/35" />

                        <span className="relative h-1 w-1 rounded-full bg-cyan-300" />
                    </span>

                    <span className="truncate text-[4.5px] font-medium uppercase tracking-[0.13em] text-white/28">
                        AUTOMATION LAYER
                    </span>
                </div>

                <span className="shrink-0 text-[4.5px] font-semibold uppercase tracking-[0.11em] text-cyan-200/40">
                    {principle.systemLabel}
                </span>
            </div>

            <div className="relative mt-2 h-[3px] overflow-hidden rounded-full bg-white/[0.045]">
                <span className="absolute inset-y-0 left-0 w-[62%] rounded-full bg-gradient-to-r from-cyan-300/20 via-blue-400/15 to-transparent" />

                <span
                    className={[
                        "principle-telemetry-energy absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 shadow-[0_0_9px_rgba(25,211,255,0.35)]",
                        `principle-telemetry-energy-${principle.number}`,
                    ].join(" ")}
                />

                <span className="absolute left-[20%] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-cyan-300/30" />

                <span className="absolute left-[44%] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-blue-300/30" />

                <span className="absolute left-[72%] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-violet-300/25" />
            </div>

            <div className="mt-1.5 flex items-center justify-between">
                <span className="font-mono text-[4px] uppercase tracking-[0.12em] text-white/18">
                    {principle.pulse}
                </span>

                <span className="font-mono text-[4px] text-cyan-300/35">
                    {principle.systemValue}
                </span>
            </div>
        </div>
    );
};

/* =========================================================
   PRINCIPLE CARD
========================================================= */

const PrincipleCard = ({ principle, index }) => {
    const PrincipleIcon = principle.icon;

    return (
        <article
            className={[
                "group principle-card relative min-w-0 [perspective:1600px]",
                `principle-card-wave-${index}`,
            ].join(" ")}
        >
            <div className="principle-card-depth absolute inset-x-1 bottom-[-7px] top-2 rounded-[21px] border border-blue-400/[0.055] bg-[#020B20]/95 shadow-[0_18px_34px_rgba(0,0,0,0.42)] transition-all duration-500 group-hover:translate-y-[4px]" />

            <span className="pointer-events-none absolute -inset-3 rounded-[27px] bg-cyan-400/[0.018] blur-xl transition-all duration-500 group-hover:bg-cyan-400/[0.065]" />

            <div className="principle-card-body relative h-[232px] overflow-hidden rounded-[20px] border border-cyan-300/[0.15] bg-[linear-gradient(145deg,rgba(12,48,98,0.97),rgba(3,19,45,0.99))] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.11),inset_0_-18px_28px_rgba(0,5,20,0.25),0_20px_42px_rgba(0,0,0,0.28)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-cyan-300/32 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_28px_54px_rgba(0,0,0,0.38),0_0_34px_rgba(25,211,255,0.09)] [transform-style:preserve-3d]">
                <div className="pointer-events-none absolute inset-0 opacity-[0.022] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:20px_20px]" />

                <span className="pointer-events-none absolute inset-[5px] rounded-[15px] border border-white/[0.025]" />

                <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

                <span className="pointer-events-none absolute right-[8%] top-[8%] h-[65px] w-[65px] rounded-full bg-cyan-300/[0.04] blur-[28px]" />

                {/* Header */}
                <div className="relative z-30 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[8px] font-semibold tracking-[0.16em] text-cyan-300/80">
                            {principle.number}
                        </span>

                        <span className="h-px w-6 bg-gradient-to-r from-cyan-300/60 to-transparent" />
                    </div>

                    <div className="flex items-center gap-1.5 rounded-full border border-emerald-300/10 bg-emerald-300/[0.028] px-2 py-1 backdrop-blur-sm">
                        <span className="relative flex h-1 w-1">
                            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-300/40" />

                            <span className="relative h-1 w-1 rounded-full bg-emerald-300 shadow-[0_0_5px_rgba(52,211,153,0.7)]" />
                        </span>

                        <span className="text-[4.5px] font-semibold uppercase tracking-[0.12em] text-emerald-100/52">
                            {principle.status}
                        </span>
                    </div>
                </div>

                {/* Reactor */}
                <div className="relative z-20 mt-2.5 flex justify-center">
                    <PrincipleCardReactor icon={PrincipleIcon} />
                </div>

                {/* Title */}
                <div className="relative z-20 -mt-1 text-center">
                    <h3 className="mx-auto max-w-[185px] text-[14px] font-semibold leading-[1.12] tracking-[-0.025em] text-white sm:text-[15px]">
                        {principle.title}
                    </h3>

                    <div className="mt-1.5 flex items-center justify-center gap-2">
                        <span className="h-px w-3 bg-cyan-300/18" />

                        <span className="text-[5px] font-semibold uppercase tracking-[0.15em] text-cyan-100/25">
                            Intelligent principle
                        </span>

                        <span className="h-px w-3 bg-cyan-300/18" />
                    </div>
                </div>

                {/* Telemetry */}
                <PrincipleTelemetry principle={principle} />

                {/* Sweep */}
                <span className="principle-card-sweep pointer-events-none absolute left-[-28%] top-[-15%] z-30 h-[145%] w-[24%] rotate-[20deg] bg-gradient-to-r from-transparent via-white/[0.075] to-transparent opacity-0" />

                <span className="pointer-events-none absolute right-0 top-[16%] h-[60%] w-px bg-gradient-to-b from-transparent via-cyan-300/20 to-transparent" />
            </div>
        </article>
    );
};

/* =========================================================
   MAIN SECTION
========================================================= */

const AboutPrinciples = () => {
    return (
        <section
            id="principles"
            className="relative w-full overflow-hidden bg-[#061633] text-white"
        >
            {/* =================================================
                BACKGROUND
            ================================================= */}

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-8%] top-[12%] h-[280px] w-[280px] rounded-full bg-cyan-400/[0.012] blur-[120px]" />

                <div className="absolute right-[-8%] top-[45%] h-[320px] w-[320px] rounded-full bg-blue-500/[0.018] blur-[130px]" />

                <div className="absolute inset-0 opacity-[0.005] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:72px_72px]" />
            </div>

            {/* =================================================
                MASTER CONTAINER
            ================================================= */}

            <div className="relative z-20 mx-auto w-full max-w-[1400px] px-6 py-14 lg:px-8 lg:py-16">

                {/* =================================================
                    ROW 1
                    LOCKED
                ================================================= */}

                <div className="grid items-start gap-10 lg:grid-cols-[0.72fr_1.28fr] xl:gap-14">

                    {/* LEFT HEADING */}

                    <div className="max-w-[390px]">
                        <div className="inline-flex items-center gap-3">
                            <span className="font-mono text-[13px] font-medium tracking-[0.12em] text-cyan-300">
                                {PrinciplesContent.sectionNumber}
                            </span>

                            <span className="h-px w-10 bg-gradient-to-r from-cyan-300 via-blue-400 to-transparent" />

                            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-blue-100/65 sm:text-[10px]">
                                {PrinciplesContent.eyebrow}
                            </span>
                        </div>

                        <h2 className="mt-5 text-[32px] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-[38px] lg:text-[42px]">
                            {PrinciplesContent.headingPrimary}{" "}
                            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                                {PrinciplesContent.headingAccent}
                            </span>

                            <span className="block">
                                {PrinciplesContent.headingSecondary}
                            </span>
                        </h2>

                        <p className="mt-4 max-w-[360px] text-[11px] leading-[1.75] text-blue-100/55 sm:text-[12px]">
                            {PrinciplesContent.description}
                        </p>

                        <div className="mt-7 flex items-center gap-3">
                            <span className="h-px w-12 bg-gradient-to-r from-cyan-300 to-transparent" />

                            <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-cyan-300 sm:text-[8px]">
                                {PrinciplesContent.footerText}
                            </span>
                        </div>
                    </div>

                    {/* RIGHT THREE CARDS */}

                    <div className="relative">
                        <div className="grid items-stretch gap-4 sm:grid-cols-[1fr_46px_1fr_46px_1fr]">
                            <PrincipleCard
                                principle={
                                    PrinciplesData[0]
                                }
                                index={0}
                            />

                            <PrincipleAutomationConnector
                                index={0}
                            />

                            <PrincipleCard
                                principle={
                                    PrinciplesData[1]
                                }
                                index={1}
                            />

                            <PrincipleAutomationConnector
                                index={1}
                            />

                            <PrincipleCard
                                principle={
                                    PrinciplesData[2]
                                }
                                index={2}
                            />
                        </div>

                        <div className="mt-4 hidden items-center justify-center gap-3 sm:flex">
                            <span className="h-px w-8 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

                            <span className="flex items-center gap-1.5 text-[6px] font-semibold uppercase tracking-[0.17em] text-cyan-100/22">
                                <Sparkles
                                    size={8}
                                    strokeWidth={1.7}
                                    className="text-cyan-300/40"
                                />
                                Continuous principle flow
                            </span>

                            <span className="h-px w-8 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
                        </div>
                    </div>
                </div>

            </div>

            {/* =================================================
    ANIMATIONS
================================================= */}

            <style>{`
    .principle-card-wave-0 {
        animation:
            principleCardWave
            6.2s
            ease-in-out
            infinite;
        animation-delay:
            -1.8s;
    }

    /* row 1 animation keyframes */

    @media (prefers-reduced-motion: reduce) {
        .principle-card-wave-0,
        .principle-card-wave-1,
        .principle-card-wave-2 {
            animation: none !important;
        }
    }
`}</style>

        </section>
    );
};

export default AboutPrinciples;