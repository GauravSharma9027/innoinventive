import { useState } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";

import Logo from "../../../assets/Logo.png";
import HeroActionButton from "../../../components/UI/HeroActionButton";
import PremiumButton from "../../../components/UI/PremiumButton";
import AutomationCard from "../../../components/cards/AutomationCard";
import PremiumOrbitSystem from "../../../components/UI/PremiumOrbitSystem";

import {
    HeroAutomationCards,
    HeroFloatingIcons,
} from "../data/heroData";

const FloatingIcon = ({ icon: Icon, position }) => {
    const PositionClasses = {
        "top-left": "left-[30%] top-[2%]",
        "top-right": "right-[30%] top-[3%]",
    };

    return (
        <div
            className={`absolute ${PositionClasses[position]} z-30`}
        >
            <div className="relative">
                <div className="absolute inset-[3px] translate-y-[4px] rounded-2xl bg-[#020B20] shadow-[0_7px_16px_rgba(0,0,0,0.45)]" />

                <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-[#12366B] via-[#0A2148] to-[#061633] text-cyan-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-2px_0_rgba(0,0,0,0.25),0_8px_25px_rgba(22,119,255,0.18)]">
                    <span className="pointer-events-none absolute inset-x-2 top-[1px] h-px rounded-full bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                    <span className="pointer-events-none absolute -left-[45%] top-[-20%] h-[160%] w-[35%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

                    <span className="pointer-events-none absolute inset-2 rounded-xl bg-cyan-300/[0.03] shadow-[inset_0_0_18px_rgba(25,211,255,0.08)]" />

                    <Icon
                        size={18}
                        strokeWidth={1.8}
                        className="relative z-10 drop-shadow-[0_0_8px_rgba(25,211,255,0.45)]"
                    />
                </div>

                <span className="absolute bottom-[1px] left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-70 blur-[1px]" />
            </div>
        </div>
    );
};

const HeroVisual = () => {
    const [ActiveCardId, SetActiveCardId] =
        useState(null);

    const [PendingCardId, SetPendingCardId] =
        useState(null);

    const CardPositionClasses = {
        "left-top":
            "left-[0%] top-[5%]",
        "right-top":
            "right-[0%] top-[5%]",
        "left-middle":
            "left-[0%] top-[57%]",
        "right-middle":
            "right-[0%] top-[57%]",
    };

    const HandleCardOpen = (CardId) => {
        if (ActiveCardId === null) {
            SetActiveCardId(CardId);
            return;
        }

        if (ActiveCardId === CardId) {
            return;
        }

        SetPendingCardId(CardId);
        SetActiveCardId(null);
    };

    const HandleCardClose = (CardId) => {
        if (ActiveCardId !== CardId) {
            return;
        }

        if (PendingCardId) {
            const NextCardId = PendingCardId;

            SetPendingCardId(null);
            SetActiveCardId(NextCardId);

            return;
        }

        SetActiveCardId(null);
    };

    return (
        <div className="relative h-[650px] w-full max-w-[420px] overflow-visible sm:left-1/2 sm:-translate-x-1/2 sm:h-[420px] sm:min-w-[100vw] sm:max-w-[100vw] lg:left-auto lg:-translate-x-0 lg:h-[min(500px,calc(100vh-190px))] lg:max-w-[680px] lg:min-w-[680px] lg:justify-self-center">

            {/* =================================================
                PREMIUM GALAXY ORBIT SYSTEM
                Tablet + Mobile Hidden
            ================================================= */}
            <div className="hidden sm:block">
                <PremiumOrbitSystem />
            </div>

            {/* =================================================
                CENTRAL LOGO GLOW
            ================================================= */}
            <div className="absolute left-1/2 top-1/2 z-0 hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/40 blur-3xl animate-pulse sm:block" />

            {/* =================================================
                CENTRAL LOGO
                Mobile Hidden
                Tablet + Laptop Visible
            ================================================= */}
            <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 sm:block">
                <div className="relative flex h-28 w-28 items-center justify-center lg:h-36 lg:w-36">
                    <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl animate-pulse" />

                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-cyan-300/20 bg-[#061633]/75 shadow-[0_0_65px_rgba(22,119,255,0.2)] backdrop-blur-md lg:h-36 lg:w-36">
                        <img
                            src={Logo}
                            alt="InnoInventive"
                            className="relative w-[90px] object-contain lg:w-[118px]"
                        />
                    </div>
                </div>
            </div>

            {/* =================================================
                DESKTOP FLOATING ICONS
                Existing Desktop Position Preserved
            ================================================= */}
            <div className="hidden sm:block">
                {HeroFloatingIcons.map(
                    (FloatingIconData) => (
                        <FloatingIcon
                            key={FloatingIconData.id}
                            {...FloatingIconData}
                        />
                    ),
                )}
            </div>

            {/* =================================================
                TABLET + MOBILE CARDS
                Mobile: 1 Card / Row
                Tablet: 2 Cards / Row
            ================================================= */}
            <div className="absolute inset-x-0 top-0 grid grid-cols-2 justify-items-center gap-y-5 sm:mt-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:hidden">

                {HeroAutomationCards.map(
                    (CardData, CardIndex) => {
                        const IsAnotherCardActive =
                            ActiveCardId !== null &&
                            ActiveCardId !==
                            CardData.id;

                        const IsPendingCard =
                            PendingCardId ===
                            CardData.id;

                        return (
                            <div
                                key={CardData.id}
                                className={`relative transition-all duration-500 ${IsAnotherCardActive &&
                                        !IsPendingCard
                                        ? "scale-[0.97] opacity-30 blur-[1px]"
                                        : "scale-100 opacity-100"
                                    }`}
                            >
                                <AutomationCard
                                    card={CardData}
                                    typingDelay={
                                        CardIndex * 350
                                    }
                                    isActive={
                                        ActiveCardId ===
                                        CardData.id
                                    }
                                    onOpen={
                                        HandleCardOpen
                                    }
                                    onClose={
                                        HandleCardClose
                                    }
                                />
                            </div>
                        );
                    },
                )}
            </div>

            {/* =================================================
                DESKTOP AUTOMATION CARDS
                Existing Desktop Positions Preserved
            ================================================= */}
            <div className="hidden lg:block">
                {HeroAutomationCards.map(
                    (CardData, CardIndex) => {
                        const IsAnotherCardActive =
                            ActiveCardId !== null &&
                            ActiveCardId !==
                            CardData.id;

                        const IsPendingCard =
                            PendingCardId ===
                            CardData.id;

                        return (
                            <div
                                key={CardData.id}
                                className={`absolute ${CardPositionClasses[CardData.position]} transition-all duration-500 ${IsAnotherCardActive &&
                                        !IsPendingCard
                                        ? "scale-[0.97] opacity-30 blur-[1px]"
                                        : "scale-100 opacity-100"
                                    }`}
                            >
                                <AutomationCard
                                    card={CardData}
                                    typingDelay={
                                        CardIndex * 350
                                    }
                                    isActive={
                                        ActiveCardId ===
                                        CardData.id
                                    }
                                    onOpen={
                                        HandleCardOpen
                                    }
                                    onClose={
                                        HandleCardClose
                                    }
                                />
                            </div>
                        );
                    },
                )}
            </div>

            {/* =================================================
                MOVING DATA NODES
                Tablet + Mobile Hidden
            ================================================= */}
            <div className="hidden lg:block">
                <span className="absolute left-[20%] top-[30%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(25,211,255,0.9)] animate-ping" />

                <span className="absolute left-[32%] top-[43%] h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(22,119,255,0.9)] animate-pulse" />

                <span className="absolute right-[20%] top-[34%] h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_16px_rgba(124,60,255,0.9)] animate-ping" />

                <span className="absolute right-[30%] bottom-[32%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(25,211,255,0.9)] animate-pulse" />

                <span className="absolute left-[25%] bottom-[28%] h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(22,119,255,0.9)] animate-pulse" />
            </div>

            {/* =================================================
                HOLOGRAPHIC PLATFORM
                Tablet + Mobile Hidden
            ================================================= */}
            <div className="hidden lg:block">
                <div className="absolute bottom-[9%] left-1/2 z-10 h-[82px] w-[275px] -translate-x-1/2 rounded-[50%] border border-cyan-300/40 bg-cyan-400/5 shadow-[0_0_70px_rgba(25,211,255,0.12)]">
                    <div className="absolute left-1/2 top-1/2 h-[52px] w-[198px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-blue-400/30 animate-pulse" />

                    <div className="absolute left-1/2 top-1/2 h-[28px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-violet-400/30" />
                </div>

                <div className="absolute bottom-[15%] left-1/2 z-0 h-8 w-[225px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl animate-pulse" />
            </div>
        </div>
    );
};

const Hero = () => {
    return (
        <section className="relative m-0 h-auto min-h-[calc(100svh-76px)] max-h-[80vh] sm:min-h-[70vh] sm:max-h-[80vh] overflow-hidden bg-[#061633] px-4 py-10 text-white sm:px-10 sm:py-10 lg:h-[80vh] lg:max-h-[80vh] lg:px-6 lg:py-0">

            {/* Hero Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(22,119,255,0.12),transparent_32%),radial-gradient(circle_at_90%_20%,rgba(124,60,255,0.10),transparent_24%)]" />

            {/* Bottom Atmosphere */}
            <div className="hidden lg:block absolute inset-x-0 bottom-0 h-[220px] bg-[radial-gradient(ellipse_at_center,rgba(22,119,255,0.10),transparent_65%)]" />

            {/* Locked Global Container */}
            <div className="relative mx-0 flex h-full max-w-[1400px] items-center">

                <div className="grid w-full min-h-0 grid-cols-1 items-center gap-8 sm:gap-10 md:gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">

                    {/* Left Content */}
                    <div className="relative z-20 max-w-screen">

                        {/* Eyebrow */}
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-[#0A1F4A]/60 px-4 py-2 text-xs font-medium text-cyan-300 backdrop-blur-md">
                            <Sparkles size={14} />
                            AI-Powered Automation Solutions
                        </div>

                        {/* Heading */}
                        <h1 className="max-w-[600px] text-5xl lg:text-[clamp(42px,4.5vw,72px)] font-bold leading-[1.02] tracking-[-0.04em]">
                            We{" "}
                            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                                Automate
                            </span>{" "}
                            Businesses.
                        </h1>

                        {/* Description */}
                        <p className="mt-5 max-w-[500px] text-[clamp(15px,1.2vw,18px)] leading-7 text-blue-100">
                            Smarter systems. Higher productivity.
                            <br />
                            Real business growth.
                        </p>

                        {/* Actions */}
                        <div className="mt-7 flex flex-col items-start gap-5 flex-row sm:items-center sm:gap-4">

                            <PremiumButton
                                to="/contact"
                                label="Contact Us"
                                icon={ArrowRight}
                            />

                            <HeroActionButton
                                label="Watch Demo"
                                icon={Play}
                                variant="secondary"
                            />

                        </div>
                    </div>

                    {/* Right Visual */}
                    <HeroVisual />

                </div>
            </div>
        </section>
    );
};

export default Hero;