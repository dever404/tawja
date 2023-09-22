import data from "./data";
import Image from "next/image";

const Detail = ({ items = data ,myParam }) => {
    const item =  items.map(function(i){
        if(i.id == myParam) {
                return(  
                    <div  key={i.id} className="grid grid-cols-1 md:grid-cols-2 md:gap-2 shadow-lg rounded-2xl">
                        <Image
                            src={"/img/products/p"+ 1 +".jpg"}
                            alt={i.title}
                            width="80px"
                            height="80px"
                            className="mx-auto mb-4"
                        />

                        <div className="absolute text-white w-full -bottom-5 hover:bottom-5 left-0 z-1 text-center ease-in-out duration-300 ">
                            <h3 className="mb-1 text-lg md:text-xl font-semibold">{i.title}</h3>
                            <p className="text-2xl font-semibold mb-4">{i.prix} DH</p>
                            <span className="text-sm font-light">Commander</span>
                        </div>
                        
                    </div>
                )
            }
        }
    )

  return (
    <div className="mb-10 md:mb-20 mt-40">
      <h2 className="text-center text-2xl md:text-[50px] font-bold mb-8 md:mb-20">
        Liste product
      </h2>
        {item}
    </div>
  );
};

export default Detail;
