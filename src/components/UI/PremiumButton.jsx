import { NavLink } from "react-router-dom";

const PremiumButton = ({
    label,
    to,
    icon: Icon,
    className = "",
}) => {
    return (
        <NavLink
            to={to}
            className={`group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-cyan-200/25 bg-gradient-to-r from-[#19D3FF] via-[#1677FF] to-[#7C3CFF] px-7 py-2 text-sm font-semibold text-white shadow-[0_8px_0_rgba(8,43,105,0.9),0_18px_35px_rgba(22,119,255,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_0_rgba(8,43,105,0.9),0_22px_45px_rgba(124,60,255,0.3)] active:translate-y-1 active:shadow-[0_3px_0_rgba(8,43,105,0.9),0_8px_20px_rgba(22,119,255,0.2)] ${className}`}
        >
            <span className="absolute inset-x-0 top-0 h-px bg-white/40" />
            <span className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent opacity-60" />

            <span className="relative">
                {label}
            </span>

            {Icon && (
                <Icon
                    size={18}
                    className="relative transition-transform duration-300 group-hover:translate-x-1"
                />
            )}
        </NavLink>
    );
};

export default PremiumButton;