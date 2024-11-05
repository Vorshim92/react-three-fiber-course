import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { button, useControls } from "leva";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { ThemeProvider, useTheme } from "./hooks/useTheme";

const Cube = memo((props) => {
  console.log("Cube rendered");

  const ref = useRef();
  const { color } = useTheme();

  useControls({
    rotateCube: button(() => (ref.current.rotation.y += Math.PI / 4)),
  });

  useEffect(() => {
    const colorsPositions = {
      white: [0, 0, 0],
      red: [-1, 0, 0],
      blue: [0, 1, 0],
      green: [1, 0, 0],
    };
    const position = colorsPositions[color];
    ref.current.position.set(...position);

    const interval = setInterval(() => {
      ref.current.rotation.y += Math.PI / 4;
    }, 1000);

    return () => clearInterval(interval);
  }, [color]);

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
});

const UI = () => {
  const { setColor } = useTheme();
  useControls({
    changeColorToRed: button(() => setColor("red")),
    changeColorToBlue: button(() => setColor("blue")),
    changeColorToGreen: button(() => setColor("green")),
  });
};

function App() {
  const [count, setCount] = useState(0);
  const onCubeClicked = useCallback(() => {
    console.log(`Cube clicked ${count} time${count > 1 ? "s" : ""}`);
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <ThemeProvider>
        <UI />
        <Canvas camera={{ position: [0, 2, 6], fov: 42 }}>
          <OrbitControls />
          <Cube onClick={onCubeClicked} />
          <ContactShadows position-y={-2} opacity={0.5} blur={2} color={"pink"} scale={10} />
          <Environment preset="city" />
        </Canvas>
      </ThemeProvider>
    </>
  );
}

export default App;
