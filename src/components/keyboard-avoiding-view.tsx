import { cn } from "@/lib/utils";
import { KeyboardAvoidingView, KeyboardAvoidingViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { withUniwind } from "uniwind";

const StyledKeyboardAvoidingView = withUniwind(KeyboardAvoidingView);

export default function KeyboardView({
  children,
  className,
  keyboardVerticalOffset = 0,
  ...props
}: KeyboardAvoidingViewProps) {
  const insets = useSafeAreaInsets();
  return (
    <StyledKeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset + insets.top}
      className={cn("flex-1 w-full", className)}
      {...props}
    >
      {children}
    </StyledKeyboardAvoidingView>
  );
}
