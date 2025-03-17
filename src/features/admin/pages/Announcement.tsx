import DashboardLayout from '../components/DashboardLayout'
import { MoreVertical } from 'lucide-react';

const Announcement = () => {
  return (
    <DashboardLayout>
    <h1 className="text-xl sm:text-2xl font-bold mb-8 text-gray-800 ml-0">
      Announcement
    </h1>
      <div className="w-full max-w-md bg-gray-100 rounded-xl shadow-sm overflow-hidden">
        <div className="p-5 space-y-3">
          {/* Header with date and menu */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">March 12, 2024</span>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <MoreVertical size={20} />
            </button>
          </div>

          {/* Title and content */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              {/* <AlertCircle className="text-blue-600" size={20} /> */}
              <h2 className="font-medium text-gray-900">
                School Closure Due to Inclement Weather
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              This is to inform you that due to heavy rainfall, school will be closed today, for the safety of our students and staff.
            </p>
          </div>
        </div>
      </div>
      
    </DashboardLayout>
  )
}

export default Announcement
