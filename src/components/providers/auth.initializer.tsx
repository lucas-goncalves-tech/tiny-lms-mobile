import { PropsWithChildren, useEffect, useState } from "react";
import { SplashScreen } from "expo-router";

import { useAuthStore } from "@/store/auth-store";
import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";

SplashScreen.preventAutoHideAsync();

export default function AuthInitializer({ children }: PropsWithChildren) {
  const [isReady, setIsReady] = useState(false);
  const { signin, signout } = useAuthStore();

  useEffect(() => {
    async function authCheck() {
      try {
        const token = await SecureStore.getItemAsync("token");
        if (token) {
          const decoded = jwtDecode(token);
          const now = Date.now() / 1000;

          if (decoded.exp && decoded.exp < now) {
            await SecureStore.deleteItemAsync("token");
            signout();
          }
          signin();
        }
      } catch {
        signout();
      } finally {
        setIsReady(true);
      }
    }

    authCheck();
  }, [signin, signout]);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }
  return <>{children}</>;
}
