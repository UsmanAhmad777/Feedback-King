import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(600, "Message must not be longer than 600 characters"),
});
