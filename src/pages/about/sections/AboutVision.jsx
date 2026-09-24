// AboutVision.jsx
// InnoInventive About Page - Vision Section
//
// No cards.
// No central 3D engine.
// No images.
// Focus:
// Web Development + Unique UI + AI Automation + Performance.

import {
    Activity,
    ArrowRight,
    Bot,
    Gauge,
    Layers3,
    Sparkles,
    Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import PremiumButton from "../../../components/UI/PremiumButton";
import PremiumIconBadge from "../../../components/UI/PremiumIconBadge";

/* =========================================================
   CONTENT
========================================================= */

const VisionContent = {
    sectionNumber: "05",
    eyebrow: "Built For What’s Next",
    headingPrimary: "Digital experiences should",
    headingAccent: "look intelligent, feel effortless.",
    description:
        "We combine high-end web development, distinctive UI systems, intelligent automation and performance-focused engineering into one connected digital experience.",
    footerText: "UI × AI AUTOMATION × PERFORMANCE",
    buttonLabel: "Build What’s Next",
};

/* =========================================================
   CAPABILITIES
========================================================= */

const VisionCapabilities = [
    {
        id: "ui",
        number: "01",
        label: "UNIQUE UI",
        title: "Designed to be remembered.",
        description:
            "Distinctive interfaces, deliberate motion and polished interactions that make your digital product feel unmistakably yours.",
        icon: Layers3,
        accent: "cyan",
        status: "EXPERIENCE",
    },
    {
        id: "automation",
        number: "02",
        label: "AI AUTOMATION",
        title: "Built to keep moving.",
        description:
            "Intelligent workflows, connected logic and automation that reduce repetitive work and help systems act with context.",
        icon: Bot,
        accent: "blue",
        status: "INTELLIGENCE",
    },
    {
        id: "performance",
        number: "03",
        label: "PERFORMANCE",
        title: "Engineered to feel fast.",
        description:
            "Clean architecture, responsive interactions and performance-aware engineering for smooth experiences across devices.",
        icon: Gauge,
        accent: "violet",
        status: "SPEED",
    },
];

/* =========================================================
   CAPABILITY ITEM
========================================================= */

const VisionCapability = ({ capability, index, isActive, reference }) => {
    const CapabilityIcon = capability.icon;

    const AccentStyles = {
        cyan: {
            text: "text-cyan-300",
            line: "from-cyan-300/65",
            glow: "rgba(25,211,255,0.30)",
            progress:
                "from-cyan-300 via-blue-400 to-cyan-200",
        },
        blue: {
            text: "text-blue-300",
            line: "from-blue-300/65",
            glow: "rgba(22,119,255,0.30)",
            progress:
                "from-blue-300 via-cyan-300 to-violet-300",
        },
        violet: {
            text: "text-violet-300",
            line: "from-violet-300/65",
            glow: "rgba(124,60,255,0.30)",
            progress:
                "from-cyan-300 via-blue-400 to-violet-400",
        },
    };

    const CurrentStyle =
        AccentStyles[capability.accent] ||
        AccentStyles.cyan;

    return (
        <div
            ref={reference}
            data-index={index}
            className={[
                "vision-capability group relative",
                "transition-all duration-700 ease-out",
                isActive ? "-translate-y-1" : "translate-y-0",
            ].join(" ")}
            style={{
                transitionDelay: `${index * 100}ms`,
            }}
        >
            <div className="flex items-start gap-4 sm:gap-5">
                {/* Number */}
                <div className="pt-1">
                    <span
                        className={[
                            "font-mono text-[10px] font-bold tracking-[0.16em] drop-shadow-[0_0_8px_rgba(25,211,255,0.28)]",
                            CurrentStyle.text,
                            isActive ? "opacity-100" : "opacity-80",
                        ].join(" ")}
                    >
                        {capability.number}
                    </span>
                </div>

                {/* Icon */}
                <div className="relative shrink-0">
                    <PremiumIconBadge
                        icon={CapabilityIcon}
                        size="default"
                    />

                    <span
                        className="pointer-events-none absolute -inset-3 rounded-full opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100"
                        style={{
                            background:
                                CurrentStyle.glow,
                        }}
                    />
                </div>

                {/* Main content */}
                <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                        <span
                            className={[
                                "text-[7px] font-bold uppercase tracking-[0.18em] drop-shadow-[0_0_7px_rgba(25,211,255,0.16)]",
                                CurrentStyle.text,
                            ].join(" ")}
                        >
                            {capability.label}
                        </span>

                        <span
                            className={[
                                "h-px w-8 bg-gradient-to-r to-transparent",
                                CurrentStyle.line,
                            ].join(" ")}
                        />

                        <span className="font-mono text-[6px] font-semibold uppercase tracking-[0.14em] text-white/38">
                            {capability.status}
                        </span>
                    </div>

                    <h3 className="mt-1.5 text-[16px] font-semibold tracking-[-0.025em] text-white sm:text-[18px]">
                        {capability.title}
                    </h3>

                    <p className="mt-1.5 max-w-[520px] text-[8px] leading-[1.75] text-white/34 sm:text-[9px]">
                        {capability.description}
                    </p>

                    {/* System line */}
                    <div className="mt-3 max-w-[500px]">
                        <div className="relative h-[3px] overflow-hidden rounded-full bg-white/[0.045]">
                            <span
                                className={[
                                    "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r shadow-[0_0_10px_rgba(25,211,255,0.22)] transition-all duration-700",
                                    isActive ? "w-[92%]" : "w-[64%]",
                                    CurrentStyle.progress,
                                ].join(" ")}
                            />

                            <span className="absolute left-[25%] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-cyan-300/25" />

                            <span className="absolute left-[51%] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-blue-300/25" />

                            <span className="absolute left-[77%] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-violet-300/20" />
                        </div>

                        <div className="mt-1.5 flex items-center justify-between">
                            <span className="font-mono text-[5.5px] font-semibold uppercase tracking-[0.15em] text-white/32">
                                SYSTEM LAYER
                            </span>

                            <div className="flex items-center gap-1.5">
                                <span className="relative flex h-1 w-1">
                                    <span className="absolute inset-0 animate-ping rounded-full bg-cyan-300/55" />

                                    <span className="relative h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_7px_rgba(25,211,255,0.70)]" />
                                </span>

                                <span className="font-mono text-[5.5px] font-bold uppercase tracking-[0.14em] text-cyan-200/65 drop-shadow-[0_0_7px_rgba(25,211,255,0.22)]">
                                    ACTIVE
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right-side mark */}
                <div className="hidden shrink-0 pt-2 sm:block">
                    <span className="relative flex h-8 w-8 items-center justify-center">
                        <span className="absolute inset-0 rounded-full border border-white/[0.045]" />

                        <span
                            className={[
                                "absolute inset-[4px] rounded-full border",
                                capability.accent === "violet"
                                    ? "border-violet-300/15"
                                    : capability.accent === "blue"
                                        ? "border-blue-300/15"
                                        : "border-cyan-300/15",
                            ].join(" ")}
                        />

                        <span
                            className={[
                                "h-1.5 w-1.5 rounded-full shadow-[0_0_10px_currentColor]",
                                CurrentStyle.text,
                            ].join(" ")}
                        />
                    </span>
                </div>
            </div>

            {/* Divider */}
            {index < VisionCapabilities.length - 1 && (
                <div className="mt-5 ml-[44px] h-px bg-gradient-to-r from-white/[0.08] via-cyan-300/[0.07] to-transparent sm:ml-[46px]" />
            )}
        </div>
    );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const AboutVision = () => {
    const CapabilityReferences = useRef([]);
    const [ActiveIndex, SetActiveIndex] = useState(0);

    useEffect(() => {
        const Elements = CapabilityReferences.current.filter(Boolean);

        if (!Elements.length) {
            return undefined;
        }

        const Observer = new IntersectionObserver(
            (Entries) => {
                const VisibleEntries = Entries.filter(
                    (Entry) => Entry.isIntersecting,
                );

                if (!VisibleEntries.length) {
                    return;
                }

                const MostVisible = VisibleEntries.reduce(
                    (Current, Entry) =>
                        Entry.intersectionRatio > Current.intersectionRatio
                            ? Entry
                            : Current,
                );

                const NextIndex = Number(
                    MostVisible.target.dataset.index,
                );

                if (Number.isFinite(NextIndex)) {
                    SetActiveIndex(NextIndex);
                }
            },
            {
                threshold: [0.25, 0.5, 0.75],
                rootMargin: "-10% 0px -20% 0px",
            },
        );

        Elements.forEach((Element) => {
            Observer.observe(Element);
        });

        return () => Observer.disconnect();
    }, []);

    return (
        <section
            id="vision"
            className="relative w-full overflow-hidden bg-[#061633] text-white"
        >
            {/* =====================================================
                ATMOSPHERE
            ===================================================== */}

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-8%] top-[12%] h-[300px] w-[300px] rounded-full bg-cyan-400/[0.012] blur-[120px]" />

                <div className="absolute right-[-8%] bottom-[12%] h-[340px] w-[340px] rounded-full bg-violet-500/[0.014] blur-[130px]" />

                <div className="absolute inset-0 opacity-[0.004] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:74px_74px]" />
            </div>

            {/* =====================================================
                VIEWPORT CONTAINER
            ===================================================== */}

            <div className="relative z-20 mx-auto flex min-h-[calc(100svh-92px)] w-full max-w-[1400px] flex-col justify-center px-6 py-0 lg:px-8 lg:pb-16">
                {/* =================================================
                    ROW 1 — TEXT
                ================================================= */}

                <div className="grid items-end gap-8 lg:grid-cols-[0.80fr_1.20fr]">
                    {/* Left */}
                    <div className="max-w-[560px]">
                        <div className="inline-flex items-center gap-3">
                            <span className="font-mono text-[13px] font-medium tracking-[0.12em] text-cyan-300">
                                {VisionContent.sectionNumber}
                            </span>

                            <span className="h-px w-10 bg-gradient-to-r from-cyan-300 via-blue-400 to-transparent" />

                            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-blue-100/65 sm:text-[10px]">
                                {VisionContent.eyebrow}
                            </span>
                        </div>

                        <h2 className="mt-5 text-[31px] font-semibold leading-[1.03] tracking-[-0.045em] sm:text-[39px] lg:text-[47px]">
                            {VisionContent.headingPrimary}{" "}
                            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                                {VisionContent.headingAccent}
                            </span>
                        </h2>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col items-start lg:items-end lg:text-right">
                        <p className="max-w-[650px] text-[10px] leading-[1.8] text-blue-100/48 sm:text-[11px]">
                            {VisionContent.description}
                        </p>

                        <div className="mt-5 flex flex-wrap items-center gap-3">
                            <PremiumButton
                                label={VisionContent.buttonLabel}
                                to="/contact"
                                icon={ArrowRight}
                            />

                            <div className="flex items-center gap-2">
                                <Activity
                                    size={10}
                                    strokeWidth={1.7}
                                    className="text-cyan-300/70"
                                />

                                <span className="text-[6px] font-semibold uppercase tracking-[0.16em] text-cyan-100/30">
                                    Smooth by design
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =================================================
                    MAIN DIVIDER
                ================================================= */}

                <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/[0.12] to-transparent" />

                {/* =================================================
                    ROW 2 — CAPABILITIES
                ================================================= */}

                <div className="relative mt-8 grid gap-6 md:grid-cols-[1fr_54px_1fr_54px_1fr] md:items-start lg:grid-cols-[1fr_72px_1fr_72px_1fr]">
                    {VisionCapabilities.map((Capability, Index) => (
                        <div key={Capability.id} className="contents">
                            <VisionCapability
                                capability={Capability}
                                index={Index}
                                isActive={ActiveIndex === Index}
                                reference={(Element) => {
                                    CapabilityReferences.current[Index] = Element;
                                }}
                            />

                            {Index < VisionCapabilities.length - 1 && (
                                <div
                                    className={[
                                        "vision-flow-connector relative hidden h-[58px] items-center md:flex",
                                        ActiveIndex === Index || ActiveIndex === Index + 1
                                            ? "vision-flow-connector-active"
                                            : "",
                                    ].join(" ")}
                                    aria-hidden="true"
                                >
                                    <span className="absolute left-0 right-0 h-px bg-gradient-to-r from-cyan-300/10 via-cyan-300/35 to-violet-300/10" />
                                    <span className="absolute left-0 right-0 h-[5px] rounded-full bg-cyan-300/[0.025] blur-[5px]" />
                                    <span className="absolute left-0 h-1 w-1 rounded-full bg-cyan-300/50" />
                                    <span className="absolute left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-300/45" />
                                    <span className="absolute right-0 h-1 w-1 rounded-full bg-violet-300/40" />
                                    <span className={`vision-flow-signal vision-flow-signal-${Index}`} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* =================================================
                    BOTTOM STATEMENT
                ================================================= */}

                <div className="mt-8 border-t border-white/[0.05] pt-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3">
                            <Sparkles
                                size={10}
                                strokeWidth={1.6}
                                className="text-cyan-300/55"
                            />

                            <span className="text-[8px] font-bold uppercase tracking-[0.20em] text-cyan-100/65 drop-shadow-[0_0_9px_rgba(25,211,255,0.14)]">
                                {VisionContent.footerText}
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Zap
                                size={9}
                                strokeWidth={1.5}
                                className="text-blue-300/45"
                            />

                            <span className="font-mono text-[7px] font-semibold uppercase tracking-[0.16em] text-blue-100/58">
                                FAST · INTELLIGENT · DISTINCTIVE
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-300/30" />

                                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_7px_rgba(52,211,153,0.75)]" />
                            </span>

                            <span className="font-mono text-[7px] font-bold uppercase tracking-[0.15em] text-emerald-100/75 drop-shadow-[0_0_8px_rgba(52,211,153,0.16)]">
                                SYSTEM READY
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* =====================================================
                MOTION
            ===================================================== */}

            <style>{`
                .vision-capability {
                    will-change: transform;
                }

                .vision-capability:hover {
                    transform: translateY(-5px);
                }

                .vision-flow-connector {
                    opacity: 0.58;
                    transition: opacity 500ms ease, transform 500ms ease;
                }

                .vision-flow-connector-active {
                    opacity: 1;
                    transform: scaleY(1.08);
                }

                .vision-flow-signal {
                    position: absolute;
                    left: 0;
                    top: 50%;
                    z-index: 20;
                    width: 5px;
                    height: 5px;
                    margin-top: -2.5px;
                    border-radius: 999px;
                    background: white;
                    box-shadow: 0 0 10px rgba(25,211,255,0.95);
                }

                .vision-flow-signal-0 {
                    animation: visionFlowSignal 2.4s linear infinite;
                }

                .vision-flow-signal-1 {
                    animation: visionFlowSignal 2.4s linear infinite;
                    animation-delay: 0.8s;
                }

                @keyframes visionFlowSignal {
                    0% {
                        left: 0;
                        opacity: 0;
                        transform: scale(0.65);
                    }

                    12% {
                        opacity: 1;
                    }

                    80% {
                        opacity: 1;
                    }

                    100% {
                        left: calc(100% - 5px);
                        opacity: 0;
                        transform: scale(1.15);
                    }
                }

                @media (max-width: 767px) {
                    .vision-flow-connector {
                        display: none;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .vision-capability,
                    .vision-capability:hover,
                    .vision-flow-connector {
                        transform: none !important;
                        transition: none !important;
                    }

                    .vision-flow-signal-0,
                    .vision-flow-signal-1 {
                        animation: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default AboutVision;