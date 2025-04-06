import { User, Hash } from "lucide-react"

const AttendanceCard = () => {
  return (
    <div className="border p-5 flex items-center bg-red-100 rounded-md">
    <div className="flex items-center text-gray-700 w-10/12">

      <div className="bg-gray-100 p-3 rounded-full flex justify-center mr-3">
      <User className="w-5 h-5 text-gray-500" />
      </div>
      <div>
        <p className="text-sm text-gray-500">Student Name</p>
        <p className="font-medium">Sujith V S</p>
      </div>
    </div>
    <div className="flex items-center text-gray-700">

      <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
        <Hash className="text-gray-500 w-4 h-4" />
        <span className="font-medium text-sm text-gray-700">23</span>
      </div>
    </div>

</div>
  )
}

export default AttendanceCard
