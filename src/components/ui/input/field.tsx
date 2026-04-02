import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { TextInput, TextInputProps } from "react-native";
import { useInput } from "./root";

const InputField = forwardRef<TextInput, TextInputProps>(
  ({ className, onBlur, onFocus, ...props }, ref) => {
    const { setIsFocused } = useInput();

    return (
      <TextInput
        {...props}
        ref={ref}
        onFocus={(e) => {
          setIsFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur?.(e);
        }}
        className={cn("flex-1 text-foreground", className)}
      />
    );
  },
);

InputField.displayName = "Input.Field";

export default InputField;
