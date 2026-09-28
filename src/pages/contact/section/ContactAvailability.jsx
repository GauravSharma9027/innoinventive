import {
    ArrowUpRight,
    Clock3,
    Mail,
    MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

import PremiumButton from "../../../components/UI/PremiumButton";
import PremiumIconBadge from "../../../components/UI/PremiumIconBadge";

const ContactAvailability = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#061633] px-4 py-10 text-white sm:px-6 lg:px-8">
            {/* Ambient Glow */}
            <div className="pointer-events-none absolute left-[15%] top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-cyan-400/[0.06] blur-[90px]" />
            <div className="pointer-events-none absolute right-[12%] top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-violet-500/[0.05] blur-[90px]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="relative mx-auto flex w-full max-w-[1100px] flex-col gap-5 overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.025] px-5 py-5 shadow-[0_25px_70px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:px-7"
            >
                {/* Left */}
                <div className="flex items-center gap-4">
                    <PremiumIconBadge
                        icon={MessageCircle}
                        size="default"
                    />

                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-white sm:text-[17px]">
                                Let’s talk about your idea.
                            </h3>

                            <span className="hidden h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(25,211,255,0.8)] sm:block" />
                        </div>

                        <p className="mt-1 text-[10px] leading-[1.5] text-white/38 sm:text-[11px]">
                            A simple conversation can be the start of something great.
                        </p>
                    </div>
                </div>

                {/* Middle */}
                <div className="flex items-center gap-4 sm:gap-6">
                    <div className="flex items-center gap-2.5">
                        <Clock3
                            size={15}
                            strokeWidth={1.6}
                            className="text-cyan-300"
                        />

                        <span className="text-[10px] font-medium text-white/55 sm:text-[11px]">
                            Usually replies within 24 hours
                        </span>
                    </div>

                    <div className="hidden h-5 w-px bg-white/[0.08] sm:block" />

                    <a
                        href="mailto:gauravsharma902753@gmail.com"
                        className="group hidden items-center gap-2.5 sm:flex"
                    >
                        <Mail
                            size={15}
                            strokeWidth={1.6}
                            className="text-blue-300"
                        />

                        <span className="text-[10px] text-white/50 transition-colors duration-300 group-hover:text-cyan-300">
                            Email us
                        </span>
                    </a>
                </div>

                {/* CTA */}
                <PremiumButton
                    label="Get In Touch"
                    icon={ArrowUpRight}
                    onClick={() => {
                        document
                            .getElementById("contact-form")
                            ?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            });
                    }}
                />

                {/* Bottom Accent */}
                <span className="pointer-events-none absolute bottom-0 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
            </motion.div>
        </section>
    );
};

export default ContactAvailability;