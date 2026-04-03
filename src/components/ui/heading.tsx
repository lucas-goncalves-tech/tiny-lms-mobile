import { Text, TextProps } from "react-native";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

type Props = TextProps & VariantProps<typeof headingVariants>;

const headingVariants = cva("text-foreground leading-tight", {
  variants: {
    size: {
      "4xl": "text-4xl",
      "3xl": "text-3xl",
      "2xl": "text-2xl",
      xl: "text-xl",
      lg: "text-lg",
    },
    weight: {
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
  },
  defaultVariants: {
    size: "xl",
    weight: "bold",
  },
});

export default function Heading({
  size,
  weight,
  className,
  children,
  ...props
}: Props) {
  return (
    <Text
      className={cn(headingVariants({ size, weight, className }))}
      {...props}
    >
      {children}
    </Text>
  );
}
