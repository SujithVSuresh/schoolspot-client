

export interface StudentUserProfileType {
  _id?: string; 
  roll: number;
  studentId: {
    fullName: string;
    profilePhoto: string;
    _id?: string;
  };
  classId: string;
  userId: string;
}
  