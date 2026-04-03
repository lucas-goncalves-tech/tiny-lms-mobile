import AuthInitializer from "@/components/providers/auth.initializer";
import "../../global.css";

import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@react-navigation/native";
import { useNavigationTheme } from "@/hooks/use-navigation-theme";
import Toaster from "@/components/ui/toast";

const queryClient = new QueryClient();

export default function RootLayout() {
  const theme = useNavigationTheme();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={theme}>
        <AuthInitializer>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          </Stack>
          <Toaster />
        </AuthInitializer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
