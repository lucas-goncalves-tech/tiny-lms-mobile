import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@react-navigation/native";
import { useNavigationTheme } from "@/hooks/use-navigation-theme";
import AuthInitializer from "./auth.initializer";

const queryClient = new QueryClient();

export default function ProvidersWrapper({ children }: PropsWithChildren) {
  const theme = useNavigationTheme();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={theme}>
        <AuthInitializer>{children}</AuthInitializer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
