import "react-datepicker/dist/react-datepicker.css";
import AttendanceList from "./components/AttendanceList";
import LeaveLetter from "./components/LeaveLetter";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Plus } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const subjectItems = [
  {
    name: "Assignments",
    links: "assignments",
  },
  {
    name: "Study Materials",
    links: "study-materials",
  },
  {
    name: "Chapters",
    links: "chapters",
  },
];

const Attendance = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { classId } = useOutletContext();
  const urlParts = location.pathname.split("/");

  return (
    <div className="w-full min-h-screen">
              <div className="bg-white rounded-lg p-1 border inline-flex space-x-1">
          {subjectItems.map((item) => (
            <button
              onClick={() =>
                navigate(`/student/subjects/${urlParts[3]}/${item.links}`)
              }
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                urlParts[4] === item.links
                  ? "bg-indigo-600 text-white"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex w-full">
          <div className="w-5/12">
            <AttendanceList date={selectedDate.toISOString()} setSelectedDate={setSelectedDate} />
          </div>

          <div className="flex-1">
            <LeaveLetter date={selectedDate.toISOString()} classId={classId} />
          </div>
        </div>
    
    </div>
  );
};

export default Attendance;
