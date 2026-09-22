import { z } from "zod";

export const createPostSchema = z.object({
  title: z.string().min(1).max(300),
  description: z.string().min(1),
});
