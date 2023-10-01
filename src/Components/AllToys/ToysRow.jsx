import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AuthContext } from "../../Context/AuthProvider";

const ToysRow = ({ toy }) => {
  const { handleTost } = useContext(AuthContext);

  const {
    _id,
    photoUrl,
    sellerName,
    toyName,
    subcategoryName,
    price,
    quantity,
  } = toy;

  return (
    <tr className="">
      <td>
        <img
          src={photoUrl}
          alt="toy image"
          className="w-16 h-16 object-cover rounded-lg"
        />
      </td>
      <td>{sellerName}</td>
      <td className="">{toyName}</td>
      <td className="space-y-2">{subcategoryName}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <th onClick={handleTost}>
        <Link
          to={`/toyDetails/${_id}`}
          className="flex items-center gap-1 text-base bg-zinc-300 py-1 px-2 rounded-md drop-shadow-md w-max transition-all hover:bg-zinc-400 capitalize font-normal"
        >
          details
          <HiOutlineArrowNarrowRight />
        </Link>
      </th>
    </tr>
  );
};

export default ToysRow;
