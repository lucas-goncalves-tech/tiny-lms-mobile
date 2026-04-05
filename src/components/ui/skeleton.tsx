import { cn } from "@/lib/utils";
import { ViewProps } from "react-native";
import { StyledAnimatedView } from "./styled-animated-view";
import { memo, useEffect } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const Skeleton = memo(({ className, ...props }: ViewProps) => {
  const opacity = useSharedValue(0.5);

  useEffect(() => {
    opacity.value = withRepeat(withTiming(1, { duration: 1000 }), -1, true);
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));
  return (
    <StyledAnimatedView
      style={animatedStyle}
      className={cn("bg-muted rounded-base", className)}
      {...props}
    />
  );
});

Skeleton.displayName = "Skeleton";

export default Skeleton;
