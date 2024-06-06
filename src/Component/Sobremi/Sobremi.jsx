import perfil from "../../assets/stickerg.png"

import html from "../../assets/html.svg"
import css from "../../assets/css.svg"
import javascript from "../../assets/javascript.svg"
import react from "../../assets/react.svg"
import tailwind from "../../assets/tailwind.svg"
import node from "../../assets/node.svg"
import mongo from "../../assets/mongodb.png"
import { useEffect} from "react"
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
    <div   id="sobremi" className=" tracking-wider  w-full   lg:h-screen  flex flex-col md:flex-row lg:flex-row px-20 gap-20 pt-5 lg:pt-20 pb-20 transition-all duration-500  "
   >
     
    
      <motion.div className=" flex justify-center   w-full " 
       ref={ref}
       initial="hidden"
       animate={controls}
       variants={{
         visible: { opacity: 1, y: 0 },
         hidden: { opacity: 0, y: 200 },
       }}
       transition={{ duration: 0.5 }} >




   <img className="hover:scale-125 duration-200" src={perfil} alt="perfil" />

      </motion.div>

      
    
<motion.div className="w-full h-full  border-t border-b  border-slate-50 border-opacity-60  p-10  "
 ref={ref}
 initial="hidden"
 animate={controls}
 variants={{
   visible: { opacity: 1, y: 0 },
   hidden: { opacity: 0, y: 200 },
 }}
 transition={{ duration: 0.5 }}>

    <h1 className="  text-[40px] md:text-[60px] lg:text-5xl  text-slate-50 left-1/2  top-7 font-oswald pb-10 ">Sobre mi</h1>
    <p className="  text-slate-50 left-1/2 right-14 top-24 font-oswald pb-10  ">Soy Gustavo de Obera Misiones Argentina, desarrollador frontend trainee con habilidades sólidas en la creación de interfaces interactivas y atractivas, estoy en constante aprendizaje </p>
    <h5 className=" font-oswald  text-[40px] md:text-[60px] lg:text-5xl text-slate-50 left-1/2  top-40 pb-10">Skill</h5>
    
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