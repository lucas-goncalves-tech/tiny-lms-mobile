import { Ionicons } from "@expo/vector-icons";

import { useInput } from "./root";
import { ComponentProps, memo } from "react";
import { cn } from "@/lib/utils";
import { StyledIcons } from "../styled-icons";

const InputIcon = memo(
  ({ size = 20, className, ...props }: ComponentProps<typeof Ionicons>) => {
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
  },
);
InputIcon.displayName = "InputIcon";
export default InputIcon;
