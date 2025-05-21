import {
  UserPlus,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllTeachers } from "../../api/api";
import { TeacherDataResponseType } from "../../types/types";
import { useNavigate } from "react-router-dom";

function Teacher() {
  const navigate = useNavigate();

  const [teachers, setTeachers] = useState<TeacherDataResponseType[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  
  useEffect(() => {
    const fetchTeacherData = async () => {
      const response = await getAllTeachers(search);
      console.log(response.data)
      if (response.success) {
        setTeachers(response.data);
      } else {
        console.log(response.error);
      }
    };
  
    fetchTeacherData();
  }, [search]);
  
    const updateSearch = (value: string) => {
    if (!value && search) {
      searchParams.delete("search");
      setSearchParams(searchParams);
    } else {
      searchParams.set("page", "1")
      searchParams.set("search", value);
      setSearchParams(searchParams);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
          Teachers
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <input
          value={search}
          onChange={(e) => updateSearch(e.target.value)}
          type="text"
          placeholder="Search name..."
          className="w-full border p-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0"
        />

          </div>
          <button
            onClick={() => navigate("/dashboard/teachers/new")}
            className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
          >
            <UserPlus className="h-5 w-5" />
            Add
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {teachers.length > 0 &&
          teachers.map((teacher, index) => (
            <div key={index} className="bg-gray-100 rounded-xl p-4 relative" onClick={() => navigate(`/dashboard/teachers/profile/${teacher.user._id}`)}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={teacher.profilePhoto}
                    alt={teacher.fullName}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-gray-700 text-sm sm:text-base">
                      {teacher.fullName}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {teacher.subjectSpecialized}
                    </p>
                  </div>
                </div>
      
                
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
}

export default Teacher;
