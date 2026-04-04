// src/components/ui/screen-scroll.tsx
import { cn } from "@/lib/utils";
import { ScrollView, ScrollViewProps } from "react-native";

export function ScreenScroll({
  children,
  className,
  contentContainerClassName,
  ...props
}: ScrollViewProps) {
  return (
    <ScrollView
      className={cn("content-px flex-1", className)}
      contentContainerClassName={cn(
        "gap-12 justify-center items-center grow",
        contentContainerClassName,
      )}
      keyboardShouldPersistTaps="handled"
      {...props}
    >
      {children}
    </ScrollView>
  );
}
