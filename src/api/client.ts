import axios from "axios";
import { env } from "@/config/env.config";
import * as SecureStore from "expo-secure-store";
import { router } from "expo-router";

export const apiClient = axios.create({
  baseURL: env.EXPO_PUBLIC_API_URL,
});

apiClient.interceptors.request.use(async (config) => {
  try {
    const token = await SecureStore.getItemAsync("token");
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
      try {
        await SecureStore.deleteItemAsync("token");
        router.replace("/signin");
      } catch (error) {
        console.warn("Error clearing token:", error);
      }
    }
    return Promise.reject(error);
  },
);
