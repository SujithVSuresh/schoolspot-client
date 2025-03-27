import { useEffect, useState } from "react";
import ProfileAttendanceRecord from "./component/ProfileAttendanceRecord";
import { getStudentProfile } from "../../api/api";
import { useParams } from "react-router-dom";
import { StudentProfileResponseType } from "../../types/types";
import { RiParentLine } from "react-icons/ri";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { SiGoogleclassroom } from "react-icons/si";
import { IoPersonOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { GoNumber } from "react-icons/go";
import { GrStatusInfo } from "react-icons/gr";
import { PiGenderIntersexLight } from "react-icons/pi";


const StudentProfile = () => {
  const {id: userId} = useParams()

  const [selectedBtn, setSelectedBtn] = useState("students");

  const [student, setStudent] = useState<StudentProfileResponseType | null>(null)


  useEffect(() => {
    const fetchStudentData = async () => {
      if(userId){
        const response = await getStudentProfile(userId)
        if(response.success){
        setStudent(response.data)
        }else{
          console.log(response.error)
        }
      }
    }

    fetchStudentData()
  }, [userId])

  return (
    <>
      <div className="w-full p-10 flex justify-center">
        <div className="w-52 h-56">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={student?.profilePhoto as string}
          alt=""
        />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white rounded-2xl shadow-sm h-auto flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <IoPersonOutline className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">
              Name
            </div>
            <div className="text-lg font-medium text-gray-900">
              {student?.fullName}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <SiGoogleclassroom className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">Class</div>
            <div className="text-lg font-medium text-gray-900">{student?.class} {student?.section}</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <GoNumber className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">
              Roll No
            </div>
            <div className="text-lg font-medium text-gray-900">
              28
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <BsTelephone className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">
              Contact number
            </div>
            <div className="text-lg font-medium text-gray-900">
              {student?.contactNumber}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <MdOutlineEmail className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">
              Email
            </div>
            <div className="text-lg font-medium text-gray-900">
              {student?.user?.email}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <LiaBirthdayCakeSolid className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">Date of birth</div>
            <div className="text-lg font-medium text-gray-900">
              {student?.dob.slice(0, 10)}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <RiParentLine  className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">Father's name</div>
            <div className="text-lg font-medium text-gray-900">{student?.fatherName}</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <RiParentLine className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">Mother's name</div>
            <div className="text-lg font-meedium text-gray-900">{student?.motherName}</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <PiGenderIntersexLight className="w-7 h-7 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">Gender</div>
            <div className="text-lg font-medium text-gray-900">{student?.gender}</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <GrStatusInfo className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">Status</div>
            <div className="text-lg font-medium text-gray-900">{student?.user.status}</div>
          </div>
        </div>

      </div>
      <div className="mt-10">
        <div className="flex border-b pb-5 border-gray-200">
          <div
            onClick={() => setSelectedBtn("attendance")}
            className={`${
              selectedBtn == "attendance" ? "bg-blue-200" : "bg-gray-200"
            } text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
          >
            Attendance Record
          </div>
        </div>
      </div>

      {selectedBtn == "attendance" ? <ProfileAttendanceRecord /> : <></>}
    </>
  );
};

export default StudentProfile;
