import TimeTable from "./components/TimeTable";
import Attendance from "./components/Attendance";
import Announcements from "./components/Announcements";
import Assignments from "./components/Assignments";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { classId }: { classId: string } = useOutletContext();
  return (
    <div className="min-h-screen w-full">
      <div className="flex w-full gap-4">
        <div className="w-8/12">
          <TimeTable classId={classId}/>
          <div className="flex gap-4 mt-4">
            <Assignments classId={classId}/>
            <Announcements classId={classId}/>
          </div>
        </div>

        <div className="flex-1">
          <Attendance />
          {/* <Exams /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
