import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../../components/Heading";
import { ClassType } from "../../types/types";
import { getAllClasses } from "../../api/api";
import { ChevronRight } from "lucide-react";


const Classes = () => {
  const navigate = useNavigate();


  const [classes, setClasses] = useState<ClassType[] | []>([])


  useEffect(() => {
    const fetchAllClasses = async () => {
      const response = await getAllClasses()

      if(response.success){
        setClasses(response.data?.data)
      }
    }

    fetchAllClasses()

    
  }, [])



  return (
    <>
      <Heading headingValue="Classes">
        <div className="relative">
          <input
            // onChange={(e) => setSearchClass(e.target.value)}
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        <button
          onClick={() => navigate("/dashboard/classes/new")}
          className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
        >
          {/* <UserPlus className="h-5 w-5" /> */}
          Add Class
        </button>
      </Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 sm:gap-6">
       {classes.length > 0 && classes.map((value) => (
        <div className="bg-gray-100 rounded-xl p-4 relative" onClick={() => navigate(`/dashboard/classes/profile/${value._id}?section=students`)}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <div className="flex items-center">
                <h3 className="font-medium text-gray-700 text-sm sm:text-base">
                  {value.name} {value.section}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Strength: {value.strength}
              </p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors relative">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
       ))}


      </div>

      {/* <div className="flex items-center justify-center gap-2 sm:gap-4 mt-4">
  <button
    disabled={page === 1}
    onClick={() => updateQuery({ page: page - 1 })}
    className={`p-2 sm:px-4 sm:py-2 rounded-md text-white transition ${
      page === 1
        ? "bg-gray-300 cursor-not-allowed"
        : "bg-blue-500 hover:bg-blue-600"
    }`}
  >
    <ChevronLeft className="h-5 w-5" />
  </button>

  <span className="text-gray-700 font-medium text-xs sm:text-sm">
    Page {page} of {totalPages}
  </span>

  <button
    disabled={page === totalPages}
    onClick={() => updateQuery({ page: page + 1 })}
    className={`p-2 sm:px-4 sm:py-2 rounded-md text-white transition ${
      page === totalPages
        ? "bg-gray-300 cursor-not-allowed"
        : "bg-blue-500 hover:bg-blue-600"
    }`}
  >
    <ChevronRight className="h-5 w-5" />
  </button>
</div> */}
    </>
  );
};

export default Classes;
