import React from 'react'
import Navbar from '../Pages/Shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer'

const MainLayout = () => {
  return (
    <div>
        <div>
            <Navbar />
        </div>
       <div>
       
       </div>
        <div>
            <Outlet />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default MainLayout