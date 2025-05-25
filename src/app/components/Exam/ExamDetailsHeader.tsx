import { Calendar, Clock } from "lucide-react"
import { dateFormatter } from "../../utils/formatter";

const ExamDetailsHeader = ({examData}: {examData: {name: string; startDate: string; description: string; endDate: string}}) => {
  return (
 <div className="bg-white overflow-hidden w-full sm:rounded-lg border">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">

        <h1 className="text-xl font-medium leading-tight text-gray-900">{examData?.name}</h1>
        <p className="mt-1 text-sm text-gray-500">{examData.description}</p>

 
      </div>
  
      <div className="px-4 py-5 sm:px-6 bg-gray-50">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex items-center mb-3 sm:mb-0">
            <Calendar className="h-4 w-4 text-blue-500" />
            <span className="ml-2 text-sm font-medium text-gray-700">
              Exam Period Ends: {dateFormatter(examData.endDate)}
            </span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-blue-500" />
            <span className="ml-2 text-sm font-medium text-gray-700">
              Standard Duration: 2 hours per exam
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExamDetailsHeader
