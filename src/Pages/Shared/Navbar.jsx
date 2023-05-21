import React, { useContext, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import {BiUserCircle} from 'react-icons/bi'
import { FiLogOut } from "react-icons/fi";
import { AuthContext } from '../../Context/AuthProvider';
import brand from '../../assets/logo-no-background.png'


const Links = ()=>{
  const { user } = useContext(AuthContext);

   return (
     <>
       <NavLink
         to={"/"}
         className={"font-medium text-xl text-gray-800 hover:text-[#05f07a]"}
       >
         Home
       </NavLink>
       <NavLink
         to={"/all-toys"}
         className={"font-medium text-xl text-gray-800 hover:text-[#05f07a]"}
       >
         All Toys
       </NavLink>

       {user && (
         <NavLink
           to={"/my-toys"}
           className={"font-medium text-xl text-gray-800 hover:text-[#05f07a]"}
         >
           My Toys
         </NavLink>
       )}

       {user && (
         <NavLink
           to={"/add-toy"}
           className={"font-medium text-xl text-gray-800 hover:text-[#05f07a]"}
         >
           Add Toys
         </NavLink>
       )}

       <NavLink
         to={"/blogs"}
         className={"font-medium text-xl text-gray-800 hover:text-[#05f07a]"}
       >
         Blogs
       </NavLink>
     </>
   );
}


const Navbar = () => {
 const { user, logOut } = useContext(AuthContext);
 console.log(user);


 const handleSingOut = () => {
   logOut()
     .then(() => {})
     .catch((err) => console.log(err));
 };
  return (
    <div
      className="navbar mx-auto lg:w-[90%]"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-4"
          >
            {Links()}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={brand} alt="" className="w-8" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{Links()}</ul>
      </div>
      <div className="navbar-end">
        {!user && (
          <Link
            to={"/login"}
            className="gradient py-1 px-4 text-cyan-700 font-medium"
          >
            Login
          </Link>
        )}

        <div>
          {user && (
            <div className="flex gap-3 items-center">
              {user.photoURL ? (
                <div>
                  <img
                    src={user.photoURL}
                    alt=""
                    className="w-8 h-8 rounded-full object-cover ring-2"
                    title={user?.displayName}
                  />
                </div>
              ) : (
                <BiUserCircle size={25} />
              )}
              <span className="flex items-center" onClick={handleSingOut}>
                <FiLogOut size={20} cursor={"pointer"} />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar