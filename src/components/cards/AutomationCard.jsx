import { createPortal } from "react-dom";
import { useEffect, useMemo, useRef, useState } from "react";

import PremiumIconBadge from "../UI/PremiumIconBadge";

const WordRevealInterval = 100;
const ModalCloseDelay = 180;
const ModalAnimationDuration = 520;

const AutomationCard = ({
    card,
    typingDelay = 0,
    isActive = false,
    onOpen,
    onClose,
}) => {
    const CardIcon = card.icon;

    const CardElementReference = useRef(null);
    const CloseTimerReference = useRef(null);

    const [VisibleWordCount, SetVisibleWordCount] = useState(0);
    const [IsModalMounted, SetIsModalMounted] = useState(false);
    const [IsModalActive, SetIsModalActive] = useState(false);
    const [CardPosition, SetCardPosition] = useState(null);

    const CardTextSegments = useMemo(() => {
        return [card.title, ...card.points];
    }, [card]);

    const TotalWordCount = useMemo(() => {
        return CardTextSegments.reduce(
            (TotalWords, CurrentText) =>
                TotalWords + CurrentText.split(" ").length,
            0
        );
    }, [CardTextSegments]);

    const SegmentStartIndexes = useMemo(() => {
        let CurrentWordIndex = 0;

        return CardTextSegments.map((Segment) => {
            const StartIndex = CurrentWordIndex;

            CurrentWordIndex += Segment.split(" ").length;

            return StartIndex;
        });
    }, [CardTextSegments]);

    const GetVisibleText = (Text, StartIndex) => {
        const Words = Text.split(" ");

        const VisibleWords = Math.max(
            0,
            Math.min(
                Words.length,
                VisibleWordCount - StartIndex
            )
        );

        return Words.slice(0, VisibleWords).join(" ");
    };

    useEffect(() => {
        SetVisibleWordCount(0);

        const TypingStartTimer = setTimeout(() => {
            const TypingTimer = setInterval(() => {
                SetVisibleWordCount((CurrentWordCount) => {
                    if (CurrentWordCount >= TotalWordCount) {
                        clearInterval(TypingTimer);
                        return CurrentWordCount;
                    }

                    return CurrentWordCount + 1;
                });
            }, WordRevealInterval);

            return () => clearInterval(TypingTimer);
        }, typingDelay);

        return () => clearTimeout(TypingStartTimer);
    }, [TotalWordCount, typingDelay]);

    const ClearCloseTimer = () => {
        if (CloseTimerReference.current) {
            clearTimeout(CloseTimerReference.current);
            CloseTimerReference.current = null;
        }
    };

    const CaptureCardPosition = () => {
        if (!CardElementReference.current) {
            return null;
        }

        const CardRectangle =
            CardElementReference.current.getBoundingClientRect();

        return {
            x: CardRectangle.left + CardRectangle.width / 2,
            y: CardRectangle.top + CardRectangle.height / 2,
            width: CardRectangle.width,
            height: CardRectangle.height,
        };
    };

    const OpenCardModal = () => {
        ClearCloseTimer();

        onOpen?.(card.id);
    };

    const MountCardModal = () => {
        const CurrentCardPosition = CaptureCardPosition();

        if (!CurrentCardPosition) {
            return;
        }

        SetCardPosition(CurrentCardPosition);
        SetIsModalMounted(true);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                SetIsModalActive(true);
            });
        });
    };

    useEffect(() => {
        if (isActive) {
            MountCardModal();
            return;
        }

        if (IsModalMounted) {
            ScheduleModalClose();
        }
    }, [isActive]);

    const ScheduleModalClose = () => {
        ClearCloseTimer();

        CloseTimerReference.current = setTimeout(() => {
            SetIsModalActive(false);

            CloseTimerReference.current = setTimeout(() => {
                SetIsModalMounted(false);
                SetCardPosition(null);

                onClose?.(card.id);
            }, ModalAnimationDuration);
        }, ModalCloseDelay);
    };

    const KeepModalOpen = () => {
        ClearCloseTimer();
    };

    const HandleEscapeKey = (Event) => {
        if (Event.key === "Escape" && IsModalMounted) {
            ScheduleModalClose();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", HandleEscapeKey);

        return () => {
            window.removeEventListener(
                "keydown",
                HandleEscapeKey
            );

            ClearCloseTimer();
        };
    }, [IsModalMounted]);

    const HandleWindowResize = () => {
        if (!CardElementReference.current || !IsModalMounted) {
            return;
        }

        const CardRectangle =
            CardElementReference.current.getBoundingClientRect();

        SetCardPosition({
            x: CardRectangle.left + CardRectangle.width / 2,
            y: CardRectangle.top + CardRectangle.height / 2,
            width: CardRectangle.width,
            height: CardRectangle.height,
        });
    };

    useEffect(() => {
        window.addEventListener(
            "resize",
            HandleWindowResize
        );

        return () => {
            window.removeEventListener(
                "resize",
                HandleWindowResize
            );
        };
    }, [IsModalMounted]);

    const ModalWidth = 440;
    const ModalHeight = 330;

    const ViewportCenterX =
        typeof window !== "undefined"
            ? window.innerWidth / 2
            : 0;

    const ViewportCenterY =
        typeof window !== "undefined"
            ? window.innerHeight / 2
            : 0;

    const StartScale = CardPosition
        ? Math.min(
            CardPosition.width / ModalWidth,
            CardPosition.height / ModalHeight
        )
        : 0.42;

    const StartTranslateX = CardPosition
        ? CardPosition.x - ViewportCenterX
        : 0;

    const StartTranslateY = CardPosition
        ? CardPosition.y - ViewportCenterY
        : 0;

    const ModalStageTransform = IsModalActive
        ? "translate3d(0, 0, 0) scale(1) rotateY(180deg)"
        : `translate3d(${StartTranslateX}px, ${StartTranslateY}px, 0) scale(${StartScale}) rotateY(0deg)`;

    return (
        <>
            <div
                ref={CardElementReference}
                onMouseEnter={OpenCardModal}
                onMouseLeave={ScheduleModalClose}
                className={`relative h-[158px] w-[190px] transition-opacity duration-200 ${IsModalMounted
                        ? "pointer-events-none opacity-0"
                        : "opacity-100"
                    }`}
                style={{ perspective: "1400px" }}
            >
                <div className="absolute inset-[5px] translate-y-[9px] rounded-2xl bg-[#020B20] opacity-90 blur-[1px]" />

                <div className="group relative h-full w-full overflow-hidden rounded-2xl border border-cyan-300/15 bg-gradient-to-br from-[#12366B] via-[#0A2148] to-[#041025] p-4 shadow-[0_14px_35px_rgba(2,15,45,0.55),inset_0_1px_0_rgba(255,255,255,0.09)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_22px_50px_rgba(22,119,255,0.22),inset_0_1px_0_rgba(255,255,255,0.1)]">
                    <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />

                    <span className="pointer-events-none absolute -left-1/2 top-0 h-full w-[30%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

                    <div className="relative z-10">
                        <div className="mb-3 flex items-start gap-3">
                            <PremiumIconBadge icon={CardIcon} />

                            <h3 className="min-h-[32px] pt-1 text-[13px] font-semibold leading-4 text-white">
                                {GetVisibleText(
                                    card.title,
                                    SegmentStartIndexes[0]
                                )}
                            </h3>
                        </div>

                        <div className="space-y-2">
                            {card.points.map(
                                (Point, PointIndex) => (
                                    <div
                                        key={Point}
                                        className="flex items-start gap-2 text-[10px] leading-4 text-blue-100"
                                    >
                                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_9px_rgba(25,211,255,0.8)]" />

                                        <span>
                                            {GetVisibleText(
                                                Point,
                                                SegmentStartIndexes[
                                                PointIndex + 1
                                                ]
                                            )}
                                        </span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {IsModalMounted &&
                createPortal(
                    <div className="pointer-events-none fixed inset-0 z-[9999]">
                        <div
                            className="absolute left-1/2 top-1/2 h-[330px] w-[440px] -translate-x-1/2 -translate-y-1/2"
                            style={{ perspective: "1800px" }}
                        >
                            <div
                                className="relative h-full w-full"
                                style={{
                                    transformStyle: "preserve-3d",
                                    transform:
                                        ModalStageTransform,
                                    transition:
                                        "transform 620ms cubic-bezier(0.16, 1, 0.3, 1)",
                                }}
                            >
                                <div
                                    className="absolute inset-[7px] rounded-[26px] bg-[#031029] shadow-[0_30px_80px_rgba(2,12,35,0.7)]"
                                    style={{
                                        transform:
                                            "translateZ(-18px)",
                                        backfaceVisibility:
                                            "hidden",
                                    }}
                                />

                                {/* Front Face */}
                                <div
                                    className="absolute inset-0 overflow-hidden rounded-[26px] border border-cyan-300/20 bg-gradient-to-br from-[#0B2858] via-[#061633] to-[#041025] p-7 shadow-[0_25px_80px_rgba(22,119,255,0.2),inset_0_1px_0_rgba(255,255,255,0.09)]"
                                    style={{
                                        backfaceVisibility:
                                            "hidden",
                                    }}
                                >
                                    <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/90 to-transparent" />

                                    <div className="flex h-full flex-col justify-center">
                                        <div className="flex items-center gap-4">
                                            <PremiumIconBadge
                                                icon={CardIcon}
                                                size="large"
                                            />

                                            <div>
                                                <span className="text-[9px] uppercase tracking-[0.22em] text-cyan-300">
                                                    Automation Module
                                                </span>

                                                <h3 className="mt-1 text-xl font-semibold text-white">
                                                    {card.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Modal Face */}
                                <div
                                    className="pointer-events-auto absolute inset-0 overflow-hidden rounded-[26px] border border-cyan-300/25 bg-gradient-to-br from-[#0A214B] via-[#061633] to-[#071A3D] p-7 shadow-[0_35px_100px_rgba(22,119,255,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]"
                                    style={{
                                        transform:
                                            "rotateY(180deg) translateZ(1px)",
                                        backfaceVisibility:
                                            "hidden",
                                    }}
                                    onMouseEnter={KeepModalOpen}
                                    onMouseLeave={ScheduleModalClose}
                                >
                                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-[60px]" />

                                    <div className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-violet-500/10 blur-[65px]" />

                                    <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/90 to-transparent" />

                                    <div className="relative z-10 flex h-full flex-col">
                                        <div className="flex items-start justify-between gap-5">
                                            <div className="flex items-center gap-4">
                                                <PremiumIconBadge
                                                    icon={CardIcon}
                                                    size="large"
                                                />

                                                <div>
                                                    <span className="text-[9px] uppercase tracking-[0.22em] text-cyan-300/80">
                                                        Automation Module
                                                    </span>

                                                    <h3 className="mt-1 text-[20px] font-semibold text-white">
                                                        {card.title}
                                                    </h3>
                                                </div>
                                            </div>

                                            <span className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.04] px-3 py-1 text-[9px] uppercase tracking-[0.14em] text-cyan-200/70">
                                                Active
                                            </span>
                                        </div>

                                        <div className="my-5 h-px bg-gradient-to-r from-cyan-300/20 via-blue-300/10 to-transparent" />

                                        <div className="flex-1 space-y-3">
                                            {card.points.map(
                                                (Point) => (
                                                    <div
                                                        key={Point}
                                                        className="flex items-center gap-3 rounded-xl border border-white/[0.04] bg-white/[0.025] px-4 py-3 transition-all duration-300 hover:border-cyan-300/20 hover:bg-cyan-300/[0.04]"
                                                    >
                                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.05]">
                                                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(25,211,255,0.8)]" />
                                                        </span>

                                                        <span className="text-[13px] text-blue-50">
                                                            {Point}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>

                                        <div className="mt-4 flex items-center justify-between border-t border-blue-300/10 pt-3">
                                            <span className="text-[9px] uppercase tracking-[0.14em] text-blue-200/40">
                                                InnoInventive
                                            </span>

                                            <span className="flex items-center gap-2 text-[9px] text-cyan-300/70">
                                                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_9px_rgba(25,211,255,0.8)] animate-pulse" />
                                                Live
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
};

export default AutomationCard;