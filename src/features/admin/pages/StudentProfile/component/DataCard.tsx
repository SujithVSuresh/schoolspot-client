import { LucideProps } from "lucide-react";
import { ComponentType } from "react";

const DataCard = ({
  heading,
  data,
  Icon,
}: {
  heading: string;
  data: string | number;
  Icon: ComponentType<LucideProps>;
}) => {
  return (
    <div className="flex items-center gap-3 py-4 px-4 rounded-lg overflow-hidden border">
      <div className="bg-secondary p-3.5 rounded-full">
        <Icon className="w-5 h-5 text-primaryText" />
      </div>
      <div>
        <p className="text-sm text-secondaryText">{heading}</p>
        <p className="text-primaryText">{data}</p>
      </div>
    </div>
  )
}

export default DataCard
