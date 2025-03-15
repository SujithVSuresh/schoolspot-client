import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import { BarChart3 } from "lucide-react";
import StudentList from "../components/StudentList";
import SubjectList from "../components/SubjectList";
import { useState } from "react";
import AttendanceRecord from "../components/AttendanceRecord";
import TimeTable from "../components/TimeTable";

const ClassDetails = () => {
    const [selectedBtn, setSelectedBtn] = useState("students")
  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      {/* Sidebar */}
      <Sidebar />

      {/* Header */}
      <div className="flex-1">
        <DashboardHeader />

        <div className="pt-28 md:pt-24 px-4 sm:px-8 md:pl-28 md:pr-8">


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
                <div className="bg-gray-100 p-4 rounded-full">
                <BarChart3 className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Class</div>
                  <div className="text-lg font-medium text-gray-900">
                    10 B
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
                <div className="bg-gray-100 p-4 rounded-full">
                <BarChart3 className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Class Teacher</div>
                  <div className="text-lg font-medium text-gray-900">
                    Salman Faris
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
                  <div className="text-lg font-medium text-gray-900">
                    40
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
                <div className="bg-gray-100 p-4 rounded-full">
                <BarChart3 className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Present</div>
                  <div className="text-lg font-meedium text-gray-900">
                    38
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
                <div className="bg-gray-100 p-4 rounded-full">
                <BarChart3 className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Absent</div>
                  <div className="text-lg font-medium text-gray-900">
                    2
                  </div>
                </div>
              </div>



          </div>
        <div className="mt-10">
          <div className="flex border-b pb-5 border-gray-200">
            <div onClick={() => setSelectedBtn("students")} className={`${selectedBtn == "students" ? "bg-blue-200" : "bg-gray-200"} text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}>Students</div>
            <div onClick={() => setSelectedBtn("subjects")} className={`${selectedBtn == "subjects" ? "bg-blue-200" : "bg-gray-200"} text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}>Subjects</div>
            <div onClick={() => setSelectedBtn("attendance")} className={`${selectedBtn == "attendance" ? "bg-blue-200" : "bg-gray-200"} text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}>Attendance Record</div>
            <div onClick={() => setSelectedBtn("timetable")} className={`${selectedBtn == "timetable" ? "bg-blue-200" : "bg-gray-200"} text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}>Timetable</div>
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
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
