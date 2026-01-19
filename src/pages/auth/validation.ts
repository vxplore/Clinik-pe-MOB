import { z } from "zod";

export const loginSchema = z.object({
  id: z.string().min(1, "ID is required"),
  password: z.string().min(4, "Password must be at least 4 characters"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;