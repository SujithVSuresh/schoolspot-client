import google from '../../../assets/images/google.png'
import { SignupProgressPropType } from '../types/types';
import { useState } from 'react';
import React from 'react';
import { emailRegex } from '../../../app/validation/regex';

const EmailForm = ({ progress }: SignupProgressPropType)=> {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const validate = (value: string) => {
    return emailRegex.test(value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()  

    if(!validate(email)){
      setError("Enter a valid email")
      return
    }

    if(error){
      setError("")
    }

    progress()

    console.log("Email submission")
  }

  return (
    <div className="w-[420px]">
    <h1 className="font-bold text-4xl">Create your free account</h1>

    <h5 className="text-base text-center mt-5 mb-6">
      100% free. No credit card needed.
    </h5>
 <div>
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Email address
      </label>
      <input
      onChange={(e) => setEmail(e.target.value)}
        type="email"
        id="email"
        className="w-full py-2 border-b-2 focus:ring-0 border-b-black outline-none"
      />
      <p className='text-red-500 text-xs mt-1'>{error}</p>

    </div>

    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="relative">
          <input
            type="password"
            id="password"
     
            className="w-full py-2 border-b-2 focus:ring-0 border-b-black outline-none"
          />
        </div>
        <p className='text-red-500 text-xs mt-1'>{error}</p>
    </div>

    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <div className="relative">
          <input
            type="password"
            id="password"
     
            className="w-full py-2 border-b-2 focus:ring-0 border-b-black outline-none"
          />
        </div>
        <p className='text-red-500 text-xs mt-1'>{error}</p>
    </div>

    </div>
    
    <button disabled={email ? false : true} onClick={(e) => handleSubmit(e)} className={`w-full mt-10 h-12 rounded-sm flex justify-center items-center ${
            email ? "bg-blue-700" : "bg-gray-400"
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
  )
}

export default EmailForm
