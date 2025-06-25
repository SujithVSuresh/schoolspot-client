import { ComponentType } from "react";
import { LucideProps } from "lucide-react";

const CountCard = ({
  heading,
  data,
  Icon,
}: {
  heading: string;
  data: string | number;
  Icon: ComponentType<LucideProps>;
}) => {
  return (
        <div
          key={2}
          className="bg-white rounded-lg border p-4 flex items-center"
        >
          <div className={`rounded-full p-4 mr-4 bg-secondary`}>
            <Icon className="text-primaryText" />
          </div>
          <div>
            <p className="text-sm text-gray-500">{heading}</p>
            <p className={`text-xl font-bold `}>{data}</p>
          </div>
        </div>
  )
}

export default CountCard
