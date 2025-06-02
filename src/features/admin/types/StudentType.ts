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
    user: {
        _id: string
        email: string,
        status: "active" | "inactive" | "deleted" | "blocked";
    }
}
