import React, { useState, useEffect } from "react";
import Ecommerce from "../../assets/ecommerce.png";
import Sinfoto from "../../assets/sinfoto.jpg"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectModal from './ProjectModal'; // Asegúrate de crear este componente más adelante

const ServiciosList = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const servicios = [
    { title: 'Ecommerce', image: Ecommerce,git: "https://github.com/LautaroJLZ/BackEndReact" ,link: "https://back-end-react-final-project.vercel.app/", description: "Desarrollé un ecommerce dedicado a la venta de muebles como proyecto final de crusada en colaboración con un equipo, utilizando el stack MERN, MongoDb, Express.js, React.js y Node.js " },
    { title: 'Proyecto ', image: Sinfoto, description: "Descripción del Proyecto 2." },
    { title: 'Proyecto ', image: Sinfoto, description: "Descripción del Proyecto 3." },
  ];

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <motion.div
      
      className="pt-20 pb-10 lg:pb-48 w-full h-screen flex flex-col lg:flex-col items-center tracking-wider"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      transition={{ duration: 0.5 }}
    >
      <h4 className="text-slate-50 font-oswald tracking-wider text-3xl md:text-4xl lg:text-5xl w-full px-10 lg:px-10 pt-10 lg:pb-20 pb-10 lg:pt-20">Servicios</h4>

      {servicios.map((project, index) => (
        <div key={index} className="w-[87%] flex items-center  overflow-hidden border-t border-slate-50 border-opacity-40 hover:border-opacity-60 pb-24 pt-24 group">
          
          <h2 className="  text-xl md:text-3xl lg:text-5xl text-slate-50 font-oswald  opacity-none md:opacity-80   lg:opacity-80 group-hover:opacity-100  ">
            {project.title}
          </h2>
          
          <button 
            className="text-[12px] md:text-xl lg:text-2xl text-slate-50 opacity-none md:opacity-80  lg:opacity-80 absolute left-[85%] duration-300 group-hover:opacity-100" 
            onClick={() => handleOpenModal(project)}
          >
            Ver más
          </button>
        </div>
      ))}

      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </motion.div>
  );
};

export default ServiciosList;
