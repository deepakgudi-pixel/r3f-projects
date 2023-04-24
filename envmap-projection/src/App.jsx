import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./components/model";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export default function App() {
  
  return (
    <Canvas gl={{ toneMappingExposure: 0.7 }}>
      <Suspense fallback={null}>
        <spotLight angle={1} position={[-80, 200, -100]} intensity={1}/>
        <Model position={[-8, 0, -2]} scale={20} rotation-y={-Math.PI / 4} />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.25}
        makeDefault
      />
      <PerspectiveCamera makeDefault position={[-30, 100, 120]} fov={35} />
    </Canvas>
  );
}
