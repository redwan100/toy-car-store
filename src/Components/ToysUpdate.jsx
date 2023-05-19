
import SectionTitle from "../Pages/Shared/SectionTitle";

const ToysUpdate = ({ data, setShowModal }) => {
  const { _id, price, quantity, description } = data;

  return (
    <div className="hero min-h-screen py-9 bg-gray-900/50  fixed z-50 top-0 left-0 after:'' w-full h-full">
      <div className="w-full max-w-md shadow-2xl bg-base-100 gradient-thin relative">
        <button
          className="absolute top-2 right-4 text-2xl cursor-pointer inline-block"
          onClick={()=> setShowModal(false)}
        >
          x
        </button>
        <div className="mt-8">
          {" "}
          <SectionTitle title="UPDATED" />
        </div>
        <form className="card-body">
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
