import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion";
import logotipo from "../../assets/logotipo.png"
import ParallaxEffect from "../Parallax/Parallax";








const Hero = () => {
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
        repeat: Infinity
      },
    });
  }, [controls]);

  

  


  
  return (
    <div id="inicio" className=" relative overflow-hidden h-screen flex items-center   " >
      
      <ParallaxEffect/>
     
     <motion.div className="  absolute  items-center  top-[95px] right-[40px] md:right-[60px] lg:right-[60px]" animate={controls}>
      <img className="w-28 h-28  animate-fade-down" src={logotipo} alt="logo" />

     </motion.div>
     

    
    

     <i class="bi bi-arrow-down-right text-white text-4xl absolute left-[45%] lg:left-[50%] bottom-10"></i>
     
     
     <div className="fixed font-oswald bottom-10 left-[40px] md:left-[80px] px-0 text-[11px] lg:left-[80px] lg:text-[15px] text-slate-50 z-50 uppercase">
     <p>© 2024 Gustavo Gomez</p>
     
     </div>
    
     <p className="fixed  font-oswald bottom-10 right-[40px] md:right[75px] text-[11px] lg:right-[75px] lg:text-[15px] text-slate-50 z-50 uppercase ">tiempo {segundos}</p>
     
</div>
    
    
  )
}

export default Hero