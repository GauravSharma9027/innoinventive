import {
    Activity,
    ArrowUpRight,
    BrainCircuit,
    Bot,
    Code2,
    Gauge,
    LayoutDashboard,
    PlugZap,
    ShoppingCart,
    Smartphone,
    UsersRound,
} from "lucide-react";
import { useEffect, useState } from "react";

import PremiumButton from "../../../components/UI/PremiumButton";
import PremiumIconBadge from "../../../components/UI/PremiumIconBadge";

/* =========================================================
   PROCESS DATA
========================================================= */

const ProcessData = [
    {
        id: "requirement",
        title: "Requirement",
        lineOne: "Understood",
        lineTwo: "by AI",
        icon: LayoutDashboard,
    },
    {
        id: "technology",
        title: "Technology",
        lineOne: "Selected",
        lineTwo: "Automatically",
        icon: BrainCircuit,
    },
    {
        id: "development",
        title: "Development",
        lineOne: "In Progress",
        lineTwo: "",
        icon: Code2,
    },
    {
        id: "testing",
        title: "Testing",
        lineOne: "& Optimization",
        lineTwo: "",
        icon: Gauge,
    },
    {
        id: "monitoring",
        title: "Live",
        lineOne: "& Monitoring",
        lineTwo: "",
        icon: Activity,
    },
];

/* =========================================================
   SERVICES DATA
========================================================= */

const ServicesData = [
    {
        id: "web-development",
        title: "Web Development",
        description: "Modern, responsive & scalable websites.",
        status: "Auto Scaling",
        icon: LayoutDashboard,
        iconTheme: "blue",
        statusTheme: "green",
    },
    {
        id: "ecommerce",
        title: "E-commerce",
        description: "Smart stores with payment & inventory sync.",
        status: "Order Processing",
        icon: ShoppingCart,
        iconTheme: "cyan",
        statusTheme: "cyan",
    },
    {
        id: "cms-crm",
        title: "CMS & CRM",
        description: "Automate content, leads and customer flow.",
        status: "Data Sync",
        icon: UsersRound,
        iconTheme: "violet",
        statusTheme: "violet",
    },
    {
        id: "api-integration",
        title: "API Integration",
        description: "Connect your systems with powerful APIs.",
        status: "Live Connected",
        icon: PlugZap,
        iconTheme: "amber",
        statusTheme: "amber",
    },
    {
        id: "ai-automation",
        title: "AI & Automation",
        description: "Save time with intelligent workflows and AI agents.",
        status: "Auto Running",
        icon: Bot,
        iconTheme: "cyan",
        statusTheme: "green",
    },
    {
        id: "mobile-applications",
        title: "Mobile Applications",
        description: "High-performance apps for Android & iOS.",
        status: "Building...",
        icon: Smartphone,
        iconTheme: "violet",
        statusTheme: "violet",
    },
];

/* =========================================================
   SERVICE ICON THEMES
========================================================= */

const ServiceIconTheme = {
    blue: {
        wrapper:
            "border-cyan-300/20 bg-[linear-gradient(145deg,#123C78,#08244D)]",
        icon: "text-cyan-300",
        glow: "bg-cyan-400/10",
    },

    cyan: {
        wrapper:
            "border-cyan-300/20 bg-[linear-gradient(145deg,#104D73,#072842)]",
        icon: "text-cyan-300",
        glow: "bg-cyan-400/10",
    },

    violet: {
        wrapper:
            "border-violet-300/25 bg-[linear-gradient(145deg,#5A2D9D,#281558)]",
        icon: "text-violet-200",
        glow: "bg-violet-400/10",
    },

    amber: {
        wrapper:
            "border-amber-200/20 bg-[linear-gradient(145deg,#765323,#34260D)]",
        icon: "text-amber-100",
        glow: "bg-amber-300/10",
    },
};

/* =========================================================
   STATUS THEMES
========================================================= */

const ServiceStatusTheme = {
    green: {
        wrapper: "border-emerald-300/15 bg-emerald-400/[0.08]",
        dot: "bg-emerald-300",
        text: "text-emerald-100",
    },

    cyan: {
        wrapper: "border-cyan-300/15 bg-cyan-400/[0.08]",
        dot: "bg-cyan-300",
        text: "text-cyan-100",
    },

    violet: {
        wrapper: "border-violet-300/15 bg-violet-400/[0.08]",
        dot: "bg-violet-300",
        text: "text-violet-100",
    },

    amber: {
        wrapper: "border-amber-200/15 bg-amber-300/[0.08]",
        dot: "bg-amber-200",
        text: "text-amber-100",
    },
};

