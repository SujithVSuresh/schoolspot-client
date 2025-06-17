import Heading from "../../components/Heading"
import { useState, useEffect } from "react"
import { ClassType } from "../../types/types"
import { getAllClasses } from "../../api/api"
import ClassCard from "../Classes/components/ClassCard"
import { GraduationCap, Users, School } from "lucide-react"
import { fetchSchoolOverview } from "../../api/api"

const Overview = () => {
    const [classes, setClasses] = useState<ClassType[] | []>([]);
    const [overviewData, setOverviewData] = useState({
      studentCount: 0,
      teacherCount: 0,
      classCount: 0,
    })
  
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
          setOverviewData(response.data)
        }
      };
  
      fetchAllClasses();
      fetchSchoolOverviewHandler();
    }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-3 mt-5">
                <div
            key={2}
            className="bg-white rounded-lg border p-4 flex items-center"
          >
            <div className={`rounded-full p-4 mr-4 bg-secondary`}>
              <GraduationCap className="text-secondaryText"/>
            </div>
            <div>
              <p className="text-sm text-gray-500">Student Count</p>
              <p className={`text-xl font-bold `}>{overviewData?.studentCount}</p>
            </div>
          </div>

                          <div
            key={2}
            className="bg-white rounded-lg border p-4 flex items-center"
          >
            <div className={`rounded-full p-4 mr-4 bg-blue-200`}>
              <Users className="text-blue-800"/>
            </div>
            <div>
              <p className="text-sm text-gray-500">Teacher Count</p>
              <p className={`text-xl font-bold `}>{overviewData?.teacherCount}</p>
            </div>
          </div>

          <div
            key={2}
            className="bg-white rounded-lg border p-4 flex items-center"
          >
            <div className={`rounded-full p-4 mr-4 bg-blue-200`}>
             <School className="text-blue-800"/>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Classes</p>
              <p className={`text-xl font-bold `}>{overviewData?.classCount}</p>
            </div>
          </div>
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
  )
}

export default Overview
