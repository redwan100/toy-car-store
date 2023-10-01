import React from "react";
import Rating from "../Shared/Rating";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const TabCard = ({ _id, photoUrl, toyName, price, rating, handleTost }) => {
  return (
    <div className="grid gap sm:grid-cols-2 border border-zinc-200 rounded-md  bg-white shadow-md overflow-hidden">
      <figure>
        <img src={photoUrl} alt="Movie" className="h-full w-full" />
      </figure>
      <div className=" flex flex-col">
        <div className="p-3 space-y-3">
          <h2 className="card-title">Toy Name: {toyName}</h2>
          <p>Price: ${price}</p>
          <p className="flex items-center">
            Rating:
            <Rating rating={rating} count={rating} />({rating})
          </p>
        </div>
        <div className="card-actions justify-end mt-auto " onClick={handleTost}>
          <Link
            to={`/toyDetails/${_id}`}
            className="rounded-md bg-zinc-300 text-sm sm:text-base py-2 px-4  font-medium m-5 hover:bg-zinc-500 hover:text-zinc-50 flex items-center gap-2"
          >
            Details <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
