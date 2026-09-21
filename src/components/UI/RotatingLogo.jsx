import Logo from "../../assets/Logo.png";

const RotatingLogo = () => {
    return (
        <div className="relative flex h-36 w-36 items-center justify-center [perspective:1000px]">
            <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl animate-pulse" />

            <div className="relative flex h-full w-full items-center justify-center [transform-style:preserve-3d] animate-[LogoRotate_10s_linear_infinite]">
                <img
                    src={Logo}
                    alt="InnoInventive"
                    className="w-[118px] object-contain"
                />
            </div>
        </div>
    );
};

export default RotatingLogo;