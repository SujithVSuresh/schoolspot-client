import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { fetchSubjects } from "../../api/api"
import { useOutletContext } from "react-router-dom"
import { useEffect, useState } from "react"
import { textFormatter } from "../../../../app/utils/formatter"

const Subjects = () => {
    const { classId }: { classId: string } = useOutletContext();
    const navigate = useNavigate()

    const [subjects, setSubjects] = useState<{
      _id: string,
      name: string,
      teacher: string
    }[]>([])


    useEffect(() => {
      handleFetchSubjects(classId)

    }, [classId])

    const handleFetchSubjects = async (classId: string) => {

      const subjects = await fetchSubjects(classId)

      if(subjects.success){
        setSubjects(subjects.data)      
      }

    }


  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-3">
        {subjects.map((subject) => (
          <div key={subject._id} onClick={() => navigate(`/student/subjects/${subject._id}/assignments`)} className="space-y-4 flex justify-between border p-5 rounded-lg w-full">
            <div className="flex items-center text-gray-700">
              {/* <div className="bg-gray-100 p-3 rounded-full flex justify-center mr-3">
              <Book className="w-5 h-5 text-gray-500" />
              </div> */}
              <div>
              <p className="font-medium">{textFormatter(subject.name)}</p>
                <p className="text-sm text-gray-500">{subject.teacher}</p>
                
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400" />
        </div>
        ))}

      
        </div>
    </div>
  )
}

export default Subjects

