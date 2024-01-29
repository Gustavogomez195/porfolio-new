
import Silla from "../../assets/silla.jpg"
import { Card } from "./Card";
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';




const Proyectos = () => {



  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);
  const cards = [
    {
      id: 1,
      title: "Proyecto-1",
      subtitle: "Informacion sobre el proyecto que lo voy a escribir aca cuando sepa cual subir",
      image: Silla,
    },
    {
      id: 2,
      title: "Proyecto-2",
      subtitle: "Informacion sobre el proyecto que lo voy a escribir aca cuando sepa cual subir",
      image: Silla,
    },
    {
      id: 3,
      title: "Proyecto-3",
      subtitle: "Informacion sobre el proyecto que lo voy a escribir aca cuando sepa cual subir"  ,
      image: Silla,
    },
   
  ];
  return (
    <section  id='proyectos' className=" w-full lg:h-screen  bg-stone-900 px-10 lg:px-16 pt-10 lg:pt-16 pb-20"
    >
      
<motion.div   ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}>

      <h5 className=' text-red-300 font-oswald font-bold tracking-tighter text-4xl lg:text-[100px] uppercase leading-none '>proyectos  <span className="pl-16 lg:pl-24   ">seleccionados  </span></h5>
      
  
      
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5 pt-20  ">
        {cards.map((card) => (
          <div key={card.id}>
            <Card
              titles={card.title}
              subtitles={card.subtitle}
              images={card.image}
            />
          </div>
        ))}
      </div>
</motion.div>
    </section>
  );
};

export default Proyectos