/* =========================================================
   PROCESS ITEM
========================================================= */

const ProcessItem = ({ item, index, isActive }) => {
    const Icon = item.icon;

    return (
        <div
            className={`process-item group relative z-20 flex flex-col items-center text-center ${isActive ? "process-item-active" : ""
                }`}
        >
            {/* =====================================================
                PROCESS ICON
            ===================================================== */}

            <div className="relative process-node">
                {/* Ambient glow */}
                <span className="absolute -inset-3 rounded-2xl bg-blue-500/10 blur-xl transition-all duration-500 group-hover:bg-cyan-400/15" />

                {/* Active signal ring */}
                <span
                    className={`pointer-events-none absolute -inset-[6px] rounded-[15px] border border-cyan-300/0 transition-all duration-500 ${isActive
                            ? "border-cyan-300/25 shadow-[0_0_22px_rgba(25,211,255,0.10)]"
                            : ""
                        }`}
                />

                <div className="process-icon-shell relative rounded-[11px] border border-blue-300/20 bg-[linear-gradient(145deg,rgba(18,57,112,0.95),rgba(4,19,43,0.98))] p-[2px] shadow-[0_9px_20px_rgba(0,0,0,0.35),0_0_20px_rgba(22,119,255,0.12),inset_0_1px_0_rgba(255,255,255,0.15)]">
                    <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] border border-cyan-300/10 bg-[#061A3A]">
                        <Icon
                            size={15}
                            strokeWidth={1.8}
                            className="text-cyan-300 drop-shadow-[0_0_7px_rgba(25,211,255,0.45)]"
                        />
                    </div>
                </div>
            </div>

            {/* =====================================================
                PROCESS TEXT
            ===================================================== */}

            <div className="mt-2.5 max-w-[95px]">
                <p className="text-[8.5px] font-semibold leading-[1.15] text-white/90">
                    {item.title}
                </p>

                <p className="mt-[2px] text-[7.5px] font-medium leading-[1.2] text-blue-100/65">
                    {item.lineOne}
                </p>

                {item.lineTwo && (
                    <p className="text-[7.5px] font-medium leading-[1.2] text-blue-100/65">
                        {item.lineTwo}
                    </p>
                )}
            </div>

            {/* Active automation marker */}
            <span
                className={`mt-1.5 h-[3px] rounded-full bg-cyan-300 transition-all duration-500 ${isActive
                        ? "w-4 opacity-70 shadow-[0_0_8px_rgba(25,211,255,0.65)]"
                        : "w-1 opacity-20"
                    }`}
            />
        </div>
    );
};

/* =========================================================
   SERVICE CARD
========================================================= */

