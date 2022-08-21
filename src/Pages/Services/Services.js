import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import Loading from "../../Components/Loading";
import auth from "../../firebase.init";

const Services = () => {
  return (
    <div className="mt-16">
      <div className="navbar-end w-16 ">
        <label
          htmlFor="dashboard-sidebar"
          tabIndex="1"
          className="btn btn-ghost lg:hidden"
        >
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
      </div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* <h2 className="text-4xl text-secondary">My Profile</h2> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-55 text-base-content bg-neutral rounded-lg">
            <li>
              <Link to="/services/orders">My Orders</Link>
            </li>
            {/* <li>
              <Link to="/services/review">Add a Review</Link>
            </li> */}
            <li>
              <Link to="/services/manageOrder">Manage All Orders</Link>
            </li>
            <li>
              <Link to="/services/add_product">Add a Product</Link>
            </li>
            <li>
              <Link to="/services/admin">All User</Link>
            </li>
            <li>
              <Link to="/services/manage_product">Manage Product</Link>
            </li>
            <li>
              <Link to="/services">My Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
