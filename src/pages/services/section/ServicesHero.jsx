import {
    Activity,
    ArrowRight,
    Gauge,
    Workflow,
} from "lucide-react";

import PremiumButton from "../../../components/UI/PremiumButton";

const ServicesHeroContent = {
    eyebrow: "OUR SERVICES",
    headingPrimary: "Smart Technology",
    headingAccent: "Real Business Impact.",
    description:
        "We build custom web applications, mobile apps, automation systems and API integrations — designed to help your business work smarter, faster and grow without limits.",
    buttonLabel: "Explore Services",
};

const ServicesHeroFeatures = [
    "Custom Solutions",
    "Scalable Architecture",
    "Ongoing Support",
];

const ProcessBars = [
    38,
    62,
    48,
    76,
    56,
    84,
    68,
    91,
];

const ActivityRows = [
    {
        label: "DATA",
        value: "SYNC",
    },
    {
        label: "WORKFLOW",
        value: "ACTIVE",
    },
    {
        label: "ENGINE",
        value: "READY",
    },
];

const DataGateway = ({ type = "input" }) => {
    const IsInput = type === "input";

    return (
        <div
            className={[
                "data-gateway group absolute top-1/2 z-50",
                "-translate-y-1/2",
                IsInput ? "left-[2%]" : "right-[2%]",
            ].join(" ")}
        >
            <span
                className={[
                    "absolute inset-x-[5px] bottom-[-9px] top-[8px]",
                    "rounded-[21px]",
                    IsInput ? "bg-[#020B20]" : "bg-[#03132D]",
                    "shadow-[0_20px_34px_rgba(0,0,0,0.48)]",
                ].join(" ")}
            />

            <span
                className={[
                    "absolute inset-x-[2px] bottom-[-4px] top-[4px]",
                    "rounded-[21px]",
                    "border border-white/[0.05]",
                    IsInput ? "bg-[#061B3A]" : "bg-[#071A34]",
                ].join(" ")}
            />

            <div
                className={[
                    "relative flex h-[84px] w-[108px] items-center",
                    "rounded-[21px] border backdrop-blur-xl",
                    "shadow-[inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-15px_25px_rgba(0,0,0,0.22),0_17px_30px_rgba(0,0,0,0.30)]",
                    "transition-all duration-500",
                    "group-hover:-translate-y-2",
                    IsInput
                        ? "border-cyan-300/[0.16] bg-[#0C3062]/72"
                        : "border-violet-300/[0.15] bg-[#071F43]/78",
                ].join(" ")}
                style={{ transformStyle: "preserve-3d" }}
            >
                <span
                    className={[
                        "pointer-events-none absolute inset-x-5 top-0 h-px",
                        IsInput
                            ? "bg-gradient-to-r from-transparent via-cyan-300/42 to-transparent"
                            : "bg-gradient-to-r from-transparent via-violet-300/38 to-transparent",
                    ].join(" ")}
                />

                <span className="pointer-events-none absolute inset-[5px] rounded-[16px] border border-white/[0.04]" />

                <span
                    className={[
                        "pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full blur-2xl",
                        IsInput
                            ? "bg-cyan-300/[0.06]"
                            : "bg-violet-300/[0.045]",
                    ].join(" ")}
                />

                <div className="relative z-10 flex w-full items-center justify-between px-3.5">
                    {IsInput ? (
                        <>
                            <div className="flex items-center gap-2.5">
                                <div className="relative flex h-8 w-8 items-center justify-center rounded-xl border border-cyan-200/[0.15] bg-cyan-300/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_8px_15px_rgba(0,0,0,0.24)]">
                                    <span className="absolute inset-[4px] rounded-lg border border-cyan-200/[0.04]" />

                                    <span className="relative h-2.5 w-2.5 rotate-45 rounded-[2px] border border-cyan-100/60 bg-cyan-300/70 shadow-[0_0_9px_rgba(25,211,255,0.75)]" />
                                </div>

                                <div>
                                    <span className="block font-mono text-[6px] uppercase tracking-[0.2em] text-cyan-100/42">
                                        INPUT
                                    </span>

                                    <span className="mt-1 block font-mono text-[5px] uppercase tracking-[0.16em] text-white/24">
                                        INGEST
                                    </span>
                                </div>
                            </div>

                            <div className="relative flex h-9 w-4 items-center justify-end">
                                <span className="absolute right-0 h-7 w-[3px] rounded-full bg-gradient-to-b from-transparent via-cyan-300/65 to-transparent shadow-[0_0_9px_rgba(25,211,255,0.45)]" />

                                <span className="absolute right-[-1px] h-2.5 w-2.5 rounded-[2px] border border-cyan-100/50 bg-cyan-300/32 shadow-[0_0_10px_rgba(25,211,255,0.65)]" />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="relative flex h-9 w-4 items-center justify-start">
                                <span className="absolute left-0 h-7 w-[3px] rounded-full bg-gradient-to-b from-transparent via-violet-300/62 to-transparent shadow-[0_0_9px_rgba(124,60,255,0.42)]" />

                                <span className="absolute left-[-1px] h-2.5 w-2.5 rounded-[2px] border border-violet-100/50 bg-violet-300/30 shadow-[0_0_10px_rgba(124,60,255,0.60)]" />
                            </div>

                            <div className="flex items-center gap-2.5">
                                <div className="text-right">
                                    <span className="block font-mono text-[6px] uppercase tracking-[0.2em] text-violet-100/40">
                                        OUTPUT
                                    </span>

                                    <span className="mt-1 block font-mono text-[5px] uppercase tracking-[0.16em] text-white/24">
                                        DELIVER
                                    </span>
                                </div>

                                <div className="relative flex h-8 w-8 items-center justify-center rounded-xl border border-violet-200/[0.14] bg-violet-300/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_8px_15px_rgba(0,0,0,0.24)]">
                                    <span className="absolute inset-[4px] rounded-lg border border-violet-200/[0.04]" />

                                    <span className="relative h-2.5 w-4 rounded-[2px] border border-violet-100/60 bg-violet-300/64 shadow-[0_0_9px_rgba(124,60,255,0.72)]" />
                                </div>
                            </div>
                        </>
                    )}
                </div>

                <span
                    className={[
                        "pointer-events-none absolute bottom-0 left-4 right-4 h-[2px] rounded-full",
                        IsInput
                            ? "bg-gradient-to-r from-transparent via-cyan-300/16 to-transparent"
                            : "bg-gradient-to-r from-transparent via-violet-300/14 to-transparent",
                    ].join(" ")}
                />
            </div>
        </div>
    );
};

const InputPackets = () => {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-30"
        >
            <span className="flow-input input-packet-one" />
            <span className="flow-input input-packet-two" />
            <span className="flow-input input-packet-three" />
            <span className="flow-input input-packet-four" />
            <span className="flow-input input-packet-five" />
        </div>
    );
};

const OutputPackets = () => {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-30"
        >
            <span className="flow-output output-packet-one" />
            <span className="flow-output output-packet-two" />
            <span className="flow-output output-packet-three" />
            <span className="flow-output output-packet-four" />
            <span className="flow-output output-packet-five" />
        </div>
    );
};

const AutomationEngine = () => {
    return (
        <div className="absolute left-1/2 top-1/2 z-40 h-[225px] w-[225px] -translate-x-1/2 -translate-y-1/2 sm:h-[270px] sm:w-[270px]">
            <span className="absolute inset-[15%] rounded-full bg-cyan-400/[0.04] blur-[55px]" />

            <span className="absolute inset-[2%] rounded-full border border-white/[0.045]" />

            <span className="absolute inset-[11%] rounded-full border border-cyan-300/[0.075] [transform:rotateX(66deg)_rotateZ(16deg)]" />

            <span className="absolute inset-[20%] rounded-full border border-blue-300/[0.065] border-dashed [transform:rotateX(66deg)_rotateZ(-18deg)]" />

            <div className="absolute inset-[27%] rounded-full border border-transparent border-t-cyan-300/45 border-r-cyan-300/10 animate-[engineSpin_12s_linear_infinite]" />

            <div className="absolute left-1/2 top-1/2 h-[108px] w-[108px] -translate-x-1/2 -translate-y-1/2 rounded-[30px] border border-cyan-200/15 bg-[radial-gradient(circle_at_32%_18%,rgba(25,211,255,0.16),rgba(12,48,98,0.96)_52%,rgba(3,19,45,1)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_0_50px_rgba(25,211,255,0.10),0_28px_55px_rgba(0,0,0,0.38)] transition-all duration-700 sm:h-[126px] sm:w-[126px]">
                <span className="absolute inset-[8px] rounded-[23px] border border-white/[0.045]" />

                <span className="absolute left-1/2 top-[22%] h-10 w-10 -translate-x-1/2 rounded-full bg-cyan-300/[0.055] blur-xl" />

                <div className="absolute left-1/2 top-1/2 flex h-[54px] w-[54px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-cyan-200/15 bg-[#061B3A]/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_28px_rgba(25,211,255,0.12)] transition-all duration-500 hover:scale-105 hover:border-cyan-200/30">
                    <Workflow
                        size={22}
                        strokeWidth={1.5}
                        className="text-cyan-200 drop-shadow-[0_0_10px_rgba(25,211,255,0.48)]"
                    />

                    <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_9px_rgba(25,211,255,1)]" />
                </div>

                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="font-mono text-[9px] font-medium uppercase tracking-[0.25em] text-cyan-100/30">
                        AUTOMATION ENGINE
                    </span>
                </div>
            </div>

            <span className="absolute left-[9%] top-[45%] h-2 w-2 rounded-[3px] border border-cyan-200/25 bg-cyan-300/45 shadow-[0_0_10px_rgba(25,211,255,0.50)]" />

            <span className="absolute right-[7%] top-[30%] h-1.5 w-1.5 rounded-[2px] border border-violet-200/28 bg-violet-300/42 shadow-[0_0_8px_rgba(124,60,255,0.52)]" />

            <span className="absolute bottom-[17%] left-[26%] h-1.5 w-1.5 rounded-[2px] border border-blue-200/25 bg-blue-300/42 shadow-[0_0_8px_rgba(22,119,255,0.48)]" />
        </div>
    );
};

const LiveChart = () => {
    return (
        <div className="relative overflow-hidden rounded-[20px] border border-cyan-300/[0.10] bg-[linear-gradient(145deg,rgba(12,48,98,0.72),rgba(3,19,45,0.88))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_36px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-200/[0.16] hover:shadow-[0_22px_45px_rgba(0,0,0,0.30),0_0_28px_rgba(25,211,255,0.07)]">
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-300/[0.04] blur-2xl" />

            <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Activity
                        size={12}
                        strokeWidth={1.6}
                        className="text-cyan-200/70"
                    />

                    <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/30">
                        LIVE PROCESSING
                    </span>
                </div>

                <span className="font-mono text-[7px] text-cyan-200/35">
                    98.4%
                </span>
            </div>

            <div className="relative mt-5 h-[54px]">
                <div className="absolute inset-x-0 bottom-0 flex h-full items-end gap-1">
                    {ProcessBars.map((height, index) => (
                        <span
                            key={index}
                            className="live-chart-bar relative flex-1 overflow-hidden rounded-t-[3px] bg-gradient-to-t from-blue-500/15 via-cyan-300/45 to-white/45"
                            style={{ height: `${height}%` }}
                        >
                            <span className="absolute inset-x-0 bottom-0 h-[35%] bg-cyan-300/25 blur-[5px]" />
                        </span>
                    ))}
                </div>

                <svg
                    viewBox="0 0 220 54"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full"
                >
                    <path
                        d="M0 42 C18 38, 24 16, 42 29 S68 48, 83 27 S112 14, 126 30 S149 46, 163 20 S190 26, 220 8"
                        fill="none"
                        stroke="rgba(25,211,255,0.58)"
                        strokeWidth="1.1"
                    />
                </svg>
            </div>

            <div className="mt-3 flex items-center justify-between">
                <span className="font-mono text-[6px] uppercase tracking-[0.14em] text-white/18">
                    AUTOMATED FLOW
                </span>

                <span className="flex items-center gap-1.5 font-mono text-[6px] text-cyan-200/40">
                    <span className="h-1 w-1 rounded-full bg-cyan-300" />
                    STABLE
                </span>
            </div>
        </div>
    );
};

