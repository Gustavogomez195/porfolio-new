import Navbar from "./Navbar"
import Logo1 from "../../assets/logo1.png"
import Logo2 from "../../assets/logo2.png"
import { useEffect, useState } from "react";



const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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
    <header className={` ${scrolling ? 'pt-2 pb-2 backdrop-blur-sm  ' : ''} fixed w-full px-16 flex justify-between justify-center items-center pb-5 pt-5 border-b border-gray-600 transition-all duration-300 `}>
        <div className="flex gap-5 justify-center items-center">
          <img className="w-20" src={Logo2} alt="logo" />
         <i className="bi bi-instagram cursor-pointer hover:text-gray-700 "></i>
         <i className="bi bi-linkedin cursor-pointer hover:text-gray-700"></i>
         <i className="bi bi-github cursor-pointer hover:text-gray-700"></i>
        </div>
        <div><Navbar/></div>
    </header>
  )
}

export default Header