const ServiceCard = ({ service }) => {
    const Icon = service.icon;

    const IconTheme =
        ServiceIconTheme[service.iconTheme] || ServiceIconTheme.blue;

    const StatusTheme =
        ServiceStatusTheme[service.statusTheme] ||
        ServiceStatusTheme.cyan;

    return (
        <article className="service-card group relative h-[110px] w-full">
            {/* =====================================================
                BACK 3D DEPTH
            ===================================================== */}

            <div className="absolute inset-x-[3px] bottom-[-3px] top-[3px] rounded-[12px] border border-blue-500/10 bg-[#020B20]/90" />

            {/* =====================================================
                AMBIENT HOVER GLOW
            ===================================================== */}

            <div
                className={`pointer-events-none absolute -inset-2 rounded-2xl ${IconTheme.glow} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
            />

            {/* =====================================================
                MAIN CARD
            ===================================================== */}

            <div className="service-card-main relative flex h-full w-full flex-col overflow-hidden rounded-[12px] border border-blue-300/15 bg-[linear-gradient(145deg,rgba(8,31,70,0.96),rgba(3,17,40,0.98))] px-[11px] py-[13px] shadow-[0_10px_24px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.07)] transition-all duration-500 group-hover:-translate-y-[3px] group-hover:border-cyan-300/30 group-hover:shadow-[0_18px_32px_rgba(0,0,0,0.38),0_0_24px_rgba(25,211,255,0.08)]">
                {/* Top glass edge */}
                <span className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

                {/* Moving reflection */}
                <span className="pointer-events-none absolute -left-[35%] top-[-60%] h-[220%] w-[18%] rotate-[22deg] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 transition-all duration-1000 group-hover:left-[120%] group-hover:opacity-100" />

                {/* =================================================
                    TOP CONTENT ROW
                    Left Icon + Right Text + Premium Arrow
                ================================================= */}

                <div className="flex min-h-0 flex-1 items-start gap-[9px]">
                    {/* Service Icon */}
                    <div
                        className={`relative mt-[1px] flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[9px] border shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_6px_14px_rgba(0,0,0,0.25)] ${IconTheme.wrapper}`}
                    >
                        <Icon
                            size={18}
                            strokeWidth={1.8}
                            className={IconTheme.icon}
                        />

                        <span className="pointer-events-none absolute inset-[4px] rounded-[6px] border border-white/[0.04]" />
                    </div>

                    {/* Title + Description */}
                    <div className="min-w-0 flex-1">
                        <h3 className="truncate text-[11.5px] font-semibold leading-[1.1] tracking-tight text-white">
                            {service.title}
                        </h3>

                        <p className="mt-[5px] line-clamp-2 max-w-[245px] text-[8.5px] font-medium leading-[1.45] text-blue-100/58">
                            {service.description}
                        </p>
                    </div>

                    {/* =================================================
                        LOCKED PREMIUM RIGHT ICON
                    ================================================= */}

                    <div className="relative -mr-1 -mt-1 flex h-[32px] w-[32px] shrink-0 items-center justify-center">
                        <div className="origin-center scale-[0.72]">
                            <PremiumIconBadge
                                icon={ArrowUpRight}
                                size="default"
                            />
                        </div>
                    </div>
                </div>

                {/* =================================================
                    STATUS / TAG ROW
                    ================================================= */}

                <div className="mt-[3px] flex items-center">
                    <div
                        className={`inline-flex items-center gap-[5px] rounded-full border px-[8px] py-[3.5px] ${StatusTheme.wrapper}`}
                    >
                        <span className="relative flex h-[5px] w-[5px]">
                            <span
                                className={`absolute inset-0 animate-ping rounded-full ${StatusTheme.dot} opacity-30`}
                            />

                            <span
                                className={`relative h-[5px] w-[5px] rounded-full ${StatusTheme.dot}`}
                            />
                        </span>

                        <span
                            className={`whitespace-nowrap text-[8px] font-semibold tracking-wide ${StatusTheme.text}`}
                        >
                            {service.status}
                        </span>
                    </div>
                </div>
            </div>
        </article>
    );
};

/* =========================================================
   SERVICES SECTION
========================================================= */

const Services = () => {
    const [ActiveProcess, SetActiveProcess] = useState(0);

    /* =========================================================
       AUTOMATIC PROCESS CYCLE
    ========================================================= */

    useEffect(() => {
        const Interval = window.setInterval(() => {
            SetActiveProcess((Current) => {
                return (Current + 1) % ProcessData.length;
            });
        }, 2200);

        return () => window.clearInterval(Interval);
    }, []);

    /* =========================================================
       SERVICES NAVIGATION
    ========================================================= */

    const HandleServicesNavigation = () => {
        const ServicesElement = document.getElementById("services");

        if (ServicesElement) {
            ServicesElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            return;
        }

        window.location.href = "/services";
    };

    return (
        <section
            id="services"
            className="relative w-full overflow-hidden bg-[#061633] text-white"
        >
            {/* =====================================================
                BACKGROUND
            ===================================================== */}

            <div className="pointer-events-none absolute inset-0">
                {/* Main atmosphere */}
                <div className="absolute left-1/2 top-[16%] h-[380px] w-[760px] -translate-x-1/2 rounded-full bg-blue-500/[0.045] blur-[120px]" />

                {/* Cyan glow */}
                <div className="absolute left-[5%] top-[38%] h-[220px] w-[280px] rounded-full bg-cyan-400/[0.025] blur-[100px]" />

                {/* Violet glow */}
                <div className="absolute right-[5%] top-[42%] h-[220px] w-[280px] rounded-full bg-violet-500/[0.025] blur-[100px]" />

                {/* Technical grid */}
                <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:55px_55px]" />

                {/* Top border */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

                {/* Bottom border */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent" />

                {/* Moving ambient sweep */}
                <div className="services-ambient-sweep absolute left-[-20%] top-[20%] h-[180px] w-[24%] rotate-[18deg] bg-gradient-to-r from-transparent via-cyan-300/[0.025] to-transparent blur-md" />
            </div>

            {/* =====================================================
                MAIN CONTENT
            ===================================================== */}

            <div className="relative mx-auto max-w-[1400px] px-6 py-10 lg:px-8">
                <div className="grid items-start gap-10 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)] xl:gap-12">
                    {/* =================================================
                        LEFT CONTENT
                    ================================================= */}

                    <div className="flex flex-col justify-center pt-1 lg:min-h-[315px]">
                        {/* Label */}
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.035] px-2.5 py-[5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                            <span className="h-[5px] w-[5px] rounded-full bg-cyan-300 shadow-[0_0_7px_rgba(25,211,255,0.7)]" />

                            <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-cyan-100/65">
                                Our Services
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="mt-3 max-w-[290px] text-[29px] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-[32px]">
                            End-to-End Tech Solutions
                            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                                with Intelligent Automation.
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mt-4 max-w-[275px] text-[12px] font-medium leading-[1.7] text-blue-100/55">
                            We don&apos;t just build websites. We build
                            systems that think, connect and grow — so you can
                            focus on what matters.
                        </p>

                        {/* =================================================
                            REUSED PREMIUM BUTTON
                        ================================================= */}

                        <div className="mt-5">
                            <PremiumButton
                                type="button"
                                onClick={HandleServicesNavigation}
                                label="View All Services"
                                icon={ArrowUpRight}
                            />
                                

        
                        
                        </div>
                    </div>

                    {/* =================================================
                        RIGHT SIDE
                    ================================================= */}

                    <div className="relative min-w-0">
                        {/* =================================================
                            PROCESS TIMELINE
                        ================================================= */}

                        <div className="relative h-[108px]">
                            <svg
                                className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                                viewBox="0 0 900 120"
                                preserveAspectRatio="none"
                                fill="none"
                            >
                                <defs>
                                    <linearGradient
                                        id="ServiceRouteGradient"
                                        x1="0"
                                        y1="0"
                                        x2="1"
                                        y2="0"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="#7C3CFF"
                                            stopOpacity="0.25"
                                        />

                                        <stop
                                            offset="20%"
                                            stopColor="#1677FF"
                                            stopOpacity="0.9"
                                        />

                                        <stop
                                            offset="50%"
                                            stopColor="#19D3FF"
                                            stopOpacity="1"
                                        />

                                        <stop
                                            offset="80%"
                                            stopColor="#1677FF"
                                            stopOpacity="0.9"
                                        />

                                        <stop
                                            offset="100%"
                                            stopColor="#19D3FF"
                                            stopOpacity="0.8"
                                        />
                                    </linearGradient>

                                    <filter
                                        id="ServiceRouteGlow"
                                        x="-20%"
                                        y="-100%"
                                        width="140%"
                                        height="300%"
                                    >
                                        <feGaussianBlur
                                            stdDeviation="3"
                                            result="blur"
                                        />

                                        <feMerge>
                                            <feMergeNode in="blur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>

                                {/* Main curve */}
                                <path
                                    d="M24 59 C24 27 52 15 86 15 H814 C848 15 876 27 876 59"
                                    stroke="url(#ServiceRouteGradient)"
                                    strokeWidth="1.15"
                                    filter="url(#ServiceRouteGlow)"
                                />

                                {/* Bottom route */}
                                <path
                                    d="M24 59 C18 86 38 100 72 100 H828 C862 100 882 86 876 59"
                                    stroke="url(#ServiceRouteGradient)"
                                    strokeWidth="0.9"
                                    strokeOpacity="0.26"
                                />

                                {/* Moving energy */}
                                <path
                                    d="M24 59 C24 27 52 15 86 15 H814 C848 15 876 27 876 59"
                                    className="services-route-flow"
                                    stroke="#7DEAFF"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeDasharray="4 62"
                                />

                                {/* Endpoint lights */}
                                <circle
                                    cx="24"
                                    cy="59"
                                    r="2.5"
                                    fill="#7C3CFF"
                                />

                                <circle
                                    cx="876"
                                    cy="59"
                                    r="3"
                                    fill="#19D3FF"
                                />

                                <circle
                                    cx="876"
                                    cy="59"
                                    r="8"
                                    stroke="#19D3FF"
                                    strokeOpacity="0.18"
                                    strokeWidth="1"
                                />
                            </svg>

                            {/* Process Items */}
                            <div className="relative grid h-full grid-cols-5 gap-2">
                                {ProcessData.map((Process, Index) => (
                                    <ProcessItem
                                        key={Process.id}
                                        item={Process}
                                        index={Index}
                                        isActive={
                                            ActiveProcess === Index
                                        }
                                    />
                                ))}
                            </div>
                        </div>

                        {/* =================================================
                            SERVICE CARDS
                        ================================================= */}

                        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                            {ServicesData.map((Service) => (
                                <ServiceCard
                                    key={Service.id}
                                    service={Service}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* =====================================================
                ANIMATIONS
            ===================================================== */}

            <style>{`
                .services-route-flow {
                    animation: servicesRouteFlow 3.2s linear infinite;
                }

                .services-ambient-sweep {
                    animation: servicesAmbientSweep 8s ease-in-out infinite;
                }

                .service-card-main {
                    transform-style: preserve-3d;
                }

                .process-item {
                    perspective: 900px;
                }

                .process-node {
                    transform-style: preserve-3d;
                }

                /*
                 * Hover:
                 * 1. icon flips upward
                 * 2. lifts
                 * 3. pauses
                 * 4. drops back into place
                 */
                .process-item:hover .process-icon-shell {
                    animation: processIconFlipDrop 900ms cubic-bezier(0.16, 1, 0.3, 1);
                }

                .process-item-active .process-icon-shell {
                    box-shadow:
                        0 10px 22px rgba(0,0,0,0.35),
                        0 0 26px rgba(25,211,255,0.14),
                        inset 0 1px 0 rgba(255,255,255,0.15);
                }

                @keyframes processIconFlipDrop {
                    0% {
                        transform:
                            translate3d(0, 0, 0)
                            rotateX(0deg)
                            rotateY(0deg)
                            scale(1);
                    }

                    18% {
                        transform:
                            translate3d(0, -9px, 10px)
                            rotateX(-18deg)
                            rotateY(7deg)
                            scale(1.04);
                    }

                    38% {
                        transform:
                            translate3d(0, -20px, 18px)
                            rotateX(-72deg)
                            rotateY(12deg)
                            scale(1.06);
                    }

                    55% {
                        transform:
                            translate3d(0, -10px, 12px)
                            rotateX(-145deg)
                            rotateY(8deg)
                            scale(1.03);
                    }

                    70% {
                        transform:
                            translate3d(0, 2px, 5px)
                            rotateX(-180deg)
                            rotateY(3deg)
                            scale(1);
                    }

                    82% {
                        transform:
                            translate3d(0, -4px, 2px)
                            rotateX(-12deg)
                            rotateY(0deg)
                            scale(1.01);
                    }

                    92% {
                        transform:
                            translate3d(0, 3px, 0)
                            rotateX(5deg)
                            rotateY(0deg)
                            scale(0.99);
                    }

                    100% {
                        transform:
                            translate3d(0, 0, 0)
                            rotateX(0deg)
                            rotateY(0deg)
                            scale(1);
                    }
                }

                @keyframes servicesRouteFlow {
                    from {
                        stroke-dashoffset: 66;
                    }

                    to {
                        stroke-dashoffset: 0;
                    }
                }

                @keyframes servicesAmbientSweep {
                    0%,
                    100% {
                        transform: translate3d(0, 0, 0);
                        opacity: 0;
                    }

                    20% {
                        opacity: 0.35;
                    }

                    50% {
                        transform: translate3d(430%, 8px, 0);
                        opacity: 0.65;
                    }

                    80% {
                        opacity: 0.12;
                    }
                }

                @media (max-width: 1023px) {
                    .services-route-flow {
                        animation-duration: 4s;
                    }
                }

                @media (max-width: 767px) {
                    .services-route-flow {
                        display: none;
                    }

                    .services-ambient-sweep {
                        display: none;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .services-route-flow,
                    .services-ambient-sweep,
                    .process-item:hover .process-icon-shell {
                        animation: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Services;