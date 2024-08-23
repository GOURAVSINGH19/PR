import { Environment, OrbitControls } from "@react-three/drei";
import Avatar from "./Avatar";
import { useControls } from "leva";
const Experience = () => {
  const {animation} = useControls({
    animation: {
      Value: "Texting",
      options: ["Texting"],
    }
  });
  return (
    <>
      <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
      <Environment preset="sunset" />
      <group position-y={-.9} scale={.8}>
        <Avatar/> 
        {/* animation={animation} */}
      </group>
    </>
  );
};

export default Experience;
