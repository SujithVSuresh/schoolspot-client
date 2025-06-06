import { useState, useEffect } from "react";
import { Calendar, Plus, CheckCircle, XCircle, Search } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAttendanceByClass } from "../../api/api";
import { changeAttendanceStatus } from "../../api/api";
import { successToast } from "../../../../app/utils/toastMessage";
import { AttendanceResponseType } from "../../../../app/types/AttendanceType";

const TeacherAttendance = () => {
  const { classId }: { subjectId: string; classId: string } =
    useOutletContext();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDate, setFilterDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [attendanceData, setAttendanceData] = useState<AttendanceResponseType[]>(
    []
  );

  useEffect(() => {
    const fetchAttendance = async () => {
      const response = await getAttendanceByClass(classId, filterDate);

      console.log(response, "dfasdfdsfdsafsd123");

      setAttendanceData(response.data);
    };

    fetchAttendance();
  }, [filterDate, classId]);

  const handleAttendanceStatus = async (
    attendanceId: string,
    status: "Present" | "Absent"
  ) => {
    const response = await changeAttendanceStatus(attendanceId, status);

    if (response.success) {
      const updatedAttendanceData = attendanceData.map((data) => {
        if (data._id == response.data._id) {
          return {
            ...data,
            status: response.data.status,
          };
        }
        return data;
      });
      setAttendanceData(updatedAttendanceData);

      successToast("Attendance status updated successfully");
    }
  };

  const breadcrumbItems = [
    { label: "Classes", href: `/teacher/classes` },
    { label: "Attendance", href: `/teacher/classes/${classId}/attendance` },
  ];
  return (
    <div className="min-h-screen p-5">
      <div className="flex items-center justify-between mb-5">
        <Breadcrumb items={breadcrumbItems} />
        <button
          onClick={() => navigate(`/teacher/classes/${classId}/attendance/add`)}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
        >
          <Plus size={16} />
          <span>Add</span>
        </button>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg border p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 items-center">
            <div className="flex justify-evenly rounded-lg h-full space-x-4 text-sm bg-gray-50">
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

            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg w-full max-w-md">
              <Calendar className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0" />
              <input
                type="date"
                className="bg-transparent focus:outline-none text-gray-700 w-full"
                defaultValue={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
              />
            </div>

            <div className="relative h-12">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or roll no"
                className="w-full h-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus: outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Roll No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {attendanceData.length > 0 &&
                  attendanceData.map((attendance) => (
                    <tr key={attendance._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {attendance.academicProfile.roll}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {attendance.studentProfile.fullName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            attendance.status == "Present"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {attendance.status == "Present"
                            ? "Present"
                            : "Absent"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button
                          onClick={() =>
                            handleAttendanceStatus(
                              attendance._id as string,
                              attendance.status == "Present"
                                ? "Absent"
                                : "Present"
                            )
                          }
                          className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-900"
                        >
                          {attendance.status == "Present" ? (
                            <XCircle className="h-5 w-5" />
                          ) : (
                            <CheckCircle className="h-5 w-5" />
                          )}
                          <span>
                            {attendance.status == "Present"
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
        </div>
      </div>
    </div>
  );
};

export default TeacherAttendance;
