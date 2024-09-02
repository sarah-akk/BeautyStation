import React from "react";
import Profile from "./Profile";
import ChangePassword from "./ChangePassword";
import Logout from "./Logout";

const Settings = () => {
  return (
    <div className="p-6" style={{ direction: "rtl" }}>
      <h1 className="text-2xl font-bold mb-6">الاعدادات</h1>
      <Profile />
      <ChangePassword />
      <Logout />
    </div>
  );
};

export default Settings;
