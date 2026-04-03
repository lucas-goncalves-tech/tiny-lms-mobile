import { cn } from "@/lib/utils";
import { createContext, useContext, useEffect, useState } from "react";
import { ViewProps } from "react-native";
import { StyledMotiView } from "../styled-moti-view";
import { useAnimationState } from "moti";
import { useCSSVariable } from "uniwind";

const inputContext = createContext({
  isFocused: false,
  setIsFocused: (value: boolean) => {},
});

export default function InputRoot({
  children,
  className,
  ...props
}: ViewProps) {
  const [borderColor, primaryColor] = useCSSVariable([
    "--color-border",
    "--color-primary",
  ]) as string[];
  const [isFocused, setIsFocused] = useState(false);
  const borderState = useAnimationState({
    from: {
      borderColor: borderColor,
    },
    focused: {
      borderColor: primaryColor,
    },
  });

  useEffect(() => {
    borderState.transitionTo(isFocused ? "focused" : "from");
  }, [borderState, isFocused]);

  return (
    <inputContext.Provider value={{ isFocused, setIsFocused }}>
      <StyledMotiView
        state={borderState}
        className={cn(
          `w-full rounded-base border-2 bg-input px-4 py-1 flex-row items-center gap-2`,
          className,
        )}
        {...props}
      >
        {children}
      </StyledMotiView>
    </inputContext.Provider>
  );
}

export const useInput = () => {
  const context = useContext(inputContext);
  if (!context) {
    throw new Error("Input childrens must be wrapped by Input.Root");
  }
  return context;
};
