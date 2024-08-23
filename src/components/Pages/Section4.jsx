import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { inView, motion } from "framer-motion";
import { scroll } from "../anim";
const Section4 = () => {
  useEffect(() => {
    const view = inView("scroll", (info) => {
      const animate = animate(info.ani, {
        scroll: 0.8,
      });
      return () => animate.stop();
    });
  }, []);
  return (
    <motion.div
      // variants={scroll}
      // animate="enter"
      // initial="initial"
      // exit="exit"
      className="w-screen scroll  h-screen bg-pink-300  relative"
    >
      <motion.div className="w-screen  transition-transform  ani min-h-screen bg-zinc-400"></motion.div>
    </motion.div>
  );
};

export default Section4;
