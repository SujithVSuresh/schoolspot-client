import { MoreVertical } from "lucide-react";
import { useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

const AttendanceRecord = () => {
  type ValuePiece = Date | null;

  type Value = ValuePiece | [ValuePiece, ValuePiece];

  const [value, onChange] = useState<Value>(new Date());

  const attendance = [
    { name: "Sujith V S", rollNumber: "1", status: "absent" },
    { name: "Arya P", rollNumber: "2", status: "present" },
    { name: "Akhil Raj", rollNumber: "3", status: "absent" },
    { name: "Nikhil S", rollNumber: "4", status: "present" },
    { name: "Divya B", rollNumber: "5", status: "absent" },
    { name: "Vijay Kumar", rollNumber: "6", status: "present" },
    { name: "Lekha R", rollNumber: "7", status: "absent" },
    { name: "Arjun T", rollNumber: "8", status: "absent" },
    { name: "Neha A", rollNumber: "9", status: "present" },
    { name: "Ajay K", rollNumber: "10", status: "absent" },
    { name: "Reshma M", rollNumber: "11", status: "absent" },
    { name: "Manoj P", rollNumber: "12", status: "present" },
    { name: "Sreejith N", rollNumber: "13", status: "absent" },
    { name: "Krishna C", rollNumber: "14", status: "present" },
    { name: "Anjana L", rollNumber: "15", status: "absent" },
    { name: "Rahul D", rollNumber: "16", status: "absent" },
    { name: "Meera J", rollNumber: "17", status: "present" },
    { name: "Kiran B", rollNumber: "18", status: "absent" },
    { name: "Priya S", rollNumber: "19", status: "present" },
    { name: "Ramesh H", rollNumber: "20", status: "absent" },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ml-0">
          Attendance
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          {/* <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        <input
          value={searchStudent}
          onChange={(e) => setSearchStudent(e.target.value)}
          type="text"
          placeholder="Search..."
          className="w-full sm:w-40 pl-4 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-transparent"
        />
        <select
          value={sortStudent}
          onChange={(e) => setSortStudent(e.target.value)}
          className="w-full sm:w-40 pl-4 pr-8 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-transparent appearance-none bg-white"
        >
          <option value="">Sort</option>
          <option value="name-asc">Name - a to z</option>
          <option value="name-desc">Name - z to a</option>
        </select>
        <button
          onClick={() => updateQuery({ search: searchStudent, page: 1, sort: sortStudent })}
          className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
      <button
        onClick={() => navigate('/add-student')}
        className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
      >
        <UserPlus className="h-5 w-5" />
        Add
      </button> */}
        </div>
      </div>

      <div className="flex">
        <div className="w-8/12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {attendance.map((student) => (
            <div
              className={`${
                student.status == "absent" ? "bg-red-100" : "bg-green-100"
              } rounded-xl p-4 relative`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="font-medium mb-1 text-gray-700 text-sm sm:text-base">
                      {student.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Roll no: {student.rollNumber}
                    </p>
                  </div>
                </div>
                {/* Menu Button */}
                <button className="text-gray-400 hover:text-gray-600 transition-colors relative">
                  <MoreVertical className="h-5 w-5" />
                </button>
                {/* Dropdown Menu */}
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 flex justify-center items-start">
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
    </div>
  );
};

export default AttendanceRecord;
