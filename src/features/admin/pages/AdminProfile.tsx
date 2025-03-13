import {
  KeyRound,

  Edit2,
  Power,
  LogOut,
} from "lucide-react";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import { useDispatch } from "react-redux";
import { removeAdmin } from "../redux/adminSlice";
import { Settings } from "lucide-react";

const AdminProfile = () => {
  const dispatch = useDispatch();



  const logoutHandler = () => {
    dispatch(removeAdmin());
  };

  return (
    <div>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar />

        {/* Header */}
        <div className="flex-1">
          <DashboardHeader />

          <div className="pt-20 pl-28 pr-8 ">
            <div className="flex justify-between relative">
            <h1 className="text-xl font-medium text-gray-800 mb-8">Profile info</h1>
            <Settings className="h-5 w-5 mt-2" />

            {/* <div className="bg-red-500 w-40 h-20 absolute right-0 top-2 z-10">

            </div> */}

            </div>

       
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative">
                <label
                  htmlFor="nameInput"
                  className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
                >
                  Name
                </label>
                <input
                  id="nameInput"
                  type="text"
                  className="w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 placeholder-gray-400"
                  placeholder="Enter your name"
                  aria-label="Name input field"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="nameInput"
                  className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
                >
                  Email
                </label>
                <input
                  disabled={true}
                  id="nameInput"
                  type="text"
                  className="w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 placeholder-gray-400"
                  placeholder="Enter your name"
                  aria-label="Name input field"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="nameInput"
                  className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
                >
                  Role
                </label>
                <input
                  id="nameInput"
                  type="text"
                  className="w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 placeholder-gray-400"
                  placeholder="Enter your name"
                  aria-label="Name input field"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="nameInput"
                  className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
                >
                  Status
                </label>
                <input
                  id="nameInput"
                  type="text"
                  className="w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 placeholder-gray-400"
                  placeholder="Enter your name"
                  aria-label="Name input field"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="nameInput"
                  className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
                >
                  Phone number
                </label>
                <input
                  id="nameInput"
                  type="text"
                  className="w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 placeholder-gray-400"
                  placeholder="Enter your name"
                  aria-label="Name input field"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="nameInput"
                  className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
                >
                  Designation
                </label>
                <input
                  id="nameInput"
                  type="text"
                  className="w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 placeholder-gray-400"
                  placeholder="Enter your name"
                  aria-label="Name input field"
                />
              </div>


            </div>
              <button
            type="submit"
            className={`rounded-md mt-5 flex justify-center px-6 py-3 items-center text-base font-medium text-white bg-blue-300`}
          >
   
              Save changes
           </button>
            
           </div>


           <div className="rounded-2xl pt-20 pl-28 pr-8">
            <h1 className="text-xl font-medium text-gray-800 mb-8">School Profile</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative">
                <label
                  htmlFor="nameInput"
                  className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
                >
                  Name
                </label>
                <input
                  id="nameInput"
                  type="text"
                  className="w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 placeholder-gray-400"
                  placeholder="Enter your name"
                  aria-label="Name input field"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="nameInput"
                  className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
                >
                  Email
                </label>
                <input
                  disabled={true}
                  id="nameInput"
                  type="text"
                  className="w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 placeholder-gray-400"
                  placeholder="Enter your name"
                  aria-label="Name input field"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="nameInput"
                  className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
                >
                  Role
                </label>
                <input
                  id="nameInput"
                  type="text"
                  className="w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 placeholder-gray-400"
                  placeholder="Enter your name"
                  aria-label="Name input field"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="nameInput"
                  className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
                >
                  Status
                </label>
                <input
                  id="nameInput"
                  type="text"
                  className="w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 placeholder-gray-400"
                  placeholder="Enter your name"
                  aria-label="Name input field"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="nameInput"
                  className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
                >
                  Phone number
                </label>
                <input
                  id="nameInput"
                  type="text"
                  className="w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 placeholder-gray-400"
                  placeholder="Enter your name"
                  aria-label="Name input field"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="nameInput"
                  className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
                >
                  Designation
                </label>
                <input
                  id="nameInput"
                  type="text"
                  className="w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 placeholder-gray-400"
                  placeholder="Enter your name"
                  aria-label="Name input field"
                />
              </div>


            </div>
              <button
            type="submit"
            className={`rounded-md mt-5 flex justify-center px-6 py-3 items-center text-base font-medium text-white bg-blue-300`}
          >
   
              Save changes
           </button>
            
           </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-100 rounded-xl p-4">
                <label className="text-sm text-gray-500 mb-1 block">Name</label>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-700">{profileData.name}</span>
                </div>
              </div>

              <div className="bg-gray-100 rounded-xl p-4">
                <label className="text-sm text-gray-500 mb-1 block">
                  Email
                </label>
                <div className="flex items-center gap-2">
                  <Edit2 className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-700">{profileData.email}</span>
                </div>
              </div>

              <div className="bg-gray-100 rounded-xl p-4">
                <label className="text-sm text-gray-500 mb-1 block">
                  Phone
                </label>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-700">{profileData.phone}</span>
                </div>
              </div>

              <div className="bg-gray-100 rounded-xl p-4">
                <label className="text-sm text-gray-500 mb-1 block">
                  Status
                </label>
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-green-500" />
                  <span className="text-gray-700">{profileData.status}</span>
                </div>
              </div>

              <div className="bg-gray-100 rounded-xl p-4">
                <label className="text-sm text-gray-500 mb-1 block">Role</label>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-700">{profileData.role}</span>
                </div>
              </div>
            </div> */}


            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-200 text-purple-600 hover:bg-purple-50 transition-colors">
                <KeyRound className="h-4 w-4" />
                Change Password
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-200 text-blue-600 hover:bg-blue-50 transition-colors">
                <Edit2 className="h-4 w-4" />
                Edit Profile
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
    </div>
  );
};

export default AdminProfile;
