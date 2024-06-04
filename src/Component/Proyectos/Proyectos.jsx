
import Silla from "../../assets/silla.jpg"
import ecommerce from "../../assets/ecommerce.png"
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
      title: "Ecommerce",
      subtitle: "Desarrollé un ecommerce dedicado a la venta de muebles en colaboración con un equipo, utilizando MongoDB como base de datos. Utilizamos Express.js como framework de backend para la gestión de rutas y controladores, React.js para la interfaz de usuario dinámica y responsive, y Node.js para el entorno de ejecución del servidor.",
      image: ecommerce,
    },
    {
      id: 2,
      title: "Proyecto-2",
      subtitle: "Informacion sobre el proyecto",
      image: Silla,
    },
    {
      id: 3,
      title: "Proyecto-3",
      subtitle: "Informacion sobre el proyecto"  ,
      image: Silla,
    },
   
  ];
  return (
    <section  id='proyectos' className=" w-full lg:h-screen  bg-gray-950 px-10 lg:px-36 pt-10 lg:pt-16 pb-20"
    >
      
<motion.div   ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}>

      <h5 className=' text-[#ca92d4] font-oswald font-bold tracking-tighter text-4xl lg:text-[80px] uppercase leading-none px-2 '>proyectos  <span className="pl-16 lg:pl-36   ">seleccionados  </span></h5>
      
  
      
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3  gap-5 pt-20 px-3 ">
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