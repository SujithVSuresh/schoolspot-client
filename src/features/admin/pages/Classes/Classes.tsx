import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../../components/Heading";
import { ClassType } from "../../types/types";
import { getAllClasses } from "../../api/api";
import ClassCard from "./components/ClassCard";

const Classes = () => {
  const navigate = useNavigate();

  const [classes, setClasses] = useState<ClassType[] | []>([]);

  useEffect(() => {
    const fetchAllClasses = async () => {
      const response = await getAllClasses();

      if (response.success) {
        setClasses(response.data?.data);
      }
    };

    fetchAllClasses();
  }, []);

  return (
    <>
      <Heading headingValue="Classes">
        <button
          onClick={() => navigate("/dashboard/classes/new")}
          className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
        >
          Add Class
        </button>
      </Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 sm:gap-6">
        {classes.length > 0 &&
          classes.map((value) => <ClassCard classData={value} />)}
      </div>
    </>
  );
};

export default Classes;
