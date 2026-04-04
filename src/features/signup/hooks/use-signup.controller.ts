import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignupRequest, signupRequest } from "../schemas/signup.request";
import { useSignupMutation } from "./use-signup.mutation";
import { useSigninMutation } from "@/features/signin/hooks/use-signin.mutation";
import { useAuthStore } from "@/store/auth-store";
import { router } from "expo-router";

export default function useSignupController() {
  const { mutateAsync: signupMutation } = useSignupMutation();
  const { mutateAsync: signinMutation } = useSigninMutation();
  const { signin } = useAuthStore();
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    setFocus,
  } = useForm<SignupRequest>({
    resolver: zodResolver(signupRequest),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignupRequest) => {
    try {
      await signupMutation(data);
      const { token } = await signinMutation({
        email: data.email,
        password: data.password,
      });
      await signin(token);
      router.replace("/home");
    } catch (error) {
      if (__DEV__) {
        // eslint-disable-next-line no-console
        console.error("[SignupController Error]:", error);
      }
    }
  };

  return {
    handleSubmit: handleSubmit(onSubmit),
    control,
    setFocus,
    errors,
    isSubmitting,
  };
}
