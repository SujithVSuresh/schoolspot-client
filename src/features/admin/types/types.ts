export interface SignupProgressPropType {
    progress: () => void
}

export interface UserSignupFormType {
    email: string;
    password: string;
    confirmPassword?: string;
    role?: "admin" | "student" | "teacher";
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
    status: "active" | "blocked" | "deleted" | "inactive" | "";
    accessToken: string | null;
    profilePicture?: string;
    createdAt?: string
}

export interface SchoolProfileType {
    _id?:string;
    schoolName: string;
    email: string;
    phoneNumber: string;
    regNumber: string;
    yearEstablished: number;
    principalName: string;
    websiteUrl: string;
    totalStudents: number;
    totalTeachers: number;
    board: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    academicYear?: string;
}


export interface StudentProfileType {
    _id?: string;
    fullName: string;
    profilePhoto: FileList | string;
    gender: "male" | "female";
    dob: string;
    address: string;
    fatherName: string;
    motherName: string
    contactNumber: string;
    roll: number;
    class?: string;
    section?: string;
    userId?: string;
    schoolId?: string;
    createdAt?: Date;
    updatedAt?: Date;
}



export interface StudentProfileResponseType extends StudentProfileType {
    user: {
        _id: string,
        email: string, 
        status: "active" | "inactive" | "deleted" | "blocked";
    }
}



export interface StudentUserProfileType extends StudentProfileType, UserSignupFormType {}



export interface StudentProfileUpdateType {
    fullName: string;
    email: string;
    gender: "male" | "female";
    dob: string; 
    roll: number;
    address: string;
    fatherName: string;
    motherName: string;
    contactNumber: string;
    profilePhoto?: FileList | string;
  }
  

export interface TeacherProfileType {
    fullName: string;
    phoneNumber: string;
    subjectSpecialized: string;
    qualification: string;
    experience: number;
    profilePhoto: string;
    userId?: string;
    schoolId?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }


  export interface TeacherProfileUpdateType {
    fullName: string;
    phoneNumber: string;
    email: string;
    subjectSpecialized: string;
    qualification: string;
    experience: number;
    profilePhoto?: string | FileList;
  }

  export interface TeacherProfileWithUser {
    _id: string;
    fullName: string;
    phoneNumber: string;
    profilePhoto?: string | FileList;
    qualification: string;
    schoolId: string;
    subjectSpecialized: string;
    experience: string;
    user: {
      _id: string;
      email: string;
      status: string;
    };
  };


  export interface TeacherUserProfileType extends TeacherProfileType, UserSignupFormType {}


  export interface TeacherDataResponseType {
    _id?: string;
    fullName: string;
    subjectSpecialized: string;
    qualification: string;
    profilePhoto: string;
    schoolId?: string;
    user: {
        _id: string
        email: string,
        status: "active" | "inactive" | "deleted" | "blocked";
    }
}


export interface TeacherProfileUserEntityType extends TeacherProfileType {
    user: {
        _id: string;
        email: string;
        status: "active" | "inactive" | "deleted" | "blocked";
    }
}



export interface SubjectType {
    _id?: string;
    name: string;
    teacher: string;
  };
  

export interface ClassType {
    _id?:string;
    name: string;
    strength: number;
    section: string;
    teacher: string;
    school?: string;
    subjects?: SubjectType[];
    createdAt?: string;
    updatedAt?: string
}

export interface AttendanceType {
    _id?: string;
    student: string;
    class: string;
    status: "Present" | "Absent";
    name?: string;
    roll?: number;
}




   
export interface AnnouncementCreateType {
    title: string;
    content: string;
    sendTo: string[]
}



export interface AnnouncementResponseType {
    _id: string;
    title: string;
    content: string;
    author: string;
    createdAt?: string;
    updatedAt?: Date;
}


export interface AdminProfileType {
    _id?: string
    fullName: string;
    phoneNumber: string;
    userId?: string;
    schoolId?: string;
    createdAt?: Date;
    updatedAt?: Date;
}



export interface ChangePasswordType {
    newPassword: string;
    oldPassword: string;
    confirmPassword?: string;
}



export interface FeeItem {
    feeType: string;
    amount: number;
  }
  
  export interface FeeData {
    class?: string;
    dueDate: string;
    title: string;
    feeBreakdown?: FeeItem[];
    totalAmount: number;
    remarks?: string;
  }


  export interface PlanType {
 _id?: string;
  name: "Free" | "3 Month" | "6 Month";
  price: number;
  durationInDays: 30 | 90 | 180;
  createdAt?: Date;
  updatedAt?: Date;
  }

  export type SubscriptionStatusType = "pending" | "active" | "expired" | "cancelled"

  export interface SubscriptionType {
  _id: string
  planId: string;
  planPrice: number;
  startDate: Date;
  endDate: Date;
  status: SubscriptionStatusType;
  createdAt: Date;
  updatedAt: Date;
  }



export interface ExamTimetableType {
  subject: string;
  date: string;
  startTime: string;
  endTime: string;
}

export interface ExamType {
  _id?: string;
  name: string;
  classId: string;
  description: string;
  startDate: string;
  endDate: string;
  examTimetable: ExamTimetableType[];
}



export interface PeriodType {
  subject: string;
  startTime: string;
  endTime: string;
}

export interface TimetableType {
  day: string;
  periods: PeriodType[];
}


export interface AcademicYearType {
  _id?: string;     
  schoolId: string; 
  name: "2023-24" | "2024-25" | "2025-26";  
  isActive: boolean;   
}
