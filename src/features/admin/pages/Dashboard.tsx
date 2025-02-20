import React from 'react';
import { Users, BookOpen, Bell, CreditCard, School2, Menu } from 'lucide-react';


interface SidebarLinkProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}

interface ProfileFieldProps {
  label: string;
  value: string | number;
}

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-indigo-600 text-2xl font-bold">SchoolSpot.</h1>
        </div>
        <nav className="mt-4">
          <SidebarLink icon={<Users />} text="Students" active />
          <SidebarLink icon={<School2 />} text="Teachers" />
          <SidebarLink icon={<BookOpen />} text="Class" />
          <SidebarLink icon={<BookOpen />} text="Subjects" />
          <SidebarLink icon={<CreditCard />} text="Payments" />
          <SidebarLink icon={<Bell />} text="Announcement" />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* Profile Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-6">Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProfileField label="Name" value="Jason Statham" />
            <ProfileField label="Email" value="jason@gmail.com" />
            <ProfileField label="Phone" value="8590369064" />
            <ProfileField label="Status" value="Active" />
            <ProfileField label="Role" value="Admin" />
          </div>
          <div className="flex gap-4 mt-6">
            <button className="px-4 py-2 text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100">
              Change Password
            </button>
            <button className="px-4 py-2 text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100">
              Edit Profile
            </button>
            <button className="px-4 py-2 text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100">
              Deactivate Account
            </button>
            <button className="px-4 py-2 text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100">
              Logout
            </button>
          </div>
        </div>

        {/* School Profile Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">School Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProfileField label="Name" value="Pallikoodam School" />
            <ProfileField label="Email" value="pallikoodam@gmail.com" />
            <ProfileField label="Registration Number" value="85745" />
            <ProfileField label="City" value="Palakkad" />
            <ProfileField label="State" value="Kerala" />
            <ProfileField label="Country" value="India" />
            <ProfileField label="Postal Code" value="856987" />
            <ProfileField label="Principal Name" value="Glenn Philip" />
            <ProfileField label="Total Students" value="806" />
            <ProfileField label="Total Teachers" value="25" />
            <ProfileField label="Board" value="CBSE" />
            <ProfileField label="Website URL" value="https://pallikoodam.com" />
          </div>
          <div className="flex gap-4 mt-6">
            <button className="px-4 py-2 text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100">
              Edit Profile
            </button>
            <button className="px-4 py-2 text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100">
              Upgrade Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ icon, text, active = false }: SidebarLinkProps) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-6 py-3 text-sm font-medium ${
        active
          ? 'text-indigo-600 bg-indigo-50 border-r-4 border-indigo-600'
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      {icon}
      {text}
    </a>
  );
}

function ProfileField({ label, value }: ProfileFieldProps) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-gray-500">{label}</label>
      <p className="text-sm font-medium text-gray-900">{value}</p>
    </div>
  );
}

export default Dashboard;
