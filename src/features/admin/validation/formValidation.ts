import { z } from "zod";
import {
  addressRegex,
  // alphabetOnlyRegex,
  emailRegex,
  nameRegex,
  passwordRegex,
  phoneNumberRegex,
  postalCodeRegex,
  schoolNameRegex,
  urlRegex,
  classRegex,
} from "../../../app/validation/regex";

export const signupValidationSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .regex(emailRegex, { message: "Enter a valid email address" }),
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(passwordRegex.letter, {
        message: "Password must contain at least one letter",
      })
      .regex(passwordRegex.lowercase, {
        message: "Password must contain atleast one lowercase character",
      })
      .regex(passwordRegex.uppercase, {
        message: "Password must contain atleast one uppercase character",
      })
      .regex(passwordRegex.specialChar, {
        message: "Password must contain atleast one special character",
      })
      .regex(passwordRegex.spaces, {
        message: "Pasword must not contain any spaces",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password doesn't match",
  });

export const signinValidationSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .regex(emailRegex, { message: "Enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const resetPasswordEmailValidationSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .regex(emailRegex, { message: "Enter a valid email address" }),
});

export const schoolInfoValidationSchema = z.object({
  schoolName: z
    .string()
    .min(1, { message: "School's name is required" })
    .regex(schoolNameRegex, { message: "Enter a valid name" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .regex(emailRegex, { message: "Enter a valid email address" }),
  phoneNumber: z
    .string()
    .min(1, { message: "Phone number is required" })
    .regex(phoneNumberRegex, { message: "Enter a valid email phone number" }),
  regNumber: z.string().min(1, { message: "Registration number is required" }),
  yearEstablished: z.coerce
    .number({ invalid_type_error: "Enter a valid year" })
    .min(1900, { message: "Enter a valid year" })
    .max(2099, { message: "Enter a valid year" }),
  principalName: z
    .string()
    .min(1, { message: "Principal's name is required" })
    .regex(nameRegex, { message: "Enter a valid name" }),
  websiteUrl: z
    .string()
    .min(1, { message: "Website URL is required" })
    .regex(urlRegex, { message: "Enter a valid url" }),
  totalStudents: z.coerce
    .number({ invalid_type_error: "Enter a valid number" })
    .min(1, { message: "This field is required" })
    .max(3000, { message: "Cannot exceed 3000 teachers" }),
  totalTeachers: z.coerce
    .number({ invalid_type_error: "Enter a valid number" })
    .min(1, { message: "This field is required" })
    .max(500, { message: "Cannot exceed 500 teachers" }),
  board: z
    .string()
    .min(1, { message: "Board's name is required" }),
  academicYear: z
    .string()
    .min(1, { message: "Academic Year is required" }),
  city: z
    .string()
    .min(1, { message: "City name is required" })
    .regex(addressRegex, { message: "Enter a valid city name" }),
  country: z
    .string()
    .min(1, { message: "Country name is required" })
    .regex(addressRegex, { message: "Enter a valid country name" }),
  state: z
    .string()
    .min(1, { message: "State name is required" })
    .regex(addressRegex, { message: "Enter a valid state name" }),
  postalCode: z
    .string()
    .min(1, { message: "Postal code is required" })
    .regex(postalCodeRegex, { message: "Enter a valid postal code" }),
});

export const resetPasswordValidationSchema = z
  .object({
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(passwordRegex.letter, {
        message: "Password must contain at least one letter",
      })
      .regex(passwordRegex.lowercase, {
        message: "Password must contain atleast one lowercase character",
      })
      .regex(passwordRegex.uppercase, {
        message: "Password must contain atleast one uppercase character",
      })
      .regex(passwordRegex.specialChar, {
        message: "Password must contain atleast one special character",
      })
      .regex(passwordRegex.spaces, {
        message: "Pasword must not contain any spaces",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password doesn't match",
  });

export const studentValidationSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .regex(emailRegex, { message: "Enter a valid email address" }),
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(passwordRegex.letter, {
        message: "Password must contain at least one letter",
      })
      .regex(passwordRegex.lowercase, {
        message: "Password must contain atleast one lowercase character",
      })
      .regex(passwordRegex.uppercase, {
        message: "Password must contain atleast one uppercase character",
      })
      .regex(passwordRegex.specialChar, {
        message: "Password must contain atleast one special character",
      })
      .regex(passwordRegex.spaces, {
        message: "Pasword must not contain any spaces",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
    fullName: z
      .string()
      .min(1, { message: "Full name is required" })
      .regex(nameRegex, { message: "Enter a valid name" }),
    profilePhoto: z
      .instanceof(FileList)
      .refine((files) => files.length > 0, "Image is required")
      .refine((files) => files[0]?.size < 5 * 1024 * 1024, "File size must be under 5MB")
      .refine(
        (files) => ["image/jpeg", "image/png"].includes(files[0]?.type),
        "Only JPEG and PNG images are allowed"
      ),
    gender: z.enum(["male", "female"], {
        errorMap: () => ({ message: "Gender is required" }),
      }),
    dob: z  
      .string()
      .min(1, { message: "Date of birth is required" }),
    fatherName: z  
      .string()
      .min(1, { message: "Father's name is required" })
      .regex(nameRegex, { message: "Enter a valid name" }),
    motherName: z  
      .string()
      .min(1, { message: "Mother's name is required" })
      .regex(nameRegex, { message: "Enter a valid name" }),
    parentContactNumber: z  
      .string()
      .min(1, { message: "Phone number is required" })
      .regex(phoneNumberRegex, { message: "Enter a valid email phone number" }),
    parentEmailAddress: z
      .string()
      .min(1, { message: "Email is required" })
      .regex(emailRegex, { message: "Enter a valid email address" }),
    admissionNo: z
      .string()
      .min(1, { message: "Admission no is required" }),
    address: z
      .string()
      .min(1, { message: "Address is required" })
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password doesn't match",
  });


  export const studentUpdateValidationSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .regex(emailRegex, { message: "Enter a valid email address" }),
    fullName: z
      .string()
      .min(1, { message: "Full name is required" })
      .regex(nameRegex, { message: "Enter a valid name" }),
    profilePhoto: z
      .instanceof(FileList)
      .optional(),
    gender: z.enum(["male", "female"], {
        errorMap: () => ({ message: "Gender is required" }),
      }),
    dob: z  
      .string()
      .min(1, { message: "Date of birth is required" }),
    fatherName: z  
      .string()
      .min(1, { message: "Father's name is required" })
      .regex(nameRegex, { message: "Enter a valid name" }),
    motherName: z  
      .string()
      .min(1, { message: "Mother's name is required" })
      .regex(nameRegex, { message: "Enter a valid name" }),
    contactNumber: z  
      .string()
      .min(1, { message: "Phone number is required" })
      .regex(phoneNumberRegex, { message: "Enter a valid email phone number" }),
    roll: z.coerce  
      .number({ invalid_type_error: "Enter a valid roll number" })
      .min(1, { message: "This field is required" })
      .max(100, { message: "Enter a valid experience" }),
    address: z
      .string()
      .min(1, { message: "Address is required" })
  })



  export const teacherValidationSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .regex(emailRegex, { message: "Enter a valid email address" }),
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(passwordRegex.letter, {
        message: "Password must contain at least one letter",
      })
      .regex(passwordRegex.lowercase, {
        message: "Password must contain atleast one lowercase character",
      })
      .regex(passwordRegex.uppercase, {
        message: "Password must contain atleast one uppercase character",
      })
      .regex(passwordRegex.specialChar, {
        message: "Password must contain atleast one special character",
      })
      .regex(passwordRegex.spaces, {
        message: "Pasword must not contain any spaces",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
    fullName: z
      .string()
      .min(1, { message: "Full name is required" })
      .regex(nameRegex, { message: "Enter a valid name" }),
    profilePhoto: z
      .instanceof(FileList)
      .refine((files) => files.length > 0, "Image is required")
      .refine((files) => files[0]?.size < 5 * 1024 * 1024, "File size must be under 5MB")
      .refine(
        (files) => ["image/jpeg", "image/png"].includes(files[0]?.type),
        "Only JPEG and PNG images are allowed"
      ),
    subjectSpecialized: z  
      .string()
      .min(1, { message: "Subject specialized is required" })
      .regex(nameRegex, { message: "Enter a valid subject" }),
    qualification: z  
      .string()
      .min(1, { message: "Qualification is required" })
      .regex(nameRegex, { message: "Enter a valid qualification" }),
    experience: z.coerce
      .number({ invalid_type_error: "Enter a valid experience" })
      .min(1, { message: "This field is required" })
      .max(50, { message: "Enter a valid experience" }),
    phoneNumber: z  
      .string()
      .min(1, { message: "Phone number is required" })
      .regex(phoneNumberRegex, { message: "Enter a valid email phone number" }),

  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password doesn't match",
  });


  
  export const teacherUpdateValidationSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .regex(emailRegex, { message: "Enter a valid email address" }),
    fullName: z
      .string()
      .min(1, { message: "Full name is required" })
      .regex(nameRegex, { message: "Enter a valid name" }),
    profilePhoto: z
      .instanceof(FileList)
      .optional(),
    subjectSpecialized: z  
      .string()
      .min(1, { message: "Subject specialized is required" })
      .regex(nameRegex, { message: "Enter a valid subject" }),
    qualification: z  
      .string()
      .min(1, { message: "Qualification is required" })
      .regex(nameRegex, { message: "Enter a valid qualification" }),
    experience: z.coerce
      .number({ invalid_type_error: "Enter a valid experience" })
      .min(1, { message: "This field is required" })
      .max(50, { message: "Enter a valid experience" }),
    phoneNumber: z  
      .string()
      .min(1, { message: "Phone number is required" })
      .regex(phoneNumberRegex, { message: "Enter a valid email phone number" }),
  })


  export const classValidationSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, { message: "Class name is required" })
      .regex(classRegex, { message: "Enter a valid class" }),
    section: z
      .string()
      .trim()
      .min(1, { message: "Section is required" })
      .regex(nameRegex, { message: "Enter a valid section" }),
    teacher: z  
      .string()
      .trim()
      .min(1, { message: "This field is required" })
  })


  export const adminProfileValidationSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(1, { message: "Full name is required" })
      .regex(nameRegex, { message: "Enter a valid name" }),
    phoneNumber: z
      .string()
      .trim()
      .min(1, { message: "Phone number is required" })
      .regex(phoneNumberRegex, { message: "Enter a valid phone number" }),
  })



  export const announcementSchema = z.object({
    title: z.string().trim().min(1, { message: "Title is required" }),
    content: z.string().trim().min(1, { message: "Content is required" }),
    sendTo: z.array(z.string()).min(1, { message: "At least one tag is required" }).optional()
  });


  export const subjectSchema = z.object({
    name: z.string().trim().min(1, { message: "Subject name is required" }),
    teacher: z.string().trim().min(1, { message: "Choose a teacher for the subject" }),
  });


  export const invoiceSchema = z.object({
    title: z.string().min(1, "Title is required"),
    dueDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    }),
    feeBreakdown: z.array(
      z.object({
        feeType: z.string().min(1, "Fee type is required"),
        amount: z.number().min(0, "Amount must be at least 0"),
      })
    ).min(1, "At least one fee breakdown item is required").optional(),
    totalAmount: z.number().min(0, "Total amount must be at least 0"),
    remarks: z.string().optional(),
  });