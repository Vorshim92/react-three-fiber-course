import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
function App() {
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <OrbitControls />
      <mesh position-x={-0.6}>
        <boxGeometry args={[1, 1, 1]} />
        <meshToonMaterial color="green" side={THREE.FrontSide} />
      </mesh>
      <mesh position-x={0.6} position-z={-1}>
        <boxGeometry args={[1, 1, 1]} />
        <meshToonMaterial color="green" side={THREE.BackSide} />
      </mesh>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 0, 3]} intensity={1} />
      <directionalLight position={[1, 3, 3]} intensity={1} />
    </Canvas>
  );
}

export default App;
