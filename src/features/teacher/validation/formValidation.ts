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


export const studyMaterialValidationSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  link: z
      .string()
      .url({ message: "Invalid URL format" })
      .optional()
      .or(z.literal("")), // allow empty string
  fileMaterial: z
      .instanceof(FileList)
      .optional()
      .refine(
        (files) => !files || files.length === 0 || files[0]?.size < 5 * 1024 * 1024,
        "File size must be under 5MB"
      )
      .refine(
        (files) =>
          !files || files.length === 0 || 
          ["image/jpeg", "image/png", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(
            files[0]?.type
          ),
        "Only JPEG, PNG, PDF, DOC, and DOCX files are allowed"
      )

});



export const announcementSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().min(1, { message: "Content is required" }),
});
