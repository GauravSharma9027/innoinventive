import {
    ArrowRight,
    Check,
    Clock3,
    Mail,
    MapPin,
    Phone,
    RotateCcw,
    Send,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
    useEffect,
    useRef,
    useState,
} from "react";

import HeroActionButton from "../../../components/UI/HeroActionButton";
import PremiumButton from "../../../components/UI/PremiumButton";
import PremiumIconBadge from "../../../components/UI/PremiumIconBadge";

/* =========================================================
   CONTACT FORM CONTENT
========================================================= */

const ContactFormContent = {
    eyebrow: "SEND US A MESSAGE",
    heading: "Tell Us About Your Project",

    description:
        "Fill out the form below and we'll get back to you as soon as possible. Whether it's a new idea, a partnership, or just a quick question — we're here to help.",

    phone: "+91 90275 35618",

    email: "gauravsharma902753@gmail.com",
};

/* =========================================================
   SUBJECT OPTIONS
========================================================= */

const SubjectOptions = [
    "Website Development",
    "Web Application",
    "AI / Automation",
    "Dashboard / Admin Panel",
    "API / Backend Development",
    "UI / UX Project",
    "Partnership",
    "General Inquiry",
];

/* =========================================================
   CONTACT FORM SECTION
========================================================= */

const ContactFormSection = () => {
    const [FormData, SetFormData] = useState({
        FullName: "",
        Email: "",
        Subject: "",
        Message: "",
    });

    const [IsSubmitted, SetIsSubmitted] =
        useState(false);

    /* =====================================================
       HANDLE INPUT
    ===================================================== */

    const HandleChange = (Event) => {
        const {
            name: FieldName,
            value: FieldValue,
        } = Event.target;

        SetFormData((CurrentData) => ({
            ...CurrentData,
            [FieldName]: FieldValue,
        }));
    };

    /* =====================================================
       HANDLE SUBMIT
    ===================================================== */

    const HandleSubmit = (Event) => {
        Event.preventDefault();

        SetIsSubmitted(true);
    };

    /* =====================================================
       HANDLE RESET
    ===================================================== */

    const HandleReset = () => {
        SetFormData({
            FullName: "",
            Email: "",
            Subject: "",
            Message: "",
        });

        SetIsSubmitted(false);
    };

    return (
        <section
            id="contact-form"
            className="relative flex h-[100vh] w-full items-center justify-center overflow-hidden bg-[#020B1A] px-4 py-8 text-white sm:px-6 lg:px-8"
        >
            {/* =================================================
                BACKGROUND ATMOSPHERE
            ================================================= */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {/* Top glow */}
                <motion.div
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -18, 0],
                    }}
                    transition={{
                        duration: 11,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-[18%] top-[-18%] h-[320px] w-[320px] rounded-full bg-blue-500/[0.07] blur-[120px]"
                />

                {/* Right glow */}
                <motion.div
                    animate={{
                        x: [0, -25, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 13,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-[-18%] right-[8%] h-[360px] w-[360px] rounded-full bg-violet-500/[0.055] blur-[130px]"
                />

                {/* Cyan glow */}
                <div className="absolute left-[45%] top-[45%] h-[220px] w-[220px] rounded-full bg-cyan-400/[0.025] blur-[100px]" />

                {/* Subtle grid */}
                <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:58px_58px]" />

                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#020B1A_88%)]" />
            </div>

            {/* =================================================
                MAIN CARD
            ================================================= */}

            <motion.div
                initial={{
                    opacity: 0,
                    y: 22,
                    scale: 0.985,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                viewport={{
                    once: true,
                    amount: 0.2,
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                }}
                className="relative z-10 h-full w-full max-w-[900px] overflow-hidden rounded-[16px] border border-blue-400/40 bg-[linear-gradient(145deg,rgba(6,27,58,0.97),rgba(2,14,31,0.99))] shadow-[0_40px_100px_rgba(0,0,0,0.52),0_18px_40px_rgba(10,70,150,0.12),0_0_50px_rgba(25,103,255,0.07),inset_0_2px_0_rgba(255,255,255,0.075),inset_0_-12px_30px_rgba(0,0,0,0.16)] [transform:perspective(1600px)_rotateX(0.45deg)] [transform-style:preserve-3d] lg:h-[58vh] lg:min-h-[420px] lg:max-h-[560px]"
            >
                {/* Top reflection */}
                <span className="pointer-events-none absolute left-[7%] right-[7%] top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />

                {/* =================================================
                    INNER GRID
                ================================================= */}

                <div className="grid h-full lg:grid-cols-2">

                    {/* =================================================
                        LEFT INFORMATION
                    ================================================= */}

                    <div className="relative border-b border-white/[0.06] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-8 xl:p-9">

                        {/* Background glow */}
                        <span className="pointer-events-none absolute left-[-70px] top-[20%] h-[220px] w-[220px] rounded-full bg-cyan-400/[0.025] blur-[90px]" />

                        {/* Eyebrow */}
                        <div className="relative flex items-center gap-2.5">
                            <span className="h-[2px] w-5 bg-gradient-to-r from-cyan-300 to-violet-400" />

                            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-200/70">
                                {
                                    ContactFormContent.eyebrow
                                }
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="relative mt-4 max-w-[390px] text-[clamp(29px,2.5vw,38px)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">
                            {
                                ContactFormContent.heading
                            }
                        </h2>

                        {/* Description */}
                        <p className="relative mt-5 max-w-[390px] text-[12px] leading-[1.8] text-white/46 sm:text-[13px]">
                            {
                                ContactFormContent.description
                            }
                        </p>

                        {/* Contact Details */}
                        <div className="relative mt-7 space-y-5">

                            <ContactDetail
                                icon={Phone}
                                label="Phone"
                                value={
                                    ContactFormContent.phone
                                }
                                href={`tel:${ContactFormContent.phone}`}
                            />

                            <ContactDetail
                                icon={Mail}
                                label="Email"
                                value={
                                    ContactFormContent.email
                                }
                                href={`mailto:${ContactFormContent.email}`}
                            />

                        </div>
                    </div>

                    {/* =================================================
                        RIGHT FORM
                    ================================================= */}

                    <div className="relative p-6 sm:p-8 lg:p-8 xl:p-9">

                        {/* Form atmosphere */}
                        <span className="pointer-events-none absolute bottom-[-100px] right-[-60px] h-[260px] w-[260px] rounded-full bg-violet-500/[0.04] blur-[100px]" />

                        {IsSubmitted ? (
                            <SuccessState
                                onReset={HandleReset}
                            />
                        ) : (
                            <form
                                onSubmit={HandleSubmit}
                                className="relative"
                            >
                                {/* =========================================
                                    TOP ROW
                                ========================================= */}

                                <div className="grid gap-4 sm:grid-cols-2">

                                    <PremiumInput
                                        label="Full Name"
                                        name="FullName"
                                        value={
                                            FormData.FullName
                                        }
                                        onChange={
                                            HandleChange
                                        }
                                        placeholder="Your name"
                                        required
                                    />

                                    <PremiumInput
                                        label="Email Address"
                                        name="Email"
                                        type="email"
                                        value={
                                            FormData.Email
                                        }
                                        onChange={
                                            HandleChange
                                        }
                                        placeholder="you@example.com"
                                        required
                                    />

                                </div>

                                {/* =========================================
                                    SUBJECT
                                ========================================= */}

                                <div className="mt-4">
                                    <PremiumSelect
                                        label="Subject"
                                        name="Subject"
                                        value={
                                            FormData.Subject
                                        }
                                        onChange={
                                            HandleChange
                                        }
                                        placeholder="Select a subject"
                                        options={
                                            SubjectOptions
                                        }
                                        required
                                    />
                                </div>

                                {/* =========================================
                                    MESSAGE
                                ========================================= */}

                                <div className="mt-4">
                                    <label
                                        htmlFor="Message"
                                        className="mb-2 block text-[10px] font-medium text-white/72"
                                    >
                                        Message

                                        <span className="text-cyan-300">
                                            {" "}
                                            *
                                        </span>
                                    </label>

                                    <textarea
                                        id="Message"
                                        name="Message"
                                        value={
                                            FormData.Message
                                        }
                                        onChange={
                                            HandleChange
                                        }
                                        required
                                        rows={5}
                                        placeholder="Tell us about your project..."
                                        className="min-h-[108px] w-full resize-none rounded-[9px] border border-blue-500/30 bg-[linear-gradient(145deg,rgba(8,35,72,0.78),rgba(4,22,47,0.92))] px-3.5 py-3.5 text-[11px] leading-[1.65] text-white/78 outline-none shadow-[inset_0_2px_5px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.035),0_8px_18px_rgba(0,0,0,0.13)] transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-400/45 focus:border-cyan-300/55 focus:bg-[#071F43]/90 focus:shadow-[0_0_0_2px_rgba(25,211,255,0.045),0_0_24px_rgba(25,211,255,0.06),inset_0_2px_5px_rgba(0,0,0,0.22)]"
                                    />
                                </div>

                                {/* =========================================
                                    ACTIONS
                                ========================================= */}

                                <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_176px]">

                                    <div className="flex">
                                        <PremiumButton
                                            label="Send Message"
                                            icon={Send}
                                            type="submit"
                                        />
                                    </div>

                                    <div className="flex">
                                        <HeroActionButton
                                            label="Reset"
                                            icon={RotateCcw}
                                            type="button"
                                            variant="secondary"
                                            onClick={
                                                HandleReset
                                            }
                                        />
                                    </div>

                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

/* =========================================================
   CONTACT DETAIL
========================================================= */

const ContactDetail = ({
    icon: Icon,
    label,
    value,
    href,
}) => {
    return (
        <motion.a
            href={href}
            whileHover={{
                x: 4,
                y: -2,
                rotateX: 1.5,
                rotateY: -1.5,
            }}
            transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative flex items-start gap-3 overflow-hidden rounded-[15px] border border-cyan-300/[0.10] bg-[linear-gradient(145deg,rgba(9,38,79,0.72),rgba(3,19,42,0.92))] p-3 shadow-[0_12px_25px_rgba(0,0,0,0.20),0_4px_10px_rgba(25,103,255,0.06),inset_0_1px_0_rgba(255,255,255,0.065),inset_0_-6px_14px_rgba(0,0,0,0.13)] [transform-style:preserve-3d] transition-all duration-300 hover:border-cyan-300/25 hover:shadow-[0_18px_32px_rgba(0,0,0,0.25),0_0_22px_rgba(25,211,255,0.07),inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-7px_16px_rgba(0,0,0,0.14)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40"
        >
            <span className="pointer-events-none absolute left-[12%] right-[12%] top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="shrink-0 translate-z-[8px]">
                <PremiumIconBadge
                    icon={Icon}
                    size="default"
                />
            </div>

            <div className="min-w-0 pt-0.5">
                <p className="text-[11px] font-medium text-white/75">
                    {label}
                </p>

                <p className="mt-1 break-all text-[11px] font-medium text-white/70 transition-colors duration-300 group-hover:text-cyan-300 sm:text-[12px]">
                    {value}
                </p>

            </div>
        </motion.a>
    );
};

/* =========================================================
   PREMIUM INPUT
========================================================= */

const PremiumInput = ({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    required = false,
}) => {
    return (
        <div>
            <label
                htmlFor={name}
                className="mb-2 block text-[10px] font-medium text-white/72"
            >
                {label}

                {required && (
                    <span className="text-cyan-300">
                        {" "}
                        *
                    </span>
                )}
            </label>

            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="h-[42px] w-full rounded-[9px] border border-blue-500/30 bg-[linear-gradient(145deg,rgba(8,35,72,0.76),rgba(4,22,47,0.94))] px-3.5 text-[11px] text-white/78 outline-none placeholder:text-white/22 shadow-[inset_0_2px_5px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.035),0_7px_16px_rgba(0,0,0,0.11)] transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-400/45 focus:border-cyan-300/55 focus:bg-[#071F43]/90 focus:shadow-[0_0_0_2px_rgba(25,211,255,0.045),0_0_24px_rgba(25,211,255,0.06),inset_0_2px_5px_rgba(0,0,0,0.22)]"
            />
        </div>
    );
};

/* =========================================================
   PREMIUM SELECT
========================================================= */

const PremiumSelect = ({
    label,
    name,
    value,
    onChange,
    placeholder,
    options,
    required = false,
}) => {
    const [IsOpen, SetIsOpen] =
        useState(false);

    const SelectReference = useRef(null);

    /* =====================================================
       CLOSE ON OUTSIDE CLICK
    ===================================================== */

    useEffect(() => {
        const HandleOutsideClick = (Event) => {
            if (
                SelectReference.current &&
                !SelectReference.current.contains(
                    Event.target,
                )
            ) {
                SetIsOpen(false);
            }
        };

        document.addEventListener(
            "mousedown",
            HandleOutsideClick,
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                HandleOutsideClick,
            );
        };
    }, []);

    /* =====================================================
       SELECT OPTION
    ===================================================== */

    const HandleOptionSelect = (Option) => {
        onChange({
            target: {
                name,
                value: Option,
            },
        });

        SetIsOpen(false);
    };

    return (
        <div
            ref={SelectReference}
            className="relative"
        >
            {/* =================================================
                LABEL
            ================================================= */}

            <label
                htmlFor={`${name}-trigger`}
                className="mb-2 block text-[10px] font-medium text-white/72"
            >
                {label}

                {required && (
                    <span className="text-cyan-300">
                        {" "}
                        *
                    </span>
                )}
            </label>

            {/* =================================================
                SELECT TRIGGER
            ================================================= */}

            <button
                id={`${name}-trigger`}
                type="button"
                aria-haspopup="listbox"
                aria-expanded={IsOpen}
                onClick={() =>
                    SetIsOpen(
                        (CurrentState) =>
                            !CurrentState,
                    )
                }
                className={[
                    "group relative flex h-[42px] w-full items-center justify-between overflow-hidden rounded-[9px] border bg-[linear-gradient(145deg,rgba(8,35,72,0.76),rgba(4,22,47,0.94))] px-3.5 text-left outline-none shadow-[inset_0_2px_5px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.035),0_7px_16px_rgba(0,0,0,0.11)] transition-all duration-300",

                    IsOpen
                        ? "border-cyan-300/55 bg-[#071F43]/90 shadow-[0_0_0_2px_rgba(25,211,255,0.045),0_0_28px_rgba(25,211,255,0.07),inset_0_2px_5px_rgba(0,0,0,0.22)]"
                        : "border-blue-500/30 hover:-translate-y-[1px] hover:border-blue-400/45",
                ].join(" ")}
            >
                {/* Selected value */}
                <span
                    className={[
                        "min-w-0 truncate pr-3 text-[11px] transition-colors duration-300",
                        value
                            ? "text-white/78"
                            : "text-white/22",
                    ].join(" ")}
                >
                    {value || placeholder}
                </span>

                {/* =================================================
                    ARROW
                ================================================= */}

                <motion.span
                    className="relative flex h-[25px] w-[25px] shrink-0 items-center justify-center"
                    animate={{
                        rotate: IsOpen
                            ? 270
                            : 90,
                    }}
                    transition={{
                        duration: 0.28,
                        ease: [
                            0.16,
                            1,
                            0.3,
                            1,
                        ],
                    }}
                >
                    <PremiumIconBadge
                        icon={ArrowRight}
                        size="small"
                    />
                </motion.span>

                {/* Top reflection */}
                <span className="pointer-events-none absolute left-[10%] right-[10%] top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </button>

            {/* =================================================
                MODERN DROPDOWN
            ================================================= */}

            <AnimatePresence>
                {IsOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -5,
                            scale: 0.985,
                        }}
                        animate={{
                            opacity: 1,
                            y: 5,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: -3,
                            scale: 0.985,
                        }}
                        transition={{
                            duration: 0.22,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1,
                            ],
                        }}
                        className="absolute left-0 right-0 top-full z-[100] overflow-hidden rounded-[12px] border border-cyan-300/[0.16] bg-[linear-gradient(145deg,rgba(7,30,63,0.985),rgba(2,15,34,0.995))] p-1.5 shadow-[0_24px_50px_rgba(0,0,0,0.48),0_0_30px_rgba(25,211,255,0.055),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl"
                    >
                        {/* Top reflection */}
                        <span className="pointer-events-none absolute left-[12%] right-[12%] top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/25 to-transparent" />

                        {/* =================================================
                            OPTIONS
                        ================================================= */}

                        <div
                            role="listbox"
                            aria-label={label}
                            className="subject-options-scroll max-h-[220px] overflow-y-auto"
                        >
                            {options.map(
                                (Option) => {
                                    const IsSelected =
                                        value ===
                                        Option;

                                    return (
                                        <motion.button
                                            key={Option}
                                            type="button"
                                            role="option"
                                            aria-selected={
                                                IsSelected
                                            }
                                            onClick={() =>
                                                HandleOptionSelect(
                                                    Option,
                                                )
                                            }
                                            whileHover={{
                                                x: 2,
                                            }}
                                            transition={{
                                                duration: 0.2,
                                            }}
                                            className={[
                                                "group/option relative flex min-h-[40px] w-full items-center gap-2.5 rounded-[8px] px-3 text-left transition-all duration-200",

                                                IsSelected
                                                    ? "bg-cyan-300/[0.065] text-cyan-200"
                                                    : "text-white/54 hover:bg-white/[0.045] hover:text-white/85",
                                            ].join(
                                                " ",
                                            )}
                                        >
                                            {/* Left indicator */}
                                            <span
                                                className={[
                                                    "h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-200",

                                                    IsSelected
                                                        ? "bg-cyan-300 shadow-[0_0_9px_rgba(25,211,255,0.85)]"
                                                        : "bg-white/12 group-hover/option:bg-cyan-300/50",
                                                ].join(
                                                    " ",
                                                )}
                                            />

                                            {/* Text */}
                                            <span className="min-w-0 flex-1 truncate text-[10px] font-medium">
                                                {
                                                    Option
                                                }
                                            </span>

                                            {/* Selected check */}
                                            {IsSelected && (
                                                <Check
                                                    size={
                                                        13
                                                    }
                                                    strokeWidth={
                                                        2
                                                    }
                                                    className="shrink-0 text-cyan-300"
                                                />
                                            )}

                                            {/* Left hover line */}
                                            <span className="pointer-events-none absolute inset-y-1 left-0 w-[2px] rounded-full bg-cyan-300 opacity-0 transition-opacity duration-200 group-hover/option:opacity-60" />
                                        </motion.button>
                                    );
                                },
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* =================================================
                HIDDEN SCROLLBAR
            ================================================= */}

            <style>
                {`
                    .subject-options-scroll {
                        scrollbar-width: none;
                        -ms-overflow-style: none;
                    }

                    .subject-options-scroll::-webkit-scrollbar {
                        width: 0;
                        height: 0;
                        display: none;
                    }
                `}
            </style>
        </div>
    );
};

/* =========================================================
   SUCCESS STATE
========================================================= */

const SuccessState = ({
    onReset,
}) => {
    return (
        <motion.div
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
            }}
            className="flex min-h-[330px] flex-col items-center justify-center text-center"
        >
            <PremiumIconBadge
                icon={Send}
                size="large"
            />

            <p className="mt-5 text-[8px] font-semibold uppercase tracking-[0.2em] text-cyan-300/65">
                MESSAGE RECEIVED
            </p>

            <h3 className="mt-2 text-[27px] font-semibold tracking-[-0.04em] text-white">
                Thanks for reaching out.
            </h3>

            <p className="mt-3 max-w-[370px] text-[11px] leading-[1.7] text-white/38">
                Your message has been captured. We&apos;ll
                get back to you as soon as possible.
            </p>

            <HeroActionButton
                label="Send Another Message"
                icon={RotateCcw}
                type="button"
                variant="secondary"
                onClick={onReset}
            />
        </motion.div>
    );
};

export default ContactFormSection;