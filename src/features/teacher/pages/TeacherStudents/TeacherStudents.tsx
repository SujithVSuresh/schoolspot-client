
import { useLocation } from "react-router-dom"
import StudentCard from "./components/StudentCard"
import Breadcrumb from "../../components/Breadcrumb"
import { useSelector } from "react-redux"
import { RootState } from "../../../../app/store"

const TeacherStudents = () => {
    const students = useSelector((state: RootState) => state.studentList);

    console.log(students, "gaaaaalllllllll")

  const location = useLocation()

  const classId = location.pathname.split("/")[3]


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
            _id: student?._id as string,
            fullName: student.fullName,
            roll: student.roll
          }} key={index}/>
        ))}
        </div>
    </div>
  )
}

export default TeacherStudents
