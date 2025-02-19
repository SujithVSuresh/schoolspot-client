import logo from "../../../assets/images/logo.png";

const Pricing = () => {
  return (
    <>
      <header className="h-20 flex items-center justify-between p-10">
        <img src={logo} alt="" className="h-10" />
      </header>
      <main className="h-screen flex justify-center items-center">
        <div>
          <h1 className="font-bold text-center text-4xl">Choose the plan that fits your needs.</h1>

          <div className="flex gap-10 mt-20">
            <div className="w-80 p-6 h-[400px] bg-gray-100 rounded-md flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Free Plan</h2>
                <ul className="mt-4 space-y-2 text-gray-500">
                  <li className="flex items-start space-x-2">
                    {/* <CheckCircle className="text-green-500" size={20} /> */}
                    <span>Manage students & teachers.</span>
                  </li>

                  <li className="flex items-start space-x-2">
                    {/* <CheckCircle className="text-green-500" size={20} /> */}
                    <span>Student attendance management.</span>
                  </li>

                  <li className="flex items-start space-x-2">
                    {/* <CheckCircle className="text-green-500" size={20} /> */}
                    <span>Student attendance management.</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mt-4 text-xl font-semibold text-gray-900">
                  ₹0{" "}
                  <span className="text-sm font-normal text-gray-600">
                    /month
                  </span>
                </p>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded font-medium hover:bg-indigo-700">
                  Select
                </button>
              </div>
            </div>

            <div className="w-80 p-6 bg-gray-100 rounded-md flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Free Plan</h2>
                <ul className="mt-4 space-y-2 text-gray-500">
                  <li className="flex items-start space-x-2">
                    {/* <CheckCircle className="text-green-500" size={20} /> */}
                    <span>Manage students & teachers.</span>
                  </li>

                  <li className="flex items-start space-x-2">
                    {/* <CheckCircle className="text-green-500" size={20} /> */}
                    <span>Student attendance management.</span>
                  </li>

                  <li className="flex items-start space-x-2">
                    {/* <CheckCircle className="text-green-500" size={20} /> */}
                    <span>Student attendance management.</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mt-4 text-xl font-semibold text-gray-900">
                  ₹0{" "}
                  <span className="text-sm font-normal text-gray-600">
                    /month
                  </span>
                </p>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded font-medium hover:bg-indigo-700">
                  Select
                </button>
              </div>
            </div>

            <div className="w-80 p-6 bg-gray-100 rounded-md flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Free Plan</h2>
                <ul className="mt-4 space-y-2 text-gray-500">
                  <li className="flex items-start space-x-2">
                    {/* <CheckCircle className="text-green-500" size={20} /> */}
                    <span>Manage students & teachers.</span>
                  </li>

                  <li className="flex items-start space-x-2">
                    {/* <CheckCircle className="text-green-500" size={20} /> */}
                    <span>Student attendance management.</span>
                  </li>

                  <li className="flex items-start space-x-2">
                    {/* <CheckCircle className="text-green-500" size={20} /> */}
                    <span>Student attendance management.</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mt-4 text-xl font-semibold text-gray-900">
                  ₹0{" "}
                  <span className="text-sm font-normal text-gray-600">
                    /month
                  </span>
                </p>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded font-medium hover:bg-indigo-700">
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Pricing;
