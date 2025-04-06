import ClassNavLink from "./components/ClassNavLink"
import { Outlet } from "react-router-dom";
import { User } from "lucide-react";
import { getClassById } from "../../api/api";
import { useEffect, useState } from "react";
import { ClassType } from "../../types/types";
import { useLocation } from "react-router-dom";

const ClassDetails = () => {
  const location = useLocation()

  const classId = location.pathname.split("/")[3]

  const [classDetails, setClassDetails] = useState<ClassType>({
    _id: "",
    name: "",
    strength: 0,
    section: "",
    teacher: "",
    school: "",
    subjects: [],
    createdAt: "",
    updatedAt: "",
    attendance: {
      presentCount: 0,
      absentCount: 0,
      date: new Date()
    },
    subject: {
      name: "",
      teacher: "",
      _id: ""
    }
  

  })

  useEffect(() => {
    fetchClassDetails()

  }, [classId])

  const fetchClassDetails = async () => {
    const response = await getClassById(classId)
    if(response.success){
      setClassDetails(response.data.data)
  }
}

  return (
    <>
      <div className="grid grid-cols-4 gap-4 py-5">
      <div className="space-y-4 border p-5 rounded-lg">
            <div className="flex items-center text-gray-700">
              <div className="bg-gray-100 p-3 rounded-full flex justify-center mr-3">
              <User className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Class</p>
                <p className="font-medium">{classDetails.name} {classDetails.section}</p>
              </div>
            </div>


        </div>

        <div className="space-y-4 border p-5 rounded-lg">
            <div className="flex items-center text-gray-700">
              <div className="bg-gray-100 p-3 rounded-full flex justify-center mr-3">
              <User className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Class Teacher</p>
                <p className="font-medium">{classDetails.teacher}</p>
              </div>
            </div>


        </div>

        <div className="space-y-4 border p-5 rounded-lg">
            <div className="flex items-center text-gray-700">
              <div className="bg-gray-100 p-3 rounded-full flex justify-center mr-3">
              <User className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Strength</p>
                <p className="font-medium">{classDetails.strength}</p>
              </div>
            </div>
        </div>


        <div className="space-y-4 border p-5 rounded-lg">
            <div className="flex items-center text-gray-700">
              <div className="bg-gray-100 p-3 rounded-full flex justify-center mr-3">
              <User className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Present</p>
                <p className="font-medium">{classDetails.attendance.presentCount}</p>
              </div>
            </div>
        </div>

        <div className="space-y-4 border p-5 rounded-lg">
            <div className="flex items-center text-gray-700">
              <div className="bg-gray-100 p-3 rounded-full flex justify-center mr-3">
              <User className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Absent</p>
                <p className="font-medium">{classDetails.attendance.absentCount}</p>
              </div>
            </div>
        </div>

        <div className="space-y-4 border p-5 rounded-lg">
            <div className="flex items-center text-gray-700">
              <div className="bg-gray-100 p-3 rounded-full flex justify-center mr-3">
              <User className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium">{classDetails.attendance.date.toString().slice(0, 10)}</p>
              </div>
            </div>
        </div>

        <div className="space-y-4 border p-5 rounded-lg">
            <div className="flex items-center text-gray-700">
              <div className="bg-gray-100 p-3 rounded-full flex justify-center mr-3">
              <User className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Subject</p>
                <p className="font-medium">{classDetails.subject.name}</p>
              </div>
            </div>
        </div>

      </div>
      <ClassNavLink />


      <Outlet context={{subjectId: classDetails?.subject?._id, classId}}/>
    </>
  )
}

export default ClassDetails
