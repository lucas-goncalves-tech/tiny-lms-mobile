import { withUniwind } from "uniwind";
import { MotiView } from "moti";
import { Pressable, PressableProps } from "react-native";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { createContext, useContext } from "react";
import { useScalePress } from "@/hooks/use-scale-press";

export type ButtonVariants = VariantProps<typeof buttonVariants>;
type Props = PressableProps & ButtonVariants;
type ButtonContext = {
  variantState: ButtonVariants["variant"];
};

const buttonContext = createContext<ButtonContext | undefined>(undefined);

const StyledView = withUniwind(MotiView);

const buttonVariants = cva("rounded-base py-3", {
  variants: {
    variant: {
      primary: "button-gradient",
      secondary: "bg-card border-border border-2",
      destructive: "bg-destructive",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default function ButtonRoot({
  children,
  className,
  variant = "primary",
  disabled,
  ...props
}: Props) {
  const scaleState = useScalePress();

  return (
    <buttonContext.Provider value={{ variantState: variant }}>
      <StyledView
        className={cn(
          disabled && "opacity-50",
          buttonVariants({ variant, className }),
        )}
        state={scaleState}
      >
        <Pressable
          onPressIn={() => scaleState.transitionTo("pressed")}
          onPressOut={() => scaleState.transitionTo("from")}
          {...props}
        >
          {children}
        </Pressable>
      </StyledView>
    </buttonContext.Provider>
  );
}

export const useButton = () => {
  const context = useContext(buttonContext);
  if (!context) {
    throw new Error("Button childrens must be wraped by a Button.Root");
  }

  return context;
};
