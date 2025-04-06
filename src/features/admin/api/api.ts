
import axios from "axios";
import { UserSignupFormType, AdminSigninFormType, SchoolProfileType, AttendanceType, AnnouncementCreateType, AdminProfileType, ChangePasswordType } from "../types/types";
import { OTPFormType } from "../types/types";
import axiosInstance from '../../../app/api/axiosInstance'
const envData = import.meta.env;



export const signup = async (userData: UserSignupFormType, schoolData: SchoolProfileType) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/auth/signup`, {userData, schoolData});
        return { success: true, data }
    }catch(error){
        console.log(error)
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const verify = async (otpData: OTPFormType) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/auth/verify`, otpData);
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const createStudent = async (formData: FormData) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/student/add-student`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                'x-user-role': 'admin'
            },
        });
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const resendOtp = async (email: {email: string}) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/auth/resend-otp`, email);
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const passwordResetRequest = async (email: {email: string}) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/auth/password-reset-request`, email);
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const passwordReset = async (passwordResetData: {token: string, password: string}) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/auth/password-reset`, passwordResetData);
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const signin = async (userData: AdminSigninFormType) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/auth/signin`, {
            ...userData,
            role: "admin"
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const getAllStudents = async (page: number, search: string, sortBy: string, sortOrder: string, classfilter: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/student/get-students?page=${page}&search=${search}&sortBy=${sortBy}&sortOrder=${sortOrder}&classfilter=${classfilter}`, {
            headers: {
                'x-user-role': 'admin'
            }
        });

        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const getStudentsByClassId = async (classId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/student/get-students/${classId}`, {
            headers: {
                'x-user-role': 'admin'
            }
        });

        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const getStudentProfile = async (userId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/student/get-student/${userId}`, {
            headers: {
                'x-user-role': 'admin'
            }
        });

        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const googleAuth = async (payload: {credential: string, clientId: string}, schoolData: SchoolProfileType | null) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/auth/google-auth`, {payload, schoolData});
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const refreshToken = async () => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/auth/refreshToken`);
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const changeAccountStatus = async (userId: string, status: "active" | "blocked" | "deleted" | "inactive") => {
    try{
        const {data} = await axiosInstance.patch(`${envData.VITE_ENDPOINT_ORIGIN}/auth/change-account-status`, {userId, status}, {
            headers: {
                'x-user-role': 'admin'
            },
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const createTeacher = async (formData: FormData) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/teacher/add-teacher`, formData, {
            headers: {
                "Content-Type": "multipart/form-data", 
                'x-user-role': 'admin'
            },
        });
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const getAllTeachers = async (page: number, search: string, sortBy: string, sortOrder: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/teacher/get-teachers?page=${page}&search=${search}&sortBy=${sortBy}&sortOrder=${sortOrder}`, {
            headers: {
                'x-user-role': 'admin'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const getTeachersBySchool = async () => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/teacher/get-teachers/school`, {
            headers: {
                'x-user-role': 'admin'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const createClass = async (classData: {name: string, section: string, strength: number, teacher: string}) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/class/add-class`, classData, {
            headers: {
                'x-user-role': 'admin'
            },
        });
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const getAllClasses = async () => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/class/get-classes`, {
            headers: {
                'x-user-role': 'admin'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const getClassById = async (classId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/class/get-class/${classId}`, {
            headers: {
                'x-user-role': 'admin'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const addAttendance = async (attendanceData: AttendanceType[]) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/attendance/add-attendance`, {data: attendanceData}, {
            headers: {
                'x-user-role': 'admin'
            },
        });
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const getAttendanceByClass = async (classId: string, date: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/attendance/get-attendance?classId=${classId}&date=${date}`, {
            headers: {
                'x-user-role': 'admin'
            },
        });
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const changeAttendanceStatus = async (attendanceId: string, status: string) => {
    try{
        const {data} = await axiosInstance.put(`${envData.VITE_ENDPOINT_ORIGIN}/attendance/update-attendance-status`, {attendanceId, status}, {
            headers: {
                'x-user-role': 'admin'
            },
        });
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const createAnnouncement = async (announcementData: AnnouncementCreateType) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/class/add-announcement`, {announcementData}, {
            headers: {
                'x-user-role': 'admin'
            },
        });
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const fetchAnnouncements = async () => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/class/get-announcements`, {
            headers: {
                'x-user-role': 'admin'
            },
        });
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const addSubject = async (subjectData: {name: string, teacher: string, classId: string}) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/class/add-subject`, {...subjectData}, {
            headers: {
                'x-user-role': 'admin'
            },
        });
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const removeSubject = async (subjectId: string, classId: string) => {
    try{
        const {data} = await axiosInstance.delete(`${envData.VITE_ENDPOINT_ORIGIN}/class/remove-subject?subjectId=${subjectId}&classId=${classId}`, {
            headers: {
                'x-user-role': 'admin'
            },
        });
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}



export const getSchoolProfile = async () => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/school/get-school`, {
            headers: {
                'x-user-role': 'admin'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const editSchoolProfile = async (schoolData: SchoolProfileType, id: string) => {
    try{
        const {data} = await axiosInstance.put(`${envData.VITE_ENDPOINT_ORIGIN}/school/edit-school/${id}`, schoolData, {
            headers: {
                'x-user-role': 'admin'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const createAdminProfile = async (profileData: AdminProfileType) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/admin/admin-profile`, {...profileData}, {
            headers: {
                'x-user-role': 'admin'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const updateAdminProfile = async (id: string, profileData: Partial<AdminProfileType>) => {
    try{
        const {data} = await axiosInstance.put(`${envData.VITE_ENDPOINT_ORIGIN}/admin/admin-profile/${id}`, {...profileData}, {
            headers: {
                'x-user-role': 'admin'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const fetchAdminProfile = async () => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/admin/admin-profile`, {
            headers: {
                'x-user-role': 'admin'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const changePassword = async (pwData: ChangePasswordType) => {
    try{
        const {data} = await axiosInstance.patch(`http://localhost:3000/auth/change-password`, pwData, {
            headers: {
                'x-user-role': 'admin'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


