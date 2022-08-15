import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let signInErrorMessage;
  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm();

  return (
    <div className="flex h-screen justify-center items-center bg-accent mt-16">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-3xl">Login</h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
