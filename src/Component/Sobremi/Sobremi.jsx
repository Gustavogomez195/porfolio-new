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

  
  const [scrolear, setScrolear] = useState  (false)

  useEffect(() => {
    const hacerScroll = () => {
      if (window.scrollY > 1000) {
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
    <div   id="sobremi" className={` ${scrolear ? 'bg-stone-900' : ' bg-green-950 '} w-full   h-screen  flex flex-col lg:flex-row px-16 gap-20 pt-5 lg:pt-20 pb-20 transition-all duration-500  `}
   >
      <motion.div className="relative flex items-center w-full " 
       ref={ref}
       initial="hidden"
       animate={controls}
       variants={{
         visible: { opacity: 1, y: 0 },
         hidden: { opacity: 0, y: 100 },
       }}
       transition={{ duration: 0.5 }} >

    <img className="w-20 h-20 lg:h-52 lg:w-52  lg:absolute top-0 lg:top-[270px]   " src={pelota} alt="pelota" />
   <img className="  absolute z-30 right-0 lg:right-4 bottom-14 lg:bottom-10" src={perfil} alt="perfil" />
   <img className="lg:absolute w-16 h-16 lg:w-40 lg:h-40 end-8 top-0  " src={mate} alt="mate" />
   <img className="lg:absolute w-16 h-16 lg:w-40 lg:h-40 end-8 top-72" src={bandera} alt="bandera" />
   <img className="lg:w-24 lg:h-24 w-12 h-12 top-10 left-16 lg:absolute   " src={copa} alt="copa" />
      </motion.div>

      
    
<motion.div className="w-full  font-oswald border rounded-lg border-orange-100 px-10 "
 ref={ref}
 initial="hidden"
 animate={controls}
 variants={{
   visible: { opacity: 1, y: 0 },
   hidden: { opacity: 0, y: 50 },
 }}
 transition={{ duration: 0.5 }}>

    <h1 className=" font-bold tracking-tighter text-[40px] lg:text-[80px]  text-red-300 left-1/2 uppercase top-7  ">Sobre mi</h1>
    <p className="  text-orange-100 left-1/2 right-14 top-24  ">Soy Gustavo de Obera Misiones Argentina, desarrollador frontend trainee con habilidades sólidas en la creación de interfaces interactivas y atractivas, estoy en constante aprendizaje </p>
    <h5 className=" font-bold text-[40px] lg:text-[80px] text-orange-100 left-1/2 uppercase top-40">Skill</h5>
    <div className="flex flex-wrap gap-5  ">


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