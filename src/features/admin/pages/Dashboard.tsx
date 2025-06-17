import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <DashboardHeader />
      <Sidebar />
      <div className="pt-16 pl-28 pr-10 min-h-screen">
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
