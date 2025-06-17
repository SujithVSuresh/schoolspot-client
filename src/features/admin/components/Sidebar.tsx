import {
  LayoutDashboard,
  GraduationCap,
  Users,
  School,
  Megaphone,
} from "lucide-react";
import dotlogo from "../../../assets/images/dotlogo.png";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const sidebarItem = [
    {
      name: "Overview",
      url: "overview",
      Icon: LayoutDashboard,
    },
    {
      name: "Students",
      url: "students",
      Icon: GraduationCap,
    },
    {
      name: "Teachers",
      url: "teachers",
      Icon: Users,
    },
    {
      name: "Classes",
      url: "classes",
      Icon: School,
    },
    {
      name: "Announcement",
      url: "announcement",
      Icon: Megaphone,
    },
  ];

  return (
    <div className="fixed min-h-screen left-0 z-30 w-20 h-full bg-primary text-white">
      <div className="flex items-center justify-center border-b h-16 border-secondaryText">
        <div className="flex items-center">
          <img src={dotlogo} alt="" className="h-10" />
        </div>
      </div>

      <nav className="mt-5 px-2">
        <div className="space-y-1">
          {sidebarItem.map((item) => (
            <SidebarItem item={item} />
          ))}
        </div>

        {/* <div className="mt-10 pt-6 border-t border-indigo-800">
          <div className="space-y-1">
            <a
              href="#"
              className="flex items-center justify-center p-5 text-indigo-100 hover:bg-indigo-800 rounded-md group"
            >
              <Settings className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center p-5 text-indigo-100 hover:bg-indigo-800 rounded-md group"
            >
              <HelpCircle className="h-5 w-5" />
            </a>
          </div>
        </div> */}
      </nav>
    </div>
  );
};

export default Sidebar;
