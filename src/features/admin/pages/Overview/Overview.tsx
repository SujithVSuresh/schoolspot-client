import Heading from "../../components/Heading";
import { useState, useEffect } from "react";
import { ClassType } from "../../types/types";
import { getAllClasses } from "../../api/api";
import ClassCard from "../Classes/components/ClassCard";
import { GraduationCap, Users, School } from "lucide-react";
import { fetchSchoolOverview } from "../../api/api";
import CountCard from "./components/CountCard";

const Overview = () => {
  const [classes, setClasses] = useState<ClassType[] | []>([]);
  const [overviewData, setOverviewData] = useState({
    studentCount: 0,
    teacherCount: 0,
    classCount: 0,
  });

  useEffect(() => {
    const fetchAllClasses = async () => {
      const response = await getAllClasses();

      if (response.success) {
        setClasses(response.data?.data);
      }
    };

    const fetchSchoolOverviewHandler = async () => {
      const response = await fetchSchoolOverview();

      if (response.success) {
        setOverviewData(response.data);
      }
    };

    fetchAllClasses();
    fetchSchoolOverviewHandler();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-3 mt-5">

        <CountCard heading="STUDENT COUNT" data={overviewData?.studentCount} Icon={GraduationCap}/>

        <CountCard heading="TEACHER COUNT" data={overviewData?.teacherCount} Icon={Users}/>

        <CountCard heading="TOTAL CLASSES" data={overviewData?.classCount} Icon={School}/>

      </div>

      <div>
        <Heading headingValue="Classes">
          <></>
        </Heading>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 sm:gap-6">
          {classes.length > 0 &&
            classes.map((value) => <ClassCard classData={value} />)}
        </div>
      </div>
    </div>
  );
};

export default Overview;
