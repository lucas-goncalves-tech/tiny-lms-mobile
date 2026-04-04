import { DefaultTheme, Theme } from "@react-navigation/native";
import { useCSSVariable } from "uniwind";

export function useNavigationTheme(): Theme {
  const [primary, background, card, text, border, fontSans] = useCSSVariable([
    "--primary",
    "--background",
    "--header-background",
    "--foreground",
    "--border",
    "--font-sans",
  ]) as string[];

  return {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: primary || DefaultTheme.colors.primary,
      background: background || DefaultTheme.colors.background,
      card: card || DefaultTheme.colors.card,
      text: text || DefaultTheme.colors.text,
      border: border || DefaultTheme.colors.border,
    },
    fonts: {
      ...DefaultTheme.fonts,
      regular: { fontFamily: fontSans, fontWeight: "400" },
      medium: { fontFamily: fontSans, fontWeight: "500" },
      bold: { fontFamily: fontSans, fontWeight: "700" },
      heavy: { fontFamily: fontSans, fontWeight: "900" },
    },
  };
}
