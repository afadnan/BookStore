import React from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
function Signup() {
  const location = useLocation();
  const Navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfull");
          Navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error " + err.response.data.message);
        }
      });
  };
  return (
    <>
      {/*items - column,Vertical justify - row,horizontal*/}
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal
               */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost 
absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              <div className="mt-4 space-y-3">
                <span>Name</span>
                <br />
                <input
                  className="border w-80 px-2 py-1 rounded-md outline-none"
                  type="text"
                  placeholder="Enter Your Full Name"
                  {...register("fullname", { required: true })}
                />
                <br />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-3">
                <span>Email</span>
                <br />
                <input
                  className="border w-80 px-2 py-1 rounded-md outline-none"
                  type="email"
                  placeholder="Enter Your Email"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-2 space-y-3">
                <span>Password</span>
                <br />
                <input
                  className="border w-80 px-2 py-1 rounded-md outline-none"
                  type="Password"
                  placeholder="Enter Your Password"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-around mt-4">
                <button
                  className="bg-pink-500 text-white rounded-md px-3 
py-1 hover:bg-pink-800 duration-200 pointer"
                >
                  Signup
                </button>
                <p className="text-xl">
                  Have account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
