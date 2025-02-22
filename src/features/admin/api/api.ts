
import axios from "axios";
import { AdminSignupFormType, AdminSigninFormType } from "../types/types";
import { OTPFormType } from "../types/types";
import axiosInstance from '../../../app/api/axiosInstance'





export const signup = async (userData: AdminSignupFormType) => {
    try{
        const {data} = await axiosInstance.post("http://localhost:3000/api/auth/admin/signup", userData, {headers: {
            'x-access': 'public'
        }});
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const verify = async (otpData: OTPFormType) => {
    try{
        const {data} = await axiosInstance.post("http://localhost:3000/api/auth/admin/verify", otpData, {headers: {
            'x-access': 'public'
        }});
        console.log(data)
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const resendOtp = async (email: {email: string}) => {
    try{
        const {data} = await axiosInstance.post("http://localhost:3000/api/auth/admin/resend-otp", email, {headers: {
            'x-access': 'public'
        }});
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const passwordResetRequest = async (email: {email: string}) => {
    try{
        const {data} = await axiosInstance.post("http://localhost:3000/api/auth/user/password-reset-request", email, {headers: {
            'x-access': 'public'
        }});
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const passwordReset = async (passwordResetData: {token: string, password: string}) => {
    try{
        const {data} = await axiosInstance.post("http://localhost:3000/api/auth/user/password-reset", passwordResetData, {headers: {
            'x-access': 'public'
        }});
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const signin = async (userData: AdminSigninFormType) => {
    try{
        const {data} = await axiosInstance.post("http://localhost:3000/api/auth/user/signin", userData, {headers: {
            'x-access': 'public'
        }});
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const addStudent = async (userData: {email: string, password: string}) => {
    try{
        const {data} = await axiosInstance.post("http://localhost:3000/api/auth/student/add-student", userData, {headers: {
            'x-access': 'private',
            'x-role': 'admin'
        }});
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const getAllStudents = async () => {
    try{
        const {data} = await axiosInstance.get("http://localhost:3000/api/auth/student/get-students", {headers: {
            'x-access': 'private',
            'x-role': 'admin'
        }});
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

