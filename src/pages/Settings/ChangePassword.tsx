import React, { useState } from "react";

const ChangePassword = () => {
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (passwords.newPassword === passwords.confirmPassword) {
      alert("تم تغيير كلمة المرور بنجاح!");
    } else {
      alert("كلمات المرور غير متطابقة!");
    }
  };

  return (
    <div
      className="mb-6 p-4 border border-gray-300 rounded-lg"
      style={{ direction: "rtl" }}
    >
      <h2 className="text-lg font-semibold mb-4">تغيير كلمة المرور</h2>
      <div className="mb-4">
        <label className="block mb-1">كلمة المرور القديمة</label>
        <input
          type="password"
          name="oldPassword"
          value={passwords.oldPassword}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">كلمة المرور الجديدة</label>
        <input
          type="password"
          name="newPassword"
          value={passwords.newPassword}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">تأكيد كلمة المرور الجديدة</label>
        <input
          type="password"
          name="confirmPassword"
          value={passwords.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-pink-500 text-white px-4 py-2 rounded"
      >
        تغيير كلمة المرور
      </button>
    </div>
  );
};

export default ChangePassword;
