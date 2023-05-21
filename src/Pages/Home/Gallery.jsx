import React, { useEffect } from 'react'
import SectionTitle from '../Shared/SectionTitle';
import AOS from "aos";
import "aos/dist/aos.css";


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
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="py-9">
        <SectionTitle title="Gallery" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {galleryItems.map((item, i) => (
          <div
            className="gradient-thin"
            key={i}
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-out-cubic"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <img src={item} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery