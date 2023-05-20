import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Lottie from "lottie-react";
import signInImg from '../../../public/login.json'
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser, loading } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const username = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        form.reset();
        updateUserData(result.user,username, photoUrl)
      })
      .catch((error) => setError(error.message));
  };


  const updateUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log("user name updated");
      })
      .catch((err) => console.log(err));
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="hero min-h-screen py-12 ">
      <div className="hero-content grid gap-8 sm:grid-cols-2 max-w-4xl">
        <div className="">
          <Lottie
            animationData={signInImg}
            loop={true}
            className="w-full h-full mx-auto"
          />
        </div>
        <div className="card shadow-2xl  bg-gradient-shade gradient">
          <h1 className="text-5xl font-bold text-center py-4">Sign Up!</h1>
          <form onSubmit={handleSignUp}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                  name="photoUrl"
                />
              </div>

              <div className="form-control mt-6">
                <button className="bg-gradient py-2 font-bold text-xl">Register</button>
              </div>
              {error && <p className="text-error font-medium">{error}</p>}
            </div>
            <p className="p-4 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
