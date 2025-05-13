import { X } from "lucide-react";

const CreateGroup = ({
  setIsCreateGroup
}: {
  setIsCreateGroup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="w-96 bg-white border-r transition-all duration-300 overflow-hidden">
      <div className="h-16 border-b flex items-center px-5">
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center">
            <h2 className="text-xl text-gray-800 font-bold ml-1">
              Create Group
            </h2>
          </div>

          <X className="w-6 h-6 hover: cursor-pointer" onClick={() => setIsCreateGroup(false)}/>
        </div>
      </div>

      <div>
          <form  className="max-w-md mx-auto p-4">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
        Group Name
      </label>
      <input
        type="text"
        id="name"
        // value={name}
        // onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
      />

<div className="mt-5">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
        Add Members
      </label>

</div>

      {/* <button
        type="submit"
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Submit
      </button> */}
    </form>
      </div>
    </div>
  );
};

export default CreateGroup;
