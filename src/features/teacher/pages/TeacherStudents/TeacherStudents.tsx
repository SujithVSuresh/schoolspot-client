import { useLocation } from "react-router-dom";
import StudentCard from "./components/StudentCard";
import Breadcrumb from "../../components/Breadcrumb";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";

const TeacherStudents = () => {
  const students = useSelector((state: RootState) => state.studentList);

  const location = useLocation();

  const classId = location.pathname.split("/")[3];

  const breadcrumbItems = [
    { label: "Classes", href: `/teacher/classes` },
    { label: "Students", href: `/teacher/classes/${classId}/students` },
  ];
  return (
    <div className="p-5">
      <Breadcrumb items={breadcrumbItems} />
      <div className="grid grid-cols-4 gap-4 py-5">
        {students.map((student, index) => (
          <StudentCard
            student={{
              fullName: student.studentId.fullName,
              roll: student.roll,
              profilePhoto: student.studentId.profilePhoto
            }}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TeacherStudents;
