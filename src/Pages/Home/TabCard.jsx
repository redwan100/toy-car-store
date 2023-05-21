import React from 'react'
import Rating from '../Shared/Rating';
import { Link } from 'react-router-dom';

const TabCard = ({ _id, photoUrl, toyName, price, rating, handleTost }) => {
  
  return (
    <div className="grid gap sm:grid-cols-2 gradient-thin">
      <figure>
        <img src={photoUrl} alt="Movie" className="h-full w-full" />
      </figure>
      <div className="card-body">
        <div>
          <h2 className="card-title">Toy Name: {toyName}</h2>
          <p>Price: ${price}</p>
          <p className="flex items-center">
            Rating:
            <Rating rating={rating} count={rating} />({rating})
          </p>
        </div>
        <div className="card-actions justify-end" onClick={handleTost}>
          <Link
            to={`/toyDetails/${_id}`}
            className="bg-gradient py-2 px-4 font-medium "
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabCard