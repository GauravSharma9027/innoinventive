import {
    ArrowUpRight,
    CalendarDays,
    CheckCircle2,
    Clock3,
    ExternalLink,
    GitBranch,
    Layers3,
    Users,
    X,
} from "lucide-react";
import {
    useEffect,
    useMemo,
    useState,
} from "react";

import PremiumButton from "../../../components/UI/PremiumButton";
import PremiumIconBadge from "../../../components/UI/PremiumIconBadge";

/* =========================================================
   PROJECT MODAL
========================================================= */

const ProjectModal = ({
    project,
    isOpen,
    onClose,
}) => {
    /* =====================================================
       PROJECT IMAGES
    ===================================================== */

    const ProjectImages = useMemo(() => {
        if (!project) {
            return [];
        }

        if (
            Array.isArray(project.images) &&
            project.images.length > 0
        ) {
            return project.images.slice(0, 4);
        }

        return [
            project.image,
            project.image,
            project.image,
            project.image,
        ].filter(Boolean);
    }, [project]);

    const [ActiveImageIndex, SetActiveImageIndex] =
        useState(0);

    /* =====================================================
       RESET ACTIVE IMAGE
    ===================================================== */

    useEffect(() => {
        SetActiveImageIndex(0);
    }, [project]);

    /* =====================================================
       LOCK PAGE SCROLL
    ===================================================== */

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const PreviousBodyOverflow =
            document.body.style.overflow;

        const PreviousHtmlOverflow =
            document.documentElement.style.overflow;

        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";

        return () => {
            document.body.style.overflow =
                PreviousBodyOverflow;

            document.documentElement.style.overflow =
                PreviousHtmlOverflow;
        };
    }, [isOpen]);

    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const HandleKeyDown = (Event) => {
            if (Event.key === "Escape") {
                onClose();
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
    }, [isOpen, onClose]);

    /* =====================================================
       HIDDEN STATE
    ===================================================== */

    if (!isOpen || !project) {
        return null;
    }

    const ActiveImage =
        ProjectImages[ActiveImageIndex] ||
        project.image;

    return (
        <div
            className="fixed inset-0 z-[9999] flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-[#020814]/80 px-6 py-3 backdrop-blur-md sm:px-5 sm:py-5"
            onMouseDown={(Event) => {
                if (
                    Event.target ===
                    Event.currentTarget
                ) {
                    onClose();
                }
            }}
        >
            {/* =================================================
                BACKDROP ATMOSPHERE
            ================================================= */}

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[8%] top-[12%] h-[280px] w-[280px] rounded-full bg-cyan-400/[0.055] blur-[120px]" />

                <div className="absolute bottom-[8%] right-[8%] h-[320px] w-[320px] rounded-full bg-violet-500/[0.06] blur-[130px]" />

                <div className="absolute left-[45%] top-[50%] h-[220px] w-[220px] rounded-full bg-blue-500/[0.035] blur-[110px]" />
            </div>

            {/* =================================================
                MODAL SHELL
            ================================================= */}

            <div className="relative flex h-full max-h-[90dvh] w-full lg:max-w-[60vw] flex-col overflow-hidden rounded-[24px] border border-cyan-300/[0.13] bg-[linear-gradient(145deg,rgba(7,27,58,0.985),rgba(2,13,31,0.995))] shadow-[0_40px_120px_rgba(0,0,0,0.58),0_0_60px_rgba(25,211,255,0.055),inset_0_1px_0_rgba(255,255,255,0.07)]">

                {/* Top reflection */}
                <span className="pointer-events-none absolute left-[12%] right-[12%] top-0 z-30 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="relative z-20 flex shrink-0 items-center justify-between border-b border-white/[0.07] bg-[#061633]/70 px-4 py-3 backdrop-blur-xl sm:px-6">
                    <div className="flex min-w-0 items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(25,211,255,0.85)]" />

                        <span className="truncate text-[8px] font-semibold uppercase tracking-[0.2em] text-white/35">
                            PROJECT DETAILS
                        </span>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close project details"
                        className="group/close rounded-[13px] border border-white/[0.08] bg-[#071B3A]/70 p-1 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/25 hover:bg-[#0A2348]"
                    >
                        <PremiumIconBadge
                            icon={X}
                            size="default"
                        />
                    </button>
                </div>

                {/* =================================================
                    SCROLLABLE CONTENT
                ================================================= */}

                <div className="project-modal-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain">
                    <div className="p-4 sm:p-6 lg:p-7">

                        {/* =================================================
                            PROJECT GALLERY
                        ================================================= */}

                        <section className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_92px] lg:gap-3">

                            {/* =============================================
                                MAIN IMAGE
                            ============================================= */}

                            <div className="relative overflow-hidden rounded-[17px] border border-white/[0.08] bg-[#04152E] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_16px_40px_rgba(0,0,0,0.25)]">

                                <div className="relative h-[190px] overflow-hidden rounded-[13px] bg-[#061633] sm:h-[235px] lg:h-[275px]">

                                    <img
                                        src={ActiveImage}
                                        alt={project.title}
                                        className="h-full w-full object-contain"
                                    />

                                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,15,35,0.02)_15%,rgba(3,15,35,0.10)_55%,rgba(3,15,35,0.48)_100%)]" />

                                    <div className="pointer-events-none absolute inset-0 rounded-[13px] ring-1 ring-inset ring-cyan-300/[0.07]" />

                                    <div className="absolute bottom-3 left-3">
                                        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/15 bg-[#061633]/78 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.13em] text-cyan-100/80 shadow-[0_8px_18px_rgba(0,0,0,0.22)] backdrop-blur-xl">
                                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(25,211,255,0.85)]" />

                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* =============================================
                                THUMBNAILS
                            ============================================= */}

                            <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-x-visible lg:overflow-y-auto">

                                {ProjectImages.map(
                                    (
                                        Image,
                                        Index,
                                    ) => {
                                        const IsActive =
                                            Index ===
                                            ActiveImageIndex;

                                        return (
                                            <button
                                                key={`${Image}-${Index}`}
                                                type="button"
                                                onClick={() =>
                                                    SetActiveImageIndex(
                                                        Index,
                                                    )
                                                }
                                                aria-label={`View project image ${Index + 1}`}
                                                className={[
                                                    "group relative h-[58px] w-[78px] shrink-0 overflow-hidden rounded-[10px] border bg-[#04152E] p-[2px] transition-all duration-300 sm:h-[66px] sm:w-[88px] lg:h-[66px] lg:w-full",
                                                    IsActive
                                                        ? "border-cyan-300 shadow-[0_0_0_1px_rgba(25,211,255,0.45),0_8px_22px_rgba(25,211,255,0.10)]"
                                                        : "border-white/[0.08] hover:border-cyan-300/25",
                                                ].join(" ")}
                                            >
                                                <img
                                                    src={Image}
                                                    alt={`${project.title} preview ${Index + 1}`}
                                                    className="h-full w-full rounded-[7px] object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                                />

                                                {IsActive && (
                                                    <span className="pointer-events-none absolute inset-0 rounded-[7px] bg-cyan-300/[0.035] ring-1 ring-inset ring-cyan-300/20" />
                                                )}
                                            </button>
                                        );
                                    },
                                )}
                            </div>
                        </section>

                        {/* =================================================
                            TITLE + DESCRIPTION
                        ================================================= */}

                        <section className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

                            <div className="max-w-[720px]">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300/65">
                                    {project.shortLabel ||
                                        "SELECTED PROJECT"}
                                </p>

                                <h2 className="mt-2 text-2xl lg:text-[clamp(24px,3.5vw,38px)] font-semibold leading-[0.98] tracking-[-0.055em] text-white">
                                    {project.title}
                                </h2>

                                <p className="mt-3 max-w-[680px] leading-[1.8] text-white/42">
                                    {project.description}
                                </p>
                            </div>

                            <div className="shrink-0">
                                {project.liveUrl ? (
                                    <PremiumButton
                                        label="View Live Project"
                                        to={
                                            project.liveUrl
                                        }
                                        icon={ArrowUpRight}
                                    />
                                ) : (
                                    <PremiumButton
                                        label="Start Similar Project"
                                        to="/contact"
                                        icon={ArrowUpRight}
                                    />
                                )}
                            </div>
                        </section>

                        {/* =================================================
                            PROJECT LINKS
                        ================================================= */}

                        {(project.githubUrl ||
                            project.liveUrl) && (
                                <div className="mt-4 flex flex-wrap items-center gap-5">
                                    {project.githubUrl && (
                                        <a
                                            href={
                                                project.githubUrl
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group inline-flex items-center gap-2 text-[14px] font-semibold text-white/58 transition-colors duration-300 hover:text-cyan-300"
                                        >
                                            <GitBranch
                                                size={15}
                                                strokeWidth={1.8}
                                            />

                                            <span>
                                                GitHub
                                            </span>

                                            <ArrowUpRight
                                                size={13}
                                                strokeWidth={
                                                    1.8
                                                }
                                                className="opacity-45 transition-transform duration-300 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]"
                                            />
                                        </a>
                                    )}

                                    {project.liveUrl && (
                                        <a
                                            href={
                                                project.liveUrl
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group inline-flex items-center gap-2 text-[14px] font-semibold text-white/58 transition-colors duration-300 hover:text-cyan-300"
                                        >
                                            <ExternalLink
                                                size={15}
                                                strokeWidth={1.8}
                                            />

                                            <span>
                                                Live Demo
                                            </span>

                                            <ArrowUpRight
                                                size={13}
                                                strokeWidth={
                                                    1.8
                                                }
                                                className="opacity-45 transition-transform duration-300 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]"
                                            />
                                        </a>
                                    )}
                                </div>
                            )}

                        {/* =================================================
                            PROJECT META
                        ================================================= */}

                        <div className="mt-5 grid gap-3 sm:grid-cols-3">
                            <ProjectMetaCard
                                icon={CalendarDays}
                                label="Timeline"
                                value={
                                    project.timeline ||
                                    "Project Based"
                                }
                            />

                            <ProjectMetaCard
                                icon={Users}
                                label="Project Type"
                                value={
                                    project.projectType ||
                                    project.category
                                }
                            />

                            <ProjectMetaCard
                                icon={Clock3}
                                label="Status"
                                value={
                                    project.status ||
                                    "Completed"
                                }
                            />
                        </div>

                        {/* =================================================
                            OVERVIEW + APPROACH
                        ================================================= */}

                        <div className="mt-3 grid gap-3 lg:grid-cols-2">
                            <ProjectInfoCard
                                eyebrow="OVERVIEW"
                                title="What we built"
                                description={
                                    project.overview ||
                                    project.description
                                }
                            />

                            <ProjectInfoCard
                                eyebrow="APPROACH"
                                title="How we approached it"
                                description={
                                    project.challenge ||
                                    "The project was designed around the product requirements, user experience and long-term scalability of the business."
                                }
                            />
                        </div>

                        {/* =================================================
                            FEATURES
                        ================================================= */}

                        {project.features?.length > 0 && (
                            <section className="mt-3 rounded-[18px] border border-white/[0.075] bg-[linear-gradient(145deg,rgba(10,35,72,0.80),rgba(3,18,41,0.96))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_15px_35px_rgba(0,0,0,0.18)] sm:p-5">

                                <div className="flex items-center gap-3">
                                    <PremiumIconBadge
                                        icon={Layers3}
                                        size="default"
                                    />

                                    <div>
                                        <p className="text-[7px] font-semibold uppercase tracking-[0.18em] text-cyan-300/55">
                                            PROJECT SCOPE
                                        </p>

                                        <h3 className="mt-1 text-[15px] font-semibold tracking-[-0.03em] text-white">
                                            Key Features
                                        </h3>
                                    </div>
                                </div>

                                <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                                    {project.features.map(
                                        (Feature) => (
                                            <div
                                                key={
                                                    Feature
                                                }
                                                className="rounded-[12px] border border-white/[0.07] bg-[#071B3A]/70 px-3 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]"
                                            >
                                                <div className="flex items-center gap-2.5">
                                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[8px] border border-cyan-300/15 bg-cyan-300/[0.05]">
                                                        <CheckCircle2
                                                            size={
                                                                12
                                                            }
                                                            strokeWidth={
                                                                1.7
                                                            }
                                                            className="text-cyan-300"
                                                        />
                                                    </span>

                                                    <span className="text-[8px] font-medium leading-[1.4] text-white/55">
                                                        {
                                                            Feature
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </section>
                        )}

                        {/* =================================================
                            TECHNOLOGIES
                        ================================================= */}

                        {project.technologies?.length >
                            0 && (
                                <section className="mt-3 rounded-[18px] border border-white/[0.075] bg-[linear-gradient(145deg,rgba(10,35,72,0.80),rgba(3,18,41,0.96))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_15px_35px_rgba(0,0,0,0.18)] sm:p-5">

                                    <div className="flex items-center gap-3">
                                        <PremiumIconBadge
                                            icon={
                                                project.icon ||
                                                ExternalLink
                                            }
                                            size="default"
                                        />

                                        <div>
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300/55">
                                                TECHNOLOGY STACK
                                            </p>

                                            <h3 className="mt-1 text-[18px] font-semibold tracking-[-0.03em] text-white">
                                                Built with
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.technologies.map(
                                            (
                                                Technology,
                                            ) => (
                                                <span
                                                    key={
                                                        Technology
                                                    }
                                                    className="inline-flex items-center gap-2 rounded-[9px] border border-white/[0.08] bg-[linear-gradient(145deg,rgba(13,42,83,0.90),rgba(4,20,43,0.98))] px-2.5 py-1.5 text-[8px] font-medium text-white/52] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                                                >
                                                    <span className="h-1.5 w-1.5 text-sm text-white rounded-full bg-cyan-300/70 shadow-[0_0_7px_rgba(25,211,255,0.55)]" />

                                                    {Technology}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </section>
                            )}

                        {/* =================================================
                            OUTCOME
                        ================================================= */}

                        {project.outcome && (
                            <section className="mt-3 rounded-[18px] border border-cyan-300/[0.11] bg-[linear-gradient(145deg,rgba(8,34,72,0.88),rgba(3,18,42,0.97))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_15px_35px_rgba(0,0,0,0.2)] sm:p-5">
                                <p className="text-[7px] font-semibold uppercase tracking-[0.18em] text-cyan-300/55">
                                    OUTCOME
                                </p>

                                <p className="mt-2 max-w-[820px] text-[10px] leading-[1.8] text-white/45">
                                    {
                                        project.outcome
                                    }
                                </p>
                            </section>
                        )}

                        {/* =================================================
                            BOTTOM CTA
                        ================================================= */}

                        <div className="mt-3 flex flex-col gap-4 rounded-[18px] border border-white/[0.075] bg-[#071A38]/72 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_15px_35px_rgba(0,0,0,0.20)] sm:flex-row sm:items-center sm:justify-between sm:p-5">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25">
                                    WANT SOMETHING SIMILAR?
                                </p>

                                <p className="mt-1 text-[16px] text-white/52">
                                    Let&apos;s build a system around your
                                    business.
                                </p>
                            </div>

                            <PremiumButton
                                label="Start A Conversation"
                                to="/contact"
                                icon={ArrowUpRight}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* =================================================
                SCROLLBAR
            ================================================= */}

            <style>
                {`
                    .project-modal-scroll {
                        scrollbar-width: thin;
                        scrollbar-color: rgba(25, 211, 255, 0.32) transparent;
                    }

                    .project-modal-scroll::-webkit-scrollbar {
                        width: 7px;
                    }

                    .project-modal-scroll::-webkit-scrollbar-track {
                        background: transparent;
                    }

                    .project-modal-scroll::-webkit-scrollbar-thumb {
                        background: rgba(25, 211, 255, 0.28);
                        border-radius: 999px;
                    }

                    .project-modal-scroll::-webkit-scrollbar-thumb:hover {
                        background: rgba(25, 211, 255, 0.45);
                    }
                `}
            </style>
        </div>
    );
};

/* =========================================================
   PROJECT META CARD
========================================================= */

const ProjectMetaCard = ({
    icon: Icon,
    label,
    value,
}) => {
    return (
        <div className="rounded-[15px] border border-white/[0.07] bg-[linear-gradient(145deg,rgba(10,35,72,0.76),rgba(3,18,41,0.94))] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_10px_25px_rgba(0,0,0,0.15)]">
            <div className="flex items-center gap-3">
                <PremiumIconBadge
                    icon={Icon}
                    size="default"
                />

                <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/22">
                        {label}
                    </p>

                    <p className="mt-1 truncate text-[14px] font-medium text-white/62">
                        {value}
                    </p>
                </div>
            </div>
        </div>
    );
};

/* =========================================================
   PROJECT INFO CARD
========================================================= */

const ProjectInfoCard = ({
    eyebrow,
    title,
    description,
}) => {
    return (
        <section className="rounded-[18px] border border-white/[0.075] bg-[linear-gradient(145deg,rgba(10,35,72,0.80),rgba(3,18,41,0.95))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_15px_35px_rgba(0,0,0,0.17)] sm:p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300/55">
                {eyebrow}
            </p>

            <h3 className="mt-2 text-[18px] font-semibold tracking-[-0.03em] text-white">
                {title}
            </h3>

            <p className="mt-3 text-[16px] leading-[1.8] text-white/40">
                {description}
            </p>
        </section>
    );
};

export default ProjectModal;