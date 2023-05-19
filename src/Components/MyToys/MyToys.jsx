import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider';
import MyToysCard from '../MyToysCard';
import Loadings from '../../Pages/Shared/Loadings.jsx'
import useDynamicTitle from '../../Hooks/useHook';
const MyToys = () => {
  useDynamicTitle('My Toys');

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


      
      
      const handleDelete = (id) => {

        fetch(`http://localhost:5000/toys/${id}`, {
          method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0 ){
            const remaining = toys.filter(toy => toy._id !== id)
            setToys(remaining)
          }
        })

      }

      /* ---------------------------- CHECKING LOADING ---------------------------- */
      if(loading) return <Loadings />

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
            <MyToysCard key={toy._id} toy={toy} handleDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyToys