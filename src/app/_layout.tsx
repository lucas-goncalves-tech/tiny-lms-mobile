import "../../global.css";

import { Stack } from "expo-router";
import Toaster from "@/components/ui/toast";
import ProvidersWrapper from "@/components/providers/providers-wrapper";
import { UniwindProvider } from "@/components/providers/color-provider";

export default function RootLayout() {
  return (
    <UniwindProvider>
      <ProvidersWrapper>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack>
        <Toaster />
      </ProvidersWrapper>
    </UniwindProvider>
  );
}
