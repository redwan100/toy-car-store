import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider';
import MyToysCard from '../MyToysCard';
import Loadings from '../../Pages/Shared/Loadings.jsx'
import useDynamicTitle from '../../Hooks/useHook';
const MyToys = () => {
  useDynamicTitle('My Toys');
  const [data, setData] = useState({})



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


      if(loading) return <Loadings />

      // const handleForm = (event, _id) => {
      //   event.preventDefault();
      //   const form = event.target;

      //   const price = form.price.value;
      //   const quantity = form.quantity.value;
      //   const description = form.description.value;

      //   const toyInfo = {
      //     price,
      //     quantity,
      //     description,
      //   };

      //   fetch(`http://localhost:5000/update/${_id}`, {
      //     method: "POST",
      //     headers: {
      //       "content-type": "application/json",
      //     },
      //     body: JSON.stringify(toyInfo),
      //   })
      //     .then((res) => res.json())
      //     .then((data) => console.log(data));
      // };

      // const handleData = (data) =>{
      //   setData(data)
      // }



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
            <MyToysCard
              key={toy._id}
              toy={toy}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyToys