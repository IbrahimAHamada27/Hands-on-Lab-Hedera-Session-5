import React from 'react';
import { Canvas } from '@react-three/fiber';
import { CyberGrid } from './CyberGrid';
import { FloatingNodes } from './FloatingNodes';

export function BackgroundCanvas() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
        <color attach="background" args={['#000000']} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#00FFFF" intensity={1} />
        
        <CyberGrid />
        <FloatingNodes />
      </Canvas>
    </div>
  );
}
