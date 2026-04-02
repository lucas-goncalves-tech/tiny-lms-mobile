import { cn } from "@/lib/utils";
import { createContext, useContext, useState } from "react";
import { View, ViewProps } from "react-native";

const inputContext = createContext({
  isFocused: false,
  setIsFocused: (value: boolean) => {},
});

export default function InputRoot({
  children,
  className,
  ...props
}: ViewProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <inputContext.Provider value={{ isFocused, setIsFocused }}>
      <View
        className={cn(
          "w-full rounded-base border border-border bg-input px-4 py-2 flex-row items-center gap-2 ",
          className,
        )}
        {...props}
      >
        {children}
      </View>
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
