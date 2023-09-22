import data from "./data";
import Link from "next/link"
const Slider = ({ item = data }) => {
  return (
    <div
      key={item.id}
      className="w-full h-[300px] md:h-[500px] p-5 mt-12 md:mt-[90px] relative overflow-hidden flex justify-center items-center flex-col rounded-xl bgcenter bg-no-repeat bg-cover mb-10 md:mb-20"
      style={{ backgroundImage: "url('/img/slider.jpg')" }}
    >
      
      <div className="text-center text-white z-1">
        <h1 className="text-md md:text-[60px] uppercase font-bold"> {item.title} </h1>
        <h2 className="md:text-[40px] font-extralight mb-4"> {item.subTitle} </h2>
        <p className="text-sm md:text-xl font-light mb-6 md:mb-10"> {item.description} </p>
        <Link href={item.link.url} rel="noopener noreferrer" target="_blank"><a className='text-md md:text-md px-6 pt-4 pb-3 rounded-md hover:bg-white hover:text-black border border-white mr-5' target='_blank'>{item.link.title}</a></Link>
        <Link href={item.linkS.url} target="_blank"><a className='text-md md:text-md px-6 pt-4 pb-3 rounded-md text-black bg-white hover:bg-transparent hover:text-white border border-white' target='_blank'>{item.linkS.title}</a></Link>
      </div>
      <div className="absolute h-full w-full top-0 right-0 bg-black bg-opacity-60"></div>

    </div>
  );
};

export default Slider;
