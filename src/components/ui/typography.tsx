import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { memo } from "react";
import { Text, TextProps } from "react-native";

type Props = TextProps & VariantProps<typeof textVariant>;

const textVariant = cva("text-base text-foreground font-regular", {
  variants: {
    variant: {
      default: "",
      destructive: "text-destructive font-medium",
      link: "text-primary font-bold",
      muted: "text-muted-foreground",
      lead: "text-muted-foreground font-semibold ",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "base",
  },
});

const Typography = memo(
  ({ variant, size, className, children, ...props }: Props) => {
    const styles = textVariant({ variant, size, className });
    return (
      <Text className={cn(styles)} {...props}>
        {children}
      </Text>
    );
  },
);
Typography.displayName = "Typography";
export default Typography;
