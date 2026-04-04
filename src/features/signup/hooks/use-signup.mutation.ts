import { useMutation } from "@tanstack/react-query";
import { SignupRequest } from "../schemas/signup.request";
import { apiClient } from "@/api/client";
import { useToastStore } from "@/store/toast-store";
import { AxiosError } from "axios";

export function useSignupMutation() {
  const { showToast } = useToastStore();
  return useMutation({
    mutationFn: async (data: SignupRequest) => {
      const res = await apiClient.post("/auth/register", data);
      return res.data;
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        showToast({
          description: error.response?.data.message || error.message,
          variant: "destructive",
        });
      }
    },
  });
}
