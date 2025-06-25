import { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import { ClassType } from "../../types/types";
import { getAllClasses } from "../../api/api";
import ClassCard from "./components/ClassCard";
import AddButton from "../../components/NavigateButton";
import { Plus } from "lucide-react";
import { useLoading } from "../../../../app/hooks/useLoading";
import Spinner from "../../../../app/components/Loader/Spinner";
import NotFound from "../../../../app/components/NotFound";

const Classes = () => {
  const [classes, setClasses] = useState<ClassType[] | []>([]);

  const { isLoading, startLoading, stopLoading } = useLoading();

  useEffect(() => {
    const fetchAllClasses = async () => {
      startLoading();
      const response = await getAllClasses();

      if (response.success) {
        setClasses(response.data?.data);
      }
      stopLoading();
    };

    fetchAllClasses();
  }, []);

  return (
    <>
      <Heading headingValue="Classes">
        <AddButton
          icon={Plus}
          label="Add Class"
          navlink="/dashboard/classes/new"
        />
      </Heading>

      {isLoading ? (
        <Spinner />
      ) : classes.length == 0 ? (
        <NotFound />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 sm:gap-6">
          {classes.length > 0 &&
            classes.map((value) => <ClassCard classData={value} />)}
        </div>
      )}
    </>
  );
};

export default Classes;
