import Header from "../../components/AuthHeader"

const SignupProfile = () => {
  return (
    <>
      <Header />
      <main className="h-screen flex justify-center items-center">
        <div className="w-[440px]">
          <h1 className="font-bold text-4xl text-center">Complete your profile</h1>

          <h5 className="text-base text-center mt-5 mb-6">
            Complete your profile to activate your account
          </h5>
          <form onSubmit={() => {}} className="bg-white">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Full name
              </label>
              <input
                // {...register("email")}
                type="email"
                id="email"
                className="w-full py-2 border-b-2 focus:ring-0 border-b-black outline-none"
              />
              {/* {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )} */}
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Contact number
              </label>
              <input
                // {...register("email")}
                type="email"
                id="email"
                className="w-full py-2 border-b-2 focus:ring-0 border-b-black outline-none"
              />
              {/* {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )} */}
            </div>

            <button
            // disabled={loading}
              type="submit"
              className={`w-full mt-5 h-12 rounded-sm flex justify-center items-center text-base font-medium text-white bg-blue-700`}
            >
              {/* {loading ? (
                <img className="w-10 h-10" src={loadingGif} alt="loading" />
              ) : (
                "Submit"
              )} */}
            </button>
          </form>

          {/* <GoogleAuth /> */}
        </div>
      </main>
    </>
  )
}

export default SignupProfile
