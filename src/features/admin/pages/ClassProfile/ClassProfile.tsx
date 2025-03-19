import { BarChart3 } from "lucide-react";
import SubjectList from "./components/SubjectList";
import { useEffect, useState } from "react";
import AttendanceRecord from "./components/AttendanceRecord";
import TimeTable from "./components/TimeTable";
import StudentList from "./components/StudentList";
import { getClassById } from "../../api/api";
import { ClassType } from "../../types/types";
import { useParams } from "react-router-dom";

const ClassProfile = () => {
  const {id: classId} = useParams()
  const [selectedBtn, setSelectedBtn] = useState("students");
  const [classData, setClassData] = useState<ClassType | null>(null)

   useEffect(() => {

    const fetchClassProfileData = async () => {
      if(classId){
      const response = await getClassById(classId)
      console.log(response)
      if(response.success){
        setClassData(response.data?.data)
       }
     } 
    }

    fetchClassProfileData()

  }, [classId])
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">Class</div>
            <div className="text-lg font-medium text-gray-900">{classData?.name} {classData?.section}</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">
              Class Teacher
            </div>
            <div className="text-lg font-medium text-gray-900">
              {classData?.teacher}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">Date</div>
            <div className="text-lg font-medium text-gray-900">
              March 15, 2025
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">Strength</div>
            <div className="text-lg font-medium text-gray-900">{classData?.strength}</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">Present</div>
            <div className="text-lg font-meedium text-gray-900">0</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">Absent</div>
            <div className="text-lg font-medium text-gray-900">0</div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex border-b pb-5 border-gray-200">
          <div
            onClick={() => setSelectedBtn("students")}
            className={`${
              selectedBtn == "students" ? "bg-blue-200" : "bg-gray-200"
            } text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
          >
            Students
          </div>
          <div
            onClick={() => setSelectedBtn("subjects")}
            className={`${
              selectedBtn == "subjects" ? "bg-blue-200" : "bg-gray-200"
            } text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
          >
            Subjects
          </div>
          <div
            onClick={() => setSelectedBtn("attendance")}
            className={`${
              selectedBtn == "attendance" ? "bg-blue-200" : "bg-gray-200"
            } text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
          >
            Attendance Record
          </div>
          <div
            onClick={() => setSelectedBtn("timetable")}
            className={`${
              selectedBtn == "timetable" ? "bg-blue-200" : "bg-gray-200"
            } text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
          >
            Timetable
          </div>
        </div>
      </div>

      {selectedBtn == "students" ? (
        <StudentList />
      ) : selectedBtn == "subjects" ? (
        <SubjectList />
      ) : selectedBtn == "attendance" ? (
        <AttendanceRecord />
      ) : (
        <TimeTable />
      )}
    </>
  );
};

export default ClassProfile;
