import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCartArrowDown } from "react-icons/fa";

const NewProductsCard = ({ product }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { name, img, category, price } = product;
  return (
    <div className="bg-white rounded-md border border-zinc-200 overflow-hidden shadow-md hover:translate-y-4 transition-all">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="flex flex-col">
        <div className="p-4 space-y-3">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>

          <h1 className="font-medium">Category: {category}</h1>

          <p>Price:${price}</p>
        </div>
        <div className="card-actions justify-end mt-auto">
          <button className="rounded-md bg-zinc-300 text-sm sm:text-base py-2 px-4  font-medium m-5 hover:bg-zinc-500 hover:text-zinc-50 flex items-center gap-2 transition-all">
            boy now <FaCartArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProductsCard;
