import {
    Activity,
    ArrowUpRight,
    BarChart3,
    Bot,
    CheckCircle2,
    Database,
    Globe2,
    LineChart,
    Layers3,
    MessagesSquare,
    ShoppingBag,
    UsersRound,
    Workflow,
} from "lucide-react";
import { useEffect, useState } from "react";

import HeroActionButton from "../../../components/UI/HeroActionButton";
import PremiumIconBadge from "../../../components/UI/PremiumIconBadge";

/* =========================================================
   PROJECT DATA
========================================================= */

const ProjectsData = [
    {
        id: "ecommerce",
        category: "E-commerce",
        title: "E-commerce Platform",
        description:
            "Online store with AI recommendations and automated order workflows.",
        activity: "AI recommendations active",
        metric: "32.8K",
        metricLabel: "Monthly orders",
        icon: ShoppingBag,
        accent: "cyan",
        previewType: "commerce",
        features: [
            "AI Recommendations",
            "Live Inventory",
            "Smart Checkout",
        ],
    },
    {
        id: "saas",
        category: "SaaS",
        title: "SaaS Dashboard",
        description:
            "Automated analytics, reporting and intelligent business insights.",
        activity: "Reporting automated",
        metric: "98.7%",
        metricLabel: "Automation rate",
        icon: BarChart3,
        accent: "violet",
        previewType: "saas",
        features: [
            "Live Analytics",
            "Auto Reporting",
            "Smart Insights",
        ],
    },
    {
        id: "crm",
        category: "CRM",
        title: "CRM System",
        description:
            "Lead management, smart follow-ups and automated customer workflows.",
        activity: "Lead flow running",
        metric: "4.8K",
        metricLabel: "Active leads",
        icon: UsersRound,
        accent: "blue",
        previewType: "crm",
        features: [
            "Lead Scoring",
            "Auto Follow-up",
            "Pipeline Sync",
        ],
    },
];

/* =========================================================
   ACCENT THEMES
========================================================= */

const ProjectAccentThemes = {
    cyan: {
        glow: "bg-cyan-400/[0.10]",
        border: "border-cyan-300/20",
        text: "text-cyan-200",
        icon:
            "border-cyan-300/20 bg-[linear-gradient(145deg,#104B78,#071F43)] text-cyan-300",
        dot: "bg-cyan-300",
        gradient:
            "from-cyan-400/20 via-blue-500/10 to-transparent",
    },

    violet: {
        glow: "bg-violet-400/[0.10]",
        border: "border-violet-300/20",
        text: "text-violet-200",
        icon:
            "border-violet-300/20 bg-[linear-gradient(145deg,#51308E,#24174D)] text-violet-200",
        dot: "bg-violet-300",
        gradient:
            "from-violet-400/20 via-blue-500/10 to-transparent",
    },

    blue: {
        glow: "bg-blue-500/[0.10]",
        border: "border-blue-300/20",
        text: "text-blue-100",
        icon:
            "border-blue-300/20 bg-[linear-gradient(145deg,#174B8D,#081F45)] text-blue-200",
        dot: "bg-blue-300",
        gradient:
            "from-blue-400/20 via-cyan-400/10 to-transparent",
    },
};

/* =========================================================
   SKELETON
========================================================= */

const PreviewSkeleton = () => {
    return (
        <div className="absolute inset-0 z-20 bg-[#071A38] p-4">
            <div className="preview-skeleton-sweep pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.045] to-transparent" />

            <div className="flex items-center justify-between">
                <div className="h-3 w-24 rounded-full bg-white/[0.08]" />
                <div className="h-3 w-12 rounded-full bg-white/[0.06]" />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="h-12 rounded-lg bg-white/[0.045]" />
                <div className="h-12 rounded-lg bg-white/[0.035]" />
                <div className="h-12 rounded-lg bg-white/[0.045]" />
            </div>

            <div className="mt-3 h-20 rounded-lg bg-white/[0.035]" />

            <div className="mt-3 flex gap-2">
                <div className="h-2 flex-1 rounded-full bg-white/[0.06]" />
                <div className="h-2 w-20 rounded-full bg-white/[0.045]" />
            </div>
        </div>
    );
};

/* =========================================================
   COMMERCE PREVIEW
========================================================= */

const CommercePreview = ({ theme }) => {
    return (
        <div className="absolute inset-0 p-3">
            <div className="flex items-center gap-2 border-b border-white/[0.05] pb-2">
                <div
                    className={`flex h-7 w-7 items-center justify-center rounded-lg border ${theme.border} ${theme.icon}`}
                >
                    <ShoppingBag size={13} />
                </div>

                <div>
                    <p className="text-[9px] font-semibold text-white">
                        Store Overview
                    </p>

                    <p className="mt-0.5 text-[6px] text-white/35">
                        AI Commerce Engine
                    </p>
                </div>

                <div className="ml-auto flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_7px_rgba(52,211,153,0.75)]" />
                    <span className="text-[6px] text-emerald-200/60">
                        Live
                    </span>
                </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                    ["Orders", "2,842"],
                    ["Revenue", "$84K"],
                    ["AOV", "$126"],
                ].map(([Label, Value]) => (
                    <div
                        key={Label}
                        className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-2"
                    >
                        <p className="text-[6px] uppercase tracking-[0.12em] text-white/30">
                            {Label}
                        </p>

                        <p className="mt-1 text-[10px] font-semibold text-white">
                            {Value}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-2 rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5">
                <div className="flex items-center justify-between">
                    <span className="text-[7px] text-white/40">
                        AI Conversion Trend
                    </span>

                    <span className="text-[7px] text-cyan-200/60">
                        +24.6%
                    </span>
                </div>

                <div className="mt-2 flex h-[38px] items-end gap-1">
                    {[15, 24, 19, 31, 25, 34, 29, 39, 36, 44].map(
                        (Height, Index) => (
                            <span
                                key={Index}
                                className={`flex-1 rounded-t-[2px] ${Index > 6
                                        ? "bg-cyan-300/55"
                                        : "bg-blue-400/30"
                                    }`}
                                style={{
                                    height: `${Height}%`,
                                }}
                            />
                        ),
                    )}
                </div>
            </div>

            <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_7px_rgba(25,211,255,0.7)]" />
                    <span className="text-[6px] text-white/40">
                        Recommendation engine
                    </span>
                </div>

                <span className="text-[6px] text-cyan-200/60">
                    Running
                </span>
            </div>
        </div>
    );
};

/* =========================================================
   SAAS PREVIEW
========================================================= */

const SaasPreview = ({ theme }) => {
    return (
        <div className="absolute inset-0 p-3">
            <div className="flex items-center justify-between border-b border-white/[0.05] pb-2">
                <div className="flex items-center gap-2">
                    <div
                        className={`flex h-7 w-7 items-center justify-center rounded-lg border ${theme.border} ${theme.icon}`}
                    >
                        <BarChart3 size={13} />
                    </div>

                    <div>
                        <p className="text-[9px] font-semibold text-white">
                            Analytics Center
                        </p>

                        <p className="mt-0.5 text-[6px] text-white/35">
                            Automated reporting
                        </p>
                    </div>
                </div>

                <span className="rounded-full border border-violet-300/15 bg-violet-300/[0.07] px-2 py-1 text-[6px] text-violet-200/70">
                    AI Insights
                </span>
            </div>

            <div className="mt-3 grid grid-cols-[1fr_0.65fr] gap-2">
                <div className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-2">
                    <div className="flex items-center justify-between">
                        <span className="text-[6px] text-white/35">
                            Performance
                        </span>

                        <LineChart
                            size={9}
                            className="text-violet-300"
                        />
                    </div>

                    <div className="mt-2 flex h-[48px] items-end gap-1">
                        {[22, 30, 26, 44, 38, 52, 46, 62, 57, 71].map(
                            (Height, Index) => (
                                <span
                                    key={Index}
                                    className="flex-1 rounded-t-[2px] bg-gradient-to-t from-violet-400/30 to-cyan-300/60"
                                    style={{
                                        height: `${Height}%`,
                                    }}
                                />
                            ),
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-2">
                        <p className="text-[6px] text-white/30">
                            Accuracy
                        </p>

                        <p className="mt-1 text-[12px] font-semibold text-white">
                            98.7%
                        </p>
                    </div>

                    <div className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-2">
                        <p className="text-[6px] text-white/30">
                            Reports
                        </p>

                        <p className="mt-1 text-[12px] font-semibold text-white">
                            1,248
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-2 flex items-center gap-2 rounded-lg border border-violet-300/10 bg-violet-300/[0.035] px-2 py-1.5">
                <Bot
                    size={9}
                    className="text-violet-300"
                />

                <span className="text-[6px] text-violet-100/55">
                    AI generated weekly report automatically
                </span>
            </div>
        </div>
    );
};

/* =========================================================
   CRM PREVIEW
========================================================= */

const CrmPreview = ({ theme }) => {
    return (
        <div className="absolute inset-0 p-3">
            <div className="flex items-center gap-2 border-b border-white/[0.05] pb-2">
                <div
                    className={`flex h-7 w-7 items-center justify-center rounded-lg border ${theme.border} ${theme.icon}`}
                >
                    <UsersRound size={13} />
                </div>

                <div>
                    <p className="text-[9px] font-semibold text-white">
                        CRM Workspace
                    </p>

                    <p className="mt-0.5 text-[6px] text-white/35">
                        Intelligent lead automation
                    </p>
                </div>

                <div className="ml-auto flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_7px_rgba(25,211,255,0.7)]" />
                    <span className="text-[6px] text-cyan-100/50">
                        Syncing
                    </span>
                </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                    ["New", "248"],
                    ["Qualified", "164"],
                    ["Won", "72"],
                ].map(([Label, Value]) => (
                    <div
                        key={Label}
                        className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-2"
                    >
                        <p className="text-[6px] text-white/30">
                            {Label}
                        </p>

                        <p className="mt-1 text-[11px] font-semibold text-white">
                            {Value}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-2 rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
                <div className="flex items-center justify-between">
                    <span className="text-[6px] uppercase tracking-[0.12em] text-white/28">
                        Lead pipeline
                    </span>

                    <Workflow
                        size={9}
                        className="text-blue-300"
                    />
                </div>

                <div className="mt-2 space-y-1.5">
                    {[
                        ["Lead score", "92%"],
                        ["Follow-up", "Auto"],
                        ["Assignment", "AI"],
                    ].map(([Label, Value]) => (
                        <div
                            key={Label}
                            className="flex items-center justify-between rounded-md bg-white/[0.025] px-2 py-1"
                        >
                            <span className="text-[6px] text-white/35">
                                {Label}
                            </span>

                            <span className="text-[6px] font-semibold text-cyan-200/65">
                                {Value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-2 flex items-center gap-2">
                <CheckCircle2
                    size={9}
                    className="text-emerald-300"
                />

                <span className="text-[6px] text-emerald-100/45">
                    Automation workflow completed
                </span>
            </div>
        </div>
    );
};

/* =========================================================
   PREVIEW CONTENT
========================================================= */

const ProjectPreviewContent = ({
    project,
    theme,
}) => {
    const PreviewMap = {
        commerce: CommercePreview,
        saas: SaasPreview,
        crm: CrmPreview,
    };

    const PreviewComponent =
        PreviewMap[project.previewType] ||
        CommercePreview;

    return (
        <PreviewComponent
            project={project}
            theme={theme}
        />
    );
};

/* =========================================================
   PROJECT PREVIEW
========================================================= */

const ProjectPreview = ({
    project,
    theme,
    index,
    isActive,
}) => {
    const [IsLoaded, SetIsLoaded] = useState(false);

    useEffect(() => {
        SetIsLoaded(false);

        const Timer = window.setTimeout(() => {
            SetIsLoaded(true);
        }, 850 + index * 180);

        return () => window.clearTimeout(Timer);
    }, [project.id, index]);

    return (
        <div className="relative h-[190px] overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#071A38] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            {/* Ambient glow */}
            <div
                className={`pointer-events-none absolute -right-[12%] -top-[55%] h-[240px] w-[240px] rounded-full ${theme.glow} blur-[85px]`}
            />

            {/* =====================================================
                SKELETON
            ===================================================== */}

            <div
                className={`absolute inset-0 z-20 transition-all duration-700 ${IsLoaded
                        ? "pointer-events-none -translate-y-3 opacity-0"
                        : "opacity-100"
                    }`}
            >
                <PreviewSkeleton />
            </div>

            {/* =====================================================
                ACTUAL PRODUCT UI
            ===================================================== */}

            <div
                className={`absolute inset-0 z-10 transition-all duration-700 ${IsLoaded
                        ? "translate-y-0 scale-100 opacity-100"
                        : "translate-y-3 scale-[0.985] opacity-0"
                    }`}
            >
                <ProjectPreviewContent
                    project={project}
                    theme={theme}
                />
            </div>

            {/* =====================================================
                LIVE AUTOMATION SIGNAL
            ===================================================== */}

            <div className="absolute bottom-2.5 left-3 z-30 flex items-center gap-2 rounded-full border border-emerald-300/10 bg-[#03132C]/75 px-2.5 py-1 backdrop-blur-md">
                <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inset-0 animate-ping rounded-full bg-emerald-300 opacity-30" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_7px_rgba(52,211,153,0.75)]" />
                </span>

                <span className="text-[6px] font-semibold uppercase tracking-[0.12em] text-emerald-100/55">
                    {project.activity}
                </span>
            </div>

            {/* =====================================================
                SCANLINE
            ===================================================== */}

            <div className="project-preview-scan pointer-events-none absolute inset-x-0 top-0 z-40 h-px bg-gradient-to-r from-transparent via-cyan-100/60 to-transparent" />

            {/* Technical corners */}
            <span className="pointer-events-none absolute left-2 top-2 z-40 h-4 w-4 border-l border-t border-cyan-300/15" />
            <span className="pointer-events-none absolute right-2 top-2 z-40 h-4 w-4 border-r border-t border-cyan-300/15" />
            <span className="pointer-events-none absolute bottom-2 left-2 z-40 h-4 w-4 border-b border-l border-cyan-300/10" />
            <span className="pointer-events-none absolute bottom-2 right-2 z-40 h-4 w-4 border-b border-r border-cyan-300/10" />

            {/* Active edge */}
            {isActive && (
                <div
                    className={`pointer-events-none absolute inset-0 z-30 rounded-[14px] border ${theme.border} shadow-[inset_0_0_25px_rgba(25,211,255,0.025)]`}
                />
            )}
        </div>
    );
};

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({
    project,
    index,
    isActive,
}) => {
    const theme =
        ProjectAccentThemes[project.accent] ||
        ProjectAccentThemes.blue;

    return (
        <article
            className={`featured-project-card group relative min-w-0 ${isActive
                    ? "featured-project-card-active"
                    : ""
                }`}
        >
            {/* Rear depth */}
            <div className="absolute inset-x-[5px] bottom-[-5px] top-[5px] rounded-[17px] border border-blue-500/10 bg-[#020B20]/90" />

            {/* Ambient glow */}
            <div
                className={`pointer-events-none absolute -inset-3 rounded-[22px] ${theme.glow} opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100`}
            />

            {/* Main card */}
            <div className="featured-project-main relative overflow-hidden rounded-[17px] border border-blue-300/15 bg-[linear-gradient(145deg,rgba(8,31,70,0.97),rgba(3,17,40,0.99))] p-[11px] shadow-[0_16px_36px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-700 group-hover:-translate-y-2 group-hover:border-cyan-300/25 group-hover:shadow-[0_24px_45px_rgba(0,0,0,0.44),0_0_30px_rgba(22,119,255,0.09)]">
                {/* Top edge */}
                <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                {/* Moving reflection */}
                <span className="featured-project-reflection pointer-events-none absolute -left-[35%] top-[-80%] h-[260%] w-[18%] rotate-[21deg] bg-gradient-to-r from-transparent via-white/[0.055] to-transparent opacity-0 transition-all duration-[1200ms] group-hover:left-[120%] group-hover:opacity-100" />

                {/* =================================================
                    PREVIEW
                ================================================= */}

                <ProjectPreview
                    project={project}
                    theme={theme}
                    index={index}
                    isActive={isActive}
                />

                {/* =================================================
                    PROJECT CONTENT
                ================================================= */}

                <div className="px-1 pb-1 pt-4">
                    <div className="flex items-start gap-3">
                        {/* Text */}
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                                <span
                                    className={`rounded-full border ${theme.border} bg-white/[0.02] px-2 py-1 text-[7px] font-semibold uppercase tracking-[0.14em] ${theme.text}`}
                                >
                                    {project.category}
                                </span>

                                <span className="flex items-center gap-1 text-[7px] font-medium uppercase tracking-[0.1em] text-blue-100/30">
                                    <span
                                        className={`h-[4px] w-[4px] rounded-full ${theme.dot} shadow-[0_0_6px_rgba(25,211,255,0.65)]`}
                                    />
                                    Featured
                                </span>
                            </div>

                            <h3 className="mt-2 text-[16px] font-semibold leading-tight tracking-tight text-white">
                                {project.title}
                            </h3>

                            <p className="mt-1.5 text-[12px] font-medium leading-[1.5] text-blue-100/60">
                                {project.description}
                            </p>
                        </div>

                        {/* =================================================
                            PREMIUM RIGHT ICON
                            Extra top spacing from preview
                        ================================================= */}

                        <div className="relative mt-1 shrink-0">
                            <div className="origin-top-right scale-[0.72]">
                                <PremiumIconBadge
                                    icon={ArrowUpRight}
                                    size="default"
                                />
                            </div>
                        </div>
                    </div>

                    {/* =================================================
                        FEATURES
                    ================================================= */}

                    <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.features.map((Feature) => (
                            <span
                                key={Feature}
                                className="flex items-center gap-1.5 rounded-full border border-blue-300/10 bg-blue-300/[0.025] px-2 py-1"
                            >
                                <span className="h-[4px] w-[4px] rounded-full bg-cyan-300/75 shadow-[0_0_5px_rgba(25,211,255,0.5)]" />

                                <span className="text-[8px] font-medium text-blue-100/42">
                                    {Feature}
                                </span>
                            </span>
                        ))}
                    </div>

                    {/* =================================================
                        AUTOMATION METADATA
                    ================================================= */}

                    <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/[0.045] pt-2.5">
                        <div className="flex min-w-0 items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded-lg border border-emerald-300/10 bg-emerald-300/[0.035]">
                                <Activity
                                    size={10}
                                    className="text-emerald-300"
                                />
                            </div>

                            <div className="min-w-0">
                                <p className="truncate text-[8px] font-semibold text-white/65">
                                    Automation active
                                </p>

                                <p className="truncate text-[7px] text-blue-100/32">
                                    {project.activity}
                                </p>
                            </div>
                        </div>

                        <div className="shrink-0 text-right">
                            <p className="text-[7px] text-blue-100/30">
                                {project.metricLabel}
                            </p>

                            <p className="mt-0.5 text-[12px] font-semibold text-cyan-200/80">
                                {project.metric}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

/* =========================================================
   FEATURED WORK
========================================================= */

const FeaturedWork = () => {
    const [ActiveProject, SetActiveProject] = useState(0);

    /* =====================================================
       AUTOMATIC PROJECT CYCLE
    ===================================================== */

    useEffect(() => {
        const Interval = window.setInterval(() => {
            SetActiveProject((CurrentProject) => {
                return (
                    (CurrentProject + 1) %
                    ProjectsData.length
                );
            });
        }, 3200);

        return () => window.clearInterval(Interval);
    }, []);

    /* =====================================================
       PROJECT NAVIGATION
    ===================================================== */

    const HandleProjectsNavigation = () => {
        window.location.href = "/case-studies";
    };

    return (
        <section
            id="case-studies"
            className="relative w-full overflow-hidden bg-[#061633] text-white"
        >
            {/* =====================================================
                BACKGROUND
            ===================================================== */}

            <div className="pointer-events-none absolute inset-0">
                {/* Main atmosphere */}
                <div className="absolute left-1/2 top-[58%] h-[270px] w-[920px] -translate-x-1/2 rounded-full bg-blue-500/[0.04] blur-[125px]" />

                {/* Cyan */}
                <div className="absolute left-[6%] top-[48%] h-[190px] w-[250px] rounded-full bg-cyan-400/[0.018] blur-[95px]" />

                {/* Violet */}
                <div className="absolute right-[5%] top-[45%] h-[200px] w-[260px] rounded-full bg-violet-500/[0.022] blur-[100px]" />

                {/* Technical grid */}
                <div className="absolute inset-0 opacity-[0.016] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />

                {/* Center energy line */}
                <div className="absolute inset-x-[12%] top-[32%] h-px bg-gradient-to-r from-transparent via-blue-300/10 to-transparent" />

                {/* Edges */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/14 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent" />
            </div>

            {/* =====================================================
                CONTENT
            ===================================================== */}

            <div className="relative mx-auto max-w-[1400px] px-6 py-11 lg:px-8">
                {/* =================================================
                    TOP INTRO
                ================================================= */}

                <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
                    <div className="max-w-[780px]">
                        {/* Label */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.035] px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                            <span className="h-[5px] w-[5px] rounded-full bg-cyan-300 shadow-[0_0_7px_rgba(25,211,255,0.7)]" />

                            <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-cyan-100/65">
                                Our Portfolio
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="mt-4 text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-[40px]">
                            Featured Work
                        </h2>

                        {/* Description */}
                        <p className="mt-3 max-w-[620px] text-[12px] font-medium leading-[1.6] text-blue-100/58 sm:text-[13px]">
                            Real solutions, real automation and measurable
                            business impact — built around intelligent
                            digital systems.
                        </p>
                    </div>

                    {/* =================================================
                        EXISTING BUTTON COMPONENT
                    ================================================= */}

                    <div className="shrink-0">
                        <HeroActionButton
                            label="View All Projects"
                            icon={ArrowUpRight}
                            to="/case-studies"
                            variant="primary"
                        />
                    </div>
                </div>

                {/* =================================================
                    AUTOMATION RAIL
                ================================================= */}

                <div className="relative mt-7 h-px overflow-hidden bg-gradient-to-r from-transparent via-cyan-300/12 to-transparent">
                    <span className="featured-work-rail absolute left-[-80px] top-1/2 h-[3px] w-[80px] -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-cyan-200 to-transparent shadow-[0_0_14px_rgba(25,211,255,0.8)]" />
                </div>

                {/* =================================================
                    PROJECT GRID
                ================================================= */}

                <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
                    {ProjectsData.map(
                        (Project, Index) => (
                            <ProjectCard
                                key={Project.id}
                                project={Project}
                                index={Index}
                                isActive={
                                    ActiveProject ===
                                    Index
                                }
                            />
                        ),
                    )}
                </div>

                {/* =================================================
                    PROJECT NAVIGATION
                ================================================= */}

                <div className="mt-5 flex items-center justify-center gap-2">
                    {ProjectsData.map(
                        (Project, Index) => (
                            <button
                                key={Project.id}
                                type="button"
                                aria-label={`Show ${Project.title}`}
                                onClick={() =>
                                    SetActiveProject(
                                        Index,
                                    )
                                }
                                className={`h-[4px] rounded-full transition-all duration-500 ${ActiveProject === Index
                                        ? "w-8 bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 shadow-[0_0_9px_rgba(25,211,255,0.55)]"
                                        : "w-2 bg-blue-300/15 hover:bg-blue-300/35"
                                    }`}
                            />
                        ),
                    )}
                </div>
            </div>

            {/* =====================================================
                ANIMATIONS
            ===================================================== */}

            <style>{`
                .featured-project-main {
                    transform-style: preserve-3d;
                }

                .featured-project-card {
                    perspective: 1400px;
                }

                .featured-project-card-active
                    .featured-project-main {
                    box-shadow:
                        0 20px 42px rgba(0,0,0,0.38),
                        0 0 28px rgba(22,119,255,0.10),
                        inset 0 1px 0 rgba(255,255,255,0.10);
                }

                .featured-project-card:hover
                    .featured-project-main {
                    transform:
                        translateY(-6px)
                        rotateX(1deg)
                        rotateY(-0.6deg);
                }

                .preview-skeleton-sweep {
                    animation: previewSkeletonSweep 1.7s ease-in-out infinite;
                }

                .project-preview-scan {
                    animation: projectPreviewScan 3.8s ease-in-out infinite;
                }

                .featured-work-rail {
                    animation: featuredWorkRail 4.8s linear infinite;
                }

                @keyframes previewSkeletonSweep {
                    0% {
                        transform: translateX(-120%);
                    }

                    100% {
                        transform: translateX(150%);
                    }
                }

                @keyframes projectPreviewScan {
                    0%,
                    100% {
                        transform: translateY(0);
                        opacity: 0.18;
                    }

                    50% {
                        transform: translateY(175px);
                        opacity: 0.72;
                    }
                }

                @keyframes featuredWorkRail {
                    0% {
                        transform: translateX(0);
                        opacity: 0;
                    }

                    15% {
                        opacity: 1;
                    }

                    80% {
                        opacity: 0.75;
                    }

                    100% {
                        transform: translateX(1350px);
                        opacity: 0;
                    }
                }

                @media (max-width: 1023px) {
                    .featured-project-card-active
                        .featured-project-main {
                        transform: translateY(-3px);
                    }
                }

                @media (max-width: 767px) {
                    .featured-work-rail {
                        animation-duration: 5.6s;
                    }

                    .project-preview-scan {
                        animation-duration: 4.6s;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .preview-skeleton-sweep,
                    .project-preview-scan,
                    .featured-work-rail {
                        animation: none !important;
                    }

                    .featured-project-card:hover
                        .featured-project-main {
                        transform: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default FeaturedWork;