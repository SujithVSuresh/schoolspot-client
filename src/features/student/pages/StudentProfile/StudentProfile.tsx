import { useEffect, useState } from "react"
import { fetchStudentProfile } from "../../api/api"
import { User, Phone, Mail, Calendar, Info, Shield, Lock, MapPin } from 'lucide-react';
import ProfileCard from "./components/ProfileCard"
import { dateFormatter, textFormatter } from "../../../../app/utils/formatter";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeStudent } from "../../redux/studentSlice";


interface StudentProfileType {
  address: string;
  contactNumber: string;
  dob: string;
  fatherName: string;
  motherName: string;
  user: {
    email: string;
    status: 'active' | 'inactive' | '';
    _id: string;
  };
}


const StudentProfile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [profileData, setProfileData] = useState<StudentProfileType>({
    fatherName: "",
    motherName: "",
    contactNumber: "",
    dob: "",
    address: "",
    user: {
      email: "",
      status: "",
      _id: ""
    }
  })

  useEffect(() => {
    fetchStudentProfileHandler()
  
  }, [])
  
  
  const fetchStudentProfileHandler = async () => {
    const response = await fetchStudentProfile("null")


    setProfileData({
      fatherName: response.data.fatherName,
      motherName: response.data.motherName,
      contactNumber: response.data.contactNumber,
      dob: response.data.dob,
      address: response.data.address,
      user: {
        email: response.data.user.email,
        status: response.data.user.status,
        _id: response.data.user._id
      }
    })

  }

  const handleLogout = () => {
    dispatch(removeStudent());
  };
  return (
<div className="min-h-screen w-full">


          <div className="grid grid-cols-5 w-full gap-5 pb-5 border-b">
          <ProfileCard icon={User} label="Father's Name" value={profileData.fatherName} />
          <ProfileCard icon={User} label="Mother's Name" value={profileData.motherName} />
          <ProfileCard icon={Phone} label="Contact Number" value={profileData.contactNumber} />
          <ProfileCard icon={Mail} label="Email" value={profileData.user.email} />
          <ProfileCard icon={Calendar} label="Date of birth" value={dateFormatter(profileData.dob)} />
          <ProfileCard icon={User} label="Account Status" value={textFormatter(profileData.user.status)} />
          <ProfileCard icon={MapPin} label="Address" value={profileData.address} />
          </div>

          <h2 className="text-xl font-medium text-gray-800 my-5">Settings</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-5 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <Lock className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-lg font-medium text-gray-700">Password Security</h2>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                Change your password to keep your account secure.
              </p>
              
              <div className="mt-4">
              <span className="text-blue-700 underline hover:cursor-pointer" onClick={() => navigate('/student/change-password')}>Change Password</span>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-indigo-100 rounded-full mr-3">
                  <Shield className="h-5 w-5 text-indigo-600" />
                </div>
                <h2 className="text-lg font-medium text-gray-700">Account Access</h2>
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
                <h2 className="text-lg font-medium text-gray-700">Info</h2>
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
  )
}

export default StudentProfile
