import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import { SignupFormType } from "../types/propsTypes";
import google from '../../../assets/images/google.png'
import { emailRegex, passwordRegex } from "../../../app/validation/regex";


const Signup = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [error, setError] = useState<SignupFormType>({
    email: "",
    password: "",
    confirmPassword: ""
  });

  let isValid = true

  const validate = () => {
    const error: SignupFormType = {
      email: "",
      password: "",
      confirmPassword: ""
    }

    if(!email){
      error.email = "This field is required"
      isValid = false
    }else if(!emailRegex.test(email)){
      error.email = "Enter a valid email"
      isValid = false
    }

    if(!password){
      error.password = "This field is required"
      isValid = false
    }else if(!passwordRegex.test(password)){
      error.password = "Password should be atleast 8 character long"
      isValid = false
    }

    if(!confirmPassword){
      error.confirmPassword = "This field is required"
      isValid = false
    }else if(confirmPassword != password){
      error.confirmPassword = "Password doesn't match"
      isValid = false
    }
    return error
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setError(validate())

    if(isValid){
    // dispatch(signup(name, email, password))
    }
  };


  return (
    <>
    <Header />
      <main className="h-screen flex justify-center items-center">

      <div className="w-[420px]">
    <h1 className="font-bold text-4xl">Create your free account</h1>

    <h5 className="text-base text-center mt-5 mb-6">
      100% free. No credit card needed.
    </h5>
 <div>
    <div className="mb-5">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Email address
      </label>
      <input
      onChange={(e) => setEmail(e.target.value)}
      value={email}
        type="email"
        id="email"
        className="w-full py-2 border-b-2 focus:ring-0 border-b-black outline-none"
      />
      <p className='text-red-500 text-xs mt-1'>{error.email}</p>

    </div>

    <div className="mb-5">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="relative">
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full py-2 border-b-2 focus:ring-0 border-b-black outline-none"
          />
        </div>
        <p className='text-red-500 text-xs mt-1'>{error.password}</p>
    </div>

    <div className="mb-5">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <div className="relative">
          <input
            type="password"
            id="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            className="w-full py-2 border-b-2 focus:ring-0 border-b-black outline-none"
          />
        </div>
        <p className='text-red-500 text-xs mt-1'>{error.confirmPassword}</p>
    </div>

    </div>
    
    <button disabled={email && password && confirmPassword ? false : true} onClick={(e) => handleSubmit(e)} className={`w-full mt-5 h-12 rounded-sm flex justify-center items-center ${
            email && password && confirmPassword ? "bg-blue-700" : "bg-gray-400"
          }`}>
        <h1 className="text-base font-medium text-white">Submit</h1>
      </button>

    <div className="flex items-center w-full my-5">
      <hr className="flex-grow border-gray-300" />
      <span className="px-2 text-gray-500">Or</span>
      <hr className="flex-grow border-gray-300" />
    </div>

    <div className="flex justify-center">
      <button className="flex items-center justify-center w-96 p-2 text-gray-600 bg-gray-200 rounded-sm hover:bg-gray-300">
        {/* <FcGoogle className="mr-2 text-xl" /> Continue with Google */}
        <img src={google} className='h-5 w-5 mr-5' alt="" />
        Continue with Google
      </button>
    </div>
  </div>

      </main>
    </>
  );
};

export default Signup;
