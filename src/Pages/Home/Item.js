import React from "react";
import images from "../../Assets/Images/Banner-image.jpg";

const Item = () => {
  return (
    <div class="card bg-neutral hover:shadow-xl transition ease-linear duration-200 ">
      <div className="overflow-hidden">
        <img
          src={images}
          alt=""
          className="hover:scale-125 transition ease-linear delay-75 duration-500 "
        />
      </div>
      <div class="card-body">
        <h2 class="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
