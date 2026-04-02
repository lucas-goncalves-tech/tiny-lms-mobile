import axios from "axios";
import { env } from "@/config/env.config";
import * as SecureStore from "expo-secure-store";
import { TOKEN_KEY, useAuthStore } from "@/store/auth-store";

export const apiClient = axios.create({
  baseURL: env.EXPO_PUBLIC_API_URL,
});

apiClient.interceptors.request.use(async (config) => {
  try {
    const token = await SecureStore.getItemAsync(TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    return Promise.reject(error);
  }
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest?.url?.includes("/auth")
    ) {
      await useAuthStore.getState().signout();
    }
    return Promise.reject(error);
  },
);
