import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Play, Sparkles, X } from "lucide-react";

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

const IgnoreCardClose = () => {};

const HeroVisual = () => {
    const [ActiveCardId, SetActiveCardId] =
        useState(null);

    // Prevent the card underneath the pointer from reopening immediately
    // when the backdrop is dismissed above it.
    const SuppressHoverUntilPointerLeavesCardsRef = useRef(false);
    const ActiveCardData = HeroAutomationCards.find(
        (CardData) => CardData.id === ActiveCardId,
    );
    const ActiveCardIndex = HeroAutomationCards.findIndex(
        (CardData) => CardData.id === ActiveCardId,
    );
    const ActiveCardIcon = ActiveCardData?.icon;

    // Keep the page stationary while a card is expanded. Without this lock,
    // the document can scroll behind the expanded card; when the card closes,
    // the hero appears to jump back into place.
    const IsCardModalOpen = ActiveCardId !== null;

    useEffect(() => {
        if (!IsCardModalOpen) {
            return undefined;
        }

        const RootElement = document.documentElement;
        const BodyElement = document.body;
        const ScrollY = window.scrollY;

        const PreviousRootOverflow = RootElement.style.overflow;
        const PreviousBodyOverflow = BodyElement.style.overflow;
        const PreviousRootOverscrollBehavior =
            RootElement.style.overscrollBehavior;
        const PreviousBodyPaddingRight = BodyElement.style.paddingRight;

        // Compensate for the removed scrollbar so the page does not shift
        // horizontally when the scroll lock is enabled.
        const ScrollbarWidth =
            window.innerWidth - RootElement.clientWidth;

        if (ScrollbarWidth > 0) {
            const CurrentBodyPaddingRight = Number.parseFloat(
                window.getComputedStyle(BodyElement).paddingRight,
            ) || 0;

            BodyElement.style.paddingRight =
                `${CurrentBodyPaddingRight + ScrollbarWidth}px`;
        }

        RootElement.style.overflow = "hidden";
        BodyElement.style.overflow = "hidden";
        RootElement.style.overscrollBehavior = "none";

        // Explicitly block wheel/touch scrolling while the expanded card is
        // active. The overflow lock above also covers scrollbar/key scrolling.
        const PreventPageScroll = (Event) => {
            Event.preventDefault();
        };

        const PreventKeyboardScroll = (Event) => {
            const ScrollKeys = [
                "ArrowUp",
                "ArrowDown",
                "PageUp",
                "PageDown",
                "Home",
                "End",
                " ",
            ];

            if (!ScrollKeys.includes(Event.key)) {
                return;
            }

            const Target = Event.target;
            const IsEditableTarget =
                Target instanceof HTMLElement &&
                (Target.isContentEditable ||
                    ["INPUT", "TEXTAREA", "SELECT"].includes(
                        Target.tagName,
                    ));

            if (!IsEditableTarget) {
                Event.preventDefault();
            }
        };

        window.addEventListener("wheel", PreventPageScroll, {
            passive: false,
        });
        window.addEventListener("touchmove", PreventPageScroll, {
            passive: false,
        });
        window.addEventListener("keydown", PreventKeyboardScroll, {
            passive: false,
        });

        return () => {
            window.removeEventListener("wheel", PreventPageScroll);
            window.removeEventListener("touchmove", PreventPageScroll);
            window.removeEventListener("keydown", PreventKeyboardScroll);

            RootElement.style.overflow = PreviousRootOverflow;
            BodyElement.style.overflow = PreviousBodyOverflow;
            RootElement.style.overscrollBehavior =
                PreviousRootOverscrollBehavior;
            BodyElement.style.paddingRight = PreviousBodyPaddingRight;

            // Guard against browser-specific scroll movement while the modal
            // was active, restoring the exact page position on close.
            window.scrollTo(0, ScrollY);
        };
    }, [IsCardModalOpen]);

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

    // Hover is only the trigger to open the modal. Hovering out does not
    // close it, and background cards cannot replace an already-open modal.
    const HandleCardOpen = (CardId) => {
        if (
            ActiveCardId !== null ||
            SuppressHoverUntilPointerLeavesCardsRef.current
        ) {
            return;
        }

        SetActiveCardId(CardId);
    };

    const HandleModalClose = (Event) => {
        if (ActiveCardId === null) {
            return;
        }

        // Only suppress a hover restart if the dismissal click happened over
        // one of the compact cards underneath the backdrop.
        const ClickX = Event?.clientX;
        const ClickY = Event?.clientY;
        const DismissedOverBackgroundCard =
            Number.isFinite(ClickX) && Number.isFinite(ClickY) &&
            Array.from(
                document.querySelectorAll("[data-hero-automation-card]"),
            ).some((CardElement) => {
                const Bounds = CardElement.getBoundingClientRect();
                return (
                    Bounds.width > 0 &&
                    Bounds.height > 0 &&
                    ClickX >= Bounds.left &&
                    ClickX <= Bounds.right &&
                    ClickY >= Bounds.top &&
                    ClickY <= Bounds.bottom
                );
            });

        SetActiveCardId(null);
        SuppressHoverUntilPointerLeavesCardsRef.current =
            DismissedOverBackgroundCard;

        if (!DismissedOverBackgroundCard) {
            return;
        }

        const ClearHoverSuppressionAfterLeavingCards = (PointerEvent) => {
            const ElementUnderPointer = document.elementFromPoint(
                PointerEvent.clientX,
                PointerEvent.clientY,
            );

            if (
                ElementUnderPointer?.closest(
                    "[data-hero-automation-card]",
                )
            ) {
                return;
            }

            SuppressHoverUntilPointerLeavesCardsRef.current = false;
            window.removeEventListener(
                "pointermove",
                ClearHoverSuppressionAfterLeavingCards,
            );
        };

        window.addEventListener(
            "pointermove",
            ClearHoverSuppressionAfterLeavingCards,
        );
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
                            ActiveCardId !== CardData.id;
                        const IsCurrentCardInModal =
                            ActiveCardId === CardData.id;

                        return (
                            <div
                                key={CardData.id}
                                data-hero-automation-card
                                className={`relative transition-all duration-500 ${IsCurrentCardInModal
                                        ? "scale-100 opacity-0"
                                        : IsAnotherCardActive
                                            ? "scale-[0.97] opacity-30 blur-[1px]"
                                            : "scale-100 opacity-100"
                                    } ${IsCardModalOpen ? "pointer-events-none" : ""}`}
                            >
                                <AutomationCard
                                    card={CardData}
                                    typingDelay={CardIndex * 350}
                                    isActive={false}
                                    onOpen={HandleCardOpen}
                                    onClose={IgnoreCardClose}
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
                            ActiveCardId !== CardData.id;
                        const IsCurrentCardInModal =
                            ActiveCardId === CardData.id;

                        return (
                            <div
                                key={CardData.id}
                                data-hero-automation-card
                                className={`absolute ${CardPositionClasses[CardData.position]} transition-all duration-500 ${IsCurrentCardInModal
                                        ? "scale-100 opacity-0"
                                        : IsAnotherCardActive
                                            ? "scale-[0.97] opacity-30 blur-[1px]"
                                            : "scale-100 opacity-100"
                                    } ${IsCardModalOpen ? "pointer-events-none" : ""}`}
                            >
                                <AutomationCard
                                    card={CardData}
                                    typingDelay={CardIndex * 350}
                                    isActive={false}
                                    onOpen={HandleCardOpen}
                                    onClose={IgnoreCardClose}
                                />
                            </div>
                        );
                    },
                )}
            </div>

            {/* =================================================
                FULL-SCREEN AUTOMATION CARD MODAL
                Independent, centered markup avoids conflicting with the
                AutomationCard component's own hover/transform presentation.
            ================================================= */}
            {IsCardModalOpen && ActiveCardData && createPortal(
                <div
                    className="fixed inset-0 z-[99999] isolate"
                    role="presentation"
                >
                    {/* Full-screen backdrop: only outside clicks close the modal. */}
                    <button
                        type="button"
                        aria-label="Close automation card modal"
                        onClick={HandleModalClose}
                        className="absolute inset-0 z-0 h-full w-full cursor-default border-0 bg-[#020817]/80 p-0 backdrop-blur-[6px] transition-opacity duration-200"
                    />

                    {/* The modal panel is independent from the card grid and centered in the viewport. */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center p-4 sm:p-6">
                        <div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="hero-automation-modal-title"
                            className="relative w-[min(92vw,440px)] max-h-[calc(100dvh-32px)] sm:max-h-[min(82dvh,520px)]"
                        >
                            {/* Opaque panel keeps the card clearly visible above the blurred backdrop. */}
                            <div className="relative flex max-h-[calc(100dvh-32px)] flex-col overflow-hidden rounded-[26px] border border-cyan-300/25 bg-gradient-to-br from-[#0B2858] via-[#061633] to-[#041025] p-5 shadow-[0_35px_100px_rgba(22,119,255,0.34),inset_0_1px_0_rgba(255,255,255,0.10)] sm:max-h-[min(82dvh,520px)] sm:p-7">
                                <span className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-[60px]" />
                                <span className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-violet-500/10 blur-[65px]" />
                                <span className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/90 to-transparent" />

                                <div className="relative z-10 flex min-h-0 flex-1 flex-col">
                                    <div className="flex items-start gap-3 pr-9 sm:gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-[#0D2C5F] to-[#071A3D] text-cyan-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_25px_rgba(25,211,255,0.12)]">
                                            {ActiveCardIcon && <ActiveCardIcon size={22} strokeWidth={1.8} />}
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <span className="text-[9px] uppercase tracking-[0.22em] text-cyan-300/80">
                                                Automation Module
                                            </span>
                                            <h3
                                                id="hero-automation-modal-title"
                                                className="mt-1 break-words text-lg font-semibold leading-snug text-white sm:text-xl"
                                            >
                                                {ActiveCardData.title}
                                            </h3>
                                        </div>

                                        <span className="mt-1 shrink-0 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-2.5 py-1 text-[9px] uppercase tracking-[0.14em] text-cyan-200/80 sm:px-3">
                                            Active
                                        </span>
                                    </div>

                                    <div className="my-4 h-px shrink-0 bg-gradient-to-r from-cyan-300/25 via-blue-300/10 to-transparent sm:my-5" />

                                    <div className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain pr-1">
                                        {(ActiveCardData.points || []).map((Point, PointIndex) => (
                                            <div
                                                key={`${ActiveCardData.id}-${PointIndex}`}
                                                className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-[#071A38]/80 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition-colors duration-200 hover:border-cyan-300/20 hover:bg-cyan-300/[0.04] sm:px-4"
                                            >
                                                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.06]">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(25,211,255,0.8)]" />
                                                </span>
                                                <span className="text-[12px] leading-5 text-blue-50 sm:text-[13px]">
                                                    {Point}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-4 flex shrink-0 items-center justify-between border-t border-blue-300/10 pt-3 sm:mt-5">
                                        <span className="text-[9px] uppercase tracking-[0.14em] text-blue-200/50">
                                            InnoInventive
                                        </span>
                                        <span className="flex items-center gap-2 text-[9px] text-cyan-300/80">
                                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_9px_rgba(25,211,255,0.8)] animate-pulse" />
                                            Live
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Premium close badge remains above the modal panel. */}
                            <button
                                type="button"
                                aria-label="Close automation card"
                                onClick={HandleModalClose}
                                className="absolute -right-2 -top-2 z-20 flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/40 bg-gradient-to-br from-[#12366B] via-[#0A2148] to-[#061633] text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_24px_rgba(0,0,0,0.45),0_0_18px_rgba(25,211,255,0.18)] backdrop-blur-xl transition duration-200 hover:scale-105 hover:border-cyan-200/75 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#061633]"
                            >
                                <X size={16} strokeWidth={2.4} />
                            </button>
                        </div>
                    </div>
                </div>,
                document.body,
            )}

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
                                to="/contact/#contact-form"
                                label="Contact Us"
                                icon={ArrowRight}
                            />

                            <HeroActionButton 
                            to="/projects/#projects"
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