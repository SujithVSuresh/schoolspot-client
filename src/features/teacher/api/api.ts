import { AddAssignmentType, TeacherSigninFormType } from "../types/types";
import axiosInstance from "../../../app/api/axiosInstance";
import axios from "axios";
import { AttendanceType } from "../types/types";
const envData = import.meta.env;
import { ChangePasswordType } from "../../../app/components/ChangePasswordComponent";


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

export const getAllClassesForTeacher = async () => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/class/classes/teacher`, {
            headers: {
                'x-user-role': 'teacher'
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
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/student/students/${classId}`, {
            headers: {
                'x-user-role': 'teacher'
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
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/class/${classId}`, {
            headers: {
                'x-user-role': 'teacher'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const addAssignment = async (assignmentData: AddAssignmentType) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/assignment/add`, {...assignmentData}, {
            headers: {
                'x-user-role': 'teacher'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const updateAssignment = async (assignmentData: AddAssignmentType, id: string) => {
    try{
        const {data} = await axiosInstance.put(`http://localhost:3000/assignment/update/${id}`, assignmentData, {
            headers: {
                'x-user-role': 'teacher'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const fetchAssignments = async (subjectId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/assignment/get-assignments/${subjectId}`, {
            headers: {
                'x-user-role': 'teacher'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const deleteAssignment = async (assignmentId: string) => {
    try{
        const {data} = await axiosInstance.delete(`${envData.VITE_ENDPOINT_ORIGIN}/assignment/${assignmentId}`, {
            headers: {
                'x-user-role': 'teacher'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const fetchAssignmentById = async (assignmentId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/assignment/get-assignment/${assignmentId}`, {
            headers: {
                'x-user-role': 'teacher'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const fetchAssignmentSubmissions = async (assignmentId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/assignment/get-submissions/${assignmentId}`, {
            headers: {
                'x-user-role': 'teacher'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const fetchAssignmentSubmissionById = async (submissionId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/assignment/submission/id/${submissionId}`, {
            headers: {
                'x-user-role': 'teacher'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const addAssignmentSubmissionMark = async (submissionId: string, submissionData: {feedback?: string, grade?: string}) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/assignment/submission/grade/${submissionId}`, submissionData, {
            headers: {
                'x-user-role': 'teacher'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const createStudyMaterial = async (formData: FormData) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/assignment/create/studymaterial`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                'x-user-role': 'teacher'
            },
        });
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const updateStudyMaterial = async (formData: FormData, id: string) => {
    try{
        const {data} = await axiosInstance.put(`${envData.VITE_ENDPOINT_ORIGIN}/assignment/studymaterial/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                'x-user-role': 'teacher'
            },
        });
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const deleteStudyMaterial = async (id: string) => {
    try{
        const {data} = await axiosInstance.delete(`${envData.VITE_ENDPOINT_ORIGIN}/assignment/studymaterial/${id}`, {
            headers: {
                'x-user-role': 'teacher'
            },
        });
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const fetchStudyMaterials = async (subjectId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/assignment/get-studymaterials/${subjectId}`, {
            headers: {
                'x-user-role': 'teacher'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const fetchStudyMaterialById = async (id: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/assignment/get-studymaterial/${id}`, {
            headers: {
                'x-user-role': 'teacher'
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
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/attendance`, {data: attendanceData}, {
            headers: {
                'x-user-role': 'teacher'
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
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/attendance?classId=${classId}&date=${date}`, {
            headers: {
                'x-user-role': 'teacher'
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
        const {data} = await axiosInstance.put(`${envData.VITE_ENDPOINT_ORIGIN}/attendance/status`, {attendanceId, status}, {
            headers: {
                'x-user-role': 'teacher'
            },
        });
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const fetchTeacherProfile = async () => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/teacher/profile`, {
            headers: {
                'x-user-role': 'teacher'
            },
        });
        return { success: true, data }
    }catch(error){
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const changePassword = async (pwData: ChangePasswordType) => {
    try{
        const {data} = await axiosInstance.patch(`http://localhost:3000/auth/change-password`, pwData, {
            headers: {
                'x-user-role': 'teacher'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}

export const fetchAnnouncementsByClass = async (classId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/class/announcements/${classId}`, {
            headers: {
                'x-user-role': 'teacher'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const fetchAnnouncementById = async (id: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/class/announcement/${id}`, {
            headers: {
                'x-user-role': 'teacher'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const updateAnnouncement = async (id: string, announcementData: {title: string; content: string, sendTo: string[]}) => {
    try{
        const {data} = await axiosInstance.put(`${envData.VITE_ENDPOINT_ORIGIN}/class/announcement/${id}`, announcementData, {
            headers: {
                'x-user-role': 'teacher'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const addAnnouncement = async (announcementData: {title: string; content: string, sendTo: string[]}) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/class/announcement`, announcementData, {
            headers: {
                'x-user-role': 'teacher'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}



export const deleteAnnouncement = async (announcementId: string) => {
    try{
        const {data} = await axiosInstance.delete(`${envData.VITE_ENDPOINT_ORIGIN}/class/announcement/${announcementId}`, {
            headers: {
                'x-user-role': 'teacher'
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}




