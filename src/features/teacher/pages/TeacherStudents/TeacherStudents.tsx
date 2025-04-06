import { useEffect, useState } from "react"
import { getStudentsByClassId } from "../../api/api"
import { useLocation } from "react-router-dom"
import StudentCard from "./components/StudentCard"
import Breadcrumb from "../../components/Breadcrumb"

const TeacherStudents = () => {
  const location = useLocation()

  const classId = location.pathname.split("/")[3]

  const [students, setStudents] = useState<{
    _id: string
    fullName: string,
    roll: string
  }[]>([])

  useEffect(() => {
    fetchStudentsByClassId()
  }, [classId])

  const fetchStudentsByClassId = async () => {
    const response = await getStudentsByClassId(classId)
    if (response.success) {
      setStudents(response.data)
      console.log(response.data)
    } else {
      console.log(response.error)
    }
  }

  const breadcrumbItems = [
    { label: 'Classes', href: `/teacher/classes` },
    { label: 'Students', href: `/teacher/classes/${classId}/students` },
  ];
  return (
    <div className="p-5">
      <Breadcrumb items={breadcrumbItems}/>
      <div className="grid grid-cols-4 gap-4 py-5">
        {students.map((student, index) => (
          <StudentCard student={{
            _id: student._id,
            fullName: student.fullName,
            roll: student.roll
          }} key={index}/>
        ))}
        </div>
    </div>
  )
}

export default TeacherStudents
