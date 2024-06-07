
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {

    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === 'Escape') {
            onClose();
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [onClose]);
  return (
    <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-stone-950 border p-4 rounded-lg shadow-lg max-w-lg w-full"
      >
        <div className='flex justify-between'>
        <h2 className="text-2xl text-slate-50  mb-2">{project.title}</h2>
          <button className="text-red-500 text-oswald" onClick={onClose}>
            Cerrar
          </button>

        </div>
        <p className="mb-2 text-slate-50 font-oswald text-sm ">{project.description}</p>
        <div className='pb-2 flex'>
        <a target='_blank' href={project.git}><i className="bi bi-github text-white text-xl pr-3 hover:text-slate-300"></i></a>
        <a target='_blank' href={project.link}><i class="bi bi-link-45deg text-white  text-xl hover:text-slate-300"></i></a>

        </div>
        <img src={project.image} alt={project.title} className="w-full h-[360px] mb-2 rounded" />
       
      </motion.div>
    </div>
  );
};

export default ProjectModal;
