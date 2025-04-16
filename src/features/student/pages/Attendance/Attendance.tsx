import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AttendanceList from "./components/AttendanceList";
import LeaveLetter from "./components/LeaveLetter";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Attendance = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { classId } = useOutletContext();


  return (
    <div className="w-full min-h-screen">
      <div className="mb-5">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date as Date)}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          className="custom-datepicker-input"
        />
      </div>



      <div className="flex">
      <AttendanceList date={selectedDate.toISOString()} />

        <LeaveLetter date={selectedDate.toISOString()} classId={classId}/>
      </div>
    </div>
  );
};

export default Attendance;
