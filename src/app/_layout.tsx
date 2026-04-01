import AuthInitializer from "@/components/providers/auth.initializer";
import "../../global.css";

import { Stack } from "expo-router";
import { useCSSVariable } from "uniwind";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout() {
  const [headerBackground, foreground, background] = useCSSVariable([
    "--header-background",
    "--foreground",
    "--background",
  ]) as string[];
  return (
    <QueryClientProvider client={queryClient}>
      <AuthInitializer>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: headerBackground,
            },
            headerTintColor: foreground,
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: background,
            },
          }}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)/signin" options={{ headerShown: false }} />
        </Stack>
      </AuthInitializer>
    </QueryClientProvider>
  );
}
