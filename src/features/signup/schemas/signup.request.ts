import { zodPasswordValidator } from "@/utils/validators/common-fields.validator";
import { zodSafeEmail } from "@/utils/validators/email.validator";
import { zodSafeString } from "@/utils/validators/string.validator";
import { z } from "zod";

export const signupRequest = z
  .object({
    name: zodSafeString()
      .min(3, "O nome deve ter pelo menos 3 caracteres")
      .max(30, "O nome deve ter no máximo 30 caracteres"),
    email: zodSafeEmail(),
    password: zodPasswordValidator(),
    confirmPassword: zodPasswordValidator("Confirmação de senha"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type SignupRequest = z.infer<typeof signupRequest>;
