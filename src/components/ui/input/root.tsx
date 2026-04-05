import { cn } from "@/lib/utils";
import { createContext, memo, useContext, useMemo, useState } from "react";
import { ViewProps } from "react-native";
import { StyledMotiView } from "../styled-moti-view";
import { useUniwindCSS } from "@/components/providers/color-provider";

const inputContext = createContext({
  isFocused: false,
  setIsFocused: (value: boolean) => {},
});

const InputRoot = memo(({ children, className, ...props }: ViewProps) => {
  const { primary, border } = useUniwindCSS();
  const [isFocused, setIsFocused] = useState(false);

  const contextValue = useMemo(
    () => ({ isFocused, setIsFocused }),
    [isFocused],
  );

  return (
    <inputContext.Provider value={contextValue}>
      <StyledMotiView
        animate={{
          borderColor: isFocused ? primary : border,
        }}
        transition={{
          type: "timing",
          duration: 200,
        }}
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
