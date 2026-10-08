import {
    Bot,
    LayoutGrid,
    Monitor,
    PenTool,
    PlugZap,
    ShoppingBag,
    Smartphone,
} from "lucide-react";
import { useMemo, useState } from "react";

import ProjectCard from "./ProjectCard";

/* =========================================================
   PROJECT FILTERS
========================================================= */

const ProjectFilters = [
    {
        id: "all",
        label: "All",
        icon: LayoutGrid,
    },
    {
        id: "web",
        label: "Web App",
        icon: Monitor,
    },
    {
        id: "mobile",
        label: "Mobile Apps",
        icon: Smartphone,
    },
    {
        id: "uiux",
        label: "UI/UX Design",
        icon: PenTool,
    },
    {
        id: "ai",
        label: "AI & Automation",
        icon: Bot,
    },
    {
        id: "ecommerce",
        label: "E-Commerce",
        icon: ShoppingBag,
    },
    {
        id: "api",
        label: "API Integration",
        icon: PlugZap,
    },
];

/* =========================================================
   PROJECT DATA
========================================================= */

const ProjectsData = [
    {
        id: "nova-tech-dashboard",
        filter: "web",
        category: "Web Application",
        title: "NovaTech Dashboard",
        description:
            "A powerful SaaS dashboard for managing teams, projects and analytics in real-time.",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
        ],
        projectUrl:
            "/projects/nova-tech-dashboard",
    },

    {
        id: "fitlife-mobile-app",
        filter: "mobile",
        category: "Mobile Application",
        title: "FitLife Mobile App",
        description:
            "A modern app with personalized plans, progress tracking and a focused mobile experience.",
        image:
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=90",
        technologies: [
            "React Native",
            "Node.js",
            "MongoDB",
        ],
        projectUrl:
            "/projects/fitlife-mobile",
    },

    {
        id: "travelgo-website",
        filter: "uiux",
        category: "UI/UX Design",
        title: "TravelGo Website",
        description:
            "A modern travel platform with immersive visuals, thoughtful UX and responsive experiences.",
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=90",
        technologies: [
            "React",
            "Figma",
            "Tailwind CSS",
        ],
        projectUrl:
            "/projects/travelgo",
    },

    {
        id: "smartsupport-ai",
        filter: "ai",
        category: "AI Automation",
        title: "SmartSupport AI Chatbot",
        description:
            "An AI-powered support assistant that handles customer queries and automates repetitive workflows.",
        image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=90",
        technologies: [
            "OpenAI",
            "Node.js",
            "React",
        ],
        projectUrl:
            "/projects/smartsupport-ai",
    },

    {
        id: "shopease-ecommerce",
        filter: "ecommerce",
        category: "E-Commerce",
        title: "ShopEase E-Commerce",
        description:
            "A full-featured commerce platform designed around fast browsing, smooth checkout and product discovery.",
        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=90",
        technologies: [
            "React",
            "Node.js",
            "MongoDB",
        ],
        projectUrl:
            "/projects/shopease",
    },

    {
        id: "connectpro-integration",
        filter: "api",
        category: "API Integration",
        title: "ConnectPro Integration",
        description:
            "A connected integration platform built to synchronize business systems, APIs and operational data.",
        image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=90",
        technologies: [
            "Node.js",
            "REST API",
            "Express",
        ],
        projectUrl:
            "/projects/connectpro",
    },
];

/* =========================================================
   PREMIUM FILTER BUTTON
========================================================= */

