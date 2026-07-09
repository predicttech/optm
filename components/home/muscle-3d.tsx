"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
} from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  const { scene } = useGLTF("/muscle.glb");

  return (
    <primitive
      object={scene}
      scale={2}
      position={[0, -0.5, 0]}
    />
  );
}

export function MuscleModel() {
  return (
    <div className="w-full h-100">
      <Canvas camera={{ position: [0, 0, 4], fov: 20 }}>
        <ambientLight intensity={1.2} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={4}
        />

        <Suspense fallback={null}>
          <Model />

          <Environment preset="studio" />
        </Suspense>

        <OrbitControls
         enableRotate={false}
        enableZoom={false}
        enablePan={false} 
        autoRotate
        autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}