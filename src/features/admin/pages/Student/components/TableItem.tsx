import { textFormatter } from "../../../../../app/utils/formatter";
import { useNavigate } from "react-router-dom";
import { StudentListType } from "../../../../../app/types/StudentType";

const TableItem = ({ student }: { student: StudentListType }) => {
  const navigate = useNavigate();

  const accountStatus = (
    status: "active" | "inactive" | "blocked" | "deleted"
  ) => {
    return (
      <span
        className={`${status == "active" ? "text-green-500" : "text-red-500"}`}
      >
        {textFormatter(status)}
      </span>
    );
  };
  return (
    <tr key={student._id} className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <img
          src={student.profilePhoto as string}
          alt={student.fullName}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {student.fullName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {student.admissionNo}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {student.userId.email}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {student.parentContactNumber}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {accountStatus(student.userId.status)}
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          onClick={() => {
            navigate(`/dashboard/students/profile/${student.userId._id}`);
          }}
          className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600"
        >
          View
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
