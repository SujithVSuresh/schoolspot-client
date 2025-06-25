import { UserPlus } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import AddButton from "../../components/NavigateButton";
// import CustomProgress from "../../../../app/components/Loader/CustomProgress";
import UserListingCard from "../../components/UserListingCard";

const ClassStudents = () => {
  const students = useSelector((state: RootState) => state.studentListAdmin);
  const { classId }: { classId: string } = useOutletContext();

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ml-0">
          Students
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <AddButton
            icon={UserPlus}
            label="Add"
            navlink={`/dashboard/classes/${classId}/academicProfile/new`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {students &&
          students.map((student) => (
            <UserListingCard
              profilePhoto={student.studentId.profilePhoto}
              primaryText={student.studentId.fullName}
              secondaryText={`Roll no: ${student.roll}`}
              navlink={`/dashboard/students/profile/${student.userId}`}
            />
          ))}
      </div>
    </>
  );
};

export default ClassStudents;
