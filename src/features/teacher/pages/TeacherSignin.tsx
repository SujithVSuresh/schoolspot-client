
const TeacherSignin = () => {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
                
        <h1 className="font-bold text-4xl mb-10 text-center">
            Sign in as teacher
          </h1>
                <form  className='w-3/12'>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full py-2 border-2 focus:ring-0 border-gray-400 outline-none"
              />
              {/* {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )} */}
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium mt-5 text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={"password"}
                  id="password"
                  className="w-full py-2 border-2 focus:ring-0 border-gray-400 outline-none"
                />
                <div className="w-10 h-10 absolute right-0 top-0"></div>
              </div>
              {/* {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )} */}
            </div>

            <label className="flex items-center hover:cursor-pointer">
              <input
                type="checkbox"
                // checked={showPassword}
                // onChange={() => setShowPassword((prev) => !prev)}
              />
              <span className="text-sm font-normal text-gray-500 ml-1">
                Show password
              </span>
            </label>

            <button
            //  disabled={loading}
              className={`bg-blue-700 w-full h-12 rounded-sm flex justify-center text-base font-medium text-white mt-6 items-center`}
            >
                Submit
              {/* {loading ? (
                <img className="w-10 h-10" src={loadingGif} alt="loading" />
              ) : (
                "Sign in"
              )} */}
            </button>


          </form>
    </div>
  )
}

export default TeacherSignin
