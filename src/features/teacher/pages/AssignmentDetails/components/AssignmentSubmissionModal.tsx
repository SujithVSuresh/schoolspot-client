import React, { useEffect, useState } from "react";
import { X, Save } from "lucide-react";
import { AssignmentSubmissionType } from "../../../types/types";

interface AssignmentModalProps {
  submission: AssignmentSubmissionType;
  isOpen: boolean;
  onClose: () => void;
  onSaveGrade?: (grade: string, feedback: string) => void;
}

export default function AssignmentSubmissionModal({
  submission,
  isOpen,
  onClose,
  onSaveGrade,
}: AssignmentModalProps) {
  const [gradeInput, setGradeInput] = useState("");
  const [feedbackInput, setFeedbackInput] = useState("");

  useEffect(() => {
    setGradeInput(submission?.grade || "");
    setFeedbackInput(submission?.feedback || "");
  }, [submission?.grade, submission?.feedback]);

  if (!isOpen) return null;

  const handleGradeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= 0 && Number(value) <= 10)) {
      setGradeInput(value);
    }
  };

  const handleSave = () => {
    if (onSaveGrade) {
      onSaveGrade(gradeInput, feedbackInput);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl relative">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">
            {submission.student.fullName}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {submission.description && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Description
                </h3>
                <p className="text-gray-900 bg-gray-50 p-3 rounded-md min-h-[100px]">
                  {submission.description}
                </p>
              </div>
            )}

            {(submission.link || submission.fileUrl) && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Attachments
                </h3>
                <div className="space-y-2">
                  {submission.link && (
                    <a
                      href={submission.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      View Submission Link
                    </a>
                  )}
                  {submission.fileUrl && (
                    <a
                      href={submission.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      View Attached File
                    </a>
                  )}
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Status
                </h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {submission.status}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Grade (out of 10)
                </h3>
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={gradeInput}
                  onChange={handleGradeChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter grade (0-10)"
                />
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Feedback
                </h3>
                <textarea
                  value={feedbackInput}
                  onChange={(e) => setFeedbackInput(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                  placeholder="Enter feedback for the student"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 border-t border-gray-200 pt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Save size={16} className="mr-2" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
