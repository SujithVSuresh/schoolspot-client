// import { useState } from "react";
// import { passwordRegex } from "../../../app/validation/regex";
// import { useNavigate } from "react-router-dom";


// export default function PasswordForm() {
//   const navigate = useNavigate()

//   const [password, setPassword] = useState("");
//   const [validations, setValidations] = useState({
//     length: false,
//     uppercase: false,
//     lowercase: false,
//     specialChar: false,
//   });

//   const validatePassword = (password: string) => {
//     setValidations({
//       length: password.length >= 12,
//       uppercase: passwordRegex.uppercase.test(password),
//       lowercase: passwordRegex.lowercase.test(password),
//       specialChar: passwordRegex.specialChar.test(password), 
//     });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newPassword = e.target.value;
//     setPassword(newPassword);
//     validatePassword(newPassword);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()

//     navigate('/otp')
//   }

//   return (
//     <div className="w-[420px]">
//       <h1 className="font-bold text-4xl mb-10 text-center">Create your password</h1>
//       <div>
//         <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//           Password
//         </label>
//         <div className="relative">
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handleChange}
//             className="w-full py-2 border-b-2 focus:ring-0 border-b-black outline-none"
//           />
//         </div>

//         <div className="mt-5">
//           {[
//             { label: "At least 12 characters", valid: validations.length },
//             { label: "One uppercase character", valid: validations.uppercase },
//             { label: "One lowercase character", valid: validations.lowercase },
//             { label: "One number, symbol, or whitespace character", valid: validations.specialChar },
//           ].map((item, index) => (
//             <div className="flex items-center mb-2" key={index}>
//               <div
//                 className={`rounded-full w-4 h-4 border-2 ${
//                   item.valid ? "border-green-500 bg-green-500" : "border-gray-400"
//                 }`}
//               ></div>
//               <h5 className="font-normal text-sm text-gray-600 ml-1">{item.label}</h5>
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={(e) => handleSubmit(e)}
//           disabled={!Object.values(validations).every(value => value)}
//           className={`w-full mt-10 h-12 rounded-sm flex justify-center items-center ${
//             Object.values(validations).every(value => value) ? "bg-blue-700" : "bg-gray-400"
//           }`}
//         >
//           <h1 className="text-base font-medium text-white">Next</h1>
//         </button>
//       </div>
//     </div>
//   );
// }
