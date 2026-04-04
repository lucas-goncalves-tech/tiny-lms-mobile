import { create } from "zustand";
import * as SecureStore from "expo-secure-store";

export const TOKEN_KEY = "ACCESS_TOKEN";

interface AuthState {
  isAuthenticated: boolean;
  initializeAuth: () => Promise<void>;
  signin: (token: string) => Promise<void>;
  signout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  isAuthenticated: false,
  initializeAuth: async () => {
    try {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      if (token) {
        return set({ isAuthenticated: true });
      }
      set({ isAuthenticated: false });
    } catch {
      await get().signout();
    }
  },
  signin: async (token: string) => {
    await SecureStore.setItemAsync(TOKEN_KEY, token);
    set({ isAuthenticated: true });
  },
  signout: async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    set({ isAuthenticated: false });
  },
}));
