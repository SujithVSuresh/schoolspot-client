import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface UserDataProps {
  profilePhoto: string;
  primaryText: string;
  secondaryText: string;
  navlink: string;
}

const UserListingCard = ({
  profilePhoto,
  primaryText,
  secondaryText,
  navlink,
}: UserDataProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(navlink)}
      className="border-2 rounded-xl p-4 relative hover:cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={profilePhoto}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border"
          />
          <div>
            <h3 className="font-medium mb-1 text-primaryText text-sm sm:text-base">
              {primaryText}
            </h3>
            <p className="text-xs sm:text-sm text-secondaryText">
              {secondaryText}
            </p>
          </div>
        </div>
        {/* Menu Button */}
        <button className="text-gray-400 hover:text-gray-600 transition-colors relative">
          <ChevronRight className="h-5 w-5" />
        </button>
        {/* Dropdown Menu */}
      </div>
    </div>
  );
};

export default UserListingCard;
