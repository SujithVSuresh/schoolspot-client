import ClassCard from "./components/ClassCard"
import { useEffect, useState } from "react";
import { getAllClassesForTeacher } from "../../api/api";



const TeacherClasses = () => {
  const [classes, setClasses] = useState<{
    _id: string,
    name: string,
    section: string,
    strength: number
  }[]>([])

  useEffect(() => {
        const fetchAllClasses = async () => {
          const response = await getAllClassesForTeacher()
    
          if(response.success){
            setClasses(response.data?.data)
          }
        }
        fetchAllClasses()

  }, [])

  return (
    <div className="grid grid-cols-4 gap-3">
      {classes?.map((classData) => (
        <ClassCard classData={classData}/>
      ))}
      </div>

  )
}

export default TeacherClasses
