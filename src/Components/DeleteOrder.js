import React from "react";
import { toast } from "react-toastify";

const DeleteOrder = ({ deleteOrder, setDeleteOrder }) => {
  const { _id, productName } = deleteOrder;

  const handleDelete = () => {
    fetch(`https://vast-peak-81199.herokuapp.com/order/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Delete successfully`);
          setDeleteOrder(null);
          window.location.reload();
        }
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-red-500 text-lg">
            Are you sure you want to delete!
          </h3>
          <p className="py-4">{productName}</p>
          <div className="modal-action">
            <button
              onClick={() => handleDelete()}
              className="btn  btn-xs btn-error"
            >
              Delete
            </button>
            <label htmlFor="delete-confirm-modal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrder;
