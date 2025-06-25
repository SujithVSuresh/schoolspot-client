import { useState, useEffect } from "react";
import { StudentAcademicProfileWithUserType } from "../../../../../app/types/StudentType";
import { fetchStudentAcademicProfile } from "../../../api/api";
import DataCard from "./DataCard";
import { User } from "lucide-react";

const AcademicProfileSection = ({ userId }: { userId: string }) => {
  const [academicProfile, setAcademicProfile] = useState<StudentAcademicProfileWithUserType | null>(null);

  useEffect(() => {
    const fetchAcademicProfileHandler = async (userId: string) => {
      const response = await fetchStudentAcademicProfile(userId);

      if (response.success) {
        setAcademicProfile(response.data);
      }
    };

    fetchAcademicProfileHandler(userId);
  }, [userId]);
  return (
    <>
      <h1 className="text-xl font-medium text-gray-800 mt-5 mb-5">Academic Details</h1>

      <div className="grid grid-cols-4 gap-5 pb-5">
        <DataCard
          heading="CLASS"
          data={academicProfile?.classId?.name as string}
          Icon={User}
        />

        <DataCard
          heading="SECTION"
          data={academicProfile?.classId?.section as string}
          Icon={User}
        />

        <DataCard
          heading="ROLL"
          data={academicProfile?.roll as number}
          Icon={User}
        />
      </div>
    </>
  );
};

export default AcademicProfileSection;
