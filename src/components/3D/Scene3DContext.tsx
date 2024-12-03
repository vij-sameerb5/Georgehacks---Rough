import React, { createContext, useContext, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Scene3DBackground } from './Scene3DBackground';
import { useScrollPosition } from './hooks/useScrollPosition';

interface Scene3DContextType {
  scrollPosition: number;
}

const Scene3DContext = createContext<Scene3DContextType>({ scrollPosition: 0 });

export const useScene3D = () => useContext(Scene3DContext);

export function Scene3DProvider({ children }: { children: React.ReactNode }) {
  const scrollPosition = useScrollPosition();

  return (
    <Scene3DContext.Provider value={{ scrollPosition }}>
      {children}
    </Scene3DContext.Provider>
  );
}

export { Scene3DBackground };