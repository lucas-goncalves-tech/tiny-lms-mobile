import { cn } from "@/lib/utils";
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
} from "react-native";
import { withUniwind } from "uniwind";

const StyledKeyboardAvoidingView = withUniwind(KeyboardAvoidingView);

export default function KeyboardView({
  children,
  className,
  keyboardVerticalOffset = 0,
  ...props
}: KeyboardAvoidingViewProps) {
  return (
    <StyledKeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
      className={cn("flex-1 w-full", className)}
      {...props}
    >
      {children}
    </StyledKeyboardAvoidingView>
  );
}
