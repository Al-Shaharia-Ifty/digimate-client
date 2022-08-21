import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import DeleteOrder from "../../Components/DeleteOrder";
import Loading from "../../Components/Loading";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [deleteOrder, setDeleteOrder] = useState(null);
  const [order, setOrder] = useState([]);
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      const url = `http://localhost:5000/order?buyer=${user.email}`;
      fetch(url, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setOrder(data));
    }
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-3xl my-5">My Orders: {order.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Product Images</th>
              <th>Order</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Total Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {order.map((a, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{a.productName}</td>
                <td>
                  <img src={a.productImg} alt="" className="max-h-[100px]" />
                </td>
                <td>{a.order}</td>
                <td>{a.phone}</td>
                <td>{a.address}</td>
                <td>৳{a.price}</td>
                <td>
                  {a.price && !a.paid && (
                    <>
                      {/* <Link to={`/dashboard/payment/${a._id}`}>
                        <button className="btn btn-xs btn-success">Pay</button>
                      </Link> 
                      <br /> */}
                      <label
                        onClick={() => setDeleteOrder(a)}
                        htmlFor="delete-confirm-modal"
                        className="btn btn-xs btn-error"
                      >
                        delete
                      </label>
                    </>
                  )}
                  {a.price && a.paid === "pending" && (
                    <div>
                      <p className="text-yellow-500">Pending Order</p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">{a.transactionId}</span>
                      </p>
                    </div>
                  )}
                  {a.paid === "success" && (
                    <div>
                      <p className="text-green-500">Order is done</p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">{a.transactionId}</span>
                      </p>
                    </div>
                  )}
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteOrder && (
        <DeleteOrder
          deleteOrder={deleteOrder}
          setDeleteOrder={setDeleteOrder}
          order={order}
        />
      )}
    </div>
  );
};

export default MyOrder;
