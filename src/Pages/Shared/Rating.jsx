import React from 'react'
import ReactStars from "react-rating-stars-component";
const Rating = ({count=5, rating=5}) => {
  return (
    <ReactStars
      count={count}
      size={24}
      value={rating}
      isHalf={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="#ffd700"
    />
  );
}

export default Rating