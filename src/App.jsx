import "bootstrap-icons/font/bootstrap-icons.css"
import Hero from "./Component/Hero/Hero"
import Header from "./Component/Navbar/Header"
import Sobremi from "./Component/Sobremi/Sobremi"
import Contactos from "./Component/Contactos/Contactos"
import Footer from "./Component/Footer/Footer"

import { useState } from "react"
import WelcomeScreen from "./Component/Carga/Carga"
import CursorLinterna from "./Component/Cursor/CursorLinterna"

import SmokeBackground from "./Component/Fondo/Fondo"

import ServiciosList from "./Component/Servicios/Servicios"
import Proyectos from "./Component/Proyectos/Proyectos"



















const  App = ()=> {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };
  
    
  return (
    < >
    
    <div className="relative" 
     >
        <SmokeBackground/>
    {showWelcome && <WelcomeScreen onComplete={handleWelcomeComplete} />}
    <div className={`transition-opacity duration-1000 ${showWelcome ? 'opacity-0' : 'opacity-100'}`}
    >
      <CursorLinterna />
      <Header/>
      <Hero/>
      <Sobremi/>
      <Proyectos/>
      <ServiciosList/>
      <Contactos/>
      <Footer/>
    

      
      

  
  
    </div>
  
    </div>
    
    </>
  )
}

export default App

