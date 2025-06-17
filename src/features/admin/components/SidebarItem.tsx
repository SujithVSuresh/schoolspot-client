import { useNavigate, useLocation } from "react-router-dom";
import { ComponentType } from "react";
import { LucideProps } from "lucide-react";

const SidebarItem = ({
  item: { url, Icon },
}: {
  item: { name: string; url: string; Icon: ComponentType<LucideProps> };
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <a
      onClick={() => navigate(`/dashboard/${url}`)}
      className={`flex hover:cursor-pointer items-center justify-center p-5 ${
        location.pathname.split("/")[2] == url && "bg-secondary text-primaryText"
      } hover:bg-secondary hover:text-primaryText rounded-md group`}
    >
      <Icon className="h-5 w-5" />
    </a>
  );
};

export default SidebarItem;
