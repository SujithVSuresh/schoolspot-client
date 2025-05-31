

export interface SuperAdminSigninFormType {
    email: string;
    password: string;
}


export interface PlanType {
  _id?: string;
  name: string;
  price: number;
  durationInDays: number;
  createdAt?: Date;
  updatedAt?: Date;
}


export interface Address {
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

export interface SchoolProfileType {
  _id: string;
  schoolName: string;
  phoneNumber: string;
  regNumber: string;
  yearEstablished: number;
  principalName: string;
  websiteUrl: string;
  totalStudents: number;
  totalTeachers: number;
  board: string;
  address: Address;
}
