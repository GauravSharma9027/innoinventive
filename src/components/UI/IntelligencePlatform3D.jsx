/*
 * IntelligencePlatform3D.jsx
 *
 * Purpose:
 * Premium WebGL intelligence platform for the About page.
 *
 * Visual direction:
 * - Dark graphite / navy industrial metal
 * - Thin cyan energy edges
 * - Very restrained violet accent
 * - Real beveled 3D geometry
 * - No baked background / no image asset
 * - Subtle temporal motion for a premium "4D" feel
 */

import { Canvas, useFrame } from "@react-three/fiber";
import {
    ContactShadows,
    Sparkles,
    Torus,
} from "@react-three/drei";
import {
    Bloom,
    EffectComposer,
    Vignette,
} from "@react-three/postprocessing";
import { useMemo, useRef } from "react";
import { Shape } from "three";

const PLATE_CONFIG = [
    {
        radius: 3.9,
        thickness: 0.34,
        y: -0.78,
        accent: "#19D3FF",
        delay: -1.4,
        speed: 0.08,
    },
    {
        radius: 3.28,
        thickness: 0.31,
        y: -0.46,
        accent: "#1677FF",
        delay: -2.8,
        speed: -0.11,
    },
    {
        radius: 2.72,
        thickness: 0.28,
        y: -0.17,
        accent: "#19D3FF",
        delay: -0.9,
        speed: 0.14,
    },
    {
        radius: 2.22,
        thickness: 0.25,
        y: 0.08,
        accent: "#7C3CFF",
        delay: -3.7,
        speed: -0.16,
    },
];

const DARK_METAL = "#071327";
const DARKER_METAL = "#020917";
const BLUE_METAL = "#0A1C36";

const useBeveledDiscShape = (radius) => {
    return useMemo(() => {
        const DiscShape = new Shape();
        DiscShape.absarc(
            0,
            0,
            radius,
            0,
            Math.PI * 2,
            false,
        );
        return DiscShape;
    }, [radius]);
};

const MetalMaterial = ({
    color = DARK_METAL,
    roughness = 0.3,
    metalness = 0.96,
}) => (
    <meshPhysicalMaterial
        color={color}
        metalness={metalness}
        roughness={roughness}
        clearcoat={0.8}
        clearcoatRoughness={0.16}
    />
);

const EnergyMaterial = ({
    color,
    intensity = 1.2,
}) => (
    <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={intensity}
        metalness={0.35}
        roughness={0.2}
        toneMapped={false}
    />
);

const BeveledPlate = ({ plate, index }) => {
    const GroupRef = useRef(null);
    const Shape = useBeveledDiscShape(plate.radius);

    useFrame((state) => {
        if (!GroupRef.current) {
            return;
        }

        const Time = state.clock.elapsedTime;
        const Drift = Math.sin(
            Time * 0.55 + index * 0.85,
        );

        GroupRef.current.position.y =
            plate.y + Drift * 0.014;
        GroupRef.current.rotation.z =
            Drift * 0.004;
    });

    const ExtrudeSettings = useMemo(
        () => ({
            depth: plate.thickness,
            steps: 1,
            bevelEnabled: true,
            bevelSegments: 4,
            bevelSize: 0.045,
            bevelThickness: 0.055,
            curveSegments: 64,
        }),
        [plate.thickness],
    );

    return (
        <group ref={GroupRef}>
            {/* Deep lower extrusion */}
            <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -0.08, 0]}
                scale={[1.015, 1.015, 1]}
                castShadow
                receiveShadow
            >
                <cylinderGeometry
                    args={[
                        plate.radius * 0.96,
                        plate.radius * 0.99,
                        0.16,
                        128,
                    ]}
                />
                <MetalMaterial color={DARKER_METAL} roughness={0.22} />
            </mesh>

            {/* Actual beveled plate */}
            <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                castShadow
                receiveShadow
            >
                <extrudeGeometry
                    args={[Shape, ExtrudeSettings]}
                    attach="geometry"
                />
                <MetalMaterial
                    color={
                        index % 2 === 0
                            ? DARK_METAL
                            : BLUE_METAL
                    }
                    roughness={0.26 + index * 0.015}
                />
            </mesh>

            {/* Upper micro-lip */}
            <Torus
                args={[
                    plate.radius * 0.93,
                    0.045,
                    10,
                    160,
                ]}
                rotation={[Math.PI / 2, 0, 0]}
                position={[0, plate.thickness + 0.025, 0]}
            >
                <meshPhysicalMaterial
                    color={"#0B203D"}
                    metalness={0.98}
                    roughness={0.2}
                    clearcoat={1}
                    clearcoatRoughness={0.12}
                />
            </Torus>

            {/* Thin energy rim */}
            <Torus
                args={[
                    plate.radius * 0.885,
                    0.012,
                    8,
                    160,
                ]}
                rotation={[Math.PI / 2, 0, 0]}
                position={[0, plate.thickness + 0.05, 0]}
            >
                <EnergyMaterial
                    color={plate.accent}
                    intensity={1.65}
                />
            </Torus>

            {/* Inner machined groove */}
            <Torus
                args={[
                    plate.radius * 0.66,
                    0.008,
                    8,
                    144,
                ]}
                rotation={[Math.PI / 2, 0, 0]}
                position={[0, plate.thickness + 0.052, 0]}
            >
                <meshBasicMaterial
                    color={plate.accent}
                    transparent
                    opacity={0.24}
                    toneMapped={false}
                />
            </Torus>

            {/* Sparse precision studs */}
            {Array.from({ length: 10 }).map((_, StudIndex) => {
                const Angle =
                    (StudIndex / 10) * Math.PI * 2;
                const Radius = plate.radius * 0.81;

                return (
                    <mesh
                        key={`${index}-${StudIndex}`}
                        position={[
                            Math.cos(Angle) * Radius,
                            plate.thickness + 0.06,
                            Math.sin(Angle) * Radius,
                        ]}
                    >
                        <sphereGeometry
                            args={[0.018, 10, 10]}
                        />
                        <EnergyMaterial
                            color={plate.accent}
                            intensity={0.65}
                        />
                    </mesh>
                );
            })}
        </group>
    );
};

