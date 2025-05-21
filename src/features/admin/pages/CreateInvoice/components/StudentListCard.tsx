import { StudentUserProfileType } from '../../../../../app/types/UserType'

const StudentListCard = ({student, handleSelectStudent}: {student: StudentUserProfileType, handleSelectStudent: (e: React.ChangeEvent<HTMLInputElement>) => void}) => {
  return (
               <label
                  key={student._id}
                  className="flex items-center mb-2 justify-between gap-3 p-3 border rounded-md hover:bg-gray-50 cursor-pointer"
                >
                  <div className="flex items-center">
                    <img
                      src={student.profilePhoto}
                      alt={student.fullName}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="font-medium">{student.fullName}</p>
                      <p className="text-sm text-gray-500">
                        Roll No: {student.roll}
                      </p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    name="selectedStudents"
                    value={student?.user?._id}
                    className="accent-blue-600 w-4 h-4"
                    onChange={(e) => handleSelectStudent(e)}
                  />
                </label>
  )
}

export default StudentListCard
