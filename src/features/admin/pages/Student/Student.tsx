import { ChevronLeft, ChevronRight, UserPlus } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllStudents } from "../../api/api";
import { useSearchParams } from "react-router-dom";
import Heading from "../../components/Heading";
import { SlidersHorizontal } from "lucide-react";
import MenuModal from "./components/MenuModal";
import TableItem from "./components/TableItem";
import { useNavigate } from "react-router-dom";
import { StudentListType } from "../../../../app/types/StudentType";

function Student() {
  const navigate = useNavigate();
  const [students, setStudents] = useState<StudentListType[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const [openSideMenu, setOpenSideMenu] = useState(false);

  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "";
  const classfilter = searchParams.get("classFilter") || "";
  const statusFilter = searchParams.get("statusFilter") || "";

  console.log(students, "hhhhhhh")

  useEffect(() => {
    const fetchUserData = async () => {
      let sortBy = "";
      let sortOrder = "";

      if (sort) {
        const sortValue = sort.split("-");
        sortBy = sortValue[0] == "name" ? "fullName" : "";
        sortOrder =
          sortValue[1] == "asc" || sortValue[1] == "desc" ? sortValue[1] : "";
      }

      const data = await getAllStudents(
        page,
        search,
        sortBy,
        sortOrder,
        classfilter,
        statusFilter
      );

      if (data?.success) {
        console.log(data, "students data");
        setStudents(data.data.students);
        setTotalPages(data.data.totalPages);
      } else {
        console.log(data.error);
      }
    };

    fetchUserData();
  }, [page, search, sort, classfilter, statusFilter]);

  const updatePage = (value: number) => {
    if (value) {
      searchParams.set("page", String(value));
      setSearchParams(searchParams);
    }
  };

  const closeSideMenu = () => {
    setOpenSideMenu(false);
  };

  return (
    <>
      {openSideMenu && <MenuModal closeSideMenu={closeSideMenu} />}

      <Heading headingValue="Students">
        <button
          onClick={() => navigate(`/dashboard/students/new`)}
          className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
        >
          <UserPlus className="h-5 w-5" />
          Add
        </button>
        <div className="bg-gray-200 p-3 rounded-full">
          <SlidersHorizontal
            className="hover: cursor-pointer h-5 w-5"
            onClick={() => setOpenSideMenu(true)}
          />
        </div>
      </Heading>

      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 h-12">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  NAME
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ADMISSION NO
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  EMAIL
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CONTACT
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  STATUS
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {students.map((student) => (
                <TableItem student={student} />
              ))}
            </tbody>
          </table>
        </div>

        {students.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No students found.</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center gap-2 sm:gap-4 mt-4">
        <button
          disabled={page === 1}
          onClick={() => updatePage(page - 1)}
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
          onClick={() => updatePage(page + 1)}
          className={`p-2 sm:px-4 sm:py-2 rounded-md text-white transition ${
            page === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </>
  );
}

export default Student;
