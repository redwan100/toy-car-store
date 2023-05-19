import React from 'react'
import SectionTitle from '../Shared/SectionTitle';

const galleryItems = [
  "https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=600",

  "https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg?auto=compress&cs=tinysrgb&w=600",

  "https://images.pexels.com/photos/243206/pexels-photo-243206.jpeg?auto=compress&cs=tinysrgb&w=600",

  "https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&w=600",

  "https://images.pexels.com/photos/772393/pexels-photo-772393.jpeg?auto=compress&cs=tinysrgb&w=600",

  "https://images.pexels.com/photos/248704/pexels-photo-248704.jpeg?auto=compress&cs=tinysrgb&w=600",

  "https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const Gallery = () => {
  return (
    <>
   
        <div className="py-9">
          <SectionTitle title="Gallery" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryItems.map((item, i) => (
            <div className="gradient-thin" key={i}>
              <img src={item} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

    </>
  );
}

export default Gallery