import { Canvas } from "@react-three/fiber";
import { Model } from "./components/model";
import { Suspense } from "react";
import { ContactShadows, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={2} />
      <Suspense fallback={null}>
        <spotLight
          position={[1, 6, 1.5]}
          angle={0.2}
          penumbra={1}
          intensity={2.5}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <spotLight
          position={[-5, 5, -1.5]}
          angle={0.03}
          penumbra={1}
          intensity={4}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <spotLight
          position={[5, 5, -5]}
          angle={0.3}
          penumbra={1}
          intensity={4}
          castShadow={true}
          shadow-mapSize={[256, 256]}
          color="#ffffc0"
        />
        <Model position={[0, -0.09, 0]} />
        <ContactShadows
          frames={1}
          rotation-x={[Math.PI / 2]}
          position={[0, -0.33, 0]}
          far={0.4}
          width={2}
          height={2}
          blur={4}
        />
      </Suspense>
    </Canvas>
  );
}

export default App;
