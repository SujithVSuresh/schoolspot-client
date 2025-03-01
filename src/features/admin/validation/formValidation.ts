import {z} from 'zod';
import { addressRegex, alphabetOnlyRegex, emailRegex, nameRegex, passwordRegex, phoneNumberRegex, postalCodeRegex, schoolNameRegex, urlRegex } from '../../../app/validation/regex';



export const signupValidationSchema = z.object({
    email: z.string()
        .min(1, {message: "Email is required"})
        .regex(emailRegex, {message: "Enter a valid email address"}),
    password: z.string()
        .min(1, {message: "Password is required"})
        .min(8, { message: "Password must be at least 8 characters long" })
        .regex(passwordRegex.letter, { message: "Password must contain at least one letter" })
        .regex(passwordRegex.lowercase, {message: "Password must contain atleast one lowercase character"})
        .regex(passwordRegex.uppercase, {message: "Password must contain atleast one uppercase character"})
        .regex(passwordRegex.specialChar, {message: "Password must contain atleast one special character"})
        .regex(passwordRegex.spaces, {message: "Pasword must not contain any spaces"}),
    confirmPassword: z.string()
        .min(1, {message: "Confirm password is required"})
}).refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'], 
    message: "Password doesn't match"
})

export const signinValidationSchema = z.object({
    email: z.string()
        .min(1, {message: "Email is required"})
        .regex(emailRegex, {message: "Enter a valid email address"}),
    password: z.string()
        .min(1, {message: "Password is required"})
})


export const resetPasswordValidationSchema = z.object({
    email: z.string()
        .min(1, {message: "Email is required"})
        .regex(emailRegex, {message: "Enter a valid email address"}),
})


export const schoolInfoValidationSchema = z.object({
    schoolName: z.string()
        .min(1, {message: "School's name is required"})
        .regex(schoolNameRegex, {message: "Enter a valid name"}),
    email: z.string()
        .min(1, {message: "Email is required"})
        .regex(emailRegex, {message: "Enter a valid email address"}),
    phoneNumber: z.string()
        .min(1, {message: "Phone number is required"})
        .regex(phoneNumberRegex, {message: "Enter a valid email address"}),
    regNumber: z.string()
        .min(1, {message: "Registration number is required"}),
    yearEstablished: z.coerce
        .number({invalid_type_error: 'Enter a valid year'})
        .min(1900, {message: "Enter a valid year"})
        .max(2099, {message: "Enter a valid year"}),
    principalName: z.string()
        .min(1, {message: "Principal's name is required"})
        .regex(nameRegex, {message: "Enter a valid name"}),
    websiteUrl: z.string()
        .min(1, {message: "Website URL is required"})
        .regex(urlRegex, {message: "Enter a valid url"}),
    totalStudents: z.coerce
        .number({ invalid_type_error: 'Enter a valid number' })
        .min(1, { message: 'This field is required' })
        .max(500, { message: 'Cannot exceed 500 teachers' }),
    totalTeachers: z.coerce
        .number({ invalid_type_error: 'Enter a valid number' })
        .min(1, { message: 'This field is required' })
        .max(3000, { message: 'Cannot exceed 3000 teachers' }),
    board: z.string()
        .min(1, {message: "Board's name is required"})
        .regex(alphabetOnlyRegex, {message: "Enter a valid board name"}),
    city: z.string()
        .min(1, {message: "City name is required"})
        .regex(addressRegex, {message: "Enter a valid city name"}),
    country: z.string()
        .min(1, {message: "Country name is required"})
        .regex(addressRegex, {message: "Enter a valid country name"}),
    state: z.string()
        .min(1, {message: "State name is required"})
        .regex(addressRegex, {message: "Enter a valid state name"}),
    postalCode: z.string()
        .min(1, {message: "Postal code is required"})
        .regex(postalCodeRegex, {message: "Enter a valid postal code"})
})

