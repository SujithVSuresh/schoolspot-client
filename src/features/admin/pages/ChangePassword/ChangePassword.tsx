import Sidebar from "../../components/Sidebar"
import DashboardHeader from "../../components/DashboardHeader"
import loadingGif from '../../../../assets/images/loading.webp'



const ChangePassword = () => {
    const error = true
    const loading = false
  return (


        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />
    
            {/* Header */}
            <div className="flex-1">
              <DashboardHeader />
    
            
              <div className="flex justify-center items-center min-h-screen w-full bg-re">
        <form method="POST" className="w-2/6 space-y-4 p-7 rounded-lg border border-gray-300">
        <h1 className="text-xl font-medium text-gray-800 text-center mb-8">
          Change Password
        </h1>
      <div className="relative">
        <label
          htmlFor="nameInput"
          className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
        >
          Old Password
        </label>
        <input
        // {...register("fullName")}
          id="nameInput"
          type="text"
          className={`w-full p-4  text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 ${error ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-blue-500 focus:border-blue-500" } outline-none transition-all duration-200 placeholder-gray-400`}
          aria-label="Name input field"
        />
        {/* {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
          )} */}
      </div>

      <div className="relative mt-5">
        <label
          htmlFor="nameInput"
          className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
        >
          New Password
        </label>
        <input
        // {...register("fullName")}
          id="nameInput"
          type="text"
          className={`w-full p-4  text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 ${error ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-blue-500 focus:border-blue-500" } outline-none transition-all duration-200 placeholder-gray-400`}
          aria-label="Name input field"
        />
        {/* {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
          )} */}
      </div>

      <div className="relative mt-5">
        <label
          htmlFor="nameInput"
          className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
        >
          Confirm Password
        </label>
        <input
        // {...register("fullName")}
          id="nameInput"
          type="text"
          className={`w-full p-4  text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 ${error ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-blue-500 focus:border-blue-500" } outline-none transition-all duration-200 placeholder-gray-400`}
          aria-label="Name input field"
        />
        {/* {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
          )} */}
      </div>

            <button
          type="submit"
          className="rounded-md mt-5 flex justify-center w-full h-12 items-center text-base font-medium text-white bg-blue-600"
        >
                    {loading ? (
                          <img className="w-10 h-10" src={loadingGif} alt="loading" />
                        ) : (
                          "Save changes"
                        )}
      
            
         </button>
      </form>
      
    </div>
         
            </div>
          </div>
  )
}

export default ChangePassword
