import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useScene3D } from './Scene3DContext';
import { HolographicGlobe } from './HolographicGlobe';
import { FloatingObjects } from './FloatingObjects';
import { Lighting } from './Lighting';
import { useBackgroundAnimation } from './hooks/useBackgroundAnimation';
import { useMouseInteraction } from './hooks/useMouseInteraction';

export function Scene3DBackground() {
  const groupRef = useRef<THREE.Group>(null);
  const { scrollPosition } = useScene3D();
  
  useBackgroundAnimation(groupRef, scrollPosition);
  useMouseInteraction(groupRef);

  return (
    <group ref={groupRef} scale={3.5}>
      <HolographicGlobe position={[0, 0, -10]} scale={1.5} />
      <FloatingObjects />
      <Lighting />
      <fog attach="fog" args={['#000', 10, 40]} />
    </group>
  );
}