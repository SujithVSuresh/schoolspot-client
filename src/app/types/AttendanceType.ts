
export interface AttendanceResponseType {
  _id?: string;
  student: string;
  studentProfile: {
    _id: string;
    fullName: string;
    profilePhoto: string;
  };
  academicProfile: {
    _id: string;
    roll: number
  };
  class: string;
  status?: "Present" | "Absent";
  recordedBy: string;
  schoolId: string;
  createdAt?: Date;
  updatedAt?: Date;  
}
