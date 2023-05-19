import React, { useEffect, useState } from 'react'
import ToysRow from '../Components/AllToys/ToysRow';
import useDynamicTitle from '../Hooks/useHook';
import Loadings from './Shared/Loadings';

const AllToys = () => {
  useDynamicTitle('All Toys')

      const [loading, setLoading] = useState(true)
      const [toys, setToys] = useState([]);
      useEffect(() => {
        fetch("http://localhost:5000/allToys")
          .then((res) => res.json())
          .then((data) => {
            setToys(data);
            setLoading(false);
          })
          .catch((err) => console.error(err));
      }, []);

      
      if(loading) return <Loadings />
  return (
    <div className="overflow-x-auto w-full">
      <div className='my-4 pr-2'>
        <input type="search" className='input input-bordered input-success ml-auto block' placeholder='Search here...'/>
      </div>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>

            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub-Category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <ToysRow key={toy._id} toy={toy} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllToys