import Sidebar from "../components/Sidebar";
import { Search, UserPlus, MoreVertical } from "lucide-react";
import DashboardHeader from "../components/DashboardHeader";
import { useEffect, useState } from "react";
import { getAllStudents } from "../api/api";
// import { UserStoreType } from "../types/types";
import { useSearchParams } from "react-router-dom";
import { StudentDataResponseType } from "../types/types";



function Student() {

  const [students, setStudents] = useState<StudentDataResponseType[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();


  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getAllStudents(page, search);


      if (data?.success) {
        setStudents(data.data.students);
        setTotalPages(data.data.totalPages);
      } else {
        console.log(data.error);
      }
    };

    fetchUserData();


  }, [page, search]);

  const updateQuery = (newParams: Partial<Record<string, string | number>>) => {
    const query = { 
      page: String(page), 
      search,
      ...newParams 
    }



    setSearchParams(query);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 relative">


      {/* Sidebar */}
      <Sidebar />

      {/* Header */}
      <div className="flex-1">
        <DashboardHeader />

        <div className="pt-16 pl-28 pr-8">
          <div className="flex justify-between items-center my-5">
            <h1 className="text-2xl font-bold text-gray-800 ml-4">Students</h1>
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                value={search}
                onChange={(e) => updateQuery({ search: e.target.value, page: 1 })}
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <button
                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <UserPlus className="h-5 w-5" />
                Add
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {students.length > 0 &&
              students.map((student, index) => (
                <div key={index} className="bg-gray-100 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                    {/* <img
                      src={student.profile}
                      alt={student.name}
                      className="w-12 h-12 rounded-full object-cover"
                    /> */}
                    <div>
                      <h3 className="font-medium text-gray-700">
                        {student.fullName}
                      </h3>
                      <p className="text-sm text-gray-500">{student.class}</p>
                    </div>
                  </div>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
          </div>

          
        <div>
        <button disabled={page === 1} onClick={() => updateQuery({ page: page - 1 })}>
          Previous
        </button>
        <span> Page {page} of {totalPages} </span>
        <button disabled={page === totalPages} onClick={() => updateQuery({ page: page + 1 })}>
          Next
        </button>
      </div>
        </div>

      </div>
    </div>
  );
}

export default Student;
