import Navbar from "./Navbar";
import Logotipo2 from "../../assets/logotipoguss.png";
import Logowhite from "../../assets/logowhite.png"
import { useEffect, useState } from "react";

const Header = ({darkMode, toggleDarkMode }) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrolling
          ? "pb-1 pt-1 backdrop-blur-lg z-50 border-b border-black dark:border-stone-100 border-opacity-60 "
          : "pb-5 pt-5"
      } z-50 fixed w-full px-10 md:px-14 lg:px-10 flex justify-between justify-center items-center transition-all duration-300 animate-fade-down`}
    >
      <div className="flex gap-5 justify-center items-center">
        <a href="#inicio">
          <img className="w-14 pt-1" src={darkMode ? Logowhite : Logotipo2} alt="logo" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/gustavogomezzz_/"
          className="overflow-hidden relative group text-black  dark:text-stone-100 "
        >
          <i className="bi bi-instagram cursor-pointer block relative  transform transition-transform duration-500 group-hover:-translate-y-full"></i>
          <i className="bi bi-instagram cursor-pointer block absolute inset-0 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0 "></i>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/gustavo-gomez-971b761b0/"
          className=" overflow-hidden relative group text-black dark:text-stone-100"
        >
          <i className="bi bi-linkedin cursor-pointer block relative  transform transition-transform duration-500 group-hover:-translate-y-full"></i>
          <i className="bi bi-linkedin cursor-pointer block absolute inset-0 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0 "></i>
        </a>
        <a
          target="_blank"
          href="https://github.com/Gustavogomez195"
          className="overflow-hidden relative group text-black dark:text-stone-100"
        >
          <i className="bi bi-github cursor-pointer block relative  transform transition-transform duration-500 group-hover:-translate-y-full"></i>
          <i className="bi bi-github cursor-pointer block absolute inset-0 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0 "></i>
        </a>
      </div>
      <div>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </header>
  );
};

export default Header;
