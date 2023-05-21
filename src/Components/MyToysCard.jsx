import React from 'react'
import { Link } from 'react-router-dom';
import {BiTrashAlt} from 'react-icons/bi'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import UpdateToy from './UpdateToy';

const MyToysCard = ({ toy, handleDelete, handleModal, showModal, products }) => {
  const { _id, sellerName, subcategoryName, toyName, price, quantity } = toy;

  return (
    <tr>
      <td>{sellerName}</td>
      <td className="">{toyName}</td>
      <td className="">{subcategoryName}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/toyDetails/${_id}`} className="btn btn-ghost btn-xs">
          details <HiOutlineArrowNarrowRight style={{ marginLeft: "5px" }} />
        </Link>
      </td>

      <td>
        <button className="text-success" onClick={() => handleModal(toy, _id)}>
          Edit
        </button>
        {showModal && <UpdateToy handleModal={handleModal} products={products} />}
      </td>

  



      <td>
        <p
          className="cursor-pointer text-red-400 hover:text-red-500"
          onClick={() => handleDelete(_id)}
        >
          <BiTrashAlt size={20} />
        </p>
      </td>
    </tr>
  );
};

export default MyToysCard