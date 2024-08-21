import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const Contactos = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [notification, setNotification] = useState('');

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification('');
    }, 3000);

    return () => clearTimeout(timer);
  }, [notification]);



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_91jowea', 'template_fx4t49d', form.current, '-mxGT6qdnqIYAfbPS')
      .then((result) => {
          console.log(result.text);
          setNotification('El mensaje fue enviado con éxito.');
      }, (error) => {
          console.log(error.text);
          setNotification('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      });
  };

  


  

  return (
    <motion.div id='contactos' className=' mt-10 pb-30  tracking-wider  w-full   px-10 lg:px-10 pt-10   overflow-hidden '
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 200 },
    }}
    transition={{ duration: 0.5 }} >
      
      
      <h5 className=' text-black  dark:text-stone-100 font-poppin font-medium text-4xl md:text-4xl lg:text-8xl pt-20  '>Contactos</h5>
<div className='flex flex-col lg:grid lg:grid-cols-2 pt-16'>

    

    <div className=' text-black  dark:text-stone-100 px-3 pb-10 pr-10 font-medium font-poppin'>
<div className='flex  items-center gap-x-2 pb-10  '>

    <i className="bi bi-geo-alt text-xl"></i>
    <p>Obera, Misiones, Argentina</p>
    
    
</div>

<p  >Estoy encantado de que estés interesado en ponerse en contacto conmigo. Estoy disponible y dispuesto para responder a tus preguntas, escuchar tus comentarios o discutir cualquier asunto que tengas en mente.</p>

    </div>

    <div className='relative w-full  mb-20 font-poppin font-medium rounded border  border-black dark:border-stone-100 border-opacity-50 p-5  '>
    {notification && <div className='absolute  bottom-0 right-0 mb-4 mr-4 bg-green-900 text-stone-100 py-2 px-4 border rounded-lg shadow'>{notification}</div>}

    <form ref={form} onSubmit={sendEmail}>

        <div className=' font-poppin font-medium text-black  dark:text-stone-100 tracking-wider flex flex-col mb-5' >

         <label>Nombre</label>
          <input className='border border-black dark:border-stone-100 border-opacity-50 rounded bg-transparent focus:outline-none'  autoComplete='off' type="text" name="user_name" required />
        </div>

        <div className='font-poppin font-medium text-black  dark:text-stone-100 tracking-wider  flex flex-col mb-5'>

      <label>Email</label>
      <input className='border border-black dark:border-stone-100 border-opacity-50 rounded bg-transparent focus:outline-none' autoComplete='off' type="email" name="user_email" required />
        </div>

        <div className='font-poppin font-medium text-black  dark:text-stone-100 tracking-wider flex flex-col mb-5 '>

      <label>Mensaje</label>
      <textarea className='border border-black dark:border-stone-100 border-opacity-50 rounded bg-transparent focus:outline-none'  name="message"/>
        </div>
      <input className='font-poppin font-medium text-black    dark:text-stone-100  tracking-wider text-xl border border-black dark:border-stone-100 border-opacity-50 rounded-full px-3 cursor-pointer' type="submit" value="Enviar"  />
    </form>
    </div>

</div>

    

    </motion.div>
  )
}

export default Contactos