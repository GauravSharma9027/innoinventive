// AboutFaq.jsx
// InnoInventive About Page - Final FAQ Section
//
// Final About Page section.
// 5 FAQs.
// Fully automatic open / close.
// Hover overrides automation.
// No click interaction.

import {
    ArrowRight,
    ChevronRight,
    CircleHelp,
    Sparkles,
    Zap,
} from "lucide-react";
import {
    useEffect,
    useRef,
    useState,
} from "react";

import PremiumButton from "../../../components/UI/PremiumButton";

/* =========================================================
   CONTENT
========================================================= */

const FAQContent = {
    sectionNumber: "06",
    eyebrow: "Questions, Answered",
    headingPrimary: "A few things",
    headingAccent: "worth knowing.",
    description:
        "From high-end websites to intelligent automation, here is how we think about building digital systems that are useful, scalable and ready for what comes next.",
    footerText: "CLARITY BEFORE COMMITMENT",
    buttonLabel: "Start a Conversation",
};

/* =========================================================
   FAQ DATA
========================================================= */

const FAQItems = [
    {
        id: "build",
        number: "01",
        question:
            "What does InnoInventive actually build?",
        answer:
            "We build high-end websites, custom web experiences, dashboards and business systems with distinctive UI, thoughtful interaction and modern engineering at the core.",
        tag: "WEB DEVELOPMENT",
        accent: "cyan",
    },
    {
        id: "website",
        number: "02",
        question:
            "Do you only build websites?",
        answer:
            "No. Alongside websites, we build web applications, admin systems, custom interfaces and connected digital tools that can grow beyond a simple marketing site.",
        tag: "DIGITAL SYSTEMS",
        accent: "blue",
    },
    {
        id: "automation",
        number: "03",
        question:
            "Can you add AI and automation to an existing business?",
        answer:
            "Yes. We can connect forms, internal workflows, business logic, APIs and AI-assisted processes so repetitive tasks become structured, faster and easier to manage.",
        tag: "AI AUTOMATION",
        accent: "violet",
    },
    {
        id: "performance",
        number: "04",
        question:
            "How do you approach website performance?",
        answer:
            "Performance is considered from the architecture up — efficient code, responsive layouts, controlled motion, optimized assets and a smooth experience across devices.",
        tag: "PERFORMANCE",
        accent: "cyan",
    },
    {
        id: "future",
        number: "05",
        question:
            "Can the system evolve after the first version?",
        answer:
            "That is the intention. We prefer modular interfaces, clean structures and extensible systems so new features, integrations and automation can be added as the business grows.",
        tag: "SCALABILITY",
        accent: "violet",
    },
];

/* =========================================================
   FAQ ITEM
========================================================= */

