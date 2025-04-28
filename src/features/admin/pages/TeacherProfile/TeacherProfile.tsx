import { useEffect, useState } from "react";
import { getTeacherProfileById } from "../../api/api";
import { useParams } from "react-router-dom";
import { TeacherProfileWithUser } from "../../types/types";
import { User, Mail, Phone, BookOpen, Award, Clock, Activity } from 'lucide-react';
import { changeAccountStatus } from "../../api/api";
import { useNavigate } from "react-router-dom";



  

const TeacherProfile = () => {
    const navigate = useNavigate()
    const { id: userId } = useParams();
  
  
    const [teacher, setTeacher] = useState<TeacherProfileWithUser | null>(
      null
    );
  
    useEffect(() => {
      const fetchStudentData = async () => {
        if (userId) {
          const response = await getTeacherProfileById(userId);
          console.log(response, "this is the respn teeaaa")
          if (response.success) {
            setTeacher(response.data);
          } else {
            console.log(response.error);
          }
        }
      };
  
      fetchStudentData();
    }, [userId]);
  
    const onBlockClick = async (
      userId: string,
      status: "active" | "blocked" | "deleted" | "inactive"
    ) => {
      const response = await changeAccountStatus(userId, status);
      console.log(response);
  
      if (response.success) {
        if (response.data.status == "blocked") {
          statusUpdationHandler("blocked")
        } else {
          statusUpdationHandler("active")
        }
      }
    };
  
    const statusUpdationHandler = (status: "active" | "blocked" | "deleted" | "inactive") => {
      if (teacher?.user) {
        setTeacher({
          ...teacher,
          user: {
            ...teacher.user,
            status: status,
          },
        });
      }
    }
  return (
<>
      <div className="w-full p-10 flex justify-center">
        <div className="w-52 h-56">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={teacher?.profilePhoto as string}
            alt=""
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-row p-4 items-center gap-3">
        <div className="bg-indigo-50 p-4 rounded-full">
          <User className="w-5 h-5 text-indigo-600" />
        </div>
        <div>
          <div className="text-xs text-gray-500 font-medium">Full Name</div>
          <div className="text-lg font-medium text-gray-900">{teacher?.fullName}</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-row p-4 items-center gap-3">
        <div className="bg-indigo-50 p-4 rounded-full">
          <Mail className="w-5 h-5 text-indigo-600" />
        </div>
        <div>
          <div className="text-xs text-gray-500 font-medium">Email</div>
          <div className="text-lg font-medium text-gray-900">{teacher?.user?.email}</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-row p-4 items-center gap-3">
        <div className="bg-indigo-50 p-4 rounded-full">
          <Phone className="w-5 h-5 text-indigo-600" />
        </div>
        <div>
          <div className="text-xs text-gray-500 font-medium">Phone Number</div>
          <div className="text-lg font-medium text-gray-900">{teacher?.phoneNumber}</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-row p-4 items-center gap-3">
        <div className="bg-indigo-50 p-4 rounded-full">
          <BookOpen className="w-5 h-5 text-indigo-600" />
        </div>
        <div>
          <div className="text-xs text-gray-500 font-medium">Subject Specialized</div>
          <div className="text-lg font-medium text-gray-900">{teacher?.subjectSpecialized}</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-row p-4 items-center gap-3">
        <div className="bg-indigo-50 p-4 rounded-full">
          <Award className="w-5 h-5 text-indigo-600" />
        </div>
        <div>
          <div className="text-xs text-gray-500 font-medium">Qualification</div>
          <div className="text-lg font-medium text-gray-900">{teacher?.qualification}</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-row p-4 items-center gap-3">
        <div className="bg-indigo-50 p-4 rounded-full">
          <Clock className="w-5 h-5 text-indigo-600" />
        </div>
        <div>
          <div className="text-xs text-gray-500 font-medium">Experience</div>
          <div className="text-lg font-medium text-gray-900">{teacher?.experience} Years</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-row p-4 items-center gap-3">
        <div className="bg-indigo-50 p-4 rounded-full">
          <Activity className="w-5 h-5 text-indigo-600" />
        </div>
        <div>
          <div className="text-xs text-gray-500 font-medium">Status</div>
          <div className="text-lg font-medium text-gray-900">{teacher?.user.status}</div>
        </div>
      </div>
      </div>

<div className="flex border-b mt-5 pb-5 border-gray-200">

        <div
          onClick={() => navigate(`/dashboard/teachers/profile/${teacher?.user._id}/update`)}
          className={`${
            "bg-gray-200"
          } text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
        >
          Edit Profile
        </div>

        {teacher?.user.status == "active" ? (
          <div
            onClick={() => onBlockClick(teacher?.user._id as string, "blocked")}
            className={`${
              "bg-gray-200"
            } text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
          >
            Block Account
          </div>
        ) : (
          <div
            onClick={() => onBlockClick(teacher?.user._id as string, "active")}
            className={`${
              "bg-gray-200"
            } text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
          >
            Unblock Account
          </div>
        )}
      </div>
    </>
  )
}

export default TeacherProfile
