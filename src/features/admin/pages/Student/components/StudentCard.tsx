import { UserStoreType } from "../../../types/types";
import { StudentProfileType } from "../../../types/types";
import { MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentCard = ({
  student,
  user,
  index,
  onBlockClick,
  toggleMenu,
  openMenu
}: {
  student: Partial<StudentProfileType>;
  user: Partial<UserStoreType>;
  index: number;
  onBlockClick: (
    userId: string,
    status: "active" | "blocked" | "deleted" | "inactive"
  ) => void;
  toggleMenu: (index: number) => void;
  openMenu: null | number
}) => {
  const navigate = useNavigate()
  return (
    <div className="bg-gray-100 rounded-xl p-4 relative">
      <div className="flex items-center justify-between">
        <div onClick={() => navigate(`/dashboard/students/profile/${user._id}`)} className="flex items-center gap-3 hover:cursor-pointer">
          <img
            src={student.profilePhoto as string}
            alt={student.fullName}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-medium text-gray-700 text-sm sm:text-base">
              {student.fullName}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              {student.class} {student.section}
            </p>
          </div>
        </div>
        {/* Menu Button */}
        <button
          className="text-gray-400 hover:text-gray-600 transition-colors relative"
          onClick={() => toggleMenu(index)}
        >
          <MoreVertical className="h-5 w-5" />
        </button>
        {/* Dropdown Menu */}
        {openMenu === index && (
          <div className="absolute right-0 top-10 w-20 shadow-lg rounded-md border bg-white z-50">
            {user.status === "active" && (
              <button
                onClick={() => onBlockClick(user?._id as string, "blocked")}
                className="w-full py-2 text-sm text-red-600 hover:bg-gray-100 text-center"
              >
                Block
              </button>
            )}
            {user.status === "blocked" && (
              <button
                onClick={() => onBlockClick(user?._id as string, "active")}
                className="w-full py-2 text-sm text-red-600 hover:bg-gray-100 text-center"
              >
                Unblock
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentCard;
