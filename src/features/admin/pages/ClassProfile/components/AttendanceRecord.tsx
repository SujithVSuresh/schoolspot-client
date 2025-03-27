import { MoreVertical } from "lucide-react";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { changeAttendanceStatus } from "../../../api/api";

import "react-calendar/dist/Calendar.css";
import { getAttendanceByClass } from "../../../api/api";
import { AttendaceResponseType } from "../../../types/types";

const AttendanceRecord = ({ classId }: { classId: string }) => {
  const navigate = useNavigate();

  type Value = Date | null;

  const [value, onChange] = useState<Value>(new Date());
  const [attendanceData, setAttendanceData] = useState<AttendaceResponseType[]>(
    []
  );
  const [menu, setMenu] = useState<number | null>(null);
  useEffect(() => {
    const fetchAttendance = async () => {
      const response = await getAttendanceByClass(
        classId,
        value?.toISOString().split("T")[0] as string
      );

      setAttendanceData(response.data);
    };

    fetchAttendance();
  }, [value, classId]);

  const toggleMenu = (index: number) => {
    setMenu(menu === index ? null : index);
  };

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
      setMenu(null);
      setAttendanceData(updatedAttendanceData);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ml-0">
          Attendance
        </h1>

      </div>

      <div className="flex">
        <div className="w-8/12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {attendanceData.map((student, index) => (
            <div
              className={`${
                student.status == "Absent" ? "bg-red-100" : "bg-green-100"
              } rounded-xl p-4 relative h-20`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="font-medium mb-1 text-gray-700 text-sm sm:text-base">
                      {student.student.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Roll no: {student.student.roll}
                    </p>
                  </div>
                </div>
                {/* Menu Button */}
                <button
                  onClick={() => toggleMenu(index)}
                  className="text-gray-400 hover:text-gray-600 transition-colors relative"
                >
                  <MoreVertical className="h-5 w-5" />
                </button>
                {/* Dropdown Menu */}
                {menu == index && (
                  <div className="absolute right-8 top-12 w-20 shadow-lg rounded-md border bg-white z-50">
                    {student.status == "Absent" ? (
                      <button
                        onClick={() =>
                          handleAttendanceStatus(
                            student._id as string,
                            "Present"
                          )
                        }
                        className="w-full py-2 text-sm text-green-600 hover:bg-gray-100 text-center"
                      >
                        Present
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          handleAttendanceStatus(
                            student._id as string,
                            "Absent"
                          )
                        }
                        className="w-full py-2 text-sm text-red-600 hover:bg-gray-100 text-center"
                      >
                        Absent
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col items-center">

          <Calendar onChange={onChange} value={value} />

          <button
            onClick={() => navigate(`/dashboard/attendance/new/${classId}`)}
            className="flex items-center justify-center gap-2 mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
          >
            <Plus className="h-5 w-5" />
            Add attendance
          </button>
        </div>
      </div>
    </>
  );
};

export default AttendanceRecord;
