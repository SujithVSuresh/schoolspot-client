export interface SignupProgressPropType {
    progress: () => void
}

export interface AdminSignupFormType {
    email: string;
    password: string;
    confirmPassword?: string;
}

export interface AdminSigninFormType {
    email: string;
    password: string;
}

export interface OTPFormType {
    otp: number;
    email: string;
}

export interface UserStoreType {
    _id: string;
    email: string;
    role: "admin" | "student" | "teacher" | "";
    status: "active" | "blocked" | "deleted" | "";
    accessToken: string | null;
    profilePicture?: string;
}