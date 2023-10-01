import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCartArrowDown } from "react-icons/fa";

const PopularToysCard = ({ product }) => {
  const { name, img, category, price } = product;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="bg-white border border-zinc-100 rounded-md drop-shadow-md overflow-hidden transition-all hover:bg-zinc-100"
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-easing="ease-out-cubic"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="flex flex-col">
        <div className="p-4 space-y-3">
          <h2 className="card-title">
            {name}
            <div className="badge badge-dark">POPULAR</div>
          </h2>

          <h1 className="font-medium">Category: {category}</h1>

          <p>Price:${price}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="rounded-md bg-zinc-300 text-sm sm:text-base py-2 px-3  font-medium m-5 hover:bg-zinc-500 hover:text-zinc-50 flex items-center gap-2 uppercase">
            boy now <FaCartArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularToysCard;
