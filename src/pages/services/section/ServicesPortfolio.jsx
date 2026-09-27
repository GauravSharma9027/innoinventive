import React from 'react'

import {
    ArrowDown,
    ArrowUp,
    ArrowUpRight,
    ChevronDown,
    Filter,
    Phone,
    X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import HeroActionButton from "../../../components/UI/HeroActionButton";
import PremiumIconBadge from "../../../components/UI/PremiumIconBadge";

const ServicesPortfolioTitle = ({ title }) => {
    const TitleWords = title.trim().split(" ");
    const AccentWord = TitleWords.length > 1 ? TitleWords.pop() : "";
    const PrimaryTitle = TitleWords.join(" ");

    if (!AccentWord) {
        return (
            <h2 className="text-[clamp(28px,2vw,32px)] font-semibold leading-[0.98] tracking-[-0.055em] text-white">
                {title}
            </h2>
        );
    }

    return (
        <h2 className="tracking-[-0.055em]">
            <span className="block text-[clamp(28px,2vw,32px)] font-semibold leading-[0.98] text-white">
                {PrimaryTitle}
            </span>

            <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-[clamp(28px,2vw,32px)] font-semibold leading-[0.98] text-transparent">
                {AccentWord}
            </span>
        </h2>
    );
};

const ServicesPortfolioData = [
    {
        id: "web-engineering",
        title: "Web Engineering",
        subtitle:
            "Scalable digital products built for real business growth.",
        description:
            "Custom web applications, business platforms and high-performance digital experiences engineered around your workflows, users and long-term product goals.",
        services: [
            "Custom Web Applications",
            "Business Platforms",
            "React / Next.js Development",
            "Frontend Engineering",
            "Backend Systems",
            "Performance Optimization",
        ],
        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=85",
    },
    {
        id: "mobile-development",
        title: "Mobile App Development",
        subtitle:
            "Mobile experiences designed around your users.",
        description:
            "Modern mobile applications with thoughtful UX, reliable APIs and scalable architecture for consumer and business use cases.",
        services: [
            "iOS Applications",
            "Android Applications",
            "Cross-Platform Apps",
            "React Native Development",
            "Mobile UI Engineering",
            "App Performance",
        ],
        image:
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=2200&q=85",
    },
    {
        id: "ai-automation",
        title: "AI & Automation",
        subtitle:
            "Turn repetitive work into intelligent systems.",
        description:
            "AI-powered workflows, intelligent assistants and business automation systems designed to reduce manual work and increase operational speed.",
        services: [
            "AI Automation",
            "AI Assistants",
            "Workflow Automation",
            "LLM Integrations",
            "Document Intelligence",
            "Business AI Systems",
        ],
        image:
            "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=2200&q=85",
    },
    {
        id: "api-integrations",
        title: "API & Integrations",
        subtitle:
            "Connect every moving part of your digital operation.",
        description:
            "Reliable API architecture and third-party integrations that allow your applications, internal systems and external services to work together seamlessly.",
        services: [
            "REST APIs",
            "Third-Party Integrations",
            "Payment Integrations",
            "Authentication Systems",
            "Webhook Systems",
            "Automation APIs",
        ],
        image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2200&q=85",
    },
    {
        id: "ecommerce",
        title: "E-commerce & Platforms",
        subtitle:
            "Digital commerce experiences built to convert.",
        description:
            "Flexible commerce platforms and custom digital storefronts designed around your products, customers, operational workflows and growth goals.",
        services: [
            "Custom E-commerce",
            "Commerce Platforms",
            "Product Systems",
            "Checkout Experiences",
            "Order Management",
            "Admin Platforms",
        ],
        image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2200&q=85",
    },
    {
        id: "product-design",
        title: "UI/UX & Product Design",
        subtitle:
            "Interfaces that make complex products feel simple.",
        description:
            "Strategic product design, interaction systems and polished interfaces that bridge business requirements with clear, intuitive user experiences.",
        services: [
            "Product Strategy",
            "UX Research",
            "UI Design",
            "Design Systems",
            "Interaction Design",
            "Prototype Development",
        ],
        image:
            "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=2200&q=85",
    },
    {
        id: "cloud-devops",
        title: "Cloud & DevOps",
        subtitle:
            "Infrastructure designed for reliability and scale.",
        description:
            "Deployment pipelines, cloud architecture and production systems designed to make your applications faster, safer and easier to operate.",
        services: [
            "Cloud Architecture",
            "Docker",
            "CI/CD Pipelines",
            "Production Deployment",
            "Infrastructure Automation",
            "Monitoring",
        ],
        image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=85",
    },
    {
        id: "data-analytics",
        title: "Data & Analytics",
        subtitle:
            "Transform business data into useful decisions.",
        description:
            "Data systems, dashboards and analytics workflows that turn operational information into actionable business intelligence.",
        services: [
            "Business Dashboards",
            "Data Visualization",
            "Analytics Systems",
            "Reporting Automation",
            "Data Pipelines",
            "KPI Systems",
        ],
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2200&q=85",
    },
    {
        id: "cybersecurity",
        title: "Cybersecurity",
        subtitle:
            "Protect the systems your business depends on.",
        description:
            "Application-focused security, authentication architecture and secure engineering practices built into the development lifecycle.",
        services: [
            "Application Security",
            "Authentication",
            "Authorization",
            "Secure API Design",
            "Security Audits",
            "Infrastructure Hardening",
        ],
        image:
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=2200&q=85",
    },
    {
        id: "iot-systems",
        title: "IoT & Connected Systems",
        subtitle:
            "Connect physical operations with digital intelligence.",
        description:
            "Connected-device systems, real-time data flows and software interfaces designed to bring physical operations into your digital ecosystem.",
        services: [
            "IoT Dashboards",
            "Device Integrations",
            "Real-Time Monitoring",
            "Connected Workflows",
            "Data Collection",
            "Alert Systems",
        ],
        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=85",
    },
];

/* =========================================================
   BACKGROUND TRACK
========================================================= */

const ServicesPortfolioBackground = ({
    activeIndex,
}) => {
    const SlideCount =
        ServicesPortfolioData.length;

    const TrackOffset =
        (activeIndex * 100) /
        SlideCount;

    return (
        <div className="absolute inset-0 overflow-hidden">
            <div
                className="service-background-track absolute left-0 top-0 w-full"
                style={{
                    height: `${SlideCount * 100}%`,
                    transform: `translate3d(0,-${TrackOffset}%,0)`,
                }}
            >
                {ServicesPortfolioData.map(
                    (service, index) => (
                        <div
                            key={service.id}
                            className="relative h-[9.999%] w-full overflow-hidden"
                        >
                            <div
                                className={[
                                    "absolute inset-[-3%] bg-cover bg-center",
                                    index === activeIndex
                                        ? "service-background-active"
                                        : "",
                                ].join(" ")}
                                style={{
                                    backgroundImage: `url("${service.image}")`,
                                }}
                            />

                            <div className="absolute inset-0 bg-[#061633]/10" />

                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(25,211,255,0.11),transparent_34%),radial-gradient(circle_at_82%_62%,rgba(124,60,255,0.07),transparent_28%)]" />

                            <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(6,22,51,0.78)_0%,rgba(6,22,51,0.44)_46%,rgba(3,19,45,0.76)_100%)]" />

                            <div className="absolute inset-0 backdrop-blur-[1px]" />
                        </div>
                    ),
                )}
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(2,9,24,0.18)_100%)]" />
        </div>
    );
};

