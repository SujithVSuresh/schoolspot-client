import logo from "../../../assets/images/logo.png";
import { CircleCheck } from "lucide-react";

const SchoolInfoForm = () => {
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
            <div className="mx-auto px-12 py-12 bg-white rounded border">
            <form className="space-y-4">
                <div>
                  <label
                    htmlFor="schoolName"
                    className="block text-sm mb-1 font-medium text-gray-700"
                  >
                    School name
                  </label>
                  <input
                    type="text"
                    name="schoolName"
                    placeholder="school name"
                    className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      Phone number
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="phone number"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="regNumber"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      Reg number
                    </label>
                    <input
                      type="text"
                      name="regNumber"
                      placeholder="reg number"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="yearEstablished"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      Year established
                    </label>
                    <input
                      type="text"
                      name="yearEstablished"
                      placeholder="year established"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="principalName"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      Principal name
                    </label>
                    <input
                      type="text"
                      name="principalName"
                      placeholder="principal name"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="websiteUrl"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      Website url
                    </label>
                    <input
                      type="text"
                      name="websiteUrl"
                      placeholder="website url"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="totalStudents"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      Total students
                    </label>
                    <input
                      type="number"
                      name="totalStudents"
                      placeholder="total students"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="totalTeachers"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      Total teachers
                    </label>
                    <input
                      type="number"
                      name="totalTeachers"
                      placeholder="total teachers"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="board"
                    className="block text-sm mb-1 font-medium text-gray-700"
                  >
                    Board
                  </label>
                  <input
                    type="text"
                    name="board"
                    placeholder="board"
                    className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder="city"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="state"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      placeholder="state"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      placeholder="country"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="postalCode"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      Postal code
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="postal code"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>
                </div>

              <div className="flex justify-center">
              <button
                  type="submit"
                  className="bg-indigo-600 w-full mt-5 text-white py-3 px-5 rounded-lg font-medium hover:bg-indigo-700"
                >
                  Get your free demo
                </button>
              </div>

              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SchoolInfoForm;
