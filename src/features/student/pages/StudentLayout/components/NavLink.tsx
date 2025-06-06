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
      { name: "Exams", link: "exams" },
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
    <nav className="border-b sticky top-0 z-40 bg-white">
      <ul className="flex space-x-5 py-2">
        {navItems.map((item, index) => (
<li key={index}>
  <a
    onClick={() => handleNavigation(item.link)}
    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 hover:bg-gray-200 cursor-pointer ${
      pathName[2] === item.link
        ? "bg-primary text-white"
        : "text-primaryText bg-secondary"
    }`}
  >
    {item.name}
    {item.link === "announcements" && announcementBadge > 0 && (
      <span className="ml-2 h-5 w-5 flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
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