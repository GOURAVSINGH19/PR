import './Menubtn.css'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Nav from '../sidenavbar/Nav';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Magnetic from '../Magnetic/Magnetic'
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';



export default function Home() {

  const [isActive, setIsActive] = useState(false);
  const pathname = useLocation();

  useEffect( () => {
    if(isActive) setIsActive(false)
  }, [pathname])


  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.to(".header",{
      opacity: 1,
      duration: 1,
      ease: "power3.inOut"
    })
  })
  


  return (
    <>
    <div className="main">
      <div className="header md:hidden absolute top-5 right-5 md:top-32 md:right-[5%] px-5 z-10" >
      <Magnetic>
        <div  onClick={() => {setIsActive(!isActive)}} className="button1 w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]">
          <div className={`${"burger"} ${isActive ? "burgerActive" : ""}`}></div>
        </div>
      </Magnetic>
      </div>
    </div>
    <AnimatePresence mode="wait">
      {isActive && <Nav />}
    </AnimatePresence>
    </>
  )
}