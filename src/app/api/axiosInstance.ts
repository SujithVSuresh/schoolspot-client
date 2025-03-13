import axios from "axios";
import { store } from "../store";
import { setAdmin } from "../../features/admin/redux/adminSlice";
import { removeAdmin } from "../../features/admin/redux/adminSlice";


const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {

    const userRole = config.headers['x-user-role']

    const {admin, student} = store.getState();

    let token 

    if(userRole == "admin"){
      token = admin?.accessToken
    }else if(userRole == "student"){
      token = student?.accessToken
      
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);




axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // const { admin } = store.getState();

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (error.response?.data?.message === "Token expired") {
        originalRequest._retry = true;

        try {
          const { data } = await axios.post("http://localhost:3000/auth/refreshToken");

          store.dispatch(setAdmin({
            _id: data._id,
            email: data.email,
            role: data.role,
            status: data.status,
            accessToken: data.accessToken,
          }));

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

