import React from 'react'
import Slider from '../Slider'
import CategoryTab from './Tab';
import Gallery from './Gallery';

const Home = () => {
  return (
    <div className='space-y-5'>
      <div>
        <Slider />
      </div>
      <div>
        <CategoryTab />
      </div>
      <div className='py-20'>
        <Gallery />
      </div>

    </div>
  );
}

export default Home