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

      const fetchAnnouncementsHandler = async (classId: string) => {
        const response = await fetchAnnouncementsByClass(classId)
        if(response.success){
          setAnnouncements(response.data)
        }
      }
    
       fetchAnnouncementsHandler(classId)

    }, [classId])

    useEffect(() => {
      announcementSocket.on('receive-announcement', (message) => {
        setAnnouncements((prev) => [message, ...prev])
      });

      announcementSocket.on('receive-edit-announcement', (message) => {
        updateAnnouncementHandler(message)
      });

      announcementSocket.on('receive-delete-announcement', (message) => {
        deleteAnnouncementHandler(message)
      });

      return () => {
        announcementSocket.off('receive-announcement')
        announcementSocket.off('receive-edit-announcement')

      }
    }, [])

    const updateAnnouncementHandler = (message: AnnouncementType) => {
      
        setAnnouncements((prev) => {
          return prev.map((announcement) => {
          if(message._id == announcement._id){
            return message
          }
          return announcement
        })
        })


    }

    const deleteAnnouncementHandler = (message: AnnouncementType) => {
      
      setAnnouncements((prev) => {
        return prev.filter((announcement) => {
        if(message._id != announcement._id){
          return message
        }
      })
      })


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
