
import axiosInstance from "../../../app/api/axiosInstance";
import axios from "axios";
import { PlanType, SuperAdminSigninFormType } from "../types/types";
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


export const fetchAllPlans = async () => {
    try{
       const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/subscription/plans`, {
            headers: {
                'x-user-role': 'superadmin'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const createPlan = async (planData: PlanType) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/subscription/plan`, planData, {
            headers: {
                'x-user-role': 'superadmin'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const editPlan = async (id: string, planData: PlanType) => {
    try{
        const {data} = await axiosInstance.put(`${envData.VITE_ENDPOINT_ORIGIN}/subscription/plan/${id}`, planData, {
            headers: {
                'x-user-role': 'superadmin'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const fetchPlanById = async (planId: string) => {
    try{
       const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/subscription/plans/${planId}`, {
            headers: {
                'x-user-role': 'superadmin'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}



export const fetchAllSchools = async () => {
    try{
       const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/school`, {
            headers: {
                'x-user-role': 'superadmin'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const fetchSchoolProfile = async (schoolId: string) => {
    try{
       const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/school/details/${schoolId}`, {
            headers: {
                'x-user-role': 'superadmin'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}