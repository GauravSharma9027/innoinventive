import {
    ArrowRight,
    ChevronDown,
    ShieldCheck,
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
        details: [
            "High-end websites",
            "Custom web experiences",
            "Dashboards",
            "Business systems",
        ],
    },
    {
        id: "website",
        number: "02",
        question:
            "Do you only build websites?",
        details: [
            "Web applications",
            "Admin systems",
            "Custom interfaces",
            "Connected digital tools",
        ],
    },
    {
        id: "automation",
        number: "03",
        question:
            "Can you add AI and automation to an existing business?",
        details: [
            "Internal workflows",
            "Business logic",
            "API integrations",
            "AI-assisted processes",
        ],
    },
    {
        id: "performance",
        number: "04",
        question:
            "How do you approach website performance?",
        details: [
            "Efficient code",
            "Responsive layouts",
            "Optimized assets",
            "Smooth experience",
        ],
    },
    {
        id: "future",
        number: "05",
        question:
            "Can the system evolve after the first version?",
        details: [
            "Modular interfaces",
            "Clean structures",
            "New integrations",
            "Future automation",
        ],
    },
];

/* =========================================================
   DETAIL CHIP
========================================================= */

const FAQDetailChip = ({ label }) => {
    return (
        <div className="group flex min-h-[50px] items-center gap-3 rounded-[11px] bg-white px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-transform duration-300 hover:-translate-y-[1px]">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[7px] bg-[#1677FF] text-white shadow-[0_0_12px_rgba(22,119,255,0.22)]">
                <ShieldCheck
                    size={13}
                    strokeWidth={1.8}
                />
            </span>

            <span className="text-[10px] font-medium leading-[1.3] text-[#172B4D]">
                {label}
            </span>
        </div>
    );
};

/* =========================================================
   FAQ ITEM
========================================================= */

const FAQItem = ({
    item,
    isOpen,
}) => {
    return (
        <div className="group relative">
            {/* Active Glow */}
            <div
                className={[
                    "pointer-events-none absolute -inset-x-3 -inset-y-1 rounded-[18px] bg-cyan-300/[0.025] blur-2xl transition-opacity duration-700",
                    isOpen
                        ? "opacity-100"
                        : "opacity-0",
                ].join(" ")}
            />

            {/* =================================================
                QUESTION BAR
            ================================================= */}

            <div className="relative border-b border-white/[0.075]">
                {/* Active Top Line */}
                <span
                    className={[
                        "pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent transition-opacity duration-700",
                        isOpen
                            ? "opacity-100"
                            : "opacity-0",
                    ].join(" ")}
                />

                <div className="flex min-h-[72px] items-center gap-4 py-3 sm:min-h-[76px] sm:gap-5">
                    {/* Number */}
                    <span
                        className={[
                            "w-[44px] shrink-0 font-mono text-[11px] font-semibold tracking-[0.08em] transition-colors duration-500 sm:w-[52px] sm:text-[12px]",
                            isOpen
                                ? "text-cyan-300"
                                : "text-white/32",
                        ].join(" ")}
                    >
                        [{item.number}]
                    </span>

                    {/* Question */}
                    <h3
                        className={[
                            "min-w-0 flex-1 text-[14px] font-semibold leading-[1.25] tracking-[-0.025em] transition-colors duration-500 sm:text-[16px] lg:text-[17px]",
                            isOpen
                                ? "text-white"
                                : "text-white/78",
                        ].join(" ")}
                    >
                        {item.question}
                    </h3>

                    {/* Active Indicator */}
                    <span
                        className={[
                            "hidden h-[5px] w-[5px] shrink-0 rounded-full transition-all duration-500 sm:block",
                            isOpen
                                ? "bg-cyan-300 shadow-[0_0_10px_rgba(25,211,255,0.85)]"
                                : "bg-white/15",
                        ].join(" ")}
                    />

                    {/* Chevron */}
                    <ChevronDown
                        size={17}
                        strokeWidth={1.55}
                        className={[
                            "shrink-0 transition-all duration-700",
                            isOpen
                                ? "rotate-180 text-cyan-300"
                                : "text-white/30",
                        ].join(" ")}
                    />
                </div>

                {/* =================================================
                    EXPANDED CONTENT
                ================================================= */}

                <div
                    className={[
                        "grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0",
                    ].join(" ")}
                >
                    <div className="min-h-0 overflow-hidden">
                        <div className="pb-5 pl-[44px] pr-8 sm:pl-[72px] sm:pr-10">
                            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                                {item.details.map(
                                    (Detail) => (
                                        <FAQDetailChip
                                            key={Detail}
                                            label={Detail}
                                        />
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* =================================================
                    ONE-TIME ACTIVE PROGRESS BAR
                ================================================= */}

                {isOpen && (
                    <span className="faq-progress absolute bottom-0 left-0 h-[2px] rounded-r-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400" />
                )}
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

    const TimerReference =
        useRef(null);

    /* =====================================================
       AUTOMATIC FAQ FLOW

       One FAQ:
       10.4s active
       0s gap
       Then immediately next FAQ
    ===================================================== */

    useEffect(() => {
        let Cancelled = false;

        const ActiveDuration = 10400;

        const StartSequence = (
            StartIndex,
        ) => {
            if (Cancelled) {
                return;
            }

            SetActiveIndex(
                StartIndex,
            );

            TimerReference.current =
                window.setTimeout(() => {
                    if (Cancelled) {
                        return;
                    }

                    const NextIndex =
                        (StartIndex + 1) %
                        FAQItems.length;

                    SetActiveIndex(
                        NextIndex,
                    );

                    StartSequence(
                        NextIndex,
                    );
                }, ActiveDuration);
        };

        StartSequence(0);

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
    }, []);

    return (
        <section
            id="faq"
            className="relative w-full overflow-hidden bg-[#061633] text-white"
        >
            {/* =================================================
                BACKGROUND ATMOSPHERE
            ================================================= */}

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-10%] top-[10%] h-[300px] w-[300px] rounded-full bg-cyan-400/[0.018] blur-[120px]" />

                <div className="absolute bottom-[-10%] right-[-8%] h-[340px] w-[340px] rounded-full bg-violet-500/[0.018] blur-[130px]" />

                <div className="absolute left-[35%] top-[40%] h-[250px] w-[250px] rounded-full bg-blue-500/[0.012] blur-[120px]" />
            </div>

            {/* =================================================
                MAIN VIEWPORT
            ================================================= */}

            <div className="relative z-20 mx-auto flex min-h-[calc(100svh-92px)] w-full max-w-[1400px] flex-col justify-center px-6 py-10 lg:px-8 lg:py-12">
                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="grid items-end gap-7 lg:grid-cols-[0.8fr_1.2fr]">
                    {/* LEFT */}
                    <div className="max-w-[470px]">
                        <div className="inline-flex items-center gap-3">
                            <span className="font-mono text-[11px] font-medium tracking-[0.12em] text-cyan-300">
                                {FAQContent.sectionNumber}
                            </span>

                            <span className="h-px w-9 bg-gradient-to-r from-cyan-300 via-blue-400 to-transparent" />

                            <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-blue-100/55 sm:text-[9px]">
                                {FAQContent.eyebrow}
                            </span>
                        </div>

                        <h2 className="mt-4 text-4xl lg:text-[30px] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-[36px] lg:text-[42px]">
                            {FAQContent.headingPrimary}{" "}
                            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                                {FAQContent.headingAccent}
                            </span>
                        </h2>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col items-start lg:items-end lg:text-right">
                        <p className="max-w-[590px] text-sm leading-[1.8] text-blue-100/40 sm:text-[10px]">
                            {FAQContent.description}
                        </p>

                        <div className="mt-4">
                            <PremiumButton
                                label={
                                    FAQContent.buttonLabel
                                }
                                to="/contact"
                                icon={ArrowRight}
                            />
                        </div>
                    </div>
                </div>

                {/* =================================================
                    TOP SEPARATOR
                ================================================= */}

                <div className="mt-7 h-px bg-gradient-to-r from-white/[0.11] via-white/[0.07] to-transparent" />

                {/* =================================================
                    FAQ LIST
                ================================================= */}

                <div className="mt-0">
                    {FAQItems.map(
                        (Item, Index) => (
                            <FAQItem
                                key={Item.id}
                                item={Item}
                                isOpen={
                                    ActiveIndex ===
                                    Index
                                }
                            />
                        ),
                    )}
                </div>

                {/* =================================================
                    FOOTER
                ================================================= */}

                <div className="mt-4 flex items-center justify-between border-t border-white/[0.05] pt-3">
                    <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-white/50">
                        {FAQContent.footerText}
                    </span>

                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
                        01 → 02 → 03 → 04 → 05
                    </span>
                </div>
            </div>

            {/* =================================================
                ONE-TIME PROGRESS ANIMATION
            ================================================= */}

            <style>{`
                .faq-progress {
                    width: 0%;
                    animation: faqProgress 10.4s linear forwards;
                }

                @keyframes faqProgress {
                    0% {
                        width: 0%;
                    }

                    100% {
                        width: 100%;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .faq-progress {
                        animation: none !important;
                        width: 100%;
                    }
                }
            `}</style>
        </section>
    );
};

export default AboutFaq;