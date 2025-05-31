import {
  KeyRound,
  LogOut,
  CircleDollarSign
} from "lucide-react";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import { useDispatch } from "react-redux";
import { removeAdmin } from "../../redux/adminSlice";
import SchoolProfileForm from "./components/SchoolProfileForm";
import AdminProfileForm from "./components/AdminProfileForm";
import { useNavigate } from "react-router-dom";
// import AcademicYear from "./components/AcademicYear";


const AdminProfile = () => {
  const navigate = useNavigate()
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

           {/* <AcademicYear /> */}
            <div className="flex flex-wrap gap-4 px-28 py-10">
              <button onClick={() => navigate('/profile/change-password')} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                <KeyRound className="h-4 w-4" />
                Change Password
              </button>
              <button onClick={() => navigate('/profile/subscription')} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                <CircleDollarSign className="h-4 w-4" />
                Subscription
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
