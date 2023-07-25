import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { checkUserAsync, selectError, selectLoggedInUser } from "./authSlice";

const Login = () => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const error = useSelector(selectError)
  const user = useSelector(selectLoggedInUser)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
    {user && <Navigate to={"/"} replace={true}/>}
    <div className="min-h-screen bg-gray-50 flex flex-col justify-ceneter py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login to your account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto  sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            noValidate
            className="space-y-6"
            onSubmit={handleSubmit((data) => {
              dispatch(checkUserAsync({ email: data.email, password: data.password }));
            })}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  autoComplete="off"
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "email not valid",
                    },
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  autoComplete="off"
                  {...register("password", {
                    required: "password is required",
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <EyeIcon
                    className="absolute right-2 top-2 cursor-pointer h-6 w-6"
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <EyeSlashIcon
                    className="absolute right-2 top-2 cursor-pointer h-6 w-6"
                    onClick={() => setVisible(true)}
                  />
                )}
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              {error && <p className="text-red-500">{error.message}</p>}
            </div>
            <div className={`flex justify-end`}>
              <div className="text-sm">
                <Link
                  to={"/forgot-password"}
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Sign In
              </button>
            </div>
            <div className={`flex justify-center w-full`}>
              <h4>New User?</h4>
              <Link to="/signup" className="text-blue-600 pl-2">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
