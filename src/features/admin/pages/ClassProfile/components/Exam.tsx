import { useEffect, useState } from "react"
import { dateFormatter } from "../../../../../app/utils/formatter";
import { useNavigate } from "react-router-dom";
import { fetchExams } from "../../../api/api";
import { Plus } from "lucide-react";

const Exam = ({classId}: {classId: string}) => {
    const navigate = useNavigate()

     console.log(classId, "dsafsadf")

    const [exams, setExams] = useState<{
        _id: string,
        name: string,
        startDate: string,
        endDate: string
    }[]>([])

    useEffect(() => {
        const fetchExamHandler = async (classId: string) => {
            const exams = await fetchExams(classId)

            if(exams.success){
                console.log(exams.data)
                setExams(exams.data)
            }
        }

        fetchExamHandler(classId as string)

    }, [classId])
  return (
    <div className='min-h-screen w-full'>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ml-0">
       Exams
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        <button
          onClick={() => navigate(`/dashboard/classes/${classId}/exam/new`)}
          className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
        >
          <Plus className="h-5 w-5" />
          Create Exam
        </button>
      </div>
    </div>
      <div>
      
              <div className="grid grid-cols-4 gap-3">
      
                  {exams.map((exam) => (
                                    <div className="rounded-xl overflow-hidden w-full border-2 hover: cursor-pointer">
            <div className="p-5" onClick={() => navigate(`/dashboard/classes/${classId}/exam/${exam._id}`)}>
              <div className="flex items-center gap-3 mb-4">
          
                <h2 className="text-lg font-medium text-gray-700">
                  {exam.name}
                </h2>
              </div>
      
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <span className="text-sm">{dateFormatter(exam?.startDate)} - {dateFormatter(exam?.endDate)}</span>
                </div>
              </div>
            </div>
          </div>
                  ))}
      
                  </div>
          </div>
    </div>
  )
}

export default Exam
