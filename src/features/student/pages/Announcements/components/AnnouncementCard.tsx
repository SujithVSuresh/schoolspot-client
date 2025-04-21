import { Calendar, Clock, MoreVertical, Edit2, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { AnnouncementType } from '../../../types/types';
import { timeFormatter, dateFormatter } from '../../../../../app/utils/formatter';
import { announcementSocket } from '../../../../../app/socket/socket';

const AnnouncementCard = ({ announcement }: {announcement: AnnouncementType}) => {

  const [showMenu, setShowMenu] = useState(false);
  return (
  <div className="rounded-lg border border-gray-200 p-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-medium text-gray-700">{announcement.title}</h3>
              {/* {announcement.isPinned && (
                <Pin className="h-4 w-4 text-indigo-600" />
              )} */}
            </div>
            <p className="mt-2 text-gray-600">{announcement.content}</p>
            
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {dateFormatter(announcement.createdAt)}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {timeFormatter(announcement.createdAt)}
              </div>
              {/* <div className="flex items-center">
                <Bell className="h-4 w-4 mr-1" />
                {announcement.category}
              </div>
              <div>
                By {announcement.author}
              </div> */}
            </div>
          </div>
          
          <div className="relative">
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <MoreVertical className="h-5 w-5 text-gray-500" />
            </button>
            
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">
                    <Edit2 className="h-4 w-4 mr-2" />
                    Edit
                  </button>
                  <button className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
  )
}

export default AnnouncementCard

