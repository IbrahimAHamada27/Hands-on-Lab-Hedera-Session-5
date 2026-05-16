import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useAppStore } from '../../store/useAppStore';

export function FloatingNodes() {
  const currentSection = useAppStore(state => state.currentSection);
  const particlesRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const particleCount = 100;
  
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    const colorPrimary = new THREE.Color('#165D9E'); // Primary Blue
    const colorCyan = new THREE.Color('#00FFFF'); // Cyan

    for (let i = 0; i < particleCount; i++) {
      // Random positions in a volume
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      // Mix colors
      const mixedColor = colorPrimary.clone().lerp(colorCyan, Math.random() * 0.5);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    
    return { positions, colors };
  }, [particleCount]);

  const { linePositions, lineColors } = useMemo(() => {
    // Connect nodes that are close to each other
    const linePos = [];
    const lineCol = [];
    
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distSq = dx*dx + dy*dy + dz*dz;
        
        if (distSq < 15) { // Connection distance threshold
          linePos.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );
          
          lineCol.push(
            colors[i * 3], colors[i * 3 + 1], colors[i * 3 + 2],
            colors[j * 3], colors[j * 3 + 1], colors[j * 3 + 2]
          );
        }
      }
    }
    
    return { 
      linePositions: new Float32Array(linePos),
      lineColors: new Float32Array(lineCol)
    };
  }, [positions, colors]);

  const rotationRef = useRef(0);
  const floatRef = useRef(0);

  useFrame((state, delta) => {
    const speedMultiplier = currentSection === 0 ? 1 : 0.05;
    rotationRef.current += delta * 0.05 * speedMultiplier;
    floatRef.current += delta * 0.5 * speedMultiplier;
    
    if (particlesRef.current) {
      particlesRef.current.rotation.y = rotationRef.current;
      particlesRef.current.position.y = Math.sin(floatRef.current) * 0.2;
    }
    
    if (linesRef.current) {
      linesRef.current.rotation.y = rotationRef.current;
      linesRef.current.position.y = Math.sin(floatRef.current) * 0.2;
    }
  });

  return (
    <group>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          vertexColors={true}
          transparent={true}
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>
      
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={lineColors.length / 3}
            array={lineColors}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors={true}
          transparent={true}
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}
