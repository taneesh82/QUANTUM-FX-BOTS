import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Environment, Sphere, Box } from "@react-three/drei";

// You can expand this with custom 3D models for extra flair!
export default function Futuristic3DBackdrop() {
  return (
    <Canvas
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none"
      }}
      camera={{ position: [0, 0, 12], fov: 40 }}
      gl={{ alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 5, 10]} intensity={2} />
      <Suspense fallback={null}>
        <Environment preset="night" />
        <Float speed={2.2} rotationIntensity={1.3} floatIntensity={2}>
          <Sphere args={[1, 64, 64]} position={[-3.2, 1.7, 0]}>
            <meshStandardMaterial
              color="#13f2fe"
              emissive="#13f2fe"
              emissiveIntensity={1.8}
              roughness={0.2}
              metalness={0.6}
              transparent
              opacity={0.8}
            />
          </Sphere>
        </Float>
        <Float speed={1.7} rotationIntensity={1.4} floatIntensity={1.3}>
          <Sphere args={[0.7, 64, 64]} position={[2.2, -2.2, -1]}>
            <meshStandardMaterial
              color="#c084fc"
              emissive="#c084fc"
              emissiveIntensity={1.5}
              roughness={0.15}
              metalness={0.7}
              transparent
              opacity={0.7}
            />
          </Sphere>
        </Float>
        <Float speed={2.9} rotationIntensity={2.2} floatIntensity={2.3}>
          <Box args={[0.7, 0.7, 0.7]} position={[0, 2, 1]}>
            <meshStandardMaterial
              color="#00e396"
              emissive="#00e396"
              emissiveIntensity={2}
              roughness={0.3}
              metalness={0.8}
              transparent
              opacity={0.45}
            />
          </Box>
        </Float>
      </Suspense>
      {/* No controls for user, just animated bg */}
    </Canvas>
  );
}