import { UserPlus } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllTeachers } from "../../api/api";
import { TeacherDataResponseType } from "../../types/types";
import NavigateButton from "../../components/NavigateButton";
import { Search } from "lucide-react";
import UserListingCard from "../../components/UserListingCard";
import { usePagenation } from "../../../../app/hooks/usePagenation";
import { useLoading } from "../../../../app/hooks/useLoading";
import Spinner from "../../../../app/components/Loader/Spinner";
import NotFound from "../../../../app/components/NotFound";

function Teacher() {
  const [teachers, setTeachers] = useState<TeacherDataResponseType[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const [searchInput, setSearchInput] = useState(search);

  const { totalPages, setTotalPages, page, limit, handlePrev, handleNext } =
    usePagenation();

  const { isLoading, startLoading, stopLoading } = useLoading();

  useEffect(() => {
    const fetchTeacherData = async () => {
      startLoading();
      const response = await getAllTeachers(page, limit, search);
      if (response.success) {
        setTeachers(response.data.data);
        setTotalPages(response.data.totalPages);
      } else {
        console.log(response.error);
      }
      stopLoading();
    };

    fetchTeacherData();
  }, [search, page]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (!searchInput && search) {
        searchParams.delete("search");
        setSearchParams(searchParams);
      } else if (searchInput !== search) {
        searchParams.set("page", "1");
        searchParams.set("search", searchInput);
        setSearchParams(searchParams);
      }
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [searchInput]);

  // const updateSearch = (value: string) => {
  //   if (!value && search) {
  //     searchParams.delete("search");
  //     setSearchParams(searchParams);
  //   } else {
  //     searchParams.set("page", "1");
  //     searchParams.set("search", value);
  //     setSearchParams(searchParams);
  //   }
  // };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
          Teachers
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="flex items-center w-full sm:w-72 border border-gray-300 rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-3 flex items-center justify-center">
                <Search className="w-4 h-4 text-gray-500" />
              </div>
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                type="text"
                placeholder="Search name..."
                className="w-full px-2 text-sm focus:outline-none"
              />
            </div>
          </div>

          <NavigateButton
            label="Add Teacher"
            navlink="/dashboard/teachers/new"
            icon={UserPlus}
          />
        </div>
      </div>

      {isLoading ? (
        <Spinner />
      ) : teachers.length == 0 ? (
        <NotFound />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {teachers.length > 0 &&
            teachers.map((teacher, index) => (
              <UserListingCard
                profilePhoto={teacher.profilePhoto}
                primaryText={teacher.fullName}
                secondaryText={teacher.subjectSpecialized}
                navlink={`/dashboard/teachers/profile/${teacher.user._id}`}
                key={index}
              />
            ))}
        </div>
      )}

      {!isLoading && teachers.length > 0 && (
        <div className="flex gap-2 justify-center mt-4 items-center">
          <button
            onClick={handlePrev}
            disabled={page === 1}
            className={`px-3 py-1 rounded ${
              page === 1
                ? "bg-secondary text-primaryText"
                : "bg-primary text-white"
            }`}
          >
            Prev
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={page === totalPages}
            className={`px-3 py-1 rounded ${
              page === totalPages
                ? "bg-secondary text-primaryText"
                : "bg-primary text-white"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}

export default Teacher;
