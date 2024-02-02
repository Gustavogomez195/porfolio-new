import React from 'react'
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className='overflow-hidden bg-stone-900 pb-20 lg:pb-24 pt-10 lg:pt-12'>
           <motion.div  
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}>

<p className='text-red-300 font-oswald font-bold tracking-tighter text-4xl md:text-[80px]  lg:text-[100px] uppercase opacity-30  '>!Contactate conmigo¡</p>
     

     </motion.div>
    </footer>
  )
}

export default Footer