import { XCircle, CheckCircle, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useOutletContext } from "react-router-dom";
import { changeAttendanceStatus, getAttendanceByClass } from "../../api/api";
import "react-calendar/dist/Calendar.css";
import { AttendanceResponseType } from "../../../../app/types/AttendanceType";
import { useLoading } from "../../../../app/hooks/useLoading";
import CustomProgress from "../../../../app/components/Loader/CustomProgress";
import AddButton from "../../components/AddButton";
import Spinner from "../../../../app/components/Loader/Spinner";
import NotFound from "../../../../app/components/NotFound";

// Define calendar value type (because react-calendar doesn't export it)
type ValuePiece = Date | null;
type CalendarValue = ValuePiece | [ValuePiece, ValuePiece];

const ClassAttendance = () => {
  const { classId }: { classId: string } = useOutletContext();

  const [date, setDate] = useState<CalendarValue>(new Date());

  const { isLoading, startLoading, stopLoading } = useLoading();

  const handleCalendarChange = (value: CalendarValue) => {
    setDate(value);
  };

  const [attendanceData, setAttendanceData] = useState<
    AttendanceResponseType[]
  >([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      startLoading();
      const selectedDate =
        date instanceof Date
          ? date.toISOString().split("T")[0]
          : (date?.[0] as Date | null)?.toISOString().split("T")[0];

      if (selectedDate) {
        const response = await getAttendanceByClass(classId, selectedDate);
        setAttendanceData(response.data);
      }
      stopLoading();
    };

    fetchAttendance();
  }, [date, classId]);

  const handleAttendanceStatus = async (
    attendanceId: string,
    status: "Present" | "Absent"
  ) => {
    const response = await changeAttendanceStatus(attendanceId, status);

    if (response.success) {
      const updatedAttendanceData = attendanceData.map((data) => {
        if (data._id === response.data._id) {
          return {
            ...data,
            status: response.data.status,
          };
        }
        return data;
      });
      setAttendanceData(updatedAttendanceData);
    }
  };

  return (
    <>
      <CustomProgress isAnimating={isLoading} />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ml-0">
          Attendance
        </h1>
      </div>

      <div className="flex gap-10">
        <div className="w-10/12">
          {isLoading ? (
            <Spinner />
          ) : attendanceData.length == 0 ? (
            <NotFound />
          ) : (
            <div className="bg-white rounded-lg border overflow-hidden">
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="bg-secondary h-12">
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
      <tbody className="divide-y divide-gray-200">
        {attendanceData?.map((attendance) => (
          <tr key={attendance._id} className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {attendance.academicProfile.roll}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {attendance.studentProfile.fullName}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  attendance.status === "Present"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {attendance.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <button
                onClick={() =>
                  handleAttendanceStatus(
                    attendance._id as string,
                    attendance.status === "Present" ? "Absent" : "Present"
                  )
                }
                className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-900"
              >
                {attendance.status === "Present" ? (
                  <XCircle className="h-5 w-5" />
                ) : (
                  <CheckCircle className="h-5 w-5" />
                )}
                <span>
                  {attendance.status === "Present"
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

          )}
        </div>

        <div className="flex-1 flex flex-col gap-5">
          {/* <button
            onClick={() => navigate(`/dashboard/attendance/new/${classId}`)}
            className="flex w-full items-center justify-center gap-2 mb-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-5 w-5 mr-3" />
            <span>Add attendance</span>
          </button> */}

          <AddButton
            icon={Plus}
            label="Add attendance"
            navlink={`/dashboard/attendance/new/${classId}`}
          />

          <Calendar onChange={handleCalendarChange} value={date} />
        </div>
      </div>
    </>
  );
};

export default ClassAttendance;
