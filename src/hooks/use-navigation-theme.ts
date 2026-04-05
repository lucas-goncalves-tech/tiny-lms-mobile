import { useUniwindCSS } from "@/components/providers/color-provider";
import { DefaultTheme, Theme } from "@react-navigation/native";
import { useMemo } from "react";

export function useNavigationTheme(): Theme {
  const theme = useUniwindCSS();

  return useMemo(
    () => ({
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: theme.primary || DefaultTheme.colors.primary,
        background: theme.background || DefaultTheme.colors.background,
        card: theme.headerBackground || DefaultTheme.colors.card,
        text: theme.foreground || DefaultTheme.colors.text,
        border: theme.border || DefaultTheme.colors.border,
      },
      fonts: {
        ...DefaultTheme.fonts,
        regular: { fontFamily: theme.fontSans, fontWeight: "400" },
        medium: { fontFamily: theme.fontSans, fontWeight: "500" },
        bold: { fontFamily: theme.fontSans, fontWeight: "700" },
        heavy: { fontFamily: theme.fontSans, fontWeight: "900" },
      },
    }),
    [theme],
  );
}
