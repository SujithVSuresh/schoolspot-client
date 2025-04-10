import { Outlet } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const SubjectDetails = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const urlParts = location.pathname.split("/")

  const subjectItems = [
    {
      name: "Assignments",
      links: "assignments"
    },
    {
      name: "Study Materials",
      links: "study-materials"
    },
    {
      name: "Chapters",
      links: "chapters"
    }
  ]


  return (
    <div className="w-full">
              <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 border inline-flex space-x-1">
            
            {subjectItems.map((item) => (
                          <button
                          onClick={() => navigate(`/student/subjects/sdf/${item.links}`)}
                          className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                            urlParts[4] === item.links
                              ? 'bg-indigo-600 text-white'
                              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                          }`}
                        >
                          {item.name}
                        </button>
            ))}

           

           
          </div>
        </div>
      <Outlet  context={{urlParts}}/>
    </div>
  )
}

export default SubjectDetails
