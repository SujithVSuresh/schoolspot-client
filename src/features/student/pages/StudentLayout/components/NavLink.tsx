import { useLocation, useNavigate } from "react-router-dom";


const NavLink = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const pathName = location.pathname.split("/")
  
  // const classId = location.pathname.split("/")[3]


  const navItems = [
      { name: "Home", link: "home" },
      { name: "Subjects", link: "subjects" },
      { name: "Attendance", link: "attendance" }, 
      { name: "Invoices", link: "invoices" },
      { name: "Exam Results", link: "exam-results" },
      { name: "Announcements", link: "announcements" },
      { name: "Profile", link: "profile" }
    ];

    
      
  return (
  
    <nav className="border-b sticky top-0 z-40 bg-white border-gray-200">
    <ul className="flex space-x-8">
      {navItems.map((item, index) => (
        <li key={index}>
          <a
          onClick={() => navigate(`/student/${item.link}`)}
            className={`inline-flex items-center px-1 py-4 text-sm font-medium hover:cursor-pointer ${
              pathName[2] === item.link
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {item.name}
            {/* {item === "Exams" && (
              <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-red-100 text-red-600 rounded-full">
                New
              </span>
            )} */}
          </a>
        </li>
      ))}
    </ul>
  </nav>
  )
}

export default NavLink
