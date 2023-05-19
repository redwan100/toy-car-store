import React from 'react'
import { Link } from 'react-router-dom';
import ToysUpdate from './ToysUpdate';


const MyToysCard = ({
  toy,
  setShowModal,
  showModal,
  handleModal,
  data,
}) => {
  const { _id, sellerName, subcategoryName,toyName, price, quantity, subcategory } = toy;
  const { subcatPhoto1, subcatPhoto2 } = subcategory[0];
  return (
    <tr>
      <td>{sellerName}</td>
      <td className="">{toyName}</td>
      <td className="">
        {/* <img src={subcatPhoto1} alt="" className="w-20 h-20 object-cover" />
        <img src={subcatPhoto2} alt="" className="w-20 h-20 object-cover" /> */}

        {subcategoryName}
      </td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/toyDetails/${_id}`} className="btn btn-ghost btn-xs">
          details
        </Link>
      </td>
      <td>
        <button className="text-success" onClick={() => handleModal(toy)}>
          Update
          {showModal && <ToysUpdate data={data} setShowModal={setShowModal} />}
          
        </button>

      </td>

      <td>
        <p>Delete</p>
      </td>
    </tr>
  );
};

export default MyToysCard