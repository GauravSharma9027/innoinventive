const PremiumIconBadge = ({ icon: Icon, size = "default" }) => {
    const SizeClasses = {
        default: "h-10 w-10",
        large: "h-12 w-12",
    };

    const IconSizes = {
        default: 17,
        large: 20,
    };

    return (
        <div className={`relative ${SizeClasses[size]} [perspective:700px]`}>
            <span className="absolute inset-0 translate-y-[4px] rounded-xl bg-[#020B20] shadow-[0_7px_16px_rgba(0,0,0,0.45)]" />

            <span className="absolute -inset-2 rounded-[18px] bg-cyan-400/10 blur-xl" />

            <div className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-cyan-300/25 bg-gradient-to-br from-[#12366B] via-[#0A2148] to-[#061633] text-cyan-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-2px_0_rgba(0,0,0,0.25),0_8px_25px_rgba(22,119,255,0.18)] transition-all duration-500 hover:-translate-y-1 hover:rotate-[4deg] hover:border-cyan-200/40 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_30px_rgba(25,211,255,0.18)]">
                <span className="pointer-events-none absolute inset-x-2 top-[1px] h-px rounded-full bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                <span className="pointer-events-none absolute -left-[45%] top-[-20%] h-[160%] w-[35%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100" />

                <span className="pointer-events-none absolute inset-2 rounded-lg bg-cyan-300/[0.03] shadow-[inset_0_0_18px_rgba(25,211,255,0.08)]" />

                <Icon
                    size={IconSizes[size]}
                    strokeWidth={1.8}
                    className="relative z-10 drop-shadow-[0_0_8px_rgba(25,211,255,0.45)]"
                />
            </div>

            <span className="absolute bottom-[1px] left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-70 blur-[1px]" />
        </div>
    );
};

export default PremiumIconBadge;