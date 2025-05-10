import { useNavigate, useLocation } from "react-router-dom";

const ClassNavLink = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const pathName = location.pathname.split("/")
    
    const classId = location.pathname.split("/")[3]

    const pageType = location.pathname.split("/")[4]

    const navItems = [
        { name: "Students", link: "students" },
        { name: "Assignments", link: "assignments" },
        { name: "Study Materials", link: "study-materials" },
        { name: "Chapters", link: "chapters" }, 
        { name: "Announcements", link: "announcements" },
        { name: "Attendance", link: "attendance" },
        { name: "Exams", link: "exams" },
        { name: "Chat", link: "chat" },
      ];
      
  return (
    <nav className={`border-b ${pageType !== "chat" ? "sticky top-0" : ""} bg-white border-gray-200`}>
    <ul className="flex space-x-8">
      {navItems.map((item, index) => (
        <li key={index}>
          <a
          onClick={() => navigate(`/teacher/classes/${classId}/${item.link}`)}
            className={`inline-flex items-center px-1 py-4 text-sm font-medium hover:cursor-pointer ${
              pathName[4] === item.link
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

export default ClassNavLink
