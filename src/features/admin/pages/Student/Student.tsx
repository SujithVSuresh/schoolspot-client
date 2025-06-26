import { ChevronLeft, ChevronRight, UserPlus } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { getAllStudents } from "../../api/api";
import { useSearchParams } from "react-router-dom";
import Heading from "../../components/Heading";
import MenuModal from "./components/MenuModal";
import TableItem from "./components/TableItem";
import { StudentListType } from "../../../../app/types/StudentType";
import AddButton from "../../components/NavigateButton";
import { useLoading } from "../../../../app/hooks/useLoading";
import Spinner from "../../../../app/components/Loader/Spinner";
import NotFound from "../../../../app/components/NotFound";

function Student() {
  const { isLoading, startLoading, stopLoading } = useLoading();

  const [students, setStudents] = useState<StudentListType[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "";
  const classfilter = searchParams.get("classFilter") || "";
  const statusFilter = searchParams.get("statusFilter") || "";

  const [searchInput, setSearchInput] = useState(search);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  // Debounced Search Update
  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      searchParams.set("search", searchInput);
      searchParams.set("page", "1"); // Reset to first page
      setSearchParams(searchParams);
    }, 500);

    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, [searchInput]);

  useEffect(() => {
    const fetchUserData = async () => {
      startLoading();
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
      stopLoading();
    };

    fetchUserData();
  }, [page, search, sort, classfilter, statusFilter]);

  const updatePage = (value: number) => {
    if (value) {
      searchParams.set("page", String(value));
      setSearchParams(searchParams);
    }
  };

  return (
    <>
      <Heading headingValue="Students">
        <AddButton
          icon={UserPlus}
          label={"Add Student"}
          navlink="/dashboard/students/new"
        />
      </Heading>

      <div className="flex gap-5">
        <div className="w-full">
          <div className="w-full flex justify-end">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search students..."
            className="mb-4 px-4 py-2 border-2 rounded max-w-sm"
          />
          </div>

          {isLoading ? (
            <Spinner />
          ) : students.length === 0 ? (
            <NotFound />
          ) : (
            <div className="bg-white w-full rounded-lg border-2 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-secondary h-12">
                      <th className="px-6 py-3"></th>
                      <th className="px-6 py-3 text-left text-xs font-semibold">NAME</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold">ADMISSION NO</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold">EMAIL</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold">CONTACT</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold">STATUS</th>
                      <th className="px-6 py-3 text-right text-xs font-semibold"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {students.map((student, index) => (
                      <TableItem key={index} student={student} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ⏮ Pagination */}
          {students.length > 0 && !isLoading && (
            <div className="flex items-center justify-center gap-2 sm:gap-4 mt-4">
              <button
                disabled={page === 1}
                onClick={() => updatePage(page - 1)}
                className={`p-2 sm:px-4 sm:py-2 rounded-md text-white transition ${
                  page === 1
                    ? "bg-secondary cursor-not-allowed"
                    : "bg-primary hover:bg-primary"
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
                    ? "bg-secondary cursor-not-allowed"
                    : "bg-primary hover:bg-secondary"
                }`}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
        <MenuModal />
      </div>
    </>
  );
}

export default Student;