const ActivityPanel = () => {
    return (
        <div className="relative overflow-hidden rounded-[20px] border border-violet-300/[0.10] bg-[linear-gradient(145deg,rgba(12,48,98,0.68),rgba(3,19,45,0.88))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_36px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-200/[0.15] hover:shadow-[0_22px_45px_rgba(0,0,0,0.30),0_0_30px_rgba(124,60,255,0.06)]">
            <div className="pointer-events-none absolute -left-10 -bottom-10 h-24 w-24 rounded-full bg-violet-400/[0.03] blur-2xl" />

            <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Gauge
                        size={12}
                        strokeWidth={1.6}
                        className="text-violet-200/70"
                    />

                    <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/30">
                        OPERATIONS
                    </span>
                </div>

                <span className="h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_8px_rgba(124,60,255,0.76)]" />
            </div>

            <div className="operations-rows relative z-10 mt-4 space-y-2.5">
                {ActivityRows.map((row, index) => (
                    <div
                        key={row.label}
                        className={`operations-row operations-row-${index}`}
                    >
                        <div className="operations-row-glow" />

                        <div className="relative z-10 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                                <span className="operations-status-dot h-1.5 w-1.5 rounded-[2px]" />

                                <span className="operations-row-label font-mono text-[6px] uppercase tracking-[0.12em]">
                                    {row.label}
                                </span>
                            </div>

                            <span className="operations-row-value font-mono text-[6px] uppercase tracking-[0.12em]">
                                {row.value}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ServicesHeroVisual = () => {
    return (
        <div className="services-visual relative h-full w-full max-w-[690px]">
            <span className="pointer-events-none absolute left-[8%] top-[17%] h-20 w-20 rounded-full bg-cyan-300/[0.035] blur-[45px]" />

            <span className="pointer-events-none absolute bottom-[16%] right-[7%] h-24 w-24 rounded-full bg-violet-500/[0.028] blur-[50px]" />

            <div className="pointer-events-none absolute inset-[9%] rounded-full border border-white/[0.025]" />

            <div className="pointer-events-none absolute inset-[15%] rounded-full border border-cyan-300/[0.035] [transform:rotateX(65deg)_rotateZ(14deg)]" />

            <div className="pointer-events-none absolute inset-[22%] rounded-full border border-violet-300/[0.03] [transform:rotateX(65deg)_rotateZ(-18deg)]" />

            <div className="absolute inset-0 flex justify-center px-2 py-0 sm:px-4 sm:py-12 lg:py-0">
                <div className="relative flex w-[min(78%,520px)] flex-col space-y-14">
                    <div className="relative h-[200px] w-full sm:h-[235px] lg:h-[150px]">
                        <div className="relative h-full w-full overflow-visible">
                            <DataGateway type="input" />
                            <DataGateway type="output" />
                            <InputPackets />
                            <OutputPackets />
                            <AutomationEngine />
                        </div>
                    </div>

                    <div className="grid grid-cols-[1.25fr_0.85fr] gap-3">
                        <LiveChart />
                        <ActivityPanel />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ServicesHero = () => {
    return (
        <section
            id="services-hero"
            className="relative h-[85vh] w-full overflow-hidden bg-[#061633] text-white"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_50%,rgba(25,211,255,0.055),transparent_27%),radial-gradient(circle_at_91%_76%,rgba(124,60,255,0.035),transparent_23%),linear-gradient(112deg,#061633_0%,#082047_48%,#061633_100%)]" />

                <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:78px_78px]" />

                <div className="absolute inset-y-0 left-0 w-[40%] bg-[radial-gradient(circle_at_10%_50%,rgba(22,119,255,0.04),transparent_55%)]" />
            </div>

            <div className="relative mx-auto grid h-full max-w-[1400px] gap-8 overflow-hidden px-6 py-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-8 lg:px-8">
                {/* LEFT CONTENT */}
                <div className="relative z-50 max-w-[580px] pt-5">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-10 bg-gradient-to-r from-cyan-300 via-blue-400 to-transparent sm:w-11" />

                        <span className="text-[clamp(7px,0.52vw,10px)] font-semibold uppercase tracking-[0.21em] text-white/72">
                            {ServicesHeroContent.eyebrow}
                        </span>
                    </div>

                    <h1 className="mt-5 tracking-[-0.055em]">
                        <span className="block text-[clamp(31px,4.15vw,67px)] font-semibold leading-[0.98] text-white">
                            {ServicesHeroContent.headingPrimary}
                        </span>

                        <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-[clamp(31px,4.15vw,67px)] font-semibold leading-[0.98] text-transparent">
                            {ServicesHeroContent.headingAccent}
                        </span>
                    </h1>

                    <p className="mt-[5%] max-w-[510px] text-[clamp(8px,1.63vw,12px)] leading-[1.78] text-white/72">
                        {ServicesHeroContent.description}
                    </p>

                    <div className="mt-[6%] flex flex-wrap items-center gap-x-[6%] gap-y-3">
                        {ServicesHeroFeatures.map((Feature, Index) => (
                            <div
                                key={Feature}
                                className="flex items-center gap-2"
                            >
                                <span
                                    className={[
                                        "h-1.5 w-1.5 rounded-full shadow-[0_0_8px_currentColor]",
                                        Index === 2
                                            ? "bg-violet-300 text-violet-300"
                                            : "bg-cyan-300 text-cyan-300",
                                    ].join(" ")}
                                />

                                <span className="whitespace-nowrap text-[clamp(7px,0.67vw,11px)] font-medium text-white/66">
                                    {Feature}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-[6%]">
                        <PremiumButton
                            label={ServicesHeroContent.buttonLabel}
                            to="/services"
                            icon={ArrowRight}
                            className="px-7 py-2.5"
                        />
                    </div>
                </div>

                {/* RIGHT VISUAL */}
                <div className="relative z-30 flex h-full min-h-0">
                    <ServicesHeroVisual />
                </div>
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[10%] bg-gradient-to-t from-[#061633] to-transparent" />

            <style>{`
                /* =================================
                   DATA GATEWAY
                ================================= */

                #services-hero .data-gateway {
                    perspective: 1100px;
                }

                #services-hero .data-gateway:hover {
                    filter:
                        brightness(1.08)
                        drop-shadow(
                            0 18px 28px
                            rgba(0,0,0,0.34)
                        );
                }

                /* =================================
                   ENGINE ORBIT
                ================================= */

                @keyframes engineSpin {
                    from {
                        transform: rotate(0deg);
                    }

                    to {
                        transform: rotate(360deg);
                    }
                }

                /* =================================
                   CONTINUOUS INPUT STREAM
                ================================= */

                #services-hero .flow-input {
                    position: absolute;
                    z-index: 35;
                    width: 5px;
                    height: 5px;
                    border-radius: 1px;
                    border:
                        1px solid
                        rgba(217,250,255,0.86);
                    background:
                        linear-gradient(
                            145deg,
                            rgba(255,255,255,0.98),
                            rgba(25,211,255,0.72)
                        );
                    box-shadow:
                        0 0 8px
                        rgba(25,211,255,0.82);
                    opacity: 0;
                }

                #services-hero .input-packet-one {
                    animation:
                        inputContinuousOne
                        5.6s
                        cubic-bezier(0.55,0,0.2,1)
                        0s
                        infinite;
                }

                #services-hero .input-packet-two {
                    animation:
                        inputContinuousTwo
                        5.6s
                        cubic-bezier(0.55,0,0.2,1)
                        1.3s
                        infinite;
                }

                #services-hero .input-packet-three {
                    animation:
                        inputContinuousThree
                        5.6s
                        cubic-bezier(0.55,0,0.2,1)
                        2.6s
                        infinite;
                }

                #services-hero .input-packet-four {
                    animation:
                        inputContinuousFour
                        5.6s
                        cubic-bezier(0.55,0,0.2,1)
                        3.9s
                        infinite;
                }

                @keyframes inputContinuousOne {
                    0%,
                    2% {
                        left: 18%;
                        top: 43%;
                        opacity: 0;
                        transform:
                            rotate(45deg)
                            scale(0.72);
                    }

                    7% {
                        opacity: 1;
                    }

                    26% {
                        left: 46%;
                        top: 47%;
                        opacity: 1;
                        transform:
                            rotate(45deg)
                            scale(1);
                    }

                    30% {
                        left: 49%;
                        top: 50%;
                        opacity: 0;
                        transform:
                            rotate(90deg)
                            scale(0.2);
                    }

                    100% {
                        opacity: 0;
                    }
                }

                @keyframes inputContinuousTwo {
                    0%,
                    2% {
                        left: 18%;
                        top: 49%;
                        opacity: 0;
                        transform:
                            rotate(45deg)
                            scale(0.72);
                    }

                    7% {
                        opacity: 1;
                    }

                    26% {
                        left: 46%;
                        top: 49%;
                        opacity: 1;
                        transform:
                            rotate(45deg)
                            scale(1);
                    }

                    30% {
                        left: 49%;
                        top: 50%;
                        opacity: 0;
                        transform:
                            rotate(90deg)
                            scale(0.2);
                    }

                    100% {
                        opacity: 0;
                    }
                }

                @keyframes inputContinuousThree {
                    0%,
                    2% {
                        left: 18%;
                        top: 55%;
                        opacity: 0;
                        transform:
                            rotate(45deg)
                            scale(0.72);
                    }

                    7% {
                        opacity: 1;
                    }

                    26% {
                        left: 46%;
                        top: 51%;
                        opacity: 1;
                        transform:
                            rotate(45deg)
                            scale(1);
                    }

                    30% {
                        left: 49%;
                        top: 50%;
                        opacity: 0;
                        transform:
                            rotate(90deg)
                            scale(0.2);
                    }

                    100% {
                        opacity: 0;
                    }
                }

                @keyframes inputContinuousFour {
                    0%,
                    2% {
                        left: 18%;
                        top: 60%;
                        opacity: 0;
                        transform:
                            rotate(45deg)
                            scale(0.72);
                    }

                    7% {
                        opacity: 1;
                    }

                    26% {
                        left: 46%;
                        top: 53%;
                        opacity: 1;
                        transform:
                            rotate(45deg)
                            scale(1);
                    }

                    30% {
                        left: 49%;
                        top: 50%;
                        opacity: 0;
                        transform:
                            rotate(90deg)
                            scale(0.2);
                    }

                    100% {
                        opacity: 0;
                    }
                }

                /* =================================
                   PROCESSING QUEUE
                ================================= */

                #services-hero .processing-packet {
                    position: absolute;
                    z-index: 55;
                    left: 50%;
                    top: 50%;
                    width: 5px;
                    height: 5px;
                    border-radius: 1px;
                    border:
                        1px solid
                        rgba(220,252,255,0.82);
                    background:
                        linear-gradient(
                            135deg,
                            rgba(255,255,255,0.95),
                            rgba(25,211,255,0.58)
                        );
                    box-shadow:
                        0 0 9px
                        rgba(25,211,255,0.78);
                    opacity: 0;
                }

                #services-hero .processing-packet-one {
                    animation:
                        processContinuousOne
                        5.6s
                        ease-in-out
                        0s
                        infinite;
                }

                #services-hero .processing-packet-two {
                    animation:
                        processContinuousTwo
                        5.6s
                        ease-in-out
                        1.3s
                        infinite;
                }

                #services-hero .processing-packet-three {
                    animation:
                        processContinuousThree
                        5.6s
                        ease-in-out
                        2.6s
                        infinite;
                }

                #services-hero .processing-packet-four {
                    animation:
                        processContinuousFour
                        5.6s
                        ease-in-out
                        3.9s
                        infinite;
                }

                @keyframes processContinuousOne {
                    0%,
                    24% {
                        opacity: 0;
                        transform:
                            translate(-50%,-50%)
                            scale(0.2)
                            rotate(45deg);
                    }

                    29% {
                        opacity: 1;
                        transform:
                            translate(-50%,-50%)
                            scale(1)
                            rotate(45deg);
                    }

                    37% {
                        transform:
                            translate(
                                calc(-50% - 22px),
                                calc(-50% - 16px)
                            )
                            scale(0.92)
                            rotate(90deg);
                    }

                    45% {
                        opacity: 1;
                        transform:
                            translate(
                                calc(-50% - 11px),
                                calc(-50% - 8px)
                            )
                            scale(0.82)
                            rotate(145deg);
                    }

                    53% {
                        transform:
                            translate(
                                calc(-50% - 4px),
                                calc(-50% - 3px)
                            )
                            scale(0.72)
                            rotate(190deg);
                    }

                    60% {
                        opacity: 0.95;
                        transform:
                            translate(
                                calc(-50% + 1px),
                                calc(-50% - 1px)
                            )
                            scale(0.68)
                            rotate(225deg);
                    }

                    69% {
                        opacity: 0;
                        transform:
                            translate(-50%,-50%)
                            scale(0.18)
                            rotate(270deg);
                    }

                    100% {
                        opacity: 0;
                    }
                }

                @keyframes processContinuousTwo {
                    0%,
                    24% {
                        opacity: 0;
                        transform:
                            translate(-50%,-50%)
                            scale(0.2)
                            rotate(45deg);
                    }

                    29% {
                        opacity: 1;
                        transform:
                            translate(-50%,-50%)
                            scale(1)
                            rotate(45deg);
                    }

                    37% {
                        transform:
                            translate(
                                calc(-50% + 22px),
                                calc(-50% - 16px)
                            )
                            scale(0.92)
                            rotate(90deg);
                    }

                    45% {
                        opacity: 1;
                        transform:
                            translate(
                                calc(-50% + 11px),
                                calc(-50% - 8px)
                            )
                            scale(0.82)
                            rotate(145deg);
                    }

                    53% {
                        transform:
                            translate(
                                calc(-50% + 4px),
                                calc(-50% - 3px)
                            )
                            scale(0.72)
                            rotate(190deg);
                    }

                    60% {
                        opacity: 0.95;
                        transform:
                            translate(
                                calc(-50% - 1px),
                                calc(-50% - 1px)
                            )
                            scale(0.68)
                            rotate(225deg);
                    }

                    69% {
                        opacity: 0;
                        transform:
                            translate(-50%,-50%)
                            scale(0.18)
                            rotate(270deg);
                    }

                    100% {
                        opacity: 0;
                    }
                }

                @keyframes processContinuousThree {
                    0%,
                    24% {
                        opacity: 0;
                        transform:
                            translate(-50%,-50%)
                            scale(0.2)
                            rotate(45deg);
                    }

                    29% {
                        opacity: 1;
                        transform:
                            translate(-50%,-50%)
                            scale(1)
                            rotate(45deg);
                    }

                    37% {
                        transform:
                            translate(
                                calc(-50% - 22px),
                                calc(-50% + 16px)
                            )
                            scale(0.92)
                            rotate(90deg);
                    }

                    45% {
                        opacity: 1;
                        transform:
                            translate(
                                calc(-50% - 11px),
                                calc(-50% + 8px)
                            )
                            scale(0.82)
                            rotate(145deg);
                    }

                    53% {
                        transform:
                            translate(
                                calc(-50% - 4px),
                                calc(-50% + 3px)
                            )
                            scale(0.72)
                            rotate(190deg);
                    }

                    60% {
                        opacity: 0.95;
                        transform:
                            translate(
                                calc(-50% + 1px),
                                calc(-50% + 1px)
                            )
                            scale(0.68)
                            rotate(225deg);
                    }

                    69% {
                        opacity: 0;
                        transform:
                            translate(-50%,-50%)
                            scale(0.18)
                            rotate(270deg);
                    }

                    100% {
                        opacity: 0;
                    }
                }

                @keyframes processContinuousFour {
                    0%,
                    24% {
                        opacity: 0;
                        transform:
                            translate(-50%,-50%)
                            scale(0.2)
                            rotate(45deg);
                    }

                    29% {
                        opacity: 1;
                        transform:
                            translate(-50%,-50%)
                            scale(1)
                            rotate(45deg);
                    }

                    37% {
                        transform:
                            translate(
                                calc(-50% + 22px),
                                calc(-50% + 16px)
                            )
                            scale(0.92)
                            rotate(90deg);
                    }

                    45% {
                        opacity: 1;
                        transform:
                            translate(
                                calc(-50% + 11px),
                                calc(-50% + 8px)
                            )
                            scale(0.82)
                            rotate(145deg);
                    }

                    53% {
                        transform:
                            translate(
                                calc(-50% + 4px),
                                calc(-50% + 3px)
                            )
                            scale(0.72)
                            rotate(190deg);
                    }

                    60% {
                        opacity: 0.95;
                        transform:
                            translate(
                                calc(-50% - 1px),
                                calc(-50% + 1px)
                            )
                            scale(0.68)
                            rotate(225deg);
                    }

                    69% {
                        opacity: 0;
                        transform:
                            translate(-50%,-50%)
                            scale(0.18)
                            rotate(270deg);
                    }

                    100% {
                        opacity: 0;
                    }
                }

                /* =================================
                   ENGINE PROCESSING
                ================================= */

                #services-hero .engine-core {
                    animation:
                        engineProcessing
                        5.6s
                        ease-in-out
                        infinite;
                }

                #services-hero .engine-processing-glow {
                    animation:
                        engineGlow
                        5.6s
                        ease-in-out
                        infinite;
                }

                @keyframes engineProcessing {
                    0%,
                    24% {
                        transform:
                            translate3d(0,0,0)
                            scale(1);
                    }

                    35% {
                        transform:
                            translate3d(0,0,0)
                            scale(1.02);
                    }

                    48% {
                        transform:
                            translate3d(0,0,0)
                            scale(1.045);
                    }

                    62% {
                        transform:
                            translate3d(0,0,0)
                            scale(1.03);
                    }

                    76%,
                    100% {
                        transform:
                            translate3d(0,0,0)
                            scale(1);
                    }
                }

                @keyframes engineGlow {
                    0%,
                    24% {
                        opacity: 0.32;
                        transform:
                            translateX(-50%)
                            scale(0.78);
                    }

                    35% {
                        opacity: 0.58;
                    }

                    48% {
                        opacity: 1;
                        transform:
                            translateX(-50%)
                            scale(1.2);
                    }

                    62% {
                        opacity: 0.72;
                        transform:
                            translateX(-50%)
                            scale(1);
                    }

                    76%,
                    100% {
                        opacity: 0.32;
                        transform:
                            translateX(-50%)
                            scale(0.78);
                    }
                }

                /* =================================
                   OUTPUT QUEUE
                ================================= */

                #services-hero .flow-output {
                    position: absolute;
                    z-index: 35;
                    width: 7px;
                    height: 5px;
                    clip-path:
                        polygon(
                            0 50%,
                            24% 0,
                            100% 0,
                            100% 100%,
                            24% 100%
                        );
                    background:
                        linear-gradient(
                            90deg,
                            rgba(124,60,255,0.72),
                            rgba(255,255,255,0.95)
                        );
                    box-shadow:
                        0 0 10px
                        rgba(124,60,255,0.88);
                    opacity: 0;
                }

                #services-hero .output-packet-one {
                    animation:
                        outputQueueOne
                        5.6s
                        cubic-bezier(0.45,0,0.2,1)
                        0s
                        infinite;
                }

                #services-hero .output-packet-two {
                    animation:
                        outputQueueTwo
                        5.6s
                        cubic-bezier(0.45,0,0.2,1)
                        1.3s
                        infinite;
                }

                #services-hero .output-packet-three {
                    animation:
                        outputQueueThree
                        5.6s
                        cubic-bezier(0.45,0,0.2,1)
                        2.6s
                        infinite;
                }

                #services-hero .output-packet-four {
                    animation:
                        outputQueueFour
                        5.6s
                        cubic-bezier(0.45,0,0.2,1)
                        3.9s
                        infinite;
                }

                @keyframes outputQueueOne {
                    0%,
                    58% {
                        left: 50%;
                        top: 50%;
                        opacity: 0;
                        transform:
                            scale(0.2)
                            rotate(0deg);
                    }

                    63% {
                        left: 54%;
                        top: 50%;
                        opacity: 1;
                        transform:
                            scale(0.85)
                            rotate(-12deg);
                    }

                    73% {
                        left: 64%;
                        top: 49%;
                        opacity: 1;
                        transform:
                            scale(1)
                            rotate(-12deg);
                    }

                    86% {
                        left: 80%;
                        top: 43%;
                        opacity: 1;
                        transform:
                            scale(0.95)
                            rotate(-12deg);
                    }

                    91% {
                        opacity: 0;
                    }

                    100% {
                        opacity: 0;
                    }
                }

                @keyframes outputQueueTwo {
                    0%,
                    58% {
                        left: 50%;
                        top: 50%;
                        opacity: 0;
                        transform:
                            scale(0.2)
                            rotate(0deg);
                    }

                    63% {
                        left: 54%;
                        top: 50%;
                        opacity: 1;
                        transform:
                            scale(0.85)
                            rotate(-12deg);
                    }

                    73% {
                        left: 64%;
                        top: 50%;
                        opacity: 1;
                        transform:
                            scale(1)
                            rotate(-12deg);
                    }

                    86% {
                        left: 81%;
                        top: 50%;
                        opacity: 1;
                        transform:
                            scale(0.95)
                            rotate(-12deg);
                    }

                    91% {
                        opacity: 0;
                    }

                    100% {
                        opacity: 0;
                    }
                }

                @keyframes outputQueueThree {
                    0%,
                    58% {
                        left: 50%;
                        top: 50%;
                        opacity: 0;
                        transform:
                            scale(0.2)
                            rotate(0deg);
                    }

                    63% {
                        left: 54%;
                        top: 50%;
                        opacity: 1;
                        transform:
                            scale(0.85)
                            rotate(-12deg);
                    }

                    73% {
                        left: 64%;
                        top: 51%;
                        opacity: 1;
                        transform:
                            scale(1)
                            rotate(-12deg);
                    }

                    86% {
                        left: 80%;
                        top: 57%;
                        opacity: 1;
                        transform:
                            scale(0.95)
                            rotate(-12deg);
                    }

                    91% {
                        opacity: 0;
                    }

                    100% {
                        opacity: 0;
                    }
                }

                @keyframes outputQueueFour {
                    0%,
                    58% {
                        left: 50%;
                        top: 50%;
                        opacity: 0;
                        transform:
                            scale(0.2)
                            rotate(0deg);
                    }

                    63% {
                        left: 54%;
                        top: 50%;
                        opacity: 1;
                        transform:
                            scale(0.85)
                            rotate(-12deg);
                    }

                    73% {
                        left: 64%;
                        top: 49%;
                        opacity: 1;
                        transform:
                            scale(1)
                            rotate(-12deg);
                    }

                    86% {
                        left: 79%;
                        top: 53%;
                        opacity: 1;
                        transform:
                            scale(0.95)
                            rotate(-12deg);
                    }

                    91% {
                        opacity: 0;
                    }

                    100% {
                        opacity: 0;
                    }
                }

                /* =================================
                   OPERATIONS LIVE 3D STATUS
                ================================= */

                #services-hero .operations-rows {
                    perspective: 900px;
                    transform-style: preserve-3d;
                }

                #services-hero .operations-row {
                    position: relative;
                    overflow: hidden;
                    min-height: 24px;
                    padding: 7px 8px;
                    border:
                        1px solid
                        rgba(255,255,255,0.04);
                    border-radius: 9px;

                    background:
                        linear-gradient(
                            110deg,
                            rgba(12,48,98,0.22),
                            rgba(3,19,45,0.16)
                        );

                    box-shadow:
                        inset 0 1px 0
                        rgba(255,255,255,0.025);

                    opacity: 0.44;

                    transform:
                        translate3d(0,0,0)
                        scale(0.985);

                    transform-style: preserve-3d;

                    will-change:
                        transform,
                        opacity,
                        box-shadow,
                        background,
                        border-color;

                    animation:
                        operationsRowMotion
                        3.6s
                        cubic-bezier(0.4,0,0.2,1)
                        infinite;
                }

                #services-hero .operations-row-0 {
                    animation-delay: 0s;
                }

                #services-hero .operations-row-1 {
                    animation-delay: -2.4s;
                }

                #services-hero .operations-row-2 {
                    animation-delay: -1.2s;
                }

                /* =================================
                   ACTIVE ROW GLOW
                ================================= */

                #services-hero .operations-row-glow {
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;

                    background:
                        radial-gradient(
                            circle at 15% 50%,
                            rgba(25,211,255,0.16),
                            transparent 58%
                        );

                    opacity: 0;

                    transform:
                        translateZ(8px)
                        scale(0.9);

                    filter: blur(10px);

                    pointer-events: none;

                    animation:
                        operationsGlowMotion
                        3.6s
                        cubic-bezier(0.4,0,0.2,1)
                        infinite;
                }

                #services-hero .operations-row-0 .operations-row-glow {
                    animation-delay: 0s;
                }

                #services-hero .operations-row-1 .operations-row-glow {
                    animation-delay: -2.4s;
                }

                #services-hero .operations-row-2 .operations-row-glow {
                    animation-delay: -1.2s;
                }

                /* =================================
                   STATUS DOT
                ================================= */

                #services-hero .operations-status-dot {
                    background:
                        rgba(25,211,255,0.42);

                    box-shadow:
                        0 0 7px
                        rgba(25,211,255,0.35);

                    animation:
                        operationsDotMotion
                        3.6s
                        cubic-bezier(0.4,0,0.2,1)
                        infinite;
                }

                #services-hero .operations-row-0 .operations-status-dot {
                    animation-delay: 0s;
                }

                #services-hero .operations-row-1 .operations-status-dot {
                    animation-delay: -2.4s;
                }

                #services-hero .operations-row-2 .operations-status-dot {
                    animation-delay: -1.2s;
                }

                /* =================================
                   ROW LABEL
                ================================= */

                #services-hero .operations-row-label {
                    color: rgba(255,255,255,0.27);

                    animation:
                        operationsTextMotion
                        3.6s
                        cubic-bezier(0.4,0,0.2,1)
                        infinite;
                }

                #services-hero .operations-row-0 .operations-row-label {
                    animation-delay: 0s;
                }

                #services-hero .operations-row-1 .operations-row-label {
                    animation-delay: -2.4s;
                }

                #services-hero .operations-row-2 .operations-row-label {
                    animation-delay: -1.2s;
                }

                /* =================================
                   ROW VALUE
                ================================= */

                #services-hero .operations-row-value {
                    color: rgba(255,255,255,0.34);

                    animation:
                        operationsValueMotion
                        3.6s
                        cubic-bezier(0.4,0,0.2,1)
                        infinite;
                }

                #services-hero .operations-row-0 .operations-row-value {
                    animation-delay: 0s;
                }

                #services-hero .operations-row-1 .operations-row-value {
                    animation-delay: -2.4s;
                }

                #services-hero .operations-row-2 .operations-row-value {
                    animation-delay: -1.2s;
                }

                /* =================================
                   ROW 3D MOTION
                ================================= */

                @keyframes operationsRowMotion {
                    0%,
                    12% {
                        opacity: 0.44;

                        transform:
                            translate3d(0,0,0)
                            scale(0.985);

                        border-color:
                            rgba(255,255,255,0.04);

                        background:
                            linear-gradient(
                                110deg,
                                rgba(12,48,98,0.22),
                                rgba(3,19,45,0.16)
                            );

                        box-shadow:
                            inset 0 1px 0
                            rgba(255,255,255,0.025),
                            0 0 0
                            rgba(25,211,255,0);
                    }

                    16%,
                    28% {
                        opacity: 1;

                        transform:
                            translate3d(0,0,16px)
                            scale(1.025);

                        border-color:
                            rgba(25,211,255,0.16);

                        background:
                            linear-gradient(
                                110deg,
                                rgba(12,48,98,0.34),
                                rgba(3,19,45,0.26)
                            );

                        box-shadow:
                            inset 0 1px 0
                            rgba(255,255,255,0.10),
                            0 10px 22px
                            rgba(0,0,0,0.18),
                            0 0 22px
                            rgba(25,211,255,0.08);
                    }

                    34%,
                    100% {
                        opacity: 0.44;

                        transform:
                            translate3d(0,0,0)
                            scale(0.985);

                        border-color:
                            rgba(255,255,255,0.04);

                        background:
                            linear-gradient(
                                110deg,
                                rgba(12,48,98,0.22),
                                rgba(3,19,45,0.16)
                            );

                        box-shadow:
                            inset 0 1px 0
                            rgba(255,255,255,0.025),
                            0 0 0
                            rgba(25,211,255,0);
                    }
                }

                /* =================================
                   ACTIVE GLOW
                ================================= */

                @keyframes operationsGlowMotion {
                    0%,
                    12% {
                        opacity: 0;

                        transform:
                            translateZ(4px)
                            scale(0.9);
                    }

                    16%,
                    28% {
                        opacity: 1;

                        transform:
                            translateZ(10px)
                            scale(1.05);
                    }

                    34%,
                    100% {
                        opacity: 0;

                        transform:
                            translateZ(4px)
                            scale(0.9);
                    }
                }

                /* =================================
                   ACTIVE DOT
                ================================= */

                @keyframes operationsDotMotion {
                    0%,
                    12% {
                        background:
                            rgba(25,211,255,0.42);

                        box-shadow:
                            0 0 7px
                            rgba(25,211,255,0.35);

                        transform:
                            scale(1);
                    }

                    16%,
                    28% {
                        background:
                            rgba(25,211,255,1);

                        box-shadow:
                            0 0 5px
                            rgba(25,211,255,0.95),
                            0 0 14px
                            rgba(25,211,255,0.75);

                        transform:
                            scale(1.3);
                    }

                    34%,
                    100% {
                        background:
                            rgba(25,211,255,0.42);

                        box-shadow:
                            0 0 7px
                            rgba(25,211,255,0.35);

                        transform:
                            scale(1);
                    }
                }

                /* =================================
                   ACTIVE TEXT
                ================================= */

                @keyframes operationsTextMotion {
                    0%,
                    12% {
                        color:
                            rgba(255,255,255,0.27);

                        text-shadow:
                            none;
                    }

                    16%,
                    28% {
                        color:
                            rgba(255,255,255,0.82);

                        text-shadow:
                            0 0 10px
                            rgba(25,211,255,0.16);
                    }

                    34%,
                    100% {
                        color:
                            rgba(255,255,255,0.27);

                        text-shadow:
                            none;
                    }
                }

                /* =================================
                   ACTIVE VALUE
                ================================= */

                @keyframes operationsValueMotion {
                    0%,
                    12% {
                        color:
                            rgba(255,255,255,0.34);

                        text-shadow:
                            none;
                    }

                    16%,
                    28% {
                        color:
                            rgba(25,211,255,0.88);

                        text-shadow:
                            0 0 10px
                            rgba(25,211,255,0.22);
                    }

                    34%,
                    100% {
                        color:
                            rgba(255,255,255,0.34);

                        text-shadow:
                            none;
                    }
                }

                /* =================================
                   DASHBOARD
                ================================= */

                #services-hero .live-chart-bar {
                    transform-origin: bottom;

                    animation:
                        chartBarMotion
                        4.8s
                        ease-in-out
                        infinite;
                }

                #services-hero .live-chart-bar:nth-child(2) {
                    animation-delay: -0.35s;
                }

                #services-hero .live-chart-bar:nth-child(3) {
                    animation-delay: -0.7s;
                }

                #services-hero .live-chart-bar:nth-child(4) {
                    animation-delay: -1.05s;
                }

                #services-hero .live-chart-bar:nth-child(5) {
                    animation-delay: -1.4s;
                }

                #services-hero .live-chart-bar:nth-child(6) {
                    animation-delay: -1.75s;
                }

                #services-hero .live-chart-bar:nth-child(7) {
                    animation-delay: -2.1s;
                }

                #services-hero .live-chart-bar:nth-child(8) {
                    animation-delay: -2.45s;
                }

                @keyframes chartBarMotion {
                    0%,
                    100% {
                        transform: scaleY(0.88);
                    }

                    50% {
                        transform: scaleY(1.04);
                    }
                }

                /* =================================
                   RESPONSIVE
                ================================= */

                @media (max-width: 1023px) {
                    #services-hero .services-visual {
                        transform:
                            scale(0.90);
                        transform-origin:
                            center;
                    }
                }

                @media (max-width: 767px) {
                    #services-hero {
                        height: 75vh;
                    }

                    #services-hero .services-visual {
                        transform:
                            scale(0.70);
                        transform-origin:
                            center;
                    }
                }

                /* =================================
                   REDUCED MOTION
                ================================= */

                @media (prefers-reduced-motion: reduce) {
                    #services-hero .flow-input,
                    #services-hero .processing-packet,
                    #services-hero .flow-output,
                    #services-hero .engine-core,
                    #services-hero .engine-processing-glow,
                    #services-hero .live-chart-bar,
                    #services-hero .operations-row,
                    #services-hero .operations-row-glow,
                    #services-hero .operations-status-dot,
                    #services-hero .operations-row-label,
                    #services-hero .operations-row-value,
                    #services-hero .animate-\\[engineSpin_12s_linear_infinite\\] {
                        animation: none !important;
                    }

                    #services-hero .flow-input,
                    #services-hero .processing-packet,
                    #services-hero .flow-output {
                        opacity: 0.7;
                    }

                    #services-hero .operations-row {
                        opacity: 0.58;
                        transform: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default ServicesHero;