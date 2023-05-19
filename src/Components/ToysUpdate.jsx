
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../Pages/Shared/SectionTitle";

const ToysUpdate = () => {
  const data = useLoaderData()
  const { _id, price, quantity, description } = data;
 console.log('from', _id);
 const handleUpdate = (event) => {
   event.preventDefault();
   const form = event.target;

   const price = form.price.value;
 
   const quantity = form.quantity.value;
   const description = form.description.value;
 

   const toyInfo = {
     price,
     quantity,
     description,
   };

   fetch(`http://localhost:5000/updateToy/${_id}`, {
     method: "PATCH",
     headers: {
       "content-type": "application/json",
     },
     body: JSON.stringify(toyInfo),
   })
     .then((res) => res.json())
     .then((data) => console.log(data));
 };
  return (
    <div
      className={`hero min-h-screen py-9 w-full h-full`}
    >
      <div className="w-full max-w-md shadow-2xl bg-base-100 gradient-thin relative">
 
        <div className="mt-8">
          {" "}
          <SectionTitle title="UPDATED" />
        </div>
        <form className="card-body" onSubmit={handleUpdate}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="price"
              className="input input-bordered input-success"
              name="price"
              defaultValue={price}
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
              defaultValue={quantity}
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
              defaultValue={description}
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button
              className="bg-gradient text-gray-800 py-3 text-lg font-semibold"
              type="submit"
            >
              UPDATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ToysUpdate;
