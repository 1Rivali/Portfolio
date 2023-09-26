import * as THREE from 'three';
import { Suspense, useMemo } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Float, OrbitControls, Preload } from '@react-three/drei';
import { technologies } from '../constants';
import CanvasLoader from './Loader';
import { SectionWrapper } from '../hoc';

const Ball = ({ imgUrl }) => {
  const decal = useLoader(THREE.TextureLoader, imgUrl);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color={'#FAF9F6'} />
        <decalGeometry
          attach="geometry"
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const Tech = () => {
  const icons = useMemo(() => technologies.map((tech) => tech.icon), []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <Canvas frameloop="always">
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} enablePan={false} />
          {icons.map((icon, index) => (
            <Ball key={index} imgUrl={icon} />
          ))}
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default SectionWrapper(Tech, '');
