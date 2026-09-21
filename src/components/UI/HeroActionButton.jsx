import { NavLink } from "react-router-dom";

const HeroActionButton = ({
    label,
    icon: Icon,
    to,
    variant = "primary",
    onClick,
}) => {
    const IsPrimaryButton = variant === "primary";

    const ButtonClasses = IsPrimaryButton
        ? "border-cyan-200/25 bg-gradient-to-r from-[#19D3FF] via-[#1677FF] to-[#7C3CFF] text-white shadow-[0_7px_0_#082B69,0_16px_35px_rgba(22,119,255,0.25)] hover:-translate-y-1 hover:shadow-[0_9px_0_#082B69,0_22px_45px_rgba(124,60,255,0.3)] active:translate-y-[3px] active:shadow-[0_3px_0_#082B69,0_10px_20px_rgba(22,119,255,0.2)]"
        : "border-blue-300/25 bg-gradient-to-br from-[#12366B] via-[#0A2148] to-[#061633] text-white shadow-[0_6px_0_#020B20,0_15px_30px_rgba(2,15,45,0.45)] hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_8px_0_#020B20,0_20px_40px_rgba(22,119,255,0.2)] active:translate-y-[3px] active:shadow-[0_2px_0_#020B20,0_8px_20px_rgba(22,119,255,0.15)]";

    const ButtonContent = (
        <>
            <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

            <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.12] to-transparent opacity-70" />

            <span className="relative z-10 whitespace-nowrap">
                {label}
            </span>

            <span className="relative z-10 flex h-5 w-5 items-center justify-center [perspective:600px]">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition-transform duration-300 group-hover:scale-110">
                    <Icon
                        size={17}
                        strokeWidth={2}
                        className="action-button-icon"
                    />
                </span>
            </span>
        </>
    );

    const CommonClasses = `group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border px-6 py-2 text-sm font-semibold transition-all duration-300 ease-out ${ButtonClasses}`;

    if (to) {
        return (
            <NavLink
                to={to}
                className={CommonClasses}
            >
                {ButtonContent}
            </NavLink>
        );
    }

    return (
        <button
            type="button"
            onClick={onClick}
            className={CommonClasses}
        >
            {ButtonContent}
        </button>
    );
};

export default HeroActionButton;