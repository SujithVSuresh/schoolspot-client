import { Calendar, ExternalLink } from "lucide-react";
import { dateFormatter, timeFormatter } from "../../../../../app/utils/formatter";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchAssignmentById } from "../../../api/api";
import { fileType } from "../AssignmentDetails";


const AssignmentComponent = ({submissionTypeHandler}: {submissionTypeHandler: (file: fileType) => void}) => {
    const location = useLocation();
    const assignmentId = location.pathname.split("/")[5];
  
    const [assignmentData, setAssignmentData] = useState<{
      _id: string;
      title: string;
      submissionType: "file" | "link" | "text" | "";
      link: string;
      dueDate: string;
      description: string;
      createdAt: string;
    }>({
      _id: "",
      title: "",
      submissionType: "",
      link: "",
      dueDate: "",
      description: "",
      createdAt: "",
    });
  
    useEffect(() => {
          async function fetchAssignmentByIdHandler(assignmentId: string) {
      const response = await fetchAssignmentById(assignmentId);
  
      if (response.success) {
        setAssignmentData(response.data.data);
        submissionTypeHandler(response.data.data.submissionType);
      }
  
    }
      fetchAssignmentByIdHandler(assignmentId);
    }, [assignmentId]);
  

  return (
    <div className="w-7/12 mr-5">
    <div className="flex items-center gap-3 mb-4">
      <h2 className="text-2xl font-semibold text-primary">
        {assignmentData.title}
      </h2>
    </div>

    <div>
      <h5 className="text-gray-900 font-normal">
        {assignmentData.description}
      </h5>
    </div>

    {assignmentData.link && (
      <div className="mt-5">
        <a
          href={"adfsd"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <span className="font-mono text-sm text-blue-700">
            View content
          </span>
          <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-indigo-700" />
        </a>
      </div>
    )}

    <div className="flex mt-6 gap-5">
      <div className="flex items-center text-primaryText">
        <Calendar className="w-4 h-4 mr-2 text-primaryText" />
        <span className="text-sm">
          Due: {dateFormatter(assignmentData.dueDate)} -{" "}
          {timeFormatter(assignmentData.dueDate)}
        </span>
      </div>

      <div className="flex items-center text-primaryText">
        <Calendar className="w-4 h-4 mr-2 text-primaryText" />
        <span className="text-sm">
          Created: {dateFormatter(String(new Date()))}
        </span>
      </div>

      {/* <div className="flex items-center text-gray-600">
        <Calendar className="w-5 h-5 mr-2 text-green-500" />
        <span className="text-sm">Pending</span>
      </div> */}
    </div>
  </div>
  )
}

export default AssignmentComponent
