import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Ecommerce from "../../assets/ecommerce.mp4";
import Cart from "../../assets/cart.mp4";
import Calculadora from "../../assets/calculadora.mp4"
import Fuego from "../../assets/fuego.jpg";
import Fuegos from "../../assets/fuegos.jpg";
import Farol from "../../assets/farol.jpg";

const proyectos = [
  {
    id: 1,
    video: Ecommerce,
    title: "Ecommerce",
    description:
      "Como proyecto final de un curso, desarrollé un ecommerce en colaboración con dos compañeros. Utilizamos tecnologías como React.js, Tailwind CSS, Node.js, Express, y MongoDB para llevarlo a cabo",
    background: Fuego,
    link: "https://back-end-react-final-project.vercel.app/",
    github: "https://github.com/LautaroJLZ/BackEndReact"
  },
  {
    id: 2,
    video: Cart,
    title: "Carrito de compras",
    description: "Lista de Productos con Carrito, Agrega y elimina artículos del carrito, aumentar/disminuir la cantidad de artículos en el carrito, ver un modal de confirmación de pedido cuando hagan clic en Confirmar Pedido, restablece sus selecciones cuando hagan clic en Iniciar Nuevo Pedido",
    background: Farol,
    link: "https://carrito-orcin.vercel.app/",
    github: "https://github.com/Gustavogomez195/Carrito"
  },
  {
    id: 3,
    video: Calculadora,
    title: "Calculadora fitness",
    description: "Calculadora Fitness, los usuario pueden calcular sus calorías, seleccionar un objetivo, mantener, aumentar o bajar de peso, guardar los resultados y eliminar los resultados guardados ",
    background: Fuegos,
    link: "https://calculadora-fit-five.vercel.app/",
    github: "https://github.com/Gustavogomez195/calculadora-fit"
  },
];

const Proyectos = () => {
  const [currentProject, setCurrentProject] = useState(1);
  const sectionRefs = useRef([]);
  const videoRefs = useRef([]);

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(entry.target);
          const videoElement = videoRefs.current[index];

          if (entry.isIntersecting) {
            setCurrentProject(proyectos[index]?.id);
            if (videoElement) videoElement.play();
          } else {
            if (videoElement) videoElement.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () =>
      sectionRefs.current.forEach((ref) => ref && observer.unobserve(ref));
  }, []);

  const flipVariants = {
    initial: { rotateX: 90, opacity: 0 },
    animate: { rotateX: 0, opacity: 1 },
    exit: { rotateX: -90, opacity: 0 },
  };

  return (
    <motion.section
      id="proyectos"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      transition={{ duration: 0.5 }}
    >
      <h4 className="text-4xl lg:text-8xl text-black dark:text-stone-100 font-poppin font-medium mx-10 uppercase pb-20">
        Proyectos seleccionados
      </h4>
      <div className="relative w-full flex flex-col lg:flex-row px-10">
        <div className="relative lg:sticky  top-0 w-full h-1/2 lg:h-screen z-10 font-poppin font-medium text-black dark:text-stone-100 pr-10 pb-20 lg:pb-0">
          <p className="text-lg">
            Proyectos seleccionados que realicé para demostrar mis
            conocimientos. Cada uno refleja mi habilidad para aplicar conceptos
            técnicos y creativos en el desarrollo de soluciones efectivas y
            estéticamente atractivas.
          </p>
          <div className="text-[250px] hidden lg:flex ">
            <span>0</span>
            <motion.span
              className="inline-block w-2"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={flipVariants}
              transition={{ duration: 0.8 }}
              key={currentProject}
            >
              {currentProject}
            </motion.span>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-5">
          {proyectos.map((proyecto, index) => (
            <div
              key={proyecto.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="w-full h-1/2 lg:h-screen flex justify-center items-center relative"
            >
              <div
                className="absolute inset-0 rounded-xl "
                style={{
                  backgroundImage: `url(${proyecto.background})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(70%) ",
                  zIndex: 0,
                }}
              ></div>

              <div className="relative z-10 p-8">
                <h2 className="text-5xl font-medium text-stone-100 pb-8">
                  {proyecto.title}
                </h2>
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="w-90 rounded-xl"
                  src={proyecto.video}
                  muted
                  loop
                  style={{ zIndex: 1 }}
                >
                  Tu navegador no soporta el elemento de video.
                </video>
                <p className="mt-4 font-poppin font-medium text-stone-100 backdrop-blur-sm">
                  {proyecto.description}
                </p>
                <div className="font-poppin font-medium  text-md flex pt-10 gap-x-3">
                  <a
                    href={proyecto.link}
                    target="_blank"
                  >
                    <button className="rounded-full border border-2 pr-2 text-stone-100 hover:text-stone-300">
                      <i className="bi bi-link-45deg px-1"></i>Deploy
                    </button>
                  </a>
                  <a
                    href={proyecto.github}
                    target="_blank"
                  >
                    <button className="rounded-full border border-2 pr-2 text-stone-100 hover:text-stone-300">
                      <i className="bi bi-github px-1"></i>GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Proyectos;
