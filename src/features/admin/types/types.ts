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
    _id?: string;
    email: string;
    role: "admin" | "student" | "teacher" | "";
    status: "active" | "blocked" | "deleted" | "";
    accessToken: string | null;
    profilePicture?: string;
    createdAt?: string
}


export interface StudentProfileType {
    _id?: string;
    fullName: string;
    profilePhoto: string;
    gender: "male" | "female";
    dob: string;
    address: string;
    fatherName: string;
    motherName: string
    contactNumber: string;
    class: string;
    section: string;
    userId?: string;
    schoolId?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

// export interface StudentUserProfileType extends Omit<UserStoreType, 'accessToken'>, StudentProfileType{
//     profileId?: string
//     password: string
// }