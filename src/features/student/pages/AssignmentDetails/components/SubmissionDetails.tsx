import { fileType } from "../AssignmentDetails";
import {
  Link as LinkIcon,
  FileText,
  Link,
  Upload,
  Clock,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchAssignmentSubmission } from "../../../api/api";
import { addAssignmentSubmission } from "../../../api/api";
import {
  dateFormatter,
  timeFormatter,
} from "../../../../../app/utils/formatter";

const SubmissionDetails = ({
  submissionType,
}: {
  submissionType: fileType;
}) => {
  const location = useLocation();
  const assignmentId = location.pathname.split("/")[5];

  const [fileData, setFileData] = useState<File | null>(null);
  const [linkData, setLinkData] = useState<string>("");
  const [textData, setTextData] = useState<string>("");

  const [submission, setSubmission] = useState<{
    _id: string;
    assignmentId: string;
    description: string;
    feedback: string;
    fileUrl: string;
    grade: string;
    link: string;
    status: "Pending" | "Submitted" | "Graded";
    submittedAt: string | null;
    createdAt: string;
  }>({
    _id: "",
    assignmentId: "",
    description: "",
    feedback: "",
    fileUrl: "",
    grade: "",
    link: "",
    status: "Pending",
    submittedAt: "",
    createdAt: "",
  });

  useEffect(() => {
    handleAssignmentSubmissionData();
  }, [assignmentId]);

  const handleAssignmentSubmissionData = async () => {
    const response = await fetchAssignmentSubmission(assignmentId);

    if (response.success) {
      setSubmission(response.data.data);
      if(response.data.data.fileUrl) {
        setFileData(response.data.data.fileUrl);
      }else if(response.data.data.link) {
        setLinkData(response.data.data.link);
    } else if(response.data.data.description) {
        setTextData(response.data.data.description);
    }
  }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Submitted":
        return "bg-blue-100 text-blue-800";
      case "Graded":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const assignmentSubmissionHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!fileData && !linkData && !textData) return;

    const data: { link?: string; description?: string } = {
      link: "",
      description: "",
    };

    if (submissionType === "link") {
      data.link = linkData;
    } else if (submissionType === "text") {
      data.description = textData;
    }

    const response = await addAssignmentSubmission(submission._id, data);

    if (response.success) {
      setSubmission(response.data.data);
    }
  };

  return (
    <div className="flex-1 border-l px-5">
      {/* <h2 className="text-2xl font-medium text-gray-700">Submission</h2> */}

      <div className="flex justify-center">
        <form onSubmit={assignmentSubmissionHandler} className="space-y-6 border p-8 w-full rounded-lg">
          {submissionType === "file" ? (
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Upload size={18} />
                File Upload
              </label>
              <input
                type="file"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (file) {
                    setFileData(file);
                  }
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          ) : submissionType === "link" ? (
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Link size={18} />
                Link
              </label>
              <input
                type="url"
                value={linkData}
                onChange={(e) => setLinkData(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 outline-none"
                placeholder="Enter URL"
              />
            </div>
          ) : submissionType === "text" ? (
            <div className="space-y-2 w-full">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <FileText size={18} />
                Text
              </label>
              <textarea
                value={textData}
                onChange={(e) => setTextData(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 outline-none"
                placeholder="Enter text"
              />
            </div>
          ) : (
            <div className="text-gray-500 text-sm">
              No submission type selected
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
        <div className="space-y-6">
          {/* Description */}
          {submission.description && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <FileText size={18} />
                <h3 className="text-sm font-medium">Text</h3>
              </div>
              <p className="text-gray-800">{submission.description}</p>
            </div>
          )}

          {/* Links Section */}
          <div className="space-y-3">
            {submission.link && (
              <div className="flex items-center gap-3">
                <LinkIcon size={18} className="text-blue-600" />
                <a
                  href={submission.link}
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Submission Link
                </a>
              </div>
            )}
            {submission.fileUrl && (
              <div className="flex items-center gap-3">
                <FileText size={18} className="text-blue-600" />
                <a
                  href={submission.fileUrl}
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Submission File
                </a>
              </div>
            )}
          </div>

          {/* Status and Grade */}
          <div className="flex flex-wrap gap-4">
            {submission.submittedAt && (
              <div
                className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                  submission.status
                )}`}
              >
                {submission.status}
              </div>
            )}

            {submission.grade && (
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-600" />
                <span className="font-medium">Mark: 7 / 10</span>
              </div>
            )}
          </div>

          {/* Submission Time */}
          {submission.submittedAt && (
            <div className="flex items-center gap-2 text-gray-600">
              <Clock size={18} />
              <span className="text-sm">
                {dateFormatter(submission.submittedAt)} at{" "}
                {timeFormatter(submission.submittedAt)}
              </span>
            </div>
          )}

          {/* Feedback */}
          {submission.feedback && (
            <div className="space-y-2 border-t pt-4 mt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <MessageSquare size={18} />
                <h3 className="text-sm font-medium">Feedback</h3>
              </div>
              <p className="text-gray-800 bg-gray-50 p-4 rounded-lg">
                {submission.feedback}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmissionDetails;
