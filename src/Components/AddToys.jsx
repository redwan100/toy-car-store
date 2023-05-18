import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import SectionTitle from "../Pages/Shared/SectionTitle";

const AddToys = () => {
    const [subcategory, setSubcategory] = useState([{
      picture1:'',
      picture2:'',
    }]);

  const { user } = useContext(AuthContext);


  const handleSubCategory = (event) => {
    const name = event.target.name
    const value = event.target.value

    setSubcategory((prev) =>{
      return{
        ...prev,
       [name]:value
      }
    })

  };

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
    
    console.log(
      {
        sellerName,
        subcategory
      }
    );
  }

  console.log(subcategory);
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
            <input
              type="text"
              placeholder="sub category"
              onChange={handleSubCategory}
              name="picture1"
              
            />
            <input
              type="text"
              placeholder="sub category"
              onChange={handleSubCategory}
              name="picture2"
            />
           
          </div>
          <div className="form-control mt-6">
            <button className="bg-gradient py-3 text-lg font-semibold" type="submit"> 
              Add Toy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToys;
