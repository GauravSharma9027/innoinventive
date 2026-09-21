import {
    ArrowLeft,
    ArrowRight,
    BrainCircuit,
    CheckCircle2,
    MessageSquareQuote,
    Quote,
    Sparkles,
    Stars,
    TrendingUp,
    Workflow,
    Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

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
        theme: "blue",
    },
];

/* =========================================================
   CAROUSEL CONFIG
========================================================= */

const CARD_WIDTH = 570;
const CARD_GAP = 28;
const CARD_STEP = CARD_WIDTH + CARD_GAP;
const CARD_HALF = CARD_WIDTH / 2;

/*
 * 3 copies allow the carousel to move continuously and
 * then silently reset to the middle copy after animation.
 */
const CarouselItems = [
    ...TestimonialsData,
    ...TestimonialsData,
    ...TestimonialsData,
];

/* =========================================================
   THEMES
========================================================= */

const TestimonialThemes = {
    cyan: {
        border: "border-cyan-300/25",
        softBorder: "border-cyan-300/15",
        glow: "bg-cyan-400/[0.10]",
        icon: "text-cyan-200",
        accent: "bg-cyan-300",
        accentText: "text-cyan-200",
        accentBackground: "bg-cyan-300/[0.055]",
    },

    violet: {
        border: "border-violet-300/25",
        softBorder: "border-violet-300/15",
        glow: "bg-violet-400/[0.10]",
        icon: "text-violet-200",
        accent: "bg-violet-300",
        accentText: "text-violet-200",
        accentBackground: "bg-violet-300/[0.055]",
    },

    blue: {
        border: "border-blue-300/25",
        softBorder: "border-blue-300/15",
        glow: "bg-blue-400/[0.10]",
        icon: "text-blue-100",
        accent: "bg-blue-300",
        accentText: "text-blue-100",
        accentBackground: "bg-blue-300/[0.055]",
    },
};

/* =========================================================
   HOLOGRAPHIC IDENTITY
========================================================= */

const HolographicIdentity = ({
    testimonial,
    theme,
    compact = false,
}) => {
    const SizeClasses = compact
        ? {
            wrapper: "h-[46px] w-[46px]",
            outer: "h-[42px] w-[42px]",
            inner: "h-[33px] w-[33px]",
            core: "h-[32px] w-[32px]",
            text: "text-[8px]",
        }
        : {
            wrapper: "h-[62px] w-[62px]",
            outer: "h-[58px] w-[58px]",
            inner: "h-[45px] w-[45px]",
            core: "h-[42px] w-[42px]",
            text: "text-[11px]",
        };

    return (
        <div
            className={[
                "relative flex items-center justify-center [perspective:900px]",
                SizeClasses.wrapper,
            ].join(" ")}
        >
            {/* Glow */}
            <span
                className={[
                    "pointer-events-none absolute -inset-3 rounded-full blur-xl",
                    theme.glow,
                ].join(" ")}
            />

            {/* Outer orbit */}
            <span
                className={[
                    "testimonial-orbit absolute rounded-full border border-cyan-300/10",
                    SizeClasses.outer,
                ].join(" ")}
            />

            {/* Inner orbit */}
            <span
                className={[
                    "testimonial-orbit-reverse absolute rounded-full border border-violet-300/10",
                    SizeClasses.inner,
                ].join(" ")}
            />

            {/* Core */}
            <div
                className={[
                    "relative z-10 flex items-center justify-center rounded-full border",
                    theme.border,
                    SizeClasses.core,
                    "bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.14),rgba(8,26,55,0.96)_52%,rgba(2,10,25,1))]",
                    "shadow-[0_10px_22px_rgba(0,0,0,0.42),0_0_24px_rgba(25,211,255,0.08),inset_0_1px_0_rgba(255,255,255,0.16)]",
                ].join(" ")}
            >
                <span
                    className={[
                        "absolute inset-[4px] rounded-full border opacity-50",
                        theme.softBorder,
                    ].join(" ")}
                />

                <span
                    className={[
                        "relative z-10 font-semibold tracking-[0.08em] text-white",
                        SizeClasses.text,
                    ].join(" ")}
                >
                    {testimonial.initials}
                </span>

                <span className="testimonial-identity-scan pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-cyan-300/[0.14] to-transparent" />
            </div>

            {/* Live signal */}
            <span
                className={[
                    "absolute right-[3px] top-[4px] z-20 rounded-full shadow-[0_0_9px_rgba(25,211,255,0.7)]",
                    theme.accent,
                    compact ? "h-[5px] w-[5px]" : "h-[6px] w-[6px]",
                ].join(" ")}
            />
        </div>
    );
};

