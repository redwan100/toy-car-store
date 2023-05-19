import React from 'react'
import SectionTitle from '../Pages/Shared/SectionTitle';

const ToysUpdate = () => {

    const handleForm = (event) => {
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
      const subcatPhoto1 = form.picture1.value;
      const subcatPhoto2 = form.picture2.value;

      const toySubcategory = [
        {
          toyName,
          photoUrl,
          price,
          rating,
          quantity,
          description,
          subcatPhoto1,
          subcatPhoto2,
        },
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
        subcategory: toySubcategory,
      };

      fetch("http://localhost:5000/addToy", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(toyInfo),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    };

    
  return (
    <div className="hero min-h-screen py-9">
      <div className="w-full max-w-md shadow-2xl bg-base-100 gradient-thin">
        <div className="mt-8">
          {" "}
          <SectionTitle title="UPDATED" />
        </div>
        <form className="card-body" onSubmit={handleForm}>
          

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

 
          <div className="form-control mt-6">
            <button
              className="bg-gradient py-3 text-lg font-semibold"
              type="submit"
            >
              UPDATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToysUpdate