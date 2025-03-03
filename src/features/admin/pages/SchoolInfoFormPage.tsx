import { CircleCheck } from "lucide-react";
import SchoolInfoForm from "../components/SchoolInfoForm";
import Header from "../components/AuthHeader";

const SchoolInfoFormPage = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
  <div className="flex flex-col md:flex-row justify-center items-start py-8 md:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
    {/* Left Section */}
    <div className="w-full max-w-[500px] mb-8">
      <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
        Get a Free Demo of SchoolSpot's Platform
      </h1>

      <h5 className="text-sm sm:text-base mt-4 font-normal">
        There are many variations of passages of Lorem Ipsum available,
        but the some form, by injected humour, or randomised words which
        don't look even slightly believable. If you are going to use a
        passage of Lorem Ipsum, you need to be sure there isn't anything
        embarrassing hidden in the middle of text.
      </h5>

      <section className="container mx-auto py-8 md:py-12 lg:py-16 bg-lavender-50">
        <h3 className="text-lg md:text-xl font-normal text-gray-800 mb-6 md:mb-10">
          Popular Features
        </h3>

        <div className="grid grid-cols-2 gap-6 md:gap-8">
          {/* Marketing */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-base md:text-lg font-semibold text-gray-900">
              Marketing
            </h4>
            <div className="flex items-start space-x-3">
              <CircleCheck className="h-4 w-4 md:h-5 md:w-5 text-indigo-600" />
              <p className="text-xs md:text-sm text-gray-700">Lead generation</p>
            </div>
            <div className="flex items-start space-x-3">
              <CircleCheck className="h-4 w-4 md:h-5 md:w-5 text-indigo-600" />
              <p className="text-xs md:text-sm text-gray-700">Marketing automation</p>
            </div>
            <div className="flex items-start space-x-3">
              <CircleCheck className="h-4 w-4 md:h-5 md:w-5 text-indigo-600" />
              <p className="text-xs md:text-sm text-gray-700">
                Breeze content and social media agents (Beta)
              </p>
            </div>
          </div>

          {/* Sales (Repeated Sections Adjusted) */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-base md:text-lg font-semibold text-gray-900">Sales</h4>
            <div className="flex items-start space-x-3">
              <CircleCheck className="h-4 w-4 md:h-5 md:w-5 text-indigo-600" />
              <p className="text-xs md:text-sm text-gray-700">Advanced CRM</p>
            </div>
            <div className="flex items-start space-x-3">
              <CircleCheck className="h-4 w-4 md:h-5 md:w-5 text-indigo-600" />
              <p className="text-xs md:text-sm text-gray-700">Sales automation</p>
            </div>
            <div className="flex items-start space-x-3">
              <CircleCheck className="h-4 w-4 md:h-5 md:w-5 text-indigo-600" />
              <p className="text-xs md:text-sm text-gray-700">
                Breeze prospecting agent (Beta)
              </p>
            </div>
          </div>

          {/* Repeated Sales sections - assuming these should be unique */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-base md:text-lg font-semibold text-gray-900">Support</h4>
            <div className="flex items-start space-x-3">
              <CircleCheck className="h-4 w-4 md:h-5 md:w-5 text-indigo-600" />
              <p className="text-xs md:text-sm text-gray-700">24/7 Support</p>
            </div>
            <div className="flex items-start space-x-3">
              <CircleCheck className="h-4 w-4 md:h-5 md:w-5 text-indigo-600" />
              <p className="text-xs md:text-sm text-gray-700">Ticket System</p>
            </div>
            <div className="flex items-start space-x-3">
              <CircleCheck className="h-4 w-4 md:h-5 md:w-5 text-indigo-600" />
              <p className="text-xs md:text-sm text-gray-700">Live Chat (Beta)</p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h4 className="text-base md:text-lg font-semibold text-gray-900">Analytics</h4>
            <div className="flex items-start space-x-3">
              <CircleCheck className="h-4 w-4 md:h-5 md:w-5 text-indigo-600" />
              <p className="text-xs md:text-sm text-gray-700">Real-time Data</p>
            </div>
            <div className="flex items-start space-x-3">
              <CircleCheck className="h-4 w-4 md:h-5 md:w-5 text-indigo-600" />
              <p className="text-xs md:text-sm text-gray-700">Custom Reports</p>
            </div>
            <div className="flex items-start space-x-3">
              <CircleCheck className="h-4 w-4 md:h-5 md:w-5 text-indigo-600" />
              <p className="text-xs md:text-sm text-gray-700">AI Insights (Beta)</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* Right Section */}
    <div className="w-full max-w-[650px] px-4 sm:px-6 lg:px-12">
      <SchoolInfoForm />
    </div>
  </div>
</main>
    </>
  );
};

export default SchoolInfoFormPage;
