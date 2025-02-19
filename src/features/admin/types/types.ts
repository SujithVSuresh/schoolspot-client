export interface SignupProgressPropType {
    progress: () => void
}

export interface AdminSignupFormType {
    email: string,
    password: string,
    confirmPassword?: string
}

export interface OTPFormType {
    otp: number,
    email: string
}