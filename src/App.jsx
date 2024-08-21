import "bootstrap-icons/font/bootstrap-icons.css";
import Hero from "./Component/Hero/Hero";
import Header from "./Component/Navbar/Header";
import Sobremi from "./Component/Sobremi/Sobremi";
import Contactos from "./Component/Contactos/Contactos";
import { useEffect, useState } from "react";
import WelcomeScreen from "./Component/Carga/Carga";
import CursorLinterna from "./Component/Cursor/CursorLinterna";
import Proyectos from "./Component/Proyectos/Proyectos";
import Cards from "./Component/Servicios/Card";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <>
      <div className="relative">
        {showWelcome && <WelcomeScreen onComplete={handleWelcomeComplete} />}
        <div
          className={`transition-opacity duration-1000 ${
            showWelcome ? "opacity-0" : "opacity-100"
          }`}
        >
          <CursorLinterna darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Sobremi />
          <Proyectos />
          <Cards />

          <Contactos />
        </div>
      </div>
    </>
  );
};

export default App;
