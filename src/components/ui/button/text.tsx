import { cn } from "@/lib/utils";
import { Text, TextProps } from "react-native";
import { cva } from "class-variance-authority";
import { useButton } from "./root";

const textVariants = cva("text-center uppercase", {
  variants: {
    variant: {
      primary: "text-primary-foreground",
      secondary: "text-foreground",
      destructive: "text-destructive-foreground ",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default function ButtonText({
  children,
  className,
  ...props
}: TextProps) {
  const { variantState } = useButton();
  return (
    <Text
      {...props}
      className={cn(textVariants({ className, variant: variantState }))}
    >
      {children}
    </Text>
  );
}
