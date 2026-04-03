import { ToastVariants } from "@/components/ui/toast";
import { ViewProps } from "react-native";
import { create } from "zustand";

type ToastState = {
  duration?: number;
  description: string;
  className?: ViewProps["className"];
  variant?: ToastVariants["variant"];
  isOpen: boolean;
  showToast: (props: ToastProps) => void;
};
type ToastProps = Pick<
  ToastState,
  "duration" | "description" | "className" | "variant"
>;

let timer: number | null = null;
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useToastStore = create<ToastState>((set, get) => ({
  duration: 2000,
  description: "",
  className: "",
  variant: "default",
  isOpen: false,
  showToast: async (props: ToastProps) => {
    if (timer) {
      set({ isOpen: false });
      await delay(150);
      clearTimeout(timer);
    }

    set({ isOpen: true, ...props });

    timer = setTimeout(() => {
      set({ isOpen: false });
    }, get().duration);
  },
}));
