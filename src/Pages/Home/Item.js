import React from "react";
import { Link } from "react-router-dom";
// import images from "../../Assets/Images/Banner-image.jpg";

const Item = ({ item }) => {
  const { img, _id, price, name } = item;

  return (
    <div class="card bg-neutral hover:shadow-xl transition ease-linear duration-200 ">
      <div className="overflow-hidden">
        <img
          src={img}
          alt=""
          className="hover:scale-125 transition ease-linear delay-75 duration-500 "
        />
      </div>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>
          <span className="font-bold">Price:</span> {price} Taka
        </p>
        <div class="card-actions justify-end ">
          <Link to={`product/${_id}`}>
            <button class="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
