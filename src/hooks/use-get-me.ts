import { apiClient } from "@/api/client";
import { useQuery } from "@tanstack/react-query";

export const meQueryKey = ["me"];

export default function useGetMe(enabled: boolean) {
  return useQuery({
    queryKey: meQueryKey,
    queryFn: () => apiClient.get("/auth/me").then((res) => res.data),
    enabled,
    retry: false,
  });
}
