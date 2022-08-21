import React, { useEffect, useReducer } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loading from "../../Components/Loading";
import auth from "../../firebase.init";
import useNewMember from "../../Hooks/useNewMember";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token] = useNewMember(gUser || user);

  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let signInErrorMessage;

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [navigate, token]);

  if (loading || gLoading || updating) {
    return <Loading />;
  }

  if (error || gError || updateError) {
    signInErrorMessage = (
      <p className="text-red-500 mb-2">{error?.message || gError?.message}</p>
    );
  }

  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  return (
    <div className="flex h-screen justify-center items-center bg-accent mt-16">
      <div
        className="card w-96 bg-base-100 shadow-xl"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <div className="card-body">
          <h2 className="text-center text-3xl">Sing Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
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
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid email",
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
            {/* Password */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {/*  */}
            {signInErrorMessage}
            <input
              className="btn btn-primary w-full max-w-xs"
              value="Sign Up"
              type="submit"
            />
          </form>
          <p>
            Already have an account{" "}
            <Link to="/login" className="text-blue-500">
              Please LogIn
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline w-full"
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
