import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion";





const Hero = () => {
  const controls = useAnimation();

  
  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        duration: 10,
        ease: "linear",
        loop: Infinity,
        repeat: Infinity
      },
    });
  }, [controls]);

  

  const [scrolear, setScrolear] = useState  (false)

  useEffect(() => {
    const hacerScroll = () => {
      if (window.scrollY > 450) {
        setScrolear(true);
      } else {
        setScrolear(false);
      }
    };

    window.addEventListener('scroll', hacerScroll);

    return () => {
      window.removeEventListener('scroll', hacerScroll);
    };
  }, []);


  
  return (
    <div id="inicio" className={` ${scrolear ? '' : ''} bg-stone-900 h-screen flex justify-center items-center transition-all duration-500 `} >
<div className= 'font-oswald font-bold tracking-tighter  text-orange-100 text-center text-[110px] uppercase animate-fade-down'>
     
    

      <h1 >
        Hola, soy <span className=" text-red-300 ">Gustavo Gomez</span> 
      </h1>

      <h4 >Desarrollador web</h4>
    </div>
     <motion.div className="absolute bottom-10 left-20 flex items-center justify-center w-20 h-20 rounded-full border-2 border-solid text-orange-100" animate={controls}>
      hola  

     </motion.div>
     

</div>
    
    
  )
}

export default Hero