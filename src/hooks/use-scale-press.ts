import { useAnimationState } from "moti";

export function useScalePress() {
  return useAnimationState({
    from: {
      scale: 1,
    },
    pressed: {
      scale: 0.95,
    },
  });
}
