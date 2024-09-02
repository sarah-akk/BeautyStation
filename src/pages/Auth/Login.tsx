/* eslint-disable @typescript-eslint/no-unused-vars */
// LoginPage.tsx
import React from "react";
import logo from "../../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Input from "../../components/Inputs/Input";

import "react-toastify/dist/ReactToastify.css";
import PasswordInput from "../../components/Inputs/Passwordinput";
import { usePOST } from "../../API";

const Login: React.FC = () => {
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
      username: "",
      password: "",
    },
    (data) => {
      navigate("/home");
    },
    () => notify("خطأ في تسجيل الدخول")
  );

  return (
    <div
      className=" flex-col flex items-center justify-center min-h-screen bg-gray-100 px-4"
      style={{ direction: "rtl" }}
    >
      <ToastContainer />

      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-24 max-md:h-16" />
        </div>
        <Input
          type="text"
          name="username"
          onChange={handleChangeInput}
          title="اسم المستخدم أو البريد الالكتروني"
          placeholder="أدخل اسم المستخدم أو البريد الألكتروني"
          className="!w-full mb-4"
          aria-label="Username or Email"
        />
        <div className="mb-6">
          <PasswordInput
            name="password"
            onChange={handleChangeInput}
            title="كلمة السر"
            placeholder="أدخل كلمة المرور"
            aria-label="Password"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <button
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
            type="submit"
            onClick={() => navigate("/home/dashboard")}
          >
            تسجيل الدخول
          </button>
        </div>
        <div className="text-center">
          <Link
            to="/forget"
            className="font-bold text-sm text-pink-600 hover:text-pink-800"
          >
            ? نسيت كلمة السر
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
