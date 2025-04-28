import { User, Calendar, Pencil, Trash } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import { useEffect, useState } from "react";
import { fetchStudyMaterialById, deleteStudyMaterial } from "../../api/api";
import { StudyMaterialType } from "../../types/types";
import { dateFormatter } from "../../../../app/utils/formatter";
import { ExternalLink, FileText } from "lucide-react";
import { useNavigate, useLocation, useOutletContext } from "react-router-dom";

const StudyMaterialsDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { classId }: { classId: string } = useOutletContext();
  const studyMaterialId = location.pathname.split("/")[5];

  const [studyMaterial, setStudyMaterial] = useState<StudyMaterialType>({
    _id: "",
    title: "",
    description: "",
    createdAt: "",
    fileUrl: "",
    link: "",
    viewers: [],
  });

  useEffect(() => {
    fetchAssignmentByIdHandler();
  }, [studyMaterialId]);

  const fetchAssignmentByIdHandler = async () => {
    const studyMaterial = await fetchStudyMaterialById(studyMaterialId);

    if (studyMaterial.success) {
      setStudyMaterial(studyMaterial.data.data);
    }
  };

  const deleteStudyMaterialHandler = async (id: string) => {
    const response = await deleteStudyMaterial(id)

    console.log(response, "ja ja ja")
    if(response.success){
      navigate(`/teacher/classes/${classId}/study-materials`)
    }
  }

  const breadcrumbItems = [
    { label: "Classes", href: `/teacher/classes` },
    { label: "Students", href: `/teacher/classes/dafdf/students` },
  ];

  return (
    <div className="p-5">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex">
        <div className="overflow-hidden w-8/12 pr-5">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-medium text-gray-700">
                {studyMaterial.title}
              </h2>
            </div>

            <div>
              <h5 className="text-gray-900">{studyMaterial.description}</h5>
            </div>

            {studyMaterial.fileUrl && (
              <div className="bg-white rounded overflow-hidden border w-6/12 mt-5">
                <div className="p-6">
                  <a
                    className="flex items-start justify-between"
                    href={studyMaterial.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex-1">
                      <h3 className="font-normal text-gray-700">
                        Click to view uploaded file
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        {/* {formatDate(pdf.date)} */}
                      </div>
                    </div>
                    <FileText className="w-5 h-5 text-gray-400" />
                  </a>

                  {/* <div className="flex gap-2 mt-6">
           <a
             href={studyMaterial.fileUrl}
             target="_blank"
             rel="noopener noreferrer"
             className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg transition-colors duration-200"
           >
             <Eye className="w-4 h-4" />
             <span className="text-sm font-medium">View</span>
           </a>

         </div> */}
                </div>
              </div>
            )}

            {studyMaterial.link && (
          <div className="bg-white rounded overflow-hidden border w-6/12 mt-5">
          <div className="p-6">
            <a className="flex items-start justify-between" href={studyMaterial.link}
                target="_blank"
                rel="noopener noreferrer">
              <div className="flex-1">
               
                <h3 className="font-normal text-gray-700">
                 View reference link
                </h3>
                <div className="flex items-center text-sm text-gray-500">
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400" />
            </a>
          </div>
          </div>
            )}

            <div className="flex mt-5 gap-5 justify-between">
              <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-2 text-green-500" />
                <span className="text-sm">
                  Created: {dateFormatter(studyMaterial.createdAt)}
                </span>
              </div>

            
              <div className="flex items-center text-gray-600 gap-2">
                <button
                  onClick={() => deleteStudyMaterialHandler(studyMaterial._id)}
                  className="flex items-center gap-2 te border-red-500 text-red-500 border-2 hover:bg-red-500 hover:text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
                >
                  <Trash size={16} />
                  <span>Delete</span>
                </button>

                <button
                  onClick={() =>
                    navigate(
                      `/teacher/classes/${classId}/study-materials/${studyMaterialId}/update`
                    )
                  }
                  className="flex items-center gap-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
                >
                  <Pencil size={16} />
                  <span>Edit</span>
                </button>
              </div>
           
            
            </div>
          </div>
        </div>

        <div className="border-l sticky flex-1 px-5 border-gray-200">
          <h2 className="text-2xl font-bold text-gray-700">Views</h2>

          {studyMaterial.viewers.map((viewer) => (
            <div className="rounded-xl border-2 w-full mt-5">
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <div className="bg-gray-100 p-3 rounded-full flex justify-center mr-3">
                      <User className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Student Name</p>
                      <p className="font-medium">{viewer.fullName}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyMaterialsDetails;
