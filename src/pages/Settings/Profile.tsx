import React, { useState } from "react";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "اسم المستخدم",
    email: "example@example.com",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    alert("تم تحديث الملف الشخصي!");
  };

  return (
    <div
      className="mb-6 p-4 border border-gray-300 rounded-lg"
      style={{ direction: "rtl" }}
    >
      <h2 className="text-lg font-semibold mb-4">الملف الشخصي</h2>
      <div className="mb-4">
        <label className="block mb-1">الاسم</label>
        <input
          type="text"
          name="name"
          value={profileData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">البريد الإلكتروني</label>
        <input
          type="email"
          name="email"
          value={profileData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        onClick={handleSave}
        className="bg-pink-500 text-white px-4 py-2 rounded"
      >
        حفظ التغييرات
      </button>
    </div>
  );
};

export default Profile;
