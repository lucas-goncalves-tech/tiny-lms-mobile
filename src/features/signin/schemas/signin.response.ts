import z from "zod";

export const signinResponse = z.object({
  token: z.string(),
});
