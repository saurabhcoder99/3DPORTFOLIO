import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Orbiting Tech Cube Satellite
const SatelliteCube = ({ position, rotationSpeed, color, size = 0.25 }) => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed;
      meshRef.current.rotation.y += delta * (rotationSpeed * 1.5);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
};

// Orbiting Particle Cloud
const ParticleRing = ({ count = 300, radius = 2.8 }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
      const r = radius + (Math.random() - 0.5) * 0.8;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      const y = (Math.random() - 0.5) * 1.2;
      p[i * 3] = x;
      p[i * 3 + 1] = y;
      p[i * 3 + 2] = z;
    }
    return p;
  }, [count, radius]);

  const pointsRef = useRef();

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.15;
      pointsRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#00f2fe"
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export const CyberCore = () => {
  const groupRef = useRef();
  const innerSphereRef = useRef();
  const wireframeIcosaRef = useRef();
  const torusRef = useRef();

  useFrame((state, delta) => {
    // Parallax mouse follow
    const targetX = state.pointer.x * 0.6;
    const targetY = state.pointer.y * 0.6;

    if (groupRef.current) {
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.05;
    }

    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.y += delta * 0.4;
    }

    if (wireframeIcosaRef.current) {
      wireframeIcosaRef.current.rotation.x -= delta * 0.25;
      wireframeIcosaRef.current.rotation.z += delta * 0.3;
    }

    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.5;
      torusRef.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Holographic Liquid Distorted Sphere */}
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
        <Sphere ref={innerSphereRef} args={[1.2, 64, 64]}>
          <MeshDistortMaterial
            color="#1d2671"
            attach="material"
            distort={0.42}
            speed={2.2}
            roughness={0.15}
            metalness={0.85}
          />
        </Sphere>
      </Float>

      {/* Surrounding Geometric Wireframe Icosahedron */}
      <mesh ref={wireframeIcosaRef} scale={[1.85, 1.85, 1.85]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#00f2fe"
          wireframe={true}
          transparent={true}
          opacity={0.35}
        />
      </mesh>

      {/* Orbiting Torus Knot */}
      <mesh ref={torusRef} scale={[0.65, 0.65, 0.65]}>
        <torusKnotGeometry args={[2.2, 0.06, 128, 16, 2, 3]} />
        <meshStandardMaterial
          color="#c084fc"
          emissive="#7928ca"
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>

      {/* Orbiting Particle Cloud */}
      <ParticleRing count={320} radius={2.7} />

      {/* Floating Satellite Tech Cubes */}
      <SatelliteCube position={[-2.3, 1.2, 0.6]} rotationSpeed={0.8} color="#00f2fe" size={0.32} />
      <SatelliteCube position={[2.2, -1.1, -0.5]} rotationSpeed={0.7} color="#a855f7" size={0.38} />
      <SatelliteCube position={[1.8, 1.8, -0.8]} rotationSpeed={0.9} color="#ec4899" size={0.24} />
      <SatelliteCube position={[-1.7, -1.8, 0.4]} rotationSpeed={0.6} color="#00ffcc" size={0.28} />
    </group>
  );
};
