import { useEffect, useState } from "react";
import { getStudentProfile } from "../../api/api";
import { useParams } from "react-router-dom";
import { changeAccountStatus } from "../../api/api";
import { StudentProfileType } from "../../../../app/types/StudentType";
import AcademicProfileSection from "./component/AcademicProfileSection";
import ProfileSection from "./component/ProfileSection";
import { useLoading } from "../../../../app/hooks/useLoading";
import ProfileSkeleton from "./component/ProfileSkelton";
import NotFound from "../../../../app/components/NotFound";
import NavigateButton from "../../components/NavigateButton";
import { UserPen } from "lucide-react";

const StudentProfile = () => {
  const { id: userId } = useParams();

  const { isLoading, startLoading, stopLoading } = useLoading();

  const [student, setStudent] = useState<StudentProfileType | null>(null);

  useEffect(() => {
    const fetchStudentData = async (userId: string) => {
      startLoading();
      if (userId) {
        const response = await getStudentProfile(userId);
        if (response.success) {
          setStudent(response.data);
        } else {
          console.log(response.error);
        }
      }
      stopLoading();
    };

    fetchStudentData(userId as string);
  }, [userId]);

  const onBlockClick = async (
    userId: string,
    status: "active" | "blocked" | "deleted" | "inactive"
  ) => {
    const response = await changeAccountStatus(userId, status);

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
      {/* Academic Profile Section */}
      {isLoading ? (
        <ProfileSkeleton />
      ) : !student ? (
        <NotFound />
      ) : (
        <ProfileSection student={student} />
      )}

      {student && student.academicProfile && <AcademicProfileSection userId={userId as string} />}

      {student && (
        <div className="flex border-b mt-5 pb-5 border-gray-200">

          <NavigateButton label="Edit Profile" navlink={`/dashboard/students/profile/${userId}/update`} icon={UserPen}/>

          {student?.userId.status == "active" ? (
            <div
              onClick={() =>
                onBlockClick(student?.userId._id as string, "blocked")
              }
              className={`"bg-gray-200" text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
            >
              Block Account
            </div>
          ) : (
            <div
              onClick={() =>
                onBlockClick(student?.userId._id as string, "active")
              }
              className={`"bg-gray-200" text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
            >
              Unblock Account
            </div>
          )}
        </div>
      )}

    </>
  );
};

export default StudentProfile;
