import video from "../../assets/fondovideo.mp4"
import fondo from "../../assets/perfilimg.jpg"

const Sobremi = () => {
  return (
    <div id="sobremi" className="h-screen relative bg-scroll">
      
    <video autoPlay loop muted preload src={video} className="absolute"></video>
    
    
        <img className="absolute w-[400px] left-20 top-10 " src={fondo} alt="fondo" />
    
    

    <h1 className="absolute font-stali text-[40px] text-white text-orange-50 left-1/2 uppercase top-7  ">Sobre mi</h1>
    <p className="absolute font-volta text-white left-1/2 right-14 top-24 text-orange-50 ">Soy Gustavo de Obera Misiones Argentina, desarrollador frontend con habilidades sólidas en la creación de interfaces interactivas y atractivas</p>
    </div>
    
  )
}

export default Sobremi