import gsap from "gsap";
import React, { useEffect } from "react";

const Section2 = () => {
  let path = `M 100 100 Q 500 100 1800 100`;
  let fintalpath = `M 100 100 Q 500 100 1800 100 `;

  useEffect(() => {
    let string = document.querySelector(".string");

    string.addEventListener("mousemove", (dets) => {
      path = `M 100 100 Q ${dets.x} ${dets.y} 1800 100`;
      gsap.to("svg path", {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out",
      });
    });
    string.addEventListener("mouseleave", (dets) => {
      gsap.to("svg path", {
        attr: { d: fintalpath },
        duration: 1.5,
        ease: "elastic.out(1,.3)",
      });
    });
  }, []);
  return (
    <div className="w-screen h-screen bg-zinc-900 text-white relative">
      <div className="w-[100%]  h-[10vh] flex justify-center  relative ">
        <div className="string line w-[100%] h-[100px] absolute top-[90px] z-9"></div>
        <svg className="svg" height="400">
          <path
            d="M 100 100 Q 500 100 1800 100"
            stroke="white"
            fill="transparent"
            className="path"
          />
        </svg>
      </div>
    </div>
  );
};

export default Section2;
