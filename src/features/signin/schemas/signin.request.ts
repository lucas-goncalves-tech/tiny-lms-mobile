import { zodPasswordValidator } from "@/utils/validators/common-fields.validator";
import { zodSafeEmail } from "@/utils/validators/email.validator";
import { z } from "zod";

export const signinRequest = z.object({
  email: zodSafeEmail(),
  password: zodPasswordValidator(),
});

export type SignInRequest = z.infer<typeof signinRequest>;
