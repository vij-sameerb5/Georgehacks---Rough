import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export function HolographicGlobe({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const globeRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (globeRef.current && wireframeRef.current) {
      // Rotate both meshes
      globeRef.current.rotation.y += 0.001;
      wireframeRef.current.rotation.y += 0.001;
      
      // Add breathing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      globeRef.current.scale.setScalar(scale);
      wireframeRef.current.scale.setScalar(scale + 0.02);
    }
  });

  return (
    <group position={position}>
      {/* Main sphere */}
      <Sphere ref={globeRef} args={[2, 64, 64]}>
        <meshPhongMaterial
          color="#4FD1C5"
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
        />
      </Sphere>

      {/* Wireframe overlay */}
      <Sphere ref={wireframeRef} args={[2.1, 32, 32]}>
        <meshPhongMaterial
          color="#4FD1C5"
          wireframe
          transparent
          opacity={0.3}
        />
      </Sphere>

      {/* Glowing atmosphere */}
      <Sphere args={[2.2, 32, 32]}>
        <meshPhongMaterial
          color="#4FD1C5"
          transparent
          opacity={0.05}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
    </group>
  );
}