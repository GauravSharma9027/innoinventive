import {
    MapPin,
    Navigation,
    ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

import PremiumButton from "../../../components/UI/PremiumButton";
import PremiumIconBadge from "../../../components/UI/PremiumIconBadge";

const ContactMapSection = () => {
    return (
        <section
            id="contact-map"
            className="relative w-full overflow-hidden bg-[#061633] px-4 py-10 text-white sm:px-6 lg:px-8"
        >
            {/* Ambient Glow */}
            <div className="pointer-events-none absolute left-[8%] top-[25%] h-56 w-56 rounded-full bg-cyan-400/[0.05] blur-[110px]" />
            <div className="pointer-events-none absolute right-[8%] bottom-[10%] h-56 w-56 rounded-full bg-violet-500/[0.05] blur-[110px]" />

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                }}
                className="relative mx-auto w-full max-w-[1200px]"
            >
                {/* Section Header */}
                <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <div className="mb-2 flex items-center gap-3">
                            <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-cyan-300">
                                [04]
                            </span>

                            <span className="h-px w-7 bg-gradient-to-r from-cyan-300/70 to-transparent" />

                            <span className="text-[10px] font-semibold tracking-[0.18em] text-white/35">
                                FIND US
                            </span>
                        </div>

                        <h2 className="text-[26px] font-semibold tracking-[-0.04em] text-white sm:text-[34px]">
                            Let’s find the{" "}
                            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                                right point.
                            </span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-3">
                        <PremiumIconBadge
                            icon={MapPin}
                            size="default"
                        />

                        <div>
                            <p className="text-[11px] font-semibold text-white">
                                Our Location
                            </p>

                            <p className="mt-0.5 text-[10px] text-white/35">
                                Come say hello.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Map Container */}
                <div className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#031126] shadow-[0_30px_90px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]">
                    <div className="relative h-[340px] w-full max-h-[70vh] sm:h-[420px] lg:h-[500px] xl:h-[560px]">
                        {/* 
                            YOUR MAP GOES HERE

                            Example:
                            <iframe ... />
                            OR
                            <GoogleMap ... />
                            OR
                            <MapboxMap ... />
                        */}

                        <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(25,211,255,0.05),transparent_45%)]">
                            <div className="text-center">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/15 bg-cyan-300/[0.06]">
                                    <MapPin
                                        size={24}
                                        strokeWidth={1.5}
                                        className="text-cyan-300"
                                    />
                                </div>

                                <p className="mt-4 text-[13px] font-medium text-white/70">
                                    Map goes here
                                </p>

                                <p className="mt-1 text-[10px] text-white/30">
                                    Replace this container with your map component.
                                </p>
                            </div>
                        </div>

                        {/* Map Overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020B1A]/25 via-transparent to-transparent" />

                        {/* Location Badge */}
                        <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-[13px] border border-white/[0.08] bg-[#061633]/85 px-3 py-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                            <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-cyan-300/10">
                                <MapPin
                                    size={15}
                                    strokeWidth={1.6}
                                    className="text-cyan-300"
                                />
                            </span>

                            <div>
                                <p className="text-[10px] font-semibold text-white">
                                    InnoInventive
                                </p>

                                <p className="mt-0.5 text-[9px] text-white/35">
                                    Our office location
                                </p>
                            </div>
                        </div>

                        {/* Directions */}
                        <PremiumButton
                            label="Get Directions"
                            icon={Navigation}
                            onClick={() => {
                                window.open(
                                    "https://www.google.com/maps",
                                    "_blank",
                                    "noopener,noreferrer"
                                );
                            }}
                            className="absolute bottom-4 right-4"
                        />
                    </div>
                </div>

                {/* Bottom Note */}
                <div className="mt-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_9px_rgba(25,211,255,0.8)]" />

                        <span className="text-[10px] text-white/30">
                            Available for meetings &amp; consultations
                        </span>
                    </div>

                    <a
                        href="https://www.google.com/maps"
                        target="_blank"
                        rel="noreferrer"
                        className="group hidden items-center gap-1.5 text-[10px] font-medium text-white/40 transition-colors duration-300 hover:text-cyan-300 sm:flex"
                    >
                        Open in Maps
                        <ExternalLink
                            size={12}
                            strokeWidth={1.6}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactMapSection;