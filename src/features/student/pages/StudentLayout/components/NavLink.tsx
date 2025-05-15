import { useLocation, useNavigate } from "react-router-dom";

const NavLink = ({announcementBadge, setAnnouncementBadge}: {announcementBadge: number, setAnnouncementBadge: (value: number) => void}) => {
  const location = useLocation()
  const navigate = useNavigate()
  const pathName = location.pathname.split("/")

  console.log(announcementBadge, "laavuu123")

  const navItems = [
      { name: "Home", link: "home" },
      { name: "Subjects", link: "subjects" },
      { name: "Attendance", link: "attendance" }, 
      { name: "Invoices", link: "invoices" },
      { name: "Exam Results", link: "exam-results" },
      { name: "Announcements", link: "announcements" },
      { name: "Chat", link: "chat" },
      { name: "Profile", link: "profile" }
    ];

    const handleNavigation = (link: string) => {
      navigate(`/student/${link}`)
      if(link == "announcements"){
        setAnnouncementBadge(0)
      }
    }
      
  return (
    <nav className="border-b sticky top-0 z-40 bg-white border-gray-50">
      <ul className="flex space-x-8">
        {navItems.map((item, index) => (
          <li key={index} className="relative">
            <a
              onClick={() => handleNavigation(item.link)}
              className={`inline-flex items-center px-1 py-4 text-sm font-medium hover:cursor-pointer ${
                pathName[2] === item.link
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {item.name}
              {item.link === "announcements" && announcementBadge > 0 && (
                <span className="absolute -top-1 -right-2 h-5 w-5 flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                  {announcementBadge}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLink;