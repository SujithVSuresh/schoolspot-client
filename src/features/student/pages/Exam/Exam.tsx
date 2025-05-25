import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom";
import { fetchExams } from "../../api/api";
import ExamCard from "../../../../app/components/Exam/ExamCard";

const Exam = () => {
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
    <div className="py-3 min-h-screen">

        <div className="grid grid-cols-4 gap-3">

            {exams.map((exam) => (
              <ExamCard exam={exam} navigationPath={`/student/exams/${exam._id}`}/>
            ))}

            </div>
    </div>
  )
}

export default Exam
