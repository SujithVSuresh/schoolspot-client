import { UserPlus, ChevronRight } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import AddButton from "../../components/AddButton";
// import CustomProgress from "../../../../app/components/Loader/CustomProgress";

const ClassStudents = () => {
  const students = useSelector((state: RootState) => state.studentListAdmin);
  console.log(students, "shooo")
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
            <div className="bg-secondary rounded-xl p-4 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={student.studentId.profilePhoto as string}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium mb-1 text-primaryText text-sm sm:text-base">
                      {student.studentId.fullName}
                    </h3>
                    <p className="text-xs sm:text-sm text-secondaryText">
                      Roll no: {student.roll}
                    </p>
                  </div>
                </div>
                {/* Menu Button */}
                <button
        className="text-gray-400 hover:text-gray-600 transition-colors relative"

      >
        <ChevronRight className="h-5 w-5"/>
      </button>
                {/* Dropdown Menu */}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ClassStudents;
