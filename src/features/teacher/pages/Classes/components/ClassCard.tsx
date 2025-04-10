import { Users, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type ClassData = {
  _id: string,
  name: string,
  section: string,
  strength: number
};

type ClassCardProps = {
  classData: ClassData;
};

const ClassCard = ({classData}: ClassCardProps) => {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/teacher/classes/${classData._id}/students`)} className="bg-white rounded-xl hover: cursor-pointer p-5 border">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
 
        <div className="bg-gray-100 p-3 rounded-full flex justify-center mr-3">
        <GraduationCap className="text-gray-500 w-6 h-6" />
              </div>
        <div>
          <h2 className="font-medium text-lg text-gray-800">
            {classData.name} - {classData.section}
          </h2>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
        <Users className="text-gray-600 w-4 h-4" />
        <span className="font-medium text-sm text-gray-700">{classData.strength}</span>
      </div>
    </div>
  </div>
  )
}

export default ClassCard
