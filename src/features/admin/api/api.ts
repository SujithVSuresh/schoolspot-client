
import axios from "axios";
import { UserSignupFormType, AdminSigninFormType, SchoolProfileType, AttendanceType, AnnouncementCreateType, AdminProfileType, ChangePasswordType, FeeData, ExamType } from "../types/types";
import { OTPFormType } from "../types/types";
import axiosInstance from '../../../app/api/axiosInstance'
import { TimetableType } from "../types/types";
import { ExamResultType } from "../../../app/types/ExamResultType";
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
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/student`, formData, {
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

export const updateStudent = async (formData: FormData, studentId: string) => {
    try{
        const {data} = await axiosInstance.put(`${envData.VITE_ENDPOINT_ORIGIN}/student/${studentId}`, formData, {
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


export const getAllStudents = async (page: number, search: string, sortBy: string, sortOrder: string, classFilter: string, statusFilter: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/student/students?page=${page}&search=${search}&sortBy=${sortBy}&sortOrder=${sortOrder}&classFilter=${classFilter}&statusFilter=${statusFilter}`, {
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
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/academicProfile/class/${classId}`, {
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
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/student/${userId}`, {
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
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/teacher`, formData, {
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

export const updateTeacher = async (userId: string, formData: FormData) => {
    try{
        const {data} = await axiosInstance.put(`${envData.VITE_ENDPOINT_ORIGIN}/teacher/${userId}`, formData, {
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


export const getAllTeachers = async (search: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/teacher/teachers?search=${search}`, {
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

export const getTeacherProfileById = async (userId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/teacher/profile/${userId}`, {
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
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/teacher/teachers/school`, {
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

export const createClass = async (classData: {name: string, section: string, teacher: string}) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/class`, classData, {
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

export const updateClass = async (classId: string, classData: {name: string, section: string, teacher: string}) => {
    try{
        const {data} = await axiosInstance.put(`${envData.VITE_ENDPOINT_ORIGIN}/class/${classId}`, classData, {
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

export const deleteClass = async (classId: string) => {
    try{
        const {data} = await axiosInstance.delete(`${envData.VITE_ENDPOINT_ORIGIN}/class/${classId}`, {
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
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/class/${classId}`, {
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
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/attendance`, {data: attendanceData}, {
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
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/attendance?classId=${classId}&date=${date}`, {
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
        const {data} = await axiosInstance.put(`${envData.VITE_ENDPOINT_ORIGIN}/attendance/status`, {attendanceId, status}, {
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
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/class/announcement`, {...announcementData}, {
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

export const updateAnnouncement = async (id: string, announcementData: {title: string; content: string, sendTo: string[]}) => {
    try{
        const {data} = await axiosInstance.put(`${envData.VITE_ENDPOINT_ORIGIN}/class/announcement/${id}`, announcementData, {
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



export const deleteAnnouncement = async (announcementId: string) => {
    try{
        const {data} = await axiosInstance.delete(`${envData.VITE_ENDPOINT_ORIGIN}/class/announcement/${announcementId}`, {
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

export const fetchAnnouncements = async () => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/class/announcements/author`, {
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


export const fetchAnnouncementById = async (id: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/class/announcement/${id}`, {
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


export const fetchSubjects = async (classId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/subject/subjects/${classId}`, {
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



export const createSubject = async (classData: {name: string; teacher: string; class: string}) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/subject`, classData, {
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


export const updateSubject = async (subjectId: string, classData: {name: string; teacher: string; class: string}) => {
    try{
        const {data} = await axiosInstance.put(`${envData.VITE_ENDPOINT_ORIGIN}/subject/${subjectId}`, classData, {
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


export const fetchSubjectById = async (subjectId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/subject/${subjectId}`, {
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

export const deleteSubject = async (subjectId: string) => {
    try{
        const {data} = await axiosInstance.delete(`${envData.VITE_ENDPOINT_ORIGIN}/subject/${subjectId}`, {
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



export const fetchInvoicesByClass = async (classId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/invoice/class/${classId}`, {
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


export const createInvoice = async (invoiceData: FeeData, studentIds: string[]) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/invoice`, {...invoiceData, studentIds}, {
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

export const deleteInvoice = async (invoiceId: string) => {
    try{
        const {data} = await axiosInstance.delete(`${envData.VITE_ENDPOINT_ORIGIN}/invoice/${invoiceId}`, {
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


export const fetchAllPlans = async () => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/subscription/plans`, {
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

export const fetchSubscriptionsBySchoolId = async () => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/subscription/school`, {
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


export const fetchExams = async (classId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/exam/exams/${classId}`, {
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


export const createExams = async (examData: ExamType) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/exam`, {...examData}, {
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


export const upsertExamResult = async (markData: ExamResultType[]) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/examResult`, markData, {
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

export const fetchExamResultsBySubjects = async (examId: string, subject: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/examResult/${examId}/subject/${subject}`, {
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




export const fetchExamById = async (examId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/exam/${examId}`, {
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


export const upsertTimetable = async (timetableData: {timetable: TimetableType[]}, classId: string) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/timetable/${classId}`, timetableData, {
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


export const deleteTimetable = async (id: string) => {
    try{
        const {data} = await axiosInstance.delete(`${envData.VITE_ENDPOINT_ORIGIN}/timetable/${id}`, {
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


export const fetchTimetableByClass = async (classId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/timetable/${classId}`, {
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



export const createSubscriptionPaymentRequest = async (planId: string, amount: number) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/subscription/subscription-session`, {planId, amount}, {
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



export const fetchAcademicYears = async () => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/academicYear`, {
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


export const updateAcademicYear = async (id: string) => {
    try{
        const {data} = await axiosInstance.patch(`${envData.VITE_ENDPOINT_ORIGIN}/academicYear/${id}`, {}, {
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

export const fetchSchoolOverview = async () => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/school/overview`, {
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


export const fetchStudentAcademicProfile = async (userId: string) => {
    try{
        const {data} = await axiosInstance.get(`${envData.VITE_ENDPOINT_ORIGIN}/academicProfile/${userId}`, {
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


export const createAcademicProfile = async (academicProfileData: {admissionNo: string; roll:number; classId: string}) => {
    try{
        const {data} = await axiosInstance.post(`${envData.VITE_ENDPOINT_ORIGIN}/academicProfile`, academicProfileData, {
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



