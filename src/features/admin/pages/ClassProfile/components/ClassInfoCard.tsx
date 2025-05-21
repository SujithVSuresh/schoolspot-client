import { LucideProps } from "lucide-react";
import { ComponentType } from "react";

const ClassInfoCard = ({
  heading,
  data,
  Icon,
}: {
  heading: string;
  data: string;
  Icon: ComponentType<LucideProps>;
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm flex flex-row p-4 w-full items-center gap-3">
      <div className="bg-gray-100 p-4 rounded-full">
        <Icon className="w-5 h-5 text-indigo-600" />
      </div>
      <div>
        <div className="text-xs text-gray-500 font-medium">{heading}</div>
        <div className="text-lg font-meedium text-gray-900">{data}</div>
      </div>
    </div>
  );
};

export default ClassInfoCard;
