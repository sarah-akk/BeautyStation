/* eslint-disable @typescript-eslint/no-unused-vars */
// LoginPage.tsx
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.jpg";
import { Bounce } from "react-toastify";
import { toast, ToastContainer } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { usePOST } from "../../API";
import PasswordInput from "../../components/Inputs/Passwordinput";
import Input from "../../components/Inputs/Input";

const Code: React.FC = () => {
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
  const { mutation, handleChangeInput, handleSubmit, setFormData, formData } =
    usePOST(
      {
        password: "",
        password_confirmation: "",
        verification_code: "",
        email: "",
      },
      () => navigate("/"),
      () => notify(" المعلومات المدخلة غير صحيحة ")
    );

  const [biShow, setBiShow] = useState(false);

  // useEffect(() => {
  //   setFormData({
  //     _method: "PUT",
  //   });
  // }, []);

  return (
    <div className="flex-col items-center justify-center h-screen bg-gray-100 mt-2 ">
      <ToastContainer />
      {mutation.isLoading ? <Loader /> : ""}

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[55%] max-md:w-[97%]  mx-auto">
        <img src={logo} alt="" className=" w-full h-[200px] max-md:h-[50px] " />
        <div className=" relative mb-4">
          <PasswordInput
            name="password"
            onChange={handleChangeInput}
            title="كلمة المرور"
            placeholder="أدخل كلمة المرور"
          />
        </div>
        <div className=" relative mb-4">
          <PasswordInput
            name="password_confirmation"
            onChange={handleChangeInput}
            title="تأكيد كلمة المرور "
            placeholder="تأكيد كلمة المرور"
          />
        </div>
        <div className="">
          <Input
            type="number"
            name="verification_code"
            onChange={handleChangeInput}
            title="رمز التحقق"
            placeholder="أدخل رمز التحقق"
            className="!w-full"
          />
        </div>
        <div className="">
          <Input
            type="email"
            name="email"
            onChange={handleChangeInput}
            title="البريد الالكتروني"
            placeholder="أدخل البريد الألكتروني"
            className="!w-full"
          />
        </div>
        <div>
          <button
            className="w-[30%]  bg-primary rounded-xl text-white font-bold p-2 "
            onClick={() => handleSubmit("admin/reset-password")}
          >
            حفظ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Code;
