import "bootstrap-icons/font/bootstrap-icons.css"
import Hero from "./Component/Hero/Hero"
import Header from "./Component/Navbar/Header"
import Sobremi from "./Component/Sobremi/Sobremi"
import Proyectos from "./Component/Proyectos/Proyectos"
import Contactos from "./Component/Contactos/Contactos"
import Footer from "./Component/Footer/Footer"




const  App = ()=> {
  

  return (
    <>
      <Header />
      <Hero/>
      <Sobremi/>
      <Proyectos/>
      <Contactos/>
      <Footer/>
    </>
  )
}

export default App

