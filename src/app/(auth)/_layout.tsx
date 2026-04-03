import { useAuthStore } from "@/store/auth-store";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) return <Redirect href={"/home"} />;
  return (
    <Stack>
      <Stack.Screen name="signin" options={{ headerShown: false }} />
      <Stack.Screen name="signup" />
    </Stack>
  );
}
