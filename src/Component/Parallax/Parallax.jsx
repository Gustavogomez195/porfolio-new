import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";


function ParallaxText({ children, direction = 1, className }) {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 300], ["0%", `${direction * 100}%`]);
  const opacity = useTransform(scrollY, [200, 300], [1, 0]);

  return (
    <motion.div
      style={{ x, opacity }}
      className={`text-6xl lg:text-9xl  text-black dark:text-stone-100 tracking-light font-semibold font-poppin uppercase ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function ParallaxEffect() {
  return (
    <div
      id="inicio"
      className="relative h-screen flex flex-col justify-center px-12 space-y-4 w-full"
    >
      <ParallaxText direction={-1} className="self-start">
        Diseños{" "}
      </ParallaxText>
      <ParallaxText direction={1} className="lg:pl-12">
        Creativos{" "}
      </ParallaxText>

      <ParallaxText direction={-1} className=" self-start lg:self-end">
        Web Developer
      </ParallaxText>
    </div>
  );
}
