import React from 'react'
import { Users, BookOpen, Bell, CreditCard, School2 } from 'lucide-react';
import logo from '../../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';


interface SidebarLinkProps {
  icon: React.ReactNode;
  text: string;
  link: string
  active?: boolean;
}

const Sidebar = () => {
  // const location = useLocation();
  // const { pathname } = location;
  return (
        <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-56 bg-white shadow-sm">
        <div className="p-6">
          <img src={logo} alt="" className="h-10" />
        </div>
        <nav className="mt-4">
          <SidebarLink icon={<Users />} text="Students" link="/students" />
          <SidebarLink icon={<School2 />} text="Teachers" link="/teachers" />
          <SidebarLink icon={<BookOpen />} text="Class" link="/book" />
          <SidebarLink icon={<BookOpen />} text="Subjects" link="/book" />
          <SidebarLink icon={<CreditCard />} text="Payments" link="/book" />
          <SidebarLink icon={<Bell />} text="Announcement" link="/book" />
        </nav>
      </div>
      </div>
  )
}

function SidebarLink({ icon, text, active = false, link }: SidebarLinkProps) {
    const navigate = useNavigate()
    return (
      <a
        onClick={() => navigate(link)}
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


export default Sidebar
