import { useEffect, useState } from "react";
import { AttendanceType } from "../../types/types";
import { useParams, useNavigate } from "react-router-dom";
import { Users, Calendar, Search, XCircle, CheckCircle } from "lucide-react";
import { addAttendance } from "../../api/api";
import toast from "react-hot-toast";
import { dateFormatter } from "../../../../app/utils/formatter";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { StudentAcademicProfileListType } from "../../../../app/types/StudentType";

const AddAttendance = () => {
  const navigate = useNavigate();
  const [attendanceData, setAttendanceData] = useState<AttendanceType[]>([]);

  const students = useSelector((state: RootState) => state.studentListAdmin);

  const { classId } = useParams();

  useEffect(() => {
      const setupAttendace = (students: StudentAcademicProfileListType[]) => {
        const data: AttendanceType[] = students.map((student) => {
          return {
            student: student.userId,
            class: student.classId,
            status: "Absent",
            roll: student.roll,
            name: student.studentId.fullName
          };
        });
        setAttendanceData(data);
      };
  

    setupAttendace(students);
  }, []);

  const handleAttendanceStatus = (
    roll: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    const data: AttendanceType[] = attendanceData.map((student) => {
      if (student.roll === roll) {
        return {
          ...student,
          status: student.status === "Present" ? "Absent" : "Present",
        };
      }
      return student;
    });
    setAttendanceData(data);
  };

  const handleAttendanceSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    const data: AttendanceType[] = attendanceData.map((student) => {
      return {
        student: student.student,
        class: student.class,
        status: student.status,
      };
    });

    const response = await addAttendance(data);

    if (response.success) {
      navigate(`/dashboard/classes/profile/${classId}/attendance`);
    } else {
      setTimeout(() => {
        toast(response.error.message, {
          duration: 8000,
          position: "bottom-right",
          style: {
            backgroundColor: "#FEE2E2",
            border: "2px, solid, #DC2626",
            minWidth: "400px",
            color: "black",
          },
        });
      }, 1000);
    }
  };
  return (
    <div className="pt-10 px-6 flex justify-center w-full">
              <div className="bg-white rounded-lg border p-6 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center space-x-2 bg-secondary p-3 rounded-lg">
              <Users className="h-5 w-5 text-primaryText" />
              <span className="text-primaryText">
                Total Students: {attendanceData.length}
              </span>
            </div>

            <div className="flex items-center space-x-2 bg-secondary p-3 rounded-lg">
              <Calendar className="h-5 w-5 text-primaryText" />
              <span>{dateFormatter(String(new Date()))}</span>
              {/* <input
                type="date"
                className="bg-transparent focus:outline-none text-gray-700"
                defaultValue={new Date().toISOString().split("T")[0]}
              /> */}
            </div>

            <div className="relative h-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or roll no"
                className="w-full h-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus: outline-none"
                // value={searchQuery}
                // onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primaryText uppercase tracking-wider">
                    Roll No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primaryText uppercase tracking-wider">
                    Student Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primaryText uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primaryText uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {attendanceData.map((student) => (
                  <tr key={student.student} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {student.roll}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {student.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          student.status == "Present"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {student.status == "Present" ? "Present" : "Absent"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        onClick={(e) =>
                          handleAttendanceStatus(student.roll as number, e)
                        }
                        className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-900"
                      >
                        {student.status == "Present" ? (
                          <XCircle className="h-5 w-5" />
                        ) : (
                          <CheckCircle className="h-5 w-5" />
                        )}
                        <span>
                          {student.status == "Present"
                            ? "Mark Absent"
                            : "Mark Present"}
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex space-x-4 text-sm">
              <div className="flex items-center">
                <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                <span>
                  Present:{" "}
                  {attendanceData.filter((s) => s.status == "Present").length}
                </span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                <span>
                  Absent:{" "}
                  {attendanceData.filter((s) => s.status == "Absent").length}
                </span>
              </div>
            </div>

            <div>
            <button
          onClick={() => navigate(`/dashboard/classes/profile/${classId}/attendance`)}
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>

            <button
              onClick={(e) => handleAttendanceSubmit(e)}
              className="px-4 py-2 bg-primary ml-3 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save Attendance
            </button>
            </div>

          </div>
        </div>

    </div>
  );
};


export default AddAttendance;
