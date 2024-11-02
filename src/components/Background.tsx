import "/src/sass/main.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

const Geo = () => {
  const cubeRef = useRef();

  useFrame(({ clock }) => {
    // Use a sine wave to animate the cube side to side
    cubeRef.current.position.x = Math.sin(clock.getElapsedTime()) * 1; // Adjust multiplier for range
  });

  return (
    <mesh ref={cubeRef} position={[0, 1, 0]}>
      <boxGeometry args={[0.25, 0.25, 0.25]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};

const Background = () => {
  return (
    <>
      {/* bg color */}
      <div
        className="container-fluid bg-primary position-absolute top-0 bottom-0 start-0 end-0 background"
        id="canvas-container"
      ></div>
      <Canvas className="container-fluid position-absolute top-0 bottom-0 start-0 end-0">
        <ambientLight intensity={0.5} />
        <Geo />
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default Background;
