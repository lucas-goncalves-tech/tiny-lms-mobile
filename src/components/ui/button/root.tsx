import { Pressable, PressableProps } from "react-native";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { createContext, memo, useContext } from "react";
import { useScalePress } from "@/hooks/use-scale-press";
import { StyledAnimatedView } from "../styled-animated-view";

export type ButtonVariants = VariantProps<typeof buttonVariants>;
type Props = PressableProps & ButtonVariants;
type ButtonContext = {
  variantState: ButtonVariants["variant"];
};

const buttonContext = createContext<ButtonContext | undefined>(undefined);

const buttonVariants = cva("rounded-base", {
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

const ButtonRoot = memo(
  ({ children, className, variant = "primary", disabled, ...props }: Props) => {
    const { animatedStyle, onPressIn, onPressOut } = useScalePress();

    return (
      <buttonContext.Provider value={{ variantState: variant }}>
        <StyledAnimatedView
          className={cn(
            disabled && "opacity-50",
            buttonVariants({ variant, className }),
          )}
          style={animatedStyle}
        >
          <Pressable
            className="py-3 rounded-base"
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            {...props}
          >
            {children}
          </Pressable>
        </StyledAnimatedView>
      </buttonContext.Provider>
    );
  },
);

ButtonRoot.displayName = "ButtonRoot";

export default ButtonRoot;

export const useButton = () => {
  const context = useContext(buttonContext);
  if (!context) {
    throw new Error("Button childrens must be wraped by a Button.Root");
  }

  return context;
};
