import { FileText, ExternalLink, Calendar } from "lucide-react"
import { dateFormatter } from "../../../../app/utils/formatter"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { fetchStudyMaterialById } from "../../api/api"
import { addStudyMaterialViewer } from "../../api/api"

const StudyMaterialDetails = () => {
  const location = useLocation()


  const materialId = location.pathname.split("/")[5]

  const [studyMaterial, setStudyMaterial] = useState<{
    _id: string,
    title: string,
    description: string,
    link: string,
    fileUrl: string,
    createdAt: string
  }>({
    _id: "",
    title: "",
    description: "",
    link: "",
    fileUrl: "",
    createdAt: ""
  })


  useEffect(() => {
    handleFetchStudyMaterials(materialId)
    handleAddViewer(materialId)

  }, [materialId])

  const handleAddViewer = async (materialId: string) => {
    const response = await addStudyMaterialViewer(materialId)
    console.log(response, "this is the response lalala")
  }

  const handleFetchStudyMaterials = async (materialId: string) => {

    const {success, data} = await fetchStudyMaterialById(materialId)

    if(success){
      setStudyMaterial({
        _id: data.data._id,
        title: data.data.title,
        description: data.data.description,
        link: data.data.link,
        fileUrl: data.data.fileUrl,
        createdAt: data.data.createdAt
      })      
    }

  }

  return (
    <div>
          <div className="flex">
      <div className="overflow-hidden w-10/12 pr-5">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-medium text-gray-700">
              {studyMaterial.title}
            </h2>
          </div>
          <div>
            <h5 className="text-gray-900">
              {studyMaterial.description}
            </h5>
          </div>

          {studyMaterial.fileUrl && (
       <div

       className="bg-white rounded overflow-hidden border w-6/12 mt-5"
     >
       <div className="p-6">
         <a className="flex items-start justify-between" href={studyMaterial.fileUrl}
             target="_blank"
             rel="noopener noreferrer">
           <div className="flex-1">
            
             <h3 className="font-normal text-gray-700">
              Click to view document
             </h3>
             <div className="flex items-center text-sm text-gray-500">
             </div>
           </div>
           <FileText className="w-5 h-5 text-gray-400" />
         </a>
       </div>
     </div>
          )}

{
  studyMaterial.link && (
    <div className="mt-5">
    <a
      href={"adfsd"}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2"
    >
      <span className="font-mono text-sm text-blue-700">
        {"http://localhost:5173/teacher/classes/2/study-materials/adfsd"}
      </span>
      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-indigo-700" />
    </a>
  </div>
  )
}


          <div className="flex mt-5 gap-5 justify-between">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-2 text-green-500" />
              <span className="text-sm">Created: {dateFormatter(String(new Date()))}</span>
            </div>
            <div className="flex items-center text-gray-600">
              {/* <button
                // onClick={handleEdit}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
              >
                <Pencil size={16} />
                <span>Edit</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="border-l sticky flex-1 px-5 border-gray-200">
        <h2 className="text-2xl font-bold text-gray-700">Views</h2>


 
      </div> */}
    </div>
    </div>
  )
}

export default StudyMaterialDetails
