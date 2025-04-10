import { StudentSigninFormType } from "../types/types";
import axiosInstance from "../../../app/api/axiosInstance";
import axios from "axios";
const envData = import.meta.env;


export const signin = async (userData: StudentSigninFormType) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/auth/signin`, {
            ...userData,
            role: "student"
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const fetchStudentProfile = async (id?: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/student/get-student/${id}`, {
            headers: {
                'x-user-role': 'student'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

