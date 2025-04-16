import { useEffect, useState } from "react"
import { fetchStudentProfile } from "../../api/api"
import { User, Phone, Mail, Calendar, School, Users, MapPin } from 'lucide-react';
import ProfileCard from "./components/ProfileCard"
import { dateFormatter, textFormatter } from "../../../../app/utils/formatter";


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
  return (
<div className="min-h-screen w-full">

          <div className="grid grid-cols-5 w-full gap-5">
          <ProfileCard icon={User} label="Father's Name" value={profileData.fatherName} />
          <ProfileCard icon={User} label="Mother's Name" value={profileData.motherName} />
          <ProfileCard icon={Phone} label="Contact Number" value={profileData.contactNumber} />
          <ProfileCard icon={Mail} label="Email" value={profileData.user.email} />
          <ProfileCard icon={Calendar} label="Date of birth" value={dateFormatter(profileData.dob)} />
          <ProfileCard icon={User} label="Account Status" value={textFormatter(profileData.user.status)} />
          <ProfileCard icon={MapPin} label="Address" value={profileData.address} />

         
          </div>
 
    </div>
  )
}

export default StudentProfile
