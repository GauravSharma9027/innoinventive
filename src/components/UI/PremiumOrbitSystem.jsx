const PremiumOrbitSystem = () => {
    return (
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[390px] w-[500px] -translate-x-1/2 -translate-y-1/2 [perspective:1400px]">

            {/* Ambient Energy */}
            <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[90px] animate-pulse" />

            {/* Back Orbital Ring */}
            <div className="absolute left-1/2 top-1/2 h-[250px] w-[460px] -translate-x-1/2 -translate-y-1/2 rotate-[18deg] rounded-[50%] border border-blue-400/10 [transform:rotateX(58deg)_rotateZ(18deg)] animate-[spin_26s_linear_infinite]" />

            {/* Main Cyan Orbit */}
            <div className="absolute left-1/2 top-1/2 h-[210px] w-[430px] -translate-x-1/2 -translate-y-1/2 [transform:rotateX(62deg)_rotateZ(-12deg)]">
                <div className="absolute inset-0 rounded-[50%] border border-cyan-300/15 shadow-[0_0_18px_rgba(25,211,255,0.05)]" />

                <div className="absolute inset-0 rounded-[50%] border border-transparent bg-[conic-gradient(from_90deg,transparent_0deg,rgba(25,211,255,0.7)_35deg,transparent_70deg,transparent_180deg,rgba(25,211,255,0.35)_215deg,transparent_255deg)] [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude] p-[1px] animate-[spin_16s_linear_infinite]" />
            </div>

            {/* Violet Orbit */}
            <div className="absolute left-1/2 top-1/2 h-[180px] w-[390px] -translate-x-1/2 -translate-y-1/2 [transform:rotateX(58deg)_rotateZ(28deg)]">
                <div className="absolute inset-0 rounded-[50%] border border-violet-400/15 shadow-[0_0_20px_rgba(124,60,255,0.06)]" />

                <div className="absolute inset-0 rounded-[50%] border border-transparent bg-[conic-gradient(from_250deg,transparent_0deg,rgba(124,60,255,0.7)_40deg,transparent_75deg,transparent_200deg,rgba(25,211,255,0.45)_235deg,transparent_275deg)] [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude] p-[1px] animate-[spin_22s_linear_infinite_reverse]" />
            </div>

            {/* Front Orbit */}
            <div className="absolute left-1/2 top-1/2 h-[125px] w-[360px] -translate-x-1/2 -translate-y-1/2 [transform:rotateX(66deg)_rotateZ(-24deg)]">
                <div className="absolute inset-0 rounded-[50%] border border-cyan-200/10" />

                <div className="absolute inset-0 rounded-[50%] border border-transparent bg-[conic-gradient(from_40deg,transparent_0deg,rgba(34,211,238,0.8)_28deg,transparent_55deg,transparent_170deg,rgba(59,130,246,0.45)_205deg,transparent_235deg)] [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude] p-[1px] animate-[spin_13s_linear_infinite]" />
            </div>

            {/* Moving Cyan Light */}
            <div className="absolute left-[20%] top-[36%] h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_8px_rgba(25,211,255,0.9),0_0_22px_rgba(25,211,255,0.45)] animate-[orbitPulse_3.5s_ease-in-out_infinite]" />

            {/* Moving Violet Light */}
            <div className="absolute right-[18%] top-[28%] h-2.5 w-2.5 rounded-full bg-violet-300 shadow-[0_0_8px_rgba(167,139,250,0.9),0_0_20px_rgba(124,60,255,0.45)] animate-[orbitPulse_4.5s_ease-in-out_infinite_reverse]" />

            {/* Tiny Particle */}
            <div className="absolute bottom-[22%] left-[30%] h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.9)] animate-pulse" />

            {/* Tiny Particle */}
            <div className="absolute right-[28%] bottom-[30%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(25,211,255,0.9)] animate-pulse" />

            {/* Soft Floor Reflection */}
            <div className="absolute left-1/2 bottom-[8%] h-[35px] w-[250px] -translate-x-1/2 rounded-[50%] bg-cyan-400/10 blur-[35px]" />
        </div>
    );
};

export default PremiumOrbitSystem;