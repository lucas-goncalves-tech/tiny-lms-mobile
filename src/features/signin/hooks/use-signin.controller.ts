import { useForm } from "react-hook-form";
import { signinRequest, SignInRequest } from "../schemas/signin.request";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSigninMutation } from "./use-signin.mutation";
import { useAuthStore } from "@/store/auth-store";
import { router } from "expo-router";

export function useSigninController() {
  const { mutateAsync } = useSigninMutation();
  const { signin } = useAuthStore();
  const {
    formState: { errors, isSubmitting },
    control,
    handleSubmit,
  } = useForm<SignInRequest>({
    resolver: zodResolver(signinRequest),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInRequest) => {
    try {
      const res = await mutateAsync(data);
      await signin(res.token);
      router.replace("/home");
    } catch (error) {
      console.warn(error);
    }
  };

  return {
    errors,
    isSubmitting,
    control,
    handleSubmit: handleSubmit(onSubmit),
  };
}
