import Ecommerce  from "../../assets/ecommerce.png"
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

const ProjectList = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const projectList = [
    { title: 'Ecommerce', image: Ecommerce },
    { title: 'Proyecto 2', image: Ecommerce },
    { title: 'Proyecto 3', image: Ecommerce },
  ];

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);


  
    return (
      <motion.div id="proyectos"  className=" pt-20 pb-48 w-full h-screen  flex flex-col items-center tracking-wider "
      ref={ref}
    initial="hidden"
    animate={controls}
    variants={{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 100 },
    }}
    transition={{ duration: 0.5 }}>
        
            <h4  className=" text-slate-50 font-oswald tracking-wider text-5xl w-full px-20 m-20">Proyectos</h4>
        
        {projectList.map((project, index) => (
          <div key={index} className="w-[87%]   flex items-center relative overflow-hidden  border-t  border-slate-50 border-opacity-40 hover:border-opacity-60 pb-24 pt-24   group">
            <img
              src={project.image}
              alt={project.title}
              className="rounded absolute top-6 left-0 transform -translate-x-full w-30 h-36 object-cover transition-transform duration-500 ease-in-out group-hover:translate-x-10"
            />
            <h2 className="text-5xl text-slate-50   font-oswald transition-all duration-500 ease-in-out pl-10 opacity-20 group-hover:opacity-100 group-hover:ml-48">
              {project.title}
            </h2>
            <i className="bi bi-arrow-up-right text-4xl text-slate-50 opacity-10  absolute left-[90%] duration-300 group-hover:opacity-100 "></i>
          </div>
        ))}
      </motion.div>
    );
  };
  
  export default ProjectList;