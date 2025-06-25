import Heading from "../../components/Heading";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchAnnouncements } from "../../api/api";
import { AnnouncementResponseType } from "../../types/types";
// import { deleteAnnouncement } from "../../api/api";
// import toast from "react-hot-toast";
import AnnouncementCard from "./components/AnnouncementCard";
import NavigateButton from "../../components/NavigateButton";

const Announcement = () => {

  const [announcements, setAnnouncements] = useState<
    AnnouncementResponseType[]
  >([]);


  useEffect(() => {
    const getAllAnnouncements = async () => {
      const response = await fetchAnnouncements();
      if (response.success) {
        setAnnouncements(response.data);
      }
    };

    getAllAnnouncements();
  }, []);

    // const deleteAnnouncementHandler = async (announcementId: string) => {
    //   const response = await deleteAnnouncement(announcementId);
    //   if (response.success) {
    //           // announcementSocket.emit("delete-announcement", {
    //           //   roomId: `room-${classId}`,
    //           //   message: response.data,
    //           // });
    //     const filteredAnnouncements = await announcements.filter(
    //       (announcement) => {
    //         if (announcement._id !== announcementId) {
    //           return announcement;
    //         }
    //       }
    //     );
    //     toast("Announcement deleted successfully", {
    //       duration: 2000,
    //       position: "bottom-right",
    //       style: {
    //         backgroundColor: "#E7FEE2",
    //         border: "2px, solid, #16A34A",
    //         minWidth: "400px",
    //         color: "black",
    //       },
    //     });
  
    //     setAnnouncements(filteredAnnouncements);
    //   }
    // };
  return (
    <div>
      <Heading headingValue="Announcements">
        <NavigateButton label="Create" navlink="/dashboard/announcement/new" icon={Plus}/>
      </Heading>
      <div className="w-full grid grid-cols-3 gap-3">
        {announcements.map((announcement) => (
          <AnnouncementCard announcement={announcement}/>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
