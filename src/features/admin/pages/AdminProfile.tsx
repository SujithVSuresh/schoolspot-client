
import { KeyRound, User, Phone, Activity, Shield, Edit2, Power, LogOut } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';
import { useDispatch } from 'react-redux';
import { removeAdmin } from '../redux/adminSlice';


const AdminProfile = () => {
    const dispatch = useDispatch()

    const profileData = {
        name: 'Jason Statham',
        email: 'jason@gmail.com',
        phone: '8590369084',
        status: 'Active',
        role: 'Admin'
      };

      const logoutHandler = () => {
        dispatch(removeAdmin())
      }
      
  return (
    <div>
    


    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Header */}
      <div className="flex-1 p-8">
        <DashboardHeader />
      

        <div className="rounded-2xl p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">Profile</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Name Field */}
            <div className="bg-gray-100 rounded-xl p-4">
              <label className="text-sm text-gray-500 mb-1 block">Name</label>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-gray-400" />
                <span className="text-gray-700">{profileData.name}</span>
              </div>
            </div>

            {/* Email Field */}
            <div className="bg-gray-100 rounded-xl p-4">
              <label className="text-sm text-gray-500 mb-1 block">Email</label>
              <div className="flex items-center gap-2">
                <Edit2 className="h-4 w-4 text-gray-400" />
                <span className="text-gray-700">{profileData.email}</span>
              </div>
            </div>

            {/* Phone Field */}
            <div className="bg-gray-100 rounded-xl p-4">
              <label className="text-sm text-gray-500 mb-1 block">Phone</label>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-700">{profileData.phone}</span>
              </div>
            </div>

            {/* Status Field */}
            <div className="bg-gray-100 rounded-xl p-4">
              <label className="text-sm text-gray-500 mb-1 block">Status</label>
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-green-500" />
                <span className="text-gray-700">{profileData.status}</span>
              </div>
            </div>

            {/* Role Field */}
            <div className="bg-gray-100 rounded-xl p-4">
              <label className="text-sm text-gray-500 mb-1 block">Role</label>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-gray-400" />
                <span className="text-gray-700">{profileData.role}</span>
              </div>
            </div>
          </div>

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
            <button onClick={() => logoutHandler()} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
  
  

      </div>
    </div>
    </div>
  )
}

export default AdminProfile
