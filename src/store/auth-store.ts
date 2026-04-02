import { create } from "zustand";
import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";

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
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000;

        if (decoded.exp && decoded.exp < now) {
          await get().signout();
          return;
        }
        await get().signin(token);
      }
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
