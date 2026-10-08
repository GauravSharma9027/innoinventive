import {
    ArrowUpRight,
    Clock3,
    CornerDownLeft,
    Headphones,
    MessageCircle,
    Send,
} from "lucide-react";
import { motion } from "framer-motion";
import {
    useRef,
    useState,
} from "react";

import HeroActionButton from "../../../components/UI/HeroActionButton";
import PremiumIconBadge from "../../../components/UI/PremiumIconBadge";
import ContactHeroBackground from "../../../assets/contact/HeroBG.png";

/* =========================================================
   CONTENT
========================================================= */

const ContactHeroContent = {
    eyebrow: "GET IN TOUCH",

    headingPrimary: "Let’s Build",
    headingSecondary: "Something Amazing",
    headingAccent: "Together.",

    description:
        "Have a project in mind, a question, or just want to say hello? We’d love to hear from you. Our team is here to help you turn your ideas into reality.",

    primaryButton: "Start A Conversation",
    secondaryButton: "See Our Process",
};

/* =========================================================
   LEFT SIDE BADGES
========================================================= */

const ContactHighlights = [
    {
        id: "response",
        icon: Clock3,
        title: "Quick Response",
        description: "Within 24 hours",
    },
    {
        id: "communication",
        icon: MessageCircle,
        title: "Clear Communication",
        description: "No jargon, just clarity",
    },
    {
        id: "support",
        icon: Headphones,
        title: "Dedicated Support",
        description: "Before, during & after",
    },
];

/* =========================================================
   RIGHT SIDE FLOATING BADGES
========================================================= */

const VisualBadges = [
    {
        id: "message-left",
        icon: MessageCircle,

        /* Add your link here */
        link: "#",

        position:
            "left-[18%] top-[29%] sm:left-[14%] sm:top-[27%] lg:left-[12%] lg:top-[29%]",

        animationY: [-3, 4, -3],
        duration: 3.8,
    },
    {
        id: "message-top",
        icon: MessageCircle,

        /* Add your link here */
        link: "#",

        position:
            "right-[20%] top-[15%] sm:right-[17%] sm:top-[12%] lg:right-[17%] lg:top-[13%]",

        animationY: [4, -4, 4],
        duration: 4.4,
    },
    {
        id: "send-right",
        icon: Send,

        /* Add your link here */
        link: "#",

        position:
            "right-[7%] top-[44%] sm:right-[5%] sm:top-[44%] lg:right-[4%] lg:top-[45%]",

        animationY: [-4, 3, -4],
        duration: 4,
    },
];

/* =========================================================
   COMPONENT
========================================================= */

const ContactHero = () => {
    const VisualReference = useRef(null);
    const RippleIdReference = useRef(0);

    const [Ripples, SetRipples] = useState([]);

    /* =====================================================
       IMAGE CLICK RIPPLE
    ===================================================== */

    const HandleVisualClick = (Event) => {
        if (!VisualReference.current) {
            return;
        }

        const Bounds =
            VisualReference.current.getBoundingClientRect();

        const X =
            Event.clientX - Bounds.left;

        const Y =
            Event.clientY - Bounds.top;

        const RippleId =
            RippleIdReference.current++;

        const Ripple = {
            id: RippleId,
            x: X,
            y: Y,
        };

        SetRipples((CurrentRipples) => [
            ...CurrentRipples.slice(-3),
            Ripple,
        ]);

        window.setTimeout(() => {
            SetRipples((CurrentRipples) =>
                CurrentRipples.filter(
                    (CurrentRipple) =>
                        CurrentRipple.id !==
                        RippleId,
                ),
            );
        }, 1700);
    };

    return (
        <section
            id="contact-hero"
            className="relative isolate flex max-h-[85vh] w-full items-center overflow-hidden bg-[#061633] text-white"
        >
            {/* =====================================================
                BACKGROUND IMAGE
            ===================================================== */}

            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${ContactHeroBackground})`,
                }}
            />

            {/* =====================================================
                LEFT DARK GRADIENT
            ===================================================== */}

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(2,10,24,0.97)_0%,rgba(3,13,31,0.90)_27%,rgba(3,14,32,0.55)_44%,rgba(3,16,37,0.13)_63%,rgba(2,10,25,0.02)_100%)]" />

            {/* =====================================================
                BOTTOM FADE
            ===================================================== */}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-28 bg-gradient-to-t from-[#061633]/95 via-[#061633]/40 to-transparent" />

            {/* =====================================================
                SUBTLE TOP ATMOSPHERE
            ===================================================== */}

            <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-24 bg-gradient-to-b from-[#020A18]/40 to-transparent" />

            {/* =====================================================
                GRID
            ===================================================== */}

            <div className="pointer-events-none absolute inset-0 z-[2] opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:58px_58px]" />

            {/* =====================================================
                MAIN CONTAINER
            ===================================================== */}

            <div className="relative z-10 mx-auto flex w-full max-w-[1280px] items-center px-4 py-14 sm:px-6 sm:py-16 lg:px-8 xl:px-10">

                {/* =================================================
                    LEFT CONTENT
                ================================================= */}

                <div className="w-full max-w-[610px]">

                    {/* =================================================
                        EYEBROW
                    ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -20,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.7,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="inline-flex items-center gap-2.5"
                    >
                        <span className="h-[2px] w-6 bg-gradient-to-r from-cyan-300 to-violet-400" />

                        <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-cyan-100/70">
                            {ContactHeroContent.eyebrow}
                        </span>
                    </motion.div>

                    {/* =================================================
                        HEADING
                    ================================================= */}

                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 24,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.08,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="mt-5 max-w-[650px] text-[clamp(42px,3.8vw,50px)] font-semibold leading-[0.93] tracking-[-0.065em] text-white"
                    >
                        {ContactHeroContent.headingPrimary}

                        <span className="block">
                            {
                                ContactHeroContent.headingSecondary
                            }
                        </span>

                        <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                            {ContactHeroContent.headingAccent}
                        </span>
                    </motion.h1>

                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}

                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 18,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.75,
                            delay: 0.18,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="mt-6 max-w-[570px] text-[16px] leading-[1.8] text-white/48 sm:text-[13px]"
                    >
                        {ContactHeroContent.description}
                    </motion.p>

                    {/* =================================================
                        BUTTONS
                    ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 18,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.75,
                            delay: 0.25,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="mt-8 flex flex-wrap items-center gap-3"
                    >
                        <HeroActionButton
                            label={
                                ContactHeroContent.primaryButton
                            }
                            to="#contact-form"
                            icon={ArrowUpRight}
                        />

                        <HeroActionButton
                            label={
                                ContactHeroContent.secondaryButton
                            }
                            to="/process"
                            icon={ArrowUpRight}
                            variant="secondary"
                        />
                    </motion.div>

                    {/* =================================================
                        PREMIUM BADGES
                    ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 16,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.34,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="mt-9 grid max-w-[620px] grid-cols-1 gap-2.5 sm:grid-cols-3"
                    >
                        {ContactHighlights.map(
                            (Item, Index) => {
                                const Icon = Item.icon;

                                return (
                                    <motion.div
                                        key={Item.id}
                                        initial={{
                                            opacity: 0,
                                            y: 12,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay:
                                                0.4 +
                                                Index *
                                                0.08,
                                            ease: [
                                                0.16,
                                                1,
                                                0.3,
                                                1,
                                            ],
                                        }}
                                        whileHover={{
                                            y: -3,
                                        }}
                                        className="group/badge flex items-center gap-2.5 rounded-[13px] border border-cyan-300/[0.10] bg-[#061633]/62 p-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.20),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/25 hover:bg-[#071B3A]/78 hover:shadow-[0_18px_32px_rgba(0,0,0,0.25),0_0_24px_rgba(25,211,255,0.055)]"
                                    >
                                        <div className="shrink-0 transition-transform duration-300 group-hover/badge:scale-[1.04]">
                                            <PremiumIconBadge
                                                icon={Icon}
                                                size="small"
                                            />
                                        </div>

                                        <div className="min-w-0">
                                            <p className="truncate text-lg font-semibold text-white/68">
                                                {
                                                    Item.title
                                                }
                                            </p>

                                            <p className="mt-0.5 truncate text-sm leading-[1.3] text-white/30">
                                                {
                                                    Item.description
                                                }
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            },
                        )}
                    </motion.div>

                    {/* =================================================
                        STATUS
                    ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.6,
                        }}
                        className="mt-6 flex items-center gap-2"
                    >
                        {/* <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-45" />

                            <span className="relative h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(25,211,255,0.75)]" />
                        </span>

                        <span className="text-[7px] font-medium uppercase tracking-[0.16em] text-white/25">
                            Available for new conversations
                        </span> */}
                    </motion.div>
                </div>

                {/* =================================================
                    RIGHT VISUAL INTERACTION AREA
                ================================================= */}

                <div
                    ref={VisualReference}
                    onClick={HandleVisualClick}
                    className="absolute right-0 top-0 h-full w-[55%] cursor-crosshair"
                    aria-label="Interactive contact visual"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(Event) => {
                        if (
                            Event.key ===
                            "Enter" ||
                            Event.key === " "
                        ) {
                            Event.preventDefault();

                            const Bounds =
                                VisualReference.current?.getBoundingClientRect();

                            if (!Bounds) {
                                return;
                            }

                            const RippleId =
                                RippleIdReference.current++;

                            const Ripple = {
                                id: RippleId,
                                x: Bounds.width *
                                    0.58,
                                y: Bounds.height *
                                    0.52,
                            };

                            SetRipples(
                                (CurrentRipples) => [
                                    ...CurrentRipples.slice(
                                        -3,
                                    ),
                                    Ripple,
                                ],
                            );

                            window.setTimeout(
                                () => {
                                    SetRipples(
                                        (
                                            CurrentRipples,
                                        ) =>
                                            CurrentRipples.filter(
                                                (
                                                    CurrentRipple,
                                                ) =>
                                                    CurrentRipple.id !==
                                                    RippleId,
                                            ),
                                    );
                                },
                                1700,
                            );
                        }
                    }}
                >
                    {/* =================================================
                        HEAVY RIPPLE SYSTEM
                    ================================================= */}

                    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
                        {Ripples.map((Ripple) => (
                            <div
                                key={Ripple.id}
                                className="absolute"
                                style={{
                                    left: Ripple.x,
                                    top: Ripple.y,
                                }}
                            >
                                {/* Outer ring */}
                                <motion.span
                                    initial={{
                                        width: 24,
                                        height: 24,
                                        x: -12,
                                        y: -12,
                                        opacity: 0.85,
                                    }}
                                    animate={{
                                        width: 310,
                                        height: 310,
                                        x: -155,
                                        y: -155,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        duration: 1.55,
                                        ease: [
                                            0.16,
                                            1,
                                            0.3,
                                            1,
                                        ],
                                    }}
                                    className="absolute rounded-full border-[2px] border-cyan-200/45 shadow-[0_0_40px_rgba(25,211,255,0.22)]"
                                />

                                {/* Second ring */}
                                <motion.span
                                    initial={{
                                        width: 18,
                                        height: 18,
                                        x: -9,
                                        y: -9,
                                        opacity: 0.72,
                                    }}
                                    animate={{
                                        width: 230,
                                        height: 230,
                                        x: -115,
                                        y: -115,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        duration: 1.25,
                                        delay: 0.06,
                                        ease: [
                                            0.16,
                                            1,
                                            0.3,
                                            1,
                                        ],
                                    }}
                                    className="absolute rounded-full border-[2px] border-blue-300/40"
                                />

                                {/* Third ring */}
                                <motion.span
                                    initial={{
                                        width: 12,
                                        height: 12,
                                        x: -6,
                                        y: -6,
                                        opacity: 0.62,
                                    }}
                                    animate={{
                                        width: 145,
                                        height: 145,
                                        x: -72.5,
                                        y: -72.5,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        duration: 0.95,
                                        delay: 0.1,
                                        ease: [
                                            0.16,
                                            1,
                                            0.3,
                                            1,
                                        ],
                                    }}
                                    className="absolute rounded-full border border-violet-300/35 shadow-[0_0_22px_rgba(124,58,237,0.2)]"
                                />

                                {/* Center impact */}
                                <motion.span
                                    initial={{
                                        width: 16,
                                        height: 16,
                                        x: -8,
                                        y: -8,
                                        opacity: 0.95,
                                    }}
                                    animate={{
                                        width: 90,
                                        height: 90,
                                        x: -45,
                                        y: -45,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        duration: 0.72,
                                        ease: [
                                            0.16,
                                            1,
                                            0.3,
                                            1,
                                        ],
                                    }}
                                    className="absolute rounded-full bg-cyan-300/[0.15] blur-[8px]"
                                />

                                {/* Bright flash */}
                                <motion.span
                                    initial={{
                                        width: 7,
                                        height: 7,
                                        x: -3.5,
                                        y: -3.5,
                                        opacity: 1,
                                    }}
                                    animate={{
                                        width: 32,
                                        height: 32,
                                        x: -16,
                                        y: -16,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeOut",
                                    }}
                                    className="absolute rounded-full bg-white shadow-[0_0_26px_rgba(25,211,255,0.95),0_0_55px_rgba(25,211,255,0.45)]"
                                />
                            </div>
                        ))}
                    </div>

                    {/* =================================================
                        FLOATING IMAGE BADGES
                    ================================================= */}

                    <div className="pointer-events-none absolute inset-0 z-10">
                        {VisualBadges.map(
                            (Badge) => {
                                const Icon =
                                    Badge.icon;

                                return (
                                    <motion.a
                                        key={Badge.id}
                                        href={Badge.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(Event) =>
                                            Event.stopPropagation()
                                        }
                                        animate={{
                                            y: Badge.animationY,
                                        }}
                                        transition={{
                                            duration:
                                                Badge.duration,
                                            repeat:
                                                Infinity,
                                            ease:
                                                "easeInOut",
                                        }}
                                        className={`pointer-events-auto absolute ${Badge.position} block rounded-[14px] outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60`}
                                        aria-label={`Open ${Badge.id} link`}
                                    >
                                        <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[13px] border border-blue-300/30 bg-[#061633]/48 shadow-[0_14px_30px_rgba(0,0,0,0.28),0_0_24px_rgba(25,105,255,0.12),inset_0_1px_0_rgba(255,255,255,0.11)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/45 hover:bg-[#092044]/62 hover:shadow-[0_18px_34px_rgba(0,0,0,0.30),0_0_28px_rgba(25,211,255,0.15),inset_0_1px_0_rgba(255,255,255,0.13)] sm:h-[54px] sm:w-[54px]">
                                            <PremiumIconBadge
                                                icon={Icon}
                                                size="default"
                                            />
                                        </div>
                                    </motion.a>
                                );
                            },
                        )}
                    </div>

                    {/* =================================================
                        TOP RIGHT TEXT + ARROW
                    ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -8,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.4,
                        }}
                        className="pointer-events-none absolute right-[7%] top-[10%] z-10 sm:right-[9%] sm:top-[8%] lg:right-[8%] lg:top-[9%]"
                    >
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;