import { useMutation } from "@tanstack/react-query";
import { SignInRequest } from "../schemas/signin.request";
import { apiClient } from "@/api/client";
import { signinResponse } from "../schemas/signin.response";

export function useSigninMutation() {
  return useMutation({
    mutationFn: async (data: SignInRequest) => {
      const res = await apiClient.post("/auth/login", data);
      return signinResponse.parse(res.data);
    },
  });
}
