import { useEffect, useState } from "react";
import { fetchAcademicYears, updateAcademicYear } from "../../../api/api";
import { AcademicYearType } from "../../../types/types";
import loadingGif from "../../../../../assets/images/loading.webp";
import toast from "react-hot-toast";

const AcademicYear = () => {
  const [academicYear, setAcademicYear] = useState<AcademicYearType[]>([]);
  const [activeAcademicYear, setActiveAcademicYear] =
    useState<AcademicYearType | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAcademicYearsHandler();
  }, []);

  const fetchAcademicYearsHandler = async () => {
    const response = await fetchAcademicYears();
    if (response.success) {
      setAcademicYear(response.data);
      const activeAcademicYearData = response.data.find(
        (item: AcademicYearType) => item.isActive === true
      );

      if (activeAcademicYearData) {
        setActiveAcademicYear(activeAcademicYearData);
      }
    }
  };

  const updateAcademicYearStatusHandler = async () => {
    setLoading(true);
    const response = await updateAcademicYear(
      activeAcademicYear?._id as string
    );

    if (response.success) {
      setTimeout(() => {
        setLoading(false);
        setActiveAcademicYear(response.data);
        toast("Academic year updated successfully.", {
          duration: 8000,
          position: "bottom-right",
          style: {
            backgroundColor: "#E7FEE2",
            border: "2px, solid, #16A34A",
            minWidth: "400px",
            color: "black",
          },
        });
      }, 1000);
    } else {
      setTimeout(() => {
        setLoading(false);
        toast(response.error, {
          duration: 8000,
          position: "bottom-right",
          style: {
            backgroundColor: "#FEE2E2",
            border: "2px, solid, #DC2626",
            minWidth: "300px",
            color: "black",
          },
        });
      }, 1000);
    }
  };

  return (
    <div className="pt-20 pl-28 pr-8">
      <h1 className="text-xl font-medium text-gray-800 mb-8">Academic Year</h1>

      <div className="grid grid-cols-4 gap-5">
        {academicYear.map((item) => (
          <label
            key={item._id}
            htmlFor={`academicYear${item._id}`}
            className={`block space-y-2 p-4 border rounded-lg cursor-pointer ${
              item._id === activeAcademicYear?._id
                ? "border-blue-500"
                : "border-gray-300"
            } hover:border-blue-400 transition`}
          >
            <div className="flex items-center justify-between text-gray-700">
              <p className="font-medium">{item.name}</p>
              <input
                type="radio"
                name="academicYear"
                id={`academicYear${item._id}`}
                checked={item._id === activeAcademicYear?._id}
                onChange={() => setActiveAcademicYear(item)}
                className="accent-blue-600"
              />
            </div>
          </label>
        ))}
      </div>

      <button
        type="submit"
        onClick={() => updateAcademicYearStatusHandler()}
        className="rounded-md mt-5 flex justify-center w-40 h-12 items-center text-base font-medium text-white bg-blue-600"
      >
        {loading ? (
          <img className="w-10 h-10" src={loadingGif} alt="loading" />
        ) : (
          "Save changes"
        )}
      </button>
    </div>
  );
};

export default AcademicYear;
