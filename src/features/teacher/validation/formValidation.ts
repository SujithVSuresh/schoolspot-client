import { emailRegex } from "../../../app/validation/regex";
import { z } from "zod";

export const teacherSigninValidationSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .regex(emailRegex, { message: "Enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const assignmentValidationSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  submissionType: z.enum(["file", "link", "text"], {
    errorMap: () => ({ message: "Submission type is required" }),
  }),
  dueDate: z
      .string()
      .min(1, { message: "Due date is required" })
      .refine(
        (value) => {
          const dueDate = new Date(value);
          const now = new Date();
          return dueDate > now;
        },
        {
          message: "Due date must be in the future",
        }
      ),
});
