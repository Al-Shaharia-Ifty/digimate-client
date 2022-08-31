import React, { useState } from "react";
import { useParams } from "react-router-dom";
import auth from "../firebase.init";
import useProductDetails from "../Hooks/useProductDetails";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./Loading";
import { toast } from "react-toastify";

const OrderModal = ({ setOrder, orderQuantity }) => {
  const [orderMessage, setOrderMessage] = useState(true);
  const [user, loading] = useAuthState(auth);
  const { id } = useParams();
  const [product] = useProductDetails(id);
  const { _id, name, img, price, delivery } = product;

  const order = orderQuantity;
  const orderNumber = parseInt(order);
  const priceNumber = parseInt(price);
  const deliveryNumber = parseInt(delivery);
  const totalProductPrice = orderNumber * priceNumber;
  const totalPrice = totalProductPrice + deliveryNumber;

  if (loading) {
    return <Loading />;
  }
  const handleOrder = (e) => {
    e.preventDefault();
    // const order = orderQuantity;
    // const orderNumber = parseInt(order);
    // const priceNumber = parseInt(price);
    // const deliveryNumber = parseInt(delivery);
    // const totalProductPrice = orderNumber * priceNumber;
    // const totalPrice = totalProductPrice + deliveryNumber;
    const userName = user?.displayName;
    const userEmail = user?.email;
    const userAddress = e.target.address.value;
    const userPhone = e.target.phone.value;
    //
    if (orderNumber <= 0) {
      setOrderMessage(false);
    } else if (orderNumber > 0) {
      const orders = {
        orderID: _id,
        productName: name,
        productImg: img,
        name: userName,
        email: userEmail,
        order: order,
        address: userAddress,
        phone: userPhone,
        price: totalPrice,
        paid: "",
      };
      fetch("https://vast-peak-81199.herokuapp.com/order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orders),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Order Success");
        });
      setOrderMessage(true);
      setOrder(null);
    }
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
          <div>
            <div>
              <h1 className="mt-2">Order Quantity : {orderQuantity}</h1>
              <h1>Order Amount : {totalProductPrice}</h1>
              <h1>Delivery Charge : {delivery} Tk</h1>
              <h1>
                Total Amount : <b>{totalPrice}</b> Tk
              </h1>
            </div>
          </div>

          <form
            onSubmit={handleOrder}
            className="grid grid-cols-1 gap-3 justify-items-center mt-5"
          >
            <div className="ml-[-270px]">
              <h2>Name</h2>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
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
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
              required
            />
            {orderMessage ? (
              ""
            ) : (
              <p className="text-red-500">
                You need to Order minimum 1 product
              </p>
            )}
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary btn-outline w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
