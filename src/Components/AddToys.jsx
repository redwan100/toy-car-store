import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import SectionTitle from "../Pages/Shared/SectionTitle";
import useDynamicTitle from "../Hooks/useHook";
import Swal from "sweetalert2";

const AddToys = () => {
  useDynamicTitle('Add Toys')
  const { user } = useContext(AuthContext);



  const handleForm = (event) =>{
    event.preventDefault();
    const form = event.target;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const toyName = form.toyName.value;
    const photoUrl = form.photoUrl.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    let subcategoryName = form.subcategoryName.value;


    const toySubcategory = [
      {
       subcategoryName, 
      toyName,
      photoUrl,
      price,
      rating,
      quantity,
      description,
    }
    ];

     const toyInfo = {
       sellerName,
       sellerEmail,
       toyName,
       photoUrl,
       price,
       rating,
       quantity,
       description,
       subcategoryName,
       subcategory: toySubcategory,
     };


    fetch("http://localhost:5000/addToy",{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(toyInfo)
    })
    .then(res => res.json())
    .then(data => {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Successfully create your post",
        showConfirmButton: false,
        timer: 1000,
      });
    })
    
    
  }

  return (
    <div className="hero min-h-screen py-9">
      <div className="w-full max-w-md shadow-2xl bg-base-100 gradient-thin">
        <div className="mt-8">
          {" "}
          <SectionTitle title="Add to Toy" />
        </div>
        <form className="card-body" onSubmit={handleForm}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              placeholder="Seller name"
              className="input input-bordered input-success"
              defaultValue={user?.name}
              name="sellerName"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="text"
              placeholder="Seller Email"
              className="input input-bordered input-success"
              value={user?.email}
              name="sellerEmail"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              type="text"
              placeholder="toy name"
              className="input input-bordered input-success"
              name="toyName"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture</span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              className="input input-bordered input-success"
              name="photoUrl"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="price"
              className="input input-bordered input-success"
              name="price"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              placeholder="rating"
              className="input input-bordered input-success"
              name="rating"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="number"
              placeholder="quantity"
              className="input input-bordered input-success"
              name="quantity"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text"> Description</span>
            </label>
            <textarea
              className="textarea textarea-success"
              name="description"
              placeholder="Description"
            ></textarea>
          </div>

          <div>
            <label className="label">
              <span className="label-text"> Subcategory</span>
            </label>
            <div className="form-control mb-4">
              <input
                type="text"
                placeholder="Subcategory Name"
                name="subcategoryName"
                className="input input-bordered input-success"
              />
            </div>
            {/* <div className="form-control mb-4">
              <input
                type="text"
                placeholder="subcategory photo"
                name="picture1"
                className="input input-bordered input-success"
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                placeholder="subcategory photo"
                name="picture2"
                className="input input-bordered input-success"
              />
            </div> */}

          </div>
          
          <div className="form-control mt-6">
            <button
              className="bg-gradient py-3 text-lg font-semibold"
              type="submit"
            >
              Add Toy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToys;
