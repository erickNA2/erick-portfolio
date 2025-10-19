"use client";

import * as THREE from "three";
import { useState, useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
	CameraShake,
	useTexture,
	MeshReflectorMaterial,
	FirstPersonControls,
} from "@react-three/drei";
import { KernelSize } from "postprocessing";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";

type TriangleProps = {
	color: string;
	[key: string]: any;
};

function Triangle({ color, ...props }: TriangleProps) {
	const ref = useRef<THREE.Mesh>(null!);
	const [r] = useState(() => Math.random() * 10000);

	const { paths } = useLoader(SVGLoader, "/triangle.svg");

	const geom = useMemo(() => {
		const shapes = paths[0].toShapes(true);
		return new THREE.ShapeGeometry(shapes);
	}, [paths]);

	useFrame((state) => {
		if (ref.current) {
			ref.current.position.y =
				-1.75 + Math.sin(state.clock.elapsedTime + r) / 10;
		}
	});

	return (
		<group ref={ref}>
			<mesh geometry={geom} {...props}>
				<meshBasicMaterial color={color} toneMapped={false} />
			</mesh>
		</group>
	);
}

function Ground(props: any) {
	const [floor, normal] = useTexture([
		"/SurfaceImperfections003_1K_var1.jpg",
		"/SurfaceImperfections003_1K_Normal.jpg",
	]);

	return (
		<mesh rotation={[-Math.PI / 2, 0, Math.PI / 2]} position-y={-0.8}>
			<planeGeometry args={[8, 8]} />
			<MeshReflectorMaterial
				resolution={1024}
				mirror={1}
				blur={[500, 100]}
				mixBlur={12}
				mixStrength={1.5}
				color="#f0f0f0"
				metalness={0}
				roughnessMap={floor}
				normalMap={normal}
				normalScale={[2, 2]}
				{...props}
			/>
		</mesh>
	);
}

export default function AnimatedBg() {
	return (
		<div className="fixed top-0 left-0 z-0 w-screen h-screen m-0 p-0">
			<Canvas
				dpr={[1, 1.5]}
				camera={{ position: [-0.6, 0, 1] }}
				className="relative w-full h-full"
			>
				<color attach="background" args={["rgb(11, 11, 11)"]} />
				<ambientLight />
				<Suspense fallback={null}>
					<Triangle
						color="#91eaff"
						scale={0.008}
						rotation={[0, 0, Math.PI / 3]}
					/>
					<Triangle
						color="#ffc5c4"
						scale={0.009}
						position={[2, 2, -2]}
						rotation={[0, 0, Math.PI / 3]}
					/>

					{/* <Triangle color="#f2fedc" scale={0.009} position={[0, 3, -10]} rotation={[0, 0, Math.PI / 3]} />  */}
					<Ground />

					<EffectComposer multisampling={8}>
						<Bloom
							kernelSize={6}
							luminanceThreshold={0}
							luminanceSmoothing={1}
							intensity={1}
						/>
						<Bloom
							kernelSize={KernelSize.HUGE}
							luminanceThreshold={0}
							luminanceSmoothing={0}
							intensity={0.5}
						/>
					</EffectComposer>
				</Suspense>
				<CameraShake
					yawFrequency={0.01}
					pitchFrequency={0.01}
					rollFrequency={0.01}
				/>
			</Canvas>
		</div>
	);
}
