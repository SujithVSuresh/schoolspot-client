import { fetchExamResult } from "../../api/api"
import { useEffect, useState } from "react"
import { ExamResultType } from "../../../../app/types/ExamResultType"
import { useParams } from "react-router-dom"
import { Award, BarChart3, Bookmark, TrendingUp } from 'lucide-react';


const ExamResults = () => {
    const { examId } = useParams();

    const [examResults, setExamResults] = useState<ExamResultType[]>([])

    useEffect(() => {

        
    const fetchExamResultsHandler = async () => {
        if(!examId) return

        const response = await fetchExamResult(examId)

        if(response.success){
            console.log(response)
            setExamResults(response.data)
        }
    }

        fetchExamResultsHandler()
    }, [examId])

     const statCards = [
    {
      title: 'Average',
      value: `70%`,
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Overall Grade',
      value: "A",
      icon: <Award className="w-5 h-5" />,
      color: `bg-opacity-20`
    },
    {
      title: 'Total Marks',
      value: `400/500`,
      icon: <BarChart3 className="w-5 h-5" />,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Subjects',
      value: 8,
      icon: <Bookmark className="w-5 h-5" />,
      color: 'bg-amber-100 text-amber-600'
    }
  ];

  return (
 
<div className="w-full min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {statCards.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg border p-4 flex items-center">
          <div className={`rounded-full p-3 mr-4 ${stat.color}`}>
            {stat.icon}
          </div>
          <div>
            <p className="text-sm text-gray-500">{stat.title}</p>
            <p className={`text-xl font-bold `}>
              {stat.value}
            </p>
          </div>
        </div>
      ))}
    </div>
<div className="grid grid-cols-3 gap-3">
        {examResults.map((result) => (
             <div className="bg-white rounded-lg border p-6 w-ful">
  <div className="flex justify-between items-start mb-4">
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{result.subject}</h3>
      <p className="text-sm text-gray-500">Mid Term Exam</p>
    </div>
    <div className="flex items-center justify-center w-10 h-10 rounded-full text-blue-600 bg-gray-100">
      <Award className="w-5 h-5" />
    </div>
  </div>

  <div className="space-y-4">
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">Marks</span>
        <span className="text-sm font-semibold">{result.marksObtained} / {result.totalMarks}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div 
          className="bg-blue-500 h-full rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `85%` }}
        ></div>
      </div>
    </div>

    <div className="flex justify-between items-center">
      <div>
        <span className="text-sm text-gray-500">Percentage</span>
        <p className="font-semibold">85%</p>
      </div>
      <div className=" text-center">
        <span className="text-sm text-gray-500">Grade</span>
        <p className="font-bold text-lg text-blue-600">{result.grade}</p>
      </div>
    </div>
  </div>
  
</div>


        ))}
        

    </div>
    </div>
  )
}

export default ExamResults
