import { textFormatter } from "../../../../../app/utils/formatter";
import { useNavigate } from "react-router-dom";
import { StudentListType } from "../../../../../app/types/StudentType";

const TableItem = ({ student }: { student: StudentListType }) => {
  const navigate = useNavigate();

  const accountStatus = (
    status: "active" | "inactive" | "blocked" | "deleted"
  ) => {
    const statusStyles = {
      active: "bg-green-100 text-green-600",
      inactive: "bg-yellow-100 text-yellow-600",
      blocked: "bg-red-100 text-red-600",
      deleted: "bg-gray-200 text-gray-600",
    };

    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-semibold ${statusStyles[status]}`}
      >
        {textFormatter(status)}
      </span>
    );
  };

  return (
    <tr
      key={student._id}
      className="hover:bg-gray-50 transition-colors duration-200 border-b"
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img
            src={student.profilePhoto as string}
            alt={student.fullName}
            className="w-10 h-10 rounded-full object-cover border border-gray-200"
          />
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primaryText">
        {student.fullName}
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm text-primaryText">
        {student.admissionNo}
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm text-primaryText">
        {student.userId.email}
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm text-primaryText">
        {student.parentContactNumber}
      </td>

      <td className="px-6 py-4 whitespace-nowrap">{accountStatus(student.userId.status)}</td>

      <td className="px-6 py-4 whitespace-nowrap text-right">
        <button
          onClick={() => {
            navigate(`/dashboard/students/profile/${student.userId._id}`);
          }}
          className="bg-primary hover:bg-secondary text-white text-xs px-4 py-2 rounded-full transition-all"
        >
          View
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
