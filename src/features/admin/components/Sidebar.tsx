// import React from 'react'
// import { Users, BookOpen, Bell, CreditCard, School2 } from 'lucide-react';
import dotlogo from '../../../assets/images/dotlogo.png'
// import { useNavigate } from 'react-router-dom';
// // import { useLocation } from 'react-router-dom';


// interface SidebarLinkProps {
//   icon: React.ReactNode;
//   text: string;
//   link: string
//   active?: boolean;
// }

// const Sidebar = () => {
//   // const location = useLocation();
//   // const { pathname } = location;
//   return (
//         <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div className="w-52 bg-white shadow-sm">
//         <div className="p-6">
//           <img src={logo} alt="" className="h-10" />
//         </div>
//         <nav className="mt-4">
//           <SidebarLink icon={<Users />} active={true} text="Students" link="/students" />
//           <SidebarLink icon={<School2 />} text="Teachers" link="/teachers" />
//           <SidebarLink icon={<BookOpen />} text="Class" link="/book" />
//           <SidebarLink icon={<BookOpen />} text="Subjects" link="/book" />
//           <SidebarLink icon={<CreditCard />} text="Payments" link="/book" />
//           <SidebarLink icon={<Bell />} text="Announcement" link="/book" />
//         </nav>
//       </div>
//       </div>
//   )
// }

// function SidebarLink({ icon, text, active = false, link }: SidebarLinkProps) {
//     const navigate = useNavigate()
//     return (
//       <a
//         onClick={() => navigate(link)}
//         className={`flex items-center gap-3 px-6 py-3 text-sm font-medium ${
//           active
//             ? 'text-indigo-600 bg-indigo-50 border-r-4 border-indigo-600'
//             : 'text-gray-400 hover:bg-gray-50'
//         }`}
//       >
//         {icon}
//         {text}
//       </a>
//     );
//   }


// export default Sidebar


import React from 'react';
import { 
  Users, 
  LayoutDashboard, 
  Settings, 
  HelpCircle, 
  BarChart3, 
  FileText, 

} from 'lucide-react';



const Sidebar = () => {
  return (
  


      <div 
        className={`fixed min-h-screen inset-y-0 left-0 z-30 w-20 h-full bg-blue-800 text-white transform transition duration-300 md:translate-x-0`}
      >
        <div className="flex items-center justify-center border-b h-16 border-indigo-400">
          <div className="flex items-center">
            <img src={dotlogo} alt="" className="h-10" />
          </div>
          {/* <button 
            className="md:hidden" 
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-6 w-6" />
          </button> */}
        </div>

        <nav className="mt-5 px-2">
          <div className="space-y-1">
            <a 
              href="#" 
              className="flex items-center justify-center p-4 text-indigo-100 hover:bg-indigo-800 rounded-md group"
            >
              <LayoutDashboard className="h-5 w-5" />
              {/* <span>Dashboard</span> */}
            </a>
            <a 
              href="#" 
              className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-md group"
            >
              <Users className="h-5 w-5" />
              {/* <span>Users</span> */}
            </a>
            <a 
              href="#" 
              className="flex items-center justify-center p-4 text-indigo-100 hover:bg-indigo-800 rounded-md group"
            >
              <BarChart3 className="h-5 w-5" />
              {/* <span>Analytics</span> */}
            </a>
            <a 
              href="#" 
              className="flex items-center justify-center p-4 text-indigo-100 hover:bg-indigo-800 rounded-md group"
            >
              <FileText className="h-5 w-5" />
              {/* <span>Reports</span> */}
            </a>
          </div>

          <div className="mt-10 pt-6 border-t border-indigo-800">
            <div className="space-y-1">
              <a 
                href="#" 
                className="flex items-center justify-center p-4 text-indigo-100 hover:bg-indigo-800 rounded-md group"
              >
                <Settings className="h-5 w-5" />
                {/* <span>Settings</span> */}
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center p-4 text-indigo-100 hover:bg-indigo-800 rounded-md group"
              >
                <HelpCircle className="h-5 w-5" />
                {/* <span>Help</span> */}
              </a>
            </div>
          </div>
        </nav>
      </div>


  );
};

export default Sidebar;