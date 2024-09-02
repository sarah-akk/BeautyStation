/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import logo from "../../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePOST } from "../../API";
import Input from "../../components/Inputs/Input";

const ForgitPassword: React.FC = () => {
  const notify = (message: string) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const navigate = useNavigate();
  const { mutation, handleChangeInput, handleSubmit } = usePOST(
    {
      email: "",
    },
    () => navigate("/code"),
    () => notify("الايميل غير صحيح يرجى ادخال ايميل صحيح")
  );

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100 px-4"
      style={{ direction: "rtl" }}
    >
      <ToastContainer />
      {/* {mutation.isLoading && <Loader />} */}

      <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-24 max-md:h-16 w-auto" />
        </div>
        <div className="mb-4">
          <Input
            type="email"
            name="email"
            onChange={handleChangeInput}
            title="البريد الالكتروني"
            placeholder="أدخل البريد الالكتروني"
            className="w-full"
          />
        </div>
        <div className="flex justify-center">
          <button
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
            onClick={() => {
              handleSubmit("admin/send/verification-code");
            }}
          >
            التالي
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgitPassword;
