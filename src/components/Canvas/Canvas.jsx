import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const Mycanvas = () => {
  return (
    <>
      <Canvas
        camera={{ position: [0, 2, 5], fov: 28 }}
        resize={false}
        onScroll={() => {
          resize = false;
        }}
      >
       <Experience/>
      </Canvas>
    </>
  );
};

export default Mycanvas;
