import { useLoaderData, Link, useNavigate } from "react-router-dom";
import Rating from "../../Pages/Shared/Rating";

const ToyDetails = () => {
  const {
    sellerName,
    sellerEmail,
    toyName,
    photoUrl,
    price,
    rating,
    quantity,
    description,
  } = useLoaderData();

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1, {
      replace: true,
    });
  };

  return (
    <>
      <div className="grid md:grid-cols-2 shadow-md bg-white border border-zinc-200 my-8 rounded-md overflow-hidden">
        <figure className="max-h-[28rem] h-full w-full">
          <img
            src={photoUrl}
            alt="Album"
            className=" w-full h-full object-cover"
          />
        </figure>
        <div className=" p-6">
          <div className="space-y-1">
            <h2 className="card-title text-gray-800">Toy Name: {toyName}</h2>
            <h2 className="card-title text-gray-800">
              Seller Name: {sellerName}
            </h2>
            <h2 className="card-title text-gray-800">
              Seller Email: {sellerEmail}
            </h2>
          </div>
          <div className="text-gray-700 space-y-2">
            <p className="text-lg">Price: ${price}</p>
            <p className="text-lg">Available Quantity: {quantity}</p>
            <p className="text-lg">Description: {description}</p>
            <p className="flex items-center text-lg">
              Rating: <Rating rating={rating} count={rating} />({rating})
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Link
          className="bg-gradient py-2 px-4 rounded-md font-semibold"
          onClick={goBack}
        >
          &#8656; Go Back
        </Link>
      </div>
    </>
  );
};

export default ToyDetails;
