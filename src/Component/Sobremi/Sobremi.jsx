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








const Sobremi = () => {
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
    <div   id="sobremi" className={` ${scrolear ? 'bg-green-950' : 'bg-stone-900'} w-full h-screen  flex te px-16 gap-20 pt-20 transition-all duration-500  `}
   >
      <div className="relative  w-full">

    <img className="w-52 absolute top-[250px]   " src={pelota} alt="pelota" />
   <img className="  absolute z-30 right-4" src={perfil} alt="perfil" />
   <img className="absolute w-40 end-8" src={mate} alt="mate" />
   <img className="absolute w-40 end-8 top-72" src={bandera} alt="bandera" />
   <img className="w-24 top-10 left-20 absolute  " src={copa} alt="copa" />
      </div>

      
    
<div className="w-full  mb-10 font-oswald border rounded-lg border-orange-100 px-10 ">

    <h1 className=" font-bold tracking-tighter text-[80px]  text-orange-100 left-1/2 uppercase top-7  ">Sobre mi</h1>
    <p className="  text-orange-100 left-1/2 right-14 top-24  ">Soy Gustavo de Obera Misiones Argentina, desarrollador frontend trainee con habilidades sólidas en la creación de interfaces interactivas y atractivas, estoy en constante aprendizaje </p>
    <h5 className=" font-bold  text-[80px] text-orange-100 left-1/2 uppercase top-40">Skill</h5>
    <div className="flex gap-5">

    <img  src={html} alt="html" />
    <img  src={css} alt="html" />
    <img  src={javascript} alt="html" />
    <img  src={react} alt="html" />
    <img  src={tailwind} alt="html" />
    <img  src={node} alt="html" />
    <img className="w-10" src={mongo} alt="html" />

    
    </div>
</div>
    </div>
    
  )
}

export default Sobremi