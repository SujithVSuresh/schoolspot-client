import { emailRegex } from "../../../app/validation/regex";
import {z} from 'zod'


export const teacherSigninValidationSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .regex(emailRegex, { message: "Enter a valid email address" }),
    password: z.string().min(1, { message: "Password is required" }),
  });