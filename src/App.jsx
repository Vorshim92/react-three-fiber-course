import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
function App() {
  return (
    <Canvas camera={{ position: [0, 3, 8] }}>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 3, 5]} intensity={0.5} />

      {/* Objects */}
      <group position={[-2, -2, 0]} scale={2} rotation-y={Math.PI / 4}>
        <mesh position-x={-1}>
          <boxGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="blue" />
        </mesh>
        <mesh position-x={1}>
          <boxGeometry />
          <meshStandardMaterial color="green" />
        </mesh>
      </group>
    </Canvas>
  );
}

export default App;
