import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="flex  overflow-y-hidden home-scroll">
      <div className="flex flex-row-reverse w-full h-screen ">
        <Sidebar />
        <div className="flex-1 overflow-y-auto ">
          <Header username={"اسم المستخدم"} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
