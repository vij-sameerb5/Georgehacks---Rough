import { RefObject } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function useFloatingAnimation(groupRef: RefObject<THREE.Group>) {
  useFrame((state) => {
    if (!groupRef.current) return;

    // Rotate the entire group slowly
    groupRef.current.rotation.y += 0.0005;
    
    // Add a gentle floating motion
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    
    // Subtle breathing effect
    const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    groupRef.current.scale.setScalar(scale);

    // Individual object animations
    groupRef.current.children.forEach((child, index) => {
      // Custom rotation for each object
      child.rotation.x += 0.001 * Math.sin(index);
      child.rotation.z += 0.001 * Math.cos(index);
      
      // Subtle position oscillation
      const posY = child.position.y;
      child.position.y = posY + Math.sin(state.clock.elapsedTime + index) * 0.001;
    });
  });
}