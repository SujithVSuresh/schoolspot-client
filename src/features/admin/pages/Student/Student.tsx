import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllStudents } from "../../api/api";
import { useSearchParams } from "react-router-dom";
import { StudentDataResponseType } from "../../types/types";
import { changeAccountStatus } from "../../api/api";
import { useNavigate } from "react-router-dom";
import Heading from "../../components/Heading";
import StudentCard from "./components/StudentCard";
import { AlignJustify } from "lucide-react";
import MenuModal from "./modal/MenuModal";

function Student() {
  const navigate = useNavigate();

  const [students, setStudents] = useState<StudentDataResponseType[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "";
  const classfilter = searchParams.get("classfilter") || null

  useEffect(() => {
    const fetchUserData = async () => {
      let sortBy = "";
      let sortOrder = "";

      if (sort) {
        const sortValue = sort.split("-");
        sortBy = sortValue[0] == "name" ? "fullName" : "";
        sortOrder = sortValue[1] == "asc" || sortValue[1] == "desc" ? sortValue[1] : "";
      }

      const data = await getAllStudents(page, search, sortBy, sortOrder, classfilter as string);

      if (data?.success) {
        setStudents(data.data.students);
        setTotalPages(data.data.totalPages);
      } else {
        console.log(data.error);
      }
    };

    fetchUserData();
  }, [page, search, sort, classfilter]);

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



  const updatePage = (value: number) => {
    console.log(value, "this is the value");
    if (value) {
      searchParams.set("page", String(value));
      setSearchParams(searchParams);
    }
  };

  return (
    <>
    <MenuModal />
      <Heading headingValue="Students">


<AlignJustify />
      </Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
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
