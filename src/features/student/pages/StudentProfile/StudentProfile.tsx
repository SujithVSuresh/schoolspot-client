import { useEffect, useState } from "react";
import { fetchProfileforStudent } from "../../api/api";
import {
  User,
  Phone,
  Mail,
  Calendar,
  Info,
  Shield,
  Lock,
  MapPin,
} from "lucide-react";
import ProfileCard from "./components/ProfileCard";
import { dateFormatter, textFormatter } from "../../../../app/utils/formatter";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeStudent } from "../../redux/studentSlice";
import SettingsCard from "./components/SettingsCard";

interface StudentProfileType {
  address: string;
  parentContactNumber: string;
  dob: string;
  fatherName: string;
  motherName: string;
  user: {
    email: string;
    status: "active" | "inactive" | "";
    _id: string;
  };
}

const StudentProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState<StudentProfileType>({
    fatherName: "",
    motherName: "",
    parentContactNumber: "",
    dob: "",
    address: "",
    user: {
      email: "",
      status: "",
      _id: "",
    },
  });

  useEffect(() => {
    fetchStudentProfileHandler();
  }, []);

  const fetchStudentProfileHandler = async () => {
    const response = await fetchProfileforStudent();

    setProfileData({
      fatherName: response.data.fatherName,
      motherName: response.data.motherName,
      parentContactNumber: response.data.parentContactNumber,
      dob: response.data.dob,
      address: response.data.address,
      user: {
        email: response.data.userId.email,
        status: response.data.userId.status,
        _id: response.data.userId._id,
      },
    });
  };

  const handleLogout = () => {
    dispatch(removeStudent());
  };
  return (
    <div className="min-h-screen w-full">
      <div className="grid grid-cols-5 w-full gap-5 pb-5 border-b">
        <ProfileCard
          icon={User}
          label="Father's Name"
          value={profileData.fatherName}
        />
        <ProfileCard
          icon={User}
          label="Mother's Name"
          value={profileData.motherName}
        />
        <ProfileCard
          icon={Phone}
          label="Contact Number"
          value={profileData.parentContactNumber}
        />
        <ProfileCard icon={Mail} label="Email" value={profileData.user.email} />
        <ProfileCard
          icon={Calendar}
          label="Date of birth"
          value={dateFormatter(profileData.dob)}
        />
        <ProfileCard
          icon={User}
          label="Account Status"
          value={textFormatter(profileData.user.status)}
        />
        <ProfileCard
          icon={MapPin}
          label="Address"
          value={profileData.address}
        />
      </div>

      <h2 className="text-xl font-medium text-gray-800 my-5">Settings</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <SettingsCard
          heading="Password Security"
          info="Change your password to keep your account secure."
          icon={Lock}
          action={() => navigate("/student/change-password")}
          linkText="Change Password"
        />

        <SettingsCard
          heading="Account Access"
          info="Logout from your device to make your account secure."
          icon={Shield}
          action={() => handleLogout()}
          linkText="Logout"
        />

        <SettingsCard
          heading="Info"
          info="Contact the school administrator to change any of your profile information."
          icon={Info}
        />
      </div>
    </div>
  );
};

export default StudentProfile;
