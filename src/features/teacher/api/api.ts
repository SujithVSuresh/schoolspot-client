import { TeacherSigninFormType } from "../types/types";
import axiosInstance from "../../../app/api/axiosInstance";
import axios from "axios";



export const signin = async (userData: TeacherSigninFormType) => {
    try{
        const {data} = await axiosInstance.post("http://localhost:3000/auth/signin", {
            ...userData,
            role: "teacher"
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}