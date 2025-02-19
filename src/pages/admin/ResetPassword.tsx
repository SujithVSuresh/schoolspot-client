import logo from '../../assets/logo.png'

const ResetPassword = () => {
  return (
    <>
    <header className="h-20 flex items-center justify-between p-10">
      <img src={logo} alt="" className="h-10" />


    </header>
    <main className="h-screen flex justify-center items-center">
    <div className="w-[420px]">
    <h1 className="font-bold text-center text-4xl">Reset your password</h1>

    <h5 className="text-base text-center mt-5 mb-6">
    Please enter the email address you’d like your password reset information sent to.
    </h5>

    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Email address
      </label>
      <input
        type="email"
        id="email"
        className="w-full py-2 border-b-2 focus:ring-0 border-b-black outline-none"
      />

      <div className="bg-blue-700 h-12 rounded-sm flex justify-center mt-6 items-center">
        <h1 className="text-base font-medium text-white">Reset password</h1>
      </div>
    </div>

    <h5 className="font-medium text-center mt-5">
          Go back to{" "}
          <span className="text-blue-500 cursor-pointer font-semibold">
            Sign in
          </span>
        </h5>


  </div>


    </main>
  </>
  )
}

export default ResetPassword
