import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useEffect } from "react";

const Splash = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/auth");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-center bg-cover relative">
      <img src={logo} className="relative" alt="Logo" />
    </div>
  );
};

export default Splash;
