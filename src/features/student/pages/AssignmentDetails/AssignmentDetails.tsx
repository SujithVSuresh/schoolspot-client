
import AssignmentComponent from "./components/AssignmentComponent";
import SubmissionDetails from "./components/SubmissionDetails";
import { useState } from "react";

export type fileType =  "file" | "link" | "text" | ""

const AssignmentDetails = () => {
  // const location = useLocation();
  // const assignmentId = location.pathname.split("/")[5];
  const [submissionType, setSubmissionType] = useState<fileType>("")

  const submissionTypeHandler = (type: fileType) => {
    setSubmissionType(type)
  }


  return (
    <div className="overflow-hidden min-h-screen flex">
      {/* <Breadcrumb items={breadcrumbItems} /> */}
      <AssignmentComponent submissionTypeHandler={submissionTypeHandler}/>
      <SubmissionDetails submissionType={submissionType}/>
     
    </div>
  );
};

export default AssignmentDetails;
