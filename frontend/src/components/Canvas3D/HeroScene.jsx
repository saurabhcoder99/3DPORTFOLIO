import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { CyberCore } from './CyberCore';
import { Fallback3D } from './Fallback3D';

// WebGL Capability Check
function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

// Error Boundary for WebGL Crashes
class ThreeErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn('Three.js Canvas Error handled gracefully:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const HeroScene = () => {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    if (!isWebGLAvailable()) {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return <Fallback3D />;
  }

  return (
    <div className="relative w-full h-[440px] md:h-[540px] lg:h-[600px] flex items-center justify-center">
      {/* Background Soft Glow Effect */}
      <div className="absolute w-80 h-80 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
      <div className="absolute w-72 h-72 rounded-full bg-purple-600/15 blur-3xl pointer-events-none translate-x-12 translate-y-12" />

      <ThreeErrorBoundary fallback={<Fallback3D />}>
        <Suspense fallback={<Fallback3D />}>
          <Canvas
            camera={{ position: [0, 0, 5.8], fov: 45 }}
            dpr={[1, 1.8]} // Adaptive resolution for high performance
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          >
            {/* Ambient and Key Lighting */}
            <ambientLight intensity={0.7} />
            <directionalLight position={[10, 10, 5]} intensity={1.4} color="#00f2fe" />
            <pointLight position={[-10, -10, -5]} intensity={1.2} color="#ec4899" />
            <pointLight position={[0, 5, -2]} intensity={0.9} color="#7928ca" />

            {/* Interactive 3D Cyber Core */}
            <CyberCore />
          </Canvas>
        </Suspense>
      </ThreeErrorBoundary>
    </div>
  );
};