const FAQItem = ({
    item,
    index,
    isOpen,
    onEnter,
    onLeave,
}) => {
    const AccentStyles = {
        cyan: {
            text: "text-cyan-300",
            border: "border-cyan-300/25",
            glow:
                "rgba(25,211,255,0.18)",
            gradient:
                "from-cyan-300 via-blue-400 to-cyan-200",
        },

        blue: {
            text: "text-blue-300",
            border: "border-blue-300/25",
            glow:
                "rgba(22,119,255,0.18)",
            gradient:
                "from-blue-300 via-cyan-300 to-violet-300",
        },

        violet: {
            text: "text-violet-300",
            border: "border-violet-300/25",
            glow:
                "rgba(124,60,255,0.18)",
            gradient:
                "from-cyan-300 via-blue-400 to-violet-400",
        },
    };

    const CurrentAccent =
        AccentStyles[item.accent] ||
        AccentStyles.cyan;

    return (
        <div
            className="group relative"
            onMouseEnter={() => onEnter(index)}
            onMouseLeave={() => onLeave(index)}
        >
            {/* Active atmospheric glow */}
            <span
                className={[
                    "pointer-events-none absolute -inset-3 rounded-[18px] blur-2xl transition-all duration-700",
                    isOpen
                        ? "opacity-100"
                        : "opacity-0",
                ].join(" ")}
                style={{
                    background:
                        CurrentAccent.glow,
                }}
            />

            {/* Main row */}
            <div
                className={[
                    "relative overflow-hidden border-b py-4 transition-all duration-700",
                    isOpen
                        ? `${CurrentAccent.border}`
                        : "border-white/[0.065]",
                ].join(" ")}
            >
                {/* Top signal line */}
                <span
                    className={[
                        "pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r opacity-0 transition-all duration-700",
                        CurrentAccent.gradient,
                        isOpen
                            ? "opacity-70"
                            : "opacity-0",
                    ].join(" ")}
                />

                {/* Question row */}
                <div className="flex items-center gap-4">
                    {/* Number */}
                    <div className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                        <span
                            className={[
                                "absolute inset-0 rounded-full border transition-all duration-500",
                                isOpen
                                    ? CurrentAccent.border
                                    : "border-white/[0.07]",
                            ].join(" ")}
                        />

                        <span
                            className={[
                                "absolute inset-[4px] rounded-full transition-all duration-500",
                                isOpen
                                    ? "bg-cyan-300/[0.08]"
                                    : "bg-white/[0.015]",
                            ].join(" ")}
                        />

                        <span
                            className={[
                                "relative z-10 font-mono text-[6px] font-semibold tracking-[0.14em] transition-all duration-500",
                                CurrentAccent.text,
                            ].join(" ")}
                        >
                            {item.number}
                        </span>
                    </div>

                    {/* Question */}
                    <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2.5">
                            <span
                                className={[
                                    "text-[6px] font-semibold uppercase tracking-[0.17em] transition-all duration-500",
                                    CurrentAccent.text,
                                    isOpen
                                        ? "opacity-100"
                                        : "opacity-55",
                                ].join(" ")}
                            >
                                {item.tag}
                            </span>

                            <span className="h-px w-6 bg-gradient-to-r from-white/15 to-transparent" />
                        </div>

                        <h3
                            className={[
                                "mt-1.5 text-[13px] font-semibold tracking-[-0.015em] transition-all duration-500 sm:text-[15px]",
                                isOpen
                                    ? "text-white"
                                    : "text-white/80",
                            ].join(" ")}
                        >
                            {item.question}
                        </h3>
                    </div>

                    {/* Status */}
                    <div className="hidden items-center gap-2 sm:flex">
                        <span
                            className={[
                                "h-1 w-1 rounded-full transition-all duration-500",
                                isOpen
                                    ? `bg-cyan-300 shadow-[0_0_8px_rgba(25,211,255,0.8)]`
                                    : "bg-white/15",
                            ].join(" ")}
                        />

                        <span className="font-mono text-[4.5px] uppercase tracking-[0.14em] text-white/18">
                            {isOpen
                                ? "ACTIVE"
                                : "IDLE"}
                        </span>
                    </div>

                    {/* Arrow */}
                    <ChevronRight
                        size={14}
                        strokeWidth={1.6}
                        className={[
                            "shrink-0 transition-all duration-500",
                            isOpen
                                ? `${CurrentAccent.text} rotate-90`
                                : "text-white/18",
                        ].join(" ")}
                    />
                </div>

                {/* Answer */}
                <div
                    className={[
                        "grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0",
                    ].join(" ")}
                >
                    <div className="min-h-0 overflow-hidden">
                        <div className="ml-12 max-w-[680px] pt-3">
                            <div className="flex items-start gap-3">
                                <span
                                    className={[
                                        "mt-1 h-px w-8 shrink-0 bg-gradient-to-r to-transparent",
                                        CurrentAccent.gradient,
                                    ].join(" ")}
                                />

                                <p className="text-[8px] leading-[1.8] text-white/40 sm:text-[9px]">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Active scanning line */}
                <span
                    className={[
                        "faq-scan-line pointer-events-none absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r",
                        CurrentAccent.gradient,
                        isOpen
                            ? "opacity-100"
                            : "opacity-0",
                    ].join(" ")}
                />
            </div>
        </div>
    );
};

/* =========================================================
   FAQ COMPONENT
========================================================= */

