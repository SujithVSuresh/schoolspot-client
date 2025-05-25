import { X, Users, ChevronRight } from "lucide-react";
import { Conversation } from "../../types/chatType";
import { dateFormatter } from "../../utils/formatter";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect, useState } from "react";
import { updateConversation } from "../../../features/teacher/api/api";

const ConversationDetails = ({
  conversation,
  handleViewGroupDetails
}: {
  conversation: Conversation;
  handleViewGroupDetails: () => void
}) => {
  const students = useSelector((state: RootState) => state.studentList);

  const [name, setName] = useState<string>("");
  const [participants, setParticipants] = useState<string[]>([]);

  console.log(participants, "parrrrr", students)
  useEffect(() => {
    setName(conversation.name as string);
    setParticipants(conversation?.participants);
  }, [conversation]);

  const handleGroupMember = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setParticipants((prev) => [...prev, e?.target.value]);
    } else {
      const filterIds = participants.filter(
        (studentId) => studentId !== e.target.value
      );
      setParticipants(filterIds);
    }
  };


  const handleGroupUpdate = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const response = await updateConversation(conversation._id, {
      name: name,
      participants: participants,
    });
    console.log(response);

    if (response.success) {
      console.log("updated successdfullyy");
    }
  };

  return (
    <div className="w-5/12 bg-white border-l transition-all duration-300 overflow-hidden">
      <div className="h-16 border-b flex items-center px-5">
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center">
            <h2 className="text-lg text-gray-800 font-semibold ml-1">
              Group Info
            </h2>
          </div>

          <X
            className="w-6 h-6 hover: cursor-pointer"
            onClick={() => handleViewGroupDetails()}
          />
        </div>
      </div>

      <div className="overflow-y-scroll max-h-screen pb-16">
        <div className="py-5 flex flex-col items-center justify-center gap-2">
          <div className="bg-gray-50 w-24 h-24 flex items-center justify-center rounded-full">
            <Users className="w-10 h-10 text-gray-600" />
          </div>
          <span className="text-lg font-medium text-gray-800">
            {conversation?.name}
          </span>
        </div>

        <div className="p-6 space-y-4 border-b">
          <div className="flex justify-between text-gray-600">
            <span className="font-medium text-sm">Members Count</span>
            <span className="text-gray-800 font-medium text-sm">
              {conversation?.participants?.length}
            </span>
          </div>

          {/* <div className="flex justify-between text-gray-600">
      <span className="font-medium text-sm">Created By</span>
      <span className="text-gray-800 font-medium text-sm">{conversation.createdBy}</span>
    </div> */}

          <div className="flex justify-between text-gray-600">
            <span className="font-medium text-sm">Created At</span>
            <span className="text-gray-800 font-medium text-sm">
              {dateFormatter(String(conversation?.createdAt))}
            </span>
          </div>

          <div className="flex justify-between hover:cursor-pointer text-gray-600">
            <span className="font-medium text-sm">Delete Group</span>
            <span className="font-medium text-sm">
              <ChevronRight className="w-5 h-5" />
            </span>
          </div>
        </div>
        <form
          className="max-w-md mx-auto p-4"
          onSubmit={(e) => handleGroupUpdate(e)}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => handleGroupMember(e)}
                    checked={participants.includes(student.user._id)}
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

export default ConversationDetails;
