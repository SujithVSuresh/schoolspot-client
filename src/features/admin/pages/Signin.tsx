import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <main className="h-screen flex justify-center items-center">

      <div className="w-[420px]">
    <h1 className="font-bold text-4xl mb-10 text-center">Sign in to your account</h1>
{/* 
    <h5 className="text-base text-center mt-5 mb-6">
      Sign in fast and safe to your SchoolSpot account.
    </h5> */}

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

<label
        htmlFor="password"
        className="block text-sm font-medium mt-5 text-gray-700"
      >
        Password
      </label>
      <div className="relative">
      <input
        type="password"
        id="password"
        className="w-full py-2 border-b-2 focus:ring-0 border-b-black outline-none"
      />
      <div className="w-10 h-10 absolute right-0 top-0">

      </div>
      </div>

      <div className="bg-blue-700 h-12 rounded-sm flex justify-center mt-6 items-center">
        <h1 className="text-base font-medium text-white">Sign in</h1>
      </div>

      <h5 className="font-medium mt-5">
          Forgot your password?{" "}
          <span onClick={() => navigate('/signin/forgot')} className="text-blue-500 cursor-pointer font-semibold">
            Reset password
          </span>
        </h5>
    </div>

    <div className="flex items-center w-full my-5">
      <hr className="flex-grow border-gray-300" />
      <span className="px-2 text-gray-500">Or</span>
      <hr className="flex-grow border-gray-300" />
    </div>

    <div className="flex justify-center">
      <button className="flex items-center justify-center w-96 p-2 text-gray-500 bg-gray-200 rounded-sm hover:bg-gray-300">
        {/* <FcGoogle className="mr-2 text-xl" /> Continue with Google */}
        Continue with Google
      </button>
    </div>
  </div>



      </main>
      
    </>
  )
}

export default Signin
