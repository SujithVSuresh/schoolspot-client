import { useLocation, useNavigate } from "react-router-dom";

const NavLink = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const selectedLink = location.pathname.split("/")[2];
    const navItems = [
        { name: "Dashboard", link: "/student/dashboard" },
        { name: "Assignment", link: "/assignment" },
        { name: "Attendance", link: "/student/attendance" },
        { name: "Curriculum", link: "/curriculum" },
        { name: "Exams", link: "/exams" },
        { name: "News & Resources", link: "/news-resources" },
        { name: "Mentors", link: "/mentors" },
      ];
      
  return (
    <nav className="border-b sticky top-0 bg-white border-gray-200">
    <ul className="flex space-x-8">
      {navItems.map((item, index) => (
        <li key={index}>
          <a
          onClick={() => navigate(item.link)}
            href="#"
            className={`inline-flex items-center px-1 py-4 text-sm font-medium ${
              selectedLink === item.link.split("/")[2]
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
