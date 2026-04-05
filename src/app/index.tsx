import Logo from "@/components/logo";
import { Text, View } from "react-native";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { useAuthStore } from "@/store/auth-store";
import useGetMe from "@/hooks/use-get-me";
import { useEffect, useState } from "react";
import { StyledAnimatedView } from "@/components/ui/styled-animated-view";
import { router } from "expo-router";

export default function SplashScreen() {
  const [animationEnd, setAnimationEnd] = useState(false);
  const { isAuthenticated } = useAuthStore();
  const { isLoading } = useGetMe(isAuthenticated);
  const rotate = useSharedValue(0);

  useEffect(() => {
    rotate.value = withRepeat(
      withTiming(360, { duration: 1000, easing: Easing.linear }),
      -1,
      false,
    );
  }, [rotate]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotate.value}deg` }],
  }));

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
        <StyledAnimatedView style={animatedStyle} className="absolute">
          <View className="size-38 bg-linear-to-r from-75% from-primary to-5% to-secondary rounded-full" />
        </StyledAnimatedView>
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
