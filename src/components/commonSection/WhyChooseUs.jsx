import {
    BrainCircuit,
    Gauge,
    Layers3,
    Rocket,
    Workflow,
} from "lucide-react";

import HeroActionButton from "../UI/HeroActionButton";
import PremiumIconBadge from "../UI/PremiumIconBadge";

const WhyChooseUsData = [
    {
        id: "business-first",
        title: "Business-First Engineering",
        description:
            "We build around your business goals, users and real operational needs.",
        icon: BrainCircuit,
        accent: "cyan",
    },
    {
        id: "intelligent-automation",
        title: "Intelligent Automation",
        description:
            "We turn repetitive workflows into smarter, connected systems.",
        icon: Workflow,
        accent: "blue",
    },
    {
        id: "scalable-systems",
        title: "Scalable Systems",
        description:
            "Clean architecture designed to grow with your users and business.",
        icon: Layers3,
        accent: "violet",
    },
    {
        id: "performance",
        title: "Performance Driven",
        description:
            "Fast interfaces and efficient systems built for reliable performance.",
        icon: Gauge,
        accent: "cyan",
    },
    {
        id: "long-term",
        title: "Long-Term Partnership",
        description:
            "We build technology that can evolve with your business over time.",
        icon: Rocket,
        accent: "violet",
    },
];

const AccentStyles = {
    cyan: {
        glow: "bg-cyan-300/[0.08]",
        border: "border-cyan-300/[0.15]",
        hoverBorder: "hover:border-cyan-300/30",
        line: "via-cyan-300/55",
    },

    blue: {
        glow: "bg-blue-400/[0.08]",
        border: "border-blue-300/[0.15]",
        hoverBorder: "hover:border-blue-300/30",
        line: "via-blue-300/55",
    },

    violet: {
        glow: "bg-violet-400/[0.08]",
        border: "border-violet-300/[0.15]",
        hoverBorder: "hover:border-violet-300/30",
        line: "via-violet-300/55",
    },
};

const WhyChooseUsCard = ({
    title,
    description,
    icon: Icon,
    accent,
    isLast,
}) => {
    const CurrentAccent = AccentStyles[accent];

    return (
        <div className="relative h-full">
            <article
                className={[
                    "group relative h-[210px] w-full overflow-hidden rounded-[22px]",
                    "border",
                    CurrentAccent.border,
                    "bg-[linear-gradient(145deg,rgba(13,43,88,0.97),rgba(4,20,45,0.99))]",
                    "shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_16px_42px_rgba(0,0,0,0.22)]",
                    "transition-all duration-400",
                    "hover:-translate-y-1",
                    CurrentAccent.hoverBorder,
                    "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_24px_55px_rgba(0,0,0,0.3)]",
                ].join(" ")}
            >
                {/* Ambient Glow */}
                <div
                    className={[
                        "pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full blur-[55px]",
                        CurrentAccent.glow,
                        "opacity-70 transition-opacity duration-400 group-hover:opacity-100",
                    ].join(" ")}
                />

                {/* Top Highlight */}
                <div className="pointer-events-none absolute left-[18%] right-[18%] top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                {/* Card Content */}
                <div className="relative flex h-full flex-col p-5 sm:p-6">
                    <div className="flex items-center">
                        <div className="rounded-[16px] border border-white/[0.06] bg-[#081D3D]/80 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                            <PremiumIconBadge
                                icon={Icon}
                                size="default"
                            />
                        </div>
                    </div>

                    <div className="mt-5">
                        <h3 className="text-[15px] font-semibold leading-[1.08] tracking-[-0.035em] text-white">
                            {title}
                        </h3>

                        <p className="mt-3 text-[11px] leading-[1.65] text-white/40">
                            {description}
                        </p>
                    </div>
                </div>
            </article>

            {/* Flow Connector */}
            {!isLast && (
                <div className="pointer-events-none absolute right-[-18px] top-1/2 z-30 hidden w-[36px] -translate-y-1/2 lg:block">
                    <div className="relative h-px w-full bg-white/[0.08]">
                        <span
                            className={[
                                "flow-packet",
                                CurrentAccent.line,
                            ].join(" ")}
                        />

                        <span className="absolute left-1/2 top-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/50 shadow-[0_0_10px_rgba(25,211,255,0.5)]" />
                    </div>
                </div>
            )}
        </div>
    );
};

