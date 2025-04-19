import {
  Phone,
  Mail,
  User,
  Info
} from "lucide-react";
import { Shield, Lock } from 'lucide-react';
import { useEffect, useState } from "react";
import { fetchTeacherProfile } from "../../api/api";
import { removeTeacher } from "../../redux/teacherSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

type TeacherProfile = {
  _id: string;
  fullName: string;
  phoneNumber: string;
  subjectSpecialized: string;
  qualification: string;
  experience: string;
  profilePhoto: string;
  schoolId?: string;
  user: {
    _id: string;
    email: string;
    status: "active" | "inactive" | "deleted" | "blocked";
  };
};

const TeacherProfile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [teacher, setTeacher] = useState<TeacherProfile | null>(null);

  useEffect(() => {
    const handleProfileFetch = async () => {
      const teacher = await fetchTeacherProfile();
      if (teacher.success) {
        console.log(teacher.data, "this is the teacher profile");
        setTeacher(teacher.data);
      }
    };

    handleProfileFetch();
  }, []);

    const handleLogout = () => {
      dispatch(removeTeacher())
    }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl border overflow-hidden">
        <div className="h-28 bg-gradient-to-r bg-gray-100"></div>

        <div className="relative px-7">
          <div className="relative -mt-14 mb-4">
            <img
              className="h-32 w-32 rounded-full border-4 border-white shadow-lg object-cover"
              src={teacher?.profilePhoto}
              alt={teacher?.fullName}
            />
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold my-3 text-gray-800">
              {teacher?.fullName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-3 border-b">
            <div className="flex items-center gap-3 p-4 rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-4 rounded-full">
                <User className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="text-gray-700">{teacher?.fullName}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-4 rounded-full">
                <Phone className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="text-gray-700">{teacher?.phoneNumber}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-4 rounded-full">
                <Mail className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-700">{teacher?.user.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-4 rounded-full">
                <User className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Specialized</p>
                <p className="text-gray-700">{teacher?.subjectSpecialized}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-4 rounded-full">
                <User className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Qualification</p>
                <p className="text-gray-700">{teacher?.qualification}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-4 rounded-full">
                <User className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Experience</p>
                <p className="text-gray-700">{teacher?.experience}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-4 rounded-full">
                <User className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Account Status</p>
                <p className="text-gray-700">{teacher?.user.status}</p>
              </div>
            </div>
          </div>
        </div>


    
          <div className="grid gap-6 md:grid-cols-2 p-7">
            <div className="bg-white p-5 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <Lock className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-700">Password Security</h2>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                Change your password to keep your account secure.
              </p>
              
              <div className="mt-4">
              <span className="text-blue-700 underline hover:cursor-pointer" onClick={() => navigate('/teacher/change-password')}>Change Password</span>
              </div>

            </div>
            
            <div className="bg-white p-5 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-indigo-100 rounded-full mr-3">
                  <Shield className="h-5 w-5 text-indigo-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-700">Account Access</h2>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                Logout from your device to make your account secure.
              </p>
              
              <div className="mt-4">
              <span className="text-blue-700 underline hover:cursor-pointer" onClick={() => handleLogout()}>Logout</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-indigo-100 rounded-full mr-3">
                  <Info className="h-5 w-5 text-indigo-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-700">Info</h2>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                Contact the school administrator to change any of your profile information.
              </p>
              
              <div className="mt-4">
                {/* <LogoutButton /> */}
              </div>
            </div>
          </div>

      </div>
    </div>
  );
};

export default TeacherProfile;
