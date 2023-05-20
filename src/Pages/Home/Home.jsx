import React from 'react'
import Slider from '../Slider'
import CategoryTab from './Tab';
import Gallery from './Gallery';
import useDynamicTitle from '../../Hooks/useHook';
import PopularToys from './PopulerProduct/PopularToys';



const Home = () => {
  useDynamicTitle('Home')
  return (
    <div className='space-y-5'>
      <div>
        <Slider />
      </div>
      <div>
        {/* <CategoryTab /> */}
      </div>
      <div className='py-20'>
        <Gallery />
      </div>
    <div>
      <PopularToys />
    </div>
    </div>
  );
}

export default Home