const WhyChooseUs = () => {
    return (
        <section
            id="why-choose-us"
            className="relative min-h-screen w-full overflow-hidden bg-[#061633] lg:h-[100vh] lg:min-h-0"
        >
            {/* Background Atmosphere */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-8%] top-[8%] h-[340px] w-[340px] rounded-full bg-cyan-400/[0.035] blur-[120px]" />

                <div className="absolute bottom-[-8%] right-[-6%] h-[380px] w-[380px] rounded-full bg-violet-500/[0.04] blur-[130px]" />

                <div className="absolute left-[42%] top-[38%] h-[220px] w-[220px] rounded-full bg-blue-500/[0.025] blur-[100px]" />
            </div>

            <div className="relative mx-auto flex h-full w-full max-w-[1400px] flex-col justify-center px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-10">
                {/* Heading */}
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="h-px w-7 bg-cyan-300" />

                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
                                WHY CHOOSE US
                            </span>
                        </div>

                        <h2 className="mt-4 max-w-[680px] text-[clamp(34px,4vw,54px)] font-semibold leading-[0.92] tracking-[-0.06em] text-white">
                            Built with purpose.
                            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                                Engineered for growth.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-[360px] text-[11px] leading-[1.7] text-white/40 lg:pb-1">
                        We combine strategy, engineering and automation to
                        build digital systems designed around how your business
                        actually works.
                    </p>
                </div>

                {/* Premium Compact Cards */}
                <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-5 lg:gap-4">
                    {WhyChooseUsData.map((Reason, Index) => (
                        <WhyChooseUsCard
                            key={Reason.id}
                            {...Reason}
                            isLast={
                                Index === WhyChooseUsData.length - 1
                            }
                        />
                    ))}
                </div>

                {/* Flow Legend */}
                <div className="mt-5 flex items-center justify-center">
                    <div className="flex items-center gap-3 rounded-full border border-white/[0.06] bg-[#071A38]/70 px-4 py-2 backdrop-blur-xl">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(25,211,255,0.8)]" />

                        <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-white/30">
                            Strategy → Engineering → Automation → Growth
                        </span>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-4 flex flex-col gap-4 rounded-[20px] border border-white/[0.07] bg-[linear-gradient(145deg,rgba(8,27,57,0.9),rgba(4,19,43,0.95))] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:px-6">
                    <div>
                        <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-white/25">
                            THE INNOINVENTIVE APPROACH
                        </p>

                        <p className="mt-1 text-[11px] text-white/50">
                            Technology designed around your business.
                        </p>
                    </div>

                    <HeroActionButton
                        label="Let's Build"
                        icon={Rocket}
                        to="/contact"
                        variant="primary"
                    />
                </div>
            </div>

            <style>{`
                .flow-packet {
                    position: absolute;
                    top: 50%;
                    left: -8px;
                    width: 14px;
                    height: 2px;
                    transform: translateY(-50%);
                    border-radius: 999px;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        currentColor,
                        transparent
                    );
                    color: #19d3ff;
                    box-shadow:
                        0 0 7px rgba(25, 211, 255, 0.5),
                        0 0 14px rgba(25, 211, 255, 0.12);
                    animation: cardFlow 2.4s linear infinite;
                }

                @keyframes cardFlow {
                    0% {
                        transform: translateX(0) translateY(-50%);
                        opacity: 0;
                    }

                    15% {
                        opacity: 1;
                    }

                    85% {
                        opacity: 1;
                    }

                    100% {
                        transform: translateX(30px) translateY(-50%);
                        opacity: 0;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .flow-packet {
                        animation: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default WhyChooseUs;