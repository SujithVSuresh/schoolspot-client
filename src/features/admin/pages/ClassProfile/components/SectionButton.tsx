import { useNavigate } from "react-router-dom";

const SectionButton = ({
  classId,
  section,
  urlSection,
}: {
  classId: string;
  section: { name: string; urlName: string };
  urlSection: string;
}) => {
  const navigate = useNavigate();

  console.log(urlSection, "ss");
  return (
    <div
      onClick={() =>
        navigate(`/dashboard/classes/profile/${classId}/${section.urlName}`)
      }
      className={`${
        section.urlName == urlSection
          ? "bg-primary text-white"
          : "bg-secondary text-primaryText"
      } text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
    >
      {section.name}
    </div>
  );
};

export default SectionButton;
