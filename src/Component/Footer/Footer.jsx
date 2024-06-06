import React from 'react'
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className='overflow-hidden  pb-20 lg:pb-24 pt-10 lg:pt-12'>
           <motion.div  
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}>

<p className=' text-slate-50 font-oswald  tracking-wider text-4xl md:text-[80px]  lg:text-[50px] uppercase opacity-30  '>!Contactate conmigo¡</p>
     

     </motion.div>
    </footer>
  )
}

export default Footer