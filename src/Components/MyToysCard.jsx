import React from 'react'
import { Link } from 'react-router-dom';


const MyToysCard = ({_id, sellerName, toyName, price, quantity, subcategory}) => {
    const { subcatPhoto1, subcatPhoto2 } = subcategory[0];
  return (
    
      <tr>
        <td>{sellerName}</td>
        <td className="">{toyName}</td>
        <td className="space-y-2">
          <img src={subcatPhoto1} alt="" className="w-20 h-20 object-cover" />
          <img src={subcatPhoto2} alt="" className="w-20 h-20 object-cover" />
        </td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>
          <Link to={`/toyDetails/${_id}`} className="btn btn-ghost btn-xs">
            details
          </Link>
        </td>
        <td>
            <Link to={'/toys-update'} className='text-success'>Update</Link>
        </td>

        <td>
            <p>Delete</p>
        </td>
      </tr>
 
  );
}

export default MyToysCard