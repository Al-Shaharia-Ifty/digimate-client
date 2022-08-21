import React from "react";
import { Link } from "react-router-dom";
// import images from "../../Assets/Images/Banner-image.jpg";

const Item = ({ item }) => {
  const { img, _id, price, name } = item;

  return (
    <div className="card bg-neutral hover:shadow-xl transition ease-linear duration-200 ">
      <div className="overflow-hidden h-[300px]">
        <img
          src={img}
          alt=""
          className="hover:scale-125 transition ease-linear delay-75 duration-500 h-full mx-auto"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          <span className="font-bold">Price:</span> {price} Taka
        </p>
        <div className="card-actions justify-end ">
          <Link to={`product/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
