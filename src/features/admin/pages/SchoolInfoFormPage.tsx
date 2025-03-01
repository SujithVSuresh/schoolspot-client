import logo from "../../../assets/images/logo.png";
import { CircleCheck } from "lucide-react";
import SchoolInfoForm from "../components/SchoolInfoForm";

const SchoolInfoFormPage = () => {
  return (
    <>
      <header className="h-16 flex items-center px-32 bg-white justify-between">
        <img src={logo} alt="" className="h-10" />
      </header>

      <main className="min-h-screen bg-background">
        <div className="flex justify-center pt-20">
          <div className="w-[580px] pr-6">
            <h1 className="font-bold text-4xl">
              Get a Free Demo of SchoolSpot's Platform
            </h1>

            <h5 className="text-base mt-5 font-normal mr-16">
              There are many variations of passages of Lorem Ipsum available,
              but the some form, by injected humour, or randomised words which
              don't look even slightly believable. If you are going to use a
              passage of Lorem Ipsum, you need to be sure there isn't anything
              embarrassing hidden in the middle of text.
            </h5>

            <section className="container mx-auto py-16 bg-lavender-50">
              <h3 className="text-xl font-normal text-gray-800 mb-10">
                Popular Features
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Marketing */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Marketing
                  </h4>

                  <div className="flex items-start space-x-3">
                    <CircleCheck className="h-5 w-5 text-indigo-600" />
                    <p className="text-sm text-gray-700">Lead generation</p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CircleCheck className="h-5 w-5 text-indigo-600" />
                    <p className="text-sm text-gray-700">
                      Marketing automation
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CircleCheck className="h-5 w-5 text-indigo-600" />
                    <p className="text-sm text-gray-700">
                      Breeze content and social media agents (Beta)
                    </p>
                  </div>
                </div>

                {/* Sales */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-900">Sales</h4>

                  <div className="flex items-start space-x-3">
                    <CircleCheck className="h-5 w-5 text-indigo-600" />
                    <p className="text-sm text-gray-700">Advanced CRM</p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CircleCheck className="h-5 w-5 text-indigo-600" />
                    <p className="text-sm text-gray-700">Sales automation</p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CircleCheck className="h-5 w-5 text-indigo-600" />
                    <p className="text-sm text-gray-700">
                      Breeze prospecting agent (Beta)
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-900">Sales</h4>

                  <div className="flex items-start space-x-3">
                    <CircleCheck className="h-5 w-5 text-indigo-600" />
                    <p className="text-sm text-gray-700">Advanced CRM</p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CircleCheck className="h-5 w-5 text-indigo-600" />
                    <p className="text-sm text-gray-700">Sales automation</p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CircleCheck className="h-5 w-5 text-indigo-600" />
                    <p className="text-sm text-gray-700">
                      Breeze prospecting agent (Beta)
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-900">Sales</h4>

                  <div className="flex items-start space-x-3">
                    <CircleCheck className="h-5 w-5 text-indigo-600" />
                    <p className="text-sm text-gray-700">Advanced CRM</p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CircleCheck className="h-5 w-5 text-indigo-600" />
                    <p className="text-sm text-gray-700">Sales automation</p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CircleCheck className="h-5 w-5 text-indigo-600" />
                    <p className="text-sm text-gray-700">
                      Breeze prospecting agent (Beta)
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="w-[650px] px-12">
            <SchoolInfoForm />
          </div>
        </div>
      </main>
    </>
  );
};

export default SchoolInfoFormPage;
