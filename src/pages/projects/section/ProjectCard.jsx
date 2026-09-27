import {
    ArrowUpRight,
    ExternalLink,
} from "lucide-react";
import {
    useMemo,
    useState,
} from "react";
import { createPortal } from "react-dom";

import PremiumIconBadge from "../../../components/UI/PremiumIconBadge";
import ProjectModal from "./ProjectModal";

/* =========================================================
   PROJECT CARD
   Reusable premium 3D component
========================================================= */

const ProjectCard = ({
    project,
    title,
    category,
    description,
    image,
    technologies = [],
    projectUrl = "#",
    linkLabel = "View Project",
}) => {
    const [IsModalOpen, SetIsModalOpen] =
        useState(false);

    /*
     * Support both:
     * 1. project object
     * 2. individual props
     *
     * This keeps the component reusable.
     */

    const ProjectData = useMemo(() => {
        if (project) {
            return project;
        }

        return {
            title,
            category,
            description,
            image,
            technologies,
            projectUrl,
        };
    }, [
        project,
        title,
        category,
        description,
        image,
        technologies,
        projectUrl,
    ]);

    const HandleOpenModal = () => {
        SetIsModalOpen(true);
    };

    const HandleCloseModal = () => {
        SetIsModalOpen(false);
    };

    return (
        <>
            {/* =================================================
                PROJECT CARD
            ================================================= */}

            <article className="group relative w-full [perspective:1200px]">
                {/* =================================================
                    OUTER 3D DEPTH
                ================================================= */}

                <div className="pointer-events-none absolute inset-x-3 bottom-[-5px] top-3 rounded-[16px] bg-[#020B1C] opacity-80 shadow-[0_18px_45px_rgba(0,0,0,0.30)]" />

                <div className="relative transform-gpu overflow-hidden rounded-[16px] border border-cyan-300/[0.16] bg-[linear-gradient(145deg,rgba(10,37,76,0.98),rgba(2,14,33,0.99))] shadow-[0_22px_55px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:[transform:perspective(1200px)_rotateX(1deg)_rotateY(-1deg)] hover:border-cyan-300/[0.30] hover:shadow-[0_35px_80px_rgba(0,0,0,0.42),0_0_34px_rgba(25,211,255,0.06),inset_0_1px_0_rgba(255,255,255,0.09)]">
                    {/* =================================================
                        CARD ATMOSPHERE
                    ================================================= */}

                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_8%,rgba(25,211,255,0.10),transparent_28%),radial-gradient(circle_at_8%_92%,rgba(124,60,255,0.07),transparent_30%)] opacity-80" />

                    <div className="pointer-events-none absolute left-[12%] right-[12%] top-0 z-30 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {/* =================================================
                        IMAGE FRAME
                    ================================================= */}

                    <div className="relative m-2 overflow-hidden rounded-[11px] border border-white/[0.08] bg-[#04152E] p-[1px] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_22px_rgba(0,0,0,0.22)]">
                        <div className="relative h-[158px] overflow-hidden rounded-[10px]">
                            <img
                                src={ProjectData.image}
                                alt={ProjectData.title}
                                loading="lazy"
                                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                            />

                            {/* Dark image depth */}
                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,15,35,0.04)_18%,rgba(3,15,35,0.18)_55%,rgba(3,15,35,0.82)_100%)]" />

                            {/* Cyan edge light */}
                            <div className="pointer-events-none absolute inset-0 rounded-[10px] ring-1 ring-inset ring-cyan-300/[0.08]" />

                            {/* =================================================
                                CATEGORY
                            ================================================= */}

                            <div className="absolute bottom-3 left-3 z-20 max-w-[calc(100%-70px)]">
                                <span className="inline-flex max-w-full items-center gap-1.5 overflow-hidden rounded-full border border-cyan-200/20 bg-[#061633]/75 px-2.5 py-1.5 text-[7px] font-semibold uppercase tracking-[0.12em] text-cyan-100/85 shadow-[0_8px_22px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-xl">
                                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(25,211,255,0.8)]" />

                                    <span className="truncate">
                                        {ProjectData.category}
                                    </span>
                                </span>
                            </div>

                            {/* =================================================
                                PREMIUM TOP-RIGHT ACTION
                            ================================================= */}

                            <div className="absolute right-3 top-3 z-20">
                                <button
                                    type="button"
                                    onClick={HandleOpenModal}
                                    aria-label={`Open ${ProjectData.title} details`}
                                    className="rounded-[12px] border border-white/[0.12] bg-[#061633]/55 p-1 shadow-[0_10px_24px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-xl transition-all duration-500 hover:border-cyan-300/25 hover:bg-[#071A39]/72"
                                >
                                    <PremiumIconBadge
                                        icon={ArrowUpRight}
                                        size="default"
                                    />
                                </button>
                            </div>

                            <div className="pointer-events-none absolute bottom-[-30px] right-[-20px] h-[90px] w-[130px] rounded-full bg-cyan-300/[0.08] blur-[35px]" />
                        </div>
                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================= */}

                    <div className="relative px-4 pb-4 pt-2">
                        {/* =================================================
                            TITLE
                            Laptop/Desktop: one line
                        ================================================= */}

                        <h3 className="truncate text-[17px] font-semibold leading-[1.08] tracking-[-0.04em] text-white">
                            {ProjectData.title}
                        </h3>

                        {/* =================================================
                            DESCRIPTION
                            Laptop/Desktop: two lines
                        ================================================= */}

                        <p className="mt-2 line-clamp-2 min-h-[33px] text-[10px] leading-[1.65] text-white/42">
                            {ProjectData.description}
                        </p>

                        {/* =================================================
                            TECHNOLOGY CHIPS
                            Laptop/Desktop: one row
                        ================================================= */}

                        {ProjectData.technologies?.length >
                            0 && (
                                <div className="mt-4 flex flex-nowrap gap-1.5 overflow-hidden">
                                    {ProjectData.technologies.map(
                                        (
                                            Technology,
                                        ) => (
                                            <span
                                                key={
                                                    Technology
                                                }
                                                className="group/tech relative inline-flex min-w-fit shrink-0 items-center gap-1.5 overflow-hidden rounded-[9px] border border-white/[0.075] bg-[linear-gradient(145deg,rgba(13,42,83,0.88),rgba(4,20,43,0.96))] px-2.5 py-1.5 text-[7px] font-medium text-white/48 shadow-[inset_0_1px_0_rgba(255,255,255,0.055),0_5px_12px_rgba(0,0,0,0.18)] transition-all duration-300 hover:border-cyan-300/20 hover:text-white/72"
                                            >
                                                <span className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-[4px] border border-cyan-300/15 bg-cyan-300/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                                                    <span className="h-1 w-1 rounded-full bg-cyan-300/65 shadow-[0_0_5px_rgba(25,211,255,0.55)]" />
                                                </span>

                                                <span className="relative z-10 whitespace-nowrap">
                                                    {
                                                        Technology
                                                    }
                                                </span>

                                                <span className="pointer-events-none absolute left-[15%] right-[15%] top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                                            </span>
                                        ),
                                    )}
                                </div>
                            )}

                        {/* =================================================
                            BOTTOM PROJECT ACTION
                        ================================================= */}

                        <div className="mt-4 overflow-hidden rounded-[11px] border border-white/[0.07] bg-[#061A37]/65 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]">
                            <div className="flex items-center justify-between px-3 py-2.5">
                                <span className="text-[7px] font-semibold uppercase tracking-[0.16em] text-white/20">
                                    PROJECT
                                </span>

                                <button
                                    type="button"
                                    onClick={
                                        HandleOpenModal
                                    }
                                    className="group/link inline-flex items-center gap-1.5 text-[9px] font-semibold text-cyan-300 transition-colors duration-300 hover:text-cyan-100"
                                >
                                    <span>
                                        {
                                            linkLabel
                                        }
                                    </span>

                                    <ExternalLink
                                        size={
                                            10
                                        }
                                        strokeWidth={
                                            1.7
                                        }
                                        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                                    />
                                </button>
                            </div>

                            <div className="h-px bg-gradient-to-r from-cyan-300/0 via-cyan-300/25 to-violet-400/0 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                        </div>
                    </div>
                </div>
            </article>

            {/* =========================================================
                PROJECT MODAL
                Portal keeps modal outside transformed card
            ========================================================= */}

            {typeof document !== "undefined" &&
                IsModalOpen &&
                createPortal(
                    <ProjectModal
                        project={
                            ProjectData
                        }
                        isOpen={
                            IsModalOpen
                        }
                        onClose={
                            HandleCloseModal
                        }
                    />,
                    document.body,
                )}
        </>
    );
};

export default ProjectCard;