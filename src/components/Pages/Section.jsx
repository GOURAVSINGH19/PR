import React, { lazy, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { initialscreen } from "../anim";
import "../css/Locomotive-scroll.css";
import Lottie from "lottie-react";
const Canvas = lazy(() => import("../Canvas/Canvas"));
import eyes from "../../Animation/eyes.json";
const Section = () => {
  const inview = useInView(() => {});
  return (
    <div className="w-screen h-screen  overflow-hidden relative">
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1, delay: 2 }}
          className="w-[110px] h-14 bg-[#81313187] rounded-full absolute top-5 left-5"
        >
          <Lottie
            height={100}
            width={200}
            animationData={eyes}
            className="w-20 absolute top-2 left-3  bg-blend-soft-light"
          />
        </motion.div>
      </div>
      <div className="  h-full p-[1rem] absolute top-0 left-0 right-0 bottom-0 ">
        <div className="w-full h-full bg-[#5c5a5a42]  p-[.5rem]"></div>
      </div>
    </div>
  );
};

export default Section;
