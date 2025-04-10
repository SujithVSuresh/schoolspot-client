import { Book } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Subjects = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-3">
<div onClick={() => navigate('/student/subjects/sdf/assignments')} className="space-y-4 border p-5 rounded-lg w-full">
            <div className="flex items-center text-gray-700">
              <div className="bg-gray-100 p-3 rounded-full flex justify-center mr-3">
              <Book className="w-5 h-5 text-gray-500" />
              </div>
              <div>
              <p className="font-medium">English</p>
                <p className="text-sm text-gray-500">Subject</p>
                
              </div>
            </div>
        </div>

        <div className="space-y-4 border p-5 rounded-lg w-full">
            <div className="flex items-center text-gray-700">
              <div className="bg-gray-100 p-3 rounded-full flex justify-center mr-3">
              <Book className="w-5 h-5 text-gray-500" />
              </div>
              <div>
              <p className="font-medium">English</p>
                <p className="text-sm text-gray-500">Subject</p>
                
              </div>
            </div>
        </div>

        <div className="space-y-4 border p-5 rounded-lg">
            <div className="flex items-center text-gray-700">
              <div className="bg-gray-100 p-3 rounded-full flex justify-center mr-3">
              <Book className="w-5 h-5 text-gray-500" />
              </div>
              <div>
              <p className="font-medium">English</p>
                <p className="text-sm text-gray-500">Subject</p>
                
              </div>
            </div>
        </div>

        <div className="space-y-4 border p-5 rounded-lg">
            <div className="flex items-center text-gray-700">
              <div className="bg-gray-100 p-3 rounded-full flex justify-center mr-3">
              <Book className="w-5 h-5 text-gray-500" />
              </div>
              <div>
              <p className="font-medium">English</p>
                <p className="text-sm text-gray-500">Subject</p>
                
              </div>
            </div>
        </div>
                  
        </div>
    </div>
  )
}

export default Subjects

