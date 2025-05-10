import { BarChart3 } from "lucide-react";
import SubjectList from "./components/SubjectList";
import { useEffect, useState } from "react";
import AttendanceRecord from "./components/AttendanceRecord";
import StudentList from "./components/StudentList";
import { getClassById, deleteClass } from "../../api/api";
import { useParams, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Invoice from "./components/Invoice";
import { dateFormatter } from "../../../../app/utils/formatter";
import Exam from "./components/Exam";
import TimeTable from "./components/TimeTable";


const ClassProfile = () => {
  const navigate = useNavigate()
  const {id: classId} = useParams()
  const [classData, setClassData] = useState<{
    _id?:string;
    name: string;
    strength: number;
    section: string;
    teacher: string;
    attendance: {
      presentCount: number,
      absentCount: number,
      date: string
    }
} | null>(null)

  const [searchParams, setSearchParams] = useSearchParams();

  const section = searchParams.get("section") || "";

   useEffect(() => {

    const fetchClassProfileData = async () => {
      if(classId){
      const response = await getClassById(classId)
      console.log(response, "ha respoooo")
      if(response.success){
        setClassData(response.data?.data)
       }
     } 
    }

    fetchClassProfileData()

  }, [classId])



  const updateSection = (value: string) => {
    searchParams.set("section", value);
    setSearchParams(searchParams);
  }

  const deleteClassHandler = async (classId: string) => {
    if(!classId){
      return
    }
    const response = await deleteClass(classId)

    if(response.success){
      console.log(response, "this is the response... delete")
      navigate(`/dashboard/classes`)
    }

  }

  return (
    <div className="pt-5">
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
              {dateFormatter(classData?.attendance.date as string)}
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
            <div className="text-lg font-meedium text-gray-900">{classData?.attendance.presentCount}</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">Absent</div>
            <div className="text-lg font-medium text-gray-900">{classData?.attendance.absentCount}</div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex border-b pb-5 border-gray-200">
          <div
            onClick={() => updateSection("students")}
            className={`${
              section == "students" ? "bg-blue-200" : "bg-gray-200"
            } text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
          >
            Students
          </div>
          <div
            onClick={() => updateSection("subjects")}
            className={`${
              section == "subjects" ? "bg-blue-200" : "bg-gray-200"
            } text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
          >
            Subjects
          </div>
          {/* <div
            onClick={() => updateSection("timetable")}
            className={`${
              section == "timetable" ? "bg-blue-200" : "bg-gray-200"
            } text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
          >
            Timetable
          </div> */}
          <div
            onClick={() => updateSection("attendance")}
            className={`${
              section == "attendance" ? "bg-blue-200" : "bg-gray-200"
            } text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
          >
            Attendance Record
          </div>

          <div
            onClick={() => updateSection("exam")}
            className={`${
              section == "exam" ? "bg-blue-200" : "bg-gray-200"
            } text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
          >
            Exam
          </div>

          <div
            onClick={() => updateSection("fees")}
            className={`${
              section == "fees" ? "bg-blue-200" : "bg-gray-200"
            } text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
          >
            Invoice
          </div>

          <div
            onClick={() => navigate(`/dashboard/classes/${classId}/update`)}
            className={`bg-gray-200 text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
          >
            Edit Class
          </div>

          <div
            onClick={() => deleteClassHandler(classId as string)}
            className={`bg-gray-200 text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
          >
            Delete Class
          </div>
          {/* <div
            onClick={() => updateSection("timetable")}
            className={`${
              section == "timetable" ? "bg-blue-200" : "bg-gray-200"
            } text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
          >
            Timetable
          </div> */}
        </div>
      </div>

      {section == "students" ? (
        <StudentList classId={classId as string} />
      ) : section == "subjects" ? (
        <SubjectList classId={classId as string}/>
      ) : section == "attendance" ? (
        <AttendanceRecord classId={classId as string}/>
      ) : section == "fees" ? (
        <Invoice classId={classId as string}/>
      ) : section == "timetable" ? (
        <TimeTable />
      ) : section == "exam" ? (
        <Exam />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ClassProfile;
