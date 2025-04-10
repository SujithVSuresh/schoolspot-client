import { Calendar } from "lucide-react";
import { dateFormatter, timeFormatter } from "../../../../app/utils/formatter";

const AssignmentDetails = () => {
  return (
      <div className="overflow-hidden min-h-full flex">
        {/* <Breadcrumb items={breadcrumbItems} /> */}
        <div className="w-7/12">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-medium text-gray-700">
              Write about the history of India
            </h2>
          </div>

          <div>
            <h5 className="text-gray-900 font-normal">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </h5>
          </div>

          <div className="flex mt-6 gap-5">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-2 text-purple-500" />
              <span className="text-sm">
                Due: {dateFormatter(String(new Date()))} -{" "}
                {timeFormatter(String(new Date()))}
              </span>
            </div>

            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-2 text-green-500" />
              <span className="text-sm">
                Created: {dateFormatter(String(new Date()))}
              </span>
            </div>

            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-2 text-green-500" />
              <span className="text-sm">Pending</span>
            </div>
          </div>
        </div>

        <div className="flex-1 border-l px-5">
        <h2 className="text-2xl font-bold text-gray-700">
            Submission
          </h2>
        </div>
      </div>
  );
};

export default AssignmentDetails;
