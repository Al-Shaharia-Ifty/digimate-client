import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../Hooks/useProductDetails";
import OrderModal from "./OrderModal";

const ProductDetails = () => {
  const [order, setOrder] = useState(null);
  const { id } = useParams();
  const [product] = useProductDetails(id);
  const { name, img, description, price, delivery } = product;

  return (
    <div className="mt-16">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="pt-6">Description: {description}</p>
            <p>
              Price <span className="text-red-500">(per unit)</span>: Tk{" "}
              <b>{price}</b>{" "}
            </p>
            <p>
              Delivery charge: Tk <b>{delivery}</b>
            </p>

            <label
              onClick={() => setOrder({ hello: "hello" })}
              htmlFor="orderModal"
              className="btn btn-primary mt-5"
            >
              Order now
            </label>
            {order && <OrderModal setOrder={setOrder}></OrderModal>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
