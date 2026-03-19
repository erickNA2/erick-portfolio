"use client";

import * as THREE from "three";
import { useState, useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
	CameraShake,
	useTexture,
	MeshReflectorMaterial,
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
		const geometry = new THREE.ShapeGeometry(shapes);
		geometry.computeBoundingBox();
		return geometry;
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
				<meshBasicMaterial
					color={color}
					toneMapped={false}
					fog={false}
				/>
			</mesh>
		</group>
	);
}

function Ground() {
	const [floor, normal] = useTexture([
		"/SurfaceImperfections003_1K_var1.jpg",
		"/SurfaceImperfections003_1K_Normal.jpg",
	]);

	// Optimize textures
	useMemo(() => {
		floor.generateMipmaps = true;
		floor.minFilter = THREE.LinearMipmapLinearFilter;
		normal.generateMipmaps = true;
		normal.minFilter = THREE.LinearMipmapLinearFilter;
	}, [floor, normal]);

	return (
		<mesh rotation={[-Math.PI / 2, 0, Math.PI / 2]} position-y={-0.8}>
			<planeGeometry args={[8, 8]} />
			<MeshReflectorMaterial
				resolution={512}
				mirror={0.8}
				blur={[400, 100]}
				mixBlur={10}
				mixStrength={1.2}
				color="#1a1a1a"
				metalness={0}
				roughnessMap={floor}
				normalMap={normal}
				normalScale={[2, 2]}
			/>
		</mesh>
	);
}

export default function AnimatedBg() {
	return (
		<div className="fixed top-0 left-0 z-0 w-screen h-screen m-0 p-0">
			<Canvas
				dpr={[1, 1.5]}
				camera={{ position: [-0.7, 0, 1], far: 1000 }}
				gl={{
					antialias: true,
					alpha: true,
					powerPreference: "default",
				}}
				className="relative w-full h-full"
			>
				<color attach="background" args={["rgb(11, 11, 11)"]} />
				<ambientLight intensity={0.8} />
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

					<Ground />

					<EffectComposer multisampling={4}>
						<Bloom
							kernelSize={4}
							luminanceThreshold={0.1}
							luminanceSmoothing={0.8}
							intensity={0.8}
						/>
						<Bloom
							kernelSize={KernelSize.LARGE}
							luminanceThreshold={0.2}
							luminanceSmoothing={0.5}
							intensity={0.3}
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
