import "../../global.css";

import { Stack } from "expo-router";
import { useCSSVariable } from "uniwind";

export default function RootLayout() {
  const [headerBackground, foreground, background] = useCSSVariable([
    "--header-background",
    "--foreground",
    "--background",
  ]) as string[];
  return (
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
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </Stack>
  );
}
