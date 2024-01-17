
import Silla from "../../assets/silla.jpg"
import { Card } from "./Card";



const Proyectos = () => {
  const cards = [
    {
      id: 1,
      title: "Proyecto-1",
      subtitle: "Informacion sobre el proyecto que lo voy a escribir aca cuando sepa cual subir",
      image: Silla,
    },
    {
      id: 2,
      title: "Proyecto-2",
      subtitle: "Informacion sobre el proyecto que lo voy a escribir aca cuando sepa cual subir",
      image: Silla,
    },
    {
      id: 3,
      title: "Proyecto-3",
      subtitle: "Informacion sobre el proyecto que lo voy a escribir aca cuando sepa cual subir",
      image: Silla,
    },
   
  ];
  return (
    <section  id='proyectos' className=" w-full h-screen bg-green-950 px-16  ">
  
      <h5 className='text-red-300 font-oswald font-bold tracking-tighter text-[110px] uppercase '>proyectos</h5>
      
      <div className="grid grid-rows-2 grid-cols-3 gap-5 pt-20 ">
        {cards.map((card) => (
          <div key={card.id}>
            <Card
              titles={card.title}
              subtitles={card.subtitle}
              images={card.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos