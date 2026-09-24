// AboutAutomationSystems.jsx
// InnoInventive About Page - Automation Systems Story
//
// SECTION 04 -> SIGNAL
// SECTION 05 -> INTELLIGENCE
// SECTION 06 -> EXECUTION

import {
    Activity,
    ArrowRight,
    Bot,
    BrainCircuit,
    Database,
    GitBranch,
    Gauge,
    Layers3,
    Network,
    Radio,
    ShieldCheck,
    Sparkles,
    Workflow,
    Zap,
} from "lucide-react";

import PremiumButton from "../../../components/UI/PremiumButton";
import PremiumIconBadge from "../../../components/UI/PremiumIconBadge";

/* =========================================================
   AUTOMATION SYSTEM DATA
========================================================= */

const AutomationSystems = [
    {
        id: "signal",
        number: "04",
        eyebrow: "Signal Intake",
        headingPrimary: "Every useful system",
        headingAccent: "starts with a signal.",
        description:
            "We connect the scattered inputs around your business and turn them into structured information that automation can understand and act on.",
        footerText: "Capture → Structure → Route",
        buttonLabel: "Explore Automation",
        accent: "cyan",
        systemLabel: "SIGNAL PROCESSING",
        systemStatus: "LISTENING",
        systemMetric: "03 INPUT STREAMS",
        nodes: [
            {
                number: "01",
                label: "INPUT",
                title: "Capture",
                description: "Forms, requests, events and business signals enter the system.",
                value: "LIVE",
                icon: Radio,
            },
            {
                number: "02",
                label: "STRUCTURE",
                title: "Normalize",
                description: "Raw information is organized into clean, usable system data.",
                value: "SYNC",
                icon: Database,
            },
            {
                number: "03",
                label: "ROUTING",
                title: "Route",
                description: "The right information reaches the right workflow automatically.",
                value: "READY",
                icon: GitBranch,
            },
        ],
    },
    {
        id: "intelligence",
        number: "05",
        eyebrow: "Intelligence Layer",
        headingPrimary: "Automation becomes valuable",
        headingAccent: "when the system can decide.",
        description:
            "Once information is structured, intelligent rules and AI-driven logic evaluate context, identify patterns and determine what should happen next.",
        footerText: "Understand → Decide → Trigger",
        buttonLabel: "Build Intelligent Systems",
        accent: "blue",
        systemLabel: "DECISION ENGINE",
        systemStatus: "PROCESSING",
        systemMetric: "98.7% SIGNAL CONFIDENCE",
        nodes: [
            {
                number: "01",
                label: "CONTEXT",
                title: "Understand",
                description: "The system evaluates the information and surrounding business context.",
                value: "SCAN",
                icon: BrainCircuit,
            },
            {
                number: "02",
                label: "DECISION",
                title: "Reason",
                description: "Rules, conditions and intelligent logic determine the next action.",
                value: "THINK",
                icon: Bot,
            },
            {
                number: "03",
                label: "TRIGGER",
                title: "Activate",
                description: "The chosen workflow is activated without manual intervention.",
                value: "ACTIVE",
                icon: Zap,
            },
        ],
    },
    {
        id: "execution",
        number: "06",
        eyebrow: "Execution Loop",
        headingPrimary: "The system keeps working",
        headingAccent: "after the trigger.",
        description:
            "Real automation does more than fire an action. It executes, measures the result and creates a feedback loop that continuously improves the system.",
        footerText: "Execute → Measure → Improve",
        buttonLabel: "See The Full System",
        accent: "violet",
        systemLabel: "AUTOMATION LOOP",
        systemStatus: "RUNNING",
        systemMetric: "CONTINUOUS FEEDBACK",
        nodes: [
            {
                number: "01",
                label: "EXECUTE",
                title: "Act",
                description: "Tasks, notifications and system actions happen automatically.",
                value: "RUN",
                icon: Workflow,
            },
            {
                number: "02",
                label: "MEASURE",
                title: "Observe",
                description: "The system tracks outcomes, events and operational performance.",
                value: "TRACK",
                icon: Activity,
            },
            {
                number: "03",
                label: "OPTIMIZE",
                title: "Improve",
                description: "Feedback turns into smarter rules, better workflows and stronger output.",
                value: "GROW",
                icon: Gauge,
            },
        ],
    },
];

/* =========================================================
   SYSTEM STATUS
========================================================= */

const SystemStatus = ({ system }) => {
    return (
        <div className="mt-7 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/[0.09] bg-cyan-300/[0.025] px-3 py-1.5 backdrop-blur-md">
                <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inset-0 animate-ping rounded-full bg-emerald-300/35" />

                    <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                </span>

                <span className="text-[5.5px] font-semibold uppercase tracking-[0.16em] text-emerald-100/58">
                    {system.systemStatus}
                </span>
            </div>

            <span className="font-mono text-[6px] tracking-[0.14em] text-cyan-200/32">
                {system.systemMetric}
            </span>
        </div>
    );
};

