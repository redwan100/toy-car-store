import React, { useEffect, useState } from 'react'
import SectionTitle from '../Shared/SectionTitle';
import AOS from "aos";
import "aos/dist/aos.css";




const Gallery = () => {
const [galleries, setGalleries] = useState([])
const [selected, setSelected] = useState('new')
const [btns, setBtns] = useState([])
  useEffect(() => {

    fetch(`http://localhost:5000/gallery/${selected}`)
      .then((response) => response.json())
      .then((data) => setGalleries(data))
      .catch((error) => console.log("error", error));


      /* ---------------------------- LOAD BUTTON DATA ---------------------------- */
    fetch(`http://localhost:5000/gallerybtns`)
      .then((response) => response.json())
      .then((data) => setBtns(data))
      .catch((error) => console.log("error", error));


    AOS.init();
  }, [selected]);


const btnArr = btns.map(p => p.group)
 const btn = [...new Set(btnArr)]

 const handleGallery = (text) => {
  setSelected(text)
 }


 console.log(btn, selected);

  return (
    <>
      <div className="py-9">
        <SectionTitle title="Gallery" />
      </div>
      <div className="text-center mb-6 space-x-3">
        {btn.map((b, i) => (
          <button className={`btn ${selected === b && 'bg-red-500'}`} key={i} onClick={() => handleGallery(b)}>
            {b}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {galleries.map((item, i) => (
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
            <img src={item.img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery