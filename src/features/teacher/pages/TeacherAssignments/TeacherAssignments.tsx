
import { Calendar } from "lucide-react"
import { useNavigate } from "react-router-dom"

const TeacherAssignments = () => {
  const navigate = useNavigate()
  return (
    <div>
    
    <div className="grid grid-cols-4 gap-4 py-5">
    <div className="rounded-xl overflow-hidden w-full border-2">
      <div className="p-6" onClick={() => (navigate('/teacher/classes/2/assignments/dsfd'))}>
        <div className="flex items-center gap-3 mb-4">
    
          <h2 className="text-lg font-medium text-gray-700">
            Build a simple calculator using JavaScript
          </h2>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-purple-500" />
            <span className="text-sm">Due: May 5, 2025</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-green-500" />
            <span className="text-sm">Created: April 21, 2025</span>
          </div>
        </div>
      </div>

      {/* <div className="px-6 py-4 bg-purple-50">
        <div className="relative w-full h-2 bg-gray-200 rounded-full">
          <div className="absolute top-0 left-0 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 w-1/2 rounded-full"></div>
        </div>
      </div> */}
    </div>

    <div className="rounded-xl shadow-lg overflow-hidden w-full max-w-lg transition-transform transform hover:scale-105">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
    
          <h2 className="text-lg font-medium text-gray-700">
            Build a simple calculator using JavaScript
          </h2>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-purple-500" />
            <span className="text-sm">Due: May 5, 2025</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-green-500" />
            <span className="text-sm">Created: April 21, 2025</span>
          </div>
        </div>
      </div>

      {/* <div className="px-6 py-4 bg-purple-50">
        <div className="relative w-full h-2 bg-gray-200 rounded-full">
          <div className="absolute top-0 left-0 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 w-1/2 rounded-full"></div>
        </div>
      </div> */}
    </div>

    <div className="rounded-xl shadow-lg overflow-hidden w-full max-w-lg transition-transform transform hover:scale-105">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
    
          <h2 className="text-lg font-medium text-gray-700">
            Build a simple calculator using JavaScript
          </h2>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-purple-500" />
            <span className="text-sm">Due: May 5, 2025</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-green-500" />
            <span className="text-sm">Created: April 21, 2025</span>
          </div>
        </div>
      </div>

      {/* <div className="px-6 py-4 bg-purple-50">
        <div className="relative w-full h-2 bg-gray-200 rounded-full">
          <div className="absolute top-0 left-0 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 w-1/2 rounded-full"></div>
        </div>
      </div> */}
    </div>

    <div className="rounded-xl shadow-lg overflow-hidden w-full max-w-lg transition-transform transform hover:scale-105">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
    
          <h2 className="text-lg font-medium text-gray-700">
            Build a simple calculator using JavaScript
          </h2>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-purple-500" />
            <span className="text-sm">Due: May 5, 2025</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-green-500" />
            <span className="text-sm">Created: April 21, 2025</span>
          </div>
        </div>
      </div>

      {/* <div className="px-6 py-4 bg-purple-50">
        <div className="relative w-full h-2 bg-gray-200 rounded-full">
          <div className="absolute top-0 left-0 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 w-1/2 rounded-full"></div>
        </div>
      </div> */}
    </div>

    <div className="rounded-xl shadow-lg overflow-hidden w-full max-w-lg transition-transform transform hover:scale-105">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
    
          <h2 className="text-lg font-medium text-gray-700">
            Build a simple calculator using JavaScript
          </h2>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-purple-500" />
            <span className="text-sm">Due: May 5, 2025</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-green-500" />
            <span className="text-sm">Created: April 21, 2025</span>
          </div>
        </div>
      </div>

      {/* <div className="px-6 py-4 bg-purple-50">
        <div className="relative w-full h-2 bg-gray-200 rounded-full">
          <div className="absolute top-0 left-0 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 w-1/2 rounded-full"></div>
        </div>
      </div> */}
    </div>
  </div>
  </div>
  )
}

export default TeacherAssignments
