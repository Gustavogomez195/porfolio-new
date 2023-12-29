import React from 'react'

const Navbar = () => {
  return (
    <ul className='flex font-volta uppercase gap-5 '>
        <li className="cursor-pointer hover:text-gray-700 relative after:content-[''] after:bg-black after:w-0 after:h-1 after:absolute after:top-[20px] after:left-0 after:duration-200 hover:after:w-full after:bg-black hover:text-black" >incio</li>
        <li className="cursor-pointer hover:text-gray-700 relative after:content-[''] after:bg-black after:w-0 after:h-1 after:absolute after:top-[20px] after:left-0 after:duration-200 hover:after:w-full after:bg-black hover:text-black">sobre mi</li>
        <li className="cursor-pointer hover:text-gray-700 relative after:content-[''] after:bg-black after:w-0 after:h-1 after:absolute after:top-[20px] after:left-0 after:duration-200 hover:after:w-full after:bg-black hover:text-black">proyectos</li>
        <li className="cursor-pointer hover:text-gray-700 relative after:content-[''] after:bg-black after:w-0 after:h-1 after:absolute after:top-[20px] after:left-0 after:duration-200 hover:after:w-full after:bg-black hover:text-black">contactos</li>
    </ul>
  )
}

export default Navbar