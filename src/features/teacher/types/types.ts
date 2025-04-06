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
  school?: string;
  subjects?: SubjectType[];
  createdAt?: string;
  updatedAt?: string
  attendance: {
    presentCount: number;
    absentCount: number;
    date: Date;
  },
  subject: {
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
