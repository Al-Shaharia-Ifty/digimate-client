import React, { useState } from "react";
import { useParams } from "react-router-dom";
import auth from "../firebase.init";
import useProductDetails from "../Hooks/useProductDetails";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./Loading";

const OrderModal = ({ setOrder }) => {
  const [orderMessage, setOrderMessage] = useState(true);
  const [overMessage, setOverMessage] = useState(true);
  const [user, loading] = useAuthState(auth);
  const { id } = useParams();
  const [product] = useProductDetails(id);
  const { _id, name, img, minimum, available, price } = product;
  let orderErrorMessage;
  if (loading) {
    return <Loading />;
  }
  const handleOrderPrice = (e) => {
    const order = e.target.value;
    const orderNumber = parseInt(order);
    if (orderNumber <= 0) {
      orderErrorMessage = (
        <p className="text-red-600">Please input Positive number</p>
      );
    }
    console.log(e.target.value);
    console.log(orderErrorMessage);
  };
  const handleOrder = (e) => {
    e.preventDefault();
    const order = e.target.order.value;
    const orderNumber = parseInt(order);
    const minimumNumber = parseInt(minimum);
    const priceNumber = parseInt(price);
    const totalPrice = orderNumber * priceNumber;
    const availableNumber = parseInt(available);
    const userName = user?.displayName;
    const userEmail = user?.email;
    const userAddress = e.target.address.value;
    const userPhone = e.target.phone.value;
    const availableOrder = available - order;
    const updateProduct = { availableOrder };

    setOrderMessage(true);
    setOrder(null);
  };

  return (
    <div>
      <input type="checkbox" id="orderModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box mt-16">
          <label
            htmlFor="orderModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">
            Your Order is: <span className="text-primary">{name}</span>
          </h3>
          <form
            onSubmit={handleOrder}
            className="grid grid-cols-1 gap-3 justify-items-center mt-7"
          >
            <div className="ml-[-270px]">
              <h2>Name</h2>
            </div>
            <input
              type="text"
              name="name"
              value={user?.displayName}
              className="input input-bordered w-full max-w-xs"
            />
            <div className="ml-[-270px]">
              <h2>Email</h2>
            </div>
            <input
              type="email"
              name="email"
              readOnly
              value={user?.email}
              className="input input-bordered w-full max-w-xs"
            />

            <div className="ml-[-270px]">
              <h2>Order</h2>
            </div>
            <input
              type="number"
              name="order"
              placeholder="Your Order"
              className="input input-bordered w-full max-w-xs"
              onChange={handleOrderPrice}
              required
            />
            {orderErrorMessage}
            <div className="ml-[-260px]">
              <h2>Address</h2>
            </div>
            <input
              type="text"
              name="address"
              placeholder="Your address"
              required
              className="input input-bordered w-full max-w-xs"
            />
            <div className="ml-[-260px]">
              <h2>Number</h2>
            </div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
              required
            />
            {orderMessage ? (
              ""
            ) : (
              <p className="text-red-500">
                You need to add Minimum {minimum} Orders
              </p>
            )}
            {overMessage ? (
              ""
            ) : (
              <p className="text-red-500">
                We have {available} available Product
              </p>
            )}
            <input
              type="submit"
              value="Submit"
              className="btn btn-modal w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
