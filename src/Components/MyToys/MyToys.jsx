import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider';
import MyToysCard from '../MyToysCard';
import Loadings from '../../Pages/Shared/Loadings.jsx'
import useDynamicTitle from '../../Hooks/useHook';
import Swal from "sweetalert2";
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


      


     
      /* ------------------------ DELETE USER DATA FUNCTION ----------------------- */
      const handleDelete = (id) => {
         Swal.fire({
           title: "Are you sure?",
           text: "You won't be able to revert this!",
           icon: "warning",
           showCancelButton: true,
           confirmButtonColor: "#3085d6",
           cancelButtonColor: "#d33",
           confirmButtonText: "Yes, delete it!",
         }).then((result) => {
           if (result.isConfirmed) {
            fetch(`http://localhost:5000/deleteToy/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  const remaining = toys.filter((toy) => toy._id !== id);
                  setToys(remaining);
                }
              });
             Swal.fire("Deleted!", "Your file has been deleted.", "success");
           }
         });

        

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