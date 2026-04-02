import { useAuthStore } from "@/store/auth-store";
import { Redirect, Tabs } from "expo-router";

export default function TabsLayout() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) return <Redirect href={"/signin"} />;
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ headerShown: false }} />
    </Tabs>
  );
}
