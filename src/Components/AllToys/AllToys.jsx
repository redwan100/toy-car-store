import React, { useEffect, useState } from "react";
import ToysRow from "./ToysRow";
import useDynamicTitle from "../../Hooks/useHook";
import Loadings from "../../Pages/Shared/Loadings";
import { BiSearch } from "react-icons/bi";

const AllToys = () => {
  useDynamicTitle("All Toys");

  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://cartoystor.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = () => {
    fetch(`https://cartoystor.vercel.app/allToy/${inputValue}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  if (loading) return <Loadings />;
  return (
    <div className="overflow-x-auto w-full">
      <div className="flex gap-3 items-center my-4">
        <input
          type="search"
          className="input input-bordered input-success"
          placeholder="Search by toy name"
          name="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-circle btn-outline" onClick={handleSearch}>
          <BiSearch />
        </button>
      </div>

      {toys.length ? (
        <table className="table w-full">
          <thead>
            <tr>
              <th>Toy Image</th>
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
      ) : (
        <p className="text-center text-4xl font-semibold">
          No Products Available
        </p>
      )}
    </div>
  );
};

export default AllToys;
