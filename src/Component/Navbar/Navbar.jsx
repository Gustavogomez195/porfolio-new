import { useState } from "react";


const Navbar = () => {
  const [menu, setMenu] = useState(false)


  const clickMenu = ()=>{
    setMenu((!menu))
    console.log(menu);
  }

  


  return (
    <div >
    <div className="lg:hidden flex  items-center realtive">
    <i className="bi bi-list text-slate-50 text-2xl cursor-pointer " onClick={clickMenu}></i>
    </div>
    <ul className={` ${menu ? "bg-gradient-to-br from-black via-gray-900 to-black  absolute border rounded-md  border-slate-50  text-center top-20 mx-auto left-10 right-10 w-4/5 p-2 transition-all duration-500"  : " absolute top-20 mx-auto left-10 right-10 w-4/5 text-center transition-all duration-500 opacity-0  "}  lg:opacity-100 lg:bg-transparent lg:top-0 lg:mx-0 lg:left-0 lg:right-0 lg:w-full lg:p-0 lg:relative lg:border-none lg:flex font-oswald uppercase gap-5 `}>
        <li className=" pb-2 lg:pb-0 text-slate-50  cursor-pointer  relative after:content-[''] after:bg-slate-50 after:w-0 after:h-1 after:absolute after:top-[22px] after:left-0 after:duration-200 hover:after:w-full  " ><a href="#inicio">inicio</a></li>
        <li className="pb-2 lg:pb-0 text-slate-50  cursor-pointer  relative after:content-[''] after:bg-slate-50 after:w-0 after:h-1 after:absolute after:top-[22px] after:left-0 after:duration-200 hover:after:w-full " ><a href="#sobremi">sobre mi</a></li>
        <li className="pb-2 lg:pb-0 text-slate-50 cursor-pointer  relative after:content-[''] after:bg-slate-50 after:w-0 after:h-1 after:absolute after:top-[22px] after:left-0 after:duration-200 hover:after:w-full   "><a href="#proyectos">proyectos</a></li>
        <li className="pb-2 lg:pb-0 text-slate-50  cursor-pointer  relative after:content-[''] after:bg-slate-50 after:w-0 after:h-1 after:absolute after:top-[22px] after:left-0 after:duration-200 hover:after:w-full   "><a href="#contactos">contactos</a></li>

  
 
        
    </ul>
    </div>
   
  )
}

export default Navbar