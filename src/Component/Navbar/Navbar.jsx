import React, { useState } from 'react'

const Navbar = () => {

  const [mode , setMode]= useState(false)

  const handlerClick = () =>{
    setMode(!mode);
   
    
  }


  return (
    <ul className='flex font-volta uppercase gap-5 '>
        <li className="cursor-pointer hover:text-gray-700 relative after:content-[''] after:bg-black after:w-0 after:h-1 after:absolute after:top-[20px] after:left-0 after:duration-200 hover:after:w-full after:bg-black hover:text-black" >incio</li>
        <li className="cursor-pointer hover:text-gray-700 relative after:content-[''] after:bg-black after:w-0 after:h-1 after:absolute after:top-[20px] after:left-0 after:duration-200 hover:after:w-full after:bg-black hover:text-black"><a href="#sobremi">sobre mi</a></li>
        <li className="cursor-pointer hover:text-gray-700 relative after:content-[''] after:bg-black after:w-0 after:h-1 after:absolute after:top-[20px] after:left-0 after:duration-200 hover:after:w-full after:bg-black hover:text-black">proyectos</li>
        <li className="cursor-pointer hover:text-gray-700 relative after:content-[''] after:bg-black after:w-0 after:h-1 after:absolute after:top-[20px] after:left-0 after:duration-200 hover:after:w-full after:bg-black hover:text-black">contactos</li>
        <button onClick={handlerClick}>
          {mode === true ?<i className="bi bi-sun text-md  "></i> : <i className="bi bi-moon text-md   "></i>}
        
        </button>
    </ul>
  )
}

export default Navbar