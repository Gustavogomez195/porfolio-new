import Navbar from "./Navbar"
import Logo1 from "../../assets/logo1.png"
import Logo2 from "../../assets/logo2.png"
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
    <header className={` ${scrolling ? 'pb-1 pt-1 backdrop-blur-sm z-50' : 'pb-5 pt-5'} z-50 fixed w-full px-16 flex justify-between justify-center items-center  border-b border-orange-100 transition-all duration-300 animate-fade-down`}>
        <div className="flex gap-5 justify-center items-center">
          <img className="w-20" src={Logo1} alt="logo" />
         <i className="bi bi-instagram cursor-pointer text-orange-100 hover:text-orange-50 "></i>
         <i className="bi bi-linkedin cursor-pointer text-orange-100  hover:text-orange-50"></i>
         <i className="bi bi-github cursor-pointer text-orange-100  hover:text-orange-50"></i>
        </div>
        <div><Navbar/></div>
        
    </header>
  )
}

export default Header