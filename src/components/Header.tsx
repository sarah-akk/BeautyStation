import React, { useState, useRef, useEffect } from "react";
import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import NotificationsDropdown from "./notifications";

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowNotifications(false);
    }
  };

  useEffect(() => {
    if (showNotifications) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNotifications]);

  return (
    <header className="bg-white text-gray-900 flex flex-row right-0 items-center justify-between p-5 shadow-md w-full space-x-4 relative">
      <div className="flex items-center space-x-5">
        {/* Notifications */}
        <div className="relative" ref={dropdownRef}>
          <IconButton
            className="text-gray-600 hover:text-gray-900"
            onClick={toggleNotifications}
          >
            <NotificationsIcon />
            {/* Notification Badge */}
            <span className="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </IconButton>
          {showNotifications && <NotificationsDropdown />}
        </div>

        {/* Settings */}
        <IconButton
          className="text-gray-600 hover:text-gray-900"
          onClick={() => navigate("/home/settings")}
        >
          <SettingsIcon />
        </IconButton>

        {/* User Avatar and Name */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          <span className="text-sm font-semibold">{username}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
