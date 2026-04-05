import { cn } from "@/lib/utils";
import {
  createContext,
  memo,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ViewProps } from "react-native";
import { StyledAnimatedView } from "../styled-animated-view";
import { useUniwindCSS } from "@/components/providers/color-provider";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const inputContext = createContext({
  isFocused: false,
  setIsFocused: (value: boolean) => {},
});

const InputRoot = memo(({ children, className, ...props }: ViewProps) => {
  const { primary, border } = useUniwindCSS();
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = useSharedValue(border);

  const contextValue = useMemo(
    () => ({ isFocused, setIsFocused }),
    [isFocused],
  );

  useEffect(() => {
    borderColor.value = withTiming(isFocused ? primary : border, {
      duration: 200,
    });
  }, [isFocused, borderColor, primary, border]);

  const animatedStyle = useAnimatedStyle(() => ({
    borderColor: borderColor.value,
  }));

  return (
    <inputContext.Provider value={contextValue}>
      <StyledAnimatedView
        style={animatedStyle}
        className={cn(
          `w-full rounded-base border-2 bg-input px-4 py-1 flex-row items-center gap-2`,
          className,
        )}
        {...props}
      >
        {children}
      </StyledAnimatedView>
    </inputContext.Provider>
  );
});

InputRoot.displayName = "InputRoot";

export const useInput = () => {
  const context = useContext(inputContext);
  if (!context) {
    throw new Error("Input childrens must be wrapped by Input.Root");
  }
  return context;
};

export default InputRoot;