/* =========================================================
   AUTOMATION NODE
========================================================= */

const AutomationNode = ({ node, index, accent }) => {
    const NodeIcon = node.icon;

    const AccentClasses = {
        cyan: {
            border:
                "group-hover:border-cyan-300/30",
            glow:
                "bg-cyan-300/[0.055]",
            text:
                "text-cyan-300",
            line:
                "from-cyan-300/55 to-transparent",
        },
        blue: {
            border:
                "group-hover:border-blue-300/30",
            glow:
                "bg-blue-400/[0.055]",
            text:
                "text-blue-300",
            line:
                "from-blue-300/55 to-transparent",
        },
        violet: {
            border:
                "group-hover:border-violet-300/30",
            glow:
                "bg-violet-300/[0.055]",
            text:
                "text-violet-300",
            line:
                "from-violet-300/55 to-transparent",
        },
    };

    const CurrentAccent = AccentClasses[accent] || AccentClasses.cyan;

    return (
        <article className="group relative min-w-0">
            {/* Depth */}
            <div className="absolute inset-x-1 bottom-[-7px] top-2 rounded-[21px] border border-blue-400/[0.055] bg-[#020B20]/95 shadow-[0_18px_34px_rgba(0,0,0,0.42)] transition-all duration-500 group-hover:translate-y-[4px]" />

            {/* Ambient */}
            <span
                className={[
                    "pointer-events-none absolute -inset-4 rounded-[27px] blur-2xl opacity-0 transition-all duration-500 group-hover:opacity-100",
                    CurrentAccent.glow,
                ].join(" ")}
            />

            {/* Card */}
            <div
                className={[
                    "relative min-h-[230px] overflow-hidden rounded-[20px] border border-white/[0.07] p-4",
                    "bg-[linear-gradient(145deg,rgba(12,48,98,0.94),rgba(3,18,43,0.99))]",
                    "shadow-[inset_0_1px_0_rgba(255,255,255,0.10),inset_0_-18px_28px_rgba(0,0,0,0.22),0_22px_44px_rgba(0,0,0,0.28)]",
                    "transition-all duration-500",
                    "group-hover:-translate-y-2",
                    "group-hover:rotate-[1deg]",
                    CurrentAccent.border,
                ].join(" ")}
            >
                {/* Grid */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.022] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:20px_20px]" />

                {/* Top edge */}
                <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                {/* Light source */}
                <span className="pointer-events-none absolute right-[-8%] top-[-18%] h-24 w-24 rounded-full bg-cyan-300/[0.04] blur-3xl" />

                {/* Header */}
                <div className="relative z-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span
                            className={[
                                "font-mono text-[7px] font-semibold tracking-[0.16em]",
                                CurrentAccent.text,
                            ].join(" ")}
                        >
                            {node.number}
                        </span>

                        <span
                            className={[
                                "h-px w-6 bg-gradient-to-r",
                                CurrentAccent.line,
                            ].join(" ")}
                        />
                    </div>

                    <span className="rounded-full border border-white/[0.06] bg-white/[0.025] px-2 py-1 text-[4.5px] font-semibold uppercase tracking-[0.14em] text-white/32">
                        {node.label}
                    </span>
                </div>

                {/* Reactor */}
                <div className="relative z-20 mt-3 flex justify-center">
                    <div className="relative flex h-[72px] w-[72px] items-center justify-center">
                        <span className="absolute -inset-4 rounded-full bg-cyan-300/[0.035] blur-2xl" />

                        <span className="absolute inset-0 rounded-full border border-cyan-300/[0.11] [transform:rotateX(68deg)]" />

                        <span className="absolute inset-[9px] rounded-full border border-blue-300/[0.08] [transform:rotateX(68deg)_rotateZ(22deg)]" />

                        <span className="absolute inset-[17px] rounded-full border border-violet-300/[0.07] border-dashed [transform:rotateX(70deg)_rotateZ(-22deg)]" />

                        <span className="absolute inset-[19px] rounded-full bg-[#061A39]/80 shadow-[inset_0_0_22px_rgba(25,211,255,0.08)] backdrop-blur-md" />

                        <div className="relative z-10">
                            <PremiumIconBadge
                                icon={NodeIcon}
                                size="default"
                            />
                        </div>
                    </div>
                </div>

                {/* Text */}
                <div className="relative z-20 mt-[-2px] text-center">
                    <h3 className="text-[16px] font-semibold tracking-[-0.025em] text-white">
                        {node.title}
                    </h3>

                    <p className="mx-auto mt-2 max-w-[200px] text-[8px] leading-[1.65] text-white/36">
                        {node.description}
                    </p>
                </div>

                {/* Telemetry */}
                <div className="relative z-20 mt-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                            <span className="relative flex h-1 w-1">
                                <span className="absolute inset-0 animate-ping rounded-full bg-cyan-300/30" />

                                <span className="relative h-1 w-1 rounded-full bg-cyan-300" />
                            </span>

                            <span className="text-[4.5px] font-medium uppercase tracking-[0.13em] text-white/22">
                                SYSTEM NODE
                            </span>
                        </div>

                        <span
                            className={[
                                "font-mono text-[4.5px] tracking-[0.12em]",
                                CurrentAccent.text,
                            ].join(" ")}
                        >
                            {node.value}
                        </span>
                    </div>

                    <div className="relative mt-2 h-[3px] overflow-hidden rounded-full bg-white/[0.045]">
                        <span
                            className={[
                                "absolute inset-y-0 left-0 w-[62%] rounded-full bg-gradient-to-r shadow-[0_0_8px_rgba(25,211,255,0.18)] transition-all duration-700 group-hover:w-[88%]",
                                accent === "violet"
                                    ? "from-cyan-300 via-blue-400 to-violet-400"
                                    : accent === "blue"
                                        ? "from-blue-300 via-cyan-300 to-violet-400"
                                        : "from-cyan-300 via-blue-400 to-cyan-200",
                            ].join(" ")}
                        />

                        <span className="absolute left-[25%] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-cyan-300/25" />

                        <span className="absolute left-[50%] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-blue-300/25" />

                        <span className="absolute left-[76%] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-violet-300/20" />
                    </div>
                </div>

                {/* Sweep */}
                <span className="automation-node-sweep pointer-events-none absolute left-[-32%] top-[-20%] z-30 h-[150%] w-[22%] rotate-[20deg] bg-gradient-to-r from-transparent via-white/[0.075] to-transparent opacity-0" />

                {/* Side line */}
                <span className="pointer-events-none absolute right-0 top-[18%] h-[56%] w-px bg-gradient-to-b from-transparent via-cyan-300/18 to-transparent" />
            </div>
        </article>
    );
};

