import logo from "../../../assets/images/logo.png";
import { useState } from "react";
import { emailRegex } from "../../../app/validation/regex";
import { Link } from "react-router-dom";
import { passwordResetRequest } from "../api/api";


const ResetPassword = () => {
  const [email, setEmail] = useState("")

  const [error, setError] = useState<{email: string}>({
      email: ""
    });


  let isValid = true

  const validate = () => {
    const error: {email: string} = {
      email: "",
    }

    if(!email){
      error.email = "This field is required"
      isValid = false
    }else if(!emailRegex.test(email)){
      error.email = "Enter a valid email"
      isValid = false
    }

    return error
  }


  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setError(validate())

    if(isValid){
      const response = await passwordResetRequest({email}) 

      if(response.data){
        console.log("password reset link send successfully", response.data)
        setEmail("")
      }
    }
  }

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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full py-2 border-b-2 focus:ring-0 border-b-black outline-none"
      />
      <p className='text-red-500 text-xs mt-1'>{error.email}</p>

      <button onClick={(e) => handleFormSubmit(e)} disabled={email ? false : true} className={`${email ? "bg-blue-700" : "bg-blue-200"} h-12 w-full rounded-sm flex justify-center mt-6 items-center`}>
        <h1 className="text-base font-medium text-white">Reset password</h1>
      </button>
    </div>

    <h5 className="font-medium text-center mt-5">
          Go back to{" "}
          <Link to={'/signin'} className="text-blue-500 cursor-pointer font-semibold">
            Sign in
          </Link>
        </h5>


  </div>


    </main>
  </>
  )
}

export default ResetPassword
