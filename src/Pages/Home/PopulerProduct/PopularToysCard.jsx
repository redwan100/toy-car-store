import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const PopularToysCard = ({product}) => {
    const {name,img, category, price} = product;
    useEffect(() => {
      AOS.init();
    }, []);
  return (
    <div
      className="gradient-thin"
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
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">POPULAR</div>
        </h2>

        <h1 className="font-medium">Category: {category}</h1>

        <p>Price:${price}</p>
        <div className="card-actions justify-end">
          <button className="bg-gradient uppercase font-semibold py-2 px-3">
            boy noy
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopularToysCard