import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const AnimatedComponent = ({ children, variants }) => {
    const controls = useAnimation();
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              controls.start("enter");
            } else {
              controls.start("initial");
            }
          });
        },
        { threshold: 0.5 }
      );
  
      observer.observe(document.querySelector(".animated-element"));
  
      return () => observer.disconnect();
    }, [controls]);
  
    return (
      <motion.div
        className="animated-element"
        variants={variants}
        animate={controls}
      >
        {children}
      </motion.div>
    );
  };
  
  export default AnimatedComponent;