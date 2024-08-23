import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader/Preloader";
import Pages from "./components/Pages/Pages";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  const ref = useRef();

  return (
    <div className="relative overflow-x-hidden bg-zinc-900">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Pages />
    </div>
  );
};

export default App;
