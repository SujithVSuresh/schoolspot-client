import Breadcrumb from "../../components/Breadcrumb";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studyMaterialValidationSchema } from "../../validation/formValidation";
import { useOutletContext, useLocation } from "react-router-dom";
import { AddStudyMaterialType } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { fetchStudyMaterialById, updateStudyMaterial } from "../../api/api";
import { useEffect, useState } from "react";
import { FileText } from "lucide-react";

const UpdateStudyMaterial = () => {
    const location = useLocation()
  const navigate = useNavigate();
  const { subjectId, classId }: { subjectId: string; classId: string } = useOutletContext();
  const studyMaterialId = location.pathname.split("/")[5]

  const [studyMaterialPartials, setStudyMaterialPartials] = useState<{
    _id: string,
    fileUrl: string
  } | null>(null)

  const breadcrumbItems = [
    { label: "Classes", href: `/teacher/classes` },
    { label: "Assignments", href: `/teacher/classes/asdf/assignments` },
    { label: "Add", href: `/teacher/classes/asfd/assignments/add` },
  ];

  useEffect(() => {
    const studyMaterialHandler = async () => {
        const response = await  fetchStudyMaterialById(studyMaterialId)
        if(response.success){
            setValue("title", response.data.data.title)
            setValue("description", response.data.data.description)
            setValue("link", response.data.data.link)
            setStudyMaterialPartials({
                _id: response.data.data._id, 
                fileUrl: response.data.data.fileUrl
            })
        }
    }

    studyMaterialHandler()
  }, [studyMaterialId])

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(studyMaterialValidationSchema),
  });

  const onSubmit = async (data: AddStudyMaterialType) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("subjectId", subjectId)
    formData.append("classId", classId)
  
    if (data.link) {
      formData.append("link", data.link);
    }
  
    if (data.fileMaterial && data.fileMaterial.length > 0) {
      formData.append("fileMaterial", data.fileMaterial[0]);
    }


    const response = await updateStudyMaterial(formData, studyMaterialId)

    if(response.success){
      console.log(response, "response shuu")
      navigate(`/teacher/classes/${classId}/study-materials/`)
    }
  };

  return (
    <div className="p-5">
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex justify-center">
        <form
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 w-5/12 border p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold text-gray-700 text-center">
            Update Study Material
          </h2>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                {...register("title")}
                type="text"
                id="title"
                name="title"
                placeholder="Enter assignment title"
                className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
              />
              {errors.title && (
                <span className="text-red-500 text-sm">
                  {errors.title.message}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                {...register("description")}
                id="description"
                name="description"
                rows={4}
                placeholder="Enter assignment description"
                className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200"
              />
              {errors.description && (
                <span className="text-red-500 text-sm">
                  {errors.description.message}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="link"
                className="block text-sm font-medium text-gray-700"
              >
                Link
              </label>
              <input
                {...register("link")}
                type="url"
                id="link"
                name="link"
                placeholder="https://example.com/resource"
                className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
              />
              {errors.link && (
                <span className="text-red-500 text-sm">
                  {errors.link.message}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="fileMaterial"
                className="block text-sm font-medium text-gray-700"
              >
                Upload File (optional)
              </label>
              <input
                {...register("fileMaterial")}
                type="file"
                id="fileMaterial"
                name="fileMaterial"
                accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                className="mt-1 block w-full px-4 py-2 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
              />
              {errors.fileMaterial && (
                <span className="text-red-500 text-sm">
                  {errors.fileMaterial.message}
                </span>
              )}
            </div>

            {studyMaterialPartials?.fileUrl && (
       <div

       className="bg-white rounded overflow-hidden border w-full mt-5"
     >
       <div className="p-6">
         <a className="flex items-start justify-between" href={studyMaterialPartials.fileUrl}
             target="_blank"
             rel="noopener noreferrer">
           <div className="flex-1">
            
             <h3 className="font-normal text-gray-700">
              Click to view previously uploaded file
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
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out shadow-sm hover:shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudyMaterial;
