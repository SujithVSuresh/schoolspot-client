export interface TeacherSigninFormType {
    email: string;
    password: string;
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
  school: string;
  subjects?: SubjectType[];
  createdAt?: string;
  updatedAt?: string;
  attendance: {
    presentCount: number;
    absentCount: number;
    date: Date;
  },
  subject?: {
    name: string,
    teacher: string,
    _id: string
  }
}


export interface AddAssignmentType {
  title: string;
  description: string;
  submissionType: 'text' | 'file' | 'link'; 
  dueDate: string; 
  subjectId?: string; 
  classId?: string;  
}

export interface AssignmentType {
  _id: string;
  title: string;
  description: string;
  submissionType: 'text' | 'file' | 'link' | ""; 
  dueDate: string; 
  link?: string;
  createdAt: string;
}


export interface AddStudyMaterialType {
  title: string;
  description: string;
  link?: string;
  fileMaterial?: FileList; 
  subjectId?: string; 
  classId?: string;  
}


export interface StudyMaterialType{
  _id: string;
  title: string;
  description: string;
  createdAt: string; 
  fileUrl: string;
  link: string;
  viewers: {
    _id: string;
    fullName: string;
  }[];
}

export interface AttendanceType {
  student: string;
  class: string;
  status: "Present" | "Absent";
  name?: string;
  roll?: number;
}


export interface StudentDataResponseType {
  _id?: string;
  fullName: string;
  class: string;
  classId: string;
  roll: number;
  section: string;
  profilePhoto: string;
  schoolId?: string;
  user: {
      _id: string
      email: string,
      status: "active" | "inactive" | "deleted" | "blocked";
  }
}

export interface AttendaceResponseType {
  _id?: string;
  student: {
    _id: string;
    name: string;
    roll: number;
  }
  status: "Present" | "Absent";
  createdAt?: Date;
  updatedAt?: Date;  
}


export interface AssignmentSubmissionType {
  _id: string;
  assignmentId: string;
  description: string;
  link: string;
  fileUrl: string;
  grade: string;
  feedback: string;
  status: string;
  createdAt: string;
  submittedAt: string | null;
  student: {
    _id: string;
    fullName: string;
    class: string;
    section: string;
    roll: number;
  };
}

export interface AnnouncementType {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}


