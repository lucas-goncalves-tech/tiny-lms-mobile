import { Text, TextProps } from "react-native";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { memo } from "react";

type Props = TextProps & VariantProps<typeof headingVariants>;

const headingVariants = cva("text-foreground", {
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

const Heading = memo(
  ({ size, weight, className, children, ...props }: Props) => {
    const styles = headingVariants({ size, weight, className });
    return (
      <Text className={cn(styles)} {...props}>
        {children}
      </Text>
    );
  },
);
Heading.displayName = "Heading";
export default Heading;
