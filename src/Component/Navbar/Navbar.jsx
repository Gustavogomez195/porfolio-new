import { useState } from "react";


const Navbar = () => {
  const [menu, setMenu] = useState(false)


  const clickMenu = ()=>{
    setMenu((!menu))
    console.log(menu);
  }

  


  return (
<div>
  <div className="lg:hidden flex items-center relative">
    <i className="bi bi-list text-slate-50 text-2xl cursor-pointer" onClick={clickMenu}></i>
  </div>
  <ul className={` ${menu ? "bg-gradient-to-br from-black via-gray-900 to-black absolute border rounded-md border-slate-50 text-center top-20 mx-auto left-10 right-10 w-4/5 p-2 transition-all duration-500" : "absolute top-20 mx-auto left-10 right-10 w-4/5 text-center transition-all duration-500 opacity-0"} lg:opacity-100 lg:bg-transparent lg:top-0 lg:mx-0 lg:left-0 lg:right-0 lg:w-full lg:p-0 lg:relative lg:border-none lg:flex font-oswald font-thin gap-5`}>
    
    <li className="pb-2 lg:pb-0 text-slate-50 cursor-pointer relative group">
      <a href="#inicio" className="block overflow-hidden relative h-6"> 
        <span className="block transform transition-transform duration-500 group-hover:-translate-y-full">Inicio</span>
        <span className="block absolute inset-0 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">Inicio</span>
      </a>
    </li>
    
    <li className="pb-2 lg:pb-0 text-slate-50 cursor-pointer relative group">
      <a href="#sobremi" className="block overflow-hidden relative h-6">
        <span className="block transform transition-transform duration-500 group-hover:-translate-y-full">Sobre mi</span>
        <span className="block absolute inset-0 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">Sobre mi</span>
      </a>
    </li>
    
    <li className="pb-2 lg:pb-0 text-slate-50 cursor-pointer relative group">
      <a href="#proyectos" className="block overflow-hidden relative h-6">
        <span className="block transform transition-transform duration-500 group-hover:-translate-y-full">Proyectos</span>
        <span className="block absolute inset-0 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">Proyectos</span>
      </a>
    </li>
    
    <li className="pb-2 lg:pb-0 text-slate-50 cursor-pointer relative group">
      <a href="#contactos" className="block overflow-hidden relative h-6">
        <span className="block transform transition-transform duration-500 group-hover:-translate-y-full">Contactos</span>
        <span className="block absolute inset-0 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0 ">Contactos</span>
      </a>
    </li>
  
  </ul>
</div>



  )
}

export default Navbar