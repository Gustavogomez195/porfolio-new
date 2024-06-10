import perfil from "../../assets/stickerg.png"

import html from "../../assets/html.svg"
import css from "../../assets/css.svg"
import javascript from "../../assets/javascript.svg"
import react from "../../assets/react.svg"
import tailwind from "../../assets/tailwind.svg"
import node from "../../assets/node.svg"
import mongo from "../../assets/mongo.png"
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
    <div   id="sobremi" className=" tracking-wider  w-full   lg:h-screen  flex flex-col md:flex-row lg:flex-row md:px-10 px-10 md:px-14 lg:px-20 gap-20 pt-5 lg:pt-20 pb-10 lg:pb-20 transition-all duration-500  "
   >
     
    
      <motion.div className=" flex justify-center w-full  " 
       ref={ref}
       initial="hidden"
       animate={controls}
       variants={{
         visible: { opacity: 1, y: 0 },
         hidden: { opacity: 0, y: 200 },
       }}
       transition={{ duration: 0.5 }}
        >




   <img className="hover:scale-125 duration-200  " src={perfil} alt="perfil" />

      </motion.div>

      
    
<motion.div className="w-full h-full  border-t border-b  border-slate-50 border-opacity-60 pt-10 pb-10 p-0 lg:p-10  "
 ref={ref}
 initial="hidden"
 animate={controls}
 variants={{
   visible: { opacity: 1, y: 0 },
   hidden: { opacity: 0, y: 200 },
 }}
 transition={{ duration: 0.5 }}>

    <h1 className="  text-3xl md:text-4xl lg:text-5xl  text-slate-50 left-1/2  top-7 font-oswald pb-10 ">Sobre mi</h1>
    <p className="  text-slate-50 left-1/2 right-14 top-24 font-oswald pb-10  ">Soy Gustavo de Obera Misiones Argentina, desarrollador frontend trainee con habilidades sólidas en la creación de interfaces interactivas y atractivas, estoy en constante aprendizaje </p>
    <h5 className=" font-oswald  text-3xl md:text-4xl lg:text-5xl text-slate-50 left-1/2  top-40 pb-10">Skill</h5>
    
    <div className="flex flex-wrap gap-5  text-slate-50  font-oswald items-center ">

 
    <img  src={html} alt="html" />




    <img  src={css} alt="css" />



    <img   src={javascript} alt="javascript" />
    


    
    <img  src={react} alt="react" />
    


  
    <img  src={tailwind} alt="tailwind" />
    



    <img  src={node} alt="node" />


 

    <img className="w-10  " src={mongo} alt="mongo" />




    
    </div>
</motion.div>


    </div>
    
  )
}

export default Sobremi