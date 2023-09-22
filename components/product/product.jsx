import data from "./data";
import Image from "next/image";
import Link from "next/link";

const Product = ({ items = data }) => {
  return (
    <div className="mb-10 md:mb-20 mt-40">
      <h2 className="text-center text-2xl md:text-[50px] font-bold mb-8 md:mb-20">
        Liste product
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-6">
        {items.map((i) => (
          <Link key={i.id} href={"/store?product="+ i.id } rel="noopener noreferrer">
            <div
              className="shadow-lg rounded-2xl hover:scale-[101%] ease-in-out duration-300 cursor-pointer h-[260px] bg-center bg-no-repeat bg-cover relative after:content-[''] after:absolut after:flex after:bottom-0 after:left-0 after:w-full after:h-full  after:bg-gradient-to-t from-black to-transparent overflow-hidden"
              style={{ backgroundImage: 'url("/img/products/p'+ 1 +'.jpg")' }}
            >
            <div className="absolute text-white w-full -bottom-5 hover:bottom-5 left-0 z-1 text-center ease-in-out duration-300 ">
              <h3 className="mb-1 text-lg md:text-xl font-semibold">{i.title}</h3>
              <p className="text-2xl font-semibold mb-4">{i.prix} DH</p>
              <span className="text-sm font-light">Commander</span>
            </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