const ProjectFilterButton = ({
    filter,
    isActive,
    onClick,
}) => {
    const Icon = filter.icon;

    return (
        <button
            type="button"
            onClick={onClick}
            className={[
                "group/filter relative shrink-0 overflow-hidden rounded-[13px]",
                "transition-all duration-300",
                "active:translate-y-[1px]",
                isActive
                    ? "translate-y-[-1px]"
                    : "hover:-translate-y-[1px]",
            ].join(" ")}
        >
            {/* Bottom 3D depth */}
            <span
                className={[
                    "pointer-events-none absolute inset-x-[2px] bottom-0 h-[3px] rounded-b-[11px]",
                    isActive
                        ? "bg-[#063FA1]"
                        : "bg-[#020C1D]",
                ].join(" ")}
            />

            {/* Main surface */}
            <span
                className={[
                    "relative flex min-h-[34px] items-center gap-2 rounded-[13px] border px-3 py-1.5",
                    "shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_7px_18px_rgba(0,0,0,0.22)]",
                    "transition-all duration-300",
                    isActive
                        ? "border-cyan-200/25 bg-[linear-gradient(145deg,#16A8FF_0%,#1677FF_52%,#684BFF_100%)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_10px_24px_rgba(22,119,255,0.28),0_0_20px_rgba(25,211,255,0.08)]"
                        : "border-white/[0.09] bg-[linear-gradient(145deg,rgba(10,34,72,0.96),rgba(3,17,39,0.98))] text-white/42 hover:border-cyan-300/20 hover:text-white/70 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_10px_24px_rgba(0,0,0,0.28),0_0_18px_rgba(25,211,255,0.05)]",
                ].join(" ")}
            >
                {/* Top shine */}
                <span className="pointer-events-none absolute left-[12%] right-[12%] top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                {/* Icon core */}
                <span
                    className={[
                        "relative flex h-5 w-5 items-center justify-center rounded-[7px] border",
                        "shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]",
                        isActive
                            ? "border-white/20 bg-white/15 text-white"
                            : "border-white/[0.07] bg-[#081D3D] text-cyan-300/65 group-hover/filter:text-cyan-300",
                    ].join(" ")}
                >
                    <Icon
                        size={10}
                        strokeWidth={1.7}
                    />
                </span>

                {/* Label */}
                <span className="relative text-[14px] font-semibold uppercase tracking-[0.1em]">
                    {filter.label}
                </span>

                {/* Active glow */}
                {isActive && (
                    <span className="pointer-events-none absolute -right-5 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-white/15 blur-[20px]" />
                )}
            </span>
        </button>
    );
};

/* =========================================================
   PROJECT SECTION
========================================================= */

const ProjectsSection = () => {
    const [ActiveFilter, SetActiveFilter] =
        useState("all");

    const FilteredProjects = useMemo(() => {
        if (ActiveFilter === "all") {
            return ProjectsData;
        }

        return ProjectsData.filter(
            (Project) =>
                Project.filter ===
                ActiveFilter,
        );
    }, [ActiveFilter]);

    return (
        <section
            id="projects"
            className="relative w-full overflow-hidden bg-[#061633] py-8 text-white sm:py-10 lg:py-12"
        >
            {/* =================================================
                BACKGROUND
            ================================================= */}

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-8%] top-[4%] h-[300px] w-[300px] rounded-full bg-cyan-400/[0.022] blur-[120px]" />

                <div className="absolute bottom-[-8%] right-[-6%] h-[350px] w-[350px] rounded-full bg-violet-500/[0.028] blur-[130px]" />

                <div className="absolute left-[44%] top-[35%] h-[220px] w-[220px] rounded-full bg-blue-500/[0.018] blur-[100px]" />
            </div>

            <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-6 lg:px-8">
                {/* =================================================
                    FILTER BAR
                ================================================= */}

                <div className="overflow-x-auto pb-1 scrollbar-none">
                    <div className="flex flex-wrap items-center justify-start gap-2 lg:justify-start">
                        {ProjectFilters.map(
                            (Filter) => (
                                <ProjectFilterButton
                                    key={Filter.id}
                                    filter={Filter}
                                    isActive={
                                        ActiveFilter ===
                                        Filter.id
                                    }
                                    onClick={() =>
                                        SetActiveFilter(
                                            Filter.id,
                                        )
                                    }
                                />
                            ),
                        )}
                    </div>
                </div>

                {/* =================================================
                    PROJECT GRID
                ================================================= */}

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {FilteredProjects.map(
                        (Project) => (
                            <ProjectCard
                                key={Project.id}
                                title={Project.title}
                                category={
                                    Project.category
                                }
                                description={
                                    Project.description
                                }
                                image={
                                    Project.image
                                }
                                technologies={
                                    Project.technologies
                                }
                                projectUrl={
                                    Project.projectUrl
                                }
                                linkLabel="View Project"
                            />
                        ),
                    )}
                </div>

                {/* =================================================
                    EMPTY STATE
                ================================================= */}

                {FilteredProjects.length === 0 && (
                    <div className="flex min-h-[220px] items-center justify-center rounded-[24px] border border-white/[0.07] bg-white/[0.015]">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-white/25">
                            No projects in this category yet.
                        </p>
                    </div>
                )}

                {/* =================================================
                    FOOTER
                ================================================= */}

                <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-3">
                    <span className="text-[7px] font-semibold uppercase tracking-[0.2em] text-white/20">
                        SELECTED WORK
                    </span>

                    <span className="font-mono text-[7px] tracking-[0.14em] text-cyan-300/40">
                        {String(
                            FilteredProjects.length,
                        ).padStart(2, "0")}{" "}
                        PROJECTS
                    </span>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;