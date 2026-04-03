import { useToastStore } from "@/store/toast-store";
import Typography from "./typography";
import { StyledMotiView } from "./styled-moti-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatePresence } from "moti";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Ionicons } from "@expo/vector-icons";
import { StyledIcons } from "./styled-icons";

export type ToastVariants = VariantProps<typeof toastVariants>;
export type ToastIcons = Record<
  NonNullable<ToastVariants["variant"]>,
  keyof typeof Ionicons.glyphMap
>;

const toastVariants = cva(
  "absolute z-50 self-center rounded-base px-4 py-2 flex-row gap-2 items-center",
  {
    variants: {
      variant: {
        default: "bg-card border border-foreground",
        success: "bg-green-600 border border-green-700",
        destructive: "bg-destructive border border-red-700",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

const icons: ToastIcons = {
  success: "checkmark-done",
  destructive: "ban-outline",
  default: "information-circle",
};

export default function Toaster() {
  const { isOpen, description, className, variant } = useToastStore();
  const insets = useSafeAreaInsets();

  return (
    <AnimatePresence>
      {isOpen && (
        <StyledMotiView
          className={cn(toastVariants({ variant }), className)}
          from={{
            translateY: -99,
          }}
          animate={{
            translateY: 0,
          }}
          exit={{
            translateY: -99,
          }}
          style={{ top: insets.top + 20, elevation: 100 }}
        >
          <StyledIcons
            name={icons[variant!]}
            className="text-foreground text-lg"
          />
          <Typography>{description}</Typography>
        </StyledMotiView>
      )}
    </AnimatePresence>
  );
}
