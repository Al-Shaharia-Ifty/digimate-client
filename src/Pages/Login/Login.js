import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../../Components/Loading";
import useToken from "../../Hooks/useToken";
import useNewMember from "../../Hooks/useNewMember";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  let signInErrorMessage;
  const [token] = useToken(user);
  const [gToken] = useNewMember(gUser);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token || gToken) {
      navigate(from, { replace: true });
    }
  }, [navigate, token, from, gToken]);

  if (loading || gLoading) {
    return <Loading />;
  }

  if (error || gError) {
    signInErrorMessage = (
      <p className="text-red-500 mb-2">{error?.message || gError?.message}</p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex h-screen justify-center items-center bg-accent mt-16">
      <div
        className="card  max-w-md bg-base-100 shadow-xl"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <div className="card-body">
          <h2 className="text-center text-3xl">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div className="form-control w-full max-w-sm">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-sm"
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
            <div className="form-control w-full max-w-sm">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-sm"
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
              className="btn btn-primary w-full max-w-sm"
              value="login"
              type="submit"
            />
          </form>
          <p>
            New to Pure Digimate{" "}
            <Link to="/signup" className="text-blue-500">
              Create and Account
            </Link>{" "}
          </p>
          <p>
            Are you forget your password?{" "}
            <Link to="/reset_pass" className="text-blue-500">
              Reset Password
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

export default Login;
