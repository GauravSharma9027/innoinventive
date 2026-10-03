import {
    Activity,
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    BrainCircuit,
    CheckCircle2,
    Clock3,
    MessageSquareQuote,
    Quote,
    ShieldCheck,
    Sparkles,
    TrendingUp,
    Workflow,
    Zap,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import PremiumIconBadge from "../../../components/UI/PremiumIconBadge";

/* =========================================================
   TESTIMONIAL DATA
========================================================= */

const TestimonialsData = [
    {
        id: "story-01",
        number: "01",
        initials: "RM",
        name: "Raj Mehta",
        role: "Founder, TechMart",
        company: "TechMart",
        quote:
            "The automation completely changed how our team works. What used to take hours now moves almost instantly.",
        result: "68%",
        resultLabel: "Less manual work",
        activity: "Workflow optimized",
        status: "Automation active",
        responseTime: "2.4× faster",
        theme: "cyan",
    },
    {
        id: "story-02",
        number: "02",
        initials: "AK",
        name: "Aarav Kapoor",
        role: "Operations Lead",
        company: "Nova Systems",
        quote:
            "We connected our data, reporting and lead workflows into one intelligent system. Everything feels faster and more predictable.",
        result: "3.4×",
        resultLabel: "Faster processing",
        activity: "Systems synchronized",
        status: "AI workflows running",
        responseTime: "94% synced",
        theme: "violet",
    },
    {
        id: "story-03",
        number: "03",
        initials: "NS",
        name: "Neha Sharma",
        role: "Growth Director",
        company: "Orbit Labs",
        quote:
            "The biggest difference is that the system keeps working in the background. Our team can finally focus on growth instead of repetitive tasks.",
        result: "42%",
        resultLabel: "Higher productivity",
        activity: "AI automation running",
        status: "Growth engine online",
        responseTime: "24/7 active",
        theme: "blue",
    },
];

/* =========================================================
   THEMES
========================================================= */

const TestimonialThemes = {
    cyan: {
        border: "border-cyan-300/20",
        strongBorder: "border-cyan-300/35",
        glow: "bg-cyan-400/[0.12]",
        softGlow: "bg-cyan-400/[0.06]",
        icon: "text-cyan-200",
        accent: "bg-cyan-300",
        accentText: "text-cyan-200",
        accentBackground: "bg-cyan-300/[0.06]",
        accentGradient:
            "from-cyan-300 via-sky-400 to-blue-500",
    },

    violet: {
        border: "border-violet-300/20",
        strongBorder: "border-violet-300/35",
        glow: "bg-violet-400/[0.12]",
        softGlow: "bg-violet-400/[0.06]",
        icon: "text-violet-200",
        accent: "bg-violet-300",
        accentText: "text-violet-200",
        accentBackground: "bg-violet-300/[0.06]",
        accentGradient:
            "from-violet-300 via-fuchsia-400 to-blue-500",
    },

    blue: {
        border: "border-blue-300/20",
        strongBorder: "border-blue-300/35",
        glow: "bg-blue-400/[0.12]",
        softGlow: "bg-blue-400/[0.06]",
        icon: "text-blue-100",
        accent: "bg-blue-300",
        accentText: "text-blue-100",
        accentBackground: "bg-blue-300/[0.06]",
        accentGradient:
            "from-blue-300 via-cyan-400 to-violet-400",
    },
};

/* =========================================================
   HELPER
========================================================= */

const GetTheme = (ThemeName) => {
    return (
        TestimonialThemes[ThemeName] ||
        TestimonialThemes.cyan
    );
};

/* =========================================================
   IDENTITY POD
========================================================= */

const TestimonialIdentity = ({
    testimonial,
    theme,
    compact = false,
}) => {
    return (
        <div
            className={[
                "relative flex shrink-0 items-center justify-center [perspective:1000px]",
                compact
                    ? "h-[62px] w-[62px]"
                    : "h-[72px] w-[72px] sm:h-[78px] sm:w-[78px]",
            ].join(" ")}
        >
            {/* Outer aura */}
            <motion.span
                className={[
                    "pointer-events-none absolute rounded-full blur-2xl",
                    compact ? "-inset-7" : "-inset-10",
                    theme.glow,
                ].join(" ")}
                animate={{
                    scale: [0.92, 1.08, 0.92],
                    opacity: [0.35, 0.62, 0.35],
                }}
                transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Orbit ring */}
            <motion.span
                className="absolute inset-0 rounded-full border border-cyan-200/10"
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Reverse ring */}
            <motion.span
                className="absolute rounded-full border border-violet-200/10"
                style={{
                    inset: compact ? 6 : 7,
                }}
                animate={{
                    rotate: -360,
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Core */}
            <div
                className={[
                    "relative z-10 flex items-center justify-center rounded-full border",
                    theme.strongBorder,
                    compact
                        ? "h-[45px] w-[45px]"
                        : "h-[54px] w-[54px] sm:h-[58px] sm:w-[58px]",
                    "bg-[radial-gradient(circle_at_32%_28%,rgba(255,255,255,0.17),rgba(8,28,62,0.98)_48%,rgba(2,10,25,1))]",
                    "shadow-[0_18px_35px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.16)]",
                ].join(" ")}
            >
                <span className="absolute inset-[5px] rounded-full border border-white/[0.055]" />

                <span
                    className={[
                        "relative z-10 font-semibold tracking-[0.1em] text-white",
                        compact
                            ? "text-[9px]"
                            : "text-[11px] sm:text-[12px]",
                    ].join(" ")}
                >
                    {testimonial.initials}
                </span>

                <motion.span
                    className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-cyan-200/[0.12] to-transparent"
                    animate={{
                        y: ["-120%", "120%"],
                    }}
                    transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Live dot */}
            <span
                className={[
                    "absolute right-[4px] top-[7px] z-20 h-[7px] w-[7px] rounded-full shadow-[0_0_10px_rgba(25,211,255,0.75)]",
                    theme.accent,
                ].join(" ")}
            />
        </div>
    );
};

