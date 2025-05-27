import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";
import { createLeaveLetter } from "../../api/api";
import { errorToast, successToast } from "../../../../app/utils/toastMessage";

const CreateLeaveLetter = () => {
  const navigate = useNavigate();

  const { classId } = useOutletContext<{classId: string}>();

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");

  const leaveLetterSubmissionHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if(!fromDate || !toDate || !reason){
        return
    }
    const response = await createLeaveLetter({
      fromDate,
      toDate,
      reason,
      classId,
    });

    if (response.success) {
      successToast("Leave letter submitted successfully");
      navigate('/student/attendance')

    }else{
      console.log(response)
      errorToast(response?.error?.message);
      
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form
        onSubmit={(e) => leaveLetterSubmissionHandler(e)}
        className="mb-8 w-6/12 bg-white p-6 rounded-lg border"
      >
        <h2 className="text-xl mb-5 font-bold text-gray-700 text-center">
          Add Leave Letter
        </h2>

        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              onChange={(e) => setFromDate(e.target.value)}
              value={fromDate}
              type="date"
              name="startDate"
              className="border p-2 rounded"
              required
            />
            <input
              onChange={(e) => setToDate(e.target.value)}
              value={toDate}
              type="date"
              name="endDate"
              className="border p-2 rounded"
              required
            />
          </div>

          <textarea
            onChange={(e) => setReason(e.target.value)}
            value={reason}
            name="reason"
            placeholder="Reason for leave"
            className="border p-2 rounded h-24"
            required
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => navigate("/student/attendance")}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateLeaveLetter;
