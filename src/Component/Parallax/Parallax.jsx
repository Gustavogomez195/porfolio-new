import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import 'tailwindcss/tailwind.css';


const wrap = (min, max, value) => {
  const range = max - min;
  return ((value - min) % range + range) % range + min;
};

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div  className="  whitespace-nowrap">
      <motion.div className="flex space-x-4" style={{ x }}>
        <span className="text-8xl font-oswald text-slate-50 tracking-wider text-slate-50 font-semibold uppercase">{children}</span>
        <span className="text-8xl font-oswald text-slate-50 tracking-wider text-slate-50 font-semibold uppercase ">{children}</span>
        <span className="text-8xl font-oswald text-slate-50 tracking-wider text-slate-50 font-semibold uppercase">{children}</span>
        <span className="text-8xl font-oswald text-slate-50 tracking-wider text-slate-50 font-semibold  uppercase">{children}</span>
      </motion.div>  </div>
  );
}

export default function ParallaxEffect() {
  return (
    <section className=" flex flex-col  items-center ">
        
      <ParallaxText  baseVelocity={-2}>- Gustavo Gomez</ParallaxText>

        
        
      <ParallaxText baseVelocity={2}>- Web Developer</ParallaxText>

        
    </section>
  );
}
