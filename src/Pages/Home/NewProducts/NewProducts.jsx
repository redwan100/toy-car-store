import React, { useEffect } from "react";

import SectionTitle from "../../Shared/SectionTitle";
import NewProductsCard from "./NewPrductsCard";

const productInfo = [
  {
    id: 1,
    name: "Lightning Strike",
    category: "Sports",
    price: 23,
    img: "https://images.pexels.com/photos/62276/pexels-photo-62276.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Thunderbolt",
    category: "Racing",
    price: 223,
    img: "https://images.pexels.com/photos/760979/pexels-photo-760979.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Speed Demon",
    category: "Racing",
    price: 234,
    img: "https://images.pexels.com/photos/69359/pexels-photo-69359.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Swift Streak",
    category: "Regular",
    price: 123,
    img: "https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "Power Surge",
    category: "Racing",
    price: 23,
    img: "https://images.pexels.com/photos/54278/pexels-photo-54278.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];


const NewProducts = () => {
  
  return (
    <div className="py-4" >
      <div className="my-8">
        <SectionTitle title="New Products" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productInfo.map((product) => (
          <NewProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
