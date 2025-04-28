import logo from "../../../../assets/images/dotlogo.png";
// import cover from "../../../../assets/images/coverimg.jpg";
import { School } from "lucide-react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchStudentProfile } from "../../api/api";
import NavLink from "./components/NavLink";
import { announcementSocket } from "../../../../app/socket/socket";
import { useNavigate } from "react-router-dom";

const StudentLayout = () => {
  const navigate = useNavigate()
  
  const [studentProfile, setStudentProfile] = useState<{
    _id: string;
    fullName: string;
    class: string;
    section: string;
    roll: number;
    profilePhoto: string;
    classId: string;
    school: string
  } | null>(null);

  const [newAnnouncementBadgeCount, setNewAnnouncementBadgeCount] = useState(0);

  useEffect(() => {
    const fetchStudentProfileHandler = async () => {
      const response = await fetchStudentProfile("null");
      console.log(response, "stuuuuuuuuuuuuuuuuuuuuuu")
      setStudentProfile({
        _id: response.data._id,
        fullName: response.data.fullName,
        class: response.data.class,
        section: response.data.section,
        roll: response.data.roll,
        profilePhoto: response.data.profilePhoto,
        classId: response.data.classId,
        school: response.data.school
      
      });
    };
    fetchStudentProfileHandler();
  }, []);

  useEffect(() => {
    if (studentProfile?.classId) {
      announcementSocket.connect();

      announcementSocket.on("connect", () => {
        console.log("Connected:", announcementSocket.id);
        announcementSocket.emit("join-room", `room-${studentProfile?.classId}`);
      });

      announcementSocket.on("receive-announcement", (message) => {
        console.log("vavava", message);
        if (message) {
          setNewAnnouncementBadgeCount((prev) => prev + 1);
        }
      });

      return () => {
        announcementSocket.emit(
          "leave-room",
          `room-${studentProfile?.classId}`
        );
        announcementSocket.off("receive-announcement");
        announcementSocket.disconnect();
      };
    }
  }, [studentProfile?.classId]);


  const setAnnouncementBadgeHandler = (value: number) => {
    setNewAnnouncementBadgeCount(value);
  };

  return (
    <>
      <header
        className={`bg-blue-50 border-b w-full py-4 px-10 flex items-center justify-between`}
      >
        <img src={logo} alt="" className="lg:h-10 md:h-8 h-8" />
      </header>

      <section>
        <div className="relative bg-purple-100">
          <div className="h-36 bg-blue-100 flex justify-end">
            {/* <img
                  className="w-full object-cover"
                  src={cover}
                  alt="Profile"
                /> */}
          </div>

          <div className="max-w-7xl absolute w-full top-24 right-0 left-0 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-end sm:space-x-5 mb-8">
              <div className="relative">
                <img
                  className="h-32 w-32 rounded-full object-cover ring-4 ring-white bg-white"
                  src={studentProfile?.profilePhoto}
                  alt="Profile"
                />
              </div>
              <div className="mt-6 sm:mt-0 sm:flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-semibold text-gray-900 truncate">
                      {studentProfile?.fullName}
                    </h1>
                    <div className="flex items-center mt-1 text-gray-500 text-sm">
                      <span>
                        Class: {studentProfile?.class} {studentProfile?.section}{" "}
                        - Roll no: {studentProfile?.roll}
                      </span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <School className="w-4 h-4 mr-1" />
                        <span>St Mary's Bethany School</span>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => navigate('/student/profile')} className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50">
                    View Profile
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <NavLink
              announcementBadge={newAnnouncementBadgeCount}
              setAnnouncementBadge={setAnnouncementBadgeHandler}
            />

            <div className="py-5 w-full flex justify-between border-t">
              <Outlet context={{ classId: studentProfile?.classId }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentLayout;
