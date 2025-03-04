import React, {useState, useRef, useEffect} from 'react'
import Header from '../components/AuthHeader';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { verify, resendOtp } from '../api/api';
import toast from 'react-hot-toast';

const Otp = () => {
    const navigate = useNavigate()

    const location = useLocation()


      const [otp1, setOtp1] = useState("");
      const [otp2, setOtp2] = useState("");
      const [otp3, setOtp3] = useState("");
      const [otp4, setOtp4] = useState("");
      const [otp5, setOtp5] = useState("");
      const [otp6, setOtp6] = useState("");

      const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

      const [timer, setTimer] = useState(0)


      useEffect(() => {
        const storedTime = localStorage.getItem("otpTimer"); 
        const currentTime = Math.floor(new Date().getTime() / 1000)
        const futureTime = storedTime ? JSON.parse(storedTime) : null

        console.log(futureTime, currentTime, (futureTime - currentTime), "Hey this is the future data.")

        if(futureTime && futureTime > currentTime){
          setTimer(futureTime - currentTime)
        }else{
          setTimer(0)
        }
        
      }, [])

      useEffect(() => {
        if(timer > 0){
          const settingTime = setTimeout(() => {
            setTimer(timer - 1)
          }, 1000)

          return () => {
            clearTimeout(settingTime)
          }
        }

      }, [timer])


        
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
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const otpCode = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
        if (otpCode.length === 6 && location.state.email) {
          const response = await verify({
            otp: Number(otpCode),
            email: location.state.email
          })
          
          if(response.success){
            // setTimer(60)
            navigate('/signin')
          }else{
                        //  toast.error(response.error.message, {
                        //         position: "bottom-right", 
                        //         autoClose: 3000,    
                        //         hideProgressBar: true,
                        //         closeOnClick: true,
                        //         pauseOnHover: true,
                        //         draggable: true,
                        //         progress: undefined,
                        //       });
                              
          }
            
          console.log("OTP Submitted:", otpCode);
        } else {
          alert("Please enter all 6 digits.");
        }
      };


      const handleResendSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if(location?.state?.email){
        const response = await resendOtp({email: location.state.email})

        console.log(response)

        if(response.success){
          localStorage.setItem("otpTimer", JSON.stringify(Math.floor((new Date().getTime() + 60000)  / 1000)))
          setTimer(60)
          toast(
            "OTP resend successfully",
            {
              duration: 8000,
              position: "bottom-right",
              style: {
                backgroundColor: "#E7FEE2",
                border: "2px, solid, #16A34A",
                minWidth: "400px",
                color: "black",
              },
            }
          );
        }else{
          toast("Error sending otp to your email", {
            duration: 8000,
            position: "bottom-right",
            style: {
              backgroundColor: "#FEE2E2",
              border: "2px, solid, #DC2626",
              minWidth: "400px",
              color: "black",
            },
          });
        }
        }else{
          toast("Error occured while trying to send otp", {
            duration: 8000,
            position: "bottom-right",
            style: {
              backgroundColor: "#FEE2E2",
              border: "2px, solid, #DC2626",
              minWidth: "400px",
              color: "black",
            },
          });
        }

      }
  return (
     <>
    <Header />

    <main className="h-screen flex justify-center items-center">
    <div className="w-[420px]">
      <h1 className="font-bold text-center text-4xl">Check your email</h1>

      <h5 className="text-base mt-5 mb-6 text-center">
        We've sent your verification code to {location?.state?.email}
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

        <button
          onClick={handleSubmit}
          disabled={otp1 && otp2 && otp3 && otp4 && otp5 && otp6 ? false : true}
          className={`w-full h-12 rounded-sm flex justify-center mt-10 items-center  bg-blue-700`}
        >
          <h1 className="text-base font-medium text-white">Next</h1>
        </button>
        {timer <= 0 ? (
                      <h5 className="font-medium mt-5">
                      Didn't get the email?{" "}
                     <span className="text-blue-500 cursor-pointer font-semibold" onClick={(e) => handleResendSubmit(e)}>Resend</span>
                     </h5>

        ) : (
          <h5 className="font-normal mt-5">
          Resend OTP in <span className='font-medium'>{timer} sec</span>
        </h5>

        )}
  
   


   

      </div>
    </div>
    </main>
    </>
  )
}

export default Otp
