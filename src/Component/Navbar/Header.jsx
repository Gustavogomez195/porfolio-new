import Navbar from "./Navbar"

import Logotipo2 from "../../assets/logotipo2.png"
import { useEffect, useState } from "react";




const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  
  return (
    <header className={` ${scrolling ? 'pb-1 pt-1 backdrop-blur-sm z-50 border-b border-slate-50 border-opacity-60' : 'pb-5   pt-5  '}  z-50 fixed w-full px-10 md:px-14 lg:px-10  flex justify-between justify-center items-center  transition-all duration-300 animate-fade-down `}>
        <div className="flex gap-5 justify-center items-center">
          <a href="#inicio"><img  className="w-20 " src={Logotipo2} alt="logo" /></a>
         <a target="_blank" href="https://www.instagram.com/gustavogomezzz_/" ><i className="bi bi-instagram cursor-pointer text-slate-50 hover:text-slate-3  00 "></i></a>
         <a target="_blank" href="https://www.linkedin.com/in/gustavo-gomez-971b761b0/"><i className="bi bi-linkedin cursor-pointer text-slate-50  hover:text-slate-3 00"></i></a>
         <a target="_blank" href="https://github.com/Gustavogomez195"><i className="bi bi-github cursor-pointer text-slate-50  hover:text-slate-3 00"></i></a>
        </div>
        <div ><Navbar/></div>
       
        
    </header>
  )
}

export default Header