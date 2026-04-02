import Logo from "@/components/logo";
import { Text, View } from "react-native";
import { withUniwind } from "uniwind";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";
import { useAuthStore } from "@/store/auth-store";
import useGetMe from "@/hooks/use-get-me";
import { Redirect, router } from "expo-router";
import { useEffect, useState } from "react";

const StyledMotiView = withUniwind(MotiView);

export default function SplashScreen() {
  const [animationEnd, setAnimationEnd] = useState(false);
  const { isAuthenticated } = useAuthStore();
  const { isLoading } = useGetMe(isAuthenticated);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationEnd(true);
    }, 1500);

    if (!isLoading && isAuthenticated !== undefined && animationEnd) {
      router.replace(isAuthenticated ? "/home" : "/signin");
    }

    return () => clearTimeout(timer);
  }, [isLoading, isAuthenticated, animationEnd]);

  return (
    <View className="items-center justify-center flex-1 gap-8">
      <View className="relative items-center justify-center ">
        <StyledMotiView
          key="spin-animation"
          from={{ rotate: "0deg" }}
          animate={{ rotate: "360deg" }}
          transition={{
            type: "timing",
            duration: 1000,
            loop: true,
            repeatReverse: false,
            easing: Easing.linear,
          }}
          className="absolute"
        >
          <View className="size-38 bg-linear-to-r from-primary to-secondary rounded-full" />
        </StyledMotiView>
        <View className="bg-background rounded-full size-34 items-center justify-center">
          <Logo />
        </View>
      </View>
      <View>
        <Text className="text-foreground text-2xl font-bold">Tiny LMS</Text>
      </View>
    </View>
  );
}
