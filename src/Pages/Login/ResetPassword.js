import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let signInErrorMessage;
  const onSubmit = (data) => {
    sendPasswordResetEmail(data.email);
    toast.success("Send Reset Password Email");
    navigate("/login");
  };
  return (
    <div className="flex justify-center items-center h-screen bg-accent">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl text-center">Reset Password</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            {signInErrorMessage}
            <input
              className="btn btn-primary btn-outline w-full max-w-xs"
              value="Reset Password"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
