import React from 'react'

const NewProductsCard = ({product}) => {
    const { name, img, category, price } = product;
  return (
 <div className="gradient-thin">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        
          <h1 className='font-medium'>Category: {category}</h1>

        <p>Price:${price}</p>
        <div className="card-actions justify-end">
          <button className='bg-gradient uppercase font-semibold py-2 px-3'>boy noy</button>
        </div>
      </div>
    </div>
  )
}

export default NewProductsCard