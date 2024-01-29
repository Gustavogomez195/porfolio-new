import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const Contactos = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_91jowea', 'template_fx4t49d', form.current, '-mxGT6qdnqIYAfbPS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  


  

  return (
    <div id='contactos' className=' w-full h-screen bg-stone-900 px-10 lg:px-16 pt-10 lg:pt-16  overflow-hidden '>
      
      <motion.h5  ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }} className='text-red-300 font-oswald font-bold tracking-tighter text-4xl  lg:text-[100px] uppercase pt-10 '>Contactos</motion.h5>
<div className='flex flex-col lg:grid lg:grid-cols-2 pt-16'>

    

    <div className='font-oswald text-orange-100 pr-10 pb-10  '>
<div className='flex items-center gap-x-2 pb-10 '>

    <i className="bi bi-geo-alt text-xl"></i>
    <p>Obera, Misiones, Argentina</p>
    
</div>

<p>Estoy encantado de que estés interesado en ponerse en contacto conmigo. Estoy disponible y dispuesto para responder a tus preguntas, escuchar tus comentarios o discutir cualquier asunto que tengas en mente.</p>

    </div>

    <div className='w-full  mb-20 font-oswald border rounded-lg border-orange-100 p-5  '>

    <form ref={form} onSubmit={sendEmail}>

        <div className='font-oswald text-orange-100 flex flex-col mb-5' >

         <label>Nombre</label>
          <input className='border border-orange-100 rounded bg-transparent'  type="text" name="user_name" required />
        </div>

        <div className='font-oswald text-orange-100 flex flex-col mb-5'>

      <label>Email</label>
      <input className='border border-orange-100 rounded bg-transparent'  type="email" name="user_email" required />
        </div>

        <div className='font-oswald text-orange-100 flex flex-col mb-5 '>

      <label>Mensaje</label>
      <textarea className='border border-orange-100 rounded bg-transparent'  name="message"/>
        </div>
      <input className='font-oswald text-red-300 text-xl border border-orange-100 rounded p-2 cursor-pointer' type="submit" value="Enviar"  />
    </form>
    </div>

</div>

    

    </div>
  )
}

export default Contactos