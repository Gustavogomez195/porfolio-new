import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion";
import logog from "../../assets/logog.png"





const Hero = () => {
  const controls = useAnimation();

  
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
    <div id="inicio" className="bg-stone-900 h-screen flex justify-center items-center " >
<div className= 'font-oswald font-bold tracking-tighter  text-orange-100 text-center text-[110px] uppercase animate-fade-down'>
     
    

      <h1 >
        Hola, soy <span className=" text-red-300 ">Gustavo Gomez</span> 
      </h1>

      <h4 >Desarrollador web</h4>
    </div>
     <motion.div className="absolute bottom-8 left-10 flex items-center justify-center text-orange-100" animate={controls}>
      <img className="w-40 h-40 animate-fade-down" src={logog} alt="logo" />

     </motion.div>
     

</div>
    
    
  )
}

export default Hero