import { useEffect, useState } from "react";
import ProfileAttendanceRecord from "./component/ProfileAttendanceRecord";
import { getStudentProfile } from "../../api/api";
import { useParams } from "react-router-dom";
import { RiParentLine } from "react-icons/ri";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { IoPersonOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { GrStatusInfo } from "react-icons/gr";
import { PiGenderIntersexLight } from "react-icons/pi";
import { changeAccountStatus } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { StudentProfileType } from "../../../../app/types/StudentType";
import AcademicProfileSection from "./component/AcademicProfileSection";

const StudentProfile = () => {
  const navigate = useNavigate();
  const { id: userId } = useParams();

  const [selectedBtn, setSelectedBtn] = useState("students");

  const [student, setStudent] = useState<StudentProfileType | null>(null);

  console.log(student, "kriiiiiii");
  useEffect(() => {
    const fetchStudentData = async (userId: string) => {
      if (userId) {
        const response = await getStudentProfile(userId);
        console.log(response, userId, "student profileeeeeee");
        if (response.success) {
          setStudent(response.data);
        } else {
          console.log(response.error);
        }
      }
    };

    fetchStudentData(userId as string);
  }, [userId]);

  const onBlockClick = async (
    userId: string,
    status: "active" | "blocked" | "deleted" | "inactive"
  ) => {
    const response = await changeAccountStatus(userId, status);
    console.log(response);

    if (response.success) {
      if (response.data.status == "blocked") {
        statusUpdationHandler("blocked");
      } else {
        statusUpdationHandler("active");
      }
    }
  };

  const statusUpdationHandler = (
    status: "active" | "blocked" | "deleted" | "inactive"
  ) => {
    if (student?.userId) {
      setStudent({
        ...student,
        userId: {
          ...student.userId,
          status: status as "active" | "inactive",
        },
      });
    }
  };

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

      <div className="grid grid-cols-1 border-b pb-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white rounded-2xl shadow-sm h-auto flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <IoPersonOutline className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">NAME</div>
            <div className="text-lg font-medium text-gray-900">
              {student?.fullName}
            </div>
          </div>
        </div>

        {/* <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <SiGoogleclassroom className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">Class</div>
            <div className="text-lg font-medium text-gray-900">
              {student?.class} {student?.section}
            </div>
          </div>
        </div> */}

        {/* <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <GoNumber className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">Roll No</div>
            <div className="text-lg font-medium text-gray-900">
              {student?.roll}
            </div>
          </div>
        </div> */}

        <div className="bg-white rounded-2xl shadow-sm pr-5 flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <MdOutlineEmail className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="text-xs text-gray-500 font-medium">EMAIL</div>
            <div className="text-lg font-medium text-gray-900 truncate overflow-hidden whitespace-nowrap">
              {student?.userId?.email}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <LiaBirthdayCakeSolid className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">DOB</div>
            <div className="text-lg font-medium text-gray-900">
              {student?.dob.slice(0, 10)}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <RiParentLine className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">
              FATHER MOTHER
            </div>
            <div className="text-lg font-medium text-gray-900">
              {student?.fatherName}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <RiParentLine className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">MOTHER NAME</div>
            <div className="text-lg font-meedium text-gray-900">
              {student?.motherName}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm pr-5 flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <MdOutlineEmail className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="flex flex-col min-w-0">
            {" "}
            {/* min-w-0 allows child truncation */}
            <div className="text-xs text-gray-500 font-medium">
              PARENT EMAIL
            </div>
            <div className="text-lg font-medium text-gray-900 truncate overflow-hidden whitespace-nowrap">
              {student?.parentEmailAddress}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <BsTelephone className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">
              PARENT CONTACT
            </div>
            <div className="text-lg font-medium text-gray-900">
              {student?.parentContactNumber}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <BsTelephone className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">
              ADMISSION NO
            </div>
            <div className="text-lg font-medium text-gray-900">
              {student?.admissionNo}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <PiGenderIntersexLight className="w-7 h-7 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">GENDER</div>
            <div className="text-lg font-medium text-gray-900">
              {student?.gender}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <GrStatusInfo className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">STATUS</div>
            <div className="text-lg font-medium text-gray-900">
              {student?.userId?.status}
            </div>
          </div>
        </div>
      </div>

      {/* Academic Profile Section */}

      {student?.academicProfile && <AcademicProfileSection userId={userId as string} />} 

      <div className="flex border-b mt-5 pb-5 border-gray-200">
        {/* <div
          onClick={() => setSelectedBtn("attendance")}
          className={`${
            selectedBtn == "attendance" ? "bg-blue-200" : "bg-gray-200"
          } text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
        >
          Attendance Record
        </div> */}

        {/* <div
          onClick={() => setSelectedBtn("attendance")}
          className={`${
            selectedBtn == "exam" ? "bg-blue-200" : "bg-gray-200"
          } text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
        >
          Exam Results
        </div> */}

        <div
          onClick={() =>
            navigate(
              `/dashboard/students/profile/${student?.userId._id}/update`
            )
          }
          className={`${
            selectedBtn == "exam" ? "bg-blue-200" : "bg-gray-200"
          } text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
        >
          Edit Profile
        </div>

        {student?.userId.status == "active" ? (
          <div
            onClick={() =>
              onBlockClick(student?.userId._id as string, "blocked")
            }
            className={`${
              selectedBtn == "exam" ? "bg-blue-200" : "bg-gray-200"
            } text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
          >
            Block Account
          </div>
        ) : (
          <div
            onClick={() =>
              onBlockClick(student?.userId._id as string, "active")
            }
            className={`${
              selectedBtn == "exam" ? "bg-blue-200" : "bg-gray-200"
            } text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
          >
            Unblock Account
          </div>
        )}
      </div>

      {selectedBtn == "attendance" ? <ProfileAttendanceRecord /> : <></>}
    </>
  );
};

export default StudentProfile;
