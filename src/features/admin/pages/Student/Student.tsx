import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllStudents } from "../../api/api";
import { useSearchParams } from "react-router-dom";
import { StudentDataResponseType } from "../../types/types";
import { changeAccountStatus } from "../../api/api";
import Heading from "../../components/Heading";
import { SlidersHorizontal } from "lucide-react";
import MenuModal from "./components/MenuModal";
import { textFormatter } from "../../../../app/utils/formatter";
import { useNavigate } from "react-router-dom";

function Student() {
  const navigate = useNavigate()
  const [students, setStudents] = useState<StudentDataResponseType[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const [openSideMenu, setOpenSideMenu] = useState(false);

  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "";
  const classfilter = searchParams.get("classFilter") || "";
  const statusFilter = searchParams.get("statusFilter") || "";

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
        setStudents(data.data.students);
        setTotalPages(data.data.totalPages);
      } else {
        console.log(data.error);
      }
    };

    fetchUserData();
  }, [page, search, sort, classfilter, statusFilter]);

  // const toggleMenu = (index: number) => {
  //   setOpenMenu(openMenu === index ? null : index);
  // };

  // const onBlockClick = async (
  //   userId: string,
  //   status: "active" | "blocked" | "deleted" | "inactive"
  // ) => {
  //   const response = await changeAccountStatus(userId, status);
  //   console.log(response);

  //   if (response.success) {
  //     setOpenMenu(null);

  //     const updatedStudents = students.map((student) => {
  //       if (student.user._id === response.data.userId) {
  //         return {
  //           ...student,
  //           user: { ...student.user, status: response.data.status },
  //         };
  //       }
  //       return student;
  //     });

  //     setStudents(updatedStudents);
  //   }
  // };

  const updatePage = (value: number) => {
    if (value) {
      searchParams.set("page", String(value));
      setSearchParams(searchParams);
    }
  };

  const closeSideMenu = () => {
    setOpenSideMenu(false);
  };

  const accountStatus = (status: "active" | "inactive" | "blocked" | "deleted") => {
    return (
      <span className={`${status == "active" ? "text-green-500" : "text-red-500"}`}>
        {textFormatter(status)}
      </span>
      
    )
  }

  return (
    <>
      {openSideMenu && <MenuModal closeSideMenu={closeSideMenu} />}

      <Heading headingValue="Students">
  
  <div className="bg-gray-200 p-3 rounded-full">
  <SlidersHorizontal 
        className="hover: cursor-pointer h-5 w-5"
        onClick={() => setOpenSideMenu(true)}
        />
  </div>
 
      </Heading>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {students.length > 0 &&
          students.map((student, index) => (
            <StudentCard
              student={student}
              user={student?.user}
              key={index}
              index={index}
              onBlockClick={onBlockClick}
              toggleMenu={toggleMenu}
              openMenu={openMenu}
            />
          ))}
      </div> */}

      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 h-12">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  NAME
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CLASS
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SECTION
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ROLL NO
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  STATUS
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={student.profilePhoto as string}
                      alt={student.fullName}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {student.fullName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.class}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.section}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.roll}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {accountStatus(student.user.status)}
                  </td>
         
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => navigate(`/dashboard/students/profile/${student.user._id}`)}
                      className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {students.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No students found.
            </p>
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
