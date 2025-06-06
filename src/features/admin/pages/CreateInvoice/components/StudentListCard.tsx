import { StudentAcademicProfileListType } from '../../../../../app/types/StudentType'

const StudentListCard = ({student, handleSelectStudent}: {student: StudentAcademicProfileListType, handleSelectStudent: (e: React.ChangeEvent<HTMLInputElement>) => void}) => {
  return (
               <label
                  key={student._id}
                  className="flex items-center mb-2 justify-between gap-3 p-3 border rounded-md hover:bg-gray-50 cursor-pointer"
                >
                  <div className="flex items-center">
                    <img
                      src={student.studentId.profilePhoto}
                      alt={student.studentId.fullName}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="font-medium">{student.studentId.fullName}</p>
                      <p className="text-sm text-gray-500">
                        Roll No: {student.roll}
                      </p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    name="selectedStudents"
                    value={student?.userId}
                    className="accent-blue-600 w-4 h-4"
                    onChange={(e) => handleSelectStudent(e)}
                  />
                </label>
  )
}

export default StudentListCard
