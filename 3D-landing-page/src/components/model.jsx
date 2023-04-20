import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/hog_brew_can-transformed.glb");
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.set(
      0.1 + Math.cos(time / 4.5) / 10,
      Math.sin(time / 4) / 4,
      0.3 - (1 + Math.sin(time / 4)) / 8
    );
    ref.current.position.y = (1 + Math.sin(time / 2)) / 10;
  });


  return (
    <group {...props} dispose={null}>
      <group scale={1.0} ref={ref}>
        <group position={[0, -5.39, 0]}>
          <mesh
            geometry={nodes.Can_lambert1_0.geometry}
            material={materials.lambert1}
            position={[0, 5.24, 0]}
            scale={[1, 1.35, 1]}
          />
          <mesh
            geometry={nodes.Can_Cap_Pin_lambert1_0.geometry}
            material={materials.lambert1}
            position={[0, 7.08, 0]}
            scale={[0.04, 0.01, 0.04]}
          />
          <mesh
            geometry={nodes.Can_Cap_lambert1_0.geometry}
            material={materials.lambert1}
            position={[0, -1.52, -0.2]}
            scale={1.2}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/hog_brew_can-transformed.glb");
