import data from "./data";
import Image from "next/image";

const Step = ({ items = data }) => {
  return (
    <div className="mb-10 md:mb-20">
      <h2 className="text-center text-2xl md:text-[50px] font-bold mb-8 md:mb-12">
        Phases of the project
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
        {items.map((i) => (
          <div
            key={i.id}
            className="p-5 shadow-2xl rounded-lg hover:scale-[102%] cursor-pointer"
          >
            <Image
              src={i.img.src}
              alt={i.img.alt}
              width="80px"
              height="80px"
              className="mx-auto mb-4"
            />
            <h3 className="mb-1 text-lg md:text-xl font-semibold">{i.title}</h3>
            <p className="text-sm md:text-md font-light">{i.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step;
