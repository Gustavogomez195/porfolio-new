

const Navbar = () => {
  


  return (
    <ul className='flex font-oswald uppercase gap-5 '>
        <li className=" text-orange-100  cursor-pointer  relative after:content-[''] after:bg-orange-100 after:w-0 after:h-1 after:absolute after:top-[20px] after:left-0 after:duration-200 hover:after:w-full after:bg-orange-100 " ><a href="#inicio">inicio</a></li>
        <li className="text-orange-100  cursor-pointer  relative after:content-[''] after:bg-orange-100 after:w-0 after:h-1 after:absolute after:top-[20px] after:left-0 after:duration-200 hover:after:w-full after:bg-orange-100" ><a href="#sobremi">sobre mi</a></li>
        <li className="text-orange-100 cursor-pointer  relative after:content-[''] after:bg-orange-100 after:w-0 after:h-1 after:absolute after:top-[20px] after:left-0 after:duration-200 hover:after:w-full after:bg-orange-100  "><a href="#proyectos">proyectos</a></li>
        <li className="text-orange-100  cursor-pointer  relative after:content-[''] after:bg-orange-100 after:w-0 after:h-1 after:absolute after:top-[20px] after:left-0 after:duration-200 hover:after:w-full after:bg-orange-100  "><a href="#contactos">contactos</a></li>
       
    </ul>
  )
}

export default Navbar