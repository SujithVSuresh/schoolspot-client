import DataCard from "./DataCard";
import { User } from "lucide-react";
import { StudentProfileType } from "../../../../../app/types/StudentType";

const ProfileSection = ({student}: {student: StudentProfileType}) => {

  return (
    <div>
      <div className="w-full p-10 flex justify-center">
        <div className="w-52 h-56">
          <img
            className="rounded-lg w-full h-full object-cover border"
            src={student?.profilePhoto as string}
            alt=""
          />
        </div>
      </div>

      <div className="grid grid-cols-1 pb-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <DataCard
          heading="NAME"
          data={student?.fullName as string}
          Icon={User}
        />

        <DataCard
          heading="EMAIL"
          data={student?.userId?.email as string}
          Icon={User}
        />

        <DataCard
          heading="DOB"
          data={student?.dob.slice(0, 10) as string}
          Icon={User}
        />

        <DataCard
          heading="FATHER"
          data={student?.fatherName as string}
          Icon={User}
        />

        <DataCard
          heading="MOTHER"
          data={student?.motherName as string}
          Icon={User}
        />

        <DataCard
          heading="PARENT EMAIL"
          data={student?.parentEmailAddress as string}
          Icon={User}
        />

        <DataCard
          heading="PARENT PHONE"
          data={student?.parentContactNumber as string}
          Icon={User}
        />

        <DataCard
          heading="ADMISSION NO"
          data={student?.admissionNo as string}
          Icon={User}
        />

        <DataCard
          heading="GENDER"
          data={student?.gender as string}
          Icon={User}
        />

        <DataCard
          heading="STATUS"
          data={student?.userId?.status as string}
          Icon={User}
        />
      </div>
    </div>
  );
};

export default ProfileSection;
