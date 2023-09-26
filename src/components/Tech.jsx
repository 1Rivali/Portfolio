import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { technologies } from '../constants'; // Import your technologies array here
import CanvasLoader from './Loader';

function Ball(props) {
  const texture = useLoader(THREE.TextureLoader, props.icon);

  return (
    <mesh castShadow receiveShadow scale={2.75}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color={'#FAF9F6'} map={texture} />
    </mesh>
  );
}

function Tech() {
  return (
    <Canvas frameloop="always">
      <OrbitControls enableZoom={false} enablePan={false} />
      <Suspense fallback={<CanvasLoader />}>
        <Preload all />
        {technologies.map((tech, index) => (
          <Ball key={index} icon={tech.icon} />
        ))}
      </Suspense>
    </Canvas>
  );
}

export default SectionWrapper(Tech, '');
