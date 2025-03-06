
import axios from "axios";
import { UserSignupFormType, AdminSigninFormType } from "../types/types";
import { OTPFormType } from "../types/types";
import axiosInstance from '../../../app/api/axiosInstance'





export const signup = async (userData: UserSignupFormType) => {
    try{
        const {data} = await axiosInstance.post("http://localhost:3000/auth/signup", userData);
        console.log(data)
        return { success: true, data }
    }catch(error){
        console.log(error)
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const verify = async (otpData: OTPFormType) => {
    try{
        const {data} = await axiosInstance.post("http://localhost:3000/auth/verify", otpData);
        console.log(data, "blablabla")
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const createStudent = async (formData: FormData) => {
    try{
        const {data} = await axiosInstance.post("http://localhost:3000/student/add-student", formData);
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const resendOtp = async (email: {email: string}) => {
    try{
        const {data} = await axiosInstance.post("http://localhost:3000/auth/resend-otp", email);
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const passwordResetRequest = async (email: {email: string}) => {
    try{
        const {data} = await axiosInstance.post("http://localhost:3000/auth/password-reset-request", email);
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const passwordReset = async (passwordResetData: {token: string, password: string}) => {
    try{
        const {data} = await axiosInstance.post("http://localhost:3000/auth/password-reset", passwordResetData);
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const signin = async (userData: AdminSigninFormType) => {
    try{
        const {data} = await axiosInstance.post("http://localhost:3000/auth/signin", userData);
        console.log(data, "signin dfata")
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const getAllStudents = async (page: number, search: string) => {
    try{
        const {data} = await axiosInstance.get(`http://localhost:3000/student/get-students?page=${page}&search=${search}`);
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const googleAuth = async (payload: {credential: string, clientId: string}) => {
    try{
        const {data} = await axiosInstance.post("http://localhost:3000/auth/google-auth", payload);
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const refreshToken = async () => {
    try{
        const {data} = await axiosInstance.post("http://localhost:3000/auth/refreshToken");
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

