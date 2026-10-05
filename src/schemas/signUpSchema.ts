import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(3, "Username must be at least 3 character ")
  .max(20, "Username can't be longer than 20 character");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be 6 charecter long" }),
});
