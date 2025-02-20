
import axios from "axios";
import { AdminSignupFormType } from "../types/types";
import { OTPFormType } from "../types/types";



export const signup = async (userData: AdminSignupFormType) => {
    try{
        const {data} = await axios.post("http://localhost:3000/api/auth/admin/signup", userData);
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data?.error : "An error occured";
        return { success: false, error: message }
    }
}

export const verify = async (otpData: OTPFormType) => {
    try{
        const {data} = await axios.post("http://localhost:3000/api/auth/admin/verify", otpData);
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data?.error : "An error occured";
        return { success: false, error: message }
    }
}


export const resendOtp = async (email: {email: string}) => {
    try{
        const {data} = await axios.post("http://localhost:3000/api/auth/admin/resend-otp", email);
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data?.error : "An error occured";
        return { success: false, error: message }
    }
}


export const passwordResetRequest = async (email: {email: string}) => {
    try{
        const {data} = await axios.post("http://localhost:3000/api/auth/user/password-reset-request", email);
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data?.error : "An error occured";
        return { success: false, error: message }
    }
}