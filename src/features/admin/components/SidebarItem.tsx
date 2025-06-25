import { useNavigate, useLocation } from "react-router-dom";
import { ComponentType } from "react";
import { LucideProps } from "lucide-react";

const SidebarItem = ({
  item: { name, url, Icon },
}: {
  item: { name: string; url: string; Icon: ComponentType<LucideProps> };
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
<div className="relative group">
  <a
    onClick={() => navigate(`/dashboard/${url}`)}
    className={`flex items-center justify-center p-5 rounded-md hover:cursor-pointer transition-all
      ${location.pathname.split("/")[2] === url ? "bg-secondary text-primaryText" : ""}
      hover:bg-secondary hover:text-primaryText
    `}
  >
    <Icon className="h-5 w-5" />
  </a>

  {/* Improved Tooltip */}
  <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 pointer-events-none z-20">
    <div className="relative bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-md shadow-lg">
      {name}
      {/* Tooltip Arrow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-1 w-2 h-2 bg-gray-800 rotate-45 z-[-1]"></div>
    </div>
  </div>
</div>


  );
};

export default SidebarItem;
