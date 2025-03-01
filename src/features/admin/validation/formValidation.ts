import {z} from 'zod';
import { emailRegex, passwordRegex } from '../../../app/validation/regex';

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

