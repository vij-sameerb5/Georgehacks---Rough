import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';
import { useFloatingAnimation } from './hooks/useFloatingAnimation';

export function FloatingObjects() {
  const groupRef = useRef<THREE.Group>(null);
  useFloatingAnimation(groupRef);

  return (
    <group ref={groupRef} scale={1.5}>
      {/* Floating spheres */}
      {Array.from({ length: 20 }).map((_, i) => {
        const radius = Math.random() * 0.4 + 0.2;
        const angle = (i / 20) * Math.PI * 2;
        const distance = Math.random() * 8 + 5;
        
        return (
          <Sphere
            key={`sphere-${i}`}
            args={[radius, 16, 16]}
            position={[
              Math.cos(angle) * distance,
              Math.sin(i) * 4,
              Math.sin(angle) * distance
            ]}
          >
            <meshPhongMaterial
              color="#4FD1C5"
              transparent
              opacity={0.3}
              wireframe={Math.random() > 0.5}
            />
          </Sphere>
        );
      })}

      {/* Floating boxes */}
      {Array.from({ length: 10 }).map((_, i) => {
        const size = Math.random() * 0.8 + 0.3;
        const angle = (i / 10) * Math.PI * 2;
        const distance = Math.random() * 6 + 4;
        
        return (
          <Box
            key={`box-${i}`}
            args={[size, size, size]}
            position={[
              Math.cos(angle) * distance,
              Math.sin(i * 2) * 5,
              Math.sin(angle) * distance
            ]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          >
            <meshPhongMaterial
              color="#4FD1C5"
              transparent
              opacity={0.2}
              wireframe
            />
          </Box>
        );
      })}

      {/* Floating rings */}
      {Array.from({ length: 5 }).map((_, i) => {
        const radius = Math.random() * 1.2 + 0.6;
        const angle = (i / 5) * Math.PI * 2;
        const distance = Math.random() * 5 + 3;
        
        return (
          <Torus
            key={`torus-${i}`}
            args={[radius, 0.1, 16, 32]}
            position={[
              Math.cos(angle) * distance,
              Math.sin(i * 3) * 4,
              Math.sin(angle) * distance
            ]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          >
            <meshPhongMaterial
              color="#4FD1C5"
              transparent
              opacity={0.2}
              wireframe
            />
          </Torus>
        );
      })}
    </group>
  );
}