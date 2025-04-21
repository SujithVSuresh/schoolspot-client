import { useEffect, useState } from 'react';
import { announcementSocket } from '../../../../app/socket/socket';
import AnnouncementCard from './components/AnnouncementCard';
import { AnnouncementType } from '../../types/types';
import { useOutletContext } from 'react-router-dom';
import { fetchAnnouncementsByClass } from '../../api/api';


const Announcements = () => {

  const { classId }: { classId: string } = useOutletContext();

    const [announcements, setAnnouncements] = useState<AnnouncementType[]>([])

    useEffect(() => {
    
       fetchAnnouncementsHandler(classId)

    }, [classId])

    useEffect(() => {
      announcementSocket.on('receive-announcement', (message) => {
        setAnnouncements((prev) => [message, ...prev])
      });

      return () => {
        announcementSocket.off('receive-announcement')

      }
    }, [])

    const fetchAnnouncementsHandler = async (classId: string) => {
      const response = await fetchAnnouncementsByClass(classId)
      if(response.success){
        setAnnouncements(response.data)
      }
    }
  

  return (
<div className="min-h-screen w-full p-5">

      <div className="flex justify-center w-full">
          <div className="space-y-4 w-6/12">
            {announcements.map((announcement) => (
              <AnnouncementCard key={announcement._id} announcement={announcement} />
            ))}
          </div>

      </div>
    </div>
  );
}



export default Announcements
