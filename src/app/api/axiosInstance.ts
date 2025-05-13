import axios from "axios";
import { store } from "../store";
import { setAdmin } from "../../features/admin/redux/adminSlice";
import { removeAdmin } from "../../features/admin/redux/adminSlice";
import { setStudent } from "../../features/student/redux/studentSlice";
import { setTeacher } from "../../features/teacher/redux/teacherSlice";
import { setSuperAdmin } from "../../features/superadmin/redux/superAdminSlice";
const envData = import.meta.env;


const axiosInstance = axios.create({
  baseURL: envData.VITE_ENDPOINT_ORIGIN,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
});

axiosInstance.interceptors.request.use(
  (config) => {
    const userRole = config.headers['x-user-role']

    const {admin, student, teacher} = store.getState();

    let token 

    if(userRole == "admin"){
      token = admin?.accessToken
    }else if(userRole == "student"){
      token = student?.accessToken
    }else if(userRole == "teacher"){
      token = teacher?.accessToken
    }else if(userRole == "superadmin"){
      token = admin?.accessToken
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use((response) => response, async (error) => {
    const originalRequest = error.config;
    // const { admin } = store.getState();

    console.log(error.response, "vaadaa123")

    if (error.response?.status === 401 && !originalRequest._retry) {

      if (error.response?.data?.code === "EXPIRED") {
        originalRequest._retry = true;

        try {
          
          const { data } = await axios.post(
  "http://localhost:3000/auth/refreshToken", 
  {role: error.response?.data?.role}, 
  {
    withCredentials: true, 
  }
);
        if(data.role == "admin"){
                    store.dispatch(setAdmin({
            _id: data._id,
            email: data.email,
            role: data.role,
            status: data.status,
            accessToken: data.accessToken,
          }));
        }else if(data.role == "student"){
                    store.dispatch(setStudent({
            _id: data._id,
            email: data.email,
            role: data.role,
            status: data.status,
            accessToken: data.accessToken,
          }));
        }else if(data.role == "teacher"){
                    store.dispatch(setTeacher({
            _id: data._id,
            email: data.email,
            role: data.role,
            status: data.status,
            accessToken: data.accessToken,
          }));
        }else{
                    store.dispatch(setSuperAdmin({
            _id: data._id,
            email: data.email,
            role: data.role,
            status: data.status,
            accessToken: data.accessToken,
          }));

        }


          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
          return axiosInstance(originalRequest);

        } catch (refreshError) {
          store.dispatch(removeAdmin()); 
          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

