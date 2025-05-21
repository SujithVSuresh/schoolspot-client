import { useSelector } from "react-redux";
import { RootState } from "../../../../../app/store";
import StudentListCard from "./StudentListCard";
import { StudentUserProfileType } from "../../../../../app/types/UserType";

const StudentList = ({selectedStudents, setSelectedStudents}: {selectedStudents: string[], setSelectedStudents: React.Dispatch<React.SetStateAction<string[]>>}) => {
  const students = useSelector((state: RootState) => state.studentListAdmin);


    const handleSelectStudent = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedStudents((prev) => [...prev, e?.target.value]);
    } else {
      const filterIds = selectedStudents.filter(
        (studentId) => studentId !== e.target.value
      );
      setSelectedStudents(filterIds);
    }
  };

  return (
    <div className="w-full rounded-lg overflow-y-auto max-h-96">
      {students.map((student: StudentUserProfileType) => (
          <StudentListCard student={student} handleSelectStudent={handleSelectStudent}/>
      ))}
    </div>
  );
};

export default StudentList;
