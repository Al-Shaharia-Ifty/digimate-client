import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../Hooks/useProductDetails";
import OrderModal from "./OrderModal";

const ProductDetails = () => {
  const [order, setOrder] = useState(null);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [disablePlus, setDisablePlus] = useState(false);
  const [disableMinus, setDisableMinus] = useState(true);
  const { id } = useParams();
  const [product] = useProductDetails(id);
  const { name, img, description, price, delivery } = product;
  let totalPrice = parseInt(price) + parseInt(delivery);

  const minus = () => {
    const quantity = document.getElementById("quantity");
    const totalPrice = document.getElementById("total-product-price");
    const priceNumber = parseInt(price);
    const deliveryNumber = parseInt(delivery);
    const quantityNumber = parseInt(quantity.innerText);
    if (quantityNumber > 1) {
      const addQuantity = quantityNumber - 1;
      const withOutDelivery = addQuantity * priceNumber;
      const withDelivery = withOutDelivery + deliveryNumber;
      totalPrice.innerText = withDelivery;
      // quantity.innerText = addQuantity;
      setOrderQuantity(addQuantity);
      setDisablePlus(false);
    } else {
      setDisableMinus(true);
    }
  };
  const plus = () => {
    const quantity = document.getElementById("quantity");
    const totalPrice = document.getElementById("total-product-price");
    const priceNumber = parseInt(price);
    const quantityNumber = parseInt(quantity.innerText);
    const deliveryNumber = parseInt(delivery);
    if (quantityNumber < 100) {
      const addQuantity = quantityNumber + 1;
      const withOutDelivery = addQuantity * priceNumber;
      const withDelivery = withOutDelivery + deliveryNumber;
      totalPrice.innerText = withDelivery;
      // quantity.innerText = addQuantity;
      setOrderQuantity(addQuantity);
      setDisableMinus(false);
    } else {
      setDisablePlus(true);
    }
  };

  return (
    <div className="mt-16">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img}
            className="lg:max-w-md max-w-xs md:max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-4xl font-bold">{name}</h1>
            <p className="pt-6">
              {" "}
              <span className="text-primary font-bold">Description:</span>{" "}
              {description}
            </p>
            <p className="mt-4">
              Price <span className="text-red-500">(per unit)</span>: Tk{" "}
              <b>{price}</b>{" "}
            </p>
            <p>
              Delivery charge: Tk <b>{delivery}</b>
            </p>
            <div className="grid grid-cols-2"></div>
            <div className="flex items-center">
              <p>Quantity:</p>
              <button
                id="minus-button"
                className={
                  disableMinus
                    ? "btn  ml-2 text-2xl opacity-50 cursor-not-allowed"
                    : "btn  ml-2 text-2xl"
                }
                onClick={() => minus()}
              >
                -
              </button>
              <p id="quantity" className="px-5 font-bold">
                {orderQuantity}
              </p>
              <button
                id="plus-button"
                className={
                  disablePlus
                    ? "btn  ml-2 text-2xl opacity-50 cursor-not-allowed"
                    : "btn  ml-2 text-2xl"
                }
                onClick={() => plus()}
              >
                +
              </button>
              <p className="ml-5">
                Total Price :{" "}
                <span id="total-product-price" className="font-bold">
                  {totalPrice}
                </span>{" "}
                Tk
              </p>
            </div>
            <label
              onClick={() => setOrder({ hello: "hello" })}
              htmlFor="orderModal"
              className="btn btn-primary mt-5"
            >
              Order now
            </label>
            {order && (
              <OrderModal
                setOrder={setOrder}
                orderQuantity={orderQuantity}
              ></OrderModal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
