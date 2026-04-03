import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Text, TextProps } from "react-native";

type Props = TextProps & VariantProps<typeof textVariant>;

const textVariant = cva("text-base text-foreground font-regular leading-snug", {
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

export default function Typography({
  variant,
  size,
  className,
  children,
  ...props
}: Props) {
  return (
    <Text className={cn(textVariant({ variant, size, className }))} {...props}>
      {children}
    </Text>
  );
}
