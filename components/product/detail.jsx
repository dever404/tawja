import data from "./data";
import Image from "next/image";
import Form from "../form/form"

const Detail = ({ items = data ,myParam }) => {
    const item =  items.map(function(i){
        if(i.id == myParam) {
                return(  
                    <div  key={i.id} className="grid grid-cols-1 md:grid-cols-2 md:gap-2 shadow-lg rounded-2xl">
                        <div className="relative">
                          <Image
                              src={"/img/products/p"+ 1 +".jpg"}
                              alt={i.title}
                              width="500"
                              height="500"
                              className="absolute h-full w-full object-fill"
                          />
                        </div>
                  
                        <div className="">
                          <div className="mb-10">
                            <h3 className="mb-3 text-5xl font-bold">{i.title}</h3>
                            <p className="text-4xl text-red-500 font-bold mb-4">{i.prix} DH</p>
                            <span className="font-light ">{i.description}</span>
                          </div>
                          <Form produit={i.title}/>
                        </div>
                    </div>
                )
            }
        }
    )

  return (
    <div className="mb-10 md:mb-20">
      {/* <h2 className="text-center text-2xl md:text-[50px] font-bold mb-8 md:mb-20">
        Liste product
      </h2> */}
        {item}
    </div>
  );
};

export default Detail;
