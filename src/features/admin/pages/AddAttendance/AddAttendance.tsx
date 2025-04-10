import { useEffect, useState } from "react";
import { StudentDataResponseType, AttendanceType } from "../../types/types";
import { getStudentsByClassId } from "../../api/api";
import { useParams, useNavigate } from "react-router-dom";
import { CircleX, Check } from "lucide-react";
import { addAttendance } from "../../api/api";
import toast from "react-hot-toast";
import loadingGif from "../../../../assets/images/loading.webp";

const AddAttendance = () => {
  const navigate = useNavigate();
  const [attendanceData, setAttendanceData] = useState<AttendanceType[]>([]);
  const [loading, setLoading] = useState(false);

  const { classId } = useParams();

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await getStudentsByClassId(classId as string);

      const setupAttendace = (students: StudentDataResponseType[]) => {
        const data: AttendanceType[] = students.map((student) => {
          return {
            student: student.user._id,
            class: student.classId,
            status: "Absent",
            roll: student.roll,
            name: student.fullName,
          };
        });
        setAttendanceData(data);
      };
      setupAttendace(response.data);
    };

    fetchStudents();
  }, [classId]);

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
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setLoading(true);

    const data: AttendanceType[] = attendanceData.map((student) => {
      return {
        student: student.student,
        class: student.class,
        status: student.status,
      };
    });

    const response = await addAttendance(data);

    if (response.success) {
      navigate(`/dashboard/classes/profile/${classId}?section=attendance`);
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
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
      <form
        method="POST"
        onSubmit={(e) => handleAttendanceSubmit(e)}
        className="space-y-4 w-5/12 mt-6 p-8 rounded-lg border border-gray-400"
      >
        {/* <h1 className="text-xl mb-5 font-medium text-gray-800 text-center">
          Add Attendance
        </h1> */}

        {attendanceData.length > 0 &&
          attendanceData.map((student, index) => (
            <div
              key={index}
              className={`${
                student.status == "Present" ? "bg-green-200" : "bg-red-100"
              } flex justify-between items-center rounded p-5`}
            >
              <span>
                {index + 1}. {student.name}
              </span>
              <div className="flex">
                {student.status == "Present" ? (
                  <button
                    onClick={(e) =>
                      handleAttendanceStatus(student.roll as number, e)
                    }
                    className={`flex items-center ml-5 justify-center gap-2 text-sm bg-gray-100 text-black px-4 py-2 rounded`}
                  >
                    <CircleX />
                  </button>
                ) : (
                  <button
                    onClick={(e) =>
                      handleAttendanceStatus(student.roll as number, e)
                    }
                    className={`flex items-center justify-center gap-2 text-sm bg-gray-100 text-black px-4 py-2 rounded`}
                  >
                    <Check />
                  </button>
                )}
              </div>
            </div>
          ))}

        <div className="flex justify-end space-x-3">
          <a
            onClick={() =>
              navigate(
                `/dashboard/classes/profile/${classId}?section=attendance`
              )
            }
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </a>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {loading ? (
              <img className="w-7 h-7" src={loadingGif} alt="loading" />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAttendance;
