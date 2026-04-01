import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Text, TextProps } from "react-native";

type Props = TextProps & VariantProps<typeof mutedVariants>;

const mutedVariants = cva("text-muted-foreground", {
  variants: {
    size: {
      xl: "text-xl",
      lg: "text-lg",
      md: "text-base",
    },
    weight: {
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "lg",
    weight: "semibold",
  },
});

export default function Muted({
  size,
  weight,
  className,
  children,
  ...props
}: Props) {
  return (
    <Text className={cn(mutedVariants({ size, weight, className }))} {...props}>
      {children}
    </Text>
  );
}
