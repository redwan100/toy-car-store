import React from 'react'
import Lottie from "lottie-react";
import ErrorPage from '../../public/error.json'
import { Link, useRouteError } from 'react-router-dom';
const Error = () => {
   const {error, statusText} = useRouteError()

  return (
    <div className="w-full h-[60vh] sm:h-[70vh]">
      <Lottie
        animationData={ErrorPage}
        loop={true}
        className="w-full h-full mx-auto"
      />

      <div className="py-6">
        <h1 className='text-center font-bold text-6xl'>{statusText}</h1>
        <h2 className="text-center text-2xl sm:text-4xl font-medium">
          {error.message}
        </h2>
      </div>
      <Link to={'/'} className='bg-[#3b3b3b] text-gray-200 py-2 px-4 rounded-md ml-4'>Go To Home</Link>
    </div>
  );
}

export default Error