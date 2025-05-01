import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import { Outlet } from "react-router-dom";

const subjectItems = [
  {
    name: "Attendance",
    links: "",
  },
  {
    name: "Leave Letter",
    links: "leave-letter",
  },
];

const Attendance = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const urlParts = location.pathname.split("/");

  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex justify-between">
        <div className="bg-white rounded-lg p-1 border inline-flex space-x-1">
          {subjectItems.map((item) => (
            <button
              onClick={() => navigate(`/student/attendance/${item.links}`)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                urlParts[3] === item.links
                  ? "bg-indigo-600 text-white"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex">
          <DatePicker
            selected={new Date(selectedDate)}
            onChange={(date) => setSelectedDate(date as Date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            className="custom-datepicker-input"
          />
        </div>
      </div>

      <Outlet context={{ selectedDate }} />
    </div>
  );
};

export default Attendance;
