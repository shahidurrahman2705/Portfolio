// src/components/ThreeDScene.jsx
"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function RotatingCube() {
    const mesh = useRef();
    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x += 0.01;
            mesh.current.rotation.y += 0.01;
        }
    });
    return (
        <mesh ref={mesh}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#fbbf24" />
        </mesh>
    );
}

export default function ThreeDScene() {
    return (
        <div className="w-full h-96 rounded-lg shadow-xl overflow-hidden">
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <RotatingCube />
            </Canvas>
        </div>
    );
}
