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
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/student/${id}`, {
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


export const fetchSubjects = async (classId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/subject/subjects/${classId}`, {
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


export const fetchAssignments = async (subjectId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/assignment/get-assignments/${subjectId}`, {
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


export const fetchAssignmentById = async (assignmentId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/assignment/get-assignment/${assignmentId}`, {
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


export const fetchStudyMaterials = async (subjectId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/assignment/get-studymaterials/${subjectId}`, {
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


export const fetchStudyMaterialById = async (materialId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/assignment/get-studymaterial/${materialId}`, {
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


export const addStudyMaterialViewer = async (materialId: string) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/assignment/studymaterial/viewer/${materialId}`, {}, {
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

export const fetchAttendanceByMonth = async (date: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/attendance/monthly`, {
            headers: {
                'x-user-role': 'student'
            },
            params: {
                date
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const fetchLeaveLettersByMonth = async (date: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/attendance/leave-letters`, {
            headers: {
                'x-user-role': 'student'
            },
            params: {
                date
            }
        });
        return { success: true, data }
    }catch(error){
        console.log(error, "this is the error")
        const message = axios.isAxiosError(error) ? error.response?.data : "An error occured";
        return { success: false, error: message }
    }
}


export const fetchAssignmentSubmission = async (assidnmentId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/assignment/submission/${assidnmentId}`, {
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

export const addAssignmentSubmission = async (submissionId: string, submissionData: {link?: string; description?: string}) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/assignment/submission/${submissionId}`, submissionData, {
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



export const createLeaveLetter = async (leaveLetter: {classId: string, reason: string, fromDate: string, toDate: string}) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/attendance/leave-letter`, leaveLetter, {
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

export const deleteLeaveLetter = async (id: string) => {
    try{
        const {data} = await axiosInstance.delete(`${envData.VITE_ENDPOINT_ORIGIN}/attendance/leave-letter/${id}`, {
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



export const fetchInvoicesByStudentId = async () => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/invoice/student`, {
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


export const fetchInvoiceById = async (invoiceId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/invoice/${invoiceId}`, {
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


export const fetchAnnouncementsByClass = async (classId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/class/announcements/${classId}`, {
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

export const fetchPinnedAnnouncements = async () => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/class/announcements/pin`, {
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

export const fetchAnnouncementById = async (announcementId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/class/announcement/${announcementId}`, {
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

export const announcementPinHandler = async (announcementId: string, status: "pin" | "unpin") => {
    console.log(announcementId, status, "chiriii")
    try{
        const {data} = await axiosInstance.patch(`${envData.VITE_ENDPOINT_ORIGIN}/class/announcement/${announcementId}/pin`, {status}, {
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

export const createPaymentRequest = async (invoiceId: string, amount: number) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/invoice/invoice-session`, {invoiceId, amount}, {
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

export const fetchPaymentsByInvoiceId = async (invoiceId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/payment/invoice/${invoiceId}`, {
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

export const fetchConversations = async () => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/chat/conversations`, {
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

export const fetchMessagesByConversation = async (conversationId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/chat/messages/${conversationId}`, {
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


export const createMessage = async (message: {conversationId: string, messageType: string, content: string}) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/chat/message`, message, {
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



export const fetchNotifications = async () => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/notification`, {
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



export const fetchExams = async (classId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/exam/exams/${classId}`, {
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


export const fetchExamById = async (examId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/exam/${examId}`, {
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


export const clearNotification = async (notificationId: string) => {
    try{
        const {data} = await axiosInstance.patch(`${envData.VITE_ENDPOINT_ORIGIN}/notification/${notificationId}/clear`, {}, {
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



export const clearAllNotifications = async () => {
    try{
        const {data} = await axiosInstance.patch(`${envData.VITE_ENDPOINT_ORIGIN}/notification/clear`, {}, {
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