import React, { useEffect } from 'react'
import Slider from '../Slider'
import CategoryTab from './Tab';
import Gallery from './Gallery';
import useDynamicTitle from '../../Hooks/useHook';
import PopularToys from './PopulerProduct/PopularToys';
import NewProducts from './NewProducts/NewProducts';

import AOS from 'aos'
import 'aos/dist/aos.css';


const Home = () => {
  useDynamicTitle('Home')

  useEffect(()=>{
  AOS.init()
  },[])
  return (
    <div className="space-y-5">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <Slider />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <CategoryTab />
      </div>
      <div
        className="py-20"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <Gallery />
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <PopularToys />
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <NewProducts />
      </div>
    </div>
  );
}

export default Home