/* =========================================================
   AUTOMATION FLOW
========================================================= */

const TestimonialAutomationFlow = ({
    theme,
}) => {
    const FlowData = [
        {
            id: "feedback",
            label: "Feedback Captured",
            icon: MessageSquareQuote,
        },
        {
            id: "insight",
            label: "AI Insight",
            icon: BrainCircuit,
        },
        {
            id: "followup",
            label: "Follow-up Triggered",
            icon: Workflow,
        },
        {
            id: "result",
            label: "Result Measured",
            icon: TrendingUp,
        },
    ];

    return (
        <div
            className={[
                "mt-5 rounded-[15px] border p-3.5",
                theme.softBorder,
                theme.accentBackground,
            ].join(" ")}
        >
            <div className="flex items-center justify-between gap-3">
                <div>
                    <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-cyan-100/42">
                        Client Automation
                    </p>

                    <p className="mt-1 text-[7px] text-blue-100/28">
                        Feedback becomes an actionable workflow.
                    </p>
                </div>

                <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-300/10 bg-emerald-300/[0.04] px-2 py-1">
                    <span className="relative flex h-[5px] w-[5px]">
                        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-300 opacity-30" />

                        <span className="relative h-[5px] w-[5px] rounded-full bg-emerald-300" />
                    </span>

                    <span className="text-[6px] font-semibold uppercase tracking-[0.12em] text-emerald-100/45">
                        Live
                    </span>
                </div>
            </div>

            <div className="mt-3 grid grid-cols-4 gap-1.5">
                {FlowData.map((Item, Index) => {
                    const Icon = Item.icon;

                    return (
                        <div
                            key={Item.id}
                            className="relative min-w-0"
                        >
                            <div className="flex h-[56px] flex-col items-center justify-center rounded-xl border border-blue-300/10 bg-[#061A37]/65 px-1.5">
                                <div
                                    className={[
                                        "flex h-7 w-7 items-center justify-center rounded-lg border",
                                        theme.softBorder,
                                        theme.accentBackground,
                                    ].join(" ")}
                                >
                                    <Icon
                                        size={11}
                                        className={theme.icon}
                                    />
                                </div>

                                <span className="mt-1.5 line-clamp-1 text-center text-[6px] font-medium text-blue-100/38">
                                    {Item.label}
                                </span>
                            </div>

                            {Index <
                                FlowData.length - 1 && (
                                    <span className="testimonial-connector absolute -right-[7px] top-1/2 z-20 h-px w-[12px] -translate-y-1/2 bg-blue-300/12">
                                        <span
                                            className={[
                                                "testimonial-connector-dot absolute left-[-10px] top-1/2 h-[3px] w-[10px] -translate-y-1/2 rounded-full",
                                                theme.accent,
                                            ].join(" ")}
                                        />
                                    </span>
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
}) => {
    return (
        <div className="mt-4 grid grid-cols-[1fr_auto] gap-2.5">
            {/* Automation status */}
            <div className="rounded-[14px] border border-blue-300/10 bg-[#061A37]/60 p-3">
                <div className="flex items-center gap-2">
                    <div
                        className={[
                            "flex h-7 w-7 items-center justify-center rounded-lg border",
                            theme.softBorder,
                            theme.accentBackground,
                        ].join(" ")}
                    >
                        <CheckCircle2
                            size={12}
                            className="text-emerald-300"
                        />
                    </div>

                    <div className="min-w-0">
                        <p className="truncate text-[8px] font-semibold text-white/70">
                            {testimonial.status}
                        </p>

                        <p className="mt-0.5 text-[7px] leading-[1.35] text-blue-100/28">
                            Follow-up and engagement actions are handled automatically.
                        </p>
                    </div>
                </div>

                <div className="mt-3 flex items-center gap-2">
                    <div className="relative h-[4px] flex-1 overflow-hidden rounded-full bg-white/[0.05]">
                        <span
                            className={[
                                "testimonial-progress absolute inset-y-0 left-0 rounded-full",
                                theme.accent,
                            ].join(" ")}
                        />
                    </div>

                    <span className="text-[6px] font-semibold uppercase tracking-[0.12em] text-emerald-100/35">
                        Active
                    </span>
                </div>
            </div>

            {/* Result */}
            <div className="min-w-[106px] rounded-[14px] border border-blue-300/10 bg-[#061A37]/60 p-3 text-right">
                <div className="flex items-center justify-end gap-1.5">
                    <TrendingUp
                        size={10}
                        className={theme.icon}
                    />

                    <span className="text-[6px] font-semibold uppercase tracking-[0.12em] text-blue-100/28">
                        Result
                    </span>
                </div>

                <p className="mt-1.5 text-[21px] font-semibold leading-none text-white">
                    {testimonial.result}
                </p>

                <p className="mt-1 text-[6px] text-cyan-100/40">
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
}) => {
    const theme =
        TestimonialThemes[testimonial.theme] ||
        TestimonialThemes.cyan;

    return (
        <div
            className={[
                "relative h-[350px] w-[570px] shrink-0 [perspective:1600px]",
                isCenter
                    ? "testimonial-center-card"
                    : "testimonial-side-card-inner",
            ].join(" ")}
        >
            {/* Rear depth */}
            <div
                className={[
                    "absolute inset-x-5 bottom-[-8px] top-[8px] rounded-[21px] border bg-[#020B20]/90",
                    theme.softBorder,
                ].join(" ")}
            />

            <div className="absolute inset-x-10 bottom-[-13px] top-[13px] rounded-[18px] border border-blue-500/[0.07] bg-[#020817]/80" />

            {/* Glow */}
            <div
                className={[
                    "pointer-events-none absolute -inset-4 rounded-[28px] blur-3xl",
                    isCenter
                        ? "opacity-65"
                        : "opacity-25",
                    theme.glow,
                ].join(" ")}
            />

            {/* Main shell */}
            <div
                className={[
                    "relative h-full overflow-hidden rounded-[21px] border bg-[linear-gradient(145deg,rgba(9,36,77,0.98),rgba(3,15,35,0.99))]",
                    theme.border,
                    isCenter
                        ? "shadow-[0_25px_55px_rgba(0,0,0,0.46),0_0_35px_rgba(22,119,255,0.09),inset_0_1px_0_rgba(255,255,255,0.11)]"
                        : "shadow-[0_15px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.07)]",
                ].join(" ")}
            >
                {/* Top highlight */}
                <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />

                {/* Scan */}
                <span className="testimonial-card-scan pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/55 to-transparent" />

                {/* Grid */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />

                {/* Atmosphere */}
                <div
                    className={[
                        "pointer-events-none absolute -right-[18%] -top-[34%] h-[250px] w-[250px] rounded-full blur-[90px]",
                        theme.glow,
                    ].join(" ")}
                />

                {/* Corners */}
                <span className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l border-t border-cyan-300/10" />
                <span className="pointer-events-none absolute right-4 top-4 h-5 w-5 border-r border-t border-cyan-300/10" />
                <span className="pointer-events-none absolute bottom-4 left-4 h-5 w-5 border-b border-l border-cyan-300/[0.07]" />
                <span className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b border-r border-cyan-300/[0.07]" />

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="relative h-full p-5">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <HolographicIdentity
                                testimonial={testimonial}
                                theme={theme}
                            />

                            <div>
                                <div className="flex items-center gap-2">
                                    <span
                                        className={[
                                            "rounded-full border px-2 py-1 text-[6px] font-semibold uppercase tracking-[0.15em]",
                                            theme.border,
                                            theme.accentBackground,
                                            theme.accentText,
                                        ].join(" ")}
                                    >
                                        Client Signal
                                    </span>

                                    <span className="flex items-center gap-1 text-[6px] font-medium uppercase tracking-[0.1em] text-emerald-100/45">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_6px_rgba(52,211,153,0.72)]" />
                                        Verified
                                    </span>
                                </div>

                                <h3 className="mt-1.5 text-[16px] font-semibold tracking-tight text-white">
                                    {testimonial.name}
                                </h3>

                                <p className="mt-0.5 text-[8px] font-medium text-blue-100/38">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>

                        <div className="flex h-8 min-w-[32px] items-center justify-center rounded-full border border-blue-300/10 bg-blue-300/[0.025] px-2">
                            <span className="text-[6px] font-semibold uppercase tracking-[0.16em] text-cyan-100/28">
                                {testimonial.number}
                            </span>
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="relative mt-4">
                        <Quote
                            size={27}
                            className="absolute -left-1 -top-2 text-cyan-300/10"
                            fill="currentColor"
                        />

                        <p className="relative max-w-[600px] pl-4 text-[12px] font-medium leading-[1.62] text-blue-50/78">
                            {testimonial.quote}
                        </p>
                    </div>

                    {/* Rating */}
                    <div className="mt-4 flex items-center gap-3">
                        <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map(
                                (_, Index) => (
                                    <Stars
                                        key={Index}
                                        size={10}
                                        fill="currentColor"
                                        className="text-amber-300 drop-shadow-[0_0_5px_rgba(251,191,36,0.32)]"
                                    />
                                ),
                            )}
                        </div>

                        <span className="text-[6px] font-semibold uppercase tracking-[0.14em] text-blue-100/25">
                            Client feedback verified
                        </span>
                    </div>

                    {/* Automation */}
                    <TestimonialAutomationFlow
                        theme={theme}
                    />

                    {/* Result */}
                    <TestimonialResultPanel
                        testimonial={testimonial}
                        theme={theme}
                    />
                </div>
            </div>
        </div>
    );
};

/* =========================================================
   POSITION STYLES
========================================================= */

const GetCardTransform = (Position) => {
    if (Position === "center") {
        return {
            transform:
                "translate3d(0,0,80px) scale(1)",
            opacity: 1,
            zIndex: 30,
        };
    }

    if (Position === "left") {
        return {
            transform:
                "translate3d(0,0,-30px) scale(0.79) rotateY(10deg)",
            opacity: 0.68,
            zIndex: 20,
        };
    }

    if (Position === "right") {
        return {
            transform:
                "translate3d(0,0,-30px) scale(0.79) rotateY(-10deg)",
            opacity: 0.68,
            zIndex: 20,
        };
    }

    return {
        transform:
            "translate3d(0,0,-90px) scale(0.62)",
        opacity: 0,
        zIndex: 5,
    };
};

/* =========================================================
   CAROUSEL
========================================================= */

const Testimonials = () => {
    /*
     * Start from the middle copy.
     *
     * 0 1 2 | 3 4 5 | 6 7 8
     *         ↑
     *       starts here
     */
    const [TrackIndex, SetTrackIndex] = useState(
        TestimonialsData.length,
    );

    const [IsAnimating, SetIsAnimating] =
        useState(false);

    const [TransitionEnabled, SetTransitionEnabled] =
        useState(true);

    const GetActiveRealIndex = (Index) => {
        return (
            ((Index % TestimonialsData.length) +
                TestimonialsData.length) %
            TestimonialsData.length
        );
    };

    const ActiveIndex =
        GetActiveRealIndex(TrackIndex);

    /* =====================================================
       MOVE NEXT
    ===================================================== */

    const MoveNext = () => {
        if (IsAnimating) {
            return;
        }

        SetIsAnimating(true);
        SetTransitionEnabled(true);

        SetTrackIndex((Current) => Current + 1);

        window.setTimeout(() => {
            SetTrackIndex((Current) => {
                if (
                    Current >=
                    TestimonialsData.length * 2
                ) {
                    return TestimonialsData.length;
                }

                return Current;
            });

            SetTransitionEnabled(false);

            window.requestAnimationFrame(() => {
                window.requestAnimationFrame(() => {
                    SetTransitionEnabled(true);
                    SetIsAnimating(false);
                });
            });
        }, 930);
    };

    /* =====================================================
       MOVE PREVIOUS
    ===================================================== */

    const MovePrevious = () => {
        if (IsAnimating) {
            return;
        }

        SetIsAnimating(true);
        SetTransitionEnabled(true);

        SetTrackIndex((Current) => Current - 1);

        window.setTimeout(() => {
            SetTrackIndex((Current) => {
                if (Current <= 1) {
                    return (
                        TestimonialsData.length * 2 -
                        1
                    );
                }

                return Current;
            });

            SetTransitionEnabled(false);

            window.requestAnimationFrame(() => {
                window.requestAnimationFrame(() => {
                    SetTransitionEnabled(true);
                    SetIsAnimating(false);
                });
            });
        }, 930);
    };

    /* =====================================================
       AUTO PLAY
       ~3.3s HOLD + movement
    ===================================================== */

    useEffect(() => {
        if (IsAnimating) {
            return undefined;
        }

        const Timer = window.setTimeout(() => {
            MoveNext();
        }, 3600);

        return () => window.clearTimeout(Timer);
    }, [TrackIndex, IsAnimating]);

    /* =====================================================
       CARD POSITIONS
    ===================================================== */

    const VisibleCardData = CarouselItems.map(
        (Testimonial, Index) => {
            const RelativeIndex =
                Index - TrackIndex;

            let Position = "hidden";

            if (RelativeIndex === 0) {
                Position = "center";
            }

            if (RelativeIndex === -1) {
                Position = "left";
            }

            if (RelativeIndex === 1) {
                Position = "right";
            }

            if (RelativeIndex === -2) {
                Position = "farLeft";
            }

            if (RelativeIndex === 2) {
                Position = "farRight";
            }

            return {
                Testimonial,
                Index,
                Position,
            };
        },
    );

    /* =====================================================
       RENDER
    ===================================================== */

    return (
        <section
            id="testimonials"
            className="relative h-[100vh] min-h-[620px] max-h-[820px] w-full overflow-hidden bg-[#061633] text-white"
        >
            {/* =====================================================
                BACKGROUND
            ===================================================== */}

            <div className="pointer-events-none absolute inset-0">
                {/* Main atmosphere */}
                <div className="absolute left-1/2 top-[60%] h-[330px] w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[125px]" />

                {/* Cyan */}
                <div className="absolute left-[5%] top-[36%] h-[190px] w-[240px] rounded-full bg-cyan-400/[0.018] blur-[90px]" />

                {/* Violet */}
                <div className="absolute right-[5%] top-[28%] h-[200px] w-[250px] rounded-full bg-violet-500/[0.02] blur-[100px]" />

                {/* Floor glow */}
                <div className="absolute bottom-[5%] left-1/2 h-[90px] w-[72%] -translate-x-1/2 rounded-[50%] bg-blue-500/[0.05] blur-[70px]" />

                {/* Grid */}
                <div className="absolute inset-0 opacity-[0.012] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

                {/* Edges */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/14 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/12 to-transparent" />

                {/* Orbit */}
                <div className="testimonial-bg-orbit absolute left-1/2 top-[62%] h-[470px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-cyan-300/[0.018]" />

                <div className="testimonial-bg-orbit-reverse absolute left-1/2 top-[62%] h-[390px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-violet-300/[0.014]" />

                {/* Ambient sweep */}
                <div className="testimonial-section-scan absolute left-[-20%] top-[20%] h-[180px] w-[18%] rotate-[14deg] bg-gradient-to-r from-transparent via-cyan-300/[0.016] to-transparent blur-lg" />
            </div>

            {/* =====================================================
                CONTENT
            ===================================================== */}

            <div className="relative mx-auto flex h-full max-w-[1400px] flex-col px-6 py-7 lg:px-8">
                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="relative z-50 flex shrink-0 items-end justify-between gap-5">
                    <div className="max-w-[650px]">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.035] px-3 py-1.5">
                            <span className="h-[5px] w-[5px] rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(25,211,255,0.75)]" />

                            <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-cyan-100/65">
                                Clients Love Us
                            </span>
                        </div>

                        <h2 className="mt-4 text-[31px] font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-[37px]">
                            What Our Clients Say
                        </h2>

                        <p className="mt-2 max-w-[620px] text-[12px] font-medium leading-[1.6] text-blue-100/58 sm:text-[13px]">
                            Real people. Real results. Intelligent systems
                            working quietly in the background.
                        </p>
                    </div>

                    {/* Online status */}
                    <div className="hidden items-center gap-3 rounded-full border border-blue-300/10 bg-blue-300/[0.025] px-3.5 py-2 shadow-[0_8px_20px_rgba(0,0,0,0.18)] sm:flex">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-300 opacity-30" />

                            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.72)]" />
                        </span>

                        <span className="text-[7px] font-semibold uppercase tracking-[0.15em] text-blue-100/38">
                            Testimonial engine online
                        </span>

                        <Zap
                            size={10}
                            className="text-cyan-300"
                        />
                    </div>
                </div>

                {/* =================================================
                    CAROUSEL STAGE
                ================================================= */}

                <div className="relative min-h-0 flex-1">
                    <div className="testimonial-carousel-stage absolute inset-x-0 top-1/2 h-[390px] -translate-y-1/2 overflow-hidden">
                        {/* =================================================
                            TRACK
                        ================================================= */}

                        <div
                            className={[
                                "testimonial-carousel-track absolute left-1/2 top-1/2 flex h-[350px] w-max items-stretch gap-7",
                                TransitionEnabled
                                    ? "transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                                    : "",
                            ].join(" ")}
                            style={{
                                transform: `translate3d(calc(-${TrackIndex * CARD_STEP + CARD_HALF}px), -50%, 0)`,
                            }}
                        >
                            {VisibleCardData.map(
                                ({
                                    Testimonial,
                                    Index,
                                    Position,
                                }) => {
                                    const IsCenter =
                                        Position ===
                                        "center";

                                    return (
                                        <div
                                            key={`${Testimonial.id}-${Index}`}
                                            className={[
                                                "testimonial-carousel-item relative h-[350px] w-[570px] shrink-0 [transform-style:preserve-3d]",
                                                Position ===
                                                    "center"
                                                    ? "testimonial-card-center"
                                                    : "",
                                                Position ===
                                                    "left"
                                                    ? "testimonial-card-left"
                                                    : "",
                                                Position ===
                                                    "right"
                                                    ? "testimonial-card-right"
                                                    : "",
                                                Position ===
                                                    "farLeft"
                                                    ? "testimonial-card-far-left"
                                                    : "",
                                                Position ===
                                                    "farRight"
                                                    ? "testimonial-card-far-right"
                                                    : "",
                                                Position ===
                                                    "hidden"
                                                    ? "pointer-events-none opacity-0"
                                                    : "",
                                            ].join(" ")}
                                        >
                                            <TestimonialCard
                                                testimonial={
                                                    Testimonial
                                                }
                                                isCenter={
                                                    IsCenter
                                                }
                                            />
                                        </div>
                                    );
                                },
                            )}
                        </div>
                    </div>
                </div>

                {/* =================================================
                    CONTROLS
                ================================================= */}

                <div className="relative z-50 flex shrink-0 items-center justify-center gap-4 pt-1">
                    {/* Previous */}
                    <button
                        type="button"
                        onClick={MovePrevious}
                        disabled={IsAnimating}
                        aria-label="Previous testimonial"
                        className="group flex h-9 w-9 items-center justify-center rounded-full disabled:pointer-events-none disabled:opacity-40"
                    >
                        <PremiumIconBadge
                            icon={ArrowLeft}
                            size="default"
                        />
                    </button>

                    {/* Dots */}
                    <div className="flex items-center gap-1.5">
                        {TestimonialsData.map(
                            (Testimonial, Index) => (
                                <button
                                    key={Testimonial.id}
                                    type="button"
                                    disabled={IsAnimating}
                                    aria-label={`Show testimonial ${Testimonial.number}`}
                                    onClick={() => {
                                        if (
                                            IsAnimating ||
                                            Index ===
                                            ActiveIndex
                                        ) {
                                            return;
                                        }

                                        const Difference =
                                            Index -
                                            ActiveIndex;

                                        if (
                                            Difference > 0
                                        ) {
                                            for (
                                                let Step = 0;
                                                Step <
                                                Difference;
                                                Step += 1
                                            ) {
                                                window.setTimeout(
                                                    () => {
                                                        MoveNext();
                                                    },
                                                    Step *
                                                    1000,
                                                );
                                            }

                                            return;
                                        }

                                        for (
                                            let Step = 0;
                                            Step <
                                            Math.abs(
                                                Difference,
                                            );
                                            Step += 1
                                        ) {
                                            window.setTimeout(
                                                () => {
                                                    MovePrevious();
                                                },
                                                Step *
                                                1000,
                                            );
                                        }
                                    }}
                                    className={[
                                        "h-[4px] rounded-full transition-all duration-500",
                                        ActiveIndex ===
                                            Index
                                            ? "w-9 bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 shadow-[0_0_10px_rgba(25,211,255,0.55)]"
                                            : "w-2 bg-blue-300/15 hover:bg-blue-300/35",
                                    ].join(" ")}
                                />
                            ),
                        )}
                    </div>

                    {/* Next */}
                    <button
                        type="button"
                        onClick={MoveNext}
                        disabled={IsAnimating}
                        aria-label="Next testimonial"
                        className="group flex h-9 w-9 items-center justify-center rounded-full disabled:pointer-events-none disabled:opacity-40"
                    >
                        <PremiumIconBadge
                            icon={ArrowRight}
                            size="default"
                        />
                    </button>
                </div>
            </div>

            {/* =====================================================
                ANIMATIONS
            ===================================================== */}

            <style>{`
                .testimonial-carousel-stage {
                    perspective: 1800px;
                    transform-style: preserve-3d;
                }

                .testimonial-carousel-track {
                    transform-style: preserve-3d;
                    will-change: transform;
                }

                .testimonial-carousel-item {
                    transition:
                        transform 900ms cubic-bezier(0.16,1,0.3,1),
                        opacity 900ms cubic-bezier(0.16,1,0.3,1),
                        filter 900ms cubic-bezier(0.16,1,0.3,1);
                    will-change: transform, opacity;
                }

                /*
                 * CENTER
                 */
                .testimonial-card-center {
                    z-index: 30;
                    transform:
                        translate3d(0, 0, 80px)
                        scale(1);
                    opacity: 1;
                    filter: none;
                }

                /*
                 * LEFT
                 */
                .testimonial-card-left {
                    z-index: 20;
                    transform:
                        translate3d(0, 0, -35px)
                        rotateY(10deg)
                        scale(0.80);
                    opacity: 0.66;
                    filter: brightness(0.78);
                }

                /*
                 * RIGHT
                 */
                .testimonial-card-right {
                    z-index: 20;
                    transform:
                        translate3d(0, 0, -35px)
                        rotateY(-10deg)
                        scale(0.80);
                    opacity: 0.66;
                    filter: brightness(0.78);
                }

                .testimonial-card-far-left {
                    z-index: 5;
                    transform:
                        translate3d(0, 0, -100px)
                        rotateY(15deg)
                        scale(0.62);
                    opacity: 0;
                }

                .testimonial-card-far-right {
                    z-index: 5;
                    transform:
                        translate3d(0, 0, -100px)
                        rotateY(-15deg)
                        scale(0.62);
                    opacity: 0;
                }

                .testimonial-card-center
                    .testimonial-center-card
                    .testimonial-center-shell {
                    animation:
                        testimonialCenterFloat
                        6s
                        ease-in-out
                        infinite;
                }

                .testimonial-card-scan {
                    animation:
                        testimonialCardScan
                        4.2s
                        ease-in-out
                        infinite;
                }

                .testimonial-progress {
                    animation:
                        testimonialProgress
                        3.5s
                        ease-in-out
                        infinite;
                }

                .testimonial-connector-dot {
                    animation:
                        testimonialConnectorFlow
                        2.1s
                        linear
                        infinite;
                }

                .testimonial-orbit {
                    animation:
                        testimonialOrbit
                        9s
                        linear
                        infinite;
                }

                .testimonial-orbit-reverse {
                    animation:
                        testimonialOrbitReverse
                        7s
                        linear
                        infinite;
                }

                .testimonial-identity-scan {
                    animation:
                        testimonialIdentityScan
                        2.8s
                        ease-in-out
                        infinite;
                }

                .testimonial-bg-orbit {
                    animation:
                        testimonialBackgroundOrbit
                        18s
                        linear
                        infinite;
                }

                .testimonial-bg-orbit-reverse {
                    animation:
                        testimonialBackgroundOrbitReverse
                        23s
                        linear
                        infinite;
                }

                .testimonial-section-scan {
                    animation:
                        testimonialSectionScan
                        9s
                        ease-in-out
                        infinite;
                }

                @keyframes testimonialCenterFloat {
                    0%,
                    100% {
                        transform:
                            translateY(0)
                            rotateX(1deg)
                            rotateY(-0.5deg);
                    }

                    50% {
                        transform:
                            translateY(-3px)
                            rotateX(1.5deg)
                            rotateY(0.5deg);
                    }
                }

                @keyframes testimonialCardScan {
                    0%,
                    100% {
                        transform: translateY(0);
                        opacity: 0.15;
                    }

                    50% {
                        transform: translateY(325px);
                        opacity: 0.62;
                    }
                }

                @keyframes testimonialProgress {
                    0% {
                        width: 20%;
                        opacity: 0.45;
                    }

                    50% {
                        width: 72%;
                        opacity: 1;
                    }

                    100% {
                        width: 92%;
                        opacity: 0.68;
                    }
                }

                @keyframes testimonialConnectorFlow {
                    0% {
                        transform: translateX(-10px);
                        opacity: 0;
                    }

                    20% {
                        opacity: 1;
                    }

                    80% {
                        opacity: 1;
                    }

                    100% {
                        transform: translateX(28px);
                        opacity: 0;
                    }
                }

                @keyframes testimonialOrbit {
                    from {
                        transform:
                            rotateX(68deg)
                            rotateZ(0deg);
                    }

                    to {
                        transform:
                            rotateX(68deg)
                            rotateZ(360deg);
                    }
                }

                @keyframes testimonialOrbitReverse {
                    from {
                        transform:
                            rotateX(68deg)
                            rotateZ(360deg);
                    }

                    to {
                        transform:
                            rotateX(68deg)
                            rotateZ(0deg);
                    }
                }

                @keyframes testimonialIdentityScan {
                    0%,
                    100% {
                        transform: translateY(-120%);
                        opacity: 0;
                    }

                    35% {
                        opacity: 0.4;
                    }

                    60% {
                        opacity: 0.7;
                    }

                    100% {
                        transform: translateY(120%);
                        opacity: 0;
                    }
                }

                @keyframes testimonialBackgroundOrbit {
                    from {
                        transform:
                            translate(-50%,-50%)
                            rotateX(68deg)
                            rotateZ(0deg);
                    }

                    to {
                        transform:
                            translate(-50%,-50%)
                            rotateX(68deg)
                            rotateZ(360deg);
                    }
                }

                @keyframes testimonialBackgroundOrbitReverse {
                    from {
                        transform:
                            translate(-50%,-50%)
                            rotateX(68deg)
                            rotateZ(360deg);
                    }

                    to {
                        transform:
                            translate(-50%,-50%)
                            rotateX(68deg)
                            rotateZ(0deg);
                    }
                }

                @keyframes testimonialSectionScan {
                    0%,
                    100% {
                        transform:
                            translateX(0)
                            rotate(14deg);
                        opacity: 0;
                    }

                    25% {
                        opacity: 0.3;
                    }

                    65% {
                        transform:
                            translateX(660%)
                            rotate(14deg);
                        opacity: 0.5;
                    }

                    85% {
                        opacity: 0;
                    }
                }

                @media (max-width: 1100px) {
                    .testimonial-carousel-stage {
                        transform:
                            scale(0.88);
                        transform-origin: center center;
                    }
                }

                @media (max-width: 1023px) {
                    .testimonial-card-left,
                    .testimonial-card-right,
                    .testimonial-card-far-left,
                    .testimonial-card-far-right {
                        opacity: 0;
                        pointer-events: none;
                    }

                    .testimonial-card-center {
                        transform:
                            translate3d(0,0,30px)
                            scale(0.92);
                    }
                }

                @media (max-width: 700px) {
                    .testimonial-carousel-stage {
                        transform:
                            scale(0.62);
                        transform-origin: center center;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .testimonial-carousel-item,
                    .testimonial-center-shell,
                    .testimonial-card-scan,
                    .testimonial-progress,
                    .testimonial-connector-dot,
                    .testimonial-orbit,
                    .testimonial-orbit-reverse,
                    .testimonial-identity-scan,
                    .testimonial-bg-orbit,
                    .testimonial-bg-orbit-reverse,
                    .testimonial-section-scan {
                        animation: none !important;
                        transition: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;