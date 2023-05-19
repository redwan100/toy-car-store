import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider';
import ToysRow from '../AllToys/ToysRow';
import MyToysCard from '../MyToysCard';

const MyToys = () => {
    const [loading, setLoading] = useState(true)
      const [toys, setToys] = useState([]);
      const {user} = useContext(AuthContext)
      useEffect(() => {
        fetch(`http://localhost:5000/allToys?email=${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            setToys(data);
            setLoading(false)
          })
          .catch((err) => console.error(err));
      }, [user]);

      console.log(toys);

      if(loading) return <p>Loading...</p>
      
  return (
    <div>
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
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <MyToysCard key={toy._id} {...toy} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyToys