import { User, Hash } from "lucide-react"


interface StudentCardProps {
    fullName: string,
    roll: number,
    profilePhoto: string
  }

const StudentCard = ({student}: {student: StudentCardProps}) => {
  return (
    <div className="space-y-4 border p-5">
    <div className="flex items-center text-gray-700">
<div className="bg-gray-100 w-10 h-10 border rounded-full flex justify-center items-center mr-3">
  <img
    src={student.profilePhoto}
    alt="User"
    className="w-full h-full rounded-full object-cover"
  />
</div>

      <div>
        <p className="text-sm text-gray-500">Student Name</p>
        <p className="font-medium">{student.fullName}</p>
      </div>
    </div>
    <div className="flex items-center text-gray-700">
    <div className="bg-gray-100 p-3 rounded-full flex justify-center mr-3">
      <Hash className="w-5 h-5 text-gray-500" />
      </div>
      <div>
        <p className="text-sm text-gray-500">Roll Number</p>
        <p className="font-medium">{student.roll}</p>
      </div>
    </div>

</div>
  )
}

export default StudentCard
