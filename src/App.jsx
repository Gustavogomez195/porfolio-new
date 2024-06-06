import "bootstrap-icons/font/bootstrap-icons.css"
import Hero from "./Component/Hero/Hero"
import Header from "./Component/Navbar/Header"
import Sobremi from "./Component/Sobremi/Sobremi"
import Contactos from "./Component/Contactos/Contactos"
import Footer from "./Component/Footer/Footer"
import ProjectList from "./Component/Proyectos/Proyectos"
import { useState } from "react"
import WelcomeScreen from "./Component/Carga/Carga"













const  App = ()=> {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };
  
    
  return (
    <>
    <div >
    {showWelcome && <WelcomeScreen onComplete={handleWelcomeComplete} />}
    <div className={`transition-opacity duration-1000 ${showWelcome ? 'opacity-0' : 'opacity-100'}`}>
      
      <Header/>
      
      <Hero/>
      <Sobremi/>
      <ProjectList/>
      <Contactos/>
      <Footer/>

      
      

  
  
    </div>
  
    </div>
    
    </>
  )
}

export default App

