import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrolear, setScrolear] = useState(false)

  useEffect(() => {
    const hacerScroll = () => {
      if (window.scrollY > 500) {
        setScrolear(true);
      } else {
        setScrolear(false);
      }
    };

    window.addEventListener('scroll', hacerScroll);

    return () => {
      window.removeEventListener('scroll', hacerScroll);
    };
  }, []);

  
  const [mode , setMode]= useState(false)

  const handlerClick = () =>{
    setMode(!mode);
   
    
  }


  return (
    <ul className='flex font-volta uppercase gap-5 '>
        <li className={` ${scrolear ? 'text-white' : 'text-orange-100'}  cursor-pointer  relative after:content-[''] after:bg-orange-100 after:w-0 after:h-1 after:absolute after:top-[20px] after:left-0 after:duration-200 hover:after:w-full after:bg-orange-100 `} ><a href="#inicio">inicio</a></li>
        <li className={` ${scrolear ? 'text-white' : 'text-orange-100'}  cursor-pointer  relative after:content-[''] after:bg-orange-100 after:w-0 after:h-1 after:absolute after:top-[20px] after:left-0 after:duration-200 hover:after:w-full after:bg-orange-100 `}><a href="#sobremi">sobre mi</a></li>
        <li className={` ${scrolear ? 'text-white' : 'text-orange-100'}  cursor-pointer  relative after:content-[''] after:bg-orange-100 after:w-0 after:h-1 after:absolute after:top-[20px] after:left-0 after:duration-200 hover:after:w-full after:bg-orange-100 `}><a href="#proyectos">proyectos</a></li>
        <li className={` ${scrolear ? 'text-white' : 'text-orange-100'}  cursor-pointer  relative after:content-[''] after:bg-orange-100 after:w-0 after:h-1 after:absolute after:top-[20px] after:left-0 after:duration-200 hover:after:w-full after:bg-orange-100 `}><a href="#contactos">contactos</a></li>
        <button onClick={handlerClick}>
          {mode === true ?<i className="bi bi-sun text-md  "></i> : <i className="bi bi-moon text-md   "></i>}
        
        </button>
    </ul>
  )
}

export default Navbar