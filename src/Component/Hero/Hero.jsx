import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import logotipoblack from "../../assets/logotypo.png";
import logotipowhite from "../../assets/logotipo.png";
import ParallaxEffect from "../Parallax/Parallax";

const Hero = ({ darkMode }) => {
  const controls = useAnimation();
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const incrementarSegundos = () => {
      setSegundos((prevSegundos) => prevSegundos + 1);
    };

    const intervalId = setInterval(incrementarSegundos, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        duration: 10,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <div
      id="inicio"
      className=" relative overflow-hidden h-screen flex items-center  flex-col w-full  "
    >
      <ParallaxEffect />

      <motion.div
        className="  absolute  items-center top-[115px]  right-[40px] "
        animate={controls}
      >
        <img
          className="w-28 h-28  animate-fade-down"
          src={darkMode ? logotipowhite : logotipoblack}
          alt="logo"
        />
      </motion.div>

      <i class="bi bi-arrow-down-right text-black  dark:text-stone-100 text-4xl absolute left-[45%] lg:left-[50%] bottom-10"></i>

      <div className="fixed font-poppin bottom-10 left-[40px]  px-0 text-[11px]  lg:text-[15px] text-black  dark:text-stone-100 z-50 font-medium">
        <p>© 2024 Gustavo Gomez</p>
      </div>

      <p className="fixed  font-poppin bottom-10 right-[40px] md:right[75px] text-[11px] lg:right-[50px] lg:text-[15px] text-black  dark:text-stone-100 z-50 font-medium ">
        Tiempo {segundos}
      </p>
    </div>
  );
};

export default Hero;
