export interface SignupProgressPropType {
    progress: () => void
}

export interface SignupFormType {
    email?: string,
    password?: string,
    confirmPassword?: string
}