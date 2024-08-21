import perfil from "../../assets/gustavo-perfil.png";

import html from "../../assets/html5.svg";
import css from "../../assets/css.svg";
import javascript from "../../assets/javascript.svg";
import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwindcss.svg";
import node from "../../assets/nodejs.svg";
import mongo from "../../assets/mongodb.svg";
import figma from "../../assets/figma.svg";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Sobremi = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div
      id="sobremi"
      className="  w-full   lg:h-screen  flex flex-col md:flex-row lg:flex-row md:px-10 px-10 md:px-14 lg:px-10 gap-20 pt-5 lg:pt-20 pb-10 lg:pb-20 transition-all duration-500  "
    >
      <motion.div
        className=" flex justify-start w-full "
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 200 },
        }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={perfil}
          alt="perfil"
          className="hover:saturate-150 hover:scale-110 transition"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 5) 90%, rgba(0, 0, 0, 0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 5) 90%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
      </motion.div>

      <motion.div
        className="w-full h-full  "
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 200 },
        }}
        transition={{ duration: 0.5 }}
      >
        <h1 className=" text-4xl lg:text-8xl text-black dark:text-stone-100 font-poppin font-medium  uppercase pb-10 ">
          Sobre mi
        </h1>
        <div className=" border-b  border-black  dark:border-stone-100 border-opacity-60  pb-10 p-0  text-black     ">
          <p className="  text-lg pb-10 font-medium  dark:text-stone-100 ">
            Soy Gustavo de Obera Misiones Argentina, desarrollador frontend
            trainee con habilidades sólidas en la creación de interfaces
            interactivas y atractivas, estoy en constante aprendizaje{" "}
          </p>
          <h5 className="text-4xl lg:text-6xl text-black  dark:text-stone-100 font-poppin font-medium  uppercase pb-10">
            Skill
          </h5>

          <ul className="flex flex-row gap-5  ">
            <li className="relative group">
              <img
                src={html}
                alt="logo de html"
                className="w-14 h-auto transition duration-300 ease-in-out filter grayscale group-hover:grayscale-0 group-hover:brightness-100"
              />
            </li>
            <li className="relative group">
              <img
                src={css}
                alt="logo de css"
                className="w-14 h-auto transition duration-300 ease-in-out filter grayscale group-hover:grayscale-0 group-hover:brightness-100"
              />
            </li>
            <li className="relative group">
              <img
                src={javascript}
                alt="logo de javascript"
                className="w-14 h-auto transition duration-300 ease-in-out filter grayscale group-hover:grayscale-0 group-hover:brightness-100"
              />
            </li>
            <li className="relative group">
              <img
                src={react}
                alt="logo de reactjs"
                className="w-14 h-auto transition duration-300 ease-in-out filter grayscale group-hover:grayscale-0 group-hover:brightness-100"
              />
            </li>
            <li className="relative group">
              <img
                src={tailwind}
                alt="logo de tailwind"
                className="w-14 h-auto transition duration-300 ease-in-out filter grayscale group-hover:grayscale-0 group-hover:brightness-100"
              />
            </li>
            <li className="relative group">
              <img
                src={node}
                alt="logo de nodejs"
                className="w-12 h-auto transition duration-300 ease-in-out filter grayscale group-hover:grayscale-0 group-hover:brightness-100"
              />
            </li>
            <li className="relative group">
              <img
                src={mongo}
                alt="logo de mongodb"
                className="w-14 h-auto transition duration-300 ease-in-out filter grayscale group-hover:grayscale-0 group-hover:brightness-100"
              />
            </li>
            <li className="relative group">
              <img
                src={figma}
                alt="logo de figma"
                className="w-14 h-auto transition duration-300 ease-in-out filter grayscale group-hover:grayscale-0 group-hover:brightness-100"
              />
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Sobremi;
