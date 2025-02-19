import logo from "../../../assets/images/logo.png";

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
          </div>

          <div className="w-[650px] px-12">
            <div className="mx-auto px-12 py-12 bg-white rounded border">
              {/* <h2 className="text-xl font-bold text-gray-900 mb-4">Organization Form</h2> */}
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-1 font-medium text-gray-700"
                  >
                    {" "}
                    School name
                  </label>
                  <input
                    type="text"
                    name="organizationName"
                    placeholder="Organization Name"
                    className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      {" "}
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      {" "}
                      Phone number
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone number"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      {" "}
                      Reg number
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      {" "}
                      Year established
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone number"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      {" "}
                      Principal name
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      {" "}
                      Website url
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone number"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      {" "}
                      Total students
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      {" "}
                      Total teachers
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone number"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-1 font-medium text-gray-700"
                  >
                    {" "}
                    Board
                  </label>
                  <input
                    type="text"
                    name="organizationName"
                    placeholder="Organization Name"
                    className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      {" "}
                      City
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      {" "}
                      State
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone number"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      {" "}
                      Country
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-1 font-medium text-gray-700"
                    >
                      {" "}
                      Postal code
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone number"
                      className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                    />
                  </div>
                </div>

                {/* <textarea
                  name="description"
                  placeholder="Description of your Organization"
                  className="w-full p-2 border rounded h-20"
                /> */}

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
