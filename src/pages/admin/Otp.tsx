import React, {useState, useRef} from 'react'
import Header from '../../components/admin/header';
import { useNavigate } from 'react-router-dom';


const Otp = () => {
    const navigate = useNavigate()

      const [otp1, setOtp1] = useState("");
      const [otp2, setOtp2] = useState("");
      const [otp3, setOtp3] = useState("");
      const [otp4, setOtp4] = useState("");
      const [otp5, setOtp5] = useState("");
      const [otp6, setOtp6] = useState("");
    
      const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
    
      const handleChange = (index: number, value: string) => {
        if (!/^\d?$/.test(value)) return;
    
        switch (index) {
          case 0:
            setOtp1(value);
            break;
          case 1:
            setOtp2(value);
            break;
          case 2:
            setOtp3(value);
            break;
          case 3:
            setOtp4(value);
            break;
          case 4:
            setOtp5(value);
            break;
          case 5:
            setOtp6(value);
            break;
          default:
            break;
        }
    
        if (value && index < 5) {
          inputsRef.current[index + 1]?.focus();
        }
      };
    
      const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
          inputsRef.current[index - 1]?.focus();
        }
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const otpCode = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
        if (otpCode.length === 6) {
            navigate('/school-info')
          console.log("OTP Submitted:", otpCode);
        } else {
          alert("Please enter all 6 digits.");
        }
      };
  return (
    <>
    <Header />

    <main className="h-screen flex justify-center items-center">
    <div className="w-[420px]">
      <h1 className="font-bold text-center text-4xl">Check your email</h1>

      <h5 className="text-base mt-5 mb-6 text-center">
        We've sent your verification code to sujithvs131313@gmail.com
      </h5>

      <div>
        <label
          htmlFor="verificationCode"
          className="block text-sm font-medium text-gray-700"
        >
          Verification code
        </label>
        <div className="flex justify-between">
          {[otp1, otp2, otp3, otp4, otp5, otp6].map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center text-lg border-b-2 border-black outline-none focus:ring-0"
            />
          ))}
        </div>

        <div
          onClick={handleSubmit}
          className={`bg-blue-700 w-full h-12 rounded-sm flex justify-center mt-10 items-center ${
            otp1 && otp2 && otp3 && otp4 && otp5 && otp6 ? "cursor-pointer" : "cursor-not-allowed"
          }`}
        >
          <h1 className="text-base font-medium text-white">Next</h1>
        </div>

        <h5 className="font-medium mt-5">
          Didn't get the email?{" "}
          <span className="text-blue-500 cursor-pointer font-semibold">Resend</span>
        </h5>
      </div>
    </div>
    </main>
    </>
  )
}

export default Otp
