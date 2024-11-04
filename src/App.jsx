import { OrbitControls, SpotLight, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { useMemo } from "react";

import { Leva, useControls } from "leva";

import * as THREE from "three";

const PointLights = () => {
  const ref = useRef();
  useHelper(ref, THREE.PointLightHelper, 0.5, "red");
  const options = useMemo(
    () => ({
      color: "#ff0000",
      distance: 2.8,
      decay: 2,
      intensity: 1,
      position: [0.7, 0.7, 0.7],
    }),
    []
  );
  const lightA = useControls("Point Light A", options);

  return (
    <>
      <pointLight ref={ref} position={lightA.position} color={lightA.color} distance={lightA.distance} decay={lightA.decay} intensity={lightA.intensity} />
    </>
  );
};
const SpotLights = () => {
  const ref = useRef();
  useHelper(ref, THREE.SpotLightHelper, "red");
  const options = useMemo(
    () => ({
      color: "#fff900",
      distance: 6,
      attenuation: 2.2,
      angle: 1.1,
      anglePower: 1,
    }),
    []
  );
  const lightB = useControls("Spot Light B", options);

  return (
    <>
      <SpotLight ref={ref} color={lightB.color} distance={lightB.distance} angle={lightB.angle} attenuation={lightB.attenuation} anglePower={lightB.anglePower} />
    </>
  );
};

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 3, 3] }}>
        <PointLights />
        <SpotLights />

        <OrbitControls />

        <mesh rotation-y={Math.PI / 4}>
          <boxGeometry />
          <meshStandardMaterial color="white" roughness={1} metalness={0} />
        </mesh>
        <mesh rotation-x={-Math.PI / 2} position-y={-0.5}>
          <planeGeometry args={[5, 5]} />
          <meshPhysicalMaterial color="white" clearcoat={0.5} reflectivity={0.8} />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
