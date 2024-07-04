import { useGLTF } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

import skyscene from '../assets_3d_portfolio/assets/3d/sky.glb'

const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyscene);
  const skyRef = useRef();

  useEffect(() => {
    if (!sky || !sky.scene) {
      console.log("Sky scene not loaded");
    } else {
      console.log("Sky scene loaded");
    }
  }, [sky]);

  useFrame((_, delta) => {
    if(isRotating) {
        skyRef.current.rotation.y += 0.15 * delta
      }
    });

  return (
    <mesh ref = {skyRef}>
       <primitive object={sky.scene} />
    </mesh>
  );
}

export default Sky;