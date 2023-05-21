import React from 'react'
import Navbar from '../Pages/Shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer'

const MainLayout = () => {
  return (
    <>
      <div className='w-full shadow-md sticky bg-white top-0 left-0 z-50'>
        <Navbar />
      </div>
      <div className="w-full min-h-screen flex gap-4 flex-col container mx-auto lg:w-[90%]">
        <div>
          <Outlet />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MainLayout