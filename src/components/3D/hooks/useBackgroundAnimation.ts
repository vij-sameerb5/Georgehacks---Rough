import { RefObject } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function useBackgroundAnimation(
  groupRef: RefObject<THREE.Group>,
  scrollPosition: number
) {
  useFrame((state) => {
    if (!groupRef.current) return;

    // Parallax effect based on scroll
    const scrollFactor = scrollPosition * 0.001;
    groupRef.current.position.y = -scrollFactor * 2;
    
    // Scale effect based on scroll
    const scale = 1 + scrollFactor * 0.15;
    groupRef.current.scale.setScalar(Math.min(scale, 2));
    
    // Rotation effects
    groupRef.current.rotation.y += 0.001;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
    
    // Floating movement
    const floatY = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    groupRef.current.position.y += floatY;
  });
}