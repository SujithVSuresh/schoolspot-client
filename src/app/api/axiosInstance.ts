import axios, {
  InternalAxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from "axios";
import { store } from "../store";
import { removeAdmin } from "../../features/admin/redux/adminSlice";
import { refreshToken } from "../../features/admin/api/api";
import { setAdmin } from "../../features/admin/redux/adminSlice";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { admin } = store.getState();


    const token = admin?.accessToken;


    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;

interface ErrorResponseData {
  user?: boolean;
  message?: string;
  success: boolean;
}

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError<ErrorResponseData>) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && error.response.data.user) {
      store.dispatch(removeAdmin());
      return Promise.reject(error);
    }

    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await refreshToken()
        store.dispatch(
            
                  setAdmin({
                    _id: response.data._id,
                    email: response.data.email,
                    role: response.data.role,
                    status: response.data.status,
                    accessToken: response.data.accessToken,
                  })
     
        );

        // Update Authorization header for the current request
        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${response?.data?.accessToken}`;

        return axiosInstance(originalRequest);
      } catch (refreshError: unknown) {
        if (refreshError instanceof AxiosError) {
          console.error(
            "Error during token refresh:",
            refreshError.response?.data
          );
        }
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
