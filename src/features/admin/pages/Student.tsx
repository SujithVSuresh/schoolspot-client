import {
  UserPlus,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getAllStudents } from "../api/api";
import { useSearchParams } from "react-router-dom";
import { StudentDataResponseType } from "../types/types";
import { changeAccountStatus } from "../api/api";
import { useNavigate } from "react-router-dom";

function Student() {
  const navigate = useNavigate();

  const [students, setStudents] = useState<StudentDataResponseType[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "";

  const [searchStudent, setSearchStudent] = useState(search);
  const [sortStudent, setSortStudent] = useState(sort);

  useEffect(() => {
    const handler = setTimeout(() => {
      updateQuery({
        search: searchStudent,
        page: 1,
        sort: sortStudent,
      });
    }, 500);

    return () => clearTimeout(handler);
  }, [searchStudent, setSearchParams, sortStudent]);

  useEffect(() => {
    const fetchUserData = async () => {
      let sortBy;
      let sortOrder;

      if (sort == "name-asc" || sort == "name-desc") {
        sortBy = "fullName";
      } else {
        sortBy = "";
      }

      if (sort == "name-asc") {
        sortOrder = "asc";
      } else if (sort == "name-desc") {
        sortOrder = "desc";
      } else {
        sortOrder = "";
      }

      const data = await getAllStudents(page, search, sortBy, sortOrder);

      if (data?.success) {
        setStudents(data.data.students);
        setTotalPages(data.data.totalPages);
      } else {
        console.log(data.error);
      }
    };

    fetchUserData();
  }, [page, search, sort]);

  const toggleMenu = (index: number) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const onBlockClick = async (
    userId: string,
    status: "active" | "blocked" | "deleted" | "inactive"
  ) => {
    const response = await changeAccountStatus(userId, status);
    console.log(response);

    if (response.success) {
      setOpenMenu(null);

      const updatedStudents = students.map((student) => {
        if (student.user._id === response.data.userId) {
          return {
            ...student,
            user: { ...student.user, status: response.data.status },
          };
        }
        return student;
      });

      setStudents(updatedStudents);
    }
  };

  const updateQuery = (newParams: Partial<Record<string, string | number>>) => {
    const query = {
      page: String(page),
      search,
      sort,
      ...newParams,
    };

    setSearchParams(query);
  };

  return (


        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ml-0 md:ml-4">
              Students
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <input
                  value={searchStudent}
                  onChange={(e) => setSearchStudent(e.target.value)}
                  type="text"
                  placeholder="Search..."
                  className="w-full sm:w-40 pl-4 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-transparent"
                />
                <select
                  value={sortStudent}
                  onChange={(e) => setSortStudent(e.target.value)}
                  className="w-full sm:w-40 pl-4 pr-8 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-transparent appearance-none bg-white"
                >
                  <option value="">Sort</option>
                  <option value="name-asc">Name - a to z</option>
                  <option value="name-desc">Name - z to a</option>
                </select>
                {/* <button
                  onClick={() =>
                    updateQuery({
                      search: searchStudent,
                      page: 1,
                      sort: sortStudent,
                    })
                  }
                  className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
                >
                  <Search className="h-5 w-5" />
                </button> */}
              </div>
              <button
                onClick={() => navigate("/add-student")}
                className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
              >
                <UserPlus className="h-5 w-5" />
                Add
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {students.length > 0 &&
              students.map((student, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-xl p-4 relative"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={student.profilePhoto}
                        alt={student.fullName}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-medium text-gray-700 text-sm sm:text-base">
                          {student.fullName}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500">
                          {student.class} {student.section}
                        </p>
                      </div>
                    </div>
                    {/* Menu Button */}
                    <button
                      className="text-gray-400 hover:text-gray-600 transition-colors relative"
                      onClick={() => toggleMenu(index)}
                    >
                      <MoreVertical className="h-5 w-5" />
                    </button>
                    {/* Dropdown Menu */}
                    {openMenu === index && (
                      <div className="absolute right-0 top-10 w-20 shadow-lg rounded-md border bg-white z-50">
                        {student.user.status === "active" && (
                          <button
                            onClick={() =>
                              onBlockClick(student?.user?._id, "blocked")
                            }
                            className="w-full py-2 text-sm text-red-600 hover:bg-gray-100 text-center"
                          >
                            Block
                          </button>
                        )}
                        {student.user.status === "blocked" && (
                          <button
                            onClick={() =>
                              onBlockClick(student?.user?._id, "active")
                            }
                            className="w-full py-2 text-sm text-red-600 hover:bg-gray-100 text-center"
                          >
                            Unblock
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-4 mt-4">
            {/* Previous Button */}
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

            {/* Page Indicator */}
            <span className="text-gray-700 font-medium text-xs sm:text-sm">
              Page {page} of {totalPages}
            </span>

            {/* Next Button */}
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
          </div>
        </div>
  
  );
}

export default Student;