const PlatformCoreRing = ({
    radius,
    tube,
    color,
    speed,
    tilt = 0,
}) => {
    const Ref = useRef(null);

    useFrame((_, delta) => {
        if (!Ref.current) {
            return;
        }

        Ref.current.rotation.z +=
            delta * speed;
        Ref.current.rotation.y =
            tilt;
    });

    return (
        <Torus
            ref={Ref}
            args={[radius, tube, 10, 180]}
            rotation={[Math.PI / 2, 0, 0]}
        >
            <meshBasicMaterial
                color={color}
                transparent
                opacity={0.72}
                toneMapped={false}
            />
        </Torus>
    );
};

const PrecisionCore = () => {
    const GroupRef = useRef(null);
    const InnerRingRef = useRef(null);

    useFrame((state, delta) => {
        if (!GroupRef.current) {
            return;
        }

        const Time = state.clock.elapsedTime;

        GroupRef.current.position.y =
            0.42 + Math.sin(Time * 1.1) * 0.025;

        GroupRef.current.rotation.y +=
            delta * 0.08;

        GroupRef.current.rotation.x =
            Math.sin(Time * 0.5) * 0.025;

        if (InnerRingRef.current) {
            InnerRingRef.current.rotation.z -=
                delta * 0.35;
        }
    });

    return (
        <group ref={GroupRef}>
            {/* Central landing deck */}
            <mesh castShadow receiveShadow>
                <cylinderGeometry
                    args={[1.22, 1.36, 0.18, 128]}
                />
                <MetalMaterial
                    color="#030B19"
                    roughness={0.2}
                />
            </mesh>

            <Torus
                args={[1.18, 0.028, 10, 180]}
                rotation={[Math.PI / 2, 0, 0]}
            >
                <EnergyMaterial
                    color="#19D3FF"
                    intensity={1.3}
                />
            </Torus>

            <Torus
                ref={InnerRingRef}
                args={[0.92, 0.015, 8, 144]}
                rotation={[Math.PI / 2, 0.2, 0.1]}
            >
                <meshBasicMaterial
                    color="#7C3CFF"
                    transparent
                    opacity={0.5}
                    toneMapped={false}
                />
            </Torus>

            <Torus
                args={[0.62, 0.009, 8, 128]}
                rotation={[0.82, 0.25, 0]}
            >
                <meshBasicMaterial
                    color="#19D3FF"
                    transparent
                    opacity={0.7}
                    toneMapped={false}
                />
            </Torus>

            {/* Reactor light well */}
            <mesh position={[0, 0.11, 0]}>
                <cylinderGeometry
                    args={[0.42, 0.55, 0.05, 96]}
                />
                <meshStandardMaterial
                    color="#041125"
                    emissive="#19D3FF"
                    emissiveIntensity={0.32}
                    metalness={0.7}
                    roughness={0.24}
                />
            </mesh>

            <PlatformCoreRing
                radius={0.72}
                tube={0.007}
                color="#19D3FF"
                speed={0.55}
                tilt={0.12}
            />

            <PlatformCoreRing
                radius={0.5}
                tube={0.006}
                color="#1677FF"
                speed={-0.7}
                tilt={-0.18}
            />
        </group>
    );
};

