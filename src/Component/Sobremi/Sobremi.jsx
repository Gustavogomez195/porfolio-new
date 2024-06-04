import perfil from "../../assets/stickerg.png"
import pelota from "../../assets/pelotasticker.png"
import copa from "../../assets/copa2.png"
import mate from "../../assets/mate1.png"
import bandera from "../../assets/bandera.png"
import html from "../../assets/html.svg"
import css from "../../assets/css.svg"
import javascript from "../../assets/javascript.svg"
import react from "../../assets/react.svg"
import tailwind from "../../assets/tailwind.svg"
import node from "../../assets/node.svg"
import mongo from "../../assets/mongodb.png"
import { useEffect, useState } from "react"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';









const Sobremi = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  
  

 

  return (
    <div   id="sobremi" className=" bg-gradient-to-t from-gray-950 to-[#050b1f] w-full   lg:h-screen  flex flex-col md:flex-row lg:flex-row px-10 lg:px-36 gap-20 pt-5 lg:pt-20 pb-20 transition-all duration-500  "
   >
      <motion.div className="relative flex items-end items-center  justify-center w-full " 
       ref={ref}
       initial="hidden"
       animate={controls}
       variants={{
         visible: { opacity: 1, y: 0 },
         hidden: { opacity: 0, y: 100 },
       }}
       transition={{ duration: 0.5 }} >

    <img className="w-20 h-20 md:w-40 md:h-40 lg:h-52 lg:w-52 md:absolute  lg:absolute start-4 top-0 md:top-[300px] lg:top-[310px]   " src={pelota} alt="pelota" />
   <img className="  absolute z-30 right-0 lg:right-4 bottom-14 md:bottom-8 lg:bottom-10" src={perfil} alt="perfil" />
   <img className="md:absolute  lg:absolute w-16 h-16 md:w-28 md:h-28  lg:w-40 lg:h-40 end-8 top-0  " src={mate} alt="mate" />
   <img className="md:absolute  lg:absolute w-16 h-16 md:w-28 md:h-28  lg:w-40 lg:h-40 end-8 md:top-80 top-72" src={bandera} alt="bandera" />
   <img className="md:absolute  lg:w-24 lg:h-24 w-12 h-12 md:w-16 md:h-16  lg:top-10 md:top-8  md:left-16  lg:left-16 lg:absolute   " src={copa} alt="copa" />
      </motion.div>

      
    
<motion.div className="w-full  font-oswald border rounded-lg border-orange-50 px-10  "
 ref={ref}
 initial="hidden"
 animate={controls}
 variants={{
   visible: { opacity: 1, y: 0 },
   hidden: { opacity: 0, y: 50 },
 }}
 transition={{ duration: 0.5 }}>

    <h1 className=" font-bold tracking-tighter text-[40px] md:text-[60px] lg:text-[80px]  text-[#ca92d4] left-1/2 uppercase top-7  ">Sobre mi</h1>
    <p className="  text-orange-50 left-1/2 right-14 top-24  ">Soy Gustavo de Obera Misiones Argentina, desarrollador frontend trainee con habilidades sólidas en la creación de interfaces interactivas y atractivas, estoy en constante aprendizaje </p>
    <h5 className=" font-bold text-[40px] md:text-[60px] lg:text-[80px] text-orange-50 left-1/2 uppercase top-40">Skill</h5>
    
    <div className="flex flex-wrap gap-5 pb-5  ">


    <img  src={html} alt="html" />
    <img  src={css} alt="html" />
    <img  src={javascript} alt="html" />
    <img  src={react} alt="html" />
    <img  src={tailwind} alt="html" />
    <img  src={node} alt="html" />
    <img className="w-10" src={mongo} alt="html" />


    
    </div>
</motion.div>
    </div>
    
  )
}

export default Sobremi