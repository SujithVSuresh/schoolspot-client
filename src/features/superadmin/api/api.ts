
import axiosInstance from "../../../app/api/axiosInstance";
import axios from "axios";
import { SuperAdminSigninFormType } from "../types/types";
const envData = import.meta.env;


export const signin = async (userData: SuperAdminSigninFormType) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/auth/signin`, {
            ...userData,
            role: "superadmin"
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}