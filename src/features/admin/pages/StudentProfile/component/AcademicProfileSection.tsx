import Heading from "../../../components/Heading";
import { PiGenderIntersexLight } from "react-icons/pi";
import { useState, useEffect } from "react";
import { StudentAcademicProfileWithUserType } from "../../../../../app/types/StudentType";
import { fetchStudentAcademicProfile } from "../../../api/api";

const AcademicProfileSection = ({ userId }: { userId: string }) => {
  const [academicProfile, setAcademicProfile] =
    useState<StudentAcademicProfileWithUserType | null>(null);

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
    <div>
      <Heading headingValue="Academic Profile">
        <></>
      </Heading>

      <div className="grid grid-cols-4 gap-5 border-b pb-5">
        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <PiGenderIntersexLight className="w-7 h-7 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">CLASS</div>
            <div className="text-lg font-medium text-gray-900">
              {academicProfile?.classId?.name}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <PiGenderIntersexLight className="w-7 h-7 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">SECTION</div>
            <div className="text-lg font-medium text-gray-900">
              {academicProfile?.classId.section}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <PiGenderIntersexLight className="w-7 h-7 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">ROLL NO</div>
            <div className="text-lg font-medium text-gray-900">
              {academicProfile?.roll}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicProfileSection;