/* =========================================================
   AUTOMATION CONNECTOR
========================================================= */

const AutomationConnector = ({ accent }) => {
    const LineClass =
        accent === "violet"
            ? "from-cyan-300/10 via-violet-300/45 to-violet-300/10"
            : accent === "blue"
                ? "from-cyan-300/10 via-blue-300/45 to-blue-300/10"
                : "from-cyan-300/10 via-cyan-300/45 to-blue-300/10";

    return (
        <div className="relative hidden h-[230px] min-w-[58px] items-center justify-center lg:flex">
            {/* Main line */}
            <span
                className={[
                    "absolute left-0 right-0 h-px bg-gradient-to-r",
                    LineClass,
                ].join(" ")}
            />

            {/* Glow */}
            <span className="absolute left-0 right-0 h-[6px] rounded-full bg-cyan-300/[0.025] blur-[6px]" />

            {/* Connector node */}
            <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(25,211,255,0.85)]" />

            {/* Moving signal */}
            <span className="automation-connector-signal absolute left-0 h-1 w-1 rounded-full bg-white shadow-[0_0_8px_rgba(25,211,255,0.95)]" />
        </div>
    );
};

/* =========================================================
   SYSTEM HEADER
========================================================= */

const AutomationSystemHeader = ({ system }) => {
    return (
        <div className="relative">
            <div className="inline-flex items-center gap-3">
                <span className="font-mono text-[13px] font-medium tracking-[0.12em] text-cyan-300">
                    {system.number}
                </span>

                <span className="h-px w-10 bg-gradient-to-r from-cyan-300 via-blue-400 to-transparent" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-blue-100/65 sm:text-[10px]">
                    {system.eyebrow}
                </span>
            </div>

            <h2 className="mt-4 text-[31px] font-semibold leading-[1.04] tracking-[-0.045em] sm:text-[38px] lg:text-[43px]">
                {system.headingPrimary}{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                    {system.headingAccent}
                </span>
            </h2>

            <p className="mt-4 max-w-[760px] text-[10px] leading-[1.75] text-blue-100/48 sm:text-[11px]">
                {system.description}
            </p>

            <SystemStatus system={system} />
        </div>
    );
};

/* =========================================================
   MAIN SECTION
========================================================= */

const AutomationSystemSection = ({ system }) => {
    return (
        <section
            className="relative w-full overflow-hidden bg-[#061633] text-white"
        >
            {/* Atmosphere */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-7%] top-[14%] h-[260px] w-[260px] rounded-full bg-cyan-400/[0.012] blur-[110px]" />

                <div className="absolute right-[-8%] bottom-[10%] h-[320px] w-[320px] rounded-full bg-violet-500/[0.012] blur-[120px]" />

                <div className="absolute inset-0 opacity-[0.004] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:72px_72px]" />
            </div>

            {/* Viewport-height container */}
            <div className="relative z-20 mx-auto flex min-h-[calc(100svh-92px)] w-full max-w-[1400px] flex-col justify-center px-6 py-10 lg:px-8 lg:py-12">
                {/* First row — text */}
                <div className="relative z-20">
                    <AutomationSystemHeader system={system} />
                </div>

                {/* Divider */}
                <div className="mt-7 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/[0.10] to-transparent" />

                {/* Second row — automation system */}
                <div className="relative mt-8 lg:mt-10">
                    {/* System rail */}
                    <div className="pointer-events-none absolute left-[5%] right-[5%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-cyan-300/0 via-cyan-300/18 to-violet-300/0 lg:block" />

                    <div className="relative grid items-stretch gap-5 lg:grid-cols-[1fr_58px_1fr_58px_1fr]">
                        <AutomationNode
                            node={system.nodes[0]}
                            index={0}
                            accent={system.accent}
                        />

                        <AutomationConnector
                            accent={system.accent}
                        />

                        <AutomationNode
                            node={system.nodes[1]}
                            index={1}
                            accent={system.accent}
                        />

                        <AutomationConnector
                            accent={system.accent}
                        />

                        <AutomationNode
                            node={system.nodes[2]}
                            index={2}
                            accent={system.accent}
                        />
                    </div>

                    {/* Mobile connectors */}
                    <div className="flex flex-col items-center gap-1 py-2 lg:hidden">
                        <span className="h-6 w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/35 to-blue-300/0" />

                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(25,211,255,0.8)]" />

                        <span className="h-6 w-px bg-gradient-to-b from-blue-300/0 via-blue-300/35 to-violet-300/0" />
                    </div>

                    {/* System footer */}
                    <div className="mt-5 flex items-center justify-center">
                        <div className="flex items-center gap-2 rounded-full border border-cyan-300/[0.08] bg-cyan-300/[0.018] px-3 py-1.5 backdrop-blur-md">
                            <Network
                                size={8}
                                strokeWidth={1.7}
                                className="text-cyan-300/60"
                            />

                            <span className="text-[5px] font-semibold uppercase tracking-[0.18em] text-cyan-100/30">
                                {system.footerText}
                            </span>
                        </div>
                    </div>
                </div>

                {/* CTA rail */}
                <div className="mt-7 flex items-center justify-between gap-5 border-t border-white/[0.05] pt-5">
                    <div className="flex items-center gap-2">
                        <Sparkles
                            size={10}
                            strokeWidth={1.6}
                            className="text-cyan-300/55"
                        />

                        <span className="text-[6px] font-semibold uppercase tracking-[0.17em] text-white/24">
                            InnoInventive Automation Layer
                        </span>
                    </div>

                    <PremiumButton
                        label={system.buttonLabel}
                        to="/contact"
                        icon={ArrowRight}
                        className="px-5 py-2"
                    />
                </div>
            </div>
        </section>
    );
};

