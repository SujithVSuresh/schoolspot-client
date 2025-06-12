import { AddAssignmentType, CreateChapterType, TeacherSigninFormType, UpdateChapterType } from "../types/types";
import axiosInstance from "../../../app/api/axiosInstance";
import axios from "axios";
import { AttendanceType } from "../types/types";
const envData = import.meta.env;
import { ChangePasswordType } from "../../../app/components/ChangePasswordComponent";


export const signin = async (userData: TeacherSigninFormType) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/auth/signin`, {
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
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/academicProfile/class/${classId}`, {
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


export const fetchConversationsBySubjects = async (subjectId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/chat/conversations/${subjectId}`, {
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


export interface CreateConversationType {
    isGroup: boolean,
    participants: string[],
    name: string,
    subjectId: string
}

export const createConversation = async (conversationData: CreateConversationType) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/chat/conversation`, conversationData, {
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



export interface UpdateConversationType {
    participants: string[],
    name: string,
}

export const updateConversation = async (conversationId: string, conversationData: UpdateConversationType) => {
    try{
        const {data} = await axiosInstance.put(`${envData.VITE_ENDPOINT_ORIGIN}/chat/conversation/${conversationId}`, conversationData, {
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


export const fetchMessagesByConversation = async (conversationId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/chat/messages/${conversationId}`, {
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


export const createMessage = async (message: FormData) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/chat/message`, message, {
            headers: {
                "Content-Type": "multipart/form-data",
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



export const fetchNotifications = async () => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/notification`, {
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


export const clearNotification = async (notificationId: string) => {
    try{
        const {data} = await axiosInstance.patch(`${envData.VITE_ENDPOINT_ORIGIN}/notification/${notificationId}/clear`, {}, {
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



export const clearAllNotifications = async () => {
    try{
        const {data} = await axiosInstance.patch(`${envData.VITE_ENDPOINT_ORIGIN}/notification/clear`, {}, {
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


export const fetchExams = async (classId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/exam/exams/${classId}`, {
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


export const fetchExamById = async (examId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/exam/${examId}`, {
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


export const deleteMessage = async (messageId: string) => {
    try{
        const {data} = await axiosInstance.patch(`${envData.VITE_ENDPOINT_ORIGIN}/chat/message/${messageId}/delete`, {}, {
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


export const createChapter = async (chapterData: CreateChapterType) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/chapter`, chapterData, {
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

export const updateChapter = async (chapterId: string, chapterData: UpdateChapterType) => {
    try{
        const {data} = await axiosInstance.put(`${envData.VITE_ENDPOINT_ORIGIN}/chapter/${chapterId}`, chapterData, {
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


export const fetchChaptersBySubject = async (subjectId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/chapter/subject/${subjectId}`, {
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

export const deleteChapter = async (chapterId: string) => {
    try{
        const {data} = await axiosInstance.delete(`${envData.VITE_ENDPOINT_ORIGIN}/chapter/${chapterId}`, {
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

export const findChapter = async (chapterId: string) => {
    console.log(chapterId, "hggggg")
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/chapter/${chapterId}`, {
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






