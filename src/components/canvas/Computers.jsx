import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useGLTF, Preload } from '@react-three/drei';

const Computers = ({ isMobile }) => {
  const { scene, error } = useGLTF('./desktop_pc/scene.gltf');

  if (error) {
    // Handle the error (e.g., display an error message)
    return <div>Error loading 3D model</div>;
  }

  return (
    <mesh frustumCulled={false}>
      <pointLight intensity={isMobile ? 0.5 : 1.5} color="blue" />
      <primitive
        object={scene}
        scale={isMobile ? [0.1, 0.1, 0.1] : [0.7, 0.7, 0.7]} // Adjust scale for mobile
        position={isMobile ? [0, -0.2, -0.5] : [0, -3.25, -1.25]} // Adjust position for mobile
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)'); // Adjust the max-width for your needs
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const cameraSettings = useMemo(
    () => ({
      position: isMobile ? [0, 1, 4] : [20, 3, 5], // Adjust camera position for mobile
      fov: isMobile ? 45 : 25, // Adjust field of view for mobile
    }),
    [isMobile]
  );

  return (
    <Canvas
      frameloop="demand"
      camera={cameraSettings}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls
        enablePan={!isMobile} // Allow pan on non-mobile devices
        enableZoom={!isMobile} // Allow zoom on non-mobile devices
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
