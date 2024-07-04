import React, { useRef, useEffect } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei';

import planeScene from '../assets_3d_portfolio/assets/3d/plane.glb';

const Plane = ({ isRotating, islandRotation, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (actions && actions['Take 001']) {
      if (isRotating) {
        actions['Take 001'].play();
      } else {
        actions['Take 001'].stop();
      }
    }
  }, [actions, isRotating]);

  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.y = islandRotation;
    }
  }, [islandRotation]);

  // Add props handling to ensure planeScale and planePosition are applied correctly
  useEffect(() => {
    if (ref.current) {
      if (props.scale) {
        ref.current.scale.set(...props.scale);
      }
      if (props.position) {
        ref.current.position.set(...props.position);
      }
      if (props.rotation) {
        ref.current.rotation.set(...props.rotation);
      }
    }
  }, [props.scale, props.position, props.rotation]);

  return (
    <mesh ref={ref} {...props}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Plane
