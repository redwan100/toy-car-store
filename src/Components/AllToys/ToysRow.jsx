import React from 'react'
import { Link } from 'react-router-dom';

const ToysRow = ({toy}) => {
  const {_id,sellerName, toyName, subcategory, price, quantity} = toy;
  const {photo1, photo2} = subcategory[0]
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>

        {sellerName}
      </td>
      <td>

        {toyName}
      </td>
      <td>
        Zemlak, Daniel and Leannon
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
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