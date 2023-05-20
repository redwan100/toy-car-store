import React from 'react'
import PopularToysCard from './PopularToysCard'
import SectionTitle from '../../Shared/SectionTitle';

const productInfo = [
  {
    id: 1,
    name: "Lightning Strike",
    category: "Sports",
    price: 23,
    img: "https://images.pexels.com/photos/35964/ferrari-red-auto-sports-car.jpg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Thunderbolt",
    category: "Racing",
    price: 223,
    img: "https://images.pexels.com/photos/381228/pexels-photo-381228.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Speed Demon",
    category: "Racing",
    price: 234,
    img: "https://images.pexels.com/photos/248704/pexels-photo-248704.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Swift Streak",
    category: "Regular",
    price: 123,
    img: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "Power Surge",
    category: "Racing",
    price: 23,
    img: "https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=600",
  },
];
const PopularToys = () => {
  return (
    <div className='py-4'>
      <div className='my-8'>
        <SectionTitle title="Popular Products" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productInfo.map((product) => (
          <PopularToysCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default PopularToys