/* =========================================================
   PREMIUM SERVICE GRID
========================================================= */

const ServiceGrid = ({
    services,
}) => {
    return (
        <div className="service-portfolio-grid relative h-full overflow-hidden p-1">
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {services.map(
                    (
                        service,
                        index,
                    ) => (
                        <div
                            key={service}
                            className="service-card group relative min-h-[72px] [perspective:1200px]"
                            style={{
                                animationDelay: `${index * 65}ms`,
                            }}
                        >
                            {/* BACK DEPTH */}

                            {/* <span className="max-w-50 pointer-events-none absolute inset-x-1 bottom-[-6px] top-[6px] rounded-[18px] border border-blue-400/[0.055] bg-[#020B20]/92 shadow-[0_17px_32px_rgba(0,0,0,0.32)]" /> */}

                            {/* OUTER GLOW */}

                            {/* <span className="max-w-50 pointer-events-none absolute -inset-2 rounded-[23px] bg-cyan-400/[0.018] blur-xl transition-all duration-500 group-hover:bg-cyan-400/[0.06]" /> */}

                            {/* MAIN CARD */}

                            <div className="service-card-surface relative h-full min-h-[72px] rounded-[17px] border border-cyan-300/[0.13] bg-[linear-gradient(145deg,rgba(12,48,98,0.84),rgba(3,19,45,0.95))] p-5  shadow-[inset_0_1px_0_rgba(255,255,255,0.11),inset_0_-14px_24px_rgba(0,5,20,0.22),0_18px_34px_rgba(0,0,0,0.25)] backdrop-blur-xl [transform-style:preserve-3d]">
                                <div className="pointer-events-none absolute inset-0 opacity-[0.022] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:20px_20px]" />

                                <span className="pointer-events-none absolute inset-[4px] rounded-[13px] border border-white/[0.025]" />

                                <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/35 to-transparent" />

                                <span className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-cyan-300/[0.045] blur-2xl transition-all duration-500 group-hover:bg-cyan-300/[0.075]" />

                                <span className="pointer-events-none absolute right-4 top-4 h-1.5 w-1.5 rounded-[2px] border border-cyan-100/40 bg-cyan-300/55 shadow-[0_0_9px_rgba(25,211,255,0.60)] transition-all duration-500 group-hover:scale-125 group-hover:bg-cyan-200 group-hover:shadow-[0_0_12px_rgba(25,211,255,0.9)]" />

                                <div className="relative z-10 flex h-full items-end">
                                    <div className="min-w-0">
                                        <span className="mb-2 block font-mono text-[5px] uppercase tracking-[0.17em] text-cyan-200/28 transition-colors duration-500 group-hover:text-cyan-200/48">
                                            SERVICE
                                        </span>

                                        <span className="block max-w-[88%] text-[12px] font-semibold leading-[1.25] tracking-[-0.018em] text-white/80 transition-colors duration-500 group-hover:text-white sm:text-[13px]">
                                            {service}
                                        </span>
                                    </div>
                                </div>

                                <span className="pointer-events-none absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            </div>
                        </div>
                    ),
                )}
            </div>
        </div>
    );
};

/* =========================================================
   SERVICE SELECTOR
========================================================= */

const ServiceMenu = ({
    services,
    activeIndex,
    onSelect,
    onClose,
}) => {
    return (
        <div className="fixed inset-0 z-[9999] flex h-[100dvh] w-screen items-center justify-center overflow-hidden bg-[#020914]/[0.78] px-4 backdrop-blur-md sm:px-6">
            <div className="service-menu-panel relative z-[10000] h-[min(72vh,680px)] w-[min(65vw,880px)] max-h-[86dvh] overflow-hidden rounded-[28px] border border-cyan-300/[0.10] bg-[#061633]/96 shadow-[0_35px_90px_rgba(0,0,0,0.52),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-3xl [transform-style:preserve-3d]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(25,211,255,0.06),transparent_24%),radial-gradient(circle_at_86%_85%,rgba(124,60,255,0.045),transparent_24%)]" />

                <div className="relative flex h-full flex-col">
                    <div className="flex shrink-0 items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-7">
                        <div>
                            <span className="block font-mono text-[7px] uppercase tracking-[0.22em] text-cyan-300/60">
                                SERVICES
                            </span>

                            <span className="mt-1 block text-[15px] font-semibold tracking-[-0.025em] text-white sm:text-[17px]">
                                Explore Our Services
                            </span>
                        </div>

                       <button
    type="button"
    onClick={onClose}
    className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.10] bg-[#0C3062]/[0.32] text-white/65 transition-all duration-300 hover:border-cyan-200/25 hover:bg-[#0C3062]/[0.50] hover:text-white"
    aria-label="Close service selector"
>
    <PremiumIconBadge
        icon={X}
        size="default"
    />
</button>
                    </div>

                    <div className="service-menu-scroll relative flex-1 overflow-y-auto p-4 sm:p-5">
                        <div className="space-y-2.5">
                            {services.map(
                                (service, index) => {
                                    const IsActive =
                                        index === activeIndex;

                                    return (
                                        <button
                                            key={service.id}
                                            type="button"
                                            onClick={() =>
                                                onSelect(index)
                                            }
                                            className={[
                                                "group relative flex min-h-[76px] w-full items-center gap-4 overflow-hidden rounded-[18px] border p-2 text-left [perspective:1200px] transition-all duration-500",
                                                IsActive
                                                    ? "border-cyan-200/55 bg-[linear-gradient(145deg,rgba(12,48,98,0.78),rgba(3,19,45,0.94))] shadow-[0_20px_40px_rgba(0,0,0,0.26),0_0_25px_rgba(25,211,255,0.06)]"
                                                    : "border-white/[0.05] bg-[#0C3062]/[0.20] hover:border-cyan-200/[0.18] hover:bg-[#0C3062]/[0.34]",
                                            ].join(" ")}
                                        >
                                            {/*
                                                Service image stays INSIDE the
                                                service item. The wrapper is
                                                clipped so the image can never
                                                render outside the modal row.
                                            */}
                                            <span className="relative z-10 h-[56px] w-[92px] shrink-0 overflow-hidden rounded-[12px] border border-white/[0.05] bg-[#061633]/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                                                <span
                                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.035]"
                                                    style={{
                                                        backgroundImage: `url("${service.image}")`,
                                                    }}
                                                />

                                                <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(3,19,45,0.20),rgba(3,19,45,0.55))]" />
                                            </span>

                                            <div className="relative z-10 min-w-0 flex-1">
                                                <span className="block truncate text-[13px] font-semibold text-white/85">
                                                    {service.title}
                                                </span>

                                                <span className="mt-1 block truncate text-[9px] text-white/32">
                                                    {service.subtitle}
                                                </span>
                                            </div>

                                            <div className="relative z-10 mr-1 flex h-9 w-9 shrink-0 items-center justify-center">
                                                <PremiumIconBadge
                                                    icon={ArrowUpRight}
                                                    size="default"
                                                />
                                            </div>
                                        </button>
                                    );
                                },
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const ServicesPortfolio = () => {
    const [
        activeIndex,
        setActiveIndex,
    ] = useState(0);

    const [
        slideDirection,
        setSlideDirection,
    ] = useState("down");

    const [
        isServiceMenuOpen,
        setIsServiceMenuOpen,
    ] = useState(false);

    const SectionRef =
        useRef(null);

    const ActiveIndexRef =
        useRef(0);

    const IsMenuOpenRef =
        useRef(false);

    const IsSectionLockedRef =
        useRef(false);

    const IsPreparingLockRef =
        useRef(false);

    const IsTransitionLockedRef =
        useRef(false);

    const PreviousBodyOverflowRef =
        useRef("");

    const PreviousHtmlOverflowRef =
        useRef("");

    const TransitionTimerRef =
        useRef(null);

    const PrepareLockTimerRef =
        useRef(null);

    const TotalServices =
        ServicesPortfolioData.length;

    const ActiveService =
        ServicesPortfolioData[
        activeIndex
        ];

    useEffect(() => {
        ActiveIndexRef.current =
            activeIndex;
    }, [activeIndex]);

    useEffect(() => {
        IsMenuOpenRef.current =
            isServiceMenuOpen;
    }, [isServiceMenuOpen]);

    const LockDocumentScroll =
        () => {
            if (
                IsSectionLockedRef.current
            ) {
                return;
            }

            PreviousBodyOverflowRef.current =
                document.body
                    .style.overflow;

            PreviousHtmlOverflowRef.current =
                document.documentElement
                    .style.overflow;

            document.body.style.overflow =
                "hidden";

            document.documentElement.style.overflow =
                "hidden";

            IsSectionLockedRef.current =
                true;
        };

    const UnlockDocumentScroll =
        () => {
            document.body.style.overflow =
                PreviousBodyOverflowRef.current;

            document.documentElement.style.overflow =
                PreviousHtmlOverflowRef.current;

            IsSectionLockedRef.current =
                false;

            IsPreparingLockRef.current =
                false;
        };

    const ChangeSlide = (
        Direction,
    ) => {
        if (
            IsTransitionLockedRef.current
        ) {
            return false;
        }

        const CurrentIndex =
            ActiveIndexRef.current;

        const NextIndex =
            CurrentIndex +
            Direction;

        if (
            NextIndex < 0 ||
            NextIndex >=
            TotalServices
        ) {
            return false;
        }

        IsTransitionLockedRef.current =
            true;

        setSlideDirection(
            Direction > 0
                ? "down"
                : "up",
        );

        ActiveIndexRef.current =
            NextIndex;

        setActiveIndex(
            NextIndex,
        );

        if (
            TransitionTimerRef.current
        ) {
            window.clearTimeout(
                TransitionTimerRef.current,
            );
        }

        TransitionTimerRef.current =
            window.setTimeout(
                () => {
                    IsTransitionLockedRef.current =
                        false;
                },
                900,
            );

        return true;
    };

    const EnterSectionExperience =
        (Direction) => {
            const SectionElement =
                SectionRef.current;

            if (
                !SectionElement ||
                IsSectionLockedRef.current ||
                IsPreparingLockRef.current
            ) {
                return;
            }

            const Rect =
                SectionElement.getBoundingClientRect();

            const ViewportHeight =
                window.innerHeight;

            const IsEnteringFromTop =
                Direction > 0 &&
                Rect.top > 0 &&
                Rect.top <
                ViewportHeight *
                0.92;

            const IsEnteringFromBottom =
                Direction < 0 &&
                Rect.bottom <
                ViewportHeight &&
                Rect.bottom >
                ViewportHeight *
                0.08;

            if (
                !IsEnteringFromTop &&
                !IsEnteringFromBottom
            ) {
                return;
            }

            IsPreparingLockRef.current =
                true;

            const TargetScrollTop =
                window.scrollY +
                Rect.top;

            window.scrollTo({
                top:
                    TargetScrollTop,
                behavior:
                    "smooth",
            });

            if (
                PrepareLockTimerRef.current
            ) {
                window.clearTimeout(
                    PrepareLockTimerRef.current,
                );
            }

            PrepareLockTimerRef.current =
                window.setTimeout(
                    () => {
                        LockDocumentScroll();
                    },
                    420,
                );
        };

    const LeaveSectionExperience =
        (Direction) => {
            const SectionElement =
                SectionRef.current;

            if (
                !SectionElement
            ) {
                return;
            }

            const Rect =
                SectionElement.getBoundingClientRect();

            const SectionTop =
                window.scrollY +
                Rect.top;

            const SectionBottom =
                SectionTop +
                SectionElement.offsetHeight;

            UnlockDocumentScroll();

            IsTransitionLockedRef.current =
                false;

            if (
                Direction > 0
            ) {
                window.scrollTo({
                    top:
                        SectionBottom +
                        2,
                    behavior:
                        "smooth",
                });
            } else {
                window.scrollTo({
                    top:
                        Math.max(
                            0,
                            SectionTop -
                            Math.round(
                                window.innerHeight *
                                0.78,
                            ),
                        ),
                    behavior:
                        "smooth",
                });
            }
        };

    useEffect(() => {
        const HandleWheel =
            (event) => {
                const DeltaY =
                    event.deltaY;

                if (
                    Math.abs(
                        DeltaY,
                    ) < 2
                ) {
                    return;
                }

                const Direction =
                    DeltaY > 0
                        ? 1
                        : -1;

                if (
                    IsMenuOpenRef.current
                ) {
                    const Target =
                        event.target;

                    if (
                        Target instanceof
                        Element &&
                        Target.closest(
                            ".service-menu-scroll",
                        )
                    ) {
                        return;
                    }

                    event.preventDefault();

                    return;
                }

                const SectionElement =
                    SectionRef.current;

                if (
                    !SectionElement
                ) {
                    return;
                }

                const Rect =
                    SectionElement.getBoundingClientRect();

                const ViewportHeight =
                    window.innerHeight;

                const SectionIsVisible =
                    Rect.top <
                    ViewportHeight *
                    0.96 &&
                    Rect.bottom >
                    ViewportHeight *
                    0.08;

                if (
                    !SectionIsVisible
                ) {
                    return;
                }

                if (
                    !IsSectionLockedRef.current
                ) {
                    const IsApproachingDown =
                        Direction >
                        0 &&
                        Rect.top >
                        -20 &&
                        Rect.top <
                        ViewportHeight *
                        0.82;

                    const IsApproachingUp =
                        Direction <
                        0 &&
                        Rect.bottom >
                        ViewportHeight *
                        0.18 &&
                        Rect.bottom <
                        ViewportHeight +
                        20;

                    if (
                        IsApproachingDown ||
                        IsApproachingUp
                    ) {
                        event.preventDefault();

                        EnterSectionExperience(
                            Direction,
                        );

                        return;
                    }

                    return;
                }

                event.preventDefault();
                event.stopPropagation();

                const CurrentIndex =
                    ActiveIndexRef.current;

                const IsAtFirstSlide =
                    CurrentIndex ===
                    0;

                const IsAtLastSlide =
                    CurrentIndex ===
                    TotalServices - 1;

                if (
                    Direction > 0 &&
                    IsAtLastSlide
                ) {
                    LeaveSectionExperience(
                        1,
                    );

                    return;
                }

                if (
                    Direction < 0 &&
                    IsAtFirstSlide
                ) {
                    LeaveSectionExperience(
                        -1,
                    );

                    return;
                }

                if (
                    IsTransitionLockedRef.current
                ) {
                    return;
                }

                ChangeSlide(
                    Direction,
                );
            };

        window.addEventListener(
            "wheel",
            HandleWheel,
            {
                passive: false,
                capture: true,
            },
        );

        return () => {
            window.removeEventListener(
                "wheel",
                HandleWheel,
                true,
            );
        };
    }, [TotalServices]);

    useEffect(() => {
        const HandleKeyDown =
            (event) => {
                if (
                    IsMenuOpenRef.current
                ) {
                    if (
                        event.key ===
                        "Escape"
                    ) {
                        setIsServiceMenuOpen(
                            false,
                        );
                    }

                    return;
                }

                if (
                    !IsSectionLockedRef.current
                ) {
                    return;
                }

                if (
                    event.key ===
                    "ArrowDown" ||
                    event.key ===
                    "PageDown"
                ) {
                    event.preventDefault();

                    if (
                        ActiveIndexRef.current <
                        TotalServices - 1
                    ) {
                        ChangeSlide(
                            1,
                        );
                    } else {
                        LeaveSectionExperience(
                            1,
                        );
                    }
                }

                if (
                    event.key ===
                    "ArrowUp" ||
                    event.key ===
                    "PageUp"
                ) {
                    event.preventDefault();

                    if (
                        ActiveIndexRef.current >
                        0
                    ) {
                        ChangeSlide(
                            -1,
                        );
                    } else {
                        LeaveSectionExperience(
                            -1,
                        );
                    }
                }

                if (
                    event.key ===
                    "Escape"
                ) {
                    UnlockDocumentScroll();
                }
            };

        window.addEventListener(
            "keydown",
            HandleKeyDown,
        );

        return () => {
            window.removeEventListener(
                "keydown",
                HandleKeyDown,
            );
        };
    }, [TotalServices]);

    useEffect(() => {
        return () => {
            UnlockDocumentScroll();

            if (
                TransitionTimerRef.current
            ) {
                window.clearTimeout(
                    TransitionTimerRef.current,
                );
            }

            if (
                PrepareLockTimerRef.current
            ) {
                window.clearTimeout(
                    PrepareLockTimerRef.current,
                );
            }
        };
    }, []);

    const GoToNextService =
        () => {
            if (
                ActiveIndexRef.current ===
                TotalServices - 1
            ) {
                LeaveSectionExperience(
                    1,
                );

                return;
            }

            ChangeSlide(
                1,
            );
        };

    const GoToPreviousService =
        () => {
            if (
                ActiveIndexRef.current ===
                0
            ) {
                LeaveSectionExperience(
                    -1,
                );

                return;
            }

            ChangeSlide(
                -1,
            );
        };

    const HandleServiceSelect =
        (Index) => {
            const Direction =
                Index >
                    ActiveIndexRef.current
                    ? "down"
                    : "up";

            IsTransitionLockedRef.current =
                true;

            setSlideDirection(
                Direction,
            );

            ActiveIndexRef.current =
                Index;

            setActiveIndex(
                Index,
            );

            if (
                TransitionTimerRef.current
            ) {
                window.clearTimeout(
                    TransitionTimerRef.current,
                );
            }

            TransitionTimerRef.current =
                window.setTimeout(
                    () => {
                        IsTransitionLockedRef.current =
                            false;
                    },
                    900,
                );

            setIsServiceMenuOpen(
                false,
            );
        };

    return (
        <section
            ref={SectionRef}
            id="services-portfolio"
            className="relative h-[100vh] w-full overflow-hidden bg-[#061633] text-white"
        >
            <ServicesPortfolioBackground
                activeIndex={activeIndex}
            />

            <div className="pointer-events-none absolute inset-0 z-10">
                <div className="absolute left-[-12%] top-[8%] h-[360px] w-[360px] rounded-full bg-cyan-400/[0.025] blur-[130px]" />

                <div className="absolute bottom-[-14%] right-[-8%] h-[420px] w-[420px] rounded-full bg-violet-500/[0.022] blur-[150px]" />

                <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:72px_72px]" />
            </div>

            {/* ===============================================
                80VW / 70VH FOREGROUND
            =============================================== */}

            <div className="relative z-20 mx-auto flex h-full w-[94vw] py-13 justify-center lg:w-[65vw]">
                <div className="relative h-[70vh] w-full max-w-none">
                    {/* FOREGROUND DEPTH */}

                    <span className="pointer-events-none absolute inset-x-3 bottom-[-10px] top-3 rounded-[34px] border border-blue-400/[0.055] bg-[#020B20]/90 shadow-[0_30px_55px_rgba(0,0,0,0.42)]" />

                    <span className="pointer-events-none absolute -inset-4 rounded-[38px] bg-cyan-400/[0.018] blur-2xl" />

                    {/* MAIN FOREGROUND CARD */}

                    <div className="relative h-full overflow-hidden rounded-[30px] border border-cyan-300/[0.13] bg-[linear-gradient(145deg,rgba(12,48,98,0.82),rgba(3,19,45,0.96))] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-25px_35px_rgba(0,5,20,0.24),0_35px_90px_rgba(0,0,0,0.42)] backdrop-blur-2xl [transform-style:preserve-3d]">
                        <div className="pointer-events-none absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:32px_32px]" />

                        <span className="pointer-events-none absolute inset-[6px] rounded-[25px] border border-white/[0.025]" />

                        <span className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                        <div
                            key={
                                ActiveService.id
                            }
                            className={[
                                "relative grid h-full lg:grid-cols-[0.88fr_1.12fr]",
                                slideDirection ===
                                    "down"
                                    ? "service-foreground-enter-down"
                                    : "service-foreground-enter-up",
                            ].join(
                                " ",
                            )}
                        >
                            {/* =================================
                                LEFT CONTENT
                            ================================= */}

                            <div className="relative flex min-h-0 flex-col justify-between border-b border-cyan-300/[0.06] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-9 xl:p-10">
                                <div className="min-h-0">
                                    <div className="flex items-center gap-3">
                                        <span className="h-px w-9 bg-gradient-to-r from-cyan-300 to-transparent" />

                                        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200/65">
                                            SERVICE
                                            CAPABILITIES
                                        </span>
                                    </div>

                                    <div className="mt-5">
                                        <ServicesPortfolioTitle
                                            title={
                                                ActiveService.title
                                            }
                                        />

                                        <p className="mt-4 max-w-[470px] text-[clamp(11px,1vw,15px)] font-medium leading-[1.45] text-cyan-50/66">
                                            {
                                                ActiveService.subtitle
                                            }
                                        </p>

                                        <p className="mt-5 max-w-[500px] text-[10px] leading-[1.72] text-blue-100/48 sm:text-[11px]">
                                            {
                                                ActiveService.description
                                            }
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 flex shrink-0 flex-wrap items-center gap-2.5 lg:mt-4">
                                    <HeroActionButton
                                        label="See Similar Builds"
                                        icon={
                                            ArrowUpRight
                                        }
                                        to="/services"
                                        variant="secondary"
                                    />
                                    <a href="tel:+919027535618" >
                                        <PremiumIconBadge
                                            icon={
                                                Phone
                                            }
                                            size="default"
                                        />
                                    </a>
                                </div>
                            </div>

                            {/* =================================
                                RIGHT SERVICES
                            ================================= */}

                            <div className="relative flex min-h-0 flex-col p-5 sm:p-6 lg:p-7 xl:p-8">
                                <div className="mb-3 flex shrink-0 items-center justify-between">
                                    <div>
                                        <span className="font-mono text-[10px] uppercase tracking-[0.20em] text-cyan-200/50">
                                            AVAILABLE
                                            CAPABILITIES
                                        </span>

                                        <div className="mt-1 h-px w-16 bg-gradient-to-r from-cyan-300/40 to-transparent" />
                                    </div>

                                    <span className="font-mono text-[9px] text-blue-100/25">
                                        {String(
                                            ActiveService
                                                .services
                                                .length,
                                        ).padStart(
                                            2,
                                            "0",
                                        )}{" "}
                                        MODULES
                                    </span>
                                </div>

                                <div className="min-h-0 flex-1">
                                    <ServiceGrid
                                        services={
                                            ActiveService.services
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* =========================================
                        BOTTOM NAVIGATION
                    ========================================= */}

                    <div className="px-10 absolute bottom-[-60px] left-0 right-0 z-40 flex items-center gap-5">
                        {/* SEE ALL SERVICES */}

                        <button
                            type="button"
                            onClick={() =>
                                setIsServiceMenuOpen(
                                    true,
                                )
                            }
                        // className="service-nav-premium group flex h-[48px] shrink-0 items-center justify-center gap-2.5 rounded-full border border-cyan-300/[0.12] bg-[linear-gradient(145deg,rgba(12,48,98,0.82),rgba(3,19,45,0.94))] px-4 text-[9px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_14px_30px_rgba(0,0,0,0.30)] backdrop-blur-xl transition-all duration-400 hover:border-cyan-200/[0.25] hover:bg-[#0C3062]/[0.72] sm:px-5"
                        >
                            <PremiumIconBadge
                                icon={Filter}
                                size="default"
                            />

                            {/* <span>
                                See All the Services
                            </span> */}
                        </button>

                        {/* CURRENT SERVICE */}

                        <div className="flex h-[48px] min-w-0 flex-1 items-center justify-between rounded-full border border-cyan-300/[0.08] bg-[#061633]/94 px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_12px_30px_rgba(0,0,0,0.26)] backdrop-blur-xl sm:px-5">
                            <span className="truncate pr-3 text-[10px] font-semibold text-white sm:text-[11px]">
                                {
                                    ActiveService.title
                                }
                            </span>

                            <span className="shrink-0 font-mono text-[8px] text-blue-100/35">
                                {String(
                                    activeIndex +
                                    1,
                                ).padStart(
                                    2,
                                    "0",
                                )}{" "}
                                /{" "}
                                {String(
                                    TotalServices,
                                ).padStart(
                                    2,
                                    "0",
                                )}
                            </span>
                        </div>
                        <div className="flex gap-2">
                            {/* PREVIOUS */}

                            <button
                                type="button"
                                onClick={
                                    GoToPreviousService
                                }
                                disabled={
                                    activeIndex ===
                                    0
                                }
                                className="service-arrow-button flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full border border-cyan-300/[0.08] bg-[#061633]/94 text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_12px_30px_rgba(0,0,0,0.26)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-200/[0.22] hover:bg-[#0C3062]/[0.72] hover:text-white disabled:pointer-events-none disabled:opacity-25"
                                aria-label="Previous service"
                            >
                                <PremiumIconBadge
                                    icon={
                                        ArrowUp
                                    }
                                    size="default"
                                />
                            </button>

                            {/* NEXT */}

                            <button
                                type="button"
                                onClick={
                                    GoToNextService
                                }
                                disabled={
                                    activeIndex ===
                                    TotalServices -
                                    1
                                }
                                className="service-arrow-button flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full border border-cyan-300/[0.08] bg-[#061633]/94 text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_12px_30px_rgba(0,0,0,0.26)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-200/[0.22] hover:bg-[#0C3062]/[0.72] hover:text-white disabled:pointer-events-none disabled:opacity-25"
                                aria-label="Next service"
                            >
                                <PremiumIconBadge
                                    icon={
                                        ArrowDown
                                    }
                                    size="default"
                                />
                            </button>
                        </div>
                    </div>

                    {isServiceMenuOpen && (
                        <ServiceMenu
                            services={
                                ServicesPortfolioData
                            }
                            activeIndex={
                                activeIndex
                            }
                            onSelect={
                                HandleServiceSelect
                            }
                            onClose={() =>
                                setIsServiceMenuOpen(
                                    false,
                                )
                            }
                        />
                    )}
                </div>
            </div>

            <div className="pointer-events-none absolute bottom-3 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[6px] font-medium uppercase tracking-[0.20em] text-blue-100/20 lg:flex">
                <ChevronDown
                    size={9}
                    strokeWidth={1.4}
                />

                SCROLL TO EXPLORE

                <ChevronDown
                    size={9}
                    strokeWidth={1.4}
                />
            </div>

            <style>{`
                #services-portfolio {
                    isolation:
                        isolate;
                }

                /* =============================================
                   BACKGROUND
                ============================================= */

                #services-portfolio
                .service-background-track {
                    will-change:
                        transform;

                    transition:
                        transform
                        1100ms
                        cubic-bezier(
                            0.22,
                            1,
                            0.36,
                            1
                        );
                }

                #services-portfolio
                .service-background-track
                > div {
                    height:
                        calc(
                            100% /
                            ${ServicesPortfolioData.length}
                        );
                }

                #services-portfolio
                .service-background-track
                > div
                > div:first-child {
                    transform:
                        scale(
                            1.035
                        );

                    will-change:
                        transform;
                }

                #services-portfolio
                .service-background-active {
                    animation:
                        serviceBackgroundDrift
                        1400ms
                        cubic-bezier(
                            0.22,
                            1,
                            0.36,
                            1
                        )
                        both;
                }

                @keyframes serviceBackgroundDrift {
                    from {
                        transform:
                            scale(
                                1.075
                            )
                            translate3d(
                                0,
                                1.2%,
                                0
                            );

                        filter:
                            blur(
                                1px
                            );
                    }

                    to {
                        transform:
                            scale(
                                1.035
                            )
                            translate3d(
                                0,
                                0,
                                0
                            );

                        filter:
                            blur(
                                0
                            );
                    }
                }

                /* =============================================
                   FOREGROUND
                ============================================= */

                #services-portfolio
                .service-foreground-enter-down {
                    animation:
                        foregroundEnterDown
                        900ms
                        cubic-bezier(
                            0.22,
                            1,
                            0.36,
                            1
                        )
                        both;
                }

                #services-portfolio
                .service-foreground-enter-up {
                    animation:
                        foregroundEnterUp
                        900ms
                        cubic-bezier(
                            0.22,
                            1,
                            0.36,
                            1
                        )
                        both;
                }

                @keyframes foregroundEnterDown {
                    0% {
                        opacity:
                            0;

                        transform:
                            translate3d(
                                0,
                                34px,
                                0
                            )
                            scale(
                                0.985
                            );

                        filter:
                            blur(
                                7px
                            );
                    }

                    42% {
                        opacity:
                            0.85;
                    }

                    100% {
                        opacity:
                            1;

                        transform:
                            translate3d(
                                0,
                                0,
                                0
                            )
                            scale(
                                1
                            );

                        filter:
                            blur(
                                0
                            );
                    }
                }

                @keyframes foregroundEnterUp {
                    0% {
                        opacity:
                            0;

                        transform:
                            translate3d(
                                0,
                                -34px,
                                0
                            )
                            scale(
                                0.985
                            );

                        filter:
                            blur(
                                7px
                            );
                    }

                    42% {
                        opacity:
                            0.85;
                    }

                    100% {
                        opacity:
                            1;

                        transform:
                            translate3d(
                                0,
                                0,
                                0
                            )
                            scale(
                                1
                            );

                        filter:
                            blur(
                                0
                            );
                    }
                }

                /* =============================================
                   PREMIUM CAPABILITY CARDS
                ============================================= */

                #services-portfolio
                .service-card {
                    animation:
                        serviceCardEnter
                        700ms
                        cubic-bezier(
                            0.22,
                            1,
                            0.36,
                            1
                        )
                        both;

                    transform-style:
                        preserve-3d;
                }

                #services-portfolio
                .service-card-surface {
                    transition:
                        transform
                        500ms
                        cubic-bezier(
                            0.22,
                            1,
                            0.36,
                            1
                        ),
                        border-color
                        400ms ease,
                        box-shadow
                        400ms ease;

                    will-change:
                        transform;
                }

                /*
                 * IMPORTANT:
                 * NO Y-AXIS movement.
                 * Hover pushes card toward viewer.
                 */

                #services-portfolio
                .service-card:hover
                .service-card-surface {
                    transform:
                        translate3d(
                            0,
                            0,
                            16px
                        )
                        scale(
                            1.015
                        );
                }

                @keyframes serviceCardEnter {
                    from {
                        opacity:
                            0;

                        transform:
                            translate3d(
                                0,
                                12px,
                                0
                            )
                            scale(
                                0.975
                            );
                    }

                    to {
                        opacity:
                            1;

                        transform:
                            translate3d(
                                0,
                                0,
                                0
                            )
                            scale(
                                1
                            );
                    }
                }

                /* =============================================
                   PREMIUM NAV
                ============================================= */

                #services-portfolio
                .service-nav-premium {
                    transform-style:
                        preserve-3d;

                    transition:
                        transform
                        350ms
                        cubic-bezier(
                            0.22,
                            1,
                            0.36,
                            1
                        ),
                        border-color
                        350ms ease,
                        box-shadow
                        350ms ease;
                }

                #services-portfolio
                .service-nav-premium:hover {
                    transform:
                        translate3d(
                            0,
                            0,
                            7px
                        );
                }

                #services-portfolio
                .service-nav-premium:active {
                    transform:
                        translate3d(
                            0,
                            2px,
                            0
                        )
                        scale(0.94);

                    box-shadow:
                        inset 0 2px 7px rgba(0,0,0,0.34),
                        0 5px 12px rgba(0,0,0,0.24);
                }

                #services-portfolio
                .service-arrow-button {
                    transform-style:
                        preserve-3d;

                    perspective:
                        900px;
                }

                #services-portfolio
                .service-arrow-button:hover {
                    transform:
                        translate3d(
                            0,
                            0,
                            6px
                        );
                }

                #services-portfolio
                .service-arrow-button:active {
                    transform:
                        translate3d(
                            0,
                            2px,
                            0
                        )
                        scale(0.91);

                    box-shadow:
                        inset 0 2px 7px rgba(0,0,0,0.38),
                        0 5px 11px rgba(0,0,0,0.22);
                }

                /* =============================================
                   SERVICE GRID
                ============================================= */

                #services-portfolio
                .service-portfolio-grid {
                    scrollbar-width:
                        thin;

                    scrollbar-color:
                        rgba(
                            25,
                            211,
                            255,
                            0.24
                        )
                        transparent;
                }

                #services-portfolio
                .service-portfolio-grid::-webkit-scrollbar {
                    width:
                        4px;
                }

                #services-portfolio
                .service-portfolio-grid::-webkit-scrollbar-track {
                    background:
                        transparent;
                }

                #services-portfolio
                .service-portfolio-grid::-webkit-scrollbar-thumb {
                    border-radius:
                        999px;

                    background:
                        rgba(
                            25,
                            211,
                            255,
                            0.24
                        );
                }

                /* =============================================
                   SERVICE MENU
                ============================================= */

                #services-portfolio
                .service-menu-scroll {
                    scrollbar-width:
                        thin;

                    scrollbar-color:
                        rgba(
                            25,
                            211,
                            255,
                            0.25
                        )
                        transparent;
                }

                #services-portfolio
                .service-menu-scroll::-webkit-scrollbar {
                    width:
                        4px;
                }

                #services-portfolio
                .service-menu-scroll::-webkit-scrollbar-track {
                    background:
                        transparent;
                }

                #services-portfolio
                .service-menu-scroll::-webkit-scrollbar-thumb {
                    border-radius:
                        999px;

                    background:
                        rgba(
                            25,
                            211,
                            255,
                            0.30
                        );
                }

                /* =============================================
                   RESPONSIVE
                ============================================= */

                @media (max-width: 1023px) {
                    #services-portfolio {
                        height:
                            100vh;
                    }

                    #services-portfolio
                    .service-background-track {
                        transition-duration:
                            900ms;
                    }
                }

                @media (max-width: 767px) {
                    #services-portfolio {
                        height:
                            100vh;
                    }

                    #services-portfolio
                    .service-portfolio-grid {
                        max-height:
                            250px;
                    }

                    #services-portfolio
                    .service-background-track
                    > div
                    > div:first-child {
                        transform:
                            scale(
                                1.06
                            );
                    }

                    #services-portfolio
                    .service-background-active {
                        animation-duration:
                            1000ms;
                    }

                    #services-portfolio
                    .service-foreground-enter-down,
                    #services-portfolio
                    .service-foreground-enter-up {
                        animation-duration:
                            760ms;
                    }

                    #services-portfolio
                    .service-card:hover
                    .service-card-surface {
                        transform:
                            translate3d(
                                0,
                                0,
                                8px
                            )
                            scale(
                                1.01
                            );
                    }
                }

                /* =============================================
                   REDUCED MOTION
                ============================================= */

                @media (
                    prefers-reduced-motion: reduce
                ) {
                    #services-portfolio
                    .service-background-track,
                    #services-portfolio
                    .service-background-active,
                    #services-portfolio
                    .service-foreground-enter-down,
                    #services-portfolio
                    .service-foreground-enter-up,
                    #services-portfolio
                    .service-card {
                        animation:
                            none !important;

                        transition:
                            none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default ServicesPortfolio;