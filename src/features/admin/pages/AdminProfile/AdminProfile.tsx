import {
  KeyRound,
  Power,
  LogOut,
} from "lucide-react";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import { useDispatch } from "react-redux";
import { removeAdmin } from "../../redux/adminSlice";
import SchoolProfileForm from "./components/SchoolProfileForm";
import AdminProfileForm from "./components/AdminProfileForm";


const AdminProfile = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(removeAdmin());
  };

  return (
  
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1">
          <DashboardHeader />

          <AdminProfileForm />

           <SchoolProfileForm />
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-200 text-purple-600 hover:bg-purple-50 transition-colors">
                <KeyRound className="h-4 w-4" />
                Change Password
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors">
                <Power className="h-4 w-4" />
                Deactivate Account
              </button>
              <button
                onClick={() => logoutHandler()}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
     
        </div>
      </div>
  
  );
};

export default AdminProfile;
