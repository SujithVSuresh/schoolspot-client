import TimeTable from "./components/TimeTable";
import Attendance from "./components/Attendance";
import { ChevronRight } from "lucide-react";
import Announcements from "./components/Announcements";
import Exams from "./components/Exams";

const Home = () => {
  const announcements = [
    {
      id: 1,
      title: "Holiday Break",
      message: "Holiday break for the session is going...",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      count: 2,
    },
    {
      id: 2,
      title: "Holiday Break",
      message: "To succeed in this course, please kee...",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
      count: 2,
    },
    {
      id: 3,
      title: "Holiday Break",
      message: "Dear Students,...",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
      count: 2,
    },
  ];

  return (
    <div className="min-h-screen w-full">
      <div className="flex w-full gap-4">
        <div className="w-8/12">
          <TimeTable />
          <div className="flex gap-4 mt-4">
 <Announcements />
  <Announcements />
          </div>
         
        </div>

        <div className="flex-1">
          <Attendance />
          <Exams />

        </div>
      </div>
    </div>
  );
};

export default Home;

//       <div className="max-w-md border bg-white rounded-xl">
// <div className="p-6">
//   <div className="flex items-center justify-between mb-6">
//     <h2 className="text-xl font-semibold text-gray-900">
//       Recent Announcements
//     </h2>
//     <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
//       View All
//     </button>
//   </div>

//   <div className="space-y-3">
//     {announcements.map((announcement) => (
//       <div
//         key={announcement.id}
//         className="flex items-start p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer"
//       >
//         <img
//           src={announcement.avatar}
//           alt=""
//           className="w-10 h-10 rounded-full object-cover"
//         />
//         <div className="flex-1 min-w-0 ml-4">
//           <div className="flex items-center justify-between">
//             <h3 className="text-sm font-medium text-gray-900">
//               {announcement.title}
//             </h3>
//             <span className="flex items-center">
//                <span className="px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
//                 {announcement.count}
//               </span>
//               <ChevronRight className="w-4 h-4 text-gray-400 ml-2" />
//             </span>
//           </div>
//           <p className="mt-1 text-sm text-gray-600 truncate">
//             {announcement.message}
//           </p>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
// </div>
