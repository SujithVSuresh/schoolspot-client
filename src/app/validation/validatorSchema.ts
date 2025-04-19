import {z} from 'zod'
import { passwordRegex } from './regex';

export const changePasswordSchema = z.object({
    oldPassword: z
      .string()
      .min(1, { message: "Current password is required" }),
    newPassword: z
      .string()
      .min(1, { message: "New password is required" })
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
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password doesn't match",
  });