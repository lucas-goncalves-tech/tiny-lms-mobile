import { cn } from "@/lib/utils";
import { ViewProps } from "react-native";
import { StyledMotiView } from "./styled-moti-view";
import { memo } from "react";

const Skeleton = memo(({ className, ...props }: ViewProps) => {
  return (
    <StyledMotiView
      from={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "timing",
        duration: 1000,
        loop: true,
        repeatReverse: true,
      }}
      className={cn("bg-muted rounded-base", className)}
      {...props}
    />
  );
});

Skeleton.displayName = "Skeleton";

export default Skeleton;
