import React from 'react'
import { Link } from 'react-router-dom';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'


const ToysRow = ({toy}) => {
 
  const {
    _id,
    sellerName,
    toyName,
    subcategoryName,
    price,
    quantity,
  } = toy;

  return (
    <tr>
      <td>{sellerName}</td>
      <td className="">{toyName}</td>
      <td className="space-y-2">
        {subcategoryName}
      </td>
      <td>${price}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/toyDetails/${_id}`} className="btn btn-ghost btn-xs badge ">
         details <HiOutlineArrowNarrowRight style={{marginLeft:'5px'}}/>
        </Link>
      </th>
    </tr>
  );
}

export default ToysRow