const AboutFaq = () => {
    const [ActiveIndex, SetActiveIndex] =
        useState(0);

    const [HoverIndex, SetHoverIndex] =
        useState(null);

    const ResumeIndexReference =
        useRef(0);

    const TimerReference =
        useRef(null);

    /* =====================================================
       AUTOMATIC FAQ FLOW

       Open: 1.9 sec
       Closed: 1.3 sec
    ===================================================== */

    useEffect(() => {
        let Cancelled = false;

        const StartSequence = (StartIndex) => {
            if (Cancelled) {
                return;
            }

            SetActiveIndex(StartIndex);

            TimerReference.current =
                window.setTimeout(() => {
                    if (Cancelled) {
                        return;
                    }

                    SetActiveIndex(null);

                    TimerReference.current =
                        window.setTimeout(() => {
                            if (Cancelled) {
                                return;
                            }

                            const NextIndex =
                                (StartIndex + 1) %
                                FAQItems.length;

                            ResumeIndexReference.current =
                                NextIndex;

                            StartSequence(
                                NextIndex,
                            );
                        }, 1300);
                }, 1900);
        };

        if (HoverIndex === null) {
            StartSequence(
                ResumeIndexReference.current,
            );
        }

        return () => {
            Cancelled = true;

            if (
                TimerReference.current
            ) {
                window.clearTimeout(
                    TimerReference.current,
                );
            }
        };
    }, [HoverIndex]);

    /* =====================================================
       HOVER OVERRIDE
    ===================================================== */

    const HandleMouseEnter = (Index) => {
        if (
            TimerReference.current
        ) {
            window.clearTimeout(
                TimerReference.current,
            );
        }

        SetHoverIndex(Index);
        SetActiveIndex(Index);
    };

    const HandleMouseLeave = (Index) => {
        ResumeIndexReference.current =
            (Index + 1) %
            FAQItems.length;

        SetHoverIndex(null);
        SetActiveIndex(null);
    };

    return (
        <section
            id="faq"
            className="relative w-full overflow-hidden bg-[#061633] text-white"
        >
            {/* =================================================
                ATMOSPHERE
            ================================================= */}

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-10%] top-[10%] h-[280px] w-[280px] rounded-full bg-cyan-400/[0.012] blur-[120px]" />

                <div className="absolute right-[-8%] bottom-[5%] h-[320px] w-[320px] rounded-full bg-violet-500/[0.014] blur-[130px]" />

                <div className="absolute inset-0 opacity-[0.003] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:76px_76px]" />
            </div>

            {/* =================================================
                VIEWPORT
            ================================================= */}

            <div className="relative z-20 mx-auto flex min-h-[calc(100svh-92px)] w-full max-w-[1400px] flex-col justify-center px-6 py-0 lg:px-8 lg:pb-14">
                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="grid items-end gap-8 lg:grid-cols-[0.72fr_1.28fr]">
                    {/* Left */}
                    <div className="max-w-[470px]">
                        <div className="inline-flex items-center gap-3">
                            <span className="font-mono text-[13px] font-medium tracking-[0.12em] text-cyan-300">
                                {FAQContent.sectionNumber}
                            </span>

                            <span className="h-px w-10 bg-gradient-to-r from-cyan-300 via-blue-400 to-transparent" />

                            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-blue-100/65 sm:text-[10px]">
                                {FAQContent.eyebrow}
                            </span>
                        </div>

                        <h2 className="mt-5 text-[32px] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-[40px] lg:text-[46px]">
                            {FAQContent.headingPrimary}{" "}
                            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                                {FAQContent.headingAccent}
                            </span>
                        </h2>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col items-start lg:items-end lg:text-right">
                        <p className="max-w-[620px] text-[10px] leading-[1.8] text-blue-100/45 sm:text-[11px]">
                            {FAQContent.description}
                        </p>

                        <div className="mt-5 flex items-center gap-4">
                            <PremiumButton
                                label={
                                    FAQContent.buttonLabel
                                }
                                to="/contact"
                                icon={ArrowRight}
                            />

                            <div className="flex items-center gap-2">
                                <CircleHelp
                                    size={10}
                                    strokeWidth={1.6}
                                    className="text-cyan-300/55"
                                />

                                <span className="text-[5px] font-semibold uppercase tracking-[0.16em] text-cyan-100/28">
                                    Hover to explore
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =================================================
                    SYSTEM STATUS
                ================================================= */}

                <div className="mt-6 flex items-center gap-3">
                    <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-300/30" />

                    <div className="flex items-center gap-2">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inset-0 animate-ping rounded-full bg-cyan-300/25" />

                            <span className="relative h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(25,211,255,0.75)]" />
                        </span>

                        <span className="font-mono text-[5px] font-semibold uppercase tracking-[0.17em] text-cyan-100/30">
                            AUTO FAQ FLOW
                        </span>
                    </div>

                    <span className="h-px flex-1 bg-gradient-to-r from-cyan-300/[0.08] to-transparent" />

                    <span className="hidden font-mono text-[5px] uppercase tracking-[0.15em] text-white/16 sm:block">
                        01 → 02 → 03 → 04 → 05
                    </span>
                </div>

                {/* =================================================
                    FAQ LIST
                ================================================= */}

                <div className="mt-5">
                    {FAQItems.map(
                        (Item, Index) => (
                            <FAQItem
                                key={Item.id}
                                item={Item}
                                index={Index}
                                isOpen={
                                    ActiveIndex ===
                                    Index
                                }
                                onEnter={
                                    HandleMouseEnter
                                }
                                onLeave={
                                    HandleMouseLeave
                                }
                            />
                        ),
                    )}
                </div>

                {/* =================================================
                    FOOTER
                ================================================= */}

                <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/[0.05] pt-4">
                    <div className="flex items-center gap-2">
                        <Sparkles
                            size={9}
                            strokeWidth={1.6}
                            className="text-cyan-300/55"
                        />

                        <span className="text-[6px] font-semibold uppercase tracking-[0.18em] text-white/20">
                            {FAQContent.footerText}
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Zap
                            size={9}
                            strokeWidth={1.5}
                            className="text-blue-300/45"
                        />

                        <span className="font-mono text-[5px] uppercase tracking-[0.14em] text-white/18">
                            NO MANUAL TOGGLE
                        </span>
                    </div>
                </div>
            </div>

            {/* =================================================
                ANIMATION
            ================================================= */}

            <style>{`
                .faq-scan-line {
                    width: 42%;
                    animation:
                        faqScan
                        1.9s
                        ease-in-out
                        infinite;
                }

                @keyframes faqScan {
                    0% {
                        left: -45%;
                        opacity: 0;
                    }

                    15% {
                        opacity: 0.8;
                    }

                    70% {
                        opacity: 1;
                    }

                    100% {
                        left: 110%;
                        opacity: 0;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .faq-scan-line {
                        animation: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default AboutFaq;