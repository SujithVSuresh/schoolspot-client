import {Calendar} from 'lucide-react'
import { dateFormatter } from "../../../../app/utils/formatter"
import { useNavigate } from "react-router-dom"
// import { useOutletContext } from 'react-router-dom'

const Assignments = () => {
    const navigate = useNavigate()

    
  return (
    <div className='w-full'>

        <div className='grid grid-cols-4 w-full gap-5'>

          <div className="rounded-xl overflow-hidden w-full border-2">
      <div className="p-5" onClick={() => (navigate(`/student/subjects/sdf/assignments/asfds`))}>
        <div className="flex items-center gap-3 mb-4">
    
          <h2 className="text-lg font-medium text-gray-700">
            Write the history of India
          </h2>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-purple-500" />
            <span className="text-sm">Due: {dateFormatter(String(new Date()))}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-green-500" />
            <span className="text-sm">Created: {dateFormatter(String(new Date()))}</span>
          </div>
        </div>
      </div>
    </div>

    <div className="rounded-xl overflow-hidden w-full border-2">
      <div className="p-5" onClick={() => (navigate(`/teacher/classes/sadfsdf/assignments/sadfdf`))}>
        <div className="flex items-center gap-3 mb-4">
    
          <h2 className="text-lg font-medium text-gray-700">
            Write the history of India
          </h2>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-purple-500" />
            <span className="text-sm">Due: {dateFormatter(String(new Date()))}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-green-500" />
            <span className="text-sm">Created: {dateFormatter(String(new Date()))}</span>
          </div>
        </div>
      </div>
    </div>

    <div className="rounded-xl overflow-hidden w-full border-2">
      <div className="p-5" onClick={() => (navigate(`/teacher/classes/sadfsdf/assignments/sadfdf`))}>
        <div className="flex items-center gap-3 mb-4">
    
          <h2 className="text-lg font-medium text-gray-700">
            Write the history of India
          </h2>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-purple-500" />
            <span className="text-sm">Due: {dateFormatter(String(new Date()))}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-green-500" />
            <span className="text-sm">Created: {dateFormatter(String(new Date()))}</span>
          </div>
        </div>
      </div>
    </div>

    <div className="rounded-xl overflow-hidden w-full border-2">
      <div className="p-5" onClick={() => (navigate(`/teacher/classes/sadfsdf/assignments/sadfdf`))}>
        <div className="flex items-center gap-3 mb-4">
    
          <h2 className="text-lg font-medium text-gray-700">
            Write the history of India
          </h2>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-purple-500" />
            <span className="text-sm">Due: {dateFormatter(String(new Date()))}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-green-500" />
            <span className="text-sm">Created: {dateFormatter(String(new Date()))}</span>
          </div>
        </div>
      </div>
    </div>
    
    </div>
    </div>
  )
}

export default Assignments
