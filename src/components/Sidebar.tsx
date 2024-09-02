import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "../styles/output.css";

import {
  FaTachometerAlt,
  FaUsers,
  FaTh,
  FaBuilding,
  FaBox,
  // FaHome,
  FaCog,
  FaComments,
  FaShieldAlt,
  FaClipboardList,
  FaChartLine,
  FaMoneyBillWave,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 right-4 z-30 p-2 text-white bg-pink-900 rounded-md"
      >
        {isOpen ? <IoClose size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        style={{ backgroundColor: "#9b007e" }}
        className={` fixed top-0 right-0 z-20 w-64 bg-fuchsia-800 p-2 flex flex-col items-center transition-transform duration-300 ease-in-out rounded-lg ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:w-1/6 overflow-auto rounded m-2 custom-gradient h-screen `}
      >
        <img src={logo} className="w-20 rounded-full m-10" alt="Logo" />

        <nav
          className="flex flex-col w-full mt-5 items-center gap-4 text-white font-bold text-sm"
          style={{ direction: "rtl" }}
        >
          <NavLink
            to="dashboard"
            className="sidebar-item flex items-center gap-2 py-2 px-4 rounded transition-colors duration-200 w-5/6 hover:bg-slate-300 hover:bg-opacity-30"
            onClick={toggleSidebar}
          >
            <FaTachometerAlt />
            لوحة التحكم
          </NavLink>
          <NavLink
            to="users"
            className="sidebar-item flex items-center gap-2 py-2 px-4 rounded transition-colors duration-200 w-5/6 hover:bg-slate-300 hover:bg-opacity-30"
            onClick={toggleSidebar}
          >
            <FaUsers />
            المستخدمين
          </NavLink>
          <NavLink
            to="sections"
            className="sidebar-item flex items-center gap-2 py-2 px-4 rounded transition-colors duration-200 w-5/6 hover:bg-slate-300 hover:bg-opacity-30"
            onClick={toggleSidebar}
          >
            <FaTh />
            الاقسام
          </NavLink>
          <NavLink
            to="serviceProviders"
            className="sidebar-item flex items-center gap-2 py-2 px-4 rounded transition-colors duration-200 w-5/6 hover:bg-slate-300 hover:bg-opacity-30"
            onClick={toggleSidebar}
          >
            <FaBuilding />
            مقدمين الخدمات
          </NavLink>
          <NavLink
            to="providersRequest"
            className="sidebar-item flex items-center gap-2 py-2 px-4 rounded transition-colors duration-200 w-5/6 hover:bg-slate-300 hover:bg-opacity-30"
            onClick={toggleSidebar}
          >
            <FaShieldAlt />
            توثيق الحسابات
          </NavLink>
          <NavLink
            to="servicesRequests"
            className="sidebar-item flex items-center gap-2 py-2 px-4 rounded transition-colors duration-200 w-5/6 hover:bg-slate-300 hover:bg-opacity-30"
            onClick={toggleSidebar}
          >
            <FaClipboardList />
            الخدمات
          </NavLink>
          <NavLink
            to="bookingRequests"
            className="sidebar-item flex items-center gap-2 py-2 px-4 rounded transition-colors duration-200 w-5/6 hover:bg-slate-300 hover:bg-opacity-30"
            onClick={toggleSidebar}
          >
            <FaBox />
            الحجوزات
            <span
              className="ml-auto text-xs font-semibold bg-red-500 bg-opacity-80
             text-white rounded-full w-5 h-5 flex items-center justify-center"
            >
              10
            </span>
          </NavLink>
          <NavLink
            to="profits"
            className="sidebar-item flex items-center gap-2 py-2 px-4 rounded transition-colors duration-200 w-5/6 hover:bg-slate-300 hover:bg-opacity-30"
            onClick={toggleSidebar}
          >
            <FaChartLine />
            الارباح
          </NavLink>
          <NavLink
            to="withdrawal"
            className="sidebar-item flex items-center gap-2 py-2 px-4 rounded transition-colors duration-200 w-5/6 hover:bg-slate-300 hover:bg-opacity-30"
            onClick={toggleSidebar}
          >
            <FaMoneyBillWave />
            طلبات سحب الأموال
          </NavLink>
          <NavLink
            to="support"
            className="sidebar-item flex items-center gap-2 py-2 px-4 rounded transition-colors duration-200 w-5/6 hover:bg-slate-300 hover:bg-opacity-30 relative"
            onClick={toggleSidebar}
          >
            <FaComments />
            الشكاوى
            <span
              className="ml-auto text-xs font-semibold bg-red-500 bg-opacity-80
             text-white rounded-full w-5 h-5 flex items-center justify-center"
            >
              5
            </span>
          </NavLink>
          <NavLink
            to="socialInformations"
            className="sidebar-item flex items-center gap-2 py-2 px-4 rounded transition-colors duration-200 w-5/6 hover:bg-slate-300 hover:bg-opacity-30"
            onClick={toggleSidebar}
          >
            <FaCog />
            الاعدادات
          </NavLink>
        </nav>
      </aside>

      {/* Overlay for mobile view */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
