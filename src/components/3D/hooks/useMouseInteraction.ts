import { RefObject, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

export function useMouseInteraction(groupRef: RefObject<THREE.Group>) {
  const { camera } = useThree();
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!groupRef.current) return;

      // Convert mouse position to normalized device coordinates (-1 to +1)
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Rotate the group based on mouse position
      groupRef.current.rotation.y = x * 0.5;
      groupRef.current.rotation.x = y * 0.3;

      // Add subtle movement to the camera
      camera.position.x = x * 2;
      camera.position.y = y * 2;
      camera.lookAt(0, 0, 0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [camera]);
}