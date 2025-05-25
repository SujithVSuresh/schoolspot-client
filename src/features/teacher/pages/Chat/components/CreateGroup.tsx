import { X } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../app/store";
import { useState } from "react";
import { createConversation } from "../../../api/api";
import { successToast } from "../../../../../app/utils/toastMessage";
import { Conversation } from "../../../../../app/types/chatType";


const CreateGroup = ({
  setIsCreateGroup,
  subjectId,
  setConversations,
}: {
  setIsCreateGroup: React.Dispatch<React.SetStateAction<boolean>>;
  subjectId: string;
  setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>
}) => {
  const students = useSelector((state: RootState) => state.studentList);

  const [groupName, setGroupName] = useState("");
  const [members, setMembers] = useState<string[]>([]);

  const handleAddMember = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setMembers((prev) => [...prev, e?.target.value]);
    } else {
      const filterIds = members.filter(
        (studentId) => studentId !== e.target.value
      );
      setMembers(filterIds);
    }
  };

  const handleCreateGroupSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const response = await createConversation({
      isGroup: true,
      name: groupName,
      participants: members,
      subjectId: subjectId,
    });

    if (response.success) {
      successToast("Group created succcessfully")
      setIsCreateGroup(false)
      setConversations((prev) => [response.data, ...prev])
      console.log(response.data, "group added successfully...");
    }
  };

  return (
    <div className="w-96 bg-white border-r transition-all duration-300 overflow-hidden">
      <div className="h-16 border-b flex items-center px-5">
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center">
            <h2 className="text-xl text-gray-800 font-bold ml-1">
              Create Group
            </h2>
          </div>

          <X
            className="w-6 h-6 hover: cursor-pointer"
            onClick={() => setIsCreateGroup(false)}
          />
        </div>
      </div>

      <div>
        <form
          className="max-w-md mx-auto p-4"
          onSubmit={(e) => handleCreateGroupSubmit(e)}
        >
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Group Name
          </label>
          <input
            type="text"
            id="name"
            // value={name}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          />

          <div className="mt-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-3"
            >
              Add Members
            </label>

            <div className="space-y-3 max-h-80 overflow-y-auto">
              {students.map((student) => (
                <label
                  key={student._id}
                  className="flex items-center justify-between gap-3 p-3 border rounded-md hover:bg-gray-50 cursor-pointer"
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
                    onChange={(e) => handleAddMember(e)}
                  />
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
