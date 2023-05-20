import React from 'react'
import { Link } from 'react-router-dom';

const ToysRow = ({toy}) => {
 
  const {
    _id,
    sellerName,
    toyName,
    categoryName,
    price,
    quantity,
  } = toy;

  return (
    <tr>
      <td>{sellerName}</td>
      <td className="">{toyName}</td>
      <td className="space-y-2">
        {categoryName}
      </td>
      <td>${price}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/toyDetails/${_id}`} className="btn btn-ghost btn-xs">
          details
        </Link>
      </th>
    </tr>
  );
}

export default ToysRow