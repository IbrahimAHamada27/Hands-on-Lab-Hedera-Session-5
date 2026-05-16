import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useAppStore } from '../../store/useAppStore';

export function CyberGrid() {
  const gridRef = useRef<THREE.GridHelper>(null);
  const currentSection = useAppStore(state => state.currentSection);
  
  useFrame((state, delta) => {
    if (gridRef.current) {
      // Slowly move the grid towards the camera to simulate infinite forward motion
      const speed = currentSection === 0 ? 0.5 : 0.02;
      gridRef.current.position.z = (gridRef.current.position.z + delta * speed) % 1;
    }
  });

  return (
    <group position={[0, -2, 0]}>
      {/* Primary Grid - Dark Navy */}
      <gridHelper 
        ref={gridRef}
        args={[100, 100, '#203A5F', '#165D9E']} 
        position={[0, 0, 0]}
      />
      {/* Subtle Glow Grid slightly below */}
      <gridHelper 
        args={[100, 50, '#165D9E', '#165D9E']} 
        position={[0, -0.1, 0]}
      />
      
      {/* Fog to hide the edges */}
      <fog attach="fog" args={['#000000', 5, 30]} />
    </group>
  );
}
