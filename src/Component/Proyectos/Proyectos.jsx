import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Ecommerce from "../../assets/ecommerce.png";
import Sinfoto from "../../assets/sinfoto.jpg";

const Proyectos = () => {
  const cards = [
    { id: 1, title: 'Ecommerce', image: Ecommerce, git: "https://github.com/LautaroJLZ/BackEndReact", link: "https://back-end-react-final-project.vercel.app/", description: "Desarrollé un ecommerce dedicado a la venta de muebles como proyecto final de cursada en colaboración con un equipo, utilizando el stack MERN, MongoDb, Express.js, React.js y Node.js." },
    { id: 2, title: 'Proyecto 2', image: Sinfoto, description: "Descripción del Proyecto 2." },
    { id: 3, title: 'Proyecto 3', image: Sinfoto, description: "Descripción del Proyecto 3." },
    
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(cards.length - 1) * 100}vw`]);


  

  return (
    <section ref={targetRef} className="relative h-[600vh] w-full"
    id="proyectos">
      <h4 className="text-slate-50 font-oswald tracking-wider text-3xl md:text-4xl lg:text-5xl  px-10 ">Proyectos</h4>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        <motion.div style={{ x }} className="flex flex-row">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="h-full w-screen px-10">
      
      <div className="flex flex-row w-full h-full">
        <div className="w-1/2 flex  text-slate-50 font-oswald ">
          <div className=" justify-center  h-full">
            <h2 className="text-5xl mb-4">{card.title}</h2>
            <p>{card.description}</p>
          </div>
        </div>
        <div className="w-1/2 flex justify-center  ">
          <img src={card.image} alt={card.title} className="w-[100vh] h-[80vh] contrast-100 saturate-50 hover:filter-none object-cover rounded " />
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
