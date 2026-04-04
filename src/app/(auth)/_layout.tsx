import { useAuthStore } from "@/store/auth-store";
import { Redirect, Stack } from "expo-router";
import { useCSSVariable } from "uniwind";

export default function AuthLayout() {
  const { isAuthenticated } = useAuthStore();
  const [primary] = useCSSVariable(["--color-primary"]) as string[];

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