/* =========================================================
   AUTOMATION NODE
========================================================= */

const AutomationNode = ({
    icon: Icon,
    label,
    active,
    theme,
    compact = false,
}) => {
    return (
        <div className="relative min-w-0 flex-1">
            <div
                className={[
                    "relative flex flex-col items-center justify-center rounded-[13px] border px-2",
                    compact
                        ? "min-h-[48px]"
                        : "min-h-[58px]",
                    active
                        ? theme.border
                        : "border-white/[0.05]",
                    active
                        ? theme.accentBackground
                        : "bg-white/[0.015]",
                ].join(" ")}
            >
                {active && (
                    <motion.span
                        className={[
                            "pointer-events-none absolute inset-0 rounded-[13px] opacity-50 blur-lg",
                            theme.softGlow,
                        ].join(" ")}
                        animate={{
                            opacity: [0.2, 0.45, 0.2],
                        }}
                        transition={{
                            duration: 2.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                )}

                <div
                    className={[
                        "relative z-10 flex items-center justify-center rounded-lg border",
                        compact
                            ? "h-6 w-6"
                            : "h-7 w-7",
                        active
                            ? theme.border
                            : "border-white/[0.05]",
                        active
                            ? theme.accentBackground
                            : "bg-white/[0.02]",
                    ].join(" ")}
                >
                    <Icon
                        size={compact ? 10 : 12}
                        className={
                            active
                                ? theme.icon
                                : "text-blue-100/35"
                        }
                    />
                </div>

                <span
                    className={[
                        "relative z-10 line-clamp-1 text-center font-medium uppercase tracking-[0.05em] text-blue-100/40",
                        compact
                            ? "mt-1 text-[5px]"
                            : "mt-1.5 text-[6px] sm:text-[7px]",
                    ].join(" ")}
                >
                    {label}
                </span>
            </div>
        </div>
    );
};

/* =========================================================
   AUTOMATION FLOW
========================================================= */

const TestimonialAutomationFlow = ({
    theme,
    desktopCompact = false,
}) => {
    const FlowData = [
        {
            id: "feedback",
            label: "Feedback",
            icon: MessageSquareQuote,
        },
        {
            id: "insight",
            label: "AI Insight",
            icon: BrainCircuit,
        },
        {
            id: "workflow",
            label: "Workflow",
            icon: Workflow,
        },
        {
            id: "result",
            label: "Measured",
            icon: TrendingUp,
        },
    ];

    return (
        <div
            className={[
                "rounded-[17px] border",
                desktopCompact
                    ? "mt-3 p-2.5"
                    : "mt-5 p-3 sm:p-3.5",
                theme.border,
                theme.accentBackground,
            ].join(" ")}
        >
            {/* Header */}
            <div className="flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-2">
                    <Activity
                        size={desktopCompact ? 10 : 11}
                        className={theme.icon}
                    />

                    <p
                        className={[
                            "truncate font-medium text-blue-100/32",
                            desktopCompact
                                ? "text-[6px]"
                                : "text-[7px]",
                        ].join(" ")}
                    >
                        Feedback becomes an automated growth loop.
                    </p>
                </div>

                <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-300/10 bg-emerald-300/[0.035] px-2 py-1.5">
                    <span className="relative flex h-[5px] w-[5px]">
                        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-300 opacity-30" />

                        <span className="relative h-[5px] w-[5px] rounded-full bg-emerald-300" />
                    </span>

                    <span className="text-[6px] font-semibold uppercase tracking-[0.12em] text-emerald-100/45">
                        Live
                    </span>
                </div>
            </div>

            {/* Nodes */}
            <div
                className={[
                    "flex items-center",
                    desktopCompact
                        ? "mt-2 gap-1"
                        : "mt-3 gap-1.5",
                ].join(" ")}
            >
                {FlowData.map((Item, Index) => {
                    const Icon = Item.icon;

                    return (
                        <div
                            key={Item.id}
                            className="flex min-w-0 flex-1 items-center gap-1"
                        >
                            <AutomationNode
                                icon={Icon}
                                label={Item.label}
                                active
                                theme={theme}
                                compact={
                                    desktopCompact
                                }
                            />

                            {Index <
                                FlowData.length - 1 && (
                                    <div className="relative h-px w-2 shrink-0 bg-white/[0.07] sm:w-3">
                                        <motion.span
                                            className={[
                                                "absolute left-0 top-1/2 -translate-y-1/2 rounded-full",
                                                desktopCompact
                                                    ? "h-[2px] w-[7px]"
                                                    : "h-[3px] w-[10px]",
                                                theme.accent,
                                            ].join(" ")}
                                            animate={{
                                                x: [0, 8],
                                                opacity: [
                                                    0,
                                                    1,
                                                    0,
                                                ],
                                            }}
                                            transition={{
                                                duration: 1.8,
                                                repeat: Infinity,
                                                ease: "linear",
                                                delay:
                                                    Index *
                                                    0.3,
                                            }}
                                        />
                                    </div>
                                )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

/* =========================================================
   RESULT PANEL
========================================================= */

const TestimonialResultPanel = ({
    testimonial,
    theme,
    desktopCompact = false,
}) => {
    return (
        <div
            className={[
                "grid",
                desktopCompact
                    ? "mt-0 grid-cols-[minmax(0,1fr)_auto] gap-x-[10px] gap-y-[10px]"
                    : "mt-4 grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]",
            ].join(" ")}
        >
            {/* Status */}
            <div
                className={[
                    "rounded-[16px] border border-white/[0.06] bg-white/[0.018]",
                    desktopCompact
                        ? "p-2.5"
                        : "p-3.5",
                ].join(" ")}
            >
                <div className="flex items-center gap-2.5">
                    <div
                        className={[
                            "flex shrink-0 items-center justify-center rounded-lg border",
                            desktopCompact
                                ? "h-6 w-6"
                                : "h-8 w-8 rounded-xl",
                            theme.border,
                            theme.accentBackground,
                        ].join(" ")}
                    >
                        <CheckCircle2
                            size={desktopCompact ? 11 : 13}
                            className="text-emerald-300"
                        />
                    </div>

                    <div className="min-w-0">
                        <div className="flex items-center gap-2">
                            <p
                                className={[
                                    "truncate font-semibold text-white/75",
                                    desktopCompact
                                        ? "text-[7px]"
                                        : "text-[8px]",
                                ].join(" ")}
                            >
                                {testimonial.status}
                            </p>

                            <span className="hidden rounded-full border border-emerald-300/10 bg-emerald-300/[0.035] px-1.5 py-0.5 text-[5px] font-semibold uppercase tracking-[0.1em] text-emerald-100/45 sm:inline-block">
                                Running
                            </span>
                        </div>

                        <p
                            className={[
                                "text-blue-100/30",
                                desktopCompact
                                    ? "mt-0.5 text-[6px] leading-[1.25]"
                                    : "mt-1 text-[7px] leading-[1.4]",
                            ].join(" ")}
                        >
                            Follow-up and engagement actions handled automatically.
                        </p>
                    </div>
                </div>

                <div
                    className={[
                        "flex items-center gap-2",
                        desktopCompact
                            ? "mt-2"
                            : "mt-3",
                    ].join(" ")}
                >
                    <div className="relative h-[4px] flex-1 overflow-hidden rounded-full bg-white/[0.05]">
                        <motion.span
                            className={[
                                "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r",
                                theme.accentGradient,
                            ].join(" ")}
                            animate={{
                                width: [
                                    "18%",
                                    "82%",
                                    "68%",
                                    "94%",
                                ],
                            }}
                            transition={{
                                duration: 3.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>

                    <span className="text-[5px] font-semibold uppercase tracking-[0.11em] text-emerald-100/35">
                        Active
                    </span>
                </div>
            </div>

            {/* Result */}
            <div
                className={[
                    "rounded-[16px] border",
                    desktopCompact
                        ? "min-w-[84px] p-2.5"
                        : "p-3.5 sm:min-w-[128px]",
                    theme.border,
                    theme.accentBackground,
                ].join(" ")}
            >
                <div className="flex items-center justify-between gap-2">
                    <span className="text-[6px] font-semibold uppercase tracking-[0.13em] text-blue-100/30">
                        Impact
                    </span>

                    <ArrowUpRight
                        size={desktopCompact ? 9 : 11}
                        className={theme.icon}
                    />
                </div>

                <div className="mt-1 flex items-end gap-1.5">
                    <span
                        className={[
                            "font-semibold leading-none tracking-[-0.06em] text-white",
                            desktopCompact
                                ? "text-[23px]"
                                : "text-[26px]",
                        ].join(" ")}
                    >
                        {testimonial.result}
                    </span>
                </div>

                <p
                    className={[
                        "font-medium text-cyan-100/42",
                        desktopCompact
                            ? "mt-1 text-[5.5px]"
                            : "mt-1 text-[6px]",
                    ].join(" ")}
                >
                    {testimonial.resultLabel}
                </p>
            </div>
        </div>
    );
};

/* =========================================================
   TESTIMONIAL CARD
========================================================= */

const TestimonialCard = ({
    testimonial,
    isCenter = false,
    desktopCompact = false,
}) => {
    const theme = GetTheme(testimonial.theme);

    return (
        <motion.article
            className="group relative h-full w-full [perspective:1800px]"
            whileHover={{
                y: -6,
            }}
            transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            {/* Deep shadow layer */}
            <div
                className={[
                    "pointer-events-none absolute rounded-[28px] border bg-[#020814]/75",
                    desktopCompact
                        ? "inset-x-3 bottom-[-11px] top-[11px]"
                        : "inset-x-4 bottom-[-14px] top-[15px]",
                    theme.border,
                ].join(" ")}
            />

            {/* Lower depth layer */}
            <div
                className={[
                    "pointer-events-none absolute rounded-[25px] border border-blue-300/[0.05] bg-[#020713]/70",
                    desktopCompact
                        ? "inset-x-6 bottom-[-15px] top-[17px]"
                        : "inset-x-8 bottom-[-20px] top-[22px]",
                ].join(" ")}
            />

            {/* Main atmosphere */}
            <motion.div
                className={[
                    "pointer-events-none absolute rounded-[35px] blur-3xl",
                    desktopCompact
                        ? "-inset-5"
                        : "-inset-7",
                    theme.glow,
                ].join(" ")}
                animate={{
                    scale: [0.95, 1.05, 0.95],
                    opacity: isCenter
                        ? [0.28, 0.5, 0.28]
                        : [0.12, 0.22, 0.12],
                }}
                transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Main shell */}
            <div
                className={[
                    "relative h-full overflow-hidden rounded-[27px] border",
                    theme.border,
                    "bg-[linear-gradient(145deg,rgba(7,31,67,0.98),rgba(2,12,29,0.985))]",
                    "shadow-[0_28px_80px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.10)]",
                ].join(" ")}
            >
                {/* Glass highlight */}
                <span className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />

                {/* Moving scan */}
                <motion.span
                    className="pointer-events-none absolute left-[-20%] top-0 h-full w-[22%] rotate-[12deg] bg-gradient-to-r from-transparent via-cyan-200/[0.055] to-transparent blur-xl"
                    animate={{
                        x: ["0%", "620%"],
                    }}
                    transition={{
                        duration: 5.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatDelay: 1.2,
                    }}
                />

                {/* Grid */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:36px_36px]" />

                {/* Top atmosphere */}
                <div
                    className={[
                        "pointer-events-none absolute rounded-full blur-[100px]",
                        desktopCompact
                            ? "-right-[17%] -top-[34%] h-[220px] w-[220px]"
                            : "-right-[15%] -top-[28%] h-[280px] w-[280px]",
                        theme.softGlow,
                    ].join(" ")}
                />

                {/* Bottom atmosphere */}
                <div className="pointer-events-none absolute bottom-[-18%] left-[20%] h-[180px] w-[320px] rounded-full bg-blue-500/[0.045] blur-[90px]" />

                {/* Corner details */}
                <span className="pointer-events-none absolute left-5 top-5 h-6 w-6 border-l border-t border-cyan-200/10" />
                <span className="pointer-events-none absolute right-5 top-5 h-6 w-6 border-r border-t border-cyan-200/10" />
                <span className="pointer-events-none absolute bottom-5 left-5 h-6 w-6 border-b border-l border-blue-300/[0.07]" />
                <span className="pointer-events-none absolute bottom-5 right-5 h-6 w-6 border-b border-r border-blue-300/[0.07]" />

                {/* Content */}
                <div
                    className={[
                        "relative z-10 flex h-full flex-col",
                        desktopCompact
                            ? "p-5"
                            : "p-5 sm:p-6 lg:p-7",
                    ].join(" ")}
                >
                    {/* =============================================
                        HEADER
                    ============================================= */}

                    <div className="flex items-start justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-3">
                            <TestimonialIdentity
                                testimonial={
                                    testimonial
                                }
                                theme={theme}
                                compact={
                                    desktopCompact
                                }
                            />

                            <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-1.5">
                                    <span
                                        className={[
                                            "rounded-full border px-2 py-1 font-semibold uppercase tracking-[0.15em]",
                                            desktopCompact
                                                ? "text-[5px]"
                                                : "text-[5.5px]",
                                            theme.border,
                                            theme.accentBackground,
                                            theme.accentText,
                                        ].join(" ")}
                                    >
                                        Client Signal
                                    </span>

                                    <span className="flex items-center gap-1 text-[6px] font-semibold uppercase tracking-[0.11em] text-emerald-100/45">
                                        <ShieldCheck
                                            size={9}
                                            className="text-emerald-300"
                                        />

                                        Verified
                                    </span>
                                </div>

                                <h3
                                    className={[
                                        "truncate font-semibold tracking-[-0.025em] text-white",
                                        desktopCompact
                                            ? "mt-1.5 text-[14px]"
                                            : "mt-2 text-[17px] sm:text-[18px]",
                                    ].join(" ")}
                                >
                                    {testimonial.name}
                                </h3>

                                <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                                    <p
                                        className={[
                                            "font-medium text-blue-100/40",
                                            desktopCompact
                                                ? "text-[7px]"
                                                : "text-[8px]",
                                        ].join(" ")}
                                    >
                                        {testimonial.role}
                                    </p>

                                    <span className="h-[3px] w-[3px] rounded-full bg-cyan-300/30" />

                                    <p
                                        className={[
                                            "font-medium text-cyan-100/35",
                                            desktopCompact
                                                ? "text-[7px]"
                                                : "text-[8px]",
                                        ].join(" ")}
                                    >
                                        {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Number + signal */}
                        <div className="flex shrink-0 items-center gap-2">
                            <div className="hidden items-center gap-1.5 rounded-full border border-blue-300/10 bg-blue-300/[0.02] px-2.5 py-1.5 lg:flex">
                                <Clock3
                                    size={9}
                                    className="text-cyan-300/65"
                                />

                                <span className="text-[6px] font-semibold uppercase tracking-[0.11em] text-blue-100/30">
                                    {
                                        testimonial.responseTime
                                    }
                                </span>
                            </div>

                            <div className="flex h-8 min-w-[34px] items-center justify-center rounded-full border border-blue-300/10 bg-blue-300/[0.02] px-2">
                                <span className="text-[6px] font-semibold uppercase tracking-[0.15em] text-cyan-100/30">
                                    {
                                        testimonial.number
                                    }
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* =============================================
                        MAIN BODY
                    ============================================= */}

                    <div
                        className={[
                            "grid min-h-0 flex-1",
                            desktopCompact
                                ? "mt-3.5 grid-cols-[minmax(0,1fr)_205px] gap-4"
                                : "mt-5 grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.3fr)_230px] lg:gap-7",
                        ].join(" ")}
                    >
                        {/* LEFT */}
                        <div className="flex min-w-0 flex-col">
                            {/* Quote */}
                            <div className="relative">
                                <Quote
                                    size={
                                        desktopCompact
                                            ? 28
                                            : 36
                                    }
                                    fill="currentColor"
                                    className="absolute -left-1 -top-2 text-cyan-300/[0.08]"
                                />

                                <p
                                    className={[
                                        "relative pl-6 font-medium text-blue-50/76",
                                        desktopCompact
                                            ? "max-w-[430px] text-[10px] leading-[1.46]"
                                            : "max-w-[700px] text-[12px] leading-[1.68] sm:text-[13px] lg:text-[14px]",
                                    ].join(" ")}
                                >
                                    {
                                        testimonial.quote
                                    }
                                </p>
                            </div>

                            {/* Clean verification row */}
                            <div
                                className={[
                                    "flex items-center gap-2.5",
                                    desktopCompact
                                        ? "mt-2.5"
                                        : "mt-4",
                                ].join(" ")}
                            >
                                <div
                                    className={[
                                        "flex items-center gap-1.5 rounded-full border",
                                        desktopCompact
                                            ? "px-2 py-1"
                                            : "px-2.5 py-1.5",
                                        theme.border,
                                        theme.accentBackground,
                                    ].join(" ")}
                                >
                                    <ShieldCheck
                                        size={
                                            desktopCompact
                                                ? 8
                                                : 9
                                        }
                                        className="text-emerald-300"
                                    />

                                    <span
                                        className={[
                                            "font-semibold uppercase tracking-[0.12em] text-cyan-100/42",
                                            desktopCompact
                                                ? "text-[5px]"
                                                : "text-[6px]",
                                        ].join(" ")}
                                    >
                                        Client feedback verified
                                    </span>
                                </div>
                            </div>

                            {/* Automation */}
                            <div
                                className={
                                    desktopCompact
                                        ? "mt-auto mb-[10px]"
                                        : "mt-auto"
                                }
                            >
                                <TestimonialAutomationFlow
                                    theme={theme}
                                    desktopCompact={
                                        desktopCompact
                                    }
                                />
                            </div>
                        </div>

                        {/* RIGHT IMPACT MODULE */}
                        <div className="flex min-w-0 flex-col">
                            <div
                                className={[
                                    "relative flex-1 overflow-hidden rounded-[20px] border",
                                    desktopCompact
                                        ? "p-3"
                                        : "p-4",
                                    theme.border,
                                    theme.accentBackground,
                                ].join(" ")}
                            >
                                {/* Accent orbit */}
                                <motion.div
                                    className={[
                                        "pointer-events-none absolute rounded-full border",
                                        desktopCompact
                                            ? "-right-6 -top-6 h-24 w-24"
                                            : "-right-8 -top-8 h-28 w-28",
                                        theme.border,
                                    ].join(" ")}
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        duration: 9,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-2">
                                            <div
                                                className={[
                                                    "flex items-center justify-center rounded-lg border",
                                                    desktopCompact
                                                        ? "h-6 w-6"
                                                        : "h-7 w-7",
                                                    theme.border,
                                                ].join(" ")}
                                            >
                                                <TrendingUp
                                                    size={
                                                        desktopCompact
                                                            ? 10
                                                            : 12
                                                    }
                                                    className={
                                                        theme.icon
                                                    }
                                                />
                                            </div>

                                            <span
                                                className={[
                                                    "font-semibold uppercase tracking-[0.15em] text-blue-100/35",
                                                    desktopCompact
                                                        ? "text-[5px]"
                                                        : "text-[7px]",
                                                ].join(" ")}
                                            >
                                                Business Impact
                                            </span>
                                        </div>

                                        <Sparkles
                                            size={
                                                desktopCompact
                                                    ? 9
                                                    : 11
                                            }
                                            className={
                                                theme.icon
                                            }
                                        />
                                    </div>

                                    <p
                                        className={[
                                            "font-semibold uppercase tracking-[0.14em] text-blue-100/28",
                                            desktopCompact
                                                ? "mt-4 text-[5px]"
                                                : "mt-6 text-[8px]",
                                        ].join(" ")}
                                    >
                                        Reported Result
                                    </p>

                                    <div
                                        className={[
                                            "flex items-end gap-22",
                                            desktopCompact
                                                ? "mt-1.5"
                                                : "mt-2",
                                        ].join(" ")}
                                    >
                                        <span
                                            className={[
                                                "font-semibold leading-none tracking-[-0.06em] text-white",
                                                desktopCompact
                                                    ? "text-[34px]"
                                                    : "text-[39px]",
                                            ].join(" ")}
                                        >
                                            {
                                                testimonial.result
                                            }
                                        </span>

                                        <ArrowUpRight
                                            size={
                                                desktopCompact
                                                    ? 12
                                                    : 15
                                            }
                                            className={[
                                                "mb-1.5",
                                                theme.icon,
                                            ].join(
                                                " ",
                                            )}
                                        />
                                    </div>

                                    <p
                                        className={[
                                            "max-w-[160px] leading-[1.45] text-cyan-100/40",
                                            desktopCompact
                                                ? "mt-1 text-[6px]"
                                                : "mt-2 text-[8px]",
                                        ].join(" ")}
                                    >
                                        {
                                            testimonial.resultLabel
                                        }
                                    </p>

                                    <div
                                        className={[
                                            "rounded-[14px] border border-white/[0.06] bg-black/10",
                                            desktopCompact
                                                ? "mt-3 p-2"
                                                : "mt-5 p-3",
                                        ].join(" ")}
                                    >
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="text-[6px] font-semibold uppercase tracking-[0.13em] text-blue-100/28">
                                                System Activity
                                            </span>

                                            <span className="flex items-center gap-1 text-[6px] font-semibold uppercase tracking-[0.1em] text-emerald-100/45">
                                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_7px_rgba(52,211,153,0.72)]" />

                                                Live
                                            </span>
                                        </div>

                                        <p
                                            className={[
                                                "font-semibold text-white/70",
                                                desktopCompact
                                                    ? "mt-1.5 text-[7px]"
                                                    : "mt-2 text-[9px]",
                                            ].join(" ")}
                                        >
                                            {
                                                testimonial.activity
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* =============================================
                        RESULT / STATUS
                    ============================================= */}

                    <TestimonialResultPanel
                        testimonial={
                            testimonial
                        }
                        theme={theme}
                        desktopCompact={
                            desktopCompact
                        }
                    />
                </div>
            </div>
        </motion.article>
    );
};

/* =========================================================
   DESKTOP POSITION
========================================================= */

const GetDesktopOffset = (
    Index,
    ActiveIndex,
    Total,
) => {
    let Offset = Index - ActiveIndex;

    if (Offset > Total / 2) {
        Offset -= Total;
    }

    if (Offset < -Total / 2) {
        Offset += Total;
    }

    return Offset;
};

/* =========================================================
   TESTIMONIALS
========================================================= */

const Testimonials = () => {
    const [ActiveIndex, SetActiveIndex] =
        useState(0);

    const [IsPaused, SetIsPaused] =
        useState(false);

    /* =====================================================
       AUTO PLAY
    ===================================================== */

    useEffect(() => {
        if (IsPaused) {
            return undefined;
        }

        const Timer = window.setInterval(() => {
            SetActiveIndex(
                (Current) =>
                    (Current + 1) %
                    TestimonialsData.length,
            );
        }, 4600);

        return () => {
            window.clearInterval(Timer);
        };
    }, [IsPaused]);

    /* =====================================================
       ACTIVE
    ===================================================== */

    const ActiveTestimonial =
        TestimonialsData[ActiveIndex];

    const ActiveTheme = GetTheme(
        ActiveTestimonial.theme,
    );

    /* =====================================================
       DESKTOP CARDS
    ===================================================== */

    const DesktopCards = useMemo(() => {
        return TestimonialsData.map(
            (Testimonial, Index) => {
                const Offset = GetDesktopOffset(
                    Index,
                    ActiveIndex,
                    TestimonialsData.length,
                );

                return {
                    Testimonial,
                    Index,
                    Offset,
                };
            },
        );
    }, [ActiveIndex]);

    return (
        <section
            id="testimonials"
            className="relative w-full overflow-hidden bg-[#061633] text-white"
            onMouseEnter={() =>
                SetIsPaused(true)
            }
            onMouseLeave={() =>
                SetIsPaused(false)
            }
        >
            {/* =================================================
                BACKGROUND ATMOSPHERE
            ================================================= */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* Main glow */}
                <motion.div
                    className="absolute left-1/2 top-[48%] h-[420px] w-[1050px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.045] blur-[140px]"
                    animate={{
                        scale: [0.96, 1.04, 0.96],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Cyan */}
                <motion.div
                    className="absolute left-[-5%] top-[36%] h-[220px] w-[260px] rounded-full bg-cyan-400/[0.025] blur-[100px]"
                    animate={{
                        x: [0, 28, 0],
                        y: [0, -18, 0],
                    }}
                    transition={{
                        duration: 11,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Violet */}
                <motion.div
                    className="absolute right-[-5%] top-[24%] h-[240px] w-[280px] rounded-full bg-violet-500/[0.025] blur-[110px]"
                    animate={{
                        x: [0, -24, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 13,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Floor */}
                <div className="absolute bottom-[-5%] left-1/2 h-[110px] w-[72%] -translate-x-1/2 rounded-[50%] bg-cyan-400/[0.04] blur-[80px]" />

                {/* Grid */}
                <div className="absolute inset-0 opacity-[0.012] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />

                {/* Edge lines */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/15 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-300/10 to-transparent" />

                {/* Orbit */}
                <motion.div
                    className="absolute left-1/2 top-[57%] h-[430px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-cyan-300/[0.018]"
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 24,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                <motion.div
                    className="absolute left-1/2 top-[57%] h-[350px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-violet-300/[0.012]"
                    animate={{
                        rotate: -360,
                    }}
                    transition={{
                        duration: 29,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-12 sm:px-8 sm:py-14 lg:px-8 lg:py-16">
                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-[720px]">
                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.035] px-3 py-1.5">
                            <span className="relative flex h-[5px] w-[5px]">
                                <span className="absolute inset-0 animate-ping rounded-full bg-cyan-300 opacity-25" />

                                <span className="relative h-[5px] w-[5px] rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(25,211,255,0.7)]" />
                            </span>

                            <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-cyan-100/65">
                                Clients Love Us
                            </span>
                        </div>

                        <h2 className="mt-4 text-[31px] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-[39px] lg:text-[43px]">
                            What Our Clients Say
                        </h2>

                        <p className="mt-3 max-w-[670px] text-[12px] font-medium leading-[1.7] text-blue-100/55 sm:text-[13px]">
                            Real people. Real outcomes. Intelligent systems
                            quietly removing repetitive work behind the scenes.
                        </p>
                    </div>

                    <div className="hidden items-center gap-3 rounded-full border border-blue-300/10 bg-blue-300/[0.025] px-4 py-2.5 shadow-[0_10px_28px_rgba(0,0,0,0.2)] lg:flex">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-300 opacity-25" />

                            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_7px_rgba(52,211,153,0.72)]" />
                        </span>

                        <span className="text-[7px] font-semibold uppercase tracking-[0.15em] text-blue-100/35">
                            Testimonial engine online
                        </span>

                        <Zap
                            size={10}
                            className="text-cyan-300"
                        />
                    </div>
                </div>

                {/* =================================================
                    DESKTOP EXPERIENCE
                ================================================= */}

                <div className="mt-10 hidden lg:block">
                    <div className="relative mx-auto h-[420px] max-w-[1160px]">
                        {DesktopCards.map(
                            ({
                                Testimonial,
                                Offset,
                            }) => {
                                const IsCenter =
                                    Offset === 0;

                                if (
                                    Math.abs(Offset) >
                                    1
                                ) {
                                    return null;
                                }

                                return (
                                    <motion.div
                                        key={
                                            Testimonial.id
                                        }
                                        className="absolute left-1/2 top-1/2 h-[370px] w-[690px] -translate-x-1/2 -translate-y-1/2"
                                        animate={{
                                            x:
                                                Offset ===
                                                    0
                                                    ? 0
                                                    : Offset >
                                                        0
                                                        ? 330
                                                        : -330,
                                            y:
                                                Offset ===
                                                    0
                                                    ? 0
                                                    : 5,
                                            opacity:
                                                IsCenter
                                                    ? 1
                                                    : 0.5,
                                        }}
                                        transition={{
                                            duration: 0.9,
                                            ease: [
                                                0.16,
                                                1,
                                                0.3,
                                                1,
                                            ],
                                        }}
                                        style={{
                                            zIndex:
                                                IsCenter
                                                    ? 30
                                                    : 10,
                                        }}
                                    >
                                        <TestimonialCard
                                            testimonial={
                                                Testimonial
                                            }
                                            isCenter={
                                                IsCenter
                                            }
                                            desktopCompact
                                        />
                                    </motion.div>
                                );
                            },
                        )}
                    </div>
                </div>

                {/* =================================================
                    TABLET
                ================================================= */}

                <div className="mt-9 block lg:hidden">
                    <div className="mx-auto w-full max-w-[820px]">
                        <motion.div
                            key={
                                ActiveTestimonial.id
                            }
                            initial={{
                                opacity: 0,
                                y: 16,
                                scale: 0.985,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.65,
                                ease: [
                                    0.16,
                                    1,
                                    0.3,
                                    1,
                                ],
                            }}
                            className="hidden md:block"
                        >
                            <div className="h-[500px]">
                                <TestimonialCard
                                    testimonial={
                                        ActiveTestimonial
                                    }
                                    isCenter
                                />
                            </div>
                        </motion.div>

                        {/* PHONE */}

                        <motion.div
                            key={`mobile-${ActiveTestimonial.id}`}
                            initial={{
                                opacity: 0,
                                y: 18,
                                scale: 0.98,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.6,
                                ease: [
                                    0.16,
                                    1,
                                    0.3,
                                    1,
                                ],
                            }}
                            className="block md:hidden"
                        >
                            <div className="h-auto min-h-[650px]">
                                <TestimonialCard
                                    testimonial={
                                        ActiveTestimonial
                                    }
                                    isCenter
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* =================================================
                    CONTROLS
                ================================================= */}

                <div className="relative z-50 mt-8 flex items-center justify-center gap-4">
                    <button
                        type="button"
                        onClick={() => {
                            SetIsPaused(true);

                            SetActiveIndex(
                                (Current) =>
                                    (Current -
                                        1 +
                                        TestimonialsData.length) %
                                    TestimonialsData.length,
                            );

                            window.setTimeout(() => {
                                SetIsPaused(false);
                            }, 900);
                        }}
                        aria-label="Previous testimonial"
                        className="flex h-10 w-10 items-center justify-center rounded-full"
                    >
                        <PremiumIconBadge
                            icon={ArrowLeft}
                            size="default"
                        />
                    </button>

                    {/* Dots */}
                    <div className="flex items-center gap-1.5">
                        {TestimonialsData.map(
                            (
                                Testimonial,
                                Index,
                            ) => (
                                <button
                                    key={
                                        Testimonial.id
                                    }
                                    type="button"
                                    aria-label={`Show testimonial ${Testimonial.number}`}
                                    onClick={() => {
                                        SetActiveIndex(
                                            Index,
                                        );
                                    }}
                                    className="group relative h-[5px] rounded-full"
                                >
                                    <motion.span
                                        animate={{
                                            width:
                                                ActiveIndex ===
                                                    Index
                                                    ? 34
                                                    : 7,
                                            opacity:
                                                ActiveIndex ===
                                                    Index
                                                    ? 1
                                                    : 0.3,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                        }}
                                        className={[
                                            "block h-[5px] rounded-full bg-gradient-to-r",
                                            ActiveIndex ===
                                                Index
                                                ? ActiveTheme.accentGradient
                                                : "from-blue-300/30 via-blue-300/20 to-violet-300/20",
                                        ].join(" ")}
                                    />
                                </button>
                            ),
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={() => {
                            SetIsPaused(true);

                            SetActiveIndex(
                                (Current) =>
                                    (Current + 1) %
                                    TestimonialsData.length,
                            );

                            window.setTimeout(() => {
                                SetIsPaused(false);
                            }, 900);
                        }}
                        aria-label="Next testimonial"
                        className="flex h-10 w-10 items-center justify-center rounded-full"
                    >
                        <PremiumIconBadge
                            icon={ArrowRight}
                            size="default"
                        />
                    </button>
                </div>

                {/* =================================================
                    LIVE STATUS
                ================================================= */}

                <div className="mt-5 flex items-center justify-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-300 opacity-25" />

                        <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_7px_rgba(52,211,153,0.7)]" />
                    </span>

                    <span className="text-[6px] font-semibold uppercase tracking-[0.15em] text-blue-100/28">
                        {IsPaused
                            ? "Testimonials paused"
                            : "Auto rotating client stories"}
                    </span>
                </div>
            </div>

            {/* =================================================
                RESPONSIVE REFINEMENTS
            ================================================= */}

            <style>{`
                @media (min-width: 640px) and (max-width: 1023px) {
                    #testimonials {
                        min-height: 760px;
                    }
                }

                @media (max-width: 639px) {
                    #testimonials {
                        min-height: 0;
                    }
                }

                @media (max-width: 420px) {
                    #testimonials {
                        overflow: hidden;
                    }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;