import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { technologies } from '../constants'; // Import your technologies array here
import CanvasLoader from './Loader';
import { SectionWrapper } from '../hoc';

function Ball(props) {
  return (
    <mesh castShadow receiveShadow scale={2.75}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color={'#FAF9F6'} />
      <Suspense fallback={<CanvasLoader />}>
        <preload all />
        <imageTexture url={props.icon} />
      </Suspense>
    </mesh>
  );
}

function Tech() {
  return (
    <Canvas frameloop="always">
      <OrbitControls enableZoom={false} enablePan={false} />
      {technologies.map((tech, index) => (
        <Ball key={index} icon={tech.icon} />
      ))}
    </Canvas>
  );
}

export default SectionWrapper(Tech, '');
