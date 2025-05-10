import { useEffect, useState } from "react"
import { dateFormatter } from "../../../../app/utils/formatter"
import { useOutletContext, useNavigate } from "react-router-dom";
import { fetchExams } from "../../api/api";

const Exam = () => {
    const navigate = useNavigate()
    const { classId }: { classId: string } = useOutletContext();

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

        fetchExamHandler(classId)

    }, [classId])
  return (
    <div className="p-3">

        <div className="grid grid-cols-4 gap-3">

            {exams.map((exam) => (
                              <div className="rounded-xl overflow-hidden w-full border-2 hover: cursor-pointer">
      <div className="p-5" onClick={() => navigate(`/teacher/classes/${classId}/exams/${exam._id}`)}>
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
  )
}

export default Exam