/* =========================================================
   COMPLETE COMPONENT
========================================================= */

const AboutAutomationSystems = () => {
    return (
        <div className="relative w-full bg-[#061633]">
            {AutomationSystems.map((system) => (
                <AutomationSystemSection
                    key={system.id}
                    system={system}
                />
            ))}

            <style>{`
                .automation-connector-signal {
                    animation:
                        automationConnectorFlow
                        2.8s
                        linear
                        infinite;
                }

                .automation-node-sweep {
                    animation:
                        automationNodeSweep
                        6s
                        ease-in-out
                        infinite;
                }

                article:nth-child(1)
                .automation-node-sweep {
                    animation-delay: -1.2s;
                }

                article:nth-child(3)
                .automation-node-sweep {
                    animation-delay: -2.3s;
                }

                article:nth-child(5)
                .automation-node-sweep {
                    animation-delay: -3.4s;
                }

                @keyframes automationConnectorFlow {
                    0% {
                        left: 0;
                        opacity: 0;
                        transform: scale(0.6);
                    }

                    12% {
                        opacity: 1;
                    }

                    82% {
                        opacity: 1;
                    }

                    100% {
                        left: 100%;
                        opacity: 0;
                        transform: scale(1.2);
                    }
                }

                @keyframes automationNodeSweep {
                    0%,
                    55%,
                    100% {
                        left: -32%;
                        opacity: 0;
                    }

                    64% {
                        left: 40%;
                        opacity: 0.7;
                    }

                    76% {
                        left: 115%;
                        opacity: 0;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .automation-connector-signal,
                    .automation-node-sweep {
                        animation: none !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default AboutAutomationSystems;