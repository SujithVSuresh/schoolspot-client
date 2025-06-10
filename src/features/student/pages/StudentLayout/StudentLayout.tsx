import cover from "../../../../assets/images/coverimg.jpg";
import { School, Bell } from "lucide-react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchConversations, fetchProfileforStudent } from "../../api/api";
import NavLink from "./components/NavLink";
import {
  announcementSocket,
  chatSocket,
  notificationSocket,
} from "../../../../app/socket/socket";
import { useNavigate } from "react-router-dom";
import { Conversation } from "../../../../app/types/ChatType";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { useNotifications } from "../../../../app/hooks/useNotifications";

const StudentLayout = () => {
  const navigate = useNavigate();
  const student = useSelector((state: RootState) => state.student)
  

  const [studentProfile, setStudentProfile] = useState<{
    _id: string;
    fullName: string;
    profilePhoto: string;
    schoolId: {
      _id: string;
      schoolName: string;
    };
    userId: {
      _id: string;
      email: string;
      status: "active" | "inactive" | string;
    };
    academicProfile: {
      _id: string;
      name: string;
      section: string;
      roll: number;
    } | null;
  } | null>(null);

  const [newAnnouncementBadgeCount, setNewAnnouncementBadgeCount] = useState(0);


  // fetching student profile data
  useEffect(() => {
    const fetchStudentProfileHandler = async () => {
      const response = await fetchProfileforStudent();
      setStudentProfile(response.data);
    };
    fetchStudentProfileHandler();
  }, []);


  //handling announcement room
  useEffect(() => {
    if (studentProfile?.academicProfile?._id) {
      announcementSocket.connect();

      announcementSocket.on("connect", () => {
        console.log("Connected:", announcementSocket.id);
        announcementSocket.emit(
          "join-room",
          `room-${studentProfile?.academicProfile?._id}`
        );
      });

      return () => {
        announcementSocket.emit(
          "leave-room",
          `room-${studentProfile?.academicProfile?._id}`
        );
        announcementSocket.disconnect();
      };
    }
  }, [studentProfile?.academicProfile?._id]);


  // conversation room handler
  useEffect(() => {
    const fetchConversationHandler = async () => {
      const response = await fetchConversations();

      if (response.success && response.data) {
        chatSocket.connect();

        chatSocket.on("connect", () => {
          console.log("Connected:", chatSocket.id);

          chatSocket.emit("register-user", student._id);


          response.data.forEach((conversation: Conversation) => {
            chatSocket.emit("join-room", `conversation-${conversation._id}`);
          });
        });
      }
    };

    fetchConversationHandler();

    // return () => {
    // announcementSocket.emit('leave-room', `room-${classId}`);
    // announcementSocket.disconnect()

    // response.data.forEach((conversation: Conversation) => {
    //   chatSocket.emit("leave-room", `conversation-${conversation._id}`);
    // })
    // };
  }, [student._id]);

  // student joining their own notification room
  useEffect(() => {
    if (studentProfile?.userId._id) {
      notificationSocket.connect();

      notificationSocket.on("connect", () => {
        console.log("Connected:", notificationSocket.id);
        notificationSocket.emit(
          "join-room",
          `notification-${studentProfile?.userId._id}`
        );
      });

      return () => {
        notificationSocket.emit(
          "leave-room",
          `notification-${studentProfile?.userId._id}`
        );
        notificationSocket.disconnect();
      };
    }
  }, [studentProfile?.userId._id]);



  const setAnnouncementBadgeHandler = (value: number) => {
    setNewAnnouncementBadgeCount(value);
  };

  const notifications = useNotifications("student");

  const unreadCount = notifications?.filter(n => !n.isRead).length ?? 0;



  return (
    <>
      {/* <header
        className={`bg-white border-b w-full py-4 px-10 flex items-center justify-between`}
      >
        <img src={logo} alt="" className="lg:h-10 md:h-8 h-8" />
      </header> */}

      <section>
        <div className="relative bg-purple-100">
          <div className="h-36 bg-blue-100 flex justify-end">
            <div className="w-full h-full bg-blue-200 opacity-60 absolute"></div>
            <img className="w-full object-cover" src={cover} alt="Profile" />
          </div>

          <div className="max-w-7xl absolute w-full top-24 right-0 left-0 mx-auto">
            <div className="sm:flex sm:items-end sm:space-x-5 mb-10">
              <div className="relative">
                <img
                  className="h-32 w-32 rounded-full object-cover ring-4 ring-white bg-white"
                  src={studentProfile?.profilePhoto}
                  alt="Profile"
                />
              </div>
              <div className="sm:mt-0 sm:flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl mb-3 font-semibold text-gray-900 truncate">
                      {studentProfile?.fullName}
                    </h1>
                    <div className="flex items-center mt-1 text-gray-700 text-sm">
                      <span>
                        Class: {studentProfile?.academicProfile?.name}{" "}
                        {studentProfile?.academicProfile?.section} - Roll no:{" "}
                        {studentProfile?.academicProfile?.roll}
                      </span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <School className="w-4 h-4 mr-1" />
                        <span>{studentProfile?.schoolId.schoolName}</span>
                      </div>
                    </div>
                  </div>
                  {/* <button onClick={() => navigate('/student/profile')} className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50">
                    View Profile
                  </button> */}
                  <button
                    onClick={() => navigate("/student/notification")}
                    className="relative text-gray-700 bg-gray-100 hover:bg-gray-200 p-3 rounded-full hover:text-gray-900 transition-colors"
                  >
                    <Bell className="w-5 h-5" />
                    {/* Notification badge */}
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                      {unreadCount}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <NavLink
              announcementBadge={newAnnouncementBadgeCount}
              setAnnouncementBadge={setAnnouncementBadgeHandler}
            />

            <div className="py-5 w-full flex justify-between">
              <Outlet
                context={{ classId: studentProfile?.academicProfile?._id }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentLayout;
