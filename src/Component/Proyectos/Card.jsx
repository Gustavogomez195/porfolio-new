

const Card = ({ titles, subtitles, images }) => {
  return (
    <div className="flex flex-col w-92 h-72  items-center  justify-center border rounded-xl border-orange-100">
      <div className="h-full w-full group relative items-center justify-center overflow-hidden cursor-pointer ">
        <img
          className=" rounded-xl h-full  w-full object-cover group-hover:scale-120 transition-transform duration-500 group-hover:opacity-20 "
          src={images}
          alt="silla"
        />

        <div className=" absolute inset-0  flex items-center justify-center pb-12  px-9 gap-5 translate-y-[70%] group-hover:translate-y-0 transition-all duration-500 text-red-100 ">
          <a href="#" > 
          <i className=" bi bi-github text-2xl "></i>
          </a>
          <a href="#">
          <i className="bi bi-link-45deg text-2xl "></i>
          </a>
        </div>
        <div className="absolute flex flex-col inset-0 text-orange-100 items-center justify-center gap-3 px-6  translate-y-[70%] group-hover:translate-y-12 transition-all duration-500  ">
          <h5 className="font-oswald font-bold text-3xl lg:text-5xl uppercase tracking-tighter">{titles}</h5>
          <p className="font-oswald font-bold text-sm uppercase tracking-tighter ">{subtitles}</p>
        </div>
      </div>
    </div>
  );
};

export { Card };