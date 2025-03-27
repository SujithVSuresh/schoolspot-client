import { MoreVertical } from 'lucide-react';
import Heading from '../../components/Heading';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchAnnouncements } from '../../api/api';
import { AnnouncementResponseType } from '../../types/types';

const Announcement = () => {
  const navigate = useNavigate()

  const [announcements, setAnnouncements] = useState<AnnouncementResponseType[]>([])


  useEffect(() => {
    const getAllAnnouncements = async () => {
      const response = await fetchAnnouncements()
      if(response.success){
        setAnnouncements(response.data)
  
      }
    }

    getAllAnnouncements()

  }, [])
  return (
    <div>
        <Heading headingValue="Announcements">
        <button
        onClick={() => navigate('/dashboard/announcement/new')}
        className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
      >
        <Plus className="h-5 w-5" />
        Add
      </button>
        </Heading>
      <div className="w-full max-w-md bg-gray-100 rounded-xl shadow-sm overflow-hidden">
        {announcements.map((data) => (
    <div className="p-5 space-y-3">
    {/* Header with date and menu */}
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-500">{data.createdAt?.slice(0, 10)}</span>
      <button className="text-gray-400 hover:text-gray-600 transition-colors">
        <MoreVertical size={20} />
      </button>
    </div>

    {/* Title and content */}
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        {/* <AlertCircle className="text-blue-600" size={20} /> */}
        <h2 className="font-medium text-gray-900">
          {data.title}
        </h2>
      </div>
      <p className="text-gray-600 leading-relaxed">
       {data.content}
      </p>
    </div>
  </div>
        ))}
    
      </div>
      
    </div>
  )
}

export default Announcement
