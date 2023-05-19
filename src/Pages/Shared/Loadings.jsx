import React from 'react'
import Lottie from "lottie-react";
import Loading from '../../../public/loading.json'
const Loadings = () => {
  return (
    <div>
      <Lottie
        animationData={Loading}
        loop={true}
        className="w-full h-full mx-auto"
      />
    </div>
  );
}

export default Loadings