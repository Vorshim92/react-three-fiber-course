import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <OrbitControls />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial color="red" />
      </mesh>
    </Canvas>
  );
}

export default App;
