import React from 'react'
import { NavLink } from 'react-router-dom';

const navData = [
  {
    id:1,
    name:"Home",
    path:'/'
  },
  {
    id:2,
    name:"All Toys",
    path:'/all-toyes'
  },
  {
    id:3,
    name:"My Toys",
    path:'/my-toys'
  },
  {
    id:4,
    name:"Add a Toys",
    path:'/add-toy'
  },
  {
    id:5,
    name:"Blogs",
    path:'/blogs'
  },
]

const Navbar = () => {
  const link = navData.map((nav) => (
    <NavLink
      key={nav.id}
      to={nav.path}
      className={`font-medium text-xl text-gray-800 hover:text-[#05f07a]`}
    >
      {nav.name}
    </NavLink>
  ));
  return (
    <div className="navbar bg-base-100">
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
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          {link}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
}

export default Navbar