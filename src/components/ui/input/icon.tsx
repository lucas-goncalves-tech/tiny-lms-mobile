import { Ionicons } from "@expo/vector-icons";

import { useInput } from "./root";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { StyledIcons } from "../styled-icons";

export default function InputIcon({
  size = 20,
  className,
  ...props
}: ComponentProps<typeof Ionicons>) {
  const { isFocused } = useInput();
  return (
    <StyledIcons
      className={cn(
        `${isFocused ? "text-primary" : "text-muted-foreground"}`,
        className,
      )}
      size={size}
      {...props}
    />
  );
}
