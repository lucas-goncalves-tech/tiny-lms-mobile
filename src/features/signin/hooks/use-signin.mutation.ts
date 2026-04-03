import { useMutation } from "@tanstack/react-query";
import { SignInRequest } from "../schemas/signin.request";
import { apiClient } from "@/api/client";
import { signinResponse } from "../schemas/signin.response";
import { useToastStore } from "@/store/toast-store";
import { AxiosError } from "axios";

export function useSigninMutation() {
  const { showToast } = useToastStore();
  return useMutation({
    mutationFn: async (data: SignInRequest) => {
      const res = await apiClient.post("/auth/login", data);
      return signinResponse.parse(res.data);
    },
    onSuccess: () =>
      showToast({
        description: "Login realizado com sucesso",
        variant: "success",
      }),
    onError: (e) => {
      if (e instanceof AxiosError) {
        const message = e.response?.data.message ?? "Email/Senha inválidos";
        showToast({ description: message, variant: "destructive" });
      }
    },
  });
}
