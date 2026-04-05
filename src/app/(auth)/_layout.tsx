import { useAuthStore } from "@/store/auth-store";
import { Redirect, Stack } from "expo-router";
import { useUniwindCSS } from "@/components/providers/color-provider";

export default function AuthLayout() {
  const { isAuthenticated } = useAuthStore();
  const { primary } = useUniwindCSS();

  if (isAuthenticated) return <Redirect href={"/home"} />;
  return (
    <Stack>
      <Stack.Screen name="signin" options={{ headerShown: false }} />
      <Stack.Screen
        name="signup"
        options={{
          title: "Tiny LMS",
          headerTitleStyle: {
            color: primary,
          },
        }}
      />
    </Stack>
  );
}
