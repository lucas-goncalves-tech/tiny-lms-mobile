import { PropsWithChildren, useEffect, useState } from "react";
import { SplashScreen } from "expo-router";
import { useAuthStore } from "@/store/auth-store";

SplashScreen.preventAutoHideAsync();

export default function AuthInitializer({ children }: PropsWithChildren) {
  const [isReady, setIsReady] = useState(false);
  const { initializeAuth } = useAuthStore();

  useEffect(() => {
    async function prepareApp() {
      await initializeAuth();
      setIsReady(true);
      SplashScreen.hideAsync();
    }

    prepareApp();
  }, [initializeAuth]);

  if (!isReady) {
    return null;
  }
  return <>{children}</>;
}
