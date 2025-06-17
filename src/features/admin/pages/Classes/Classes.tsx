import { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import { ClassType } from "../../types/types";
import { getAllClasses } from "../../api/api";
import ClassCard from "./components/ClassCard";
import AddButton from "../../components/AddButton";
import { Plus } from "lucide-react";

const Classes = () => {

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

        <AddButton icon={Plus} label="Add Class" navlink="/dashboard/classes/new"/>
      </Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 sm:gap-6">
        {classes.length > 0 &&
          classes.map((value) => <ClassCard classData={value} />)}
      </div>
    </>
  );
};

export default Classes;
