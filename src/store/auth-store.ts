import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  signin: () => void;
  signout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  signin: () => set({ isAuthenticated: true }),
  signout: () => set({ isAuthenticated: false }),
}));
