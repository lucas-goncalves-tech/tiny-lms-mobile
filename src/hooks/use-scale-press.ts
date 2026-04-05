import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export function useScalePress() {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return {
    animatedStyle,
    onPressIn: () => {
      scale.value = withTiming(0.95, {
        duration: 200,
        easing: Easing.inOut(Easing.ease),
      });
    },
    onPressOut: () => {
      scale.value = withTiming(1, {
        duration: 200,
        easing: Easing.inOut(Easing.ease),
      });
    },
  };
}
