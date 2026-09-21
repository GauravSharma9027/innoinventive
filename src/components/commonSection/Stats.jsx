import {
    ArrowUpRight,
    ShieldCheck,
    TrendingUp,
    UsersRound,
    Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import PremiumIconBadge from "../UI/PremiumIconBadge";

/* =========================================================
   DATA
========================================================= */

const StatsData = [
    {
        id: 1,
        target: 500,
        suffix: "+",
        label: "Businesses Automated",
        icon: Zap,
        decimals: 0,
    },
    {
        id: 2,
        target: 300,
        suffix: "%",
        label: "Avg. Productivity Increase",
        icon: TrendingUp,
        decimals: 0,
    },
    {
        id: 3,
        target: 99.9,
        suffix: "%",
        label: "System Uptime",
        icon: ShieldCheck,
        decimals: 1,
    },
    {
        id: 4,
        target: 50,
        suffix: "+",
        label: "Happy Clients",
        icon: UsersRound,
        decimals: 0,
    },
];

/* =========================================================
   ANIMATED STAT VALUE
========================================================= */

const AnimatedStatValue = ({
    target,
    suffix,
    decimals = 0,
    StartCounting,
}) => {
    const [CurrentValue, SetCurrentValue] = useState(0);

    useEffect(() => {
        if (!StartCounting) {
            SetCurrentValue(0);
            return;
        }

        const Duration = 1500;
        const StartTime = performance.now();

        let AnimationFrame;

        const AnimateCount = (CurrentTime) => {
            const Progress = Math.min(
                (CurrentTime - StartTime) / Duration,
                1,
            );

            const EaseOutProgress = 1 - Math.pow(1 - Progress, 3);
            const NextValue = target * EaseOutProgress;

            SetCurrentValue(NextValue);

            if (Progress < 1) {
                AnimationFrame = requestAnimationFrame(AnimateCount);
            }
        };

        AnimationFrame = requestAnimationFrame(AnimateCount);

        return () => cancelAnimationFrame(AnimationFrame);
    }, [StartCounting, target]);

    return (
        <span>
            {CurrentValue.toFixed(decimals)}
            {suffix}
        </span>
    );
};

/* =========================================================
   STATS COMPONENT
========================================================= */

const Stats = () => {
    const SectionRef = useRef(null);
    const [StartCounting, SetStartCounting] = useState(false);

    useEffect(() => {
        const SectionElement = SectionRef.current;

        if (!SectionElement) {
            return;
        }

        const Observer = new IntersectionObserver(
            ([Entry]) => {
                if (Entry.isIntersecting) {
                    SetStartCounting(true);
                    Observer.disconnect();
                }
            },
            {
                threshold: 0.45,
            },
        );

        Observer.observe(SectionElement);

        return () => Observer.disconnect();
    }, []);

    /* =====================================================
       SCROLL TO PAGE BOTTOM
    ===================================================== */

    const HandleScrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };

    return (
        <section
            ref={SectionRef}
            className="relative z-10 -mt-12 h-[235px] w-full overflow-visible bg-transparent text-white"
        >
            <style>
                {`
                    @keyframes StatsWaveMove {
                        0%, 100% {
                            transform: translate3d(0, 0, 0) rotate(-2deg);
                        }

                        50% {
                            transform: translate3d(-25px, 8px, 0) rotate(1deg);
                        }
                    }

                    @keyframes StatsGlowPulse {
                        0%, 100% {
                            opacity: 0.3;
                        }

                        50% {
                            opacity: 0.75;
                        }
                    }

                    @keyframes StatsScrollLine {
                        0%, 100% {
                            height: 18px;
                            opacity: 0.35;
                        }

                        50% {
                            height: 30px;
                            opacity: 1;
                        }
                    }

                    @keyframes StatsEnergySweep {
                        0% {
                            transform: translateX(-140%);
                            opacity: 0;
                        }

                        20% {
                            opacity: 0.1;
                        }

                        50% {
                            opacity: 0.8;
                        }

                        80% {
                            opacity: 0.08;
                        }

                        100% {
                            transform: translateX(240%);
                            opacity: 0;
                        }
                    }

                    .stats-wave {
                        animation: StatsWaveMove 12s ease-in-out infinite;
                    }

                    .stats-glow {
                        animation: StatsGlowPulse 5s ease-in-out infinite;
                    }

                    .stats-scroll-line {
                        animation: StatsScrollLine 2.2s ease-in-out infinite;
                    }

                    .stats-energy-sweep {
                        animation: StatsEnergySweep 6s ease-in-out infinite;
                    }

                    .stats-3d-surface {
                        transform-style: preserve-3d;
                    }

                    .stats-3d-surface:hover {
                        transform: translateY(-2px) rotateX(1.2deg);
                    }
                `}
            </style>

            {/* =====================================================
                FULL VIEWPORT BACKGROUND
            ===================================================== */}

            <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-full w-[98vw] -translate-x-1/2 overflow-hidden bg-[#061633]">
                {/* Main radial atmosphere */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(22,119,255,0.11),transparent_42%)]" />

                {/* Top ambient glow */}
                <div className="absolute -top-20 left-1/2 h-[160px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[70px]" />

                {/* =================================================
                    FLOWING BACKGROUND WAVES
                ================================================= */}

                <svg
                    viewBox="0 0 1440 400"
                    preserveAspectRatio="none"
                    className="stats-wave absolute -left-[8%] top-[-100px] h-[390px] w-[116%] opacity-60"
                >
                    <defs>
                        <linearGradient
                            id="StatsWaveGradientOne"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop
                                offset="0%"
                                stopColor="#1677FF"
                                stopOpacity="0"
                            />

                            <stop
                                offset="35%"
                                stopColor="#1677FF"
                                stopOpacity="0.55"
                            />

                            <stop
                                offset="65%"
                                stopColor="#19D3FF"
                                stopOpacity="0.75"
                            />

                            <stop
                                offset="100%"
                                stopColor="#7C3CFF"
                                stopOpacity="0"
                            />
                        </linearGradient>

                        <linearGradient
                            id="StatsWaveGradientTwo"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop
                                offset="0%"
                                stopColor="#19D3FF"
                                stopOpacity="0"
                            />

                            <stop
                                offset="45%"
                                stopColor="#19D3FF"
                                stopOpacity="0.5"
                            />

                            <stop
                                offset="70%"
                                stopColor="#1677FF"
                                stopOpacity="0.65"
                            />

                            <stop
                                offset="100%"
                                stopColor="#7C3CFF"
                                stopOpacity="0"
                            />
                        </linearGradient>
                    </defs>

                    <path
                        d="M-100 265 C180 70 370 95 580 215 C770 325 1000 335 1190 155 C1310 40 1430 55 1540 130"
                        fill="none"
                        stroke="url(#StatsWaveGradientOne)"
                        strokeWidth="1.4"
                    />

                    <path
                        d="M-80 300 C160 125 350 120 560 235 C770 350 960 350 1160 185 C1290 80 1430 95 1530 160"
                        fill="none"
                        stroke="url(#StatsWaveGradientTwo)"
                        strokeWidth="1"
                    />

                    <path
                        d="M-120 330 C120 160 360 160 570 260 C760 352 960 360 1165 220 C1300 130 1430 120 1530 185"
                        fill="none"
                        stroke="#1677FF"
                        strokeOpacity="0.28"
                        strokeWidth="1"
                    />

                    <path
                        d="M-100 360 C150 190 370 190 590 285 C790 370 980 370 1180 245 C1300 170 1425 165 1540 220"
                        fill="none"
                        stroke="#19D3FF"
                        strokeOpacity="0.16"
                        strokeWidth="0.8"
                    />
                </svg>

                {/* Lower wave layer */}
                <svg
                    viewBox="0 0 1440 300"
                    preserveAspectRatio="none"
                    className="absolute -bottom-[115px] left-[-8%] h-[290px] w-[116%] opacity-50"
                >
                    <path
                        d="M-80 180 C180 35 380 70 580 175 C800 290 970 285 1170 130 C1310 25 1420 30 1530 100"
                        fill="none"
                        stroke="#1677FF"
                        strokeOpacity="0.32"
                        strokeWidth="1"
                    />

                    <path
                        d="M-90 215 C160 70 370 95 585 205 C790 310 990 315 1190 160 C1320 60 1430 65 1535 125"
                        fill="none"
                        stroke="#19D3FF"
                        strokeOpacity="0.2"
                        strokeWidth="0.8"
                    />
                </svg>

                {/* Ambient glows */}
                <div className="stats-glow absolute left-[8%] top-[8%] h-20 w-20 rounded-full bg-cyan-400/[0.06] blur-[40px]" />

                <div className="stats-glow absolute right-[10%] top-[12%] h-24 w-24 rounded-full bg-violet-500/[0.07] blur-[45px]" />
            </div>

            {/* =====================================================
                ACTUAL STATS CARD
            ===================================================== */}

            <div className="relative z-10 mx-auto h-full max-w-[1400px] px-6 pt-10 lg:px-8 [perspective:100vw]">
                {/* Back 3D Extrusion */}
                <div className="absolute inset-x-9 top-[39px] h-[92px] rounded-[17px] border border-blue-500/10 bg-[#020B20]/85 shadow-[0_18px_32px_rgba(0,0,0,0.45)] lg:inset-x-11" />

                {/* Lower Reflection */}
                <div className="absolute inset-x-[10%] top-[119px] h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent blur-[1px]" />

                {/* Main Stats Card */}
                <div className="stats-3d-surface group relative h-[96px] w-full overflow-hidden rounded-[17px] border border-blue-300/25 bg-[linear-gradient(110deg,rgba(8,31,70,0.90),rgba(4,19,44,0.84),rgba(8,30,67,0.90))] shadow-[0_16px_35px_rgba(0,0,0,0.28),0_0_45px_rgba(22,119,255,0.08),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl transition-transform duration-700">
                    {/* Top Glass Edge */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />

                    {/* Bottom Glass Edge */}
                    <div className="absolute inset-x-[7%] bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

                    {/* Inner Frame */}
                    <div className="pointer-events-none absolute inset-[1px] rounded-[16px] border border-white/[0.025]" />

                    {/* Fine Grid */}
                    <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:25px_25px] [mask-image:radial-gradient(circle_at_center,black_20%,transparent_82%)]" />

                    {/* Moving Reflection */}
                    <div className="pointer-events-none absolute left-[-30%] top-[-80%] h-[260%] w-[18%] rotate-[20deg] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent opacity-70 transition-transform duration-[1600ms] group-hover:translate-x-[780%]" />

                    {/* Energy Sweep */}
                    <div className="stats-energy-sweep pointer-events-none absolute inset-y-0 left-0 w-[28%] bg-gradient-to-r from-transparent via-cyan-300/[0.035] to-transparent blur-sm" />

                    {/* Stats Grid */}
                    <div className="relative grid h-full grid-cols-2 lg:grid-cols-4">
                        {StatsData.map((Stat, Index) => {
                            const Icon = Stat.icon;

                            return (
                                <div
                                    key={Stat.id}
                                    className={`group/stat relative flex h-full items-center px-6 py-5 transition-all duration-500 hover:bg-white/[0.012] lg:px-8 ${Index !== StatsData.length - 1
                                        ? "border-b border-blue-300/[0.10] lg:border-b-0 lg:border-r"
                                        : ""
                                        }`}
                                >
                                    {/* Separator Glow */}
                                    {Index !== StatsData.length - 1 && (
                                        <span className="pointer-events-none absolute -right-px top-[20%] hidden h-[60%] w-px bg-gradient-to-b from-transparent via-cyan-300/15 to-transparent lg:block" />
                                    )}

                                    <div className="relative flex w-full items-center gap-4 [transform-style:preserve-3d]">
                                        {/* Premium Icon */}
                                        <div className="relative shrink-0 transition-transform duration-500 group-hover/stat:-translate-y-1">
                                            <PremiumIconBadge
                                                icon={Icon}
                                                size="default"
                                            />
                                        </div>

                                        {/* Stat Content */}
                                        <div className="min-w-0">
                                            <div className="flex items-baseline gap-1.5">
                                                <span className="text-[22px] font-semibold leading-none tracking-[-0.035em] text-cyan-300 lg:text-[24px]">
                                                    <AnimatedStatValue
                                                        target={Stat.target}
                                                        suffix={Stat.suffix}
                                                        decimals={Stat.decimals}
                                                        StartCounting={
                                                            StartCounting
                                                        }
                                                    />
                                                </span>

                                                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(25,211,255,0.95)]" />
                                            </div>

                                            <p className="mt-1 whitespace-nowrap text-[10px] font-medium leading-tight text-blue-100/65 lg:text-[11px]">
                                                {Stat.label}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* =====================================================
                CLICKABLE SCROLL INDICATOR
            ===================================================== */}

            <button
                type="button"
                onClick={HandleScrollToBottom}
                aria-label="Scroll to bottom"
                className="group absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 cursor-pointer flex-col items-center border-0 bg-transparent p-0 outline-none"
            >
                <div className="flex items-center gap-2 text-[9px] font-medium tracking-wide text-blue-100/60 transition-all duration-300 group-hover:text-cyan-200">
                    <ArrowUpRight
                        size={12}
                        strokeWidth={1.4}
                        className="rotate-[135deg] text-blue-100/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-cyan-300"
                    />

                    <span className="transition-all duration-300 group-hover:tracking-[0.08em]">
                        Scroll to explore
                    </span>

                    <ArrowUpRight
                        size={12}
                        strokeWidth={1.4}
                        className="rotate-[135deg] text-blue-100/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-cyan-300"
                    />
                </div>

                <span className="stats-scroll-line mt-2 w-px bg-gradient-to-b from-blue-200/60 to-transparent" />
            </button>
        </section>
    );
};

export default Stats;