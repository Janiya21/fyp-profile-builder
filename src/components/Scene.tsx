// components/Scene.tsx
'use client';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Environment } from '@react-three/drei';
// import * as THREE from 'three';

export default function Scene() {
  return (
    <div>
      {/* <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} autoRotate />
        <Environment preset="city" />

        <mesh position={[0, 0, 0]} rotation={[0.2, 0.4, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial
            color="#7c3aed"
            wireframe
            emissive="#a78bfa"
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Canvas> */}
    </div>
  );
}