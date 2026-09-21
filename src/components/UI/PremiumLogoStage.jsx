import Logo from "../../assets/Logo.png";

const PremiumLogoStage = () => {
    return (
        <div className="group relative flex h-[190px] w-[190px] items-center justify-center [perspective:1200px]">

            <style>
                {`
                    @keyframes LogoFloat {
                        0%, 100% {
                            transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg);
                        }

                        50% {
                            transform: translate3d(0, -10px, 0) rotateX(2deg) rotateY(-3deg);
                        }
                    }

                    @keyframes ReactorRotate {
                        from {
                            transform: translate(-50%, -50%) rotateX(68deg) rotateZ(0deg);
                        }

                        to {
                            transform: translate(-50%, -50%) rotateX(68deg) rotateZ(360deg);
                        }
                    }

                    @keyframes ReactorReverse {
                        from {
                            transform: translate(-50%, -50%) rotateX(68deg) rotateZ(360deg);
                        }

                        to {
                            transform: translate(-50%, -50%) rotateX(68deg) rotateZ(0deg);
                        }
                    }

                    @keyframes ReactorPulse {
                        0%, 100% {
                            opacity: 0.35;
                            transform: translate(-50%, -50%) scale(0.94);
                        }

                        50% {
                            opacity: 0.8;
                            transform: translate(-50%, -50%) scale(1.05);
                        }
                    }

                    @keyframes ReactorBeam {
                        0% {
                            transform: translateX(-140%) skewX(-18deg);
                            opacity: 0;
                        }

                        20% {
                            opacity: 0.15;
                        }

                        48% {
                            opacity: 0.85;
                        }

                        72% {
                            opacity: 0.12;
                        }

                        100% {
                            transform: translateX(220%) skewX(-18deg);
                            opacity: 0;
                        }
                    }

                    @keyframes ReactorParticle {
                        0%, 100% {
                            transform: translateY(0) scale(0.7);
                            opacity: 0.3;
                        }

                        50% {
                            transform: translateY(-7px) scale(1);
                            opacity: 1;
                        }
                    }

                    .logo-float {
                        animation: LogoFloat 4.6s ease-in-out infinite;
                        transform-style: preserve-3d;
                    }

                    .group:hover .logo-float {
                        animation-duration: 2.8s;
                        filter: drop-shadow(0 0 18px rgba(25, 211, 255, 0.35));
                    }

                    .reactor-rotate {
                        animation: ReactorRotate 16s linear infinite;
                    }

                    .reactor-reverse {
                        animation: ReactorReverse 11s linear infinite;
                    }

                    .reactor-pulse {
                        animation: ReactorPulse 3.8s ease-in-out infinite;
                    }

                    .reactor-beam {
                        animation: ReactorBeam 4.8s ease-in-out infinite;
                    }

                    .reactor-particle {
                        animation: ReactorParticle 2.8s ease-in-out infinite;
                    }
                `}
            </style>

            {/* Deep atmospheric glow */}
            <div className="absolute left-1/2 top-1/2 h-[125px] w-[125px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[42px]" />

            <div className="absolute left-1/2 top-[67%] h-[80px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[35px]" />

            {/* 3D reactor base */}
            <div className="absolute left-1/2 top-[66%] h-[105px] w-[180px] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]">

                {/* Deep shadow */}
                <div className="absolute left-1/2 top-[62%] h-[28px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-black/60 blur-[15px]" />

                {/* Outer holographic shell */}
                <div className="reactor-rotate absolute left-1/2 top-1/2 h-[86px] w-[178px] rounded-[50%] border border-cyan-300/25 border-t-cyan-200/75 border-r-blue-400/45 bg-gradient-to-b from-cyan-300/[0.04] via-blue-500/[0.03] to-transparent shadow-[0_0_30px_rgba(25,211,255,0.15)]" />

                {/* Secondary depth ring */}
                <div className="reactor-reverse absolute left-1/2 top-1/2 h-[67px] w-[142px] rounded-[50%] border border-violet-400/20 border-b-violet-300/60 border-l-cyan-400/30" />

                {/* Inner glowing ring */}
                <div className="reactor-pulse absolute left-1/2 top-1/2 h-[50px] w-[108px] rounded-[50%] border border-cyan-300/25 bg-gradient-to-r from-cyan-300/[0.03] via-blue-400/[0.07] to-violet-400/[0.03)] shadow-[inset_0_0_20px_rgba(25,211,255,0.08)]" />

                {/* Holographic energy floor */}
                <div className="absolute left-1/2 top-1/2 h-[37px] w-[84px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-blue-300/20 bg-[radial-gradient(ellipse_at_center,rgba(25,211,255,0.12),rgba(22,119,255,0.03),transparent_70%)] [transform:rotateX(68deg)]" />

                {/* Energy sweep */}
                <div className="reactor-beam absolute left-[8%] top-[49%] h-[2px] w-[80px] rounded-full bg-gradient-to-r from-transparent via-cyan-200/90 to-transparent blur-[1px]" />

                {/* Reactor center */}
                <div className="absolute left-1/2 top-1/2 h-[18px] w-[54px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-cyan-300/15 blur-[10px]" />

                <div className="absolute left-1/2 top-1/2 h-[7px] w-[40px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-cyan-200/50 bg-cyan-300/10 shadow-[0_0_15px_rgba(25,211,255,0.55)]" />

                {/* Particles */}
                <span className="reactor-particle absolute left-[17%] top-[38%] h-[4px] w-[4px] rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(25,211,255,0.9)]" />

                <span className="reactor-particle absolute right-[17%] top-[28%] h-[3px] w-[3px] rounded-full bg-blue-300 shadow-[0_0_10px_rgba(22,119,255,0.9)]" style={{ animationDelay: "0.8s" }} />

                <span className="reactor-particle absolute right-[25%] bottom-[22%] h-[4px] w-[4px] rounded-full bg-violet-300 shadow-[0_0_10px_rgba(124,60,255,0.9)]" style={{ animationDelay: "1.5s" }} />
            </div>

            {/* Floating logo */}
            <div className="logo-float relative z-20 flex h-[108px] w-[108px] items-center justify-center rounded-full border border-cyan-200/15 bg-[#061633]/55 shadow-[0_0_50px_rgba(22,119,255,0.22),inset_0_0_25px_rgba(25,211,255,0.06)] backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.04]">

                {/* Logo ambient glow */}
                <div className="absolute inset-[12px] rounded-full bg-cyan-400/10 blur-[20px]" />

                {/* Logo glass highlight */}
                <div className="pointer-events-none absolute inset-[7px] rounded-full border border-white/[0.08]" />

                <img src={Logo} alt="InnoInventive" className="relative z-10 w-[78px] object-contain drop-shadow-[0_0_12px_rgba(25,211,255,0.28)]" />
            </div>
        </div>
    );
};

export default PremiumLogoStage;