const PlatformEnergyArcs = () => {
    const ArcRefs = useRef([]);

    useFrame((_, delta) => {
        ArcRefs.current.forEach((Arc, index) => {
            if (!Arc) {
                return;
            }

            Arc.rotation.z +=
                delta * (index % 2 === 0 ? 0.16 : -0.12);
        });
    });

    return (
        <group position={[0, -0.22, 0]}>
            {[0, 1, 2].map((Index) => (
                <Torus
                    key={Index}
                    ref={(Element) => {
                        ArcRefs.current[Index] = Element;
                    }}
                    args={[
                        2.0 + Index * 0.72,
                        0.006,
                        8,
                        160,
                    ]}
                    rotation={[
                        Math.PI / 2,
                        Index * 0.09,
                        Index * 0.25,
                    ]}
                >
                    <meshBasicMaterial
                        color={
                            Index === 1
                                ? "#7C3CFF"
                                : "#19D3FF"
                        }
                        transparent
                        opacity={0.14 - Index * 0.025}
                        toneMapped={false}
                    />
                </Torus>
            ))}
        </group>
    );
};

const PlatformScene = () => {
    const AssemblyRef = useRef(null);

    useFrame((state) => {
        if (!AssemblyRef.current) {
            return;
        }

        const Time = state.clock.elapsedTime;
        const PointerX = state.pointer.x;
        const PointerY = state.pointer.y;

        AssemblyRef.current.rotation.y +=
            (PointerX * 0.035 -
                AssemblyRef.current.rotation.y) *
            0.018;

        AssemblyRef.current.rotation.x +=
            (-PointerY * 0.018 -
                AssemblyRef.current.rotation.x) *
            0.018;

        AssemblyRef.current.position.y =
            Math.sin(Time * 0.48) * 0.018;
    });

    return (
        <>
            {/* Neutral studio lighting */}
            <ambientLight intensity={0.34} color="#A8C7E8" />

            <hemisphereLight
                args={[
                    "#153C6A",
                    "#01050D",
                    0.68,
                ]}
            />

            <directionalLight
                position={[-4, 6, 5]}
                intensity={2.4}
                color="#B8E7FF"
                castShadow
            />

            <pointLight
                position={[-4, 1.6, 3.5]}
                intensity={2.4}
                distance={10}
                color="#19D3FF"
            />

            <pointLight
                position={[4, 1.7, -1.5]}
                intensity={1.5}
                distance={9}
                color="#7C3CFF"
            />

            <group
                ref={AssemblyRef}
                position={[0, -0.48, 0]}
                scale={0.92}
            >
                {PLATE_CONFIG.map((Plate, index) => (
                    <BeveledPlate
                        key={`${Plate.radius}-${index}`}
                        plate={Plate}
                        index={index}
                    />
                ))}

                <PlatformEnergyArcs />
                <PrecisionCore />
            </group>

            {/* Sparse premium particles */}
            <Sparkles
                count={34}
                scale={[7.5, 2.2, 5.5]}
                size={1.25}
                speed={0.12}
                noise={0.7}
                color="#7FDFFF"
            />

            <Sparkles
                count={12}
                scale={[6.5, 1.7, 4.5]}
                size={1.1}
                speed={0.08}
                noise={0.45}
                color="#A995FF"
            />

            {/* Floor shadow only — no background rectangle */}
            <ContactShadows
                position={[0, -1.52, 0]}
                opacity={0.48}
                scale={8}
                blur={2.8}
                far={4.5}
                color="#000000"
            />

            <EffectComposer>
                <Bloom
                    intensity={0.72}
                    luminanceThreshold={0.86}
                    luminanceSmoothing={0.78}
                    mipmapBlur
                />

                <Vignette
                    eskil={false}
                    offset={0.2}
                    darkness={0.28}
                />
            </EffectComposer>
        </>
    );
};

function IntelligencePlatform3D({
    className = "",
    heightClass =
    "h-[235px] sm:h-[255px] lg:h-[275px]",
}) {
    return (
        <div
            className={`relative w-full overflow-hidden ${heightClass} ${className}`}
            style={{
                touchAction: "none",
            }}
        >
            <Canvas
                dpr={[1, 1.6]}
                camera={{
                    position: [0, 2.65, 9.6],
                    fov: 30,
                    near: 0.1,
                    far: 100,
                }}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance",
                }}
                shadows
                fallback={
                    <div className="flex h-full items-center justify-center text-[8px] uppercase tracking-[0.22em] text-cyan-200/35">
                        WebGL unavailable
                    </div>
                }
            >
                <PlatformScene />
            </Canvas>
        </div>
    );
}

export default IntelligencePlatform3D;
