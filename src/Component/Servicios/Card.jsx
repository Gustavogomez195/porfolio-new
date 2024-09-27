import ParallaxText from "../Servicios/ParallaxText";

const projects = [
  {
    title: "Desarrollo web",
    description:
      "Ofrezco servicios de desarrollo web con un toque creativo y soluciones de diseño que destacan. Desde páginas web dinámicas hasta diseños visuales únicos, mi enfoque es crear experiencias digitales que impresionen y se mantengan a la vanguardia. Déjame ayudarte a hacer que tu marca brille en el mundo online",
    star: "bi bi-stars",
  },
  {
    title: "Diseños creativos",
    description: "Ofrezco servicios de diseño con un enfoque innovador y soluciones visuales que capturan la esencia de tu marca. Desde diseños gráficos impactantes hasta interfaces de usuario elegantes y funcionales, mi objetivo es crear experiencias visuales que no solo impresionen, sino que también se alineen perfectamente con tus necesidades y objetivos.",
    star: "bi bi-stars",
  },
  
];

const Tarjetas = ({ title, description, star }) => {
  return (
    <div className="relative lg:sticky top-0 w-full h-[100vh] flex justify-start pt-2 pt-20 px-8">
      <div className="relative flex flex-col lg:grid lg:grid-cols-4 gap-4 h-[80vh] lg:h-[50vh] p-4 rounded-lg bg-[#171717] dark:bg-stone-100">
        <div className="lg:col-span-1 flex ">
          <h2 className="text-5xl font-poppin font-medium text-stone-100 dark:text-black ">{title}</h2>
        </div>
        <div className="lg:col-span-2 flex items-center justify-center">
          <p className="font-poppin font-medium text-stone-100 dark:text-black ">{description}</p>
        </div>
        <div className="lg:col-span-1  flex items-end justify-end">
          <i className={`${star} text-6xl text-stone-100 dark:text-black`}></i>
        </div>
      </div>
    </div>
  );
};

export default function Cards() {
  return (
    <>
      <div className="text-black dark:text-stone-100 font-medium pt-20 px-12">
        <h5 className="text-4xl lg:text-8xl pb-10 font-poppin uppercase">
          Servicios que realizo
        </h5>
      </div>
      <div className="flex flex-col p-4">
        {projects.map((project, i) => (
          <Tarjetas key={`p_${i}`} {...project} />
        ))}
      </div>
      <div className="relative overflow-hidden">
        <ParallaxText baseVelocity={2}>Diseño - Desarrollo -</ParallaxText>
      </div>
    </>
  );
}
