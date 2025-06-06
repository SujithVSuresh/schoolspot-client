export interface StudentValidationSchemaType {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  profilePhoto: FileList;
  gender: "male" | "female";
  dob: string;
  fatherName: string;
  motherName: string;
  parentContactNumber: string;
  parentEmailAddress: string;
  admissionNo: string;
  address: string;
}


export interface StudentListType {
  _id: string;
  fullName: string;
  profilePhoto: string;
  admissionNo: string;
  fatherName: string;
  motherName: string;
  parentContactNumber: string;
  parentEmailAddress: string;
  userId: {
      _id: string;
      email: string;
      status: "active" | "inactive" | "deleted" | "blocked";
  }
}
interface AcademicProfile {
  name: string;
  roll: number;
  section: string;
  _id: string;
}

interface School {
  schoolId: string; 
  schoolName: string;
  _id: string;
}

interface User {
  email: string;
  status: "active" | "inactive";
  _id: string;
}

export interface StudentProfileType {
  _id: string;
  fullName: string;
  admissionNo: string;
  dob: string; 
  gender: "male" | "female" | "other";
  fatherName: string;
  motherName: string;
  address: string;
  parentContactNumber: string;
  parentEmailAddress: string;
  profilePhoto: string;
  academicProfile: AcademicProfile;
  schoolId: School;
  userId: User;
}



export interface StudentAcademicProfileListType {
  _id: string;
  studentId: {
    _id: string
    fullName: string;
    profilePhoto: string;
  }
  userId: string
  academicYear: string;
  roll: number;
  classId: string
}

export interface StudentAcademicProfileWithUserType {
  _id: string;
  studentId: string;
  userId: string;
  academicYear: string;
  roll: number;
  classId: {
    _id: string;
    name: string;
    section: string;
  };
}
