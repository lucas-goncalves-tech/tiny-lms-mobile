import { createContext, PropsWithChildren, useContext, useMemo } from "react";
import { useCSSVariable } from "uniwind";

type UniwindCSSProps = {
  primary: string;
  border: string;
  muted: string;
  background: string;
  headerBackground: string;
  foreground: string;
  fontSans: string;
};

const ColorContext = createContext<UniwindCSSProps | null>(null);

export function UniwindProvider({ children }: PropsWithChildren) {
  const [
    primary,
    background,
    headerBackground,
    foreground,
    border,
    muted,
    fontSans,
  ] = useCSSVariable([
    "--primary",
    "--background",
    "--header-background",
    "--foreground",
    "--border",
    "--color-muted-foreground",
    "--font-sans",
  ]) as string[];

  const value = useMemo(
    () => ({
      primary,
      background,
      headerBackground,
      foreground,
      border,
      muted,
      fontSans,
    }),
    [
      primary,
      background,
      headerBackground,
      foreground,
      border,
      muted,
      fontSans,
    ],
  );

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
}

export const useUniwindCSS = () => {
  const context = useContext(ColorContext);
  if (!context)
    throw new Error("useUiColors must be used within ColorProvider");
